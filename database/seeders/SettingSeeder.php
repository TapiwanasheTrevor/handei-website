<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SettingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $settings = [
            // General Settings
            [
                'key' => 'site_name',
                'value' => 'Handei Zimbabwe',
                'type' => 'text',
                'group' => 'general',
                'description' => 'The name of the website'
            ],
            [
                'key' => 'site_tagline',
                'value' => 'Discover the Heart of Africa',
                'type' => 'text',
                'group' => 'general',
                'description' => 'Website tagline or slogan'
            ],
            [
                'key' => 'site_description',
                'value' => 'Explore Zimbabwe\'s breathtaking destinations, from the mighty Victoria Falls to ancient ruins and diverse wildlife. Plan your perfect African adventure with Handei Zimbabwe.',
                'type' => 'textarea',
                'group' => 'general',
                'description' => 'General site description for SEO'
            ],
            
            // Contact Information
            [
                'key' => 'contact_email',
                'value' => 'info@handeizimbabwe.com',
                'type' => 'email',
                'group' => 'contact',
                'description' => 'Main contact email address'
            ],
            [
                'key' => 'contact_phone',
                'value' => '+263 719 050 207',
                'type' => 'text',
                'group' => 'contact',
                'description' => 'Main contact phone number'
            ],
            [
                'key' => 'contact_address',
                'value' => '72 West Road, Avondale, Harare, Zimbabwe',
                'type' => 'textarea',
                'group' => 'contact',
                'description' => 'Physical business address'
            ],
            
            // Social Media
            [
                'key' => 'social_facebook',
                'value' => 'https://facebook.com/handeizimbabwe',
                'type' => 'url',
                'group' => 'social',
                'description' => 'Facebook page URL'
            ],
            [
                'key' => 'social_instagram',
                'value' => 'https://instagram.com/handeizimbabwe',
                'type' => 'url',
                'group' => 'social',
                'description' => 'Instagram profile URL'
            ],
            [
                'key' => 'social_twitter',
                'value' => 'https://twitter.com/handeizimbabwe',
                'type' => 'url',
                'group' => 'social',
                'description' => 'Twitter profile URL'
            ],
            [
                'key' => 'social_youtube',
                'value' => 'https://youtube.com/@handeizimbabwe',
                'type' => 'url',
                'group' => 'social',
                'description' => 'YouTube channel URL'
            ],
            
            // SEO Settings
            [
                'key' => 'seo_keywords',
                'value' => 'Zimbabwe tourism, Victoria Falls, African safari, Great Zimbabwe, Hwange National Park',
                'type' => 'textarea',
                'group' => 'seo',
                'description' => 'Default SEO keywords'
            ],
            [
                'key' => 'google_analytics_id',
                'value' => '',
                'type' => 'text',
                'group' => 'seo',
                'description' => 'Google Analytics tracking ID'
            ],
            
            // Booking Settings
            [
                'key' => 'booking_enabled',
                'value' => '1',
                'type' => 'boolean',
                'group' => 'booking',
                'description' => 'Enable online booking functionality'
            ],
            [
                'key' => 'booking_email',
                'value' => 'bookings@handeizimbabwe.com',
                'type' => 'email',
                'group' => 'booking',
                'description' => 'Email for booking inquiries'
            ],
            
            // Appearance
            [
                'key' => 'featured_destinations_limit',
                'value' => '6',
                'type' => 'number',
                'group' => 'appearance',
                'description' => 'Number of featured destinations to display on homepage'
            ],
            [
                'key' => 'show_weather_widget',
                'value' => '1',
                'type' => 'boolean',
                'group' => 'appearance',
                'description' => 'Show weather information widget'
            ],
        ];

        foreach ($settings as $setting) {
            \App\Models\Setting::create($setting);
        }
    }
}
