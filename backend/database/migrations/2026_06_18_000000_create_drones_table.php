<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('drones', function (Blueprint $table) {
            $table->string('id')->primary(); // e.g. 't50', 't40'
            
            // Customer Info (normalized in API)
            $table->string('customer_name');
            $table->string('customer_initials');
            $table->string('company_name');
            $table->string('location');
            
            // Drone Main Info
            $table->string('model_name');
            $table->string('model_code');
            $table->string('serial_number');
            $table->string('registration_number');
            $table->string('purchase_date');
            $table->string('purchased_from');
            $table->string('warranty_expires');
            $table->string('warranty_status');
            $table->string('warranty_remaining');
            $table->string('firmware_version');
            $table->string('firmware_status');
            $table->string('next_service_due');
            $table->string('last_serviced');
            $table->string('flight_hours');
            $table->string('battery_sets');
            $table->string('image_url')->nullable();
            
            // Stats & Lists (Structured JSON)
            $table->json('specs');
            $table->json('dashboard_stats');
            $table->json('checklist_items');
            $table->json('component_health');
            
            // Alerts & Detailed Info
            $table->string('maintenance_alert')->nullable();
            $table->string('warranty_period')->nullable();
            $table->json('service_history')->nullable();
            $table->json('accessories')->nullable();
            $table->json('technical_specifications')->nullable();
            $table->json('documents')->nullable();
            $table->json('tutorial_videos')->nullable();
            $table->json('troubleshoot_issues')->nullable();
            $table->json('part_sections')->nullable();
            $table->json('support_categories')->nullable();
            
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('drones');
    }
};
