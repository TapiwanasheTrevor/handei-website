'use client';

import React, { useState } from 'react';
import { 
  FileText, Calendar, MapPin, CreditCard, Globe, Heart,
  Plane, Car, Bus, Shield, Phone, Wifi, Zap, Info,
  ChevronDown, ChevronRight, Clock, DollarSign, Thermometer
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const TravelInfoPage = () => {
  const [activeTab, setActiveTab] = useState('visa');

  const quickFacts = [
    { icon: Globe, label: 'Language', value: 'English, Shona, Ndebele' },
    { icon: DollarSign, label: 'Currency', value: 'USD (Multi-currency)' },
    { icon: Clock, label: 'Time Zone', value: 'GMT +2' },
    { icon: Zap, label: 'Electricity', value: '220V, Type D/G' },
    { icon: Phone, label: 'Country Code', value: '+263' },
    { icon: Thermometer, label: 'Climate', value: 'Tropical/Sub-tropical' },
  ];

  const visaInfo = {
    'visa-on-arrival': [
      'SADC Countries', 'USA', 'UK', 'Canada', 'Australia', 'Germany', 
      'France', 'Italy', 'Spain', 'Netherlands', 'Belgium', 'Switzerland'
    ],
    'visa-required': [
      'Nigeria', 'India', 'Pakistan', 'Bangladesh', 'Egypt'
    ],
    'visa-free': [
      'South Africa', 'Botswana', 'Zambia', 'Namibia', 'Mozambique'
    ]
  };

  const weatherSeasons = [
    {
      name: 'Dry Season (May - October)',
      description: 'Best for wildlife viewing as animals gather at water sources',
      temp: '15-28°C',
      highlights: ['Clear skies', 'Cool evenings', 'Best game viewing', 'Low malaria risk']
    },
    {
      name: 'Green Season (November - April)',
      description: 'Lush landscapes and newborn animals, occasional rain showers',
      temp: '20-32°C',
      highlights: ['Bird watching', 'Lush scenery', 'Baby animals', 'Victoria Falls at fullest']
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[30vh] min-h-[300px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1230302/pexels-photo-1230302.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70" />
        </div>
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="max-w-4xl mx-auto container-padding">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Travel Information
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Everything you need to know for planning your perfect Zimbabwe adventure
            </p>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {quickFacts.map((fact) => (
              <div key={fact.label} className="text-center">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                  <fact.icon className="h-6 w-6 text-primary" />
                </div>
                <p className="text-xs text-muted-foreground">{fact.label}</p>
                <p className="text-sm font-semibold">{fact.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto container-padding">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5">
              <TabsTrigger value="visa">Visa & Entry</TabsTrigger>
              <TabsTrigger value="money">Money Matters</TabsTrigger>
              <TabsTrigger value="transport">Getting Around</TabsTrigger>
              <TabsTrigger value="when">When to Visit</TabsTrigger>
              <TabsTrigger value="practical">Practical Info</TabsTrigger>
            </TabsList>

            {/* Visa & Entry Requirements */}
            <TabsContent value="visa" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5" />
                    Visa Requirements
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-3">
                      <h3 className="font-semibold text-green-600">Visa on Arrival</h3>
                      <div className="space-y-2">
                        {visaInfo['visa-on-arrival'].map((country) => (
                          <div key={country} className="flex items-center gap-2 text-sm">
                            <ChevronRight className="h-3 w-3 text-green-600" />
                            <span>{country}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-3">
                      <h3 className="font-semibold text-amber-600">Visa Required</h3>
                      <div className="space-y-2">
                        {visaInfo['visa-required'].map((country) => (
                          <div key={country} className="flex items-center gap-2 text-sm">
                            <ChevronRight className="h-3 w-3 text-amber-600" />
                            <span>{country}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-3">
                      <h3 className="font-semibold text-blue-600">Visa Free</h3>
                      <div className="space-y-2">
                        {visaInfo['visa-free'].map((country) => (
                          <div key={country} className="flex items-center gap-2 text-sm">
                            <ChevronRight className="h-3 w-3 text-blue-600" />
                            <span>{country}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="border-t pt-6">
                    <h3 className="font-semibold mb-4">Visa Fees</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <Card className="p-4">
                        <h4 className="font-medium">Single Entry</h4>
                        <p className="text-2xl font-bold text-primary">$30</p>
                        <p className="text-sm text-muted-foreground">Valid for 30 days</p>
                      </Card>
                      <Card className="p-4">
                        <h4 className="font-medium">Double Entry</h4>
                        <p className="text-2xl font-bold text-primary">$45</p>
                        <p className="text-sm text-muted-foreground">Valid for 30 days</p>
                      </Card>
                      <Card className="p-4">
                        <h4 className="font-medium">Multiple Entry</h4>
                        <p className="text-2xl font-bold text-primary">$55</p>
                        <p className="text-sm text-muted-foreground">Valid for 90 days</p>
                      </Card>
                    </div>
                  </div>

                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                    <h4 className="font-semibold text-amber-800 mb-2">Important Notes:</h4>
                    <ul className="space-y-1 text-sm text-amber-700">
                      <li>• Passport must be valid for at least 6 months</li>
                      <li>• At least 2 blank pages required</li>
                      <li>• Yellow fever certificate required if coming from endemic areas</li>
                      <li>• Visa fees payable in USD cash only</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Money Matters */}
            <TabsContent value="money" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CreditCard className="h-5 w-5" />
                    Currency & Banking
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-semibold mb-3">Multi-Currency System</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Badge variant="secondary" className="mb-2">Accepted Currencies</Badge>
                          <ul className="space-y-1 text-sm">
                            <li>• US Dollar (USD) - Most widely used</li>
                            <li>• South African Rand (ZAR)</li>
                            <li>• Botswana Pula (BWP)</li>
                            <li>• Euro (EUR) - Limited acceptance</li>
                            <li>• British Pound (GBP) - Limited acceptance</li>
                          </ul>
                        </div>
                        <div className="space-y-2">
                          <Badge variant="secondary" className="mb-2">Payment Methods</Badge>
                          <ul className="space-y-1 text-sm">
                            <li>• Cash (USD preferred)</li>
                            <li>• Credit/Debit Cards (Visa, Mastercard)</li>
                            <li>• Mobile Money (EcoCash, OneMoney)</li>
                            <li>• Bank Transfers</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <Accordion type="single" collapsible>
                      <AccordionItem value="atms">
                        <AccordionTrigger>ATMs & Banking</AccordionTrigger>
                        <AccordionContent>
                          <ul className="space-y-2 text-sm">
                            <li>• ATMs available in major cities and towns</li>
                            <li>• Daily withdrawal limits apply (usually $300-500)</li>
                            <li>• International cards accepted at most ATMs</li>
                            <li>• Banking hours: Mon-Fri 8am-3pm, Sat 8am-11am</li>
                            <li>• Major banks: CBZ, Stanbic, Standard Chartered, FBC</li>
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="tips">
                        <AccordionTrigger>Tipping Guidelines</AccordionTrigger>
                        <AccordionContent>
                          <ul className="space-y-2 text-sm">
                            <li>• Safari guides: $10-20 per day</li>
                            <li>• Hotel staff: $1-2 per service</li>
                            <li>• Restaurants: 10-15% of bill</li>
                            <li>• Taxi drivers: Round up fare</li>
                            <li>• Tour guides: $5-10 per day</li>
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="exchange">
                        <AccordionTrigger>Currency Exchange</AccordionTrigger>
                        <AccordionContent>
                          <ul className="space-y-2 text-sm">
                            <li>• Official exchange at banks and bureaux de change</li>
                            <li>• Bring clean, undamaged USD bills (2009 series or newer)</li>
                            <li>• $100 bills get better rates than smaller denominations</li>
                            <li>• Keep receipts for all exchanges</li>
                            <li>• Avoid street money changers</li>
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Getting Around */}
            <TabsContent value="transport" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5" />
                    Transportation Options
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold mb-3 flex items-center gap-2">
                        <Plane className="h-4 w-4" />
                        Air Travel
                      </h3>
                      <div className="space-y-3 text-sm">
                        <div className="p-3 bg-gray-50 rounded-lg">
                          <h4 className="font-medium mb-1">International Airports</h4>
                          <ul className="space-y-1 text-muted-foreground">
                            <li>• Robert Gabriel Mugabe Int'l (Harare)</li>
                            <li>• Victoria Falls International</li>
                            <li>• Joshua Mqabuko Nkomo Int'l (Bulawayo)</li>
                          </ul>
                        </div>
                        <div className="p-3 bg-gray-50 rounded-lg">
                          <h4 className="font-medium mb-1">Domestic Flights</h4>
                          <p className="text-muted-foreground">FastJet and Air Zimbabwe connect major cities. Flight time Harare-Victoria Falls: 1.5 hours</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-3 flex items-center gap-2">
                        <Car className="h-4 w-4" />
                        Road Travel
                      </h3>
                      <div className="space-y-3 text-sm">
                        <div className="p-3 bg-gray-50 rounded-lg">
                          <h4 className="font-medium mb-1">Car Rental</h4>
                          <ul className="space-y-1 text-muted-foreground">
                            <li>• International license accepted</li>
                            <li>• 4x4 recommended for parks</li>
                            <li>• Drive on the left side</li>
                            <li>• GPS essential</li>
                          </ul>
                        </div>
                        <div className="p-3 bg-gray-50 rounded-lg">
                          <h4 className="font-medium mb-1">Public Transport</h4>
                          <p className="text-muted-foreground">Kombis (minibuses) and buses connect cities. Luxury coaches available for major routes.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <h3 className="font-semibold mb-3">Driving Distances & Times</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b">
                            <th className="text-left py-2">Route</th>
                            <th className="text-center py-2">Distance</th>
                            <th className="text-center py-2">Time</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b">
                            <td className="py-2">Harare - Victoria Falls</td>
                            <td className="text-center">878 km</td>
                            <td className="text-center">10-11 hours</td>
                          </tr>
                          <tr className="border-b">
                            <td className="py-2">Harare - Bulawayo</td>
                            <td className="text-center">439 km</td>
                            <td className="text-center">5 hours</td>
                          </tr>
                          <tr className="border-b">
                            <td className="py-2">Bulawayo - Victoria Falls</td>
                            <td className="text-center">439 km</td>
                            <td className="text-center">5 hours</td>
                          </tr>
                          <tr className="border-b">
                            <td className="py-2">Harare - Great Zimbabwe</td>
                            <td className="text-center">290 km</td>
                            <td className="text-center">3.5 hours</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* When to Visit */}
            <TabsContent value="when" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    Best Time to Visit
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {weatherSeasons.map((season) => (
                      <div key={season.name} className="border rounded-lg p-4">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <h3 className="font-semibold">{season.name}</h3>
                            <p className="text-sm text-muted-foreground">{season.description}</p>
                          </div>
                          <Badge variant="outline">{season.temp}</Badge>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {season.highlights.map((highlight) => (
                            <Badge key={highlight} variant="secondary" className="text-xs">
                              {highlight}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    ))}

                    <div className="mt-6">
                      <h3 className="font-semibold mb-3">Monthly Weather Guide</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <h4 className="font-medium mb-2">Peak Season (July - October)</h4>
                          <ul className="space-y-1 text-muted-foreground">
                            <li>• Excellent game viewing</li>
                            <li>• Cool, dry weather</li>
                            <li>• Higher prices and crowds</li>
                            <li>• Book accommodations early</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium mb-2">Shoulder Season (April - June)</h4>
                          <ul className="space-y-1 text-muted-foreground">
                            <li>• Good weather conditions</li>
                            <li>• Fewer tourists</li>
                            <li>• Better rates</li>
                            <li>• Great for photography</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Practical Information */}
            <TabsContent value="practical" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Heart className="h-5 w-5" />
                      Health & Safety
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="single" collapsible>
                      <AccordionItem value="health">
                        <AccordionTrigger>Health Precautions</AccordionTrigger>
                        <AccordionContent>
                          <ul className="space-y-2 text-sm">
                            <li>• Yellow fever vaccination if from endemic area</li>
                            <li>• Malaria prophylaxis recommended</li>
                            <li>• Hepatitis A & B vaccinations advised</li>
                            <li>• Typhoid vaccination recommended</li>
                            <li>• Travel insurance essential</li>
                            <li>• Drink only bottled water</li>
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="safety">
                        <AccordionTrigger>Safety Tips</AccordionTrigger>
                        <AccordionContent>
                          <ul className="space-y-2 text-sm">
                            <li>• Generally safe for tourists</li>
                            <li>• Avoid walking alone at night</li>
                            <li>• Keep valuables secure</li>
                            <li>• Use registered tour operators</li>
                            <li>• Respect wildlife - keep distance</li>
                            <li>• Follow park rules and guides</li>
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="emergency">
                        <AccordionTrigger>Emergency Contacts</AccordionTrigger>
                        <AccordionContent>
                          <ul className="space-y-2 text-sm">
                            <li>• Police: 995</li>
                            <li>• Medical Emergency: 994</li>
                            <li>• Fire: 993</li>
                            <li>• Tourist Police: +263 4 752800</li>
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Info className="h-5 w-5" />
                      Essential Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="single" collapsible>
                      <AccordionItem value="communication">
                        <AccordionTrigger>Communication</AccordionTrigger>
                        <AccordionContent>
                          <ul className="space-y-2 text-sm">
                            <li>• Mobile networks: Econet, NetOne, Telecel</li>
                            <li>• SIM cards available at airports</li>
                            <li>• WiFi in most hotels and lodges</li>
                            <li>• Internet cafes in cities</li>
                            <li>• WhatsApp widely used</li>
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="electricity">
                        <AccordionTrigger>Electricity & Adapters</AccordionTrigger>
                        <AccordionContent>
                          <ul className="space-y-2 text-sm">
                            <li>• 220-240V, 50Hz</li>
                            <li>• Type D (3 round pins) - Indian style</li>
                            <li>• Type G (3 rectangular pins) - UK style</li>
                            <li>• Bring universal adapter</li>
                            <li>• Power cuts possible - bring powerbank</li>
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="etiquette">
                        <AccordionTrigger>Cultural Etiquette</AccordionTrigger>
                        <AccordionContent>
                          <ul className="space-y-2 text-sm">
                            <li>• Handshakes are common greetings</li>
                            <li>• Ask permission before photographing people</li>
                            <li>• Dress modestly in rural areas</li>
                            <li>• Remove shoes when entering homes</li>
                            <li>• Tipping is appreciated but not mandatory</li>
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Download Section */}
      <section className="bg-primary text-white section-padding">
        <div className="max-w-4xl mx-auto text-center container-padding">
          <h2 className="text-3xl font-bold mb-4">
            Take This Information With You
          </h2>
          <p className="text-lg mb-8 text-white/90">
            Download our comprehensive travel guide PDF with all the essential information 
            for your Zimbabwe adventure.
          </p>
          <Button size="lg" variant="secondary">
            Download Travel Guide PDF
          </Button>
        </div>
      </section>
    </div>
  );
};

export default TravelInfoPage;