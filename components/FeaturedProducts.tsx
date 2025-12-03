'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ProductCard } from './ProductCard';

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  category: 'coins' | 'stamps' | 'medals';
  description: string;
}

export function FeaturedProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/products')
      .then((res) => res.json())
      .then((data) => {
        // Ensure data is an array and take first 6
        if (Array.isArray(data)) {
          setProducts(data.slice(0, 6));
        } else {
          console.error('API returned non-array data:', data);
          setProducts([]);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
        setProducts([]);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg text-gray-600">Загрузка товаров...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Избранные коллекции
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Лучшие предметы из нашей премиальной коллекции армянских нумизматических сокровищ
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={{
                ...product,
                price: parseFloat(product.price),
                id: product.id.toString(),
              }}
            />
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8">
            <Link href="/catalog">Посмотреть весь каталог</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}