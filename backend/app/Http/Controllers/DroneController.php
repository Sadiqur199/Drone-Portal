<?php

namespace App\Http\Controllers;

use App\Models\Drone;
use Illuminate\Http\Request;

class DroneController extends Controller
{
    /**
     * Get the drone profile of the authenticated user.
     */
    public function profile(Request $request)
    {
        $user = $request->user();
        
        if (! $user->drone_id) {
            return response()->json([
                'error' => 'No drone associated with this account.'
            ], 404);
        }

        $drone = Drone::find($user->drone_id);

        if (! $drone) {
            return response()->json([
                'error' => 'Drone profile not found.'
            ], 404);
        }

        return response()->json($drone);
    }
}
