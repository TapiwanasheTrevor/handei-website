<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Support\Str;

class Destination extends Model
{
    protected $fillable = [
        'name',
        'slug',
        'description',
        'overview',
        'images',
        'featured_image',
        'region_id',
        'type',
        'latitude',
        'longitude',
        'best_time_to_visit',
        'duration',
        'rating',
        'review_count',
        'highlights',
        'what_to_bring',
        'travel_tips',
        'entry_fee',
        'how_to_get_there',
        'weather_info',
        'seo_meta',
        'sort_order',
        'is_featured',
        'is_active',
    ];

    protected $casts = [
        'images' => 'array',
        'highlights' => 'array',
        'what_to_bring' => 'array',
        'travel_tips' => 'array',
        'weather_info' => 'array',
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
        
        static::creating(function ($destination) {
            if (empty($destination->slug)) {
                $destination->slug = Str::slug($destination->name);
            }
        });
        
        static::updating(function ($destination) {
            if ($destination->isDirty('name') && empty($destination->slug)) {
                $destination->slug = Str::slug($destination->name);
            }
        });
    }

    public function region(): BelongsTo
    {
        return $this->belongsTo(Region::class);
    }

    public function activities(): HasMany
    {
        return $this->hasMany(Activity::class);
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
}
