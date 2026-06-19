<?php

namespace App\Http\Controllers;

use App\Models\Drone;
use Illuminate\Http\Request;

class AdminDroneController extends Controller
{
    /**
     * Update the entire drone profile (Specs, details, and all JSON configs).
     */
    public function updateDroneProfile(Request $request)
    {
        $request->validate([
            'drone_id' => 'required|string|exists:drones,id',
            'fields' => 'required|array',
            'items' => 'required|array',
        ]);

        $drone = Drone::findOrFail($request->drone_id);
        $fields = $request->input('fields');
        $items = $request->input('items');

        $drone->update([
            'customer_name' => $fields['customer_name'] ?? $drone->customer_name,
            'customer_initials' => $fields['customer_initials'] ?? $drone->customer_initials,
            'company_name' => $fields['company_name'] ?? $drone->company_name,
            'location' => $fields['location'] ?? $drone->location,
            'model_name' => $fields['model_name'] ?? $drone->model_name,
            'model_code' => $fields['model_code'] ?? $drone->model_code,
            'serial_number' => $fields['serial_number'] ?? $drone->serial_number,
            'registration_number' => $fields['registration_number'] ?? $drone->registration_number,
            'purchase_date' => $fields['purchase_date'] ?? $drone->purchase_date,
            'purchased_from' => $fields['purchased_from'] ?? $drone->purchased_from,
            'warranty_expires' => $fields['warranty_expires'] ?? $drone->warranty_expires,
            'warranty_status' => $fields['warranty_status'] ?? $drone->warranty_status,
            'warranty_remaining' => $fields['warranty_remaining'] ?? $drone->warranty_remaining,
            'firmware_version' => $fields['firmware_version'] ?? $drone->firmware_version,
            'firmware_status' => $fields['firmware_status'] ?? $drone->firmware_status,
            'next_service_due' => $fields['next_service_due'] ?? $drone->next_service_due,
            'last_serviced' => $fields['last_serviced'] ?? $drone->last_serviced,
            'flight_hours' => $fields['flight_hours'] ?? $drone->flight_hours,
            'battery_sets' => $fields['battery_sets'] ?? $drone->battery_sets,
            'image_url' => $fields['image_url'] ?? $drone->image_url,
            'maintenance_alert' => $fields['maintenance_alert'] ?? $drone->maintenance_alert,
            'warranty_period' => $fields['warranty_period'] ?? $drone->warranty_period,
            
            'specs' => $items['specs'] ?? $drone->specs,
            'dashboard_stats' => $items['dashboard_stats'] ?? $drone->dashboard_stats,
            'checklist_items' => $items['checklist_items'] ?? $drone->checklist_items,
            'component_health' => $items['component_health'] ?? $drone->component_health,
            'service_history' => $items['service_history'] ?? $drone->service_history,
            'accessories' => $items['accessories'] ?? $drone->accessories,
            'technical_specifications' => $items['technical_specifications'] ?? $drone->technical_specifications,
            'documents' => $items['documents'] ?? $drone->documents,
            'tutorial_videos' => $items['tutorial_videos'] ?? $drone->tutorial_videos,
            'troubleshoot_issues' => $items['troubleshoot_issues'] ?? $drone->troubleshoot_issues,
            'part_sections' => $items['part_sections'] ?? $drone->part_sections,
            'support_categories' => $items['support_categories'] ?? $drone->support_categories,
        ]);

        return response()->json([
            'message' => 'Drone profile updated successfully.',
            'drone' => $drone
        ]);
    }

    /**
     * Add or update tutorials for the drone.
     */
    public function updateTutorials(Request $request)
    {
        $request->validate([
            'drone_id' => 'required|string|exists:drones,id',
        ]);

        $drone = Drone::findOrFail($request->drone_id);
        $tutorials = $drone->tutorial_videos ?? [];

        // If items are passed as an array (JSON editor list), overwrite the list
        if ($request->has('items') && is_array($request->input('items'))) {
            $tutorials = $request->input('items');
        }

        // If form fields are provided to add a new tutorial
        $fields = $request->input('fields', []);
        if (!empty($fields['title'])) {
            $nextId = count($tutorials) > 0 ? max(array_column($tutorials, 'id')) + 1 : 1;
            $tutorials[] = [
                'id' => $nextId,
                'category' => $fields['category'] ?? 'Getting Started',
                'title' => $fields['title'],
                'description' => $fields['description'] ?? '',
                'duration' => $fields['duration'] ?? '',
                'videoUrl' => $fields['video_url'] ?? '',
                'thumbnail' => $fields['thumbnail'] ?? '',
            ];
        }

        $drone->tutorial_videos = $tutorials;
        $drone->save();

        return response()->json([
            'message' => 'Tutorials updated successfully.',
            'tutorial_videos' => $drone->tutorial_videos
        ]);
    }

