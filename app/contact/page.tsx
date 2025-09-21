'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, MapPin, Clock, MessageSquare } from 'lucide-react';

export default function ContactPage() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: 'Недостающая информация',
        description: 'Пожалуйста, заполните все обязательные поля.',
        variant: 'destructive',
      });
      return;
    }

    // FormSubmit will handle the form submission
    toast({
      title: 'Сообщение отправлено!',
      description: 'Спасибо за ваше сообщение. Мы свяжемся с вами в течение 24 часов.',
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Свяжитесь с нами
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Свяжитесь с нашими экспертами по нумизматике. Мы здесь, чтобы помочь со всеми вашими потребностями коллекционирования.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-amber-500 to-red-500 w-12 h-12 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Email</h3>
                    <p className="text-gray-600 mb-2">Отправьте нам сообщение в любое время</p>
                    <a href="mailto:marketmycollection@gmail.com" className="text-amber-600 hover:text-amber-700 font-medium">
                      marketmycollection@gmail.com
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-red-500 to-purple-500 w-12 h-12 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Телефон</h3>
                    <p className="text-gray-600 mb-2">Звоните нам в рабочее время</p>
                    <a href="tel:094598281" className="text-red-600 hover:text-red-700 font-medium">
                      094598281
                    </a>
                    <br />
                    <a href="tel:077486483" className="text-red-600 hover:text-red-700 font-medium">
                      077486483
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-purple-500 to-amber-500 w-12 h-12 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Адрес</h3>
                    <p className="text-gray-600 mb-2">Посетите нас по предварительной записи</p>
                    <p className="text-purple-600 font-medium">
                      Ереван, Армения
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      Точный адрес предоставляется после подтверждения встречи
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-green-500 to-blue-500 w-12 h-12 rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Часы работы</h3>
                    <div className="text-gray-600 space-y-1">
                      <p>Понедельник - Пятница: 10:00 - 18:00</p>
                      <p>Суббота: 10:00 - 16:00</p>
                      <p>Воскресенье: Только по записи</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="w-6 h-6 text-amber-600" />
                  Отправьте нам сообщение
                </CardTitle>
                <p className="text-gray-600">
                  Есть ли у вас вопросы о наших товарах, нужна помощь с заказом или хотите продать свою коллекцию - мы здесь, чтобы помочь.
                </p>
              </CardHeader>
              <CardContent>
                <form action="https://formsubmit.co/marketmycollection@gmail.com" method="POST" className="space-y-6">
                  <input type="hidden" name="_subject" value="Новое сообщение с сайта My Collection Market" />
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_next" value="https://your-website.com/thank-you" />
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Полное имя *</Label>
                      <Input
                        id="Имя"
                        name="name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email адрес *</Label>
                      <Input
                        id="email"
                        name="Почта"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Номер телефона</Label>
                      <Input
                        id="phone"
                        name="Номер телефона"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        placeholder="094 XXX XXX"
                      />
                    </div>
                    <div>
                      <Label htmlFor="subject">Тема</Label>
                      <select
                        id="subject"
                        name="Тема"
                        value={formData.subject}
                        onChange={(e) => setFormData({...formData, subject: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                      >
                        <option value="">Выберите тему</option>
                        <option value="general-inquiry">Общий запрос</option>
                        <option value="product-question">Вопрос о товаре</option>
                        <option value="order-help">Помощь с заказом</option>
                        <option value="selling-collection">Продажа коллекции</option>
                        <option value="authentication">Запрос на аутентификацию</option>
                        <option value="custom-search">Поиск конкретного товара</option>
                        <option value="other">Другое</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message">Сообщение *</Label>
                    <Textarea
                      id="message"
                      name="Сообщение"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="Пожалуйста, опишите, как мы можем вам помочь..."
                      rows={6}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full bg-red-600 hover:bg-red-700">
                    Отправить сообщение
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <Card className="mt-12 bg-gradient-to-r from-amber-50 to-red-50">
          <CardHeader>
            <CardTitle>Часто задаваемые вопросы</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Вы проводите аутентификацию предметов?</h4>
                <p className="text-gray-600 text-sm mb-4">
                  Да, мы предоставляем профессиональные услуги аутентификации для монет, марок и медалей. Свяжитесь с нами для уточнения цен.
                </p>
                
                <h4 className="font-semibold mb-2">Можете ли вы найти конкретные предметы?</h4>
                <p className="text-gray-600 text-sm mb-4">
                  Конечно! У нас есть обширная сеть, и мы можем помочь вам найти конкретные коллекционные предметы. Просто опишите, что вы ищете.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Вы покупаете коллекции?</h4>
                <p className="text-gray-600 text-sm mb-4">
                  Да, мы всегда заинтересованы в покупке качественных коллекций. Используйте нашу форму покупки/продажи или свяжитесь с нами напрямую.
                </p>
                
                <h4 className="font-semibold mb-2">А как насчет международной доставки?</h4>
                <p className="text-gray-600 text-sm">
                  Мы осуществляем международную доставку. Свяжитесь с нами для уточнения стоимости доставки и сроков доставки в ваше местоположение.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}