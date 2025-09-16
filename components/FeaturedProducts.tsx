import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { ProductCard } from './ProductCard';
import { sampleProducts } from '@/lib/sampleData';

export function FeaturedProducts() {
  const featuredProducts = sampleProducts.slice(0, 6);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Collections
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Handpicked items from our premium collection of Armenian numismatic treasures
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8">
            <Link href="/catalog">View Full Catalog</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}