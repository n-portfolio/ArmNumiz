import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Truck, MapPin, Clock, Package, Shield, CheckCircle } from 'lucide-react';

export default function DeliveryPage() {
  const deliveryOptions = [
    // ...existing code...
    {
      icon: Truck,
      title: 'Доставка почтой',
      description: 'Надежная доставка почтой по вашему адресу',
      details: [
        'Доступно по всей Армении и за рубежом',
        'Безопасная упаковка с трекинг-номером',
        'Срок доставки: 3-7 рабочих дней по Армении',
        'Страхование ценных предметов'
      ],
      pricing: 'Рассчитывается по весу и направлению',
      timeline: '3-7 рабочих дней'
    },
    {
      icon: MapPin,
      title: 'Самовывоз в Ереване',
      description: 'Заберите заказ из нашего офиса',
      details: [
        'Бесплатный самовывоз',
        'Удобное расположение в Ереване',
        'Гибкое время по договоренности',
        'Осмотрите товар перед получением'
      ],
      pricing: 'Бесплатно',
      timeline: 'Готово к выдаче после подтверждения заказа'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Информация о доставке
          </h1>
          <p className="text-lg text-gray-600">
          Выберите удобный способ доставки
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
                      <h4 className="font-semibold mb-2">Особенности:</h4>
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
                  Все товары тщательно упаковываются с защитными материалами для безопасной доставки.
                </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6">
              <Clock className="w-12 h-12 text-red-600 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Processing Time</h3>
                <p className="text-gray-600 text-sm">
                  Заказы обрабатываются в течение 2-3 рабочих дней до отправки или самовывоза.
                </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6">
              <Shield className="w-12 h-12 text-purple-600 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Insurance</h3>
                <p className="text-gray-600 text-sm">
                  Ценные товары автоматически страхуются на время доставки для вашего спокойствия.
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
               <p className="text-gray-700">Ереван, Армения</p>
               <p className="text-sm text-gray-600">Точный адрес будет предоставлен после подтверждения заказа</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Contact Information:</h4>
               <h4 className="font-semibold mb-2">Контактная информация:</h4>
                <div className="space-y-1 text-gray-700">
                  <p>📧 marketmycollection@gmail.com</p>
                  <p>📞  +37494598281, +37477486483</p>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Pickup Hours:</h4>
                    <p className="text-gray-700">Только по предварительной договоренности</p>
                    <p className="text-sm text-gray-600">
                      Пожалуйста, свяжитесь с нами для согласования времени самовывоза
                    </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Shipping Policy</CardTitle>
              <CardTitle>Политика доставки</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Order Confirmation</h4>
                    <p className="text-gray-700">
                      Вы получите подтверждение заказа по email сразу после оформления, а также уведомление, когда заказ будет обработан и готов к доставке.
                    </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Tracking Information</h4>
                    <p className="text-gray-700">
                      Для почтовых отправлений трекинг-номер будет предоставлен по email после отправки посылки.
                    </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Delivery Attempts</h4>
                    <p className="text-gray-700">
                      Если доставка не удалась, почта предпримет дополнительные попытки или оставит посылку для самовывоза в отделении.
                    </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}