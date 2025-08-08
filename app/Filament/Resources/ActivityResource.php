<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ActivityResource\Pages;
use App\Filament\Resources\ActivityResource\RelationManagers;
use App\Models\Activity;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class ActivityResource extends Resource
{
    protected static ?string $model = Activity::class;

    protected static ?string $navigationIcon = 'heroicon-o-bolt';
    protected static ?string $navigationGroup = 'Content Management';
    protected static ?int $navigationSort = 4;
    protected static ?string $label = 'Activities';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Tabs::make('Activity Details')
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
                                Forms\Components\Select::make('category')
                                    ->required()
                                    ->options([
                                        'adventure' => 'Adventure',
                                        'wildlife' => 'Wildlife',
                                        'cultural' => 'Cultural',
                                        'nature' => 'Nature',
                                        'water_sports' => 'Water Sports',
                                        'hiking' => 'Hiking',
                                        'photography' => 'Photography',
                                        'family' => 'Family',
                                        'extreme_sports' => 'Extreme Sports',
                                    ]),
                                Forms\Components\Select::make('region_id')
                                    ->relationship('region', 'name')
                                    ->required()
                                    ->searchable()
                                    ->preload(),
                                Forms\Components\Select::make('destination_id')
                                    ->relationship('destination', 'name')
                                    ->searchable()
                                    ->preload(),
                                Forms\Components\RichEditor::make('description')
                                    ->required()
                                    ->columnSpanFull(),
                            ])->columns(2),
                            
                        Forms\Components\Tabs\Tab::make('Activity Details')
                            ->schema([
                                Forms\Components\TextInput::make('duration')
                                    ->required()
                                    ->placeholder('e.g., 2 hours, Half day, Full day'),
                                Forms\Components\Select::make('difficulty')
                                    ->required()
                                    ->options([
                                        'easy' => 'Easy',
                                        'moderate' => 'Moderate',
                                        'challenging' => 'Challenging',
                                        'difficult' => 'Difficult',
                                        'extreme' => 'Extreme',
                                    ]),
                                Forms\Components\TextInput::make('price_from')
                                    ->placeholder('e.g., $50 per person'),
                                Forms\Components\TextInput::make('min_age')
                                    ->numeric()
                                    ->placeholder('e.g., 12 years'),
                                Forms\Components\TextInput::make('max_group_size')
                                    ->numeric()
                                    ->placeholder('e.g., 15 people'),
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
                                Forms\Components\RichEditor::make('availability_schedule')
                                    ->placeholder('e.g., Daily 9:00 AM - 5:00 PM')
                                    ->columnSpanFull(),
                            ])->columns(2),
                            
                        Forms\Components\Tabs\Tab::make('Media')
                            ->schema([
                                Forms\Components\FileUpload::make('featured_image')
                                    ->image()
                                    ->imageEditor()
                                    ->directory('activities')
                                    ->required()
                                    ->maxSize(2048),
                                Forms\Components\FileUpload::make('images')
                                    ->image()
                                    ->imageEditor()
                                    ->directory('activities/gallery')
                                    ->multiple()
                                    ->reorderable()
                                    ->maxFiles(8)
                                    ->maxSize(2048)
                                    ->columnSpanFull(),
                            ]),
                            
                        Forms\Components\Tabs\Tab::make('Requirements & Safety')
                            ->schema([
                                Forms\Components\Repeater::make('highlights')
                                    ->schema([
                                        Forms\Components\TextInput::make('highlight')
                                            ->required(),
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
                                Forms\Components\Repeater::make('safety_requirements')
                                    ->schema([
                                        Forms\Components\TextInput::make('requirement')
                                            ->required(),
                                    ])
                                    ->columnSpanFull()
                                    ->collapsible(),
                            ]),
                            
                        Forms\Components\Tabs\Tab::make('SEO & Settings')
                            ->schema([
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
                Tables\Columns\TextColumn::make('category')
                    ->searchable()
                    ->badge()
                    ->color(fn (string $state): string => match ($state) {
                        'adventure' => 'danger',
                        'wildlife' => 'success',
                        'cultural' => 'primary',
                        'nature' => 'info',
                        'water_sports' => 'cyan',
                        'hiking' => 'orange',
                        'photography' => 'purple',
                        'family' => 'pink',
                        'extreme_sports' => 'red',
                        default => 'gray',
                    }),
                Tables\Columns\TextColumn::make('region.name')
                    ->sortable()
                    ->badge()
                    ->color('info'),
                Tables\Columns\TextColumn::make('difficulty')
                    ->badge()
                    ->color(fn (string $state): string => match ($state) {
                        'easy' => 'success',
                        'moderate' => 'warning',
                        'challenging' => 'orange',
                        'difficult' => 'danger',
                        'extreme' => 'red',
                        default => 'gray',
                    }),
                Tables\Columns\TextColumn::make('duration')
                    ->searchable(),
                Tables\Columns\TextColumn::make('price_from')
                    ->searchable()
                    ->placeholder('Price on request'),
                Tables\Columns\TextColumn::make('rating')
                    ->numeric()
                    ->sortable()
                    ->formatStateUsing(fn ($state) => $state ? number_format($state, 1) . '/5' : 'No rating')
                    ->alignCenter(),
                Tables\Columns\IconColumn::make('is_featured')
                    ->boolean()
                    ->trueIcon('heroicon-o-star')
                    ->falseIcon('heroicon-o-minus')
                    ->trueColor('warning')
                    ->falseColor('gray'),
                Tables\Columns\IconColumn::make('is_active')
                    ->boolean()
                    ->trueIcon('heroicon-o-check-circle')
                    ->falseIcon('heroicon-o-x-circle')
                    ->trueColor('success')
                    ->falseColor('danger'),
            ])
            ->defaultSort('sort_order')
            ->filters([
                Tables\Filters\SelectFilter::make('category')
                    ->options([
                        'adventure' => 'Adventure',
                        'wildlife' => 'Wildlife',
                        'cultural' => 'Cultural',
                        'nature' => 'Nature',
                        'water_sports' => 'Water Sports',
                        'hiking' => 'Hiking',
                        'photography' => 'Photography',
                        'family' => 'Family',
                        'extreme_sports' => 'Extreme Sports',
                    ]),
                Tables\Filters\SelectFilter::make('difficulty')
                    ->options([
                        'easy' => 'Easy',
                        'moderate' => 'Moderate',
                        'challenging' => 'Challenging',
                        'difficult' => 'Difficult',
                        'extreme' => 'Extreme',
                    ]),
                Tables\Filters\SelectFilter::make('region')
                    ->relationship('region', 'name')
                    ->searchable()
                    ->preload(),
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
            'index' => Pages\ListActivities::route('/'),
            'create' => Pages\CreateActivity::route('/create'),
            'edit' => Pages\EditActivity::route('/{record}/edit'),
        ];
    }
}
