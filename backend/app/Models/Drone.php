<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Drone extends Model
{
    use HasFactory;

    /**
     * The primary key for the model.
     *
     * @var string
     */
    protected $keyType = 'string';

    /**
     * Indicates if the IDs are auto-incrementing.
     *
     * @var bool
     */
    public $incrementing = false;

    /**
     * Attributes that are mass assignable.
     */
    protected $fillable = [
        'id',
        'customer_name',
        'customer_initials',
        'company_name',
        'location',
        'model_name',
        'model_code',
        'serial_number',
        'registration_number',
        'purchase_date',
        'purchased_from',
        'warranty_expires',
        'warranty_status',
        'warranty_remaining',
        'firmware_version',
        'firmware_status',
        'next_service_due',
        'last_serviced',
        'flight_hours',
        'battery_sets',
        'image_url',
        'specs',
        'dashboard_stats',
        'checklist_items',
        'component_health',
        'maintenance_alert',
        'warranty_period',
        'service_history',
        'accessories',
        'technical_specifications',
        'documents',
        'tutorial_videos',
        'troubleshoot_issues',
        'part_sections',
        'support_categories',
    ];

    /**
     * The attributes that should be cast.
     */
    protected function casts(): array
    {
        return [
            'specs' => 'array',
            'dashboard_stats' => 'array',
            'checklist_items' => 'array',
            'component_health' => 'array',
            'service_history' => 'array',
            'accessories' => 'array',
            'technical_specifications' => 'array',
            'documents' => 'array',
            'tutorial_videos' => 'array',
            'troubleshoot_issues' => 'array',
            'part_sections' => 'array',
            'support_categories' => 'array',
        ];
    }

    /**
     * Get the users associated with this drone.
     */
    public function users()
    {
        return $this->hasMany(User::class, 'drone_id');
    }
}
