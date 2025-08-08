<?php

namespace App\Filament\Resources;

use App\Filament\Resources\DestinationResource\Pages;
use App\Filament\Resources\DestinationResource\RelationManagers;
use App\Models\Destination;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class DestinationResource extends Resource
{
    protected static ?string $model = Destination::class;

    protected static ?string $navigationIcon = 'heroicon-o-map-pin';
    protected static ?string $navigationGroup = 'Content Management';
    protected static ?int $navigationSort = 2;

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Tabs::make('Destination Details')
                    ->tabs([
                        Forms\Components\Tabs\Tab::make('Basic Information')
                            ->schema([
                                Forms\Components\TextInput::make('name')
                                    ->required()
                                    ->maxLength(255)
                                    ->live(onBlur: true)
                                    ->afterStateUpdated(fn (string $context, $state, callable $set) => $context === 'create' ? $set('slug', \Illuminate\Support\Str::slug($state)) : null),
                                Forms\Components\TextInput::make('slug')
                                    ->required()
                                    ->maxLength(255)
                                    ->unique(ignoreRecord: true)
                                    ->rules(['alpha_dash']),
                                Forms\Components\Select::make('region_id')
                                    ->relationship('region', 'name')
                                    ->required()
                                    ->searchable()
                                    ->preload(),
                                Forms\Components\Select::make('type')
                                    ->required()
                                    ->options([
                                        'national_park' => 'National Park',
                                        'waterfall' => 'Waterfall',
                                        'wildlife_reserve' => 'Wildlife Reserve',
                                        'cultural_site' => 'Cultural Site',
                                        'adventure_activity' => 'Adventure Activity',
                                        'historical_site' => 'Historical Site',
                                        'natural_wonder' => 'Natural Wonder',
                                        'city' => 'City',
                                        'town' => 'Town',
                                    ]),
                                Forms\Components\RichEditor::make('description')
                                    ->required()
                                    ->columnSpanFull(),
                                Forms\Components\RichEditor::make('overview')
                                    ->columnSpanFull(),
                            ])->columns(2),
                            
                        Forms\Components\Tabs\Tab::make('Media & Location')
                            ->schema([
                                Forms\Components\FileUpload::make('featured_image')
                                    ->image()
                                    ->imageEditor()
                                    ->directory('destinations')
                                    ->required()
                                    ->maxSize(2048),
                                Forms\Components\FileUpload::make('images')
                                    ->image()
                                    ->imageEditor()
                                    ->directory('destinations/gallery')
                                    ->multiple()
                                    ->reorderable()
                                    ->maxFiles(10)
                                    ->maxSize(2048),
                                Forms\Components\TextInput::make('latitude')
                                    ->numeric()
                                    ->step(0.00000001),
                                Forms\Components\TextInput::make('longitude')
                                    ->numeric()
                                    ->step(0.00000001),
                            ])->columns(2),
                            
                        Forms\Components\Tabs\Tab::make('Travel Information')
                            ->schema([
                                Forms\Components\TextInput::make('best_time_to_visit')
                                    ->placeholder('e.g., April to October'),
                                Forms\Components\TextInput::make('duration')
                                    ->placeholder('e.g., Half day, Full day, 2-3 days'),
                                Forms\Components\TextInput::make('entry_fee')
                                    ->placeholder('e.g., $10 for adults, $5 for children'),
                                Forms\Components\TextInput::make('rating')
                                    ->numeric()
                                    ->default(0)
                                    ->minValue(0)
                                    ->maxValue(5)
                                    ->step(0.1),
                                Forms\Components\TextInput::make('review_count')
                                    ->numeric()
                                    ->default(0)
                                    ->minValue(0),
                                Forms\Components\Repeater::make('highlights')
                                    ->schema([
                                        Forms\Components\TextInput::make('title')
                                            ->required(),
                                        Forms\Components\Textarea::make('description'),
                                    ])
                                    ->columnSpanFull()
                                    ->collapsible(),
                                Forms\Components\Repeater::make('what_to_bring')
                                    ->schema([
                                        Forms\Components\TextInput::make('item')
                                            ->required(),
                                        Forms\Components\TextInput::make('reason')
                                            ->placeholder('Optional: Why this item is needed'),
                                    ])
                                    ->columnSpanFull()
                                    ->collapsible(),
                                Forms\Components\Repeater::make('travel_tips')
                                    ->schema([
                                        Forms\Components\TextInput::make('tip')
                                            ->required(),
                                    ])
                                    ->columnSpanFull()
                                    ->collapsible(),
                                Forms\Components\RichEditor::make('how_to_get_there')
                                    ->columnSpanFull(),
                            ])->columns(2),
                            
                        Forms\Components\Tabs\Tab::make('Weather & SEO')
                            ->schema([
                                Forms\Components\Repeater::make('weather_info')
                                    ->schema([
                                        Forms\Components\Select::make('season')
                                            ->options([
                                                'summer' => 'Summer (Nov-Apr)',
                                                'winter' => 'Winter (May-Oct)',
                                                'rainy' => 'Rainy Season (Nov-Mar)',
                                                'dry' => 'Dry Season (Apr-Oct)',
                                            ])
                                            ->required(),
                                        Forms\Components\TextInput::make('temperature')
                                            ->placeholder('e.g., 20-30°C'),
                                        Forms\Components\Textarea::make('description'),
                                    ])
                                    ->columnSpanFull()
                                    ->collapsible(),
                                Forms\Components\KeyValue::make('seo_meta')
                                    ->keyLabel('Meta Property')
                                    ->valueLabel('Content')
                                    ->default([
                                        'title' => '',
                                        'description' => '',
                                        'keywords' => '',
                                        'og_image' => ''
                                    ])
                                    ->columnSpanFull(),
                            ]),
                            
                        Forms\Components\Tabs\Tab::make('Settings')
                            ->schema([
                                Forms\Components\TextInput::make('sort_order')
                                    ->numeric()
                                    ->default(0)
                                    ->minValue(0),
                                Forms\Components\Toggle::make('is_featured')
                                    ->default(false),
                                Forms\Components\Toggle::make('is_active')
                                    ->default(true),
                            ])->columns(3),
                    ])
                    ->columnSpanFull(),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\ImageColumn::make('featured_image')
                    ->size(60)
                    ->circular(),
                Tables\Columns\TextColumn::make('name')
                    ->searchable()
                    ->sortable()
                    ->weight('medium')
                    ->wrap(),
                Tables\Columns\TextColumn::make('region.name')
                    ->sortable()
                    ->badge()
                    ->color('info'),
                Tables\Columns\TextColumn::make('type')
                    ->searchable()
                    ->badge()
                    ->color(fn (string $state): string => match ($state) {
                        'national_park' => 'success',
                        'waterfall' => 'info',
                        'wildlife_reserve' => 'warning',
                        'cultural_site' => 'primary',
                        default => 'gray',
                    }),
                Tables\Columns\TextColumn::make('rating')
                    ->numeric()
                    ->sortable()
                    ->formatStateUsing(fn ($state) => $state ? number_format($state, 1) . '/5' : 'No rating')
                    ->alignCenter(),
                Tables\Columns\TextColumn::make('review_count')
                    ->numeric()
                    ->sortable()
                    ->formatStateUsing(fn ($state) => number_format($state) . ' reviews')
                    ->alignCenter(),
                Tables\Columns\IconColumn::make('is_featured')
                    ->boolean()
                    ->trueIcon('heroicon-o-star')
                    ->falseIcon('heroicon-o-minus')
                    ->trueColor('warning')
                    ->falseColor('gray')
                    ->label('Featured'),
                Tables\Columns\IconColumn::make('is_active')
                    ->boolean()
                    ->trueIcon('heroicon-o-check-circle')
                    ->falseIcon('heroicon-o-x-circle')
                    ->trueColor('success')
                    ->falseColor('danger'),
                Tables\Columns\TextColumn::make('updated_at')
                    ->dateTime()
                    ->sortable()
                    ->since()
                    ->toggleable(),
            ])
            ->defaultSort('sort_order')
            ->filters([
                Tables\Filters\SelectFilter::make('region')
                    ->relationship('region', 'name')
                    ->searchable()
                    ->preload(),
                Tables\Filters\SelectFilter::make('type')
                    ->options([
                        'national_park' => 'National Park',
                        'waterfall' => 'Waterfall',
                        'wildlife_reserve' => 'Wildlife Reserve',
                        'cultural_site' => 'Cultural Site',
                        'adventure_activity' => 'Adventure Activity',
                        'historical_site' => 'Historical Site',
                        'natural_wonder' => 'Natural Wonder',
                        'city' => 'City',
                        'town' => 'Town',
                    ]),
                Tables\Filters\TernaryFilter::make('is_featured')
                    ->label('Featured')
                    ->boolean()
                    ->trueLabel('Featured only')
                    ->falseLabel('Not featured')
                    ->native(false),
                Tables\Filters\TernaryFilter::make('is_active')
                    ->label('Active Status')
                    ->boolean()
                    ->trueLabel('Active only')
                    ->falseLabel('Inactive only')
                    ->native(false),
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListDestinations::route('/'),
            'create' => Pages\CreateDestination::route('/create'),
            'edit' => Pages\EditDestination::route('/{record}/edit'),
        ];
    }
}
