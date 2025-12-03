'use client';

import { useState, useMemo, useEffect } from 'react';
import { ProductCard } from '@/components/ProductCard';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Search, Filter } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  category: 'coins' | 'stamps' | 'medals';
  description: string;
}

interface Category {
  id: number;
  name: string;
  slug: string;
}

export default function CatalogPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [productsRes, categoriesRes] = await Promise.all([
          fetch('/api/products'),
          fetch('/api/categories')
        ]);

        const productsData = await productsRes.json();
        const categoriesData = await categoriesRes.json();

        if (Array.isArray(productsData)) {
          setProducts(productsData);
        }

        if (Array.isArray(categoriesData)) {
          setCategories(categoriesData);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [products, searchTerm, selectedCategory]);

  const categoryFilters = [
    { value: 'all', label: 'Все категории', count: products.length },
    ...categories.map(cat => ({
      value: cat.slug,
      label: cat.name,
      count: products.filter(p => p.category === cat.slug).length
    }))
  ];

  // Fallback if no categories exist yet
  if (categories.length === 0) {
    categoryFilters.push(
      { value: 'coins', label: 'Монеты', count: products.filter(p => p.category === 'coins').length },
      { value: 'stamps', label: 'Марки', count: products.filter(p => p.category === 'stamps').length },
      { value: 'medals', label: 'Медали', count: products.filter(p => p.category === 'medals').length }
    );
  }

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <p className="text-lg text-gray-600">Загрузка каталога...</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Каталог товаров
        </h1>
        <p className="text-lg text-gray-600">
          Изучайте нашу полную коллекцию нумизматических, филателистических и фалеристических сокровищ
        </p>
      </div>

      {/* Search and Filters */}
      <div className="mb-8">
        <div className="flex flex-col lg:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Поиск товаров..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-gray-500" />
            <span className="text-sm text-gray-500">Фильтр по:</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {categoryFilters.map((category) => (
            <Button
              key={category.value}
              variant={selectedCategory === category.value ? 'default' : 'outline'}
              onClick={() => setSelectedCategory(category.value)}
              className="text-sm"
            >
              {category.label}
              <Badge variant="secondary" className="ml-2">
                {category.count}
              </Badge>
            </Button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={{
              ...product,
              price: parseFloat(product.price),
              currency: (product as any).currency || 'RUB',
              id: product.id.toString(),
            }}
          />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-lg text-gray-600 mb-4">Товары, соответствующие вашему запросу, не найдены.</p>
          <Button onClick={() => { setSearchTerm(''); setSelectedCategory('all'); }}>
            Сбросить фильтры
          </Button>
        </div>
      )}
    </div>
  );
}