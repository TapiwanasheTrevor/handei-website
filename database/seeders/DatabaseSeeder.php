<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Create admin user if not exists
        if (!User::where('email', 'admin@handeizimbabwe.com')->exists()) {
            User::factory()->create([
                'name' => 'Admin User',
                'email' => 'admin@handeizimbabwe.com',
            ]);
        }

        // Seed the database with initial data
        $this->call([
            RegionSeeder::class,
            SettingSeeder::class,
        ]);
    }
}
