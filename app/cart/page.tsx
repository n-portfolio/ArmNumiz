'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Textarea } from '@/components/ui/textarea';
import { useCart } from '@/contexts/CartContext';
import { useToast } from '@/hooks/use-toast';
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';

export default function CartPage() {
  const { items, total, addItem, removeItem, updateQuantity, clearCart } = useCart();
  const { toast } = useToast();
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    notes: ''
  });
  const [deliveryMethod, setDeliveryMethod] = useState('post');
  const [paymentMethod, setPaymentMethod] = useState('cash');

  const handleUpdateQuantity = (productId: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeItem(productId);
    } else {
      updateQuantity(productId, newQuantity);
    }
  };

  const handleRemoveFromCart = (productId: string) => {
    removeItem(productId);
    toast({
      title: 'Удалено из корзины',
      description: 'Товар был удален из вашей корзины.',
    });
  };

  const handleSubmitOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!customerInfo.name || !customerInfo.email) {
      toast({
        title: 'Недостающая информация',
        description: 'Пожалуйста, заполните ваше имя и email адрес.',
        variant: 'destructive',
      });
      return;
    }

    // Here you would typically send the order to your backend
    // For demo purposes, we'll just show a success message
    toast({
      title: 'Заказ отправлен!',
      description: 'Ваш заказ был успешно отправлен. Вы получите подтверждение по электронной почте в ближайшее время.',
    });

    // Clear cart
    clearCart();
    
    // Reset form
    setCustomerInfo({
      name: '',
      email: '',
      phone: '',
      address: '',
      notes: ''
    });
  };

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center max-w-md mx-auto">
          <ShoppingBag className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Ваша корзина пуста</h1>
          <p className="text-gray-600 mb-6">
            Похоже, вы еще не добавили товары в корзину.
          </p>
          <Button asChild>
            <Link href="/catalog">Начать покупки</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Корзина покупок</h1>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {items.map((item) => (
            <Card key={item.id}>
              <CardContent className="p-4">
                <div className="flex gap-4">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={100}
                    height={100}
                    className="rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-1">{item.name}</h3>
                    <p className="text-amber-600 font-bold">${item.price.toFixed(2)}</p>
                    <p className="text-amber-600 font-bold">₽{item.price.toFixed(2)}</p>
                    
                    <div className="flex items-center gap-4 mt-4">
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                        >
                          <Minus className="w-4 h-4" />
                        </Button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus className="w-4 h-4" />
                        </Button>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleRemoveFromCart(item.id)}
                        className="text-red-600 hover:text-red-700"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-lg">
                      ₽{(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Order Summary & Checkout */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Сводка заказа</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Промежуточный итог ({items.reduce((sum, item) => sum + item.quantity, 0)} товаров)</span>
                  <span>₽{total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-bold text-lg border-t pt-2">
                  <span>Итого</span>
                  <span>₽{total.toFixed(2)}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Оформление заказа</CardTitle>
            </CardHeader>
            <CardContent>
              <form action="https://formsubmit.co/marketmycollection@gmail.com" method="POST" className="space-y-4">
                <input type="hidden" name="_subject" value="Новый заказ - My Collection Market" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_next" value="https://your-website.com/thank-you" />
                <input type="hidden" name="order_total" value={`₽${total.toFixed(2)}`} />
                <input type="hidden" name="order_items" value={items.map(item => `${item.name} x${item.quantity} - ₽${(item.price * item.quantity).toFixed(2)}`).join(', ')} />
                
                <div>
                  <Label htmlFor="name">Полное имя *</Label>
                  <Input
                    id="name"
                    name="Имя"
                    value={customerInfo.name}
                    onChange={(e) => setCustomerInfo({...customerInfo, name: e.target.value})}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email адрес *</Label>
                  <Input
                    id="email"
                    name="Почта"
                    type="email"
                    value={customerInfo.email}
                    onChange={(e) => setCustomerInfo({...customerInfo, email: e.target.value})}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Телефон</Label>
                  <Input
                    id="phone"
                    name="Телефон"
                    value={customerInfo.phone}
                    onChange={(e) => setCustomerInfo({...customerInfo, phone: e.target.value})}
                  />
                </div>

                <div>
                  <Label>Способ доставки</Label>
                  <div className="space-y-2">
                    <label className="flex items-center space-x-2">
                      <input 
                        type="radio" 
                        name="Способ доставки" 
                        value="post"
                        onChange={(e) => setDeliveryMethod(e.target.value)}
                      />
                      <span>Почтовая доставка</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input 
                        type="radio" 
                        name="Способ доставки" 
                        value="pickup"
                        onChange={(e) => setDeliveryMethod(e.target.value)}
                      />
                      <span>Самовывоз в Ереване</span>
                    </label>
                  </div>
                </div>

                {deliveryMethod === 'post' && (
                  <div>
                    <Label htmlFor="address">Адрес доставки</Label>
                    <Textarea
                      id="address"
                      name="Адрес доставки"
                      value={customerInfo.address}
                      onChange={(e) => setCustomerInfo({...customerInfo, address: e.target.value})}
                      placeholder="Введите ваш полный адрес"
                    />
                  </div>
                )}

                <div>
                  <Label>Способ оплаты</Label>
                  <div className="space-y-2">
                    <label className="flex items-center space-x-2">
                      <input 
                        type="radio" 
                        name="Наложенный платеж" 
                        value="cash"
                        onChange={(e) => setPaymentMethod(e.target.value)}
                      />
                      <span>Наложенный платеж</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input 
                        type="radio" 
                        name="Банковский перевод" 
                        value="bank"
                        onChange={(e) => setPaymentMethod(e.target.value)}
                      />
                      <span>Банковский перевод</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input 
                        type="radio" 
                        name="Ручная оплата" 
                        value="manual"
                        onChange={(e) => setPaymentMethod(e.target.value)}
                      />
                      <span>Ручная оплата</span>
                    </label>
                  </div>
                </div>

                <div>
                  <Label htmlFor="notes">Примечания к заказу</Label>
                  <Textarea
                    id="notes"
                    name="Примечания к заказу"
                    value={customerInfo.notes}
                    onChange={(e) => setCustomerInfo({...customerInfo, notes: e.target.value})}
                    placeholder="Любые особые инструкции..."
                  />
                </div>

                <Button type="submit" className="w-full bg-red-600 hover:bg-red-700">
                  Отправить заказ
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}