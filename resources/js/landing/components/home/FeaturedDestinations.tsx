'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, MapPin, Clock, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const FeaturedDestinations = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const destinations = [
    {
      id: 'victoria-falls',
      name: 'Victoria Falls',
      location: 'Matabeleland North',
      image: 'https://images.pexels.com/photos/2161449/pexels-photo-2161449.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      description: 'The thundering spectacle known as "The Smoke that Thunders" - one of the Seven Natural Wonders.',
      duration: '2-3 Days',
      rating: 4.9,
      highlights: ['Waterfall Views', 'Adventure Sports', 'Wildlife'],
      bestTime: 'Apr - Jun'
    },
    {
      id: 'great-zimbabwe',
      name: 'Great Zimbabwe',
      location: 'Masvingo',
      image: 'https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      description: 'Ancient stone city ruins that gave Zimbabwe its name - a UNESCO World Heritage Site.',
      duration: '1-2 Days',
      rating: 4.7,
      highlights: ['Historical Sites', 'Archaeological Tours', 'Cultural Heritage'],
      bestTime: 'May - Sep'
    },
    {
      id: 'hwange',
      name: 'Hwange National Park',
      location: 'Matabeleland North',
      image: 'https://images.pexels.com/photos/1183099/pexels-photo-1183099.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      description: 'Zimbabwe\'s largest national park, home to over 40,000 elephants and diverse wildlife.',
      duration: '3-5 Days',
      rating: 4.8,
      highlights: ['Big Five', 'Game Drives', 'Photography'],
      bestTime: 'May - Oct'
    },
    {
      id: 'matobo',
      name: 'Matobo Hills',
      location: 'Matabeleland South',
      image: 'https://images.pexels.com/photos/2398220/pexels-photo-2398220.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      description: 'Mystical granite formations with ancient rock art and Cecil Rhodes\' grave.',
      duration: '1-2 Days',
      rating: 4.6,
      highlights: ['Rock Formations', 'Rock Art', 'Scenic Views'],
      bestTime: 'Apr - Oct'
    },
    {
      id: 'mana-pools',
      name: 'Mana Pools',
      location: 'Mashonaland West',
      image: 'https://images.pexels.com/photos/1670732/pexels-photo-1670732.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      description: 'Remote wilderness area along the Zambezi River, perfect for walking safaris.',
      duration: '3-4 Days',
      rating: 4.9,
      highlights: ['Walking Safaris', 'Canoeing', 'Remote Wilderness'],
      bestTime: 'May - Oct'
    },
    {
      id: 'eastern-highlands',
      name: 'Eastern Highlands',
      location: 'Manicaland',
      image: 'https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      description: 'Misty mountains, pine forests, and trout fishing in Zimbabwe\'s coolest region.',
      duration: '2-3 Days',
      rating: 4.5,
      highlights: ['Mountain Views', 'Hiking', 'Cool Climate'],
      bestTime: 'Apr - Sep'
    },
    {
      id: 'kariba',
      name: 'Lake Kariba',
      location: 'Mashonaland West',
      image: 'https://images.pexels.com/photos/1029604/pexels-photo-1029604.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      description: 'One of the world\'s largest artificial lakes, perfect for houseboats and fishing.',
      duration: '2-4 Days',
      rating: 4.4,
      highlights: ['Water Sports', 'Houseboats', 'Fishing'],
      bestTime: 'Apr - Oct'
    },
    {
      id: 'chinhoyi-caves',
      name: 'Chinhoyi Caves',
      location: 'Mashonaland West',
      image: 'https://images.pexels.com/photos/3225528/pexels-photo-3225528.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      description: 'Crystal-clear underground pools in limestone caves, perfect for diving.',
      duration: '1 Day',
      rating: 4.3,
      highlights: ['Cave Diving', 'Underground Pools', 'Unique Geology'],
      bestTime: 'Year Round'
    },
  ];

  const itemsPerPage = 4;
  const maxIndex = Math.ceil(destinations.length / itemsPerPage) - 1;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const visibleDestinations = destinations.slice(
    currentIndex * itemsPerPage,
    (currentIndex + 1) * itemsPerPage
  );

  return (
    <section className="section-padding bg-background">
      <div className="max-w-7xl mx-auto container-padding">
        {/* Header */}
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gradient">
              Featured Destinations
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Discover Zimbabwe's most spectacular destinations, each offering unique experiences 
              and unforgettable memories.
            </p>
          </div>
          <div className="hidden md:flex space-x-2">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="hover:bg-primary hover:text-primary-foreground"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="hover:bg-primary hover:text-primary-foreground"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {visibleDestinations.map((destination, index) => (
            <Card 
              key={destination.id} 
              className="card-hover overflow-hidden border-0 shadow-lg group bg-white"
            >
              <div className="relative overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Rating Badge */}
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center space-x-1">
                  <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                  <span className="text-xs font-semibold">{destination.rating}</span>
                </div>

                {/* Best Time Badge */}
                <div className="absolute top-3 left-3">
                  <Badge variant="secondary" className="text-xs">
                    Best: {destination.bestTime}
                  </Badge>
                </div>

                {/* Location */}
                <div className="absolute bottom-3 left-3 flex items-center space-x-1 text-white">
                  <MapPin className="h-3 w-3" />
                  <span className="text-xs">{destination.location}</span>
                </div>
              </div>

              <CardContent className="p-4">
                <div className="mb-3">
                  <h3 className="text-lg font-bold text-primary group-hover:text-secondary transition-colors mb-1">
                    {destination.name}
                  </h3>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-2">
                    <Clock className="h-3 w-3" />
                    <span>{destination.duration}</span>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                  {destination.description}
                </p>

                {/* Highlights */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {destination.highlights.slice(0, 2).map((highlight) => (
                    <Badge key={highlight} variant="outline" className="text-xs">
                      {highlight}
                    </Badge>
                  ))}
                  {destination.highlights.length > 2 && (
                    <Badge variant="outline" className="text-xs">
                      +{destination.highlights.length - 2}
                    </Badge>
                  )}
                </div>

                <Link href={`/destinations/${destination.id}`}>
                  <Button className="w-full btn-primary text-sm">
                    Explore Destination
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mobile Navigation */}
        <div className="flex md:hidden justify-center space-x-2 mb-8">
          <Button
            variant="outline"
            size="icon"
            onClick={prevSlide}
            className="hover:bg-primary hover:text-primary-foreground"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={nextSlide}
            className="hover:bg-primary hover:text-primary-foreground"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center space-x-2">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 w-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-primary w-8' : 'bg-gray-300'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link href="/destinations">
            <Button size="lg" className="btn-secondary px-8">
              View All Destinations
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDestinations;