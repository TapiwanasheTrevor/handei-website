'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Zap, Users, TreePine } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useInView } from 'react-intersection-observer';

const ExperienceSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      id: 'adventure',
      title: 'Adventure & Activities',
      description: 'Heart-pumping adventures for thrill seekers',
      icon: Zap,
      color: 'secondary',
      count: '50+ Activities',
      image: 'https://images.pexels.com/photos/163491/bike-mountain-mountain-biking-trail-163491.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      activities: [
        {
          name: 'Bungee Jumping',
          image: 'https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
        },
        {
          name: 'White Water Rafting',
          image: 'https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
        },
        {
          name: 'Zip Lining',
          image: 'https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
        },
        {
          name: 'Rock Climbing',
          image: 'https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
        }
      ]
    },
    {
      id: 'culture',
      title: 'Culture & Heritage',
      description: 'Immerse yourself in Zimbabwe\'s rich history',
      icon: Users,
      color: 'accent',
      count: '30+ Cultural Sites',
      image: 'https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      activities: [
        {
          name: 'Village Tours',
          image: 'https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
        },
        {
          name: 'Traditional Dancing',
          image: 'https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
        },
        {
          name: 'Craft Markets',
          image: 'https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
        },
        {
          name: 'Historical Tours',
          image: 'https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
        }
      ]
    },
    {
      id: 'nature',
      title: 'Nature & Wildlife',
      description: 'Get close to Africa\'s incredible wildlife',
      icon: TreePine,
      color: 'primary',
      count: '20+ Parks',
      image: 'https://images.pexels.com/photos/1183099/pexels-photo-1183099.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      activities: [
        {
          name: 'Game Drives',
          image: 'https://images.pexels.com/photos/1183099/pexels-photo-1183099.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
        },
        {
          name: 'Walking Safaris',
          image: 'https://images.pexels.com/photos/1183099/pexels-photo-1183099.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
        },
        {
          name: 'Bird Watching',
          image: 'https://images.pexels.com/photos/1183099/pexels-photo-1183099.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
        },
        {
          name: 'Photography',
          image: 'https://images.pexels.com/photos/1183099/pexels-photo-1183099.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
        }
      ]
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-accent/5 to-secondary/5">
      <div className="max-w-7xl mx-auto container-padding">
        <div ref={ref} className={`text-center mb-16 ${inView ? 'animate-slide-up' : 'opacity-0'}`}>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gradient">
            Experience Zimbabwe
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Whether you seek adrenaline-pumping adventures, cultural immersion, or wildlife encounters, 
            Zimbabwe offers experiences that will create memories to last a lifetime.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {experiences.map((experience, index) => (
            <Card 
              key={experience.id} 
              className={`overflow-hidden border-0 shadow-xl group bg-white ${
                inView ? 'animate-slide-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Main Image */}
              <div className="relative overflow-hidden h-64">
                <img
                  src={experience.image}
                  alt={experience.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                
                {/* Icon */}
                <div className={`absolute top-4 left-4 p-3 rounded-lg shadow-lg ${
                  experience.color === 'primary' ? 'bg-primary text-primary-foreground' :
                  experience.color === 'secondary' ? 'bg-secondary text-secondary-foreground' :
                  'bg-accent text-accent-foreground'
                }`}>
                  <experience.icon className="h-6 w-6" />
                </div>

                {/* Count Badge */}
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="shadow-lg">
                    {experience.count}
                  </Badge>
                </div>

                {/* Title and Description */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {experience.title}
                  </h3>
                  <p className="text-white/90 text-sm">
                    {experience.description}
                  </p>
                </div>
              </div>

              <CardContent className="p-6">
                {/* Activity Grid */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {experience.activities.map((activity, actIndex) => (
                    <div key={activity.name} className="relative group/activity cursor-pointer">
                      <div className="relative overflow-hidden rounded-lg h-20">
                        <img
                          src={activity.image}
                          alt={activity.name}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover/activity:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/40 group-hover/activity:bg-black/20 transition-colors" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-white text-xs font-medium text-center px-2">
                            {activity.name}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Link href={`/activities?category=${experience.id}`}>
                  <Button 
                    className={`w-full group/btn ${
                      experience.color === 'primary' ? 'btn-primary' :
                      experience.color === 'secondary' ? 'btn-secondary' :
                      'btn-accent'
                    }`}
                  >
                    Explore {experience.title}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-16 ${inView ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="bg-white rounded-2xl p-8 shadow-xl max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-primary">
              Ready for Your Zimbabwe Adventure?
            </h3>
            <p className="text-muted-foreground mb-6 text-lg">
              Browse all our activities and start planning your perfect Zimbabwe experience today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/activities">
                <Button size="lg" className="btn-primary px-8">
                  Browse All Activities
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="px-8">
                  Plan Custom Trip
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;