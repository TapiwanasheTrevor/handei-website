import React from 'react';
import Link from 'next/link';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Newsletter Section */}
      <div className="bg-secondary text-secondary-foreground py-12">
        <div className="max-w-7xl mx-auto container-padding text-center">
          <h3 className="text-2xl font-bold mb-4">Stay Connected with Zimbabwe</h3>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Get the latest travel tips, destination updates, and special offers delivered to your inbox.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <Input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 bg-white text-foreground"
            />
            <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-secondary">
              Subscribe
            </Button>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto container-padding py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-secondary p-2 rounded-lg">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Handei Zimbabwe</h3>
                <p className="text-sm opacity-80">Your Gateway to Zimbabwe</p>
              </div>
            </div>
            <p className="text-sm opacity-80 mb-6 leading-relaxed">
              Discover the beauty, culture, and adventure that Zimbabwe has to offer. From the thundering Victoria Falls to the ancient Great Zimbabwe ruins, we're your trusted guide to unforgettable experiences.
            </p>
            <div className="flex space-x-4">
              <Button size="icon" variant="ghost" className="hover:bg-secondary">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="hover:bg-secondary">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="hover:bg-secondary">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="hover:bg-secondary">
                <Youtube className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <div className="space-y-3">
              <Link href="/destinations" className="block text-sm opacity-80 hover:opacity-100 hover:text-secondary transition-colors">
                Destinations
              </Link>
              <Link href="/activities" className="block text-sm opacity-80 hover:opacity-100 hover:text-secondary transition-colors">
                Activities & Tours
              </Link>
              <Link href="/travel-info" className="block text-sm opacity-80 hover:opacity-100 hover:text-secondary transition-colors">
                Travel Information
              </Link>
              <Link href="/accommodation" className="block text-sm opacity-80 hover:opacity-100 hover:text-secondary transition-colors">
                Accommodation
              </Link>
              <Link href="/about" className="block text-sm opacity-80 hover:opacity-100 hover:text-secondary transition-colors">
                About Zimbabwe
              </Link>
              <Link href="/contact" className="block text-sm opacity-80 hover:opacity-100 hover:text-secondary transition-colors">
                Contact Us
              </Link>
            </div>
          </div>

          {/* Popular Destinations */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Popular Destinations</h4>
            <div className="space-y-3">
              <Link href="/destinations/victoria-falls" className="block text-sm opacity-80 hover:opacity-100 hover:text-secondary transition-colors">
                Victoria Falls
              </Link>
              <Link href="/destinations/great-zimbabwe" className="block text-sm opacity-80 hover:opacity-100 hover:text-secondary transition-colors">
                Great Zimbabwe Ruins
              </Link>
              <Link href="/destinations/hwange" className="block text-sm opacity-80 hover:opacity-100 hover:text-secondary transition-colors">
                Hwange National Park
              </Link>
              <Link href="/destinations/matobo" className="block text-sm opacity-80 hover:opacity-100 hover:text-secondary transition-colors">
                Matobo Hills
              </Link>
              <Link href="/destinations/mana-pools" className="block text-sm opacity-80 hover:opacity-100 hover:text-secondary transition-colors">
                Mana Pools
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Get in Touch</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0 text-secondary" />
                <div className="text-sm opacity-80">
                  <p>72 West Road Avondale</p>
                  <p>Harare, Zimbabwe</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 flex-shrink-0 text-secondary" />
                <div className="text-sm opacity-80">
                  <p>+263 719 050 207</p>
                  <p>+263 785 995 280</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 flex-shrink-0 text-secondary" />
                <div className="text-sm opacity-80">
                  <p>info@handeizimbabwe.com</p>
                  <p>bookings@handeizimbabwe.com</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-primary/50 rounded-lg">
              <h5 className="font-semibold text-sm mb-2">Business Hours</h5>
              <div className="text-xs opacity-80 space-y-1">
                <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                <p>Saturday: 9:00 AM - 4:00 PM</p>
                <p>Sunday: 10:00 AM - 2:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Separator className="opacity-20" />

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto container-padding py-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm opacity-80">
            © 2024 Handei Zimbabwe. All rights reserved.
          </div>
          <div className="flex flex-wrap gap-6 text-sm opacity-80">
            <Link href="/privacy" className="hover:opacity-100 hover:text-secondary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:opacity-100 hover:text-secondary transition-colors">
              Terms of Service
            </Link>
            <Link href="/sitemap" className="hover:opacity-100 hover:text-secondary transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;