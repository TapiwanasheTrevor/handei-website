<?php

namespace App\Filament\Resources;

use App\Filament\Resources\RestaurantResource\Pages;
use App\Filament\Resources\RestaurantResource\RelationManagers;
use App\Models\Restaurant;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class RestaurantResource extends Resource
{
    protected static ?string $model = Restaurant::class;

    protected static ?string $navigationIcon = 'heroicon-o-building-storefront';
    protected static ?string $navigationGroup = 'Content Management';
    protected static ?int $navigationSort = 6;

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('name')
                    ->required()
                    ->maxLength(255),
                Forms\Components\TextInput::make('slug')
                    ->required()
                    ->maxLength(255)
                    ->unique(ignoreRecord: true),
                Forms\Components\Textarea::make('description')
                    ->required()
                    ->columnSpanFull(),
                Forms\Components\Select::make('cuisine_type')
                    ->required()
                    ->options([
                        'african' => 'African',
                        'international' => 'International',
                        'asian' => 'Asian',
                        'european' => 'European',
                        'fusion' => 'Fusion',
                        'vegetarian' => 'Vegetarian',
                        'seafood' => 'Seafood',
                        'steakhouse' => 'Steakhouse',
                        'cafe' => 'Cafe',
                        'fast_food' => 'Fast Food',
                    ]),
                Forms\Components\Select::make('region_id')
                    ->relationship('region', 'name')
                    ->required()
                    ->searchable()
                    ->preload(),
                Forms\Components\FileUpload::make('featured_image')
                    ->image()
                    ->directory('restaurants')
                    ->required(),
                Forms\Components\TextInput::make('contact_phone')
                    ->tel(),
                Forms\Components\TextInput::make('contact_email')
                    ->email(),
                Forms\Components\TextInput::make('website')
                    ->url(),
                Forms\Components\Select::make('price_range')
                    ->options([
                        'budget' => 'Budget',
                        'mid_range' => 'Mid-range',
                        'upscale' => 'Upscale',
                        'fine_dining' => 'Fine Dining',
                    ]),
                Forms\Components\TextInput::make('rating')
                    ->numeric()
                    ->default(0)
                    ->minValue(0)
                    ->maxValue(5)
                    ->step(0.1),
                Forms\Components\Toggle::make('is_featured')
                    ->default(false),
                Forms\Components\Toggle::make('is_active')
                    ->default(true),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('name')
                    ->searchable()
                    ->sortable(),
                Tables\Columns\TextColumn::make('cuisine_type')
                    ->badge()
                    ->color('primary'),
                Tables\Columns\TextColumn::make('region.name')
                    ->sortable()
                    ->badge()
                    ->color('info'),
                Tables\Columns\TextColumn::make('price_range')
                    ->badge()
                    ->color(fn (string $state): string => match ($state) {
                        'budget' => 'success',
                        'mid_range' => 'warning',
                        'upscale' => 'danger',
                        'fine_dining' => 'primary',
                        default => 'gray',
                    }),
                Tables\Columns\TextColumn::make('rating')
                    ->numeric()
                    ->sortable()
                    ->formatStateUsing(fn ($state) => $state ? number_format($state, 1) . '/5' : 'No rating'),
                Tables\Columns\IconColumn::make('is_featured')
                    ->boolean(),
                Tables\Columns\IconColumn::make('is_active')
                    ->boolean(),
            ])
            ->filters([
                //
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
            'index' => Pages\ListRestaurants::route('/'),
            'create' => Pages\CreateRestaurant::route('/create'),
            'edit' => Pages\EditRestaurant::route('/{record}/edit'),
        ];
    }
}
