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
        Schema::create('activities', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('slug')->unique();
            $table->text('description');
            $table->string('category'); // adventure, wildlife, cultural, water, nature, birdwatching
            $table->foreignId('region_id')->constrained()->onDelete('cascade');
            $table->foreignId('destination_id')->nullable()->constrained()->onDelete('cascade');
            $table->string('duration');
            $table->string('difficulty'); // easy, moderate, high, extreme
            $table->string('price_from')->nullable();
            $table->decimal('rating', 3, 2)->default(0);
            $table->integer('review_count')->default(0);
            $table->json('images');
            $table->string('featured_image');
            $table->json('highlights')->nullable();
            $table->json('what_to_bring')->nullable();
            $table->json('safety_requirements')->nullable();
            $table->string('min_age')->nullable();
            $table->string('max_group_size')->nullable();
            $table->json('availability_schedule')->nullable();
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
        Schema::dropIfExists('activities');
    }
};
