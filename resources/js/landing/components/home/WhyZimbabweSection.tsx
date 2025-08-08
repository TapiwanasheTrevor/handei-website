'use client';

import React from 'react';
import { Camera, Mountain, TreePine, Compass } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useInView } from 'react-intersection-observer';

const WhyZimbabweSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: TreePine,
      title: 'Wildlife & Safaris',
      description: 'Home to the Big Five and over 350 bird species across pristine national parks',
      image: 'https://images.pexels.com/photos/1183099/pexels-photo-1183099.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      stats: '20+ National Parks'
    },
    {
      icon: Mountain,
      title: 'Victoria Falls',
      description: 'One of the Seven Natural Wonders of the World, the largest curtain of water on Earth',
      image: 'https://images.pexels.com/photos/2161449/pexels-photo-2161449.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      stats: '1.7km Wide Waterfall'
    },
    {
      icon: Camera,
      title: 'Heritage Sites',
      description: 'Ancient civilizations and UNESCO World Heritage sites tell Zimbabwe\'s rich history',
      image: 'https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      stats: '3 UNESCO Sites'
    },
    {
      icon: Compass,
      title: 'Adventure Activities',
      description: 'From bungee jumping to white water rafting, endless thrills await the adventurous',
      image: 'https://images.pexels.com/photos/163491/bike-mountain-mountain-biking-trail-163491.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      stats: '50+ Activities'
    },
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-background to-secondary/5">
      <div className="max-w-7xl mx-auto container-padding">
        <div ref={ref} className={`text-center mb-16 ${inView ? 'animate-slide-up' : 'opacity-0'}`}>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gradient">
            Why Choose Zimbabwe?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Zimbabwe offers an authentic African experience like no other. From thundering waterfalls to ancient ruins, 
            from Big Five safaris to warm hospitality, discover what makes Zimbabwe truly special.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={feature.title} 
              className={`card-hover bg-white border-0 shadow-lg overflow-hidden group ${
                inView ? 'animate-slide-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute top-4 right-4 bg-secondary text-white px-3 py-1 rounded-full text-sm font-semibold shadow-md">
                  {feature.stats}
                </div>
                <div className="absolute bottom-4 left-4">
                  <div className="bg-primary text-white p-3 rounded-lg">
                    <feature.icon className="h-6 w-6" />
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-primary group-hover:text-accent transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className={`mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 ${inView ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">5M+</div>
            <div className="text-muted-foreground font-medium">Annual Visitors</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-accent mb-2">400K</div>
            <div className="text-muted-foreground font-medium">km² Protected Areas</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-accent mb-2">80K</div>
            <div className="text-muted-foreground font-medium">Elephants</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">365</div>
            <div className="text-muted-foreground font-medium">Days of Sunshine</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyZimbabweSection;