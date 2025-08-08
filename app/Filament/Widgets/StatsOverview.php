<?php

namespace App\Filament\Widgets;

use App\Models\Region;
use App\Models\Destination;
use App\Models\Activity;
use App\Models\Accommodation;
use App\Models\HeroSlide;
use Filament\Widgets\StatsOverviewWidget as BaseWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;

class StatsOverview extends BaseWidget
{
    protected function getStats(): array
    {
        return [
            Stat::make('Total Destinations', Destination::count())
                ->description('Tourism destinations')
                ->descriptionIcon('heroicon-m-map-pin')
                ->color('success')
                ->chart([7, 2, 10, 3, 15, 4, 17]),
            
            Stat::make('Featured Destinations', Destination::where('is_featured', true)->count())
                ->description('Promoted destinations')
                ->descriptionIcon('heroicon-m-star')
                ->color('warning'),
                
            Stat::make('Total Activities', Activity::count())
                ->description('Available activities')
                ->descriptionIcon('heroicon-m-bolt')
                ->color('info')
                ->chart([2, 5, 3, 8, 6, 12, 8]),
                
            Stat::make('Active Regions', Region::where('is_active', true)->count())
                ->description('of 10 total regions')
                ->descriptionIcon('heroicon-m-map')
                ->color('primary'),
                
            Stat::make('Accommodations', Accommodation::count())
                ->description('Hotels, lodges & camps')
                ->descriptionIcon('heroicon-m-building-office')
                ->color('gray'),
                
            Stat::make('Hero Slides', HeroSlide::where('is_active', true)->count())
                ->description('Active homepage slides')
                ->descriptionIcon('heroicon-m-photo')
                ->color('success'),
        ];
    }
}