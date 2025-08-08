<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Support\Str;

class Region extends Model
{
    protected $fillable = [
        'name',
        'slug',
        'description',
        'image',
        'coordinates',
        'sort_order',
        'is_active',
    ];

    protected $casts = [
        'coordinates' => 'array',
        'is_active' => 'boolean',
    ];

    protected static function boot()
    {
        parent::boot();
        
        static::creating(function ($region) {
            if (empty($region->slug)) {
                $region->slug = Str::slug($region->name);
            }
        });
        
        static::updating(function ($region) {
            if ($region->isDirty('name') && empty($region->slug)) {
                $region->slug = Str::slug($region->name);
            }
        });
    }

    public function destinations(): HasMany
    {
        return $this->hasMany(Destination::class);
    }

    public function activities(): HasMany
    {
        return $this->hasMany(Activity::class);
    }

    public function accommodations(): HasMany
    {
        return $this->hasMany(Accommodation::class);
    }

    public function scopeActive($query)
    {
        return $query->where('is_active', true);
    }
}
