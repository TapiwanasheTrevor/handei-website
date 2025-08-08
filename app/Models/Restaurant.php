<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Restaurant extends Model
{
    protected $fillable = [
        'name',
        'slug',
        'description',
        'cuisine_type',
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
        'opening_hours',
        'menu_highlights',
        'dietary_options',
        'seo_meta',
        'sort_order',
        'is_featured',
        'is_active',
    ];

    protected $casts = [
        'images' => 'array',
        'opening_hours' => 'array',
        'menu_highlights' => 'array',
        'dietary_options' => 'array',
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
        
        static::creating(function ($restaurant) {
            if (empty($restaurant->slug)) {
                $restaurant->slug = \Illuminate\Support\Str::slug($restaurant->name);
            }
        });
        
        static::updating(function ($restaurant) {
            if ($restaurant->isDirty('name') && empty($restaurant->slug)) {
                $restaurant->slug = \Illuminate\Support\Str::slug($restaurant->name);
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

    public function scopeByCuisineType($query, $cuisineType)
    {
        return $query->where('cuisine_type', $cuisineType);
    }

    public function scopeByPriceRange($query, $priceRange)
    {
        return $query->where('price_range', $priceRange);
    }
}
