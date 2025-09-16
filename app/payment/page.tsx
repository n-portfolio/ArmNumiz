import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CreditCard, Building, HandCoins, Shield, CheckCircle } from 'lucide-react';

export default function PaymentPage() {
  const paymentMethods = [
    {
      icon: HandCoins,
      title: 'Cash on Delivery',
      description: 'Pay when you receive your order',
      details: [
        'Most convenient option for local customers',
        'No advance payment required',
        'Perfect for first-time buyers',
        'Available for both post delivery and pickup'
      ],
      benefits: ['No transaction fees', 'Secure payment upon receipt', 'Inspect items before payment']
    },
    {
      icon: Building,
      title: 'Bank Transfer',
      description: 'Direct transfer to our bank account',
      details: [
        'Secure electronic payment method',
        'Bank details provided after order confirmation',
        'Processing time: 1-2 business days',
        'Confirmation receipt via email'
      ],
      benefits: ['Secure and traceable', 'No cash handling', 'Suitable for large orders']
    },
    {
      icon: CreditCard,
      title: 'Manual Payment',
      description: 'Arrange payment through direct contact',
      details: [
        'Flexible payment arrangement',
        'Contact us to discuss options',
        'Suitable for special circumstances',
        'Personalized service'
      ],
      benefits: ['Flexible terms', 'Personal assistance', 'Custom payment plans']
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Payment Methods
          </h1>
          <p className="text-lg text-gray-600">
            Choose from our secure and convenient payment options
          </p>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {paymentMethods.map((method, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="bg-gradient-to-br from-amber-500 to-red-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <method.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">{method.title}</CardTitle>
                <p className="text-gray-600">{method.description}</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">How it works:</h4>
                    <ul className="space-y-1">
                      {method.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start gap-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-600">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Benefits:</h4>
                    <ul className="space-y-1">
                      {method.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-gradient-to-r from-amber-50 to-red-50 mb-8">
          <CardContent className="p-8">
            <div className="flex items-start gap-4">
              <Shield className="w-8 h-8 text-amber-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">
                  Payment Security
                </h2>
                <p className="text-gray-700 mb-4">
                  At ArmNumiz, we prioritize the security of your transactions. All payment methods are processed 
                  with the highest security standards to protect your personal and financial information.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-gray-700">Secure order processing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-gray-700">Email confirmations for all transactions</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-gray-700">Professional customer service</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Need Help with Payment?</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">
              If you have questions about payment methods or need assistance with your transaction, 
              please don't hesitate to contact us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="text-sm">
                <strong>Email:</strong> arm.numiz@mail.ru
              </div>
              <div className="text-sm">
                <strong>Phone:</strong> +374 55534555
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}