<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\DB;

// Health check endpoint for Render
Route::get('/health', function () {
    try {
        // Check database connection
        DB::connection()->getPdo();
        return response()->json([
            'status' => 'healthy',
            'database' => 'connected',
            'timestamp' => now()->toISOString()
        ], 200);
    } catch (\Exception $e) {
        return response()->json([
            'status' => 'unhealthy',
            'database' => 'disconnected',
            'error' => $e->getMessage(),
            'timestamp' => now()->toISOString()
        ], 500);
    }
});

// Debug logs endpoint - REMOVE IN PRODUCTION
Route::get('/debug-logs', function () {
    $logs = [];
    $errors = [];
    
    // Get Laravel log
    $logFile = storage_path('logs/laravel.log');
    if (file_exists($logFile)) {
        $logs['laravel'] = tail($logFile, 100);
    } else {
        $logs['laravel'] = 'No Laravel log file found';
    }
    
    // Check environment
    $logs['environment'] = [
        'APP_ENV' => env('APP_ENV', 'not set'),
        'APP_DEBUG' => env('APP_DEBUG', 'not set'),
        'APP_KEY' => env('APP_KEY') ? 'SET (hidden)' : 'NOT SET - THIS IS THE PROBLEM!',
        'APP_URL' => env('APP_URL', 'not set'),
        'DB_CONNECTION' => env('DB_CONNECTION', 'not set'),
        'DB_HOST' => env('DB_HOST', 'not set'),
        'DB_DATABASE' => env('DB_DATABASE', 'not set'),
        'PHP_VERSION' => PHP_VERSION,
        'LARAVEL_VERSION' => app()->version(),
    ];
    
    // Check critical directories
    $logs['directories'] = [
        'storage_writable' => is_writable(storage_path()),
        'bootstrap_cache_writable' => is_writable(base_path('bootstrap/cache')),
        'storage_logs_exists' => is_dir(storage_path('logs')),
        'storage_framework_exists' => is_dir(storage_path('framework')),
    ];
    
    // Try to get recent errors
    try {
        if (file_exists($logFile)) {
            $content = file_get_contents($logFile);
            preg_match_all('/\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\].*?ERROR:.*?(?=\[\d{4}-\d{2}-\d{2}|$)/s', $content, $matches);
            $errors = array_slice($matches[0], -5); // Last 5 errors
        }
    } catch (\Exception $e) {
        $errors[] = 'Could not parse log file: ' . $e->getMessage();
    }
    
    return response()->json([
        'status' => 'debug',
        'logs' => $logs,
        'recent_errors' => $errors,
        'current_error' => error_get_last(),
    ], 200);
});

// Helper function to get last N lines of a file
if (!function_exists('tail')) {
    function tail($filename, $lines = 50) {
        $data = '';
        if (file_exists($filename)) {
            $fp = fopen($filename, "r");
            $block = 4096;
            $max = filesize($filename);
            $sum = 0;
            
            for ($len = 0; $len < $max; $len += $block) {
                $seekSize = min($max - $len, $block);
                fseek($fp, -($len + $seekSize), SEEK_END);
                $data = fread($fp, $seekSize) . $data;
                
                if (substr_count($data, "\n") >= $lines + 1) {
                    $lines_array = explode("\n", $data);
                    return implode("\n", array_slice($lines_array, -$lines));
                }
            }
            fclose($fp);
        }
        return $data;
    }
}

// Serve logo.jpeg file
Route::get('/logo.jpeg', function () {
    $logoPath = public_path('logo.jpeg');
    if (file_exists($logoPath)) {
        return response()->file($logoPath, [
            'Content-Type' => 'image/jpeg',
            'Cache-Control' => 'public, max-age=31536000'
        ]);
    }
    abort(404);
});

// Serve favicon.jpeg file
Route::get('/favicon.jpeg', function () {
    $faviconPath = public_path('favicon.jpeg');
    if (file_exists($faviconPath)) {
        return response()->file($faviconPath, [
            'Content-Type' => 'image/jpeg',
            'Cache-Control' => 'public, max-age=31536000'
        ]);
    }
    abort(404);
});

// Serve Next.js static assets with correct MIME types
Route::get('_next/{path}', function ($path) {
    $fullPath = public_path('app/_next/' . $path);
    if (file_exists($fullPath)) {
        $extension = pathinfo($fullPath, PATHINFO_EXTENSION);
        $mimeType = match($extension) {
            'js' => 'application/javascript',
            'css' => 'text/css',
            'json' => 'application/json',
            'png' => 'image/png',
            'jpg', 'jpeg' => 'image/jpeg',
            'svg' => 'image/svg+xml',
            'woff' => 'font/woff',
            'woff2' => 'font/woff2',
            'ttf' => 'font/ttf',
            default => 'application/octet-stream'
        };

        return response()->file($fullPath, [
            'Content-Type' => $mimeType,
            'Cache-Control' => 'public, max-age=31536000, immutable'
        ]);
    }
    abort(404);
})->where('path', '.*')->middleware(['web']); // Ensure proper middleware

// Serve the Next.js app for main routes
Route::get('/', function () {
    return response()->file(public_path('app/index.html'));
});

Route::get('/about', function () {
    return response()->file(public_path('app/about.html'));
});

Route::get('/activities', function () {
    return response()->file(public_path('app/activities.html'));
});

Route::get('/accommodation', function () {
    return response()->file(public_path('app/accommodation.html'));
});

Route::get('/contact', function () {
    return response()->file(public_path('app/contact.html'));
});

Route::get('/destinations', function () {
    return response()->file(public_path('app/destinations.html'));
});

Route::get('/destinations/victoria-falls', function () {
    return response()->file(public_path('app/destinations/victoria-falls.html'));
});

Route::get('/travel-info', function () {
    return response()->file(public_path('app/travel-info.html'));
});

// Catch-all for other frontend routes - serve index.html for client-side routing
Route::get('/{path}', function () {
    return response()->file(public_path('app/index.html'));
})->where('path', '^(?!api|admin).*$');
