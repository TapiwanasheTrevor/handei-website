<?php

namespace App\Filament\Widgets;

use App\Models\Setting;
use App\Models\Destination;
use App\Models\Activity;
use App\Models\HeroSlide;
use Filament\Widgets\StatsOverviewWidget as BaseWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;

class PlatformQuickStats extends BaseWidget
{
    protected static ?int $sort = 1;

    protected function getStats(): array
    {
        $totalDestinations = Destination::count();
        $featuredDestinations = Destination::where('is_featured', true)->count();
        $totalActivities = Activity::count();
        $activeHeroSlides = HeroSlide::where('is_active', true)->count();
        
        // Calculate some interesting metrics
        $avgRating = Destination::whereNotNull('rating')->avg('rating');
        $totalReviews = Destination::sum('review_count');

        return [
            Stat::make('Platform Status', 'Active')
                ->description('Tourism platform operational')
                ->descriptionIcon('heroicon-m-check-circle')
                ->color('success'),
                
            Stat::make('Content Items', $totalDestinations + $totalActivities)
                ->description($totalDestinations . ' destinations, ' . $totalActivities . ' activities')
                ->descriptionIcon('heroicon-m-document-text')
                ->color('info'),
                
            Stat::make('Average Rating', $avgRating ? number_format($avgRating, 1) . '/5' : 'No ratings')
                ->description($totalReviews . ' total reviews')
                ->descriptionIcon('heroicon-m-star')
                ->color('warning'),
                
            Stat::make('Homepage Slides', $activeHeroSlides)
                ->description('Active carousel slides')
                ->descriptionIcon('heroicon-m-presentation-chart-line')
                ->color('primary'),
        ];
    }
}