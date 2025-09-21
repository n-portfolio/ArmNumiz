'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';
import { Coins, Mail, Medal, Upload, TrendingUp, Shield, Users } from 'lucide-react';

export default function BuySellPage() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    collectionType: '',
    itemTypes: [] as string[],
    description: '',
    photos: '',
    condition: '',
    provenance: '',
    estimatedValue: '',
    urgency: '',
    meetingPreference: '',
    additionalNotes: ''
  });

  const handleItemTypeChange = (itemType: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      itemTypes: checked 
        ? [...prev.itemTypes, itemType]
        : prev.itemTypes.filter(type => type !== itemType)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.description) {
      toast({
        title: 'Недостающая информация',
        description: 'Пожалуйста, заполните все обязательные поля.',
        variant: 'destructive',
      });
      return;
    }

    // FormSubmit will handle the form submission
    toast({
      title: 'Коллекция отправлена!',
      description: 'Спасибо за вашу заявку. Мы свяжемся с вами в течение 24 часов для обсуждения вашей коллекции.',
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      collectionType: '',
      itemTypes: [],
      description: '',
      photos: '',
      condition: '',
      provenance: '',
      estimatedValue: '',
      urgency: '',
      meetingPreference: '',
      additionalNotes: ''
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Продайте свою коллекцию
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Мы всегда заинтересованы в приобретении качественных нумизматических, филателистических и фалеристических предметов. 
            Отправьте детали о вашей коллекции для профессиональной оценки.
          </p>
        </div>

        {/* Why Sell to Us */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <TrendingUp className="w-12 h-12 text-amber-600 mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Справедливые рыночные цены</h3>
              <p className="text-gray-600 text-sm">
                Получите конкурентоспособные цены на основе текущих рыночных стоимостей и редкости
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <Users className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Экспертная оценка</h3>
              <p className="text-gray-600 text-sm">
                Профессиональная оценка опытными коллекционерами и дилерами
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <Shield className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Безопасный процесс</h3>
              <p className="text-gray-600 text-sm">
                Безопасные, прозрачные сделки с надлежащей документацией
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Submission Form */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Upload className="w-6 h-6 text-amber-600" />
              Форма подачи коллекции
            </CardTitle>
            <p className="text-gray-600">
              Пожалуйста, предоставьте как можно больше деталей, чтобы помочь нам точно оценить вашу коллекцию.
            </p>
          </CardHeader>
          <CardContent>
            <form action="https://formsubmit.co/marketmycollection@gmail.com" method="POST" className="space-y-6">
              <input type="hidden" name="_subject" value="Новая заявка на продажу коллекции - My Collection Market" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value="https://your-website.com/thank-you" />
              
              {/* Contact Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">Контактная информация</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Полное имя *</Label>
                    <Input
                      id="name"
                      name="Имя"
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
                <div>
                  <Label htmlFor="phone">Номер телефона</Label>
                  <Input
                    id="phone"
                    name="Телефонный номер"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    placeholder="094 XXX XXX"
                  />
                </div>
              </div>

              {/* Collection Type */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">Тип коллекции</h3>
                <div className="space-y-2">
                  <label className="flex items-center space-x-2">
                    <input 
                      type="radio" 
                      name="Тип Колекции" 
                      value="single-items"
                      onChange={(e) => setFormData({...formData, collectionType: e.target.value})}
                    />
                    <span>Отдельные предметы</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input 
                      type="radio" 
                      name="Тип Колекции" 
                      value="small-collection"
                      onChange={(e) => setFormData({...formData, collectionType: e.target.value})}
                    />
                    <span>Небольшая коллекция (менее 50 предметов)</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input 
                      type="radio" 
                      name="Тип Колекции" 
                      value="large-collection"
                      onChange={(e) => setFormData({...formData, collectionType: e.target.value})}
                    />
                    <span>Большая коллекция (50+ предметов)</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input 
                      type="radio" 
                      name="Тип Колекции" 
                      value="entire-estate"
                      onChange={(e) => setFormData({...formData, collectionType: e.target.value})}
                    />
                    <span>Целое наследство/унаследованная коллекция</span>
                  </label>
                </div>
              </div>

              {/* Item Types */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">Категории предметов</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  {[
                    { id: 'coins-ancient', label: 'Древние монеты', icon: Coins },
                    { id: 'coins-modern', label: 'Современные монеты', icon: Coins },
                    { id: 'stamps-vintage', label: 'Винтажные марки', icon: Mail },
                    { id: 'stamps-modern', label: 'Современные марки', icon: Mail },
                    { id: 'medals-military', label: 'Военные медали', icon: Medal },
                    { id: 'medals-commemorative', label: 'Памятные медали', icon: Medal }
                  ].map(item => (
                    <div key={item.id} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id={item.id}
                        name="itemTypes"
                        value={item.id}
                        onChange={(e) => handleItemTypeChange(item.id, e.target.checked)}
                      />
                      <Label htmlFor={item.id} className="flex items-center gap-2">
                        <item.icon className="w-4 h-4" />
                        {item.label}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Collection Description */}
              <div>
                <Label htmlFor="description">Описание коллекции *</Label>
                <Textarea
                  id="description"
                  name="Описание"
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  placeholder="Пожалуйста, подробно опишите вашу коллекцию: какие предметы у вас есть, приблизительное количество, примечательные экземпляры, исторические периоды, страны происхождения и т.д."
                  rows={4}
                  required
                />
              </div>

              {/* Additional Details */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="condition">Общее состояние</Label>
                  <select
                    id="condition"
                    name="Состояние"
                    value={formData.condition}
                    onChange={(e) => setFormData({...formData, condition: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                  >
                    <option value="">Выберите состояние</option>
                    <option value="excellent">Отличное/Новое</option>
                    <option value="very-fine">Очень хорошее</option>
                    <option value="fine">Хорошее</option>
                    <option value="good">Удовлетворительное</option>
                    <option value="poor">Плохое/Поврежденное</option>
                    <option value="mixed">Смешанные состояния</option>
                  </select>
                </div>
                <div>
                  <Label htmlFor="estimatedValue">Предполагаемая стоимость (если известна)</Label>
                  <Input
                    id="estimatedValue"
                    name="Предполагаемая стоимость"
                    value={formData.estimatedValue}
                    onChange={(e) => setFormData({...formData, estimatedValue: e.target.value})}
                    placeholder="например, ₽50000-100000"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="provenance">Происхождение/История</Label>
                <Textarea
                  id="provenance"
                  name="Происхождение/История"
                  value={formData.provenance}
                  onChange={(e) => setFormData({...formData, provenance: e.target.value})}
                  placeholder="Как вы приобрели эту коллекцию? Есть ли документация, сертификаты или историческая информация?"
                  rows={3}
                />
              </div>

              <div>
                <Label htmlFor="photos">Информация о фотографиях</Label>
                <Textarea
                  id="photos"
                  name="Информация о фотографиях"
                  value={formData.photos}
                  onChange={(e) => setFormData({...formData, photos: e.target.value})}
                  placeholder="Есть ли у вас фотографии предметов? Пожалуйста, опишите, какие фотографии вы можете предоставить, или упомяните, если вам нужна помощь с фотографированием."
                  rows={2}
                />
              </div>

              {/* Meeting Preferences */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">Предпочтения встречи</h3>
                <div className="space-y-2">
                  <label className="flex items-center space-x-2">
                    <input 
                      type="radio" 
                      name="Предпочтения встречи" 
                      value="yerevan-office"
                      onChange={(e) => setFormData({...formData, meetingPreference: e.target.value})}
                    />
                    <span>Посетить наш офис в Ереване</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input 
                      type="radio" 
                      name="Посетить в наш офис" 
                      value="home-visit"
                      onChange={(e) => setFormData({...formData, meetingPreference: e.target.value})}
                    />
                    <span>Домашний визит (для больших коллекций)</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input 
                      type="radio" 
                      name="Домашний Визит" 
                      value="photos-first"
                      onChange={(e) => setFormData({...formData, meetingPreference: e.target.value})}
                    />
                    <span>Первоначальная оценка по фотографиям</span>
                  </label>
                </div>
              </div>

              <div>
                <Label htmlFor="urgency">Временные рамки</Label>
                <select
                  id="urgency"
                  name="Временные рамки"
                  value={formData.urgency}
                  onChange={(e) => setFormData({...formData, urgency: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                >
                  <option value="">Выберите временные рамки</option>
                  <option value="no-rush">Не спешу - просто изучаю варианты</option>
                  <option value="few-weeks">В течение нескольких недель</option>
                  <option value="urgent">Срочно - нужно продать быстро</option>
                </select>
              </div>

              <div>
                <Label htmlFor="additionalNotes">Дополнительные заметки</Label>
                <Textarea
                  id="additionalNotes"
                  name="Дополнительные заметки"
                  value={formData.additionalNotes}
                  onChange={(e) => setFormData({...formData, additionalNotes: e.target.value})}
                  placeholder="Любая другая информация, которую вы хотели бы нам сообщить..."
                  rows={3}
                />
              </div>

              <Button type="submit" className="w-full bg-red-600 hover:bg-red-700">
                Отправить коллекцию на оценку
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* What Happens Next */}
        <Card className="mt-8 bg-gradient-to-r from-amber-50 to-red-50">
          <CardHeader>
            <CardTitle>Что происходит дальше?</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-amber-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold mt-1">1</div>
                <div>
                  <h4 className="font-semibold">Первоначальный обзор</h4>
                  <p className="text-gray-600 text-sm">Мы рассмотрим вашу заявку в течение 24 часов</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-red-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold mt-1">2</div>
                <div>
                  <h4 className="font-semibold">Первоначальный контакт</h4>
                  <p className="text-gray-600 text-sm">Мы свяжемся с вами для обсуждения вашей коллекции и организации оценки</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-purple-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold mt-1">3</div>
                <div>
                  <h4 className="font-semibold">Профессиональная оценка</h4>
                  <p className="text-gray-600 text-sm">Наши эксперты оценят ваши предметы и предоставят справедливое предложение</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-green-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold mt-1">4</div>
                <div>
                  <h4 className="font-semibold">Безопасная сделка</h4>
                  <p className="text-gray-600 text-sm">При принятии предложения мы оформим все документы и произведем оплату оперативно</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}