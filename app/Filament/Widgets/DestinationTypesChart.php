<?php

namespace App\Filament\Widgets;

use App\Models\Destination;
use Filament\Widgets\ChartWidget;
use Illuminate\Support\Facades\DB;

class DestinationTypesChart extends ChartWidget
{
    protected static ?string $heading = 'Destinations by Type';
    protected static string $color = 'success';
    protected static ?int $sort = 3;

    protected function getData(): array
    {
        $destinationTypes = Destination::select('type', DB::raw('count(*) as count'))
            ->groupBy('type')
            ->orderBy('count', 'desc')
            ->get();

        return [
            'datasets' => [
                [
                    'label' => 'Destinations',
                    'data' => $destinationTypes->pluck('count')->toArray(),
                    'backgroundColor' => [
                        '#3B82F6', // blue
                        '#10B981', // green
                        '#F59E0B', // amber
                        '#EF4444', // red
                        '#8B5CF6', // violet
                        '#06B6D4', // cyan
                    ],
                ],
            ],
            'labels' => $destinationTypes->pluck('type')->map(function ($type) {
                return ucwords(str_replace('_', ' ', $type));
            })->toArray(),
        ];
    }

    protected function getType(): string
    {
        return 'bar';
    }

    protected function getOptions(): array
    {
        return [
            'plugins' => [
                'legend' => [
                    'display' => false,
                ],
            ],
            'scales' => [
                'y' => [
                    'beginAtZero' => true,
                    'ticks' => [
                        'stepSize' => 1,
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