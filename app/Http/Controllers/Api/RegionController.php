<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Region;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class RegionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $regions = Region::with(['destinations', 'activities', 'accommodations'])
            ->active()
            ->orderBy('sort_order')
            ->get();

        return response()->json([
            'data' => $regions,
            'message' => 'Regions retrieved successfully'
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $region = Region::with(['destinations.region', 'activities.region', 'accommodations.region'])
            ->where('slug', $id)
            ->orWhere('id', $id)
            ->active()
            ->first();

        if (!$region) {
            return response()->json([
                'message' => 'Region not found'
            ], Response::HTTP_NOT_FOUND);
        }

        return response()->json([
            'data' => $region,
            'message' => 'Region retrieved successfully'
        ]);
    }
}