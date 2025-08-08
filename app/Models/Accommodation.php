<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Accommodation extends Model
{
    protected $fillable = [
        'name',
        'slug',
        'description',
        'type',
        'region_id',
        'images',
        'featured_image',
        'latitude',
        'longitude',
        'address',
        'contact_phone',
        'contact_email',
        'website',
        'rating',
        'review_count',
        'price_range',
        'amenities',
        'room_types',
        'guestbook_id',
        'seo_meta',
        'sort_order',
        'is_featured',
        'is_active',
    ];

    protected $casts = [
        'images' => 'array',
        'amenities' => 'array',
        'room_types' => 'array',
        'seo_meta' => 'array',
        'is_featured' => 'boolean',
        'is_active' => 'boolean',
        'rating' => 'decimal:2',
        'latitude' => 'decimal:8',
        'longitude' => 'decimal:8',
    ];

    protected static function boot()
    {
        parent::boot();
        
        static::creating(function ($accommodation) {
            if (empty($accommodation->slug)) {
                $accommodation->slug = \Illuminate\Support\Str::slug($accommodation->name);
            }
        });
        
        static::updating(function ($accommodation) {
            if ($accommodation->isDirty('name') && empty($accommodation->slug)) {
                $accommodation->slug = \Illuminate\Support\Str::slug($accommodation->name);
            }
        });
    }

    public function region()
    {
        return $this->belongsTo(Region::class);
    }

    public function scopeFeatured($query)
    {
        return $query->where('is_featured', true);
    }

    public function scopeActive($query)
    {
        return $query->where('is_active', true);
    }

    public function scopeByType($query, $type)
    {
        return $query->where('type', $type);
    }

    public function scopeByPriceRange($query, $priceRange)
    {
        return $query->where('price_range', $priceRange);
    }
}
