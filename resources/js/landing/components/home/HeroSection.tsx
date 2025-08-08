'use client';

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Search, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: 'https://images.pexels.com/photos/2161449/pexels-photo-2161449.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      title: 'Victoria Falls',
      subtitle: 'The Smoke that Thunders',
      description: 'Experience the world\'s largest curtain of falling water',
    },
    {
      image: 'https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      title: 'Great Zimbabwe Ruins',
      subtitle: 'Ancient Stone City',
      description: 'Discover the mysteries of Africa\'s greatest ancient civilization',
    },
    {
      image: 'https://images.pexels.com/photos/1183099/pexels-photo-1183099.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      title: 'Wildlife Safari',
      subtitle: 'Big Five Adventures',
      description: 'Encounter elephants, lions, and rhinos in their natural habitat',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Slider */}
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div
              className="h-full bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            >
              <div className="absolute inset-0 hero-gradient" />
            </div>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="max-w-7xl mx-auto container-padding text-center text-white">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
              Discover the Jewel of Southern Africa
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              {slides[currentSlide].description}
            </p>
            
            {/* Search Bar */}
            <div className="max-w-4xl mx-auto mb-8">
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="md:col-span-1">
                    <Select>
                      <SelectTrigger className="h-12 bg-white text-foreground border-gray-200">
                        <SelectValue placeholder="Destinations" />
                      </SelectTrigger>
                      <SelectContent className="bg-white border border-gray-200 shadow-lg">
                        <SelectItem value="all" className="text-foreground hover:bg-gray-100">All Destinations</SelectItem>
                        <SelectItem value="victoria-falls" className="text-foreground hover:bg-gray-100">Victoria Falls</SelectItem>
                        <SelectItem value="great-zimbabwe" className="text-foreground hover:bg-gray-100">Great Zimbabwe</SelectItem>
                        <SelectItem value="hwange" className="text-foreground hover:bg-gray-100">Hwange National Park</SelectItem>
                        <SelectItem value="matobo" className="text-foreground hover:bg-gray-100">Matobo Hills</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="md:col-span-1">
                    <Select>
                      <SelectTrigger className="h-12 bg-white text-foreground border-gray-200">
                        <SelectValue placeholder="Activities" />
                      </SelectTrigger>
                      <SelectContent className="bg-white border border-gray-200 shadow-lg">
                        <SelectItem value="all" className="text-foreground hover:bg-gray-100">All Activities</SelectItem>
                        <SelectItem value="safari" className="text-foreground hover:bg-gray-100">Wildlife Safari</SelectItem>
                        <SelectItem value="adventure" className="text-foreground hover:bg-gray-100">Adventure Sports</SelectItem>
                        <SelectItem value="cultural" className="text-foreground hover:bg-gray-100">Cultural Tours</SelectItem>
                        <SelectItem value="water" className="text-foreground hover:bg-gray-100">Water Activities</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="md:col-span-1">
                    <div className="relative">
                      <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
                      <Input
                        type="text"
                        placeholder="Search..."
                        className="h-12 pl-12 bg-white text-foreground border-gray-200"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-1">
                    <Button className="w-full h-12 btn-primary text-lg">
                      Explore Now
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="btn-secondary text-lg px-8 py-4">
                <Play className="mr-2 h-5 w-5" />
                Explore Zimbabwe
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4">
                Plan Your Journey
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6 text-white" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-3 w-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;