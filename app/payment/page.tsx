import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CreditCard, Building, HandCoins, Shield, CheckCircle } from 'lucide-react';

export default function PaymentPage() {
  const paymentMethods = [
    // ...existing code...
    {
      icon: HandCoins,
      title: 'Оплата при получении',
      description: 'Оплатите при получении заказа',
      details: [
        'Самый удобный вариант для местных клиентов',
        'Предоплата не требуется',
        'Идеально для новых покупателей',
        'Доступно для доставки почтой и самовывоза'
      ],
      benefits: ['Без комиссии', 'Безопасная оплата при получении', 'Осмотрите товар перед оплатой']
    },
    {
      icon: Building,
      title: 'Банковский перевод',
      description: 'Прямой перевод на наш банковский счет',
      details: [
        'Безопасный электронный способ оплаты',
        'Реквизиты предоставляются после подтверждения заказа',
        'Время обработки: 1-2 рабочих дня',
        'Подтверждение по электронной почте'
      ],
      benefits: ['Безопасно и отслеживается', 'Без наличных', 'Подходит для крупных заказов']
    },
    {
      icon: CreditCard,
      title: 'Ручная оплата',
      description: 'Договоритесь об оплате напрямую',
      details: [
        'Гибкие условия оплаты',
        'Свяжитесь с нами для обсуждения вариантов',
        'Подходит для особых случаев',
        'Персональное обслуживание'
      ],
      benefits: ['Гибкие условия', 'Личная помощь', 'Индивидуальные планы оплаты']
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Способы оплаты
          </h1>
          <p className="text-lg text-gray-600">
          Выберите удобный и безопасный способ оплаты
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
                      <h4 className="font-semibold mb-2">Как это работает:</h4>
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
                      <h4 className="font-semibold mb-2">Преимущества:</h4>
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
                    Безопасность оплаты
                </h2>
                <p className="text-gray-700 mb-4">
                    В ArmNumiz мы уделяем особое внимание безопасности ваших транзакций. Все способы оплаты обрабатываются
                    с соблюдением самых высоких стандартов безопасности для защиты ваших личных и финансовых данных.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-gray-700">Безопасная обработка заказов</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-gray-700">Подтверждение по email для всех транзакций</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-gray-700">Профессиональная поддержка клиентов</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
              <CardTitle>Нужна помощь с оплатой?</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">
                Если у вас есть вопросы по способам оплаты или нужна помощь с транзакцией,
                пожалуйста, свяжитесь с нами.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="text-sm">
                <strong>Email:</strong> marketmycollection@gmail.com
              </div>
              <div className="text-sm">
                <strong>Phone:</strong>  +37494598281, +37477486483
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}