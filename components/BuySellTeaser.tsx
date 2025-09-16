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
              Sell Your Collection
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're always interested in acquiring quality numismatic, philatelic, and faleristic items
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Coins className="w-12 h-12 text-amber-600 mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Fair Pricing</h3>
                <p className="text-gray-600 text-sm">Get competitive market value for your collection</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Users className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Expert Evaluation</h3>
                <p className="text-gray-600 text-sm">Professional assessment by our specialists</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <TrendingUp className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Quick Process</h3>
                <p className="text-gray-600 text-sm">Fast evaluation and payment process</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button asChild size="lg" className="bg-gradient-to-r from-amber-600 to-red-600 hover:from-amber-700 hover:to-red-700 text-white px-8">
              <Link href="/buy-sell">Submit Your Collection</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}