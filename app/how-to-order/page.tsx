import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Search, ShoppingCart, CreditCard, Package, Phone, Mail } from 'lucide-react';
import Link from 'next/link';

export default function HowToOrderPage() {
  const steps = [
    {
      icon: Search,
      title: 'Browse Our Catalog',
      description: 'Explore our extensive collection of coins, stamps, and medals. Use our search and filter options to find exactly what you\'re looking for.',
      details: [
        'Browse by category: Coins, Stamps, or Medals',
        'Use the search bar to find specific items',
        'Filter by price, condition, or era',
        'View detailed product images and descriptions'
      ]
    },
    {
      icon: ShoppingCart,
      title: 'Add Items to Cart',
      description: 'Found something you like? Add it to your cart and continue shopping or proceed to checkout.',
      details: [
        'Click "Add to Cart" on any product page',
        'Adjust quantities as needed',
        'Review your cart before checkout',
        'Items are saved for your session'
      ]
    },
    {
      icon: CreditCard,
      title: 'Choose Payment & Delivery',
      description: 'Select your preferred payment method and delivery option during checkout.',
      details: [
        'Payment: Cash on Delivery, Bank Transfer, or Manual Payment',
        'Delivery: Post delivery or pickup in Yerevan',
        'Fill in your contact and delivery information',
        'Add any special instructions in the notes section'
      ]
    },
    {
      icon: Package,
      title: 'Receive Your Order',
      description: 'We\'ll process your order and get your collectibles to you safely and securely.',
      details: [
        'Order processing: 2-3 business days',
        'Email confirmation sent to both you and our team',
        'Tracking information provided for postal deliveries',
        'Secure packaging for all items'
      ]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How to Order
          </h1>
          <p className="text-lg text-gray-600">
            Follow these simple steps to order your numismatic treasures from ArmNumiz
          </p>
        </div>

        <div className="space-y-8 mb-12">
          {steps.map((step, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardHeader className="bg-gradient-to-r from-amber-50 to-red-50">
                <CardTitle className="flex items-center gap-4">
                  <div className="bg-gradient-to-br from-amber-500 to-red-500 w-12 h-12 rounded-full flex items-center justify-center">
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-amber-600 font-semibold">Step {index + 1}</div>
                    <div className="text-xl font-bold text-gray-900">{step.title}</div>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-gray-700 mb-4">{step.description}</p>
                <ul className="space-y-2">
                  {step.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600">{detail}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-gradient-to-r from-amber-50 to-red-50">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Need Help?
            </h2>
            <p className="text-gray-700 mb-6">
              Our team is here to assist you with any questions about our products or ordering process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="flex items-center gap-2 text-gray-700">
                <Phone className="w-5 h-5 text-amber-600" />
                <span>+374 55534555</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <Mail className="w-5 h-5 text-red-600" />
                <span>arm.numiz@mail.ru</span>
              </div>
            </div>
            <div className="mt-6">
              <Link 
                href="/contact"
                className="inline-block bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}