'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, MapPin, Clock, MessageSquare } from 'lucide-react';

export default function ContactPage() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: 'Missing information',
        description: 'Please fill in all required fields.',
        variant: 'destructive',
      });
      return;
    }

    // Here you would typically send the form data to your backend
    toast({
      title: 'Message sent!',
      description: 'Thank you for your message. We will get back to you within 24 hours.',
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get in touch with our numismatic experts. We're here to help with all your collecting needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-amber-500 to-red-500 w-12 h-12 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Email</h3>
                    <p className="text-gray-600 mb-2">Send us a message anytime</p>
                    <a href="mailto:arm.numiz@mail.ru" className="text-amber-600 hover:text-amber-700 font-medium">
                      arm.numiz@mail.ru
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-red-500 to-purple-500 w-12 h-12 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Phone</h3>
                    <p className="text-gray-600 mb-2">Call us during business hours</p>
                    <a href="tel:+37455534555" className="text-red-600 hover:text-red-700 font-medium">
                      +374 55534555
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-purple-500 to-amber-500 w-12 h-12 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Address</h3>
                    <p className="text-gray-600 mb-2">Visit us by appointment</p>
                    <p className="text-purple-600 font-medium">
                      Yerevan, Armenia
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      Exact address provided upon appointment
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-green-500 to-blue-500 w-12 h-12 rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Business Hours</h3>
                    <div className="text-gray-600 space-y-1">
                      <p>Monday - Friday: 10:00 - 18:00</p>
                      <p>Saturday: 10:00 - 16:00</p>
                      <p>Sunday: By appointment only</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="w-6 h-6 text-amber-600" />
                  Send us a Message
                </CardTitle>
                <p className="text-gray-600">
                  Whether you have questions about our products, need help with an order, or want to sell your collection, we're here to help.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        placeholder="+374 XX XXX XXX"
                      />
                    </div>
                    <div>
                      <Label htmlFor="subject">Subject</Label>
                      <select
                        id="subject"
                        value={formData.subject}
                        onChange={(e) => setFormData({...formData, subject: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                      >
                        <option value="">Select a subject</option>
                        <option value="general-inquiry">General Inquiry</option>
                        <option value="product-question">Product Question</option>
                        <option value="order-help">Order Help</option>
                        <option value="selling-collection">Selling Collection</option>
                        <option value="authentication">Authentication Request</option>
                        <option value="custom-search">Custom Item Search</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="Please describe how we can help you..."
                      rows={6}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full bg-red-600 hover:bg-red-700">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <Card className="mt-12 bg-gradient-to-r from-amber-50 to-red-50">
          <CardHeader>
            <CardTitle>Frequently Asked Questions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Do you authenticate items?</h4>
                <p className="text-gray-600 text-sm mb-4">
                  Yes, we provide professional authentication services for coins, stamps, and medals. Contact us for pricing.
                </p>
                
                <h4 className="font-semibold mb-2">Can you find specific items?</h4>
                <p className="text-gray-600 text-sm mb-4">
                  Absolutely! We have an extensive network and can help you locate specific collectibles. Just describe what you're looking for.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Do you buy collections?</h4>
                <p className="text-gray-600 text-sm mb-4">
                  Yes, we're always interested in purchasing quality collections. Use our buy/sell form or contact us directly.
                </p>
                
                <h4 className="font-semibold mb-2">What about international shipping?</h4>
                <p className="text-gray-600 text-sm">
                  We ship internationally. Contact us for specific shipping costs and delivery times to your location.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}