import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Coins, TrendingUp, Users } from 'lucide-react';

export function BuySellTeaser() {
  return (
    <section className="py-16 bg-gradient-to-br from-amber-50 to-red-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Продайте свою коллекцию
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Мы всегда заинтересованы в приобретении качественных нумизматических, филателистических и фалеристических предметов
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Coins className="w-12 h-12 text-amber-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-2">Честная оценка</h3>
                  <p className="text-gray-600 text-sm">Получите конкурентную рыночную стоимость за вашу коллекцию</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Users className="w-12 h-12 text-red-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-2">Экспертная оценка</h3>
                  <p className="text-gray-600 text-sm">Профессиональная оценка нашими специалистами</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <TrendingUp className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-2">Быстрый процесс</h3>
                  <p className="text-gray-600 text-sm">Быстрая оценка и оплата</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button asChild size="lg" className="bg-gradient-to-r from-amber-600 to-red-600 hover:from-amber-700 hover:to-red-700 text-white px-8">
                <Link href="/buy-sell">Отправить свою коллекцию</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}