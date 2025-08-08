<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Destination;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class DestinationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $query = Destination::with(['region', 'activities'])
            ->active();

        // Apply filters
        if ($request->has('region')) {
            $query->whereHas('region', function ($q) use ($request) {
                $q->where('slug', $request->region);
            });
        }

        if ($request->has('type')) {
            $query->where('type', $request->type);
        }

        if ($request->has('featured')) {
            $query->featured();
        }

        // Apply sorting
        $sortBy = $request->get('sort_by', 'sort_order');
        $sortOrder = $request->get('sort_order', 'asc');
        $query->orderBy($sortBy, $sortOrder);

        // Pagination
        $perPage = $request->get('per_page', 10);
        $destinations = $query->paginate($perPage);

        return response()->json($destinations);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $destination = Destination::with(['region', 'activities'])
            ->where('slug', $id)
            ->orWhere('id', $id)
            ->active()
            ->first();

        if (!$destination) {
            return response()->json([
                'message' => 'Destination not found'
            ], Response::HTTP_NOT_FOUND);
        }

        return response()->json([
            'data' => $destination,
            'message' => 'Destination retrieved successfully'
        ]);
    }

    /**
     * Get featured destinations.
     */
    public function featured(Request $request)
    {
        $limit = $request->get('limit', 6);
        
        $destinations = Destination::with(['region'])
            ->featured()
            ->active()
            ->orderBy('sort_order')
            ->limit($limit)
            ->get();

        return response()->json([
            'data' => $destinations,
            'message' => 'Featured destinations retrieved successfully'
        ]);
    }

    /**
     * Get destinations by region.
     */
    public function byRegion(string $region, Request $request)
    {
        $perPage = $request->get('per_page', 10);
        
        $destinations = Destination::with(['region', 'activities'])
            ->whereHas('region', function ($q) use ($region) {
                $q->where('slug', $region);
            })
            ->active()
            ->orderBy('sort_order')
            ->paginate($perPage);

        return response()->json($destinations);
    }
}