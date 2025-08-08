'use client';

import React from 'react';
import Link from 'next/link';
import { 
  MapPin, Users, Award, Heart, Target, Eye,
  CheckCircle, Globe, Briefcase, Star
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const AboutPage = () => {
  const values = [
    {
      icon: Heart,
      title: 'Authentic Experiences',
      description: 'We connect travelers with genuine Zimbabwean culture, people, and places.'
    },
    {
      icon: Users,
      title: 'Community First',
      description: 'Supporting local communities and businesses through sustainable tourism.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Committed to providing world-class service and unforgettable experiences.'
    },
    {
      icon: Globe,
      title: 'Sustainability',
      description: 'Promoting responsible travel that preserves Zimbabwe\'s natural heritage.'
    }
  ];

  const stats = [
    { number: '10K+', label: 'Happy Travelers' },
    { number: '500+', label: 'Partner Properties' },
    { number: '50+', label: 'Destinations' },
    { number: '98%', label: 'Satisfaction Rate' }
  ];

  const team = [
    {
      name: 'Tendai Mukamuri',
      role: 'Founder & CEO',
      image: 'https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      bio: 'Passionate about showcasing Zimbabwe to the world.'
    },
    {
      name: 'Rudo Chigumba',
      role: 'Head of Operations',
      image: 'https://images.pexels.com/photos/3778680/pexels-photo-3778680.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      bio: 'Ensuring seamless travel experiences for all our guests.'
    },
    {
      name: 'James Banda',
      role: 'Lead Travel Consultant',
      image: 'https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      bio: 'Expert in crafting personalized Zimbabwe itineraries.'
    },
    {
      name: 'Nyasha Moyo',
      role: 'Community Relations',
      image: 'https://images.pexels.com/photos/3778966/pexels-photo-3778966.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      bio: 'Building bridges between travelers and local communities.'
    }
  ];

  const milestones = [
    { year: '2018', event: 'Handei Zimbabwe founded with a vision to transform tourism' },
    { year: '2019', event: 'Launched GuestBook SaaS platform for accommodations' },
    { year: '2020', event: 'Expanded to cover all 10 provinces of Zimbabwe' },
    { year: '2021', event: 'Introduced sustainable tourism initiatives' },
    { year: '2022', event: 'Reached 10,000 happy travelers milestone' },
    { year: '2023', event: 'Launched mobile app and enhanced booking platform' }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[400px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/2422259/pexels-photo-2422259.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70" />
        </div>
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="max-w-4xl mx-auto container-padding">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              About Handei Zimbabwe
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Your trusted partner in discovering the authentic beauty, culture, and adventure of Zimbabwe
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4">Our Story</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Connecting the World to Zimbabwe's Wonders
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Founded in 2018, Handei Zimbabwe was born from a passion to showcase our beautiful 
                country to the world. "Handei" means "Let's go" in Shona, embodying our spirit of 
                adventure and invitation to explore Zimbabwe.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                We recognized that Zimbabwe's tourism potential was underserved by fragmented 
                information and booking systems. Our platform brings together accommodations, 
                destinations, activities, and travel information in one comprehensive solution.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Target className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Our Mission</h3>
                    <p className="text-muted-foreground text-sm">
                      To make Zimbabwe accessible to travelers worldwide while empowering local 
                      tourism businesses through technology and sustainable practices.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Eye className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Our Vision</h3>
                    <p className="text-muted-foreground text-sm">
                      To be the leading tourism platform in Southern Africa, setting the standard 
                      for authentic, sustainable, and transformative travel experiences.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/2398220/pexels-photo-2398220.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="Zimbabwe landscape"
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary text-white p-6 rounded-xl shadow-lg">
                <p className="text-3xl font-bold">5+</p>
                <p className="text-sm">Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-12">
            <Badge className="mb-4">Our Values</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Drives Us Forward
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our core values guide every decision we make and every experience we create
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <Card key={value.title} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</p>
                <p className="text-white/80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-12">
            <Badge className="mb-4">Why Choose Us</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              The Handei Zimbabwe Difference
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6">
              <div className="mb-4">
                <Briefcase className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-3">Comprehensive Platform</h3>
              <p className="text-muted-foreground text-sm mb-4">
                One-stop solution for all Zimbabwe travel needs - accommodations, activities, 
                destinations, and practical information.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>500+ verified accommodations</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Real-time availability</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Instant booking confirmation</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6">
              <div className="mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-3">Local Expertise</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Our team of local experts ensures authentic experiences and insider knowledge 
                you won't find anywhere else.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Handpicked experiences</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>24/7 local support</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Personalized recommendations</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6">
              <div className="mb-4">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-3">Community Impact</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Every booking supports local communities and conservation efforts, making 
                your travel meaningful.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Support local businesses</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Conservation initiatives</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Community development</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-12">
            <Badge className="mb-4">Our Team</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Meet the People Behind Handei
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Passionate professionals dedicated to showcasing Zimbabwe's best
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div key={member.name} className="text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="font-semibold">{member.name}</h3>
                <p className="text-sm text-primary mb-2">{member.role}</p>
                <p className="text-sm text-muted-foreground">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto container-padding">
          <div className="text-center mb-12">
            <Badge className="mb-4">Our Journey</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Milestones & Achievements
            </h2>
          </div>
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={milestone.year} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                    {milestone.year.slice(-2)}
                  </div>
                </div>
                <div className="flex-grow pb-8 border-l-2 border-gray-200 pl-8 -mt-6">
                  <div className="bg-white p-4 rounded-lg shadow-md">
                    <p className="text-sm text-primary font-semibold mb-1">{milestone.year}</p>
                    <p className="text-muted-foreground">{milestone.event}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-primary to-accent text-white section-padding">
        <div className="max-w-4xl mx-auto text-center container-padding">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Experience Zimbabwe?
          </h2>
          <p className="text-lg mb-8 text-white/90">
            Let us help you create unforgettable memories in the heart of Africa
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/destinations">
              <Button size="lg" variant="secondary">
                Explore Destinations
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-primary">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;