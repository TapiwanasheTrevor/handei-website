'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Zap, TreePine, Users, Waves, Mountain, Binoculars,
  Filter, ChevronDown, MapPin, Clock, Star, ArrowRight
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const ActivitiesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');

  const categories = [
    { id: 'all', name: 'All Activities', icon: Filter },
    { id: 'adventure', name: 'Adventure Sports', icon: Zap },
    { id: 'wildlife', name: 'Wildlife & Safari', icon: TreePine },
    { id: 'cultural', name: 'Cultural Tours', icon: Users },
    { id: 'water', name: 'Water Activities', icon: Waves },
    { id: 'nature', name: 'Nature & Hiking', icon: Mountain },
    { id: 'birdwatching', name: 'Bird Watching', icon: Binoculars },
  ];

  const activities = [
    {
      id: 'bungee-jumping',
      name: 'Bungee Jumping',
      category: 'adventure',
      region: 'Victoria Falls',
      description: 'Take the ultimate leap of faith from the Victoria Falls Bridge, 111 meters above the Zambezi River.',
      duration: '1-2 hours',
      difficulty: 'extreme',
      price: 'From $160',
      rating: 4.9,
      image: 'https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      highlights: ['111m Jump', 'Safety Certified', 'Video Available']
    },
    {
      id: 'white-water-rafting',
      name: 'White Water Rafting',
      category: 'adventure',
      region: 'Victoria Falls',
      description: 'Navigate the mighty Zambezi\'s rapids in one of the world\'s best white water rafting experiences.',
      duration: 'Full day',
      difficulty: 'high',
      price: 'From $145',
      rating: 4.8,
      image: 'https://images.pexels.com/photos/1305095/pexels-photo-1305095.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      highlights: ['Grade 5 Rapids', 'Professional Guides', 'Lunch Included']
    },
    {
      id: 'game-drive-hwange',
      name: 'Game Drive in Hwange',
      category: 'wildlife',
      region: 'Hwange',
      description: 'Experience the Big Five in Zimbabwe\'s largest national park with expert guides.',
      duration: '3-4 hours',
      difficulty: 'easy',
      price: 'From $85',
      rating: 4.9,
      image: 'https://images.pexels.com/photos/1183099/pexels-photo-1183099.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      highlights: ['Big Five', 'Open Vehicle', 'Sundowners']
    },
    {
      id: 'walking-safari',
      name: 'Walking Safari',
      category: 'wildlife',
      region: 'Mana Pools',
      description: 'Get close to nature on foot with experienced guides in the wilderness of Mana Pools.',
      duration: '3 hours',
      difficulty: 'moderate',
      price: 'From $95',
      rating: 4.7,
      image: 'https://images.pexels.com/photos/1670732/pexels-photo-1670732.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      highlights: ['Expert Tracking', 'Small Groups', 'Photography']
    },
    {
      id: 'cultural-village-tour',
      name: 'Traditional Village Tour',
      category: 'cultural',
      region: 'Victoria Falls',
      description: 'Immerse yourself in local culture with traditional dancing, crafts, and village life.',
      duration: '2-3 hours',
      difficulty: 'easy',
      price: 'From $45',
      rating: 4.6,
      image: 'https://images.pexels.com/photos/3030268/pexels-photo-3030268.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      highlights: ['Local Culture', 'Traditional Dancing', 'Craft Markets']
    },
    {
      id: 'sunset-cruise',
      name: 'Zambezi Sunset Cruise',
      category: 'water',
      region: 'Victoria Falls',
      description: 'Relax on the Zambezi River with drinks and snacks while watching hippos and crocodiles.',
      duration: '2 hours',
      difficulty: 'easy',
      price: 'From $65',
      rating: 4.8,
      image: 'https://images.pexels.com/photos/1029604/pexels-photo-1029604.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      highlights: ['Sunset Views', 'Wildlife Viewing', 'Drinks Included']
    },
    {
      id: 'canoe-safari',
      name: 'Canoe Safari',
      category: 'water',
      region: 'Lower Zambezi',
      description: 'Paddle along the Zambezi River for close encounters with elephants and other wildlife.',
      duration: 'Half day',
      difficulty: 'moderate',
      price: 'From $120',
      rating: 4.7,
      image: 'https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      highlights: ['Wildlife Encounters', 'Experienced Guides', 'Refreshments']
    },
    {
      id: 'matobo-hiking',
      name: 'Matobo Hills Hiking',
      category: 'nature',
      region: 'Matobo',
      description: 'Explore ancient rock formations and see rock art while hiking through mystical landscapes.',
      duration: '4 hours',
      difficulty: 'moderate',
      price: 'From $55',
      rating: 4.6,
      image: 'https://images.pexels.com/photos/2398220/pexels-photo-2398220.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      highlights: ['Rock Art', 'Scenic Views', 'Historical Sites']
    },
  ];

  const filteredActivities = activities.filter(activity => {
    const categoryMatch = selectedCategory === 'all' || activity.category === selectedCategory;
    const regionMatch = selectedRegion === 'all' || activity.region === selectedRegion;
    const difficultyMatch = selectedDifficulty === 'all' || activity.difficulty === selectedDifficulty;
    return categoryMatch && regionMatch && difficultyMatch;
  });

  const regions = ['all', 'Victoria Falls', 'Hwange', 'Mana Pools', 'Matobo', 'Lower Zambezi'];
  const difficulties = ['all', 'easy', 'moderate', 'high', 'extreme'];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[400px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/163491/bike-mountain-mountain-biking-trail-163491.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70" />
        </div>
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="max-w-4xl mx-auto container-padding">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Activities & Experiences
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              From heart-pounding adventures to peaceful wildlife encounters, 
              discover experiences that will create memories to last a lifetime.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="sticky top-20 z-40 bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto container-padding py-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Category Tabs */}
            <div className="flex overflow-x-auto gap-2 pb-2 lg:pb-0 w-full lg:w-auto">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 whitespace-nowrap ${
                    selectedCategory === category.id ? 'bg-primary text-white' : ''
                  }`}
                >
                  <category.icon className="h-4 w-4" />
                  {category.name}
                </Button>
              ))}
            </div>

            {/* Dropdown Filters */}
            <div className="flex gap-2 w-full lg:w-auto">
              <Select value={selectedRegion} onValueChange={setSelectedRegion}>
                <SelectTrigger className="w-full lg:w-[180px]">
                  <SelectValue placeholder="All Regions" />
                </SelectTrigger>
                <SelectContent className="bg-white border border-gray-200 shadow-lg">
                  {regions.map((region) => (
                    <SelectItem key={region} value={region} className="text-foreground hover:bg-gray-100">
                      {region === 'all' ? 'All Regions' : region}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedDifficulty} onValueChange={setSelectedDifficulty}>
                <SelectTrigger className="w-full lg:w-[180px]">
                  <SelectValue placeholder="All Levels" />
                </SelectTrigger>
                <SelectContent className="bg-white border border-gray-200 shadow-lg">
                  {difficulties.map((difficulty) => (
                    <SelectItem key={difficulty} value={difficulty} className="text-foreground hover:bg-gray-100">
                      {difficulty === 'all' ? 'All Levels' : difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Activities Grid */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto container-padding">
          {filteredActivities.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">No activities found matching your criteria.</p>
              <Button 
                variant="outline" 
                className="mt-4"
                onClick={() => {
                  setSelectedCategory('all');
                  setSelectedRegion('all');
                  setSelectedDifficulty('all');
                }}
              >
                Clear Filters
              </Button>
            </div>
          ) : (
            <>
              <div className="flex justify-between items-center mb-8">
                <p className="text-muted-foreground">
                  Showing {filteredActivities.length} activities
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredActivities.map((activity) => (
                  <Card key={activity.id} className="overflow-hidden hover:shadow-xl transition-shadow">
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={activity.image}
                        alt={activity.name}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      
                      {/* Difficulty Badge */}
                      <div className="absolute top-3 left-3">
                        <Badge 
                          variant={
                            activity.difficulty === 'easy' ? 'secondary' :
                            activity.difficulty === 'moderate' ? 'default' :
                            'destructive'
                          }
                        >
                          {activity.difficulty.charAt(0).toUpperCase() + activity.difficulty.slice(1)}
                        </Badge>
                      </div>

                      {/* Rating */}
                      <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center space-x-1">
                        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        <span className="text-xs font-semibold">{activity.rating}</span>
                      </div>

                      {/* Location & Duration */}
                      <div className="absolute bottom-3 left-3 right-3 flex justify-between items-center text-white">
                        <div className="flex items-center space-x-1">
                          <MapPin className="h-3 w-3" />
                          <span className="text-sm">{activity.region}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-3 w-3" />
                          <span className="text-sm">{activity.duration}</span>
                        </div>
                      </div>
                    </div>

                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-2">{activity.name}</h3>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                        {activity.description}
                      </p>

                      {/* Highlights */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {activity.highlights.map((highlight, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {highlight}
                          </Badge>
                        ))}
                      </div>

                      {/* Price and CTA */}
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-bold text-primary">{activity.price}</span>
                        <Button className="btn-primary">
                          Book Now
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary/10 to-secondary/10 section-padding">
        <div className="max-w-4xl mx-auto text-center container-padding">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            We can help you create a custom itinerary tailored to your interests and adventure level.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="btn-primary">
                Plan Custom Experience
              </Button>
            </Link>
            <Button size="lg" variant="outline">
              Download Activity Guide
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ActivitiesPage;