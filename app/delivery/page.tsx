import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Truck, MapPin, Clock, Package, Shield, CheckCircle } from 'lucide-react';

export default function DeliveryPage() {
  const deliveryOptions = [
    {
      icon: Truck,
      title: 'Post Delivery',
      description: 'Reliable postal service to your address',
      details: [
        'Available throughout Armenia and internationally',
        'Secure packaging with tracking number',
        'Delivery time: 3-7 business days within Armenia',
        'Insurance coverage for valuable items'
      ],
      pricing: 'Calculated based on weight and destination',
      timeline: '3-7 business days'
    },
    {
      icon: MapPin,
      title: 'Pickup in Yerevan',
      description: 'Collect your order from our office',
      details: [
        'Free pickup option',
        'Convenient Yerevan location',
        'Flexible pickup hours by appointment',
        'Inspect items before taking them'
      ],
      pricing: 'Free',
      timeline: 'Ready for pickup after order confirmation'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Delivery Information
          </h1>
          <p className="text-lg text-gray-600">
            Choose the delivery method that works best for you
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {deliveryOptions.map((option, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="bg-gradient-to-br from-amber-500 to-red-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <option.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">{option.title}</CardTitle>
                <p className="text-gray-600">{option.description}</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <div className="text-sm text-gray-600">Cost</div>
                      <div className="font-semibold text-amber-600">{option.pricing}</div>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <div className="text-sm text-gray-600">Timeline</div>
                      <div className="font-semibold text-red-600">{option.timeline}</div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Features:</h4>
                    <ul className="space-y-1">
                      {option.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="text-center">
            <CardContent className="p-6">
              <Package className="w-12 h-12 text-amber-600 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Secure Packaging</h3>
              <p className="text-gray-600 text-sm">
                All items are carefully packaged with protective materials to ensure safe delivery.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6">
              <Clock className="w-12 h-12 text-red-600 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Processing Time</h3>
              <p className="text-gray-600 text-sm">
                Orders are processed within 2-3 business days before shipping or pickup.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6">
              <Shield className="w-12 h-12 text-purple-600 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Insurance</h3>
              <p className="text-gray-600 text-sm">
                High-value items are automatically insured during transit for your peace of mind.
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-gradient-to-r from-amber-50 to-red-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="w-6 h-6 text-red-600" />
              Pickup Location Details
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Address:</h4>
                <p className="text-gray-700">Yerevan, Armenia</p>
                <p className="text-sm text-gray-600">Exact address will be provided after order confirmation</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Contact Information:</h4>
                <div className="space-y-1 text-gray-700">
                  <p>📧 arm.numiz@mail.ru</p>
                  <p>📞 +374 55534555</p>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Pickup Hours:</h4>
                <p className="text-gray-700">By appointment only</p>
                <p className="text-sm text-gray-600">
                  Please contact us to schedule a convenient pickup time
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Shipping Policy</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Order Confirmation</h4>
                <p className="text-gray-700">
                  You will receive an email confirmation immediately after placing your order, 
                  followed by another notification when your order is processed and ready for delivery.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Tracking Information</h4>
                <p className="text-gray-700">
                  For postal deliveries, tracking information will be provided via email once your 
                  package has been dispatched.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Delivery Attempts</h4>
                <p className="text-gray-700">
                  If delivery is unsuccessful, the postal service will make additional attempts or 
                  hold the package for pickup at the local post office.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}