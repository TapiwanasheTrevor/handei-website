'use client';

import React, { useState } from 'react';
import { 
  Phone, Mail, MapPin, Clock, MessageCircle, 
  Send, Facebook, Twitter, Instagram, Linkedin,
  CheckCircle
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['+263 719 050 207', '+263 785 995 280'],
      action: 'Call us',
      link: 'tel:+263719050207'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@handeizimbabwe.com', 'bookings@handeizimbabwe.com'],
      action: 'Email us',
      link: 'mailto:info@handeizimbabwe.com'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      details: ['+263 719 050 207'],
      action: 'Chat with us',
      link: 'https://wa.me/263719050207'
    },
    {
      icon: MapPin,
      title: 'Address',
      details: ['72 West Road', 'Avondale', 'Harare, Zimbabwe'],
      action: 'Get directions',
      link: 'https://maps.google.com'
    }
  ];

  const offices = [
    {
      city: 'Harare',
      address: '72 West Road, Avondale',
      phone: '+263 719 050 207',
      hours: 'Mon-Fri: 8:00 AM - 5:00 PM'
    },
    {
      city: 'Victoria Falls',
      address: '456 Falls Center, Livingstone Way',
      phone: '+263 213 123 456',
      hours: 'Mon-Sun: 7:00 AM - 7:00 PM'
    },
    {
      city: 'Bulawayo',
      address: '789 City Center, Joshua Nkomo Street',
      phone: '+263 292 123 456',
      hours: 'Mon-Fri: 8:00 AM - 5:00 PM'
    }
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com/handeizimbabwe', label: 'Facebook' },
    { icon: Twitter, href: 'https://twitter.com/handeizim', label: 'Twitter' },
    { icon: Instagram, href: 'https://instagram.com/handeizimbabwe', label: 'Instagram' },
    { icon: Linkedin, href: 'https://linkedin.com/company/handeizimbabwe', label: 'LinkedIn' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSelectChange = (value: string) => {
    setFormData({
      ...formData,
      subject: value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[30vh] min-h-[300px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70" />
        </div>
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="max-w-4xl mx-auto container-padding">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Get in Touch
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              We're here to help you plan your perfect Zimbabwe adventure
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 -mt-16 relative z-10">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info) => (
              <Card key={info.title} className="bg-white shadow-xl hover:shadow-2xl transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <info.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-3">{info.title}</h3>
                  <div className="space-y-1 mb-4">
                    {info.details.map((detail, index) => (
                      <p key={index} className="text-sm text-muted-foreground">{detail}</p>
                    ))}
                  </div>
                  <a 
                    href={info.link}
                    className="text-sm text-primary hover:text-primary/80 font-medium inline-flex items-center gap-1"
                  >
                    {info.action}
                    <Send className="h-3 w-3" />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <div className="h-full">
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>Send us a Message</CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you within 24 hours
                  </p>
                </CardHeader>
                <CardContent className="flex-1">
                  {isSubmitted ? (
                    <div className="text-center py-12">
                      <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-2">Thank you for contacting us!</h3>
                      <p className="text-muted-foreground">We'll get back to you soon.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name *</Label>
                          <Input
                            id="name"
                            name="name"
                            placeholder="John Doe"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="john@example.com"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            placeholder="+263 719 050 207"
                            value={formData.phone}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="subject">Subject *</Label>
                          <Select value={formData.subject} onValueChange={handleSelectChange} required>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a subject" />
                            </SelectTrigger>
                            <SelectContent className="bg-white border border-gray-200 shadow-lg">
                              <SelectItem value="general" className="text-foreground hover:bg-gray-100">General Inquiry</SelectItem>
                              <SelectItem value="booking" className="text-foreground hover:bg-gray-100">Booking Assistance</SelectItem>
                              <SelectItem value="partnership" className="text-foreground hover:bg-gray-100">Partnership Opportunity</SelectItem>
                              <SelectItem value="feedback" className="text-foreground hover:bg-gray-100">Feedback</SelectItem>
                              <SelectItem value="support" className="text-foreground hover:bg-gray-100">Technical Support</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="Tell us how we can help you..."
                          rows={6}
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                        />
                      </div>

                      <Button type="submit" className="w-full btn-primary">
                        Send Message
                        <Send className="ml-2 h-4 w-4" />
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Office Locations & Social Media */}
            <div className="h-full">
              <div className="grid grid-cols-1 gap-6 h-full">
                <Card className="flex-1">
                  <CardHeader>
                    <CardTitle>Our Offices</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <div className="space-y-4">
                      {offices.map((office) => (
                        <div key={office.city} className="border-b last:border-0 pb-4 last:pb-0">
                          <h4 className="font-semibold mb-2">{office.city}</h4>
                          <p className="text-sm text-muted-foreground">{office.address}</p>
                          <p className="text-sm text-muted-foreground">{office.phone}</p>
                          <p className="text-sm text-muted-foreground flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {office.hours}
                          </p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Social Media */}
                <Card>
                  <CardHeader>
                    <CardTitle>Connect With Us</CardTitle>
                    <p className="text-muted-foreground">
                      Follow us on social media for travel inspiration and updates
                    </p>
                  </CardHeader>
                  <CardContent>
                    <div className="flex gap-4">
                      {socialLinks.map((social) => (
                        <a
                          key={social.label}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-gray-100 hover:bg-primary hover:text-white p-3 rounded-full transition-colors"
                          aria-label={social.label}
                        >
                          <social.icon className="h-5 w-5" />
                        </a>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section - Full Width */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Find Us</h2>
            <p className="text-muted-foreground">
              Visit our offices across Zimbabwe for personalized travel assistance
            </p>
          </div>
          <Card className="overflow-hidden">
            <div className="h-[500px] bg-gray-200 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-xl text-gray-600 mb-2">Interactive Map</p>
                  <p className="text-gray-500">Google Maps integration showing all our office locations</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-4xl mx-auto container-padding text-center">
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-muted-foreground mb-8">
            Can't find what you're looking for? Check out our FAQ section or contact us directly.
          </p>
          <Button variant="outline">
            View FAQs
          </Button>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="https://wa.me/263719050207"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all flex items-center gap-2 group"
        >
          <MessageCircle className="h-6 w-6" />
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap">
            Chat on WhatsApp
          </span>
        </a>
      </div>
    </div>
  );
};

export default ContactPage;