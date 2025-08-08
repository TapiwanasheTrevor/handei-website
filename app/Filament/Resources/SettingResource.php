<?php

namespace App\Filament\Resources;

use App\Filament\Resources\SettingResource\Pages;
use App\Filament\Resources\SettingResource\RelationManagers;
use App\Models\Setting;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class SettingResource extends Resource
{
    protected static ?string $model = Setting::class;

    protected static ?string $navigationIcon = 'heroicon-o-cog-6-tooth';
    protected static ?string $navigationGroup = 'System';
    protected static ?int $navigationSort = 10;
    protected static ?string $label = 'Settings';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Section::make('Setting Information')
                    ->schema([
                        Forms\Components\TextInput::make('key')
                            ->required()
                            ->unique(ignoreRecord: true)
                            ->rules(['alpha_dash'])
                            ->placeholder('e.g., site_name, contact_email')
                            ->helperText('Use snake_case format'),
                        Forms\Components\Select::make('group')
                            ->required()
                            ->options([
                                'general' => 'General',
                                'contact' => 'Contact Information',
                                'social' => 'Social Media',
                                'seo' => 'SEO',
                                'appearance' => 'Appearance',
                                'booking' => 'Booking',
                                'email' => 'Email Settings',
                            ])
                            ->default('general'),
                        Forms\Components\Select::make('type')
                            ->required()
                            ->options([
                                'text' => 'Text',
                                'textarea' => 'Textarea',
                                'boolean' => 'Boolean',
                                'number' => 'Number',
                                'image' => 'Image',
                                'json' => 'JSON',
                                'url' => 'URL',
                                'email' => 'Email',
                            ])
                            ->default('text')
                            ->live(),
                        Forms\Components\Textarea::make('description')
                            ->placeholder('Brief description of what this setting controls')
                            ->columnSpanFull(),
                    ])->columns(2),
                    
                Forms\Components\Section::make('Setting Value')
                    ->schema([
                        Forms\Components\TextInput::make('value')
                            ->label('Value')
                            ->required()
                            ->visible(fn (callable $get) => in_array($get('type'), ['text', 'number', 'url', 'email']))
                            ->type(fn (callable $get) => match($get('type')) {
                                'number' => 'number',
                                'url' => 'url',
                                'email' => 'email',
                                default => 'text'
                            }),
                        Forms\Components\Textarea::make('value')
                            ->label('Value')
                            ->required()
                            ->visible(fn (callable $get) => $get('type') === 'textarea')
                            ->rows(4),
                        Forms\Components\Toggle::make('value')
                            ->label('Value')
                            ->visible(fn (callable $get) => $get('type') === 'boolean'),
                        Forms\Components\FileUpload::make('value')
                            ->label('Image')
                            ->image()
                            ->imageEditor()
                            ->directory('settings')
                            ->visible(fn (callable $get) => $get('type') === 'image'),
                        Forms\Components\KeyValue::make('value')
                            ->label('JSON Value')
                            ->visible(fn (callable $get) => $get('type') === 'json')
                            ->columnSpanFull(),
                    ]),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('key')
                    ->searchable()
                    ->sortable()
                    ->weight('medium')
                    ->copyable(),
                Tables\Columns\TextColumn::make('group')
                    ->searchable()
                    ->badge()
                    ->color('info'),
                Tables\Columns\TextColumn::make('type')
                    ->badge()
                    ->color(fn (string $state): string => match ($state) {
                        'text' => 'gray',
                        'textarea' => 'blue',
                        'boolean' => 'success',
                        'number' => 'warning',
                        'image' => 'purple',
                        'json' => 'orange',
                        'url' => 'cyan',
                        'email' => 'pink',
                        default => 'gray',
                    }),
                Tables\Columns\TextColumn::make('value')
                    ->limit(50)
                    ->wrap()
                    ->formatStateUsing(function ($state, $record) {
                        if ($record->type === 'boolean') {
                            return $state ? 'Yes' : 'No';
                        }
                        if ($record->type === 'image' && $state) {
                            return 'Image uploaded';
                        }
                        if ($record->type === 'json' && $state) {
                            return 'JSON data';
                        }
                        return $state ?: 'No value';
                    }),
                Tables\Columns\TextColumn::make('description')
                    ->limit(60)
                    ->wrap()
                    ->placeholder('No description'),
                Tables\Columns\TextColumn::make('updated_at')
                    ->dateTime()
                    ->sortable()
                    ->since()
                    ->toggleable(),
            ])
            ->defaultSort('group')
            ->filters([
                Tables\Filters\SelectFilter::make('group')
                    ->options([
                        'general' => 'General',
                        'contact' => 'Contact Information',
                        'social' => 'Social Media',
                        'seo' => 'SEO',
                        'appearance' => 'Appearance',
                        'booking' => 'Booking',
                        'email' => 'Email Settings',
                    ]),
                Tables\Filters\SelectFilter::make('type')
                    ->options([
                        'text' => 'Text',
                        'textarea' => 'Textarea',
                        'boolean' => 'Boolean',
                        'number' => 'Number',
                        'image' => 'Image',
                        'json' => 'JSON',
                        'url' => 'URL',
                        'email' => 'Email',
                    ]),
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
            'index' => Pages\ListSettings::route('/'),
            'create' => Pages\CreateSetting::route('/create'),
            'edit' => Pages\EditSetting::route('/{record}/edit'),
        ];
    }
}
