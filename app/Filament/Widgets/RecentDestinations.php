<?php

namespace App\Filament\Widgets;

use App\Models\Destination;
use Filament\Tables;
use Filament\Tables\Table;
use Filament\Widgets\TableWidget as BaseWidget;

class RecentDestinations extends BaseWidget
{
    protected static ?string $heading = 'Recent Destinations';
    protected static ?int $sort = 4;
    protected int | string | array $columnSpan = 'full';

    public function table(Table $table): Table
    {
        return $table
            ->query(
                Destination::query()
                    ->with(['region'])
                    ->latest()
                    ->limit(5)
            )
            ->columns([
                Tables\Columns\ImageColumn::make('featured_image')
                    ->label('Image')
                    ->circular()
                    ->defaultImageUrl(url('/api/placeholder/40/40'))
                    ->size(40),
                    
                Tables\Columns\TextColumn::make('name')
                    ->searchable()
                    ->sortable()
                    ->weight('medium'),
                    
                Tables\Columns\TextColumn::make('region.name')
                    ->badge()
                    ->color('info'),
                    
                Tables\Columns\TextColumn::make('type')
                    ->badge()
                    ->color(fn (string $state): string => match ($state) {
                        'national_park' => 'success',
                        'waterfall' => 'info',
                        'wildlife_reserve' => 'warning',
                        'cultural_site' => 'primary',
                        'historical_site' => 'secondary',
                        default => 'gray',
                    })
                    ->formatStateUsing(fn (string $state): string => ucwords(str_replace('_', ' ', $state))),
                    
                Tables\Columns\TextColumn::make('rating')
                    ->numeric()
                    ->formatStateUsing(fn ($state) => $state ? number_format($state, 1) . '/5' : 'No rating')
                    ->alignCenter(),
                    
                Tables\Columns\IconColumn::make('is_featured')
                    ->boolean()
                    ->trueIcon('heroicon-o-star')
                    ->falseIcon('heroicon-o-minus')
                    ->trueColor('warning')
                    ->falseColor('gray')
                    ->label('Featured'),
                    
                Tables\Columns\TextColumn::make('created_at')
                    ->dateTime()
                    ->since()
                    ->sortable(),
            ])
            ->actions([
                Tables\Actions\Action::make('edit')
                    ->icon('heroicon-o-pencil')
                    ->url(fn (Destination $record): string => route('filament.admin.resources.destinations.edit', $record)),
            ]);
    }
}