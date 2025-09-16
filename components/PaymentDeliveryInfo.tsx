import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CreditCard, Truck, MapPin, Clock } from 'lucide-react';

export function PaymentDeliveryInfo() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Payment & Delivery
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Flexible options to suit your preferences
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="w-6 h-6 text-amber-600" />
                Payment Methods
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold">Cash on Delivery</h4>
                    <p className="text-gray-600 text-sm">Pay when you receive your order</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold">Bank Transfer</h4>
                    <p className="text-gray-600 text-sm">Secure direct bank payment</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold">Manual Payment</h4>
                    <p className="text-gray-600 text-sm">Arrange payment manually</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Truck className="w-6 h-6 text-red-600" />
                Delivery Options
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-red-600 mt-1" />
                  <div>
                    <h4 className="font-semibold">Pickup in Yerevan</h4>
                    <p className="text-gray-600 text-sm">Free pickup from our office</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Truck className="w-5 h-5 text-amber-600 mt-1" />
                  <div>
                    <h4 className="font-semibold">Post Delivery</h4>
                    <p className="text-gray-600 text-sm">Reliable postal service delivery</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-purple-600 mt-1" />
                  <div>
                    <h4 className="font-semibold">Processing Time</h4>
                    <p className="text-gray-600 text-sm">2-3 business days processing</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}