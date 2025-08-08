<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\RegionController;
use App\Http\Controllers\Api\DestinationController;
use App\Http\Controllers\Api\ActivityController;
use App\Http\Controllers\Api\HeroSlideController;
use App\Http\Controllers\Api\SettingController;

// Public API routes for the frontend
Route::prefix('v1')->group(function () {
    // Regions
    Route::apiResource('regions', RegionController::class)->only(['index', 'show']);
    
    // Destinations
    Route::get('destinations/featured', [DestinationController::class, 'featured']);
    Route::get('destinations/by-region/{region}', [DestinationController::class, 'byRegion']);
    Route::apiResource('destinations', DestinationController::class)->only(['index', 'show']);
    
    // Activities
    Route::get('activities/featured', [ActivityController::class, 'featured']);
    Route::get('activities/by-category/{category}', [ActivityController::class, 'byCategory']);
    Route::get('activities/by-region/{region}', [ActivityController::class, 'byRegion']);
    Route::apiResource('activities', ActivityController::class)->only(['index', 'show']);
    
    // Hero Slides
    Route::get('hero-slides', [HeroSlideController::class, 'index']);
    
    // Settings
    Route::get('settings', [SettingController::class, 'index']);
    Route::get('settings/{key}', [SettingController::class, 'show']);
});

// Authenticated routes
Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user', function (Request $request) {
        return $request->user();
    });
});
