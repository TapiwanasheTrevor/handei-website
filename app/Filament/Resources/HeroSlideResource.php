<?php

namespace App\Filament\Resources;

use App\Filament\Resources\HeroSlideResource\Pages;
use App\Filament\Resources\HeroSlideResource\RelationManagers;
use App\Models\HeroSlide;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class HeroSlideResource extends Resource
{
    protected static ?string $model = HeroSlide::class;

    protected static ?string $navigationIcon = 'heroicon-o-photo';
    protected static ?string $navigationGroup = 'Content Management';
    protected static ?int $navigationSort = 3;
    protected static ?string $label = 'Hero Slides';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Section::make('Slide Content')
                    ->schema([
                        Forms\Components\TextInput::make('title')
                            ->required()
                            ->maxLength(255)
                            ->placeholder('Main headline for the slide'),
                        Forms\Components\TextInput::make('subtitle')
                            ->maxLength(255)
                            ->placeholder('Optional subtitle or tagline'),
                        Forms\Components\RichEditor::make('description')
                            ->required()
                            ->maxLength(500)
                            ->placeholder('Brief description - keep it concise for better readability')
                            ->columnSpanFull(),
                    ])->columns(2),
                    
                Forms\Components\Section::make('Media')
                    ->schema([
                        Forms\Components\FileUpload::make('image')
                            ->image()
                            ->imageEditor()
                            ->directory('hero-slides')
                            ->required()
                            ->maxSize(5120)
                            ->helperText('Upload high-quality images (recommended: 1920x1080px or larger)')
                            ->columnSpanFull(),
                    ]),
                    
                Forms\Components\Section::make('Call to Action')
                    ->schema([
                        Forms\Components\TextInput::make('cta_text')
                            ->placeholder('e.g., Explore Now, Learn More, Book Tour')
                            ->maxLength(50),
                        Forms\Components\TextInput::make('cta_url')
                            ->url()
                            ->placeholder('https://example.com or /destinations/victoria-falls'),
                    ])->columns(2),
                    
                Forms\Components\Section::make('Settings')
                    ->schema([
                        Forms\Components\TextInput::make('sort_order')
                            ->numeric()
                            ->default(0)
                            ->minValue(0)
                            ->helperText('Lower numbers appear first'),
                        Forms\Components\Toggle::make('is_active')
                            ->default(true)
                            ->helperText('Only active slides will be displayed'),
                    ])->columns(2),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\ImageColumn::make('image')
                    ->size(80)
                    ->rounded(),
                Tables\Columns\TextColumn::make('title')
                    ->searchable()
                    ->sortable()
                    ->weight('medium')
                    ->wrap()
                    ->limit(50),
                Tables\Columns\TextColumn::make('subtitle')
                    ->searchable()
                    ->wrap()
                    ->limit(40)
                    ->placeholder('No subtitle'),
                Tables\Columns\TextColumn::make('description')
                    ->html()
                    ->limit(60)
                    ->wrap(),
                Tables\Columns\TextColumn::make('cta_text')
                    ->searchable()
                    ->badge()
                    ->color('primary')
                    ->placeholder('No CTA'),
                Tables\Columns\TextColumn::make('sort_order')
                    ->numeric()
                    ->sortable()
                    ->alignCenter()
                    ->badge()
                    ->color('gray'),
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
                Tables\Filters\TernaryFilter::make('is_active')
                    ->label('Active Status')
                    ->boolean()
                    ->trueLabel('Active only')
                    ->falseLabel('Inactive only')
                    ->native(false),
                Tables\Filters\Filter::make('has_cta')
                    ->label('Has Call to Action')
                    ->query(fn (Builder $query): Builder => $query->whereNotNull('cta_text'))
                    ->toggle(),
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
            'index' => Pages\ListHeroSlides::route('/'),
            'create' => Pages\CreateHeroSlide::route('/create'),
            'edit' => Pages\EditHeroSlide::route('/{record}/edit'),
        ];
    }
}
