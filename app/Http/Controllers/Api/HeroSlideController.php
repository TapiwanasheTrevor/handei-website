<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\HeroSlide;
use Illuminate\Http\Request;

class HeroSlideController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $slides = HeroSlide::where('is_active', true)
            ->orderBy('sort_order')
            ->get();

        return response()->json([
            'data' => $slides,
            'message' => 'Hero slides retrieved successfully'
        ]);
    }
}