'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';
import { Coins, Mail, Medal, Upload, TrendingUp, Shield, Users } from 'lucide-react';

export default function BuySellPage() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    collectionType: '',
    itemTypes: [] as string[],
    description: '',
    photos: '',
    condition: '',
    provenance: '',
    estimatedValue: '',
    urgency: '',
    meetingPreference: '',
    additionalNotes: ''
  });

  const handleItemTypeChange = (itemType: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      itemTypes: checked 
        ? [...prev.itemTypes, itemType]
        : prev.itemTypes.filter(type => type !== itemType)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.description) {
      toast({
        title: 'Missing information',
        description: 'Please fill in all required fields.',
        variant: 'destructive',
      });
      return;
    }

    // Here you would typically send the form data to your backend
    toast({
      title: 'Collection submitted!',
      description: 'Thank you for your submission. We will contact you within 24 hours to discuss your collection.',
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      collectionType: '',
      itemTypes: [],
      description: '',
      photos: '',
      condition: '',
      provenance: '',
      estimatedValue: '',
      urgency: '',
      meetingPreference: '',
      additionalNotes: ''
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Sell Your Collection
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're always interested in acquiring quality numismatic, philatelic, and faleristic items. 
            Submit details about your collection for a professional evaluation.
          </p>
        </div>

        {/* Why Sell to Us */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <TrendingUp className="w-12 h-12 text-amber-600 mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Fair Market Pricing</h3>
              <p className="text-gray-600 text-sm">
                Get competitive prices based on current market values and rarity
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <Users className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Expert Evaluation</h3>
              <p className="text-gray-600 text-sm">
                Professional assessment by experienced collectors and dealers
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <Shield className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Secure Process</h3>
              <p className="text-gray-600 text-sm">
                Safe, transparent transactions with proper documentation
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Submission Form */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Upload className="w-6 h-6 text-amber-600" />
              Collection Submission Form
            </CardTitle>
            <p className="text-gray-600">
              Please provide as much detail as possible to help us evaluate your collection accurately.
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Contact Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">Contact Information</h3>
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
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    placeholder="+374 XX XXX XXX"
                  />
                </div>
              </div>

              {/* Collection Type */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">Collection Type</h3>
                <RadioGroup 
                  value={formData.collectionType} 
                  onValueChange={(value) => setFormData({...formData, collectionType: value})}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="single-items" id="single-items" />
                    <Label htmlFor="single-items">Individual items</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="small-collection" id="small-collection" />
                    <Label htmlFor="small-collection">Small collection (under 50 items)</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="large-collection" id="large-collection" />
                    <Label htmlFor="large-collection">Large collection (50+ items)</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="entire-estate" id="entire-estate" />
                    <Label htmlFor="entire-estate">Entire estate/inherited collection</Label>
                  </div>
                </RadioGroup>
              </div>

              {/* Item Types */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">Item Categories</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  {[
                    { id: 'coins-ancient', label: 'Ancient Coins', icon: Coins },
                    { id: 'coins-modern', label: 'Modern Coins', icon: Coins },
                    { id: 'stamps-vintage', label: 'Vintage Stamps', icon: Mail },
                    { id: 'stamps-modern', label: 'Modern Stamps', icon: Mail },
                    { id: 'medals-military', label: 'Military Medals', icon: Medal },
                    { id: 'medals-commemorative', label: 'Commemorative Medals', icon: Medal }
                  ].map(item => (
                    <div key={item.id} className="flex items-center space-x-2">
                      <Checkbox
                        id={item.id}
                        checked={formData.itemTypes.includes(item.id)}
                        onCheckedChange={(checked) => handleItemTypeChange(item.id, !!checked)}
                      />
                      <Label htmlFor={item.id} className="flex items-center gap-2">
                        <item.icon className="w-4 h-4" />
                        {item.label}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Collection Description */}
              <div>
                <Label htmlFor="description">Collection Description *</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  placeholder="Please describe your collection in detail: what items you have, approximate quantities, notable pieces, historical periods, countries of origin, etc."
                  rows={4}
                  required
                />
              </div>

              {/* Additional Details */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="condition">Overall Condition</Label>
                  <select
                    id="condition"
                    value={formData.condition}
                    onChange={(e) => setFormData({...formData, condition: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                  >
                    <option value="">Select condition</option>
                    <option value="excellent">Excellent/Mint</option>
                    <option value="very-fine">Very Fine</option>
                    <option value="fine">Fine</option>
                    <option value="good">Good</option>
                    <option value="poor">Poor/Damaged</option>
                    <option value="mixed">Mixed conditions</option>
                  </select>
                </div>
                <div>
                  <Label htmlFor="estimatedValue">Estimated Value (if known)</Label>
                  <Input
                    id="estimatedValue"
                    value={formData.estimatedValue}
                    onChange={(e) => setFormData({...formData, estimatedValue: e.target.value})}
                    placeholder="e.g., $500-1000 USD"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="provenance">Provenance/History</Label>
                <Textarea
                  id="provenance"
                  value={formData.provenance}
                  onChange={(e) => setFormData({...formData, provenance: e.target.value})}
                  placeholder="How did you acquire this collection? Any documentation, certificates, or historical information?"
                  rows={3}
                />
              </div>

              <div>
                <Label htmlFor="photos">Photo Information</Label>
                <Textarea
                  id="photos"
                  value={formData.photos}
                  onChange={(e) => setFormData({...formData, photos: e.target.value})}
                  placeholder="Do you have photos of the items? Please describe what photos you can provide or mention if you need assistance with photography."
                  rows={2}
                />
              </div>

              {/* Meeting Preferences */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">Meeting Preferences</h3>
                <RadioGroup 
                  value={formData.meetingPreference} 
                  onValueChange={(value) => setFormData({...formData, meetingPreference: value})}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yerevan-office" id="yerevan-office" />
                    <Label htmlFor="yerevan-office">Visit our Yerevan office</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="home-visit" id="home-visit" />
                    <Label htmlFor="home-visit">Home visit (for large collections)</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="photos-first" id="photos-first" />
                    <Label htmlFor="photos-first">Initial evaluation via photos</Label>
                  </div>
                </RadioGroup>
              </div>

              <div>
                <Label htmlFor="urgency">Timeline</Label>
                <select
                  id="urgency"
                  value={formData.urgency}
                  onChange={(e) => setFormData({...formData, urgency: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                >
                  <option value="">Select timeline</option>
                  <option value="no-rush">No rush - just exploring options</option>
                  <option value="few-weeks">Within a few weeks</option>
                  <option value="urgent">Urgent - need to sell quickly</option>
                </select>
              </div>

              <div>
                <Label htmlFor="additionalNotes">Additional Notes</Label>
                <Textarea
                  id="additionalNotes"
                  value={formData.additionalNotes}
                  onChange={(e) => setFormData({...formData, additionalNotes: e.target.value})}
                  placeholder="Any other information you'd like us to know..."
                  rows={3}
                />
              </div>

              <Button type="submit" className="w-full bg-red-600 hover:bg-red-700">
                Submit Collection for Evaluation
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* What Happens Next */}
        <Card className="mt-8 bg-gradient-to-r from-amber-50 to-red-50">
          <CardHeader>
            <CardTitle>What Happens Next?</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-amber-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold mt-1">1</div>
                <div>
                  <h4 className="font-semibold">Initial Review</h4>
                  <p className="text-gray-600 text-sm">We'll review your submission within 24 hours</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-red-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold mt-1">2</div>
                <div>
                  <h4 className="font-semibold">Initial Contact</h4>
                  <p className="text-gray-600 text-sm">We'll contact you to discuss your collection and arrange evaluation</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-purple-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold mt-1">3</div>
                <div>
                  <h4 className="font-semibold">Professional Evaluation</h4>
                  <p className="text-gray-600 text-sm">Our experts will assess your items and provide a fair offer</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-green-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold mt-1">4</div>
                <div>
                  <h4 className="font-semibold">Secure Transaction</h4>
                  <p className="text-gray-600 text-sm">If accepted, we'll handle all paperwork and payment promptly</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}