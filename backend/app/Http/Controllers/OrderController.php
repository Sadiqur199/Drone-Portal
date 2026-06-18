<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\OrderItem;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class OrderController extends Controller
{
    /**
     * Store a new parts order.
     */
    public function store(Request $request)
    {
        $request->validate([
            'full_name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'phone' => 'required|string|max:30',
            'address' => 'required|string',
            'total_price' => 'required|numeric',
            'cart' => 'required|json', // We'll receive cart as a JSON string from frontend due to FormData file upload
            'bank_transfer_proof' => 'required|file|image|max:5120', // Limit to 5MB image
        ]);

        $cart = json_decode($request->cart, true);

        if (empty($cart)) {
            return response()->json([
                'message' => 'Cart is empty.'
            ], 422);
        }

        DB::beginTransaction();

        try {
            // Upload proof file
            $proofPath = null;
            if ($request->hasFile('bank_transfer_proof')) {
                $file = $request->file('bank_transfer_proof');
                $filename = time() . '_' . $file->getClientOriginalName();
                $proofPath = $file->storeAs('proofs', $filename, 'public');
            }

            // Create Order
            $order = Order::create([
                'user_id' => $request->user()->id,
                'full_name' => $request->full_name,
                'email' => $request->email,
                'phone' => $request->phone,
                'address' => $request->address,
                'bank_transfer_proof' => $proofPath,
                'total_price' => $request->total_price,
                'status' => 'Pending',
            ]);

            // Create Order Items
            foreach ($cart as $item) {
                OrderItem::create([
                    'order_id' => $order->id,
                    'part_id' => $item['id'],
                    'part_name' => $item['name'],
                    'price' => $item['price'],
                ]);
            }

            DB::commit();

            return response()->json([
                'message' => 'Order placed successfully.',
                'order' => $order->load('items'),
            ], 201);

        } catch (\Exception $e) {
            DB::rollBack();
            Log::error('Order placement failed: ' . $e->getMessage());
            
            return response()->json([
                'message' => 'Failed to place order. Please try again.',
                'error' => $e->getMessage()
            ], 500);
        }
    }
}
