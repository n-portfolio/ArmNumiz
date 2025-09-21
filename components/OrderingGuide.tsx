import { Card, CardContent } from '@/components/ui/card';
import { Search, ShoppingCart, CreditCard, Package } from 'lucide-react';

export function OrderingGuide() {
  const steps = [
    {
      icon: Search,
        title: 'Просмотр и поиск',
        description: 'Изучайте наш каталог или используйте поиск, чтобы найти конкретные предметы в нашей коллекции.'
    },
    {
      icon: ShoppingCart,
        title: 'Добавить в корзину',
        description: 'Выберите желаемые товары и добавьте их в корзину.'
    },
    {
      icon: CreditCard,
        title: 'Выберите способ оплаты',
        description: 'Выберите оплату при получении, банковский перевод или ручной способ оплаты.'
    },
    {
      icon: Package,
        title: 'Получите заказ',
        description: 'Выберите доставку почтой или самовывоз из нашего офиса в Ереване.'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Как заказать
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Простые шаги, чтобы получить ваши нумизматические сокровища на дом
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