    /**
     * Add or update troubleshooting issues.
     */
    public function updateTroubleshoot(Request $request)
    {
        $request->validate([
            'drone_id' => 'required|string|exists:drones,id',
        ]);

        $drone = Drone::findOrFail($request->drone_id);
        $issues = $drone->troubleshoot_issues ?? [];

        // If items are passed as a full issues array, overwrite it
        $items = $request->input('items', []);
        if (is_array($items) && !empty($items) && isset($items[0]['title'])) {
            $issues = $items;
        }

        // If form fields are provided to add a new troubleshooting issue
        $fields = $request->input('fields', []);
        if (!empty($fields['title'])) {
            $nextId = count($issues) > 0 ? max(array_column($issues, 'id')) + 1 : 1;
            
            // For troubleshoot, items payload holds the steps array of strings
            $steps = $request->input('items', []);
            if (!is_array($steps)) {
                $steps = [];
            }

            $issues[] = [
                'id' => $nextId,
                'title' => $fields['title'],
                'icon' => $fields['icon'] ?? 'Wrench',
                'description' => $fields['description'] ?? '',
                'steps' => $steps,
                'video' => $fields['video'] ?? '',
            ];
        }

        $drone->troubleshoot_issues = $issues;
        $drone->save();

        return response()->json([
            'message' => 'Troubleshoot issues updated successfully.',
            'troubleshoot_issues' => $drone->troubleshoot_issues
        ]);
    }

    /**
     * Add or update parts sections.
     */
    public function updateParts(Request $request)
    {
        $request->validate([
            'drone_id' => 'required|string|exists:drones,id',
        ]);

        $drone = Drone::findOrFail($request->drone_id);
        $sections = $drone->part_sections ?? [];

        $fields = $request->input('fields', []);
        $items = $request->input('items', []);

        // If fields.section_title is present, add a new parts section
        if (!empty($fields['section_title'])) {
            $nextId = count($sections) > 0 ? max(array_column($sections, 'id')) + 1 : 1;

            $partsInput = is_array($items) ? $items : [];
            $parts = [];
            foreach ($partsInput as $idx => $p) {
                $parts[] = [
                    'id' => time() + $idx,
                    'name' => $p['name'] ?? ($p['part_name'] ?? ''),
                    'price' => (float)($p['price'] ?? 0),
                    'stock' => isset($p['stock']) ? (bool)$p['stock'] : true,
                ];
            }

            // Fallback: If no parts in items, but single part fields are present in form
            if (empty($parts) && !empty($fields['part_name'])) {
                $parts[] = [
                    'id' => time(),
                    'name' => $fields['part_name'],
                    'price' => (float)($fields['price'] ?? 0),
                    'stock' => ($fields['stock'] === 'true' || $fields['stock'] === true),
                ];
            }

            $sections[] = [
                'id' => $nextId,
                'title' => $fields['section_title'],
                'position' => [
                    'top' => $fields['top'] ?? '50%',
                    'left' => $fields['left'] ?? '50%',
                ],
                'parts' => $parts,
            ];

            $drone->part_sections = $sections;
            $drone->save();
        } elseif (is_array($items) && !empty($items) && isset($items[0]['title'])) {
            // Overwrite list if list of sections is sent directly
            $drone->part_sections = $items;
            $drone->save();
        }

        return response()->json([
            'message' => 'Parts updated successfully.',
            'part_sections' => $drone->part_sections
        ]);
    }

    /**
     * Add or update guides (documents).
     */
    public function updateGuides(Request $request)
    {
        $request->validate([
            'drone_id' => 'required|string|exists:drones,id',
        ]);

        $drone = Drone::findOrFail($request->drone_id);
        $documents = $drone->documents ?? [];

        $fields = $request->input('fields', []);
        $items = $request->input('items', []);

        // If items are passed as a full list (e.g. 2D array of [title, summary, url] or list of objects), map them
        if (is_array($items) && !empty($items)) {
            $newDocs = [];
            foreach ($items as $item) {
                if (is_array($item)) {
                    // Check if it is a sequential array [title, summary, file_url]
                    if (isset($item[0])) {
                        $newDocs[] = [
                            'name' => $item[0],
                            'type' => $item[1] ?? 'PDF Document',
                            'url' => $item[2] ?? '',
                        ];
                    } else {
                        // Assoc array
                        $newDocs[] = [
                            'name' => $item['name'] ?? ($item['title'] ?? ''),
                            'type' => $item['type'] ?? ($item['summary'] ?? ''),
                            'url' => $item['url'] ?? ($item['file_url'] ?? ($item['contentUrl'] ?? '')),
                        ];
                    }
                }
            }
            if (!empty($newDocs)) {
                $documents = $newDocs;
            }
        }

        // If a new guide is submitted via form fields
        if (!empty($fields['title'])) {
            $documents[] = [
                'name' => $fields['title'],
                'type' => $fields['summary'] ?? 'PDF Document',
                'url' => $fields['file_url'] ?? '',
            ];
        }

        $drone->documents = $documents;
        $drone->save();

        return response()->json([
            'message' => 'Guides/Documents updated successfully.',
            'documents' => $drone->documents
        ]);
    }

    /**
     * Add or update checklists.
     */
    public function updateChecklists(Request $request)
    {
        $request->validate([
            'drone_id' => 'required|string|exists:drones,id',
        ]);

        $drone = Drone::findOrFail($request->drone_id);
        $checklists = $drone->checklist_items ?? [];

        $fields = $request->input('fields', []);
        $items = $request->input('items', []);

        // If full checklist array is sent, update it
        if (is_array($items) && !empty($items)) {
            $checklists = $items;
        }

        // If form fields are provided to add a new checklist item
        if (!empty($fields['task'])) {
            $checklists[] = [
                $fields['task'],
                $fields['status'] ?? 'Upcoming',
                $fields['badge_class'] ?? 'bg-blue-100 text-blue-700'
            ];
        }

        $drone->checklist_items = $checklists;
        $drone->save();

        return response()->json([
            'message' => 'Checklists updated successfully.',
            'checklist_items' => $drone->checklist_items
        ]);
    }

    /**
     * Add or update shared content.
     */
    public function updateSharedContent(Request $request)
    {
        $request->validate([
            'drone_id' => 'required|string|exists:drones,id',
        ]);

        $drone = Drone::findOrFail($request->drone_id);
        $history = $drone->service_history ?? [];
        $documents = $drone->documents ?? [];

        $fields = $request->input('fields', []);
        $items = $request->input('items', []);

        // If items list of shared content is sent, overwrite
        if (is_array($items) && !empty($items)) {
            // Re-build/sync documents and history as required
            $newDocs = [];
            $newHistory = [];
            foreach ($items as $item) {
                $title = $item['title'] ?? '';
                $desc = $item['description'] ?? '';
                $url = $item['contentUrl'] ?? ($item['content_url'] ?? '');

                if (!empty($title)) {
                    $newHistory[] = [$title, $desc];
                    $newDocs[] = [
                        'name' => $title,
                        'type' => $desc,
                        'url' => $url,
                    ];
                }
            }

            // Sync with existing (avoid duplicating if seeder values exist, or merge them)
            if (!empty($newDocs)) {
                // Filter out previous matching name-docs and history titles
                $existingDocNames = array_column($documents, 'name');
                foreach ($newDocs as $doc) {
                    if (!in_array($doc['name'], $existingDocNames)) {
                        $documents[] = $doc;
                    }
                }

                $existingHistoryTitles = array_column($history, 0);
                foreach ($newHistory as $hist) {
                    if (!in_array($hist[0], $existingHistoryTitles)) {
                        $history[] = $hist;
                    }
                }
            }
        }

        // If form fields are provided to add a new shared item
        if (!empty($fields['title'])) {
            $title = $fields['title'];
            $description = $fields['description'] ?? 'Full policy document';
            $url = $fields['content_url'] ?? '';

            // Add to service history
            $history[] = [$title, $description];

            // Add to documents
            $documents[] = [
                'name' => $title,
                'type' => $description,
                'url' => $url,
            ];
        }

        $drone->service_history = $history;
        $drone->documents = $documents;
        $drone->save();

        return response()->json([
            'message' => 'Shared content uploaded successfully.',
            'service_history' => $drone->service_history,
            'documents' => $drone->documents
        ]);
    }
}
