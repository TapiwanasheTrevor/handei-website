<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class RegionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $regions = [
            [
                'name' => 'Matabeleland North',
                'slug' => 'matabeleland-north',
                'description' => 'Home to Victoria Falls and Hwange National Park, this region offers world-class wildlife viewing and the spectacular Victoria Falls.',
                'coordinates' => [
                    'latitude' => -18.2861,
                    'longitude' => 26.0618,
                    'zoom' => 8
                ],
                'sort_order' => 1,
                'is_active' => true,
            ],
            [
                'name' => 'Matabeleland South',
                'slug' => 'matabeleland-south',
                'description' => 'Known for its ancient rock formations, archaeological sites, and the mystical Matobo Hills with their balancing rocks.',
                'coordinates' => [
                    'latitude' => -20.6693,
                    'longitude' => 28.4456,
                    'zoom' => 8
                ],
                'sort_order' => 2,
                'is_active' => true,
            ],
            [
                'name' => 'Midlands',
                'slug' => 'midlands',
                'description' => 'The heart of Zimbabwe, featuring mining heritage, diverse landscapes, and gateway to many attractions.',
                'coordinates' => [
                    'latitude' => -19.0154,
                    'longitude' => 29.1549,
                    'zoom' => 8
                ],
                'sort_order' => 3,
                'is_active' => true,
            ],
            [
                'name' => 'Masvingo',
                'slug' => 'masvingo',
                'description' => 'Home to the Great Zimbabwe ruins, ancient history, and Lake Mutirikwi for water sports and relaxation.',
                'coordinates' => [
                    'latitude' => -20.0637,
                    'longitude' => 30.8737,
                    'zoom' => 8
                ],
                'sort_order' => 4,
                'is_active' => true,
            ],
            [
                'name' => 'Manicaland',
                'slug' => 'manicaland',
                'description' => 'Eastern highlands with cool climate, waterfalls, tea estates, and beautiful mountain scenery.',
                'coordinates' => [
                    'latitude' => -18.9663,
                    'longitude' => 32.6698,
                    'zoom' => 8
                ],
                'sort_order' => 5,
                'is_active' => true,
            ],
            [
                'name' => 'Mashonaland East',
                'slug' => 'mashonaland-east',
                'description' => 'Rich agricultural region with historical sites, granite formations, and traditional culture.',
                'coordinates' => [
                    'latitude' => -17.5949,
                    'longitude' => 31.9526,
                    'zoom' => 8
                ],
                'sort_order' => 6,
                'is_active' => true,
            ],
            [
                'name' => 'Mashonaland West',
                'slug' => 'mashonaland-west',
                'description' => 'Features Lake Kariba, houseboats, fishing, and diverse wildlife along the Zambezi Valley.',
                'coordinates' => [
                    'latitude' => -17.0464,
                    'longitude' => 29.9117,
                    'zoom' => 8
                ],
                'sort_order' => 7,
                'is_active' => true,
            ],
            [
                'name' => 'Mashonaland Central',
                'slug' => 'mashonaland-central',
                'description' => 'Agricultural heartland with traditional villages, granite outcrops, and cultural experiences.',
                'coordinates' => [
                    'latitude' => -16.7473,
                    'longitude' => 31.0522,
                    'zoom' => 8
                ],
                'sort_order' => 8,
                'is_active' => true,
            ],
            [
                'name' => 'Harare',
                'slug' => 'harare',
                'description' => 'The capital city and metropolitan province, offering urban attractions, cultural sites, and modern amenities.',
                'coordinates' => [
                    'latitude' => -17.8292,
                    'longitude' => 31.0522,
                    'zoom' => 10
                ],
                'sort_order' => 9,
                'is_active' => true,
            ],
            [
                'name' => 'Bulawayo',
                'slug' => 'bulawayo',
                'description' => 'Zimbabwe\'s second largest city, rich in industrial heritage, museums, and cultural attractions.',
                'coordinates' => [
                    'latitude' => -20.1594,
                    'longitude' => 28.5708,
                    'zoom' => 10
                ],
                'sort_order' => 10,
                'is_active' => true,
            ],
        ];

        foreach ($regions as $region) {
            \App\Models\Region::create($region);
        }
    }
}
