import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CreditCard, Truck, MapPin, Clock } from 'lucide-react';

export function PaymentDeliveryInfo() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Оплата и доставка
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Гибкие варианты на ваш выбор
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="w-6 h-6 text-amber-600" />
                  Способы оплаты
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mt-2"></div>
                  <div>
                      <h4 className="font-semibold">Оплата при получении</h4>
                      <p className="text-gray-600 text-sm">Оплата при получении заказа</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2"></div>
                  <div>
                      <h4 className="font-semibold">Банковский перевод</h4>
                      <p className="text-gray-600 text-sm">Безопасная оплата через банк</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                  <div>
                      <h4 className="font-semibold">Ручная оплата</h4>
                      <p className="text-gray-600 text-sm">Договоритесь об оплате вручную</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Truck className="w-6 h-6 text-red-600" />
                  Варианты доставки
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-red-600 mt-1" />
                  <div>
                      <h4 className="font-semibold">Самовывоз в Ереване</h4>
                      <p className="text-gray-600 text-sm">Бесплатный самовывоз из нашего офиса</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Truck className="w-5 h-5 text-amber-600 mt-1" />
                  <div>
                      <h4 className="font-semibold">Доставка почтой</h4>
                      <p className="text-gray-600 text-sm">Надежная доставка почтой</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-purple-600 mt-1" />
                  <div>
                      <h4 className="font-semibold">Время обработки</h4>
                      <p className="text-gray-600 text-sm">2-3 рабочих дня на обработку</p>
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