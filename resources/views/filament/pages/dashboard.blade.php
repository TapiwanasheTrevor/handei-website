<x-filament-panels::page>
    <div class="space-y-6">
        {{-- Welcome Section --}}
        <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div class="flex items-center justify-between">
                <div>
                    <h1 class="text-2xl font-bold text-gray-900">
                        Welcome to Handei Zimbabwe CMS
                    </h1>
                    <p class="text-gray-600 mt-1">
                        Manage your tourism platform content, monitor performance, and grow Zimbabwe's tourism.
                    </p>
                </div>
                <div class="hidden md:block">
                    <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                        <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>

        {{-- Quick Actions --}}
        <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-4 mb-6">
            <h3 class="text-sm font-semibold text-gray-700 mb-3">Quick Actions</h3>
            <div class="flex flex-wrap gap-2">
                <a href="{{ route('filament.admin.resources.destinations.create') }}" 
                   class="flex-1 min-w-0 group bg-green-50 border border-green-200 p-3 rounded-lg hover:bg-green-100 hover:border-green-300 transition-all">
                    <div class="flex items-center justify-center">
                        <svg class="w-5 h-5 mr-2 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                        </svg>
                        <span class="font-medium text-sm text-green-700">Add Destination</span>
                    </div>
                </a>

                <a href="{{ route('filament.admin.resources.activities.create') }}" 
                   class="flex-1 min-w-0 group bg-blue-50 border border-blue-200 p-3 rounded-lg hover:bg-blue-100 hover:border-blue-300 transition-all">
                    <div class="flex items-center justify-center">
                        <svg class="w-5 h-5 mr-2 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                        </svg>
                        <span class="font-medium text-sm text-blue-700">Add Activity</span>
                    </div>
                </a>

                <a href="{{ route('filament.admin.resources.hero-slides.create') }}" 
                   class="flex-1 min-w-0 group bg-purple-50 border border-purple-200 p-3 rounded-lg hover:bg-purple-100 hover:border-purple-300 transition-all">
                    <div class="flex items-center justify-center">
                        <svg class="w-5 h-5 mr-2 text-purple-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                        </svg>
                        <span class="font-medium text-sm text-purple-700">Add Hero Slide</span>
                    </div>
                </a>

                <a href="{{ route('filament.admin.resources.settings.index') }}" 
                   class="flex-1 min-w-0 group bg-gray-50 border border-gray-200 p-3 rounded-lg hover:bg-gray-100 hover:border-gray-300 transition-all">
                    <div class="flex items-center justify-center">
                        <svg class="w-5 h-5 mr-2 text-gray-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                        </svg>
                        <span class="font-medium text-sm text-gray-700">Site Settings</span>
                    </div>
                </a>
            </div>
        </div>

        {{-- Dashboard Widgets --}}
        <div class="space-y-6">
            {{-- Stats Widgets --}}
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                @livewire(\App\Filament\Widgets\PlatformQuickStats::class)
                @livewire(\App\Filament\Widgets\StatsOverview::class)
            </div>

            {{-- Chart Tabs --}}
            <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6" x-data="{ activeTab: 'regions' }">
                <div class="border-b border-gray-200">
                    <nav class="-mb-px flex space-x-8">
                        <button @click="activeTab = 'regions'" 
                                :class="{ 'border-green-500 text-green-600': activeTab === 'regions', 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300': activeTab !== 'regions' }"
                                class="whitespace-nowrap py-2 px-1 border-b-2 font-medium text-sm transition-colors">
                            Destinations by Region
                        </button>
                        <button @click="activeTab = 'types'" 
                                :class="{ 'border-green-500 text-green-600': activeTab === 'types', 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300': activeTab !== 'types' }"
                                class="whitespace-nowrap py-2 px-1 border-b-2 font-medium text-sm transition-colors">
                            Destinations by Type
                        </button>
                        <button @click="activeTab = 'activities'" 
                                :class="{ 'border-green-500 text-green-600': activeTab === 'activities', 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300': activeTab !== 'activities' }"
                                class="whitespace-nowrap py-2 px-1 border-b-2 font-medium text-sm transition-colors">
                            Activities by Category
                        </button>
                    </nav>
                </div>

                <div class="mt-6">
                    <div x-show="activeTab === 'regions'" x-transition>
                        @livewire(\App\Filament\Widgets\RegionDestinationsChart::class)
                    </div>
                    <div x-show="activeTab === 'types'" x-transition>
                        @livewire(\App\Filament\Widgets\DestinationTypesChart::class)
                    </div>
                    <div x-show="activeTab === 'activities'" x-transition>
                        @livewire(\App\Filament\Widgets\ActivityOverview::class)
                    </div>
                </div>
            </div>

            {{-- Recent Destinations --}}
            <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                @livewire(\App\Filament\Widgets\RecentDestinations::class)
            </div>
        </div>

        {{-- Platform Links --}}
        <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 class="text-lg font-semibold text-gray-900 mb-4">Platform Links</h3>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <a href="{{ url('/') }}" target="_blank" 
                   class="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                    <svg class="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                    </svg>
                    <div>
                        <div class="font-medium text-gray-900">Frontend Website</div>
                        <div class="text-sm text-gray-500">View public tourism site</div>
                    </div>
                </a>

                <a href="{{ url('/api/v1/destinations') }}" target="_blank" 
                   class="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                    <svg class="w-5 h-5 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2z"/>
                    </svg>
                    <div>
                        <div class="font-medium text-gray-900">API Endpoints</div>
                        <div class="text-sm text-gray-500">Developer API access</div>
                    </div>
                </a>

                <div class="flex items-center p-3 border border-gray-200 rounded-lg">
                    <svg class="w-5 h-5 text-purple-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    <div>
                        <div class="font-medium text-gray-900">Platform Status</div>
                        <div class="text-sm text-green-600 font-medium">Operational</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</x-filament-panels::page>