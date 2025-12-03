'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { ProductForm } from './ProductForm';
import { useToast } from '@/hooks/use-toast';
import { Pencil, Trash2, Plus } from 'lucide-react';

interface Product {
    id: number;
    name: string;
    price: string;
    currency: string;
    image: string;
    category: string;
    description: string;
}

export function ProductList() {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [editingProduct, setEditingProduct] = useState<any>(null);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [isCreating, setIsCreating] = useState(false);
    const { toast } = useToast();

    const fetchProducts = async () => {
        try {
            const response = await fetch('/api/products');
            if (response.ok) {
                const data = await response.json();
                setProducts(data);
            }
        } catch (error) {
            toast({
                title: 'Ошибка',
                description: 'Не удалось загрузить товары',
                variant: 'destructive',
            });
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const handleDelete = async (id: number) => {
        if (!confirm('Вы уверены, что хотите удалить этот товар?')) {
            return;
        }

        try {
            const response = await fetch(`/api/products/${id}`, {
                method: 'DELETE',
                headers: {
                    'x-admin-auth': 'true',
                },
            });

            if (response.ok) {
                toast({
                    title: 'Товар удален',
                    description: 'Товар успешно удален',
                });
                fetchProducts();
            } else {
                const data = await response.json();
                toast({
                    title: 'Ошибка',
                    description: data.error || 'Не удалось удалить товар',
                    variant: 'destructive',
                });
            }
        } catch (error) {
            toast({
                title: 'Ошибка',
                description: 'Не удалось подключиться к серверу',
                variant: 'destructive',
            });
        }
    };

    const handleEdit = (product: Product) => {
        setEditingProduct({
            id: product.id,
            name: product.name,
            price: parseFloat(product.price),
            currency: product.currency || 'RUB',
            image: product.image,
            category: product.category,
            description: product.description,
        });
        setIsCreating(false);
        setIsDialogOpen(true);
    };

    const handleCreate = () => {
        setEditingProduct(null);
        setIsCreating(true);
        setIsDialogOpen(true);
    };

    const handleFormSuccess = () => {
        setIsDialogOpen(false);
        setEditingProduct(null);
        setIsCreating(false);
        fetchProducts();
    };

    const getCategoryLabel = (category: string) => {
        switch (category) {
            case 'coins': return 'Монеты';
            case 'stamps': return 'Марки';
            case 'medals': return 'Медали';
            default: return category;
        }
    };

    const getCurrencySymbol = (currency: string) => {
        switch (currency) {
            case 'RUB': return '₽';
            case 'AMD': return '֏';
            case 'USD': return '$';
            case 'EUR': return '€';
            default: return '₽';
        }
    };

    if (loading) {
        return <div className="text-center py-8">Загрузка...</div>;
    }

    return (
        <>
            <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle>Управление товарами</CardTitle>
                    <Button onClick={handleCreate} className="bg-red-600 hover:bg-red-700 gap-2">
                        <Plus className="w-4 h-4" />
                        Добавить товар
                    </Button>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>ID</TableHead>
                                <TableHead>Название</TableHead>
                                <TableHead>Цена</TableHead>
                                <TableHead>Категория</TableHead>
                                <TableHead className="text-right">Действия</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {products.map((product) => (
                                <TableRow key={product.id}>
                                    <TableCell>{product.id}</TableCell>
                                    <TableCell className="font-medium">{product.name}</TableCell>
                                    <TableCell>{parseFloat(product.price).toFixed(2)} {getCurrencySymbol(product.currency)}</TableCell>
                                    <TableCell>{getCategoryLabel(product.category)}</TableCell>
                                    <TableCell className="text-right">
                                        <div className="flex gap-2 justify-end">
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                onClick={() => handleEdit(product)}
                                            >
                                                <Pencil className="w-4 h-4" />
                                            </Button>
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                onClick={() => handleDelete(product.id)}
                                                className="text-red-600 hover:text-red-700"
                                            >
                                                <Trash2 className="w-4 h-4" />
                                            </Button>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>

            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogContent className="max-w-2xl">
                    <DialogHeader>
                        <DialogTitle>
                            {isCreating ? 'Добавить товар' : 'Редактировать товар'}
                        </DialogTitle>
                    </DialogHeader>
                    <ProductForm
                        product={editingProduct || undefined}
                        onSuccess={handleFormSuccess}
                        onCancel={() => setIsDialogOpen(false)}
                    />
                </DialogContent>
            </Dialog>
        </>
    );
}
