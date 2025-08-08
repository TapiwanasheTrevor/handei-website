'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Search, MapPin, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const destinations = [
    { name: 'Victoria Falls', href: '/destinations/victoria-falls' },
    { name: 'Great Zimbabwe', href: '/destinations/great-zimbabwe' },
    { name: 'Hwange National Park', href: '/destinations/hwange' },
    { name: 'Matobo Hills', href: '/destinations/matobo' },
    { name: 'Mana Pools', href: '/destinations/mana-pools' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
    }`}>
      {/* Contact Bar */}
      <div className="bg-primary text-white py-2 hidden md:block">
        <div className="max-w-7xl mx-auto container-padding flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span className="text-white">+263 719 050 207</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span className="text-white">info@handeizimbabwe.com</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin className="h-4 w-4" />
            <span className="text-white">72 West Road Avondale, Harare</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="max-w-7xl mx-auto container-padding">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/">
            <img src="/logo.jpeg" alt="Handei Logo" className="h-16 md:h-20 w-auto object-contain max-w-[150px]" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link href="/" className={`px-4 py-2 rounded-md transition-colors ${
                    pathname === '/' ? 'bg-secondary text-white' : 'text-foreground hover:bg-secondary/20'
                  }`}>
                    Home
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-foreground">Destinations</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-6 w-[400px]">
                      <div className="grid gap-1">
                        <h4 className="font-medium leading-none text-foreground">Popular Destinations</h4>
                        <p className="text-sm text-muted-foreground">Explore Zimbabwe's top attractions</p>
                      </div>
                      <div className="grid gap-2">
                        {destinations.map((destination) => (
                          <NavigationMenuLink key={destination.href} asChild>
                            <Link
                              href={destination.href}
                              className="block p-3 rounded-md hover:bg-secondary/20 transition-colors text-foreground"
                            >
                              {destination.name}
                            </Link>
                          </NavigationMenuLink>
                        ))}
                        <NavigationMenuLink asChild>
                          <Link
                            href="/destinations"
                            className="block p-3 rounded-md bg-primary text-white hover:bg-primary/90 transition-colors text-center"
                          >
                            View All Destinations
                          </Link>
                        </NavigationMenuLink>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/activities" className={`px-4 py-2 rounded-md transition-colors ${
                    pathname === '/activities' ? 'bg-secondary text-white' : 'text-foreground hover:bg-secondary/20'
                  }`}>
                    Activities
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/travel-info" className={`px-4 py-2 rounded-md transition-colors ${
                    pathname === '/travel-info' ? 'bg-secondary text-white' : 'text-foreground hover:bg-secondary/20'
                  }`}>
                    Travel Info
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/about" className={`px-4 py-2 rounded-md transition-colors ${
                    pathname === '/about' ? 'bg-secondary text-white' : 'text-foreground hover:bg-secondary/20'
                  }`}>
                    About
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/contact" className={`px-4 py-2 rounded-md transition-colors ${
                    pathname === '/contact' ? 'bg-secondary text-white' : 'text-foreground hover:bg-secondary/20'
                  }`}>
                    Contact
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Search and CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search destinations..."
                className="pl-10 w-64"
              />
            </div>
            <Button className="btn-secondary">Plan Journey</Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t">
            <div className="p-4 space-y-4">
              <Link href="/" className="block py-2 text-foreground hover:text-primary transition-colors">Home</Link>
              <Link href="/destinations" className="block py-2 text-foreground hover:text-primary transition-colors">Destinations</Link>
              <Link href="/activities" className="block py-2 text-foreground hover:text-primary transition-colors">Activities</Link>
              <Link href="/travel-info" className="block py-2 text-foreground hover:text-primary transition-colors">Travel Info</Link>
              <Link href="/about" className="block py-2 text-foreground hover:text-primary transition-colors">About</Link>
              <Link href="/contact" className="block py-2 text-foreground hover:text-primary transition-colors">Contact</Link>
              <div className="pt-4 border-t">
                <div className="relative mb-4">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Search destinations..."
                    className="pl-10"
                  />
                </div>
                <Button className="btn-secondary w-full">Plan Journey</Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;