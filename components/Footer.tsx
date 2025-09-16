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
                <h3 className="text-lg font-bold">ArmNumiz</h3>
                <p className="text-xs text-gray-400">Since 2020</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm">
              Your trusted partner for Armenian numismatics, philately, and faleristics. 
              Discover rare collectibles and build your collection with confidence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2 text-sm">
              <Link href="/catalog" className="text-gray-300 hover:text-amber-400 transition-colors">
                Catalog
              </Link>
              <Link href="/how-to-order" className="text-gray-300 hover:text-amber-400 transition-colors">
                How to Order
              </Link>
              <Link href="/payment" className="text-gray-300 hover:text-amber-400 transition-colors">
                Payment Methods
              </Link>
              <Link href="/delivery" className="text-gray-300 hover:text-amber-400 transition-colors">
                Delivery Info
              </Link>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold mb-4">Categories</h4>
            <div className="flex flex-col gap-2 text-sm">
              <Link href="/catalog?category=coins" className="text-gray-300 hover:text-amber-400 transition-colors">
                Coins
              </Link>
              <Link href="/catalog?category=stamps" className="text-gray-300 hover:text-amber-400 transition-colors">
                Stamps
              </Link>
              <Link href="/catalog?category=medals" className="text-gray-300 hover:text-amber-400 transition-colors">
                Medals & Badges
              </Link>
              <Link href="/buy-sell" className="text-gray-300 hover:text-amber-400 transition-colors">
                Buy/Sell Collections
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="flex flex-col gap-3 text-sm">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400" />
                <span className="text-gray-300">arm.numiz@mail.ru</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400" />
                <span className="text-gray-300">+374 55534555</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-400" />
                <span className="text-gray-300">Yerevan, Armenia</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2025 ArmNumiz. All rights reserved. | Professional numismatic services since 2020</p>
        </div>
      </div>
    </footer>
  );
}