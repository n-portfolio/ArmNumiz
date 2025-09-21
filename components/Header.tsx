'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ShoppingCart, Menu, X, Coins, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { items, total } = useCart();

  return (
    <header className="bg-gradient-to-r from-amber-900 to-red-900 text-white shadow-lg">
      <div className="container mx-auto px-4">
        {/* Top bar with contact info */}
        <div className="py-2 border-b border-amber-800/50 hidden md:block">
          <div className="flex justify-between text-sm">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <Mail className="w-4 h-4" />
                <span>marketmycollection@gmail.com</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                <span>Ереван, Армения</span>
              </div>
            </div>
            <div className="text-amber-200">
              ☎ 094598281, 077486483
            </div>
          </div>
        </div>

        {/* Main header */}
        <div className="py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Coins className="w-8 h-8 text-amber-300" />
            <div>
              <h1 className="text-2xl font-bold text-amber-100">My Collection Market</h1>
              <p className="text-xs text-amber-300">Нумизматика • Филателия • Фалеристика</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="hover:text-amber-300 transition-colors">
              Главная
            </Link>
            <Link href="/catalog" className="hover:text-amber-300 transition-colors">
              Каталог
            </Link>
            <Link href="/how-to-order" className="hover:text-amber-300 transition-colors">
              Как заказать
            </Link>
            <Link href="/payment" className="hover:text-amber-300 transition-colors">
              Оплата
            </Link>
            <Link href="/delivery" className="hover:text-amber-300 transition-colors">
              Доставка
            </Link>
            <Link href="/buy-sell" className="hover:text-amber-300 transition-colors">
              Купить/Продать
            </Link>
            <Link href="/contact" className="hover:text-amber-300 transition-colors">
              Контакты
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <Link href="/cart" className="relative">
              <ShoppingCart className="w-6 h-6 hover:text-amber-300 transition-colors" />
              {items.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {items.reduce((sum, item) => sum + item.quantity, 0)}
                </span>
              )}
            </Link>

            {/* Mobile menu button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-amber-800/50">
            <div className="flex flex-col gap-4">
              <Link href="/" className="hover:text-amber-300 transition-colors">
                Главная
              </Link>
              <Link href="/catalog" className="hover:text-amber-300 transition-colors">
                Каталог
              </Link>
              <Link href="/how-to-order" className="hover:text-amber-300 transition-colors">
                Как заказать
              </Link>
              <Link href="/payment" className="hover:text-amber-300 transition-colors">
                Оплата
              </Link>
              <Link href="/delivery" className="hover:text-amber-300 transition-colors">
                Доставка
              </Link>
              <Link href="/buy-sell" className="hover:text-amber-300 transition-colors">
                Купить/Продать
              </Link>
              <Link href="/contact" className="hover:text-amber-300 transition-colors">
                Контакты
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}