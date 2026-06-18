<?php

namespace Database\Seeders;

use App\Models\Drone;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // 1. Seed Drones
        
        // common support categories
        $commonSupportCategories = [
            [
                'id' => 1,
                'title' => 'Firmware Updates',
                'description' => 'Step-by-step instructions using the DJI Agras mobile app',
                'video' => 'https://www.youtube.com/embed/dQw4w9WgXcQ',
            ],
            [
                'id' => 2,
                'title' => 'Chemical Compatibility',
                'description' => 'Approved chemical types and tank compatibility guidelines',
                'video' => 'https://www.youtube.com/embed/M7lc1UVf-VE',
            ],
            [
                'id' => 3,
                'title' => 'Warranty Claims',
                'description' => "What's covered and how to submit a warranty request",
                'video' => 'https://www.youtube.com/embed/ysz5S6PUM-U',
            ],
            [
                'id' => 4,
                'title' => 'Propeller Maintenance',
                'description' => 'Inspection checklist and replacement recommendations',
                'video' => 'https://www.youtube.com/embed/jNQXAC9IVRw',
            ],
        ];

        // T50 Drone Data
        Drone::create([
            'id' => 't50',
            'customer_name' => 'Judy Zhu',
            'customer_initials' => 'JZ',
            'company_name' => 'Australian Agritech',
            'location' => 'Perth, WA',
            'model_name' => 'DJI Agras T50',
            'model_code' => 'T50',
            'serial_number' => '7741-WA-T50',
            'registration_number' => 'WA-AGT-5021',
            'purchase_date' => '14 January 2025',
            'purchased_from' => 'Australia Agritech, Perth WA',
            'warranty_expires' => '14 January 2027',
            'warranty_status' => 'Active',
            'warranty_remaining' => '622 days remaining',
            'firmware_version' => 'v10.01.0300',
            'firmware_status' => 'Up to date',
            'next_service_due' => 'Sep 2025',
            'last_serviced' => '3 Mar 2025',
            'flight_hours' => '128.4 hrs',
            'battery_sets' => '4 packs',
            'image_url' => '/drone.png',
            'specs' => [
                ['Serial Number', '7741-WA-T50'],
                ['Purchase Date', '14 January 2025'],
                ['Warranty Expires', '14 January 2027'],
                ['Tank Capacity', '40L Spray'],
                ['Effective Spray Width', '4-11m'],
                ['Max Coverage', '18 ha/hr'],
            ],
            'dashboard_stats' => [
                ['Warranty Status', 'Active', 'Expires 14 Jan 2027', 'text-green-600'],
                ['Firmware Version', 'V10.01.03', 'Up to date', 'text-slate-900'],
                ['Next Service Due', 'Sep 2025', 'Recommended', 'text-slate-900'],
                ['Last Serviced', '3 Mar 2025', 'Annual Check', 'text-slate-900'],
            ],
            'checklist_items' => [
                ['Flush spray system with clean water', 'Done', 'bg-green-100 text-green-700'],
                ['Calibrate RTK antenna alignment', 'Overdue', 'bg-red-100 text-red-700'],
                ['Inspect nozzle wear patterns', 'This Week', 'bg-orange-100 text-orange-700'],
                ['Battery storage charge', 'Upcoming', 'bg-blue-100 text-blue-700'],
            ],
            'component_health' => [
                ['Motors', 92],
                ['Spray Pump', 78],
                ['Battery Pack 1', 85],
                ['Battery Pack 2', 62],
                ['Propellers', 44],
            ],
            'maintenance_alert' => 'Propellers due for replacement - visit Parts to order',
            'warranty_period' => '14 Jan 2025 - 14 Jan 2027',
            'service_history' => [
                ['Annual service completed', '3 March 2025'],
                ['Book next service', 'Recommended by Sep 2025'],
                ['T50 User Manual', 'PDF - 18.4 MB'],
                ['Warranty Terms & Conditions', 'Full policy document'],
            ],
            'accessories' => [
                ['Remote controller', 'DJI RC Plus 2'],
                ['Batteries', '2 x DB2160'],
                ['Charger', 'C12000 Charging Hub'],
                ['Nozzles', '8 x standard + 2 spare'],
                ['RTK antenna', 'D-RTK 2 mobile station'],
            ],
            'technical_specifications' => [
                ['Max takeoff weight', '79.8 kg'],
                ['Tank capacity', '40 L spray + 50 L spreading'],
                ['Max spray flow rate', '16 L/min'],
                ['Effective spray width', '4-11 m adjustable'],
                ['Max operating speed', '10 m/s spray mode'],
                ['Max coverage', '18 ha/hr'],
                ['IP rating', 'IP67'],
                ['Operating temperature', '-10C to 50C'],
            ],
            'documents' => [
                ['name' => 'T50 User Manual', 'type' => 'PDF - 18.4 MB'],
                ['name' => 'Quick start guide', 'type' => 'PDF - 2.1 MB'],
                ['name' => 'Warranty certificate', 'type' => 'PDF - 0.4 MB'],
                ['name' => 'Parts diagram (T50)', 'type' => 'PDF - 5.8 MB'],
            ],
            'tutorial_videos' => [
                [
                    'id' => 1,
                    'category' => 'Getting Started',
                    'title' => 'DJI Agras T50 First Flight Setup',
                    'description' => 'Unboxing, calibration and first mission',
                    'duration' => '4:32',
                    'videoUrl' => 'https://www.youtube.com/embed/dQw4w9WgXcQ',
                    'thumbnail' => '/tutorials/t50-1.jpg',
                ],
                [
                    'id' => 2,
                    'category' => 'Getting Started',
                    'title' => 'Connecting to DJI Agras App',
                    'description' => 'Pair controller and configure the aircraft',
                    'duration' => '5:14',
                    'videoUrl' => 'https://www.youtube.com/embed/M7lc1UVf-VE',
                    'thumbnail' => '/tutorials/t50-2.jpg',
                ],
                [
                    'id' => 3,
                    'category' => 'Operations',
                    'title' => 'T50 Spray Rate Calibration',
                    'description' => 'Configure flow rate and nozzle settings',
                    'duration' => '3:47',
                    'videoUrl' => 'https://www.youtube.com/embed/ysz5S6PUM-U',
                    'thumbnail' => '/tutorials/t50-3.jpg',
                ],
                [
                    'id' => 4,
                    'category' => 'Maintenance',
                    'title' => 'T50 Pump Maintenance',
                    'description' => 'Inspect and maintain spray pump system',
                    'duration' => '6:10',
                    'videoUrl' => 'https://www.youtube.com/embed/jNQXAC9IVRw',
                    'thumbnail' => '/tutorials/t50-4.jpg',
                ],
            ],
            'troubleshoot_issues' => [
                [
                    'id' => 1,
                    'title' => 'T50 will not power on',
                    'icon' => 'Power',
                    'description' => 'Check DB2160 battery seating, power button sequence and aircraft battery charge.',
                    'steps' => [
                        'Confirm both battery locks are fully engaged',
                        'Hold the aircraft power button for the full startup sequence',
                        'Try a fully charged DB2160 battery set',
                    ],
                    'video' => 'https://www.youtube.com/embed/dQw4w9WgXcQ',
                ],
                [
                    'id' => 2,
                    'title' => 'T50 RTK signal not locking',
                    'icon' => 'Radio',
                    'description' => 'Inspect D-RTK placement, antenna alignment and network correction status.',
                    'steps' => [
                        'Move the RTK station to a clear open area',
                        'Check antenna alignment and cable connection',
                        'Restart RTK correction in the Agras app',
                    ],
                    'video' => 'https://www.youtube.com/embed/M7lc1UVf-VE',
                ],
                [
                    'id' => 3,
                    'title' => 'T50 spray pump pressure drop',
                    'icon' => 'Droplets',
                    'description' => 'Check filter blockage, tank level and pump calibration before starting another mission.',
                    'steps' => [
                        'Clean the inline filter and nozzle screens',
                        'Run pump calibration from the controller',
                        'Inspect hose fittings for air leaks',
                    ],
                    'video' => 'https://www.youtube.com/embed/ysz5S6PUM-U',
                ],
                [
                    'id' => 4,
                    'title' => 'DB2160 battery will not charge',
                    'icon' => 'BatteryCharging',
                    'description' => 'Verify charger status, battery temperature and connector condition.',
                    'steps' => [
                        'Let the battery return to normal temperature',
                        'Inspect charger pins for dirt or damage',
                        'Try another charger channel',
                    ],
                    'video' => 'https://www.youtube.com/embed/jNQXAC9IVRw',
                ],
            ],
            'part_sections' => [
                [
                    'id' => 1,
                    'title' => 'Propeller Parts',
                    'position' => ['top' => '35%', 'left' => '12%'],
                    'parts' => [
                        ['id' => 101, 'name' => 'Front Left Propeller', 'price' => 89, 'stock' => true],
                        ['id' => 102, 'name' => 'Propeller Mount', 'price' => 25, 'stock' => true],
                    ],
                ],
                [
                    'id' => 2,
                    'title' => 'Motor Assembly',
                    'position' => ['top' => '33%', 'left' => '28%'],
                    'parts' => [
                        ['id' => 201, 'name' => 'Brushless Motor', 'price' => 295, 'stock' => true],
                        ['id' => 202, 'name' => 'Motor Housing', 'price' => 95, 'stock' => true],
                    ],
                ],
                [
                    'id' => 3,
                    'title' => 'RTK Module',
                    'position' => ['top' => '18%', 'left' => '50%'],
                    'parts' => [
                        ['id' => 301, 'name' => 'RTK Antenna', 'price' => 120, 'stock' => true],
                    ],
                ],
                [
                    'id' => 4,
                    'title' => 'Spray System',
                    'position' => ['top' => '58%', 'left' => '48%'],
                    'parts' => [
                        ['id' => 401, 'name' => 'Spray Pump', 'price' => 295, 'stock' => true],
                        ['id' => 402, 'name' => 'Nozzle Kit', 'price' => 64, 'stock' => true],
                        ['id' => 403, 'name' => 'Inline Filter', 'price' => 38, 'stock' => true],
                    ],
                ],
            ],
            'support_categories' => $commonSupportCategories,
        ]);

        // T40 Drone Data
        Drone::create([
            'id' => 't40',
            'customer_name' => 'Rahim Ahmed',
            'customer_initials' => 'RA',
            'company_name' => 'Green Field Farms',
            'location' => 'Khulna, Bangladesh',
            'model_name' => 'DJI Agras T40',
            'model_code' => 'T40',
            'serial_number' => 'BD-2219-T40',
            'registration_number' => 'BD-AGR-4018',
            'purchase_date' => '10 March 2024',
            'purchased_from' => 'Aagri Tech Bangladesh',
            'warranty_expires' => '10 March 2026',
            'warranty_status' => 'Active',
            'warranty_remaining' => '265 days remaining',
            'firmware_version' => 'v09.04.1200',
            'firmware_status' => 'Update available',
            'next_service_due' => 'Jul 2026',
            'last_serviced' => '12 Feb 2026',
            'flight_hours' => '246.8 hrs',
            'battery_sets' => '3 packs',
            'image_url' => '/drone.png',
            'specs' => [
                ['Serial Number', 'BD-2219-T40'],
                ['Purchase Date', '10 March 2024'],
                ['Warranty Expires', '10 March 2026'],
                ['Tank Capacity', '40L Spray'],
                ['Effective Spray Width', '4-10m'],
                ['Max Coverage', '16 ha/hr'],
            ],
            'dashboard_stats' => [
                ['Warranty Status', 'Active', 'Expires 10 Mar 2026', 'text-green-600'],
                ['Firmware Version', 'V09.04.12', 'Update available', 'text-orange-600'],
                ['Next Service Due', 'Jul 2026', 'Recommended', 'text-slate-900'],
                ['Last Serviced', '12 Feb 2026', 'Pump check', 'text-slate-900'],
            ],
            'checklist_items' => [
                ['Flush spray system with clean water', 'Done', 'bg-green-100 text-green-700'],
                ['Replace worn nozzle set', 'This Week', 'bg-orange-100 text-orange-700'],
                ['Check battery cycle count', 'Upcoming', 'bg-blue-100 text-blue-700'],
                ['Install firmware update', 'Overdue', 'bg-red-100 text-red-700'],
            ],
            'component_health' => [
                ['Motors', 88],
                ['Spray Pump', 73],
                ['Battery Pack 1', 76],
                ['Battery Pack 2', 69],
                ['Nozzles', 52],
            ],
            'maintenance_alert' => 'Firmware update and nozzle check recommended',
            'warranty_period' => '10 Mar 2024 - 10 Mar 2026',
            'service_history' => [
                ['Pump inspection completed', '12 February 2026'],
                ['Book next service', 'Recommended by Jul 2026'],
                ['T40 User Manual', 'PDF - 16.9 MB'],
                ['Warranty Terms & Conditions', 'Full policy document'],
            ],
            'accessories' => [
                ['Remote controller', 'DJI RC Plus'],
                ['Batteries', '2 x DB1560'],
                ['Charger', 'T40 Intelligent Charger'],
                ['Nozzles', '8 x atomised + 2 spare'],
                ['RTK antenna', 'D-RTK 2 mobile station'],
            ],
            'technical_specifications' => [
                ['Max takeoff weight', '50 kg'],
                ['Tank capacity', '40 L spray + 50 L spreading'],
                ['Max spray flow rate', '12 L/min'],
                ['Effective spray width', '4-10 m adjustable'],
                ['Max operating speed', '10 m/s spray mode'],
                ['Max coverage', '16 ha/hr'],
                ['IP rating', 'IPX6K'],
                ['Operating temperature', '0C to 45C'],
            ],
            'documents' => [
                ['name' => 'T40 User Manual', 'type' => 'PDF - 16.9 MB'],
                ['name' => 'Quick start guide', 'type' => 'PDF - 1.9 MB'],
                ['name' => 'Warranty certificate', 'type' => 'PDF - 0.4 MB'],
                ['name' => 'Parts diagram (T40)', 'type' => 'PDF - 5.2 MB'],
            ],
            'tutorial_videos' => [
                [
                    'id' => 1,
                    'category' => 'Getting Started',
                    'title' => 'DJI Agras T40 Setup Guide',
                    'description' => 'Controller pairing and startup',
                    'duration' => '3:58',
                    'videoUrl' => 'https://www.youtube.com/embed/dQw4w9WgXcQ',
                    'thumbnail' => '/tutorials/t40-1.jpg',
                ],
                [
                    'id' => 2,
                    'category' => 'Operations',
                    'title' => 'T40 Flight Planning',
                    'description' => 'Create efficient routes for spraying',
                    'duration' => '5:40',
                    'videoUrl' => 'https://www.youtube.com/embed/M7lc1UVf-VE',
                    'thumbnail' => '/tutorials/t40-2.jpg',
                ],
                [
                    'id' => 3,
                    'category' => 'Maintenance',
                    'title' => 'T40 Nozzle Maintenance',
                    'description' => 'Cleaning and replacing nozzles',
                    'duration' => '6:20',
                    'videoUrl' => 'https://www.youtube.com/embed/ysz5S6PUM-U',
                    'thumbnail' => '/tutorials/t40-3.jpg',
                ],
                [
                    'id' => 4,
                    'category' => 'Troubleshooting',
                    'title' => 'Firmware Update Issues',
                    'description' => 'Fix common firmware update problems',
                    'duration' => '7:15',
                    'videoUrl' => 'https://www.youtube.com/embed/jNQXAC9IVRw',
                    'thumbnail' => '/tutorials/t40-4.jpg',
                ],
            ],
            'troubleshoot_issues' => [
                [
                    'id' => 1,
                    'title' => 'T40 controller will not pair',
                    'icon' => 'Gamepad2',
                    'description' => 'Rebind the RC Plus controller and verify the aircraft is in pairing mode.',
                    'steps' => [
                        'Open pairing mode from the controller settings',
                        'Keep controller and aircraft within two metres',
                        'Restart both devices and try binding again',
                    ],
                    'video' => 'https://www.youtube.com/embed/dQw4w9WgXcQ',
                ],
                [
                    'id' => 2,
                    'title' => 'T40 firmware update stuck',
                    'icon' => 'Cpu',
                    'description' => 'Check internet connection, storage space and battery level before retrying the update.',
                    'steps' => [
                        'Connect the controller to a stable network',
                        'Keep aircraft and controller batteries above 50%',
                        'Clear update cache and download firmware again',
                    ],
                    'video' => 'https://www.youtube.com/embed/M7lc1UVf-VE',
                ],
                [
                    'id' => 3,
                    'title' => 'T40 atomised nozzles uneven',
                    'icon' => 'Droplets',
                    'description' => 'Inspect nozzle wear, clean the atomised discs and confirm spray calibration.',
                    'steps' => [
                        'Clean each atomised nozzle assembly',
                        'Replace worn nozzle discs',
                        'Run spray rate calibration after cleaning',
                    ],
                    'video' => 'https://www.youtube.com/embed/ysz5S6PUM-U',
                ],
                [
                    'id' => 4,
                    'title' => 'T40 battery drains quickly',
                    'icon' => 'BatteryCharging',
                    'description' => 'Review battery cycle count, temperature and mission load for abnormal drain.',
                    'steps' => [
                        'Check battery health in the Agras app',
                        'Avoid takeoff with cold batteries',
                        'Compare drain across both DB1560 packs',
                    ],
                    'video' => 'https://www.youtube.com/embed/jNQXAC9IVRw',
                ],
            ],
            'part_sections' => [
                [
                    'id' => 1,
                    'title' => 'Propeller Parts',
                    'position' => ['top' => '35%', 'left' => '12%'],
                    'parts' => [
                        ['id' => 1101, 'name' => 'T40 Propeller Pair', 'price' => 78, 'stock' => true],
                        ['id' => 1102, 'name' => 'Propeller Clamp', 'price' => 22, 'stock' => true],
                    ],
                ],
                [
                    'id' => 2,
                    'title' => 'Motor Assembly',
                    'position' => ['top' => '33%', 'left' => '28%'],
                    'parts' => [
                        ['id' => 1201, 'name' => 'T40 Brushless Motor', 'price' => 260, 'stock' => true],
                        ['id' => 1202, 'name' => 'Motor Arm Cover', 'price' => 74, 'stock' => false],
                    ],
                ],
                [
                    'id' => 3,
                    'title' => 'RTK Module',
                    'position' => ['top' => '18%', 'left' => '50%'],
                    'parts' => [
                        ['id' => 1301, 'name' => 'D-RTK Antenna', 'price' => 118, 'stock' => true],
                    ],
                ],
                [
                    'id' => 4,
                    'title' => 'Spray System',
                    'position' => ['top' => '58%', 'left' => '48%'],
                    'parts' => [
                        ['id' => 1401, 'name' => 'T40 Spray Pump', 'price' => 245, 'stock' => true],
                        ['id' => 1402, 'name' => 'Dual Atomised Nozzle Kit', 'price' => 58, 'stock' => true],
                        ['id' => 1403, 'name' => 'Inline Filter', 'price' => 34, 'stock' => true],
                    ],
                ],
            ],
            'support_categories' => $commonSupportCategories,
        ]);

        // 2. Seed Users
        User::create([
            'name' => 'Judy Zhu',
            'username' => 't50user',
            'email' => 'judy.zhu@aagri-tech.com.au',
            'password' => Hash::make('t50pass'),
            'drone_id' => 't50',
        ]);

        User::create([
            'name' => 'Rahim Ahmed',
            'username' => 't40user',
            'email' => 'rahim.ahmed@greenfield.com',
            'password' => Hash::make('t40pass'),
            'drone_id' => 't40',
        ]);
    }
}
