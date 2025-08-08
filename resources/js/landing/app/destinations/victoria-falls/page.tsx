'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Calendar, MapPin, Clock, Star, Camera, 
  Zap, Waves, Mountain, Car, Plane,
  ChevronLeft, ChevronRight, ArrowRight,
  Thermometer, CloudRain, Sun, Wind
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const VictoriaFallsPage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    'https://images.pexels.com/photos/2161449/pexels-photo-2161449.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
    'https://images.pexels.com/photos/2422259/pexels-photo-2422259.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
    'https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
    'https://images.pexels.com/photos/1644888/pexels-photo-1644888.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop'
  ];

  const activities = [
    {
      name: 'Bungee Jumping',
      icon: Zap,
      duration: '1-2 hours',
      difficulty: 'Extreme',
      price: 'From $160',
      description: '111-meter jump from Victoria Falls Bridge'
    },
    {
      name: 'White Water Rafting',
      icon: Waves,
      duration: 'Full day',
      difficulty: 'High',
      price: 'From $145',
      description: 'Navigate Grade 5 rapids on the Zambezi'
    },
    {
      name: 'Helicopter Flight',
      icon: Mountain,
      duration: '15-30 mins',
      difficulty: 'Easy',
      price: 'From $180',
      description: 'Aerial views of the Falls and Zambezi'
    },
    {
      name: 'Devil\'s Pool',
      icon: Waves,
      duration: '3-4 hours',
      difficulty: 'Moderate',
      price: 'From $120',
      description: 'Natural infinity pool at the edge of the Falls'
    }
  ];

  const accommodations = [
    {
      name: 'Victoria Falls Hotel',
      category: 'Luxury Hotel',
      rating: 4.8,
      price: 'From $450/night',
      image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    },
    {
      name: 'The Kingdom Hotel',
      category: 'Boutique Hotel',
      rating: 4.6,
      price: 'From $280/night',
      image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    },
    {
      name: 'Elephant Hills Resort',
      category: 'Resort',
      rating: 4.7,
      price: 'From $320/night',
      image: 'https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    }
  ];

  const weatherData = [
    { month: 'Jan', temp: '26°C', rainfall: 'High', season: 'Wet' },
    { month: 'Feb', temp: '26°C', rainfall: 'High', season: 'Wet' },
    { month: 'Mar', temp: '25°C', rainfall: 'Moderate', season: 'Wet' },
    { month: 'Apr', temp: '23°C', rainfall: 'Low', season: 'Dry' },
    { month: 'May', temp: '20°C', rainfall: 'Low', season: 'Dry' },
    { month: 'Jun', temp: '18°C', rainfall: 'Low', season: 'Dry' },
    { month: 'Jul', temp: '18°C', rainfall: 'Low', season: 'Dry' },
    { month: 'Aug', temp: '21°C', rainfall: 'Low', season: 'Dry' },
    { month: 'Sep', temp: '26°C', rainfall: 'Low', season: 'Dry' },
    { month: 'Oct', temp: '28°C', rainfall: 'Low', season: 'Dry' },
    { month: 'Nov', temp: '27°C', rainfall: 'Moderate', season: 'Wet' },
    { month: 'Dec', temp: '26°C', rainfall: 'High', season: 'Wet' }
  ];

  const travelTips = [
    'Bring waterproof clothing for the mist from the Falls',
    'Best viewing times are early morning and late afternoon',
    'Zimbabwe and Zambia sides offer different perspectives',
    'Book helicopter flights early, especially during peak season',
    'Respect local customs when visiting nearby villages',
    'USD is widely accepted, but bring small bills'
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Image Gallery */}
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
        <div className="relative h-full">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={image}
                alt={`Victoria Falls ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
          ))}
        </div>

        {/* Navigation */}
        <button
          onClick={prevImage}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all"
        >
          <ChevronLeft className="h-6 w-6 text-white" />
        </button>
        <button
          onClick={nextImage}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all"
        >
          <ChevronRight className="h-6 w-6 text-white" />
        </button>

        {/* Content Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="h-5 w-5 text-white" />
              <span className="text-white">Matabeleland North, Zimbabwe</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Victoria Falls
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              "The Smoke that Thunders" - One of the Seven Natural Wonders of the World
            </p>
          </div>
        </div>

        {/* Image Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`h-2 w-2 rounded-full transition-all ${
                index === currentImageIndex ? 'bg-white w-8' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Quick Info Bar */}
      <section className="bg-white border-b sticky top-0 z-40">
        <div className="max-w-7xl mx-auto container-padding py-4">
          <div className="flex flex-wrap justify-between items-center gap-4">
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2 text-sm">
                <Star className="h-4 w-4 text-yellow-500" />
                <span className="font-semibold">4.9</span>
                <span className="text-muted-foreground">(2,847 reviews)</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <span>Best: April - October</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Car className="h-4 w-4 text-muted-foreground" />
                <span>2 hours from airport</span>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Camera className="mr-2 h-4 w-4" />
                View Photos
              </Button>
              <Button className="btn-primary" size="sm">
                Plan Visit
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto container-padding">
          <Tabs defaultValue="overview" className="space-y-8">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="activities">Activities</TabsTrigger>
              <TabsTrigger value="accommodation">Stay</TabsTrigger>
              <TabsTrigger value="weather">When to Visit</TabsTrigger>
              <TabsTrigger value="planning">Planning</TabsTrigger>
            </TabsList>

            {/* Overview */}
            <TabsContent value="overview" className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-6">
                  <div>
                    <h2 className="text-3xl font-bold mb-4">About Victoria Falls</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Victoria Falls, known locally as "Mosi-oa-Tunya" (The Smoke that Thunders), 
                      is one of the most spectacular waterfalls in the world. Located on the Zambezi 
                      River at the border between Zimbabwe and Zambia, the Falls stretch 1.7 kilometers 
                      wide and drop 108 meters into the narrow Batoka Gorge.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Discovered by David Livingstone in 1855, who named them after Queen Victoria, 
                      the Falls are now a UNESCO World Heritage Site and one of the Seven Natural 
                      Wonders of the World. The mist from the Falls can be seen from 20 kilometers 
                      away, creating rainbows that dance in the spray.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      The Falls experience dramatic seasonal variations, from the thundering peak 
                      flow during the rainy season (December to May) to the more intimate experience 
                      during low water season (September to December) when you can see the rock 
                      face behind the curtain of water.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4">Key Highlights</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-start gap-3">
                        <div className="bg-primary/10 p-2 rounded-lg">
                          <Mountain className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium">1.7 km Wide</h4>
                          <p className="text-sm text-muted-foreground">World's largest curtain of water</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="bg-primary/10 p-2 rounded-lg">
                          <Waves className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium">108m Drop</h4>
                          <p className="text-sm text-muted-foreground">Into the narrow Batoka Gorge</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="bg-primary/10 p-2 rounded-lg">
                          <Star className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium">UNESCO Site</h4>
                          <p className="text-sm text-muted-foreground">World Heritage status since 1989</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="bg-primary/10 p-2 rounded-lg">
                          <Sun className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium">Lunar Rainbows</h4>
                          <p className="text-sm text-muted-foreground">Visible during full moon nights</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold mb-4">Quick Facts</h3>
                      <div className="space-y-3 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Best Time:</span>
                          <span>April - October</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Entry Fee:</span>
                          <span>$30 USD</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Duration:</span>
                          <span>2-3 days minimum</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Distance from Harare:</span>
                          <span>878 km</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Altitude:</span>
                          <span>915m above sea level</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold mb-4">What to Bring</h3>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                          Waterproof clothing
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                          Comfortable walking shoes
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                          Camera with waterproof case
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                          Sunscreen and hat
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                          Cash for entry fees
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* Activities */}
            <TabsContent value="activities" className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold mb-4">Adventures at Victoria Falls</h2>
                <p className="text-muted-foreground mb-8">
                  From adrenaline-pumping adventures to peaceful river cruises, Victoria Falls offers something for everyone.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {activities.map((activity) => (
                  <Card key={activity.name} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-primary/10 p-3 rounded-lg">
                          <activity.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-grow">
                          <h3 className="font-semibold mb-2">{activity.name}</h3>
                          <p className="text-sm text-muted-foreground mb-3">{activity.description}</p>
                          <div className="flex flex-wrap gap-2 mb-3">
                            <Badge variant="outline" className="text-xs">
                              <Clock className="h-3 w-3 mr-1" />
                              {activity.duration}
                            </Badge>
                            <Badge variant="outline" className="text-xs">
                              {activity.difficulty}
                            </Badge>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="font-semibold text-primary">{activity.price}</span>
                            <Button size="sm" className="btn-primary">
                              Book Now
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="text-center">
                <Link href="/activities">
                  <Button className="btn-secondary">
                    View All Activities
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </TabsContent>

            {/* Accommodation */}
            <TabsContent value="accommodation" className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold mb-4">Where to Stay</h2>
                <p className="text-muted-foreground mb-8">
                  From luxury hotels to boutique lodges, find the perfect accommodation near Victoria Falls.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {accommodations.map((hotel) => (
                  <Card key={hotel.name} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <img
                      src={hotel.image}
                      alt={hotel.name}
                      className="w-full h-48 object-cover"
                    />
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold">{hotel.name}</h3>
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm">{hotel.rating}</span>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">{hotel.category}</p>
                      <div className="flex justify-between items-center">
                        <span className="font-semibold text-primary">{hotel.price}</span>
                        <Button size="sm" variant="outline">
                          View Details
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="text-center">
                <Link href="/accommodation">
                  <Button className="btn-secondary">
                    View All Accommodations
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </TabsContent>

            {/* Weather */}
            <TabsContent value="weather" className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold mb-4">When to Visit Victoria Falls</h2>
                <p className="text-muted-foreground mb-8">
                  Victoria Falls is spectacular year-round, but each season offers a different experience.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Monthly Weather Guide</h3>
                  <div className="space-y-3">
                    {weatherData.map((month) => (
                      <div key={month.month} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center gap-3">
                          <span className="w-8 text-sm font-medium">{month.month}</span>
                          <div className="flex items-center gap-1">
                            <Thermometer className="h-4 w-4 text-orange-500" />
                            <span className="text-sm">{month.temp}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="flex items-center gap-1">
                            <CloudRain className="h-4 w-4 text-blue-500" />
                            <span className="text-sm">{month.rainfall}</span>
                          </div>
                          <Badge variant={month.season === 'Dry' ? 'default' : 'secondary'} className="text-xs">
                            {month.season}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-6">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold mb-3 text-orange-600">High Water Season (Feb - July)</h3>
                      <ul className="space-y-2 text-sm">
                        <li>• Maximum water flow and mist</li>
                        <li>• Limited visibility but thunderous sound</li>
                        <li>• Some viewpoints may be obscured</li>
                        <li>• Cooler temperatures due to mist</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold mb-3 text-blue-600">Medium Water (April & August - October)</h3>
                      <ul className="space-y-2 text-sm">
                        <li>• Perfect balance of water and visibility</li>
                        <li>• Clear views of the Falls structure</li>
                        <li>• Ideal for photography</li>
                        <li>• Pleasant weather conditions</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold mb-3 text-green-600">Low Water Season (October - December)</h3>
                      <ul className="space-y-2 text-sm">
                        <li>• See the rock face behind the Falls</li>
                        <li>• Access to Devil's Pool (Zambian side)</li>
                        <li>• Clear, dramatic photographs</li>
                        <li>• Hot, dry weather</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* Planning */}
            <TabsContent value="planning" className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold mb-4">Planning Your Visit</h2>
                <p className="text-muted-foreground mb-8">
                  Essential information to help you make the most of your Victoria Falls experience.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold mb-4 flex items-center gap-2">
                        <Plane className="h-5 w-5" />
                        Getting There
                      </h3>
                      <div className="space-y-3 text-sm">
                        <div>
                          <h4 className="font-medium">By Air</h4>
                          <p className="text-muted-foreground">Victoria Falls Airport (15 min drive to town)</p>
                        </div>
                        <div>
                          <h4 className="font-medium">By Road</h4>
                          <p className="text-muted-foreground">
                            5 hours from Bulawayo, 10 hours from Harare
                          </p>
                        </div>
                        <div>
                          <h4 className="font-medium">By Train</h4>
                          <p className="text-muted-foreground">
                            Weekly service from Bulawayo (overnight journey)
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold mb-4 flex items-center gap-2">
                        <Car className="h-5 w-5" />
                        Getting Around
                      </h3>
                      <div className="space-y-2 text-sm">
                        <p>• Walking distance to most attractions in town</p>
                        <p>• Taxis and hotel shuttles available</p>
                        <p>• Car rental options at airport</p>
                        <p>• Border crossing to Zambia (foot/vehicle)</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="space-y-6">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold mb-4">Travel Tips</h3>
                      <div className="space-y-2">
                        {travelTips.map((tip, index) => (
                          <div key={index} className="flex items-start gap-2 text-sm">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2" />
                            <span>{tip}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold mb-4">Recommended Duration</h3>
                      <div className="space-y-3 text-sm">
                        <div>
                          <h4 className="font-medium">2 Days Minimum</h4>
                          <p className="text-muted-foreground">See the Falls and try one adventure activity</p>
                        </div>
                        <div>
                          <h4 className="font-medium">3-4 Days Ideal</h4>
                          <p className="text-muted-foreground">Multiple activities plus relaxation time</p>
                        </div>
                        <div>
                          <h4 className="font-medium">5+ Days</h4>
                          <p className="text-muted-foreground">Include Chobe or other regional attractions</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary to-accent text-white section-padding">
        <div className="max-w-4xl mx-auto text-center container-padding">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Experience Victoria Falls?
          </h2>
          <p className="text-lg mb-8 text-white/90">
            Start planning your adventure to one of the world's most spectacular natural wonders
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/activities">
              <Button size="lg" variant="secondary">
                Book Activities
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-primary">
                Plan Custom Trip
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VictoriaFallsPage;