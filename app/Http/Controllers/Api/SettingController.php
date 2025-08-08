<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Setting;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class SettingController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $query = Setting::query();

        if ($request->has('group')) {
            $query->where('group', $request->group);
        }

        $settings = $query->get()->keyBy('key');

        return response()->json([
            'data' => $settings,
            'message' => 'Settings retrieved successfully'
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $key)
    {
        $setting = Setting::where('key', $key)->first();

        if (!$setting) {
            return response()->json([
                'message' => 'Setting not found'
            ], Response::HTTP_NOT_FOUND);
        }

        return response()->json([
            'data' => $setting,
            'message' => 'Setting retrieved successfully'
        ]);
    }
}