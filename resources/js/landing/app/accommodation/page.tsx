'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Calendar, MapPin, Users, Star, Wifi, Car, 
  Coffee, Utensils, Dumbbell, Waves, Bell,
  Mail, CheckCircle, ArrowRight, Building2
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

const AccommodationPage = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const comingSoonFeatures = [
    {
      icon: Calendar,
      title: 'Real-Time Availability',
      description: 'Check availability and make instant bookings with live calendar updates.'
    },
    {
      icon: MapPin,
      title: 'Interactive Maps',
      description: 'Explore accommodations with detailed location maps and nearby attractions.'
    },
    {
      icon: Users,
      title: 'Guest Reviews',
      description: 'Read authentic reviews from verified guests to make informed decisions.'
    },
    {
      icon: Star,
      title: 'Quality Ratings',
      description: 'Browse accommodations rated and verified by our quality assurance team.'
    }
  ];

  const accommodationTypes = [
    {
      type: 'Safari Lodges',
      count: '50+',
      image: 'https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      description: 'Luxury safari experiences in national parks',
      amenities: ['Game Drives', 'Spa Services', 'Fine Dining', 'Private Pools']
    },
    {
      type: 'City Hotels',
      count: '120+',
      image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      description: 'Modern comfort in Zimbabwe\'s major cities',
      amenities: ['Business Center', 'Fitness Center', 'Restaurant', 'Conference Rooms']
    },
    {
      type: 'Boutique Guesthouses',
      count: '80+',
      image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      description: 'Intimate and personalized accommodations',
      amenities: ['Personal Service', 'Home Cooking', 'Local Tours', 'Cultural Experiences']
    },
    {
      type: 'Adventure Camps',
      count: '30+',
      image: 'https://images.pexels.com/photos/1687845/pexels-photo-1687845.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      description: 'Perfect for outdoor enthusiasts and adventurers',
      amenities: ['Adventure Activities', 'Campfire Experiences', 'Guided Tours', 'Equipment Rental']
    },
    {
      type: 'Lake Resorts',
      count: '25+',
      image: 'https://images.pexels.com/photos/1029604/pexels-photo-1029604.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      description: 'Waterfront relaxation with stunning views',
      amenities: ['Water Sports', 'Fishing', 'Boat Trips', 'Lakeside Dining']
    },
    {
      type: 'Historic Hotels',
      count: '15+',
      image: 'https://images.pexels.com/photos/2034335/pexels-photo-2034335.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      description: 'Heritage properties with colonial charm',
      amenities: ['Historic Architecture', 'Traditional Service', 'Heritage Tours', 'Classic Dining']
    }
  ];

  const partnerBenefits = [
    'Commission-free direct bookings',
    'Real-time inventory management',
    'Professional photography',
    'Marketing support',
    'Guest communication tools',
    'Revenue analytics',
    'Mobile-friendly booking system',
    '24/7 technical support'
  ];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[500px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80" />
        </div>
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="max-w-4xl mx-auto container-padding">
            <Badge className="mb-4 bg-secondary text-white">Coming Soon</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              GuestBook Accommodation Platform
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Zimbabwe's most comprehensive accommodation booking platform is coming soon. 
              From luxury safari lodges to boutique guesthouses, find your perfect stay.
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-md mx-auto">
              <h3 className="text-white font-semibold mb-4">Be the first to know when we launch</h3>
              <form onSubmit={handleSubscribe} className="space-y-3">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-white"
                />
                <Button type="submit" className="w-full btn-secondary">
                  {isSubscribed ? (
                    <>
                      <CheckCircle className="mr-2 h-4 w-4" />
                      Subscribed!
                    </>
                  ) : (
                    <>
                      <Bell className="mr-2 h-4 w-4" />
                      Notify Me
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon Features */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What's Coming to GuestBook
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our comprehensive booking platform will revolutionize how you find and book accommodations in Zimbabwe
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {comingSoonFeatures.map((feature) => (
              <Card key={feature.title} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Accommodation Types Preview */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Accommodation Categories
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover the diverse range of accommodations available across Zimbabwe
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {accommodationTypes.map((accommodation) => (
              <Card key={accommodation.type} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={accommodation.image}
                    alt={accommodation.type}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {accommodation.count}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{accommodation.type}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{accommodation.description}</p>
                  <div className="space-y-2">
                    {accommodation.amenities.map((amenity, index) => (
                      <div key={index} className="flex items-center gap-2 text-xs">
                        <CheckCircle className="h-3 w-3 text-green-500" />
                        <span>{amenity}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* For Accommodation Providers */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4">For Property Owners</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Join Zimbabwe's Leading Accommodation Platform
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Partner with GuestBook to reach more travelers and grow your business. 
                Our comprehensive SaaS solution is designed specifically for Zimbabwe's tourism industry.
              </p>
              <div className="space-y-3 mb-8">
                {partnerBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button className="btn-primary">
                    Become a Partner
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Button variant="outline">
                  Download Partner Guide
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/4254552/pexels-photo-4254552.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="Hotel management"
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg border">
                <div className="flex items-center gap-3">
                  <Building2 className="h-8 w-8 text-primary" />
                  <div>
                    <p className="text-2xl font-bold">500+</p>
                    <p className="text-sm text-muted-foreground">Properties Ready</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Destinations Preview */}
      <section className="section-padding bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="max-w-4xl mx-auto container-padding text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Meanwhile, Explore Zimbabwe
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            While you wait for our booking platform, discover Zimbabwe's incredible destinations and start planning your adventure
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/destinations">
              <Button size="lg" className="btn-primary">
                Explore Destinations
              </Button>
            </Link>
            <Link href="/activities">
              <Button size="lg" variant="outline">
                Browse Activities
              </Button>
            </Link>
            <Link href="/travel-info">
              <Button size="lg" variant="outline">
                Travel Information
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-primary text-white section-padding">
        <div className="max-w-4xl mx-auto text-center container-padding">
          <h2 className="text-3xl font-bold mb-4">
            Have Questions About GuestBook?
          </h2>
          <p className="text-lg mb-8 text-white/90">
            Our team is ready to answer your questions about the upcoming booking platform and partnership opportunities
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="secondary">
                <Mail className="mr-2 h-4 w-4" />
                Contact Us
              </Button>
            </Link>
            <a 
              href="https://wa.me/263773123456" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-primary">
                WhatsApp Us
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AccommodationPage;