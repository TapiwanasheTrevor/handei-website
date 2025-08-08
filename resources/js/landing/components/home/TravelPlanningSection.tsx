'use client';

import React from 'react';
import Link from 'next/link';
import { FileText, Calendar, MapPin, CreditCard, ArrowRight, Clock, Info, Users, Shield } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const TravelPlanningSection = () => {
  const planningTools = [
    {
      icon: FileText,
      title: 'Visa Information',
      description: 'Complete guide to visa requirements, applications, and entry procedures',
      link: '/travel-info#visa',
      color: 'secondary',
      highlights: ['Visa on Arrival', 'Online Applications', 'Requirements by Country']
    },
    {
      icon: Calendar,
      title: 'Best Time to Visit',
      description: 'Seasonal guide to weather, activities, and optimal travel times',
      link: '/travel-info#when-to-visit',
      color: 'primary',
      highlights: ['Weather Patterns', 'Wildlife Seasons', 'Festival Calendar']
    },
    {
      icon: MapPin,
      title: 'Getting Around',
      description: 'Transportation options, routes, and travel tips within Zimbabwe',
      link: '/travel-info#transport',
      color: 'accent',
      highlights: ['Domestic Flights', 'Car Rental', 'Public Transport']
    },
    {
      icon: CreditCard,
      title: 'Currency Guide',
      description: 'Money matters, banking options, and payment methods',
      link: '/travel-info#money',
      color: 'secondary',
      highlights: ['Multi-Currency', 'Mobile Money', 'ATM Locations']
    }
  ];

  const quickTips = [
    {
      icon: Clock,
      title: 'Travel Duration',
      description: 'Most visitors spend 7-14 days to see the main attractions',
      tip: 'Minimum 5 days recommended'
    },
    {
      icon: Info,
      title: 'Health & Safety',
      description: 'Generally safe with standard precautions and medical requirements',
      tip: 'Malaria prophylaxis advised'
    },
    {
      icon: Users,
      title: 'Languages',
      description: 'English is widely spoken, plus Shona and Ndebele',
      tip: 'No language barrier for tourists'
    },
    {
      icon: Shield,
      title: 'Travel Insurance',
      description: 'Comprehensive coverage recommended for activities and medical',
      tip: 'Adventure sports coverage'
    }
  ];

  return (
    <section className="section-padding bg-background">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gradient">
            Plan Your Journey
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Everything you need to know to plan the perfect Zimbabwe adventure. From visas to currency, 
            we've got you covered with comprehensive travel information.
          </p>
        </div>

        {/* Main Planning Tools */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {planningTools.map((tool, index) => (
            <Card key={tool.title} className="card-hover overflow-hidden border-0 shadow-lg group bg-white">
              <CardHeader className={`${
                tool.color === 'secondary' ? 'bg-secondary text-white' :
                tool.color === 'primary' ? 'bg-primary text-white' :
                'bg-accent text-white'
              } text-center py-8`}>
                <div className="mx-auto mb-4 p-3 bg-white/20 rounded-full w-fit">
                  <tool.icon className="h-8 w-8" />
                </div>
                <CardTitle className="text-xl">{tool.title}</CardTitle>
              </CardHeader>
              
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {tool.description}
                </p>
                
                <div className="space-y-2 mb-6">
                  {tool.highlights.map((highlight) => (
                    <div key={highlight} className="flex items-center space-x-2 text-xs">
                      <div className={`w-1.5 h-1.5 rounded-full ${
                        tool.color === 'secondary' ? 'bg-secondary' :
                        tool.color === 'primary' ? 'bg-primary' :
                        'bg-accent'
                      }`} />
                      <span className="text-muted-foreground">{highlight}</span>
                    </div>
                  ))}
                </div>

                <Link href={tool.link}>
                  <Button 
                    className={`w-full group/btn text-sm ${
                      tool.color === 'secondary' ? 'btn-secondary' :
                      tool.color === 'primary' ? 'btn-primary' :
                      'btn-accent'
                    }`}
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-3 w-3 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Tips Section */}
        <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-primary">
              Quick Travel Tips
            </h3>
            <p className="text-muted-foreground text-lg">
              Essential information at a glance to help you prepare for your trip
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {quickTips.map((tip, index) => (
              <div key={tip.title} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="bg-secondary/20 p-2 rounded-lg">
                    <tip.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h4 className="font-semibold text-primary">{tip.title}</h4>
                </div>
                <p className="text-muted-foreground text-sm mb-3 leading-relaxed">
                  {tip.description}
                </p>
                <div className="bg-accent/10 px-3 py-2 rounded-lg">
                  <span className="text-accent font-medium text-xs">{tip.tip}</span>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-white rounded-2xl p-8 shadow-xl max-w-2xl mx-auto">
              <h4 className="text-xl font-bold mb-4 text-primary">
                Need Personalized Travel Advice?
              </h4>
              <p className="text-muted-foreground mb-6">
                Our travel experts are here to help you plan the perfect Zimbabwe experience tailored to your interests and budget.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/travel-info">
                  <Button size="lg" className="bg-primary text-white hover:bg-primary/90 px-8">
                    Complete Travel Guide
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="px-8 border-primary text-primary hover:bg-primary hover:text-white">
                    Contact Expert
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TravelPlanningSection;