'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { MapPin, Star, Clock, Users, Filter, Search, Calendar } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const DestinationsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [selectedType, setSelectedType] = useState('all');

  const regions = [
    {
      id: 'bulawayo',
      name: 'Bulawayo',
      province: 'Bulawayo Metropolitan',
      attractions: 8,
      description: 'Zimbabwe\'s second largest city with rich industrial heritage',
    },
    {
      id: 'harare',
      name: 'Harare',
      province: 'Harare Metropolitan',
      attractions: 10,
      description: 'The vibrant capital city with museums and cultural sites',
    },
    {
      id: 'manicaland',
      name: 'Manicaland',
      province: 'Manicaland',
      attractions: 5,
      description: 'Eastern Highlands with mountains and misty landscapes',
    },
    {
      id: 'mashonaland-central',
      name: 'Mashonaland Central',
      province: 'Mashonaland Central',
      attractions: 4,
      description: 'Agricultural heartland with tobacco farming heritage',
    },
    {
      id: 'mashonaland-east',
      name: 'Mashonaland East',
      province: 'Mashonaland East',
      attractions: 4,
      description: 'Home to Mutare and border gateway to Mozambique',
    },
    {
      id: 'mashonaland-west',
      name: 'Mashonaland West',
      province: 'Mashonaland West',
      attractions: 6,
      description: 'Features Lake Kariba and Chinhoyi Caves',
    },
    {
      id: 'masvingo',
      name: 'Masvingo',
      province: 'Masvingo',
      attractions: 5,
      description: 'Ancient Great Zimbabwe ruins and archaeological sites',
    },
    {
      id: 'matabeleland-north',
      name: 'Matabeleland North',
      province: 'Matabeleland North',
      attractions: 5,
      description: 'Victoria Falls and Hwange National Park',
    },
    {
      id: 'matabeleland-south',
      name: 'Matabeleland South',
      province: 'Matabeleland South',
      attractions: 4,
      description: 'Matobo Hills and ancient rock art',
    },
    {
      id: 'midlands',
      name: 'Midlands',
      province: 'Midlands',
      attractions: 3,
      description: 'Central Zimbabwe with mining heritage',
    },
  ];

  const featuredDestinations = [
    {
      id: 'victoria-falls',
      name: 'Victoria Falls',
      region: 'Matabeleland North',
      type: 'Natural Wonder',
      image: 'https://images.pexels.com/photos/2161449/pexels-photo-2161449.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      description: 'One of the Seven Natural Wonders of the World, the largest curtain of water on Earth.',
      rating: 4.9,
      duration: '2-3 Days',
      difficulty: 'Easy',
      bestTime: 'Apr-Jun',
      highlights: ['Waterfall Views', 'Adventure Sports', 'Wildlife', 'Photography']
    },
    {
      id: 'great-zimbabwe',
      name: 'Great Zimbabwe Ruins',
      region: 'Masvingo',
      type: 'Historical Site',
      image: 'https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      description: 'Ancient stone city ruins that gave Zimbabwe its name - a UNESCO World Heritage Site.',
      rating: 4.7,
      duration: '1-2 Days',
      difficulty: 'Easy',
      bestTime: 'May-Sep',
      highlights: ['Archaeological Sites', 'Cultural Heritage', 'History', 'UNESCO Site']
    },
    {
      id: 'hwange',
      name: 'Hwange National Park',
      region: 'Matabeleland North',
      type: 'National Park',
      image: 'https://images.pexels.com/photos/1183099/pexels-photo-1183099.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      description: 'Zimbabwe\'s largest national park, home to over 40,000 elephants.',
      rating: 4.8,
      duration: '3-5 Days',
      difficulty: 'Moderate',
      bestTime: 'May-Oct',
      highlights: ['Big Five', 'Game Drives', 'Photography', 'Camping']
    },
    {
      id: 'matobo',
      name: 'Matobo Hills',
      region: 'Matabeleland South',
      type: 'National Park',
      image: 'https://images.pexels.com/photos/2398220/pexels-photo-2398220.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      description: 'Mystical granite formations with ancient rock art and scenic landscapes.',
      rating: 4.6,
      duration: '1-2 Days',
      difficulty: 'Moderate',
      bestTime: 'Apr-Oct',
      highlights: ['Rock Formations', 'Rock Art', 'Scenic Views', 'Hiking']
    },
    {
      id: 'mana-pools',
      name: 'Mana Pools National Park',
      region: 'Mashonaland West',
      type: 'National Park',
      image: 'https://images.pexels.com/photos/1670732/pexels-photo-1670732.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      description: 'Remote wilderness area along the Zambezi River, perfect for walking safaris.',
      rating: 4.9,
      duration: '3-4 Days',
      difficulty: 'Challenging',
      bestTime: 'May-Oct',
      highlights: ['Walking Safaris', 'Canoeing', 'Remote Wilderness', 'Zambezi River']
    },
    {
      id: 'eastern-highlands',
      name: 'Eastern Highlands',
      region: 'Manicaland',
      type: 'Mountain Range',
      image: 'https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      description: 'Misty mountains, pine forests, and trout fishing in Zimbabwe\'s coolest region.',
      rating: 4.5,
      duration: '2-3 Days',
      difficulty: 'Moderate',
      bestTime: 'Apr-Sep',
      highlights: ['Mountain Views', 'Hiking', 'Cool Climate', 'Trout Fishing']
    },
  ];

  const filteredDestinations = featuredDestinations.filter(destination => {
    const matchesSearch = destination.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         destination.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRegion = selectedRegion === 'all' || destination.region.toLowerCase().includes(selectedRegion.toLowerCase());
    const matchesType = selectedType === 'all' || destination.type.toLowerCase().includes(selectedType.toLowerCase());
    
    return matchesSearch && matchesRegion && matchesType;
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-primary to-accent text-white">
        <div className="max-w-7xl mx-auto container-padding text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-accent">
            Discover Zimbabwe's Destinations
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            From thundering waterfalls to ancient ruins, explore the incredible destinations 
            that make Zimbabwe a truly unique travel experience.
          </p>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-white shadow-sm sticky top-24 z-40">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search destinations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 text-black"
              />
            </div>
            <Select value={selectedRegion} onValueChange={setSelectedRegion}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="All Regions" />
              </SelectTrigger>
              <SelectContent className="bg-white border border-gray-200 shadow-lg">
                <SelectItem value="all" className="text-foreground hover:bg-gray-100">All Regions</SelectItem>
                {regions.map(region => (
                  <SelectItem key={region.id} value={region.name} className="text-foreground hover:bg-gray-100">
                    {region.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={selectedType} onValueChange={setSelectedType}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="All Types" />
              </SelectTrigger>
              <SelectContent className="bg-white border border-gray-200 shadow-lg">
                <SelectItem value="all" className="text-foreground hover:bg-gray-100">All Types</SelectItem>
                <SelectItem value="national park" className="text-foreground hover:bg-gray-100">National Parks</SelectItem>
                <SelectItem value="historical site" className="text-foreground hover:bg-gray-100">Historical Sites</SelectItem>
                <SelectItem value="natural wonder" className="text-foreground hover:bg-gray-100">Natural Wonders</SelectItem>
                <SelectItem value="mountain range" className="text-foreground hover:bg-gray-100">Mountain Ranges</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Regions Overview */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">
              Explore by Region
            </h2>
            <p className="text-lg text-black max-w-3xl mx-auto">
              Zimbabwe is divided into 10 provinces, each offering unique attractions and experiences. 
              Click on any region to discover its hidden gems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-16">
            {regions.map((region) => (
              <Card key={region.id} className="card-hover cursor-pointer group bg-white border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="bg-primary/5 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    <MapPin className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-primary group-hover:text-accent transition-colors">
                    {region.name}
                  </h3>
                  <p className="text-sm text-black mb-3">
                    {region.description}
                  </p>
                  <Badge variant="outline" className="text-xs">
                    {region.attractions} Attractions
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="section-padding bg-gradient-to-b from-secondary/5 to-background">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">
              Top Destinations
            </h2>
            <p className="text-lg text-black max-w-3xl mx-auto">
              Discover Zimbabwe's most spectacular destinations, each offering unique experiences 
              and unforgettable memories.
            </p>
            {filteredDestinations.length !== featuredDestinations.length && (
              <p className="text-sm text-black mt-2">
                Showing {filteredDestinations.length} of {featuredDestinations.length} destinations
              </p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDestinations.map((destination) => (
              <Card key={destination.id} className="card-hover overflow-hidden border-0 shadow-lg group bg-white">
                <div className="relative overflow-hidden">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Rating and Type */}
                  <div className="absolute top-4 left-4 right-4 flex justify-between">
                    <Badge variant="secondary" className="text-xs bg-secondary text-black">
                      {destination.type}
                    </Badge>
                    <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      <span className="text-xs font-semibold text-black">{destination.rating}</span>
                    </div>
                  </div>

                  {/* Location and Duration */}
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                    <div className="flex items-center space-x-1 text-white">
                      <MapPin className="h-3 w-3" />
                      <span className="text-xs">{destination.region}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-white">
                      <Clock className="h-3 w-3" />
                      <span className="text-xs">{destination.duration}</span>
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-primary group-hover:text-accent transition-colors mb-2">
                    {destination.name}
                  </h3>
                  
                  <p className="text-black text-sm mb-4 line-clamp-2 leading-relaxed">
                    {destination.description}
                  </p>

                  {/* Details */}
                  <div className="flex items-center justify-between text-xs text-black mb-4">
                    <div className="flex items-center space-x-1">
                      <Users className="h-3 w-3" />
                      <span>{destination.difficulty}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-3 w-3" />
                      <span>Best: {destination.bestTime}</span>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {destination.highlights.slice(0, 3).map((highlight) => (
                      <Badge key={highlight} variant="outline" className="text-xs">
                        {highlight}
                      </Badge>
                    ))}
                    {destination.highlights.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{destination.highlights.length - 3}
                      </Badge>
                    )}
                  </div>

                  <Link href={`/destinations/${destination.id}`}>
                    <Button className="w-full bg-primary text-white hover:bg-primary/90">
                      Explore Destination
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredDestinations.length === 0 && (
            <div className="text-center py-16">
              <div className="bg-muted/20 rounded-full p-6 w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                <Search className="h-12 w-12 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-black">No destinations found</h3>
              <p className="text-black mb-6">
                Try adjusting your search terms or filters to find more destinations.
              </p>
              <Button 
                onClick={() => {
                  setSearchTerm('');
                  setSelectedRegion('all');
                  setSelectedType('all');
                }}
                className="bg-primary text-white hover:bg-primary/90"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default DestinationsPage;