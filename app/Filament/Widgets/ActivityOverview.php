<?php

namespace App\Filament\Widgets;

use App\Models\Activity;
use Filament\Widgets\ChartWidget;
use Illuminate\Support\Facades\DB;

class ActivityOverview extends ChartWidget
{
    protected static ?string $heading = 'Activities by Category';
    protected static string $color = 'warning';
    protected static ?int $sort = 5;

    protected function getData(): array
    {
        $activities = Activity::select('category', DB::raw('count(*) as count'))
            ->groupBy('category')
            ->orderBy('count', 'desc')
            ->get();

        if ($activities->isEmpty()) {
            return [
                'datasets' => [
                    [
                        'label' => 'Activities',
                        'data' => [0],
                        'backgroundColor' => ['#E5E7EB'],
                    ],
                ],
                'labels' => ['No Activities Yet'],
            ];
        }

        return [
            'datasets' => [
                [
                    'label' => 'Activities',
                    'data' => $activities->pluck('count')->toArray(),
                    'backgroundColor' => [
                        '#F59E0B', // amber
                        '#EF4444', // red
                        '#10B981', // green
                        '#3B82F6', // blue
                        '#8B5CF6', // violet
                        '#06B6D4', // cyan
                        '#84CC16', // lime
                        '#F97316', // orange
                        '#EC4899', // pink
                    ],
                ],
            ],
            'labels' => $activities->pluck('category')->map(function ($category) {
                return ucwords(str_replace('_', ' ', $category));
            })->toArray(),
        ];
    }

    protected function getType(): string
    {
        return 'polarArea';
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