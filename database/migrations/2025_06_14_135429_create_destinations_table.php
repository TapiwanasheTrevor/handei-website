<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('destinations', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('slug')->unique();
            $table->text('description');
            $table->text('overview')->nullable();
            $table->json('images');
            $table->string('featured_image');
            $table->foreignId('region_id')->constrained()->onDelete('cascade');
            $table->string('type')->default('attraction'); // attraction, national_park, historical_site, etc.
            $table->decimal('latitude', 10, 8)->nullable();
            $table->decimal('longitude', 11, 8)->nullable();
            $table->string('best_time_to_visit')->nullable();
            $table->string('duration')->nullable();
            $table->decimal('rating', 3, 2)->default(0);
            $table->integer('review_count')->default(0);
            $table->json('highlights')->nullable();
            $table->json('what_to_bring')->nullable();
            $table->json('travel_tips')->nullable();
            $table->string('entry_fee')->nullable();
            $table->text('how_to_get_there')->nullable();
            $table->json('weather_info')->nullable();
            $table->json('seo_meta')->nullable();
            $table->integer('sort_order')->default(0);
            $table->boolean('is_featured')->default(false);
            $table->boolean('is_active')->default(true);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('destinations');
    }
};
