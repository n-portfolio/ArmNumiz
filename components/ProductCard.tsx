'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useCart, type Product } from '@/contexts/CartContext';
import { ShoppingCart } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { dispatch } = useCart();
  const { toast } = useToast();

  const handleAddToCart = () => {
    dispatch({ type: 'ADD_TO_CART', product });
    toast({
      title: 'Added to cart',
      description: `${product.name} has been added to your cart.`,
    });
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'coins': return 'bg-amber-100 text-amber-800';
      case 'stamps': return 'bg-red-100 text-red-800';
      case 'medals': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'coins': return 'Coins';
      case 'stamps': return 'Stamps';
      case 'medals': return 'Medals';
      default: return category;
    }
  };

  return (
    <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300">
      <div className="relative overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          width={400}
          height={300}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <Badge className={`absolute top-3 left-3 ${getCategoryColor(product.category)}`}>
          {getCategoryLabel(product.category)}
        </Badge>
      </div>
      
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg mb-2 line-clamp-2">
          {product.name}
        </h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-3">
          {product.description}
        </p>
        <p className="text-2xl font-bold text-amber-600">
          ${product.price.toFixed(2)}
        </p>
      </CardContent>
      
      <CardFooter className="p-4 pt-0 flex gap-2">
        <Button asChild variant="outline" className="flex-1">
          <Link href={`/product/${product.id}`}>
            View Details
          </Link>
        </Button>
        <Button onClick={handleAddToCart} className="bg-red-600 hover:bg-red-700">
          <ShoppingCart className="w-4 h-4" />
        </Button>
      </CardFooter>
    </Card>
  );
}