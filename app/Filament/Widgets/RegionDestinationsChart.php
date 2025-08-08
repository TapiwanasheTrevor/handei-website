<?php

namespace App\Filament\Widgets;

use App\Models\Region;
use Filament\Widgets\ChartWidget;

class RegionDestinationsChart extends ChartWidget
{
    protected static ?string $heading = 'Destinations by Region';
    protected static string $color = 'info';
    protected static ?int $sort = 2;

    protected function getData(): array
    {
        $regions = Region::withCount('destinations')
            ->get()
            ->filter(function ($region) {
                return $region->destinations_count > 0;
            })
            ->sortByDesc('destinations_count');

        return [
            'datasets' => [
                [
                    'label' => 'Destinations',
                    'data' => $regions->pluck('destinations_count')->toArray(),
                    'backgroundColor' => [
                        '#10B981', // green
                        '#3B82F6', // blue
                        '#F59E0B', // amber
                        '#EF4444', // red
                        '#8B5CF6', // violet
                        '#06B6D4', // cyan
                        '#84CC16', // lime
                        '#F97316', // orange
                        '#EC4899', // pink
                        '#6B7280', // gray
                    ],
                ],
            ],
            'labels' => $regions->pluck('name')->toArray(),
        ];
    }

    protected function getType(): string
    {
        return 'doughnut';
    }

    protected function getOptions(): array
    {
        return [
            'plugins' => [
                'legend' => [
                    'display' => true,
                    'position' => 'right',
                    'labels' => [
                        'padding' => 10,
                        'boxWidth' => 15,
                    ],
                ],
            ],
            'maintainAspectRatio' => false,
            'responsive' => true,
            'layout' => [
                'padding' => [
                    'top' => 10,
                    'bottom' => 10,
                    'left' => 10,
                    'right' => 10,
                ],
            ],
        ];
    }

    protected static ?string $maxHeight = '20rem';
}