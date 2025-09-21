import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Search, ShoppingCart, CreditCard, Package, Phone, Mail } from 'lucide-react';
import Link from 'next/link';

export default function HowToOrderPage() {
  const steps = [
    // ...existing code...
    {
      icon: Search,
      title: 'Просмотрите наш каталог',
      description: 'Изучайте нашу обширную коллекцию монет, марок и медалей. Используйте поиск и фильтры, чтобы найти то, что вам нужно.',
      details: [
        'Просматривайте по категориям: Монеты, Марки или Медали',
        'Используйте строку поиска для поиска конкретных предметов',
        'Фильтруйте по цене, состоянию или эпохе',
        'Смотрите подробные изображения и описания товаров'
      ]
    },
    {
      icon: ShoppingCart,
      title: 'Добавьте товары в корзину',
      description: 'Нашли что-то интересное? Добавьте в корзину и продолжайте покупки или переходите к оформлению заказа.',
      details: [
        'Нажмите "Добавить в корзину" на странице товара',
        'Изменяйте количество по необходимости',
        'Проверьте корзину перед оформлением',
        'Товары сохраняются на время вашей сессии'
      ]
    },
    {
      icon: CreditCard,
      title: 'Выберите оплату и доставку',
      description: 'Выберите удобный способ оплаты и доставки при оформлении заказа.',
      details: [
        'Оплата: Оплата при получении, банковский перевод или ручная оплата',
        'Доставка: Почтой или самовывоз в Ереване',
        'Заполните контактные и адресные данные',
        'Добавьте особые инструкции в поле для заметок'
      ]
    },
    {
      icon: Package,
      title: 'Получите свой заказ',
      description: 'Мы обработаем ваш заказ и доставим коллекционные предметы безопасно и надежно.',
      details: [
        'Обработка заказа: 2-3 рабочих дня',
        'Подтверждение по email для вас и нашей команды',
        'Трекинг для почтовых отправлений',
        'Надежная упаковка всех товаров'
      ]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Как заказать
          </h1>
          <p className="text-lg text-gray-600">
          Следуйте этим простым шагам, чтобы заказать нумизматические сокровища в ArmNumiz
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
            Нужна помощь?
            </h2>
            <p className="text-gray-700 mb-6">
            Наша команда готова помочь вам с любыми вопросами о товарах или процессе заказа.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="flex items-center gap-2 text-gray-700">
                <Phone className="w-5 h-5 text-amber-600" />
                <span> +37494598281, +37477486483</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <Mail className="w-5 h-5 text-red-600" />
                <span>marketmycollection@gmail.com</span>
              </div>
            </div>
            <div className="mt-6">
              <Link 
                href="/contact"
                className="inline-block bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition-colors"
              >
            Связаться с нами
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}