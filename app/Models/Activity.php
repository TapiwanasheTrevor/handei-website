<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Activity extends Model
{
    protected $fillable = [
        'name',
        'slug',
        'description',
        'category',
        'region_id',
        'destination_id',
        'duration',
        'difficulty',
        'price_from',
        'rating',
        'review_count',
        'images',
        'featured_image',
        'highlights',
        'what_to_bring',
        'safety_requirements',
        'min_age',
        'max_group_size',
        'availability_schedule',
        'seo_meta',
        'sort_order',
        'is_featured',
        'is_active',
    ];

    protected $casts = [
        'images' => 'array',
        'highlights' => 'array',
        'what_to_bring' => 'array',
        'safety_requirements' => 'array',
        'availability_schedule' => 'array',
        'seo_meta' => 'array',
        'is_featured' => 'boolean',
        'is_active' => 'boolean',
        'rating' => 'decimal:2',
    ];

    protected static function boot()
    {
        parent::boot();
        
        static::creating(function ($activity) {
            if (empty($activity->slug)) {
                $activity->slug = \Illuminate\Support\Str::slug($activity->name);
            }
        });
        
        static::updating(function ($activity) {
            if ($activity->isDirty('name') && empty($activity->slug)) {
                $activity->slug = \Illuminate\Support\Str::slug($activity->name);
            }
        });
    }

    public function region()
    {
        return $this->belongsTo(Region::class);
    }

    public function destination()
    {
        return $this->belongsTo(Destination::class);
    }

    public function scopeFeatured($query)
    {
        return $query->where('is_featured', true);
    }

    public function scopeActive($query)
    {
        return $query->where('is_active', true);
    }

    public function scopeByCategory($query, $category)
    {
        return $query->where('category', $category);
    }

    public function scopeByDifficulty($query, $difficulty)
    {
        return $query->where('difficulty', $difficulty);
    }
}
