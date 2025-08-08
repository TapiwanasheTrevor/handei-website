<?php

use Illuminate\Support\Facades\Route;

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
