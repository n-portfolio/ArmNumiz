import Link from 'next/link';
import { Coins, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Coins className="w-6 h-6 text-amber-400" />
              <div>
                <h3 className="text-lg font-bold">My Collection Market</h3>
                <p className="text-xs text-gray-400">С 2020 года</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm">
              Ваш надежный партнер в области нумизматики, филателии и фалеристики. 
              Откройте для себя редкие коллекционные предметы и пополните свою коллекцию с уверенностью.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Быстрые ссылки</h4>
            <div className="flex flex-col gap-2 text-sm">
              <Link href="/catalog" className="text-gray-300 hover:text-amber-400 transition-colors">
                Каталог
              </Link>
              <Link href="/how-to-order" className="text-gray-300 hover:text-amber-400 transition-colors">
                Как заказать
              </Link>
              <Link href="/payment" className="text-gray-300 hover:text-amber-400 transition-colors">
                Способы оплаты
              </Link>
              <Link href="/delivery" className="text-gray-300 hover:text-amber-400 transition-colors">
                Информация о доставке
              </Link>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold mb-4">Категории</h4>
            <div className="flex flex-col gap-2 text-sm">
              <Link href="/catalog?category=coins" className="text-gray-300 hover:text-amber-400 transition-colors">
                Монеты
              </Link>
              <Link href="/catalog?category=stamps" className="text-gray-300 hover:text-amber-400 transition-colors">
                Марки
              </Link>
              <Link href="/catalog?category=medals" className="text-gray-300 hover:text-amber-400 transition-colors">
                Медали и значки
              </Link>
              <Link href="/buy-sell" className="text-gray-300 hover:text-amber-400 transition-colors">
                Купить/Продать коллекции
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <div className="flex flex-col gap-3 text-sm">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400" />
                <span className="text-gray-300">marketmycollection@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400" />
                <span className="text-gray-300">094598281, 077486483</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-400" />
                <span className="text-gray-300">Ереван, Армения</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2025 My Collection Market. Все права защищены. | Профессиональные нумизматические услуги с 2020 года</p>
        </div>
      </div>
    </footer>
  );
}