import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Coins, Medal, Mail } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-amber-50 to-red-50 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center items-center gap-4 mb-6">
            <Coins className="w-12 h-12 text-amber-600" />
            <Medal className="w-12 h-12 text-red-600" />
            <Mail className="w-12 h-12 text-amber-600" />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Добро пожаловать в <span className="text-amber-600">My Collection Market</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Откройте для себя богатое нумизматическое наследие через нашу тщательно подобранную коллекцию 
            <span className="text-red-600 font-semibold"> монет</span>, 
            <span className="text-amber-600 font-semibold"> марок</span> и 
            <span className="text-red-600 font-semibold"> медалей</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3">
              <Link href="/catalog">Просмотреть каталог</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-8 py-3">
              <Link href="/buy-sell">Продать коллекцию</Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <Coins className="w-16 h-16 text-amber-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Редкие монеты</h3>
              <p className="text-gray-600">Исторические монеты и современные коллекционные предметы</p>
            </div>
            <div className="text-center">
              <Mail className="w-16 h-16 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Марки</h3>
              <p className="text-gray-600">Филателистические сокровища из Армении и других стран</p>
            </div>
            <div className="text-center">
              <Medal className="w-16 h-16 text-amber-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Медали и значки</h3>
              <p className="text-gray-600">Военные награды и памятные знаки</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}