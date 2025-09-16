import { Card, CardContent } from '@/components/ui/card';
import { Search, ShoppingCart, CreditCard, Package } from 'lucide-react';

export function OrderingGuide() {
  const steps = [
    {
      icon: Search,
      title: 'Browse & Search',
      description: 'Explore our catalog or use search to find specific items in our collection.'
    },
    {
      icon: ShoppingCart,
      title: 'Add to Cart',
      description: 'Select your desired items and add them to your shopping cart.'
    },
    {
      icon: CreditCard,
      title: 'Choose Payment',
      description: 'Select from Cash on Delivery, Bank Transfer, or Manual Payment options.'
    },
    {
      icon: Package,
      title: 'Receive Order',
      description: 'Choose Post delivery or Pickup from our Yerevan location.'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How to Order
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Simple steps to get your numismatic treasures delivered to your door
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="bg-gradient-to-br from-amber-500 to-red-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <div className="bg-amber-600 text-white w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                  {index + 1}
                </div>
                <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}