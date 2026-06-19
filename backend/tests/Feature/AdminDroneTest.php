<?php

namespace Tests\Feature;

use App\Models\Drone;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class AdminDroneTest extends TestCase
{
    use RefreshDatabase;

    private Drone $drone;

    protected function setUp(): void
    {
        parent::setUp();

        // Create a mock drone for testing
        $this->drone = Drone::create([
            'id' => 't50',
            'customer_name' => 'Original Customer',
            'customer_initials' => 'OC',
            'company_name' => 'Original Company',
            'location' => 'Original Location',
            'model_name' => 'DJI Agras T50',
            'model_code' => 'T50',
            'serial_number' => '7741-WA-T50',
            'registration_number' => 'WA-AGT-5021',
            'purchase_date' => '14 January 2025',
            'purchased_from' => 'Australia Agritech',
            'warranty_expires' => '14 January 2027',
            'warranty_status' => 'Active',
            'warranty_remaining' => '622 days',
            'firmware_version' => 'v10.01.0300',
            'firmware_status' => 'Up to date',
            'next_service_due' => 'Sep 2025',
            'last_serviced' => '3 Mar 2025',
            'flight_hours' => '128.4 hrs',
            'battery_sets' => '4 packs',
            'image_url' => '/drone.png',
            'specs' => [],
            'dashboard_stats' => [],
            'checklist_items' => [],
            'component_health' => [],
            'maintenance_alert' => 'None',
            'warranty_period' => '14 Jan 2025 - 14 Jan 2027',
            'service_history' => [],
            'accessories' => [],
            'technical_specifications' => [],
            'documents' => [],
            'tutorial_videos' => [],
            'troubleshoot_issues' => [],
            'part_sections' => [],
            'support_categories' => [],
        ]);
    }

    /**
     * Test admin endpoint rejects requests without a valid token.
     */
    public function test_admin_endpoints_reject_unauthorized_access(): void
    {
        $response = $this->postJson('/api/admin/drone-profile', [
            'drone_id' => 't50',
            'fields' => [],
            'items' => [],
        ]);

        $response->assertStatus(401);
    }

    /**
     * Test updating drone profile.
     */
    public function test_can_update_drone_profile(): void
    {
        $response = $this->withHeader('Authorization', 'Bearer admin-demo-token-admin')
            ->postJson('/api/admin/drone-profile', [
                'drone_id' => 't50',
                'fields' => [
                    'customer_name' => 'New Customer Name',
                    'location' => 'Sydney, NSW',
                ],
                'items' => [
                    'specs' => [['Serial Number', 'NEW-SERIAL']],
                ],
            ]);

        $response->assertStatus(200);
        
        $this->drone->refresh();
        $this->assertEquals('New Customer Name', $this->drone->customer_name);
        $this->assertEquals('Sydney, NSW', $this->drone->location);
        $this->assertEquals([['Serial Number', 'NEW-SERIAL']], $this->drone->specs);
    }

    /**
     * Test adding tutorials.
     */
    public function test_can_add_tutorials(): void
    {
        // Add a tutorial via form fields
        $response = $this->withHeader('Authorization', 'Bearer admin-demo-token-admin')
            ->postJson('/api/admin/tutorials', [
                'drone_id' => 't50',
                'fields' => [
                    'title' => 'New Tutorial Video',
                    'category' => 'Maintenance',
                    'video_url' => 'https://youtube.com/embed/xyz',
                ],
            ]);

        $response->assertStatus(200);
        
        $this->drone->refresh();
        $this->assertCount(1, $this->drone->tutorial_videos);
        $this->assertEquals('New Tutorial Video', $this->drone->tutorial_videos[0]['title']);
    }

    /**
     * Test adding troubleshooting issues.
     */
    public function test_can_add_troubleshoot_issues(): void
    {
        $response = $this->withHeader('Authorization', 'Bearer admin-demo-token-admin')
            ->postJson('/api/admin/troubleshoot', [
                'drone_id' => 't50',
                'fields' => [
                    'title' => 'Drone drifts to left',
                    'description' => 'Calibrate IMU',
                ],
                'items' => [
                    'Ensure GPS lock is green',
                    'Restart the drone',
                ],
            ]);

        $response->assertStatus(200);
        
        $this->drone->refresh();
        $this->assertCount(1, $this->drone->troubleshoot_issues);
        $this->assertEquals('Drone drifts to left', $this->drone->troubleshoot_issues[0]['title']);
        $this->assertEquals(['Ensure GPS lock is green', 'Restart the drone'], $this->drone->troubleshoot_issues[0]['steps']);
    }

    /**
     * Test adding parts.
     */
    public function test_can_add_parts(): void
    {
        $response = $this->withHeader('Authorization', 'Bearer admin-demo-token-admin')
            ->postJson('/api/admin/parts', [
                'drone_id' => 't50',
                'fields' => [
                    'section_title' => 'Propellers System',
                    'top' => '40%',
                    'left' => '30%',
                ],
                'items' => [
                    ['name' => 'Propeller Blade', 'price' => 45.00, 'stock' => true],
                ],
            ]);

        $response->assertStatus(200);
        
        $this->drone->refresh();
        $this->assertCount(1, $this->drone->part_sections);
        $this->assertEquals('Propellers System', $this->drone->part_sections[0]['title']);
        $this->assertEquals('Propeller Blade', $this->drone->part_sections[0]['parts'][0]['name']);
    }

    /**
     * Test adding guides.
     */
    public function test_can_add_guides(): void
    {
        $response = $this->withHeader('Authorization', 'Bearer admin-demo-token-admin')
            ->postJson('/api/admin/guides', [
                'drone_id' => 't50',
                'fields' => [
                    'title' => 'Calibration Guide',
                    'summary' => 'PDF explaining calibration',
                    'file_url' => '/guides/calibrate.pdf',
                ],
            ]);

        $response->assertStatus(200);
        
        $this->drone->refresh();
        $this->assertCount(1, $this->drone->documents);
        $this->assertEquals('Calibration Guide', $this->drone->documents[0]['name']);
    }

    /**
     * Test adding checklists.
     */
    public function test_can_add_checklists(): void
    {
        $response = $this->withHeader('Authorization', 'Bearer admin-demo-token-admin')
            ->postJson('/api/admin/checklists', [
                'drone_id' => 't50',
                'fields' => [
                    'task' => 'Verify motor sound',
                    'status' => 'Done',
                ],
            ]);

        $response->assertStatus(200);
        
        $this->drone->refresh();
        $this->assertCount(1, $this->drone->checklist_items);
        $this->assertEquals('Verify motor sound', $this->drone->checklist_items[0][0]);
    }

    /**
     * Test adding shared content.
     */
    public function test_can_add_shared_content(): void
    {
        $response = $this->withHeader('Authorization', 'Bearer admin-demo-token-admin')
            ->postJson('/api/admin/shared-content', [
                'drone_id' => 't50',
                'fields' => [
                    'title' => 'Terms of Warranty Update',
                    'description' => 'Updated document',
                    'content_url' => '/warranty-v2.pdf',
                ],
            ]);

        $response->assertStatus(200);
        
        $this->drone->refresh();
        // Should update service history
        $this->assertCount(1, $this->drone->service_history);
        $this->assertEquals('Terms of Warranty Update', $this->drone->service_history[0][0]);

        // Should update documents
        $this->assertCount(1, $this->drone->documents);
        $this->assertEquals('Terms of Warranty Update', $this->drone->documents[0]['name']);
    }
}
