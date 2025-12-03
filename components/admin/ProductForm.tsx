'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

interface Product {
    id?: number;
    name: string;
    price: number;
    currency: string;
    image: string;
    category: string;
    description: string;
}

interface ProductFormProps {
    product?: Product;
    onSuccess: () => void;
    onCancel: () => void;
}

export function ProductForm({ product, onSuccess, onCancel }: ProductFormProps) {
    const [formData, setFormData] = useState<Product>({
        name: '',
        price: 0,
        currency: 'RUB',
        image: '',
        category: 'coins',
        description: '',
    });
    const [loading, setLoading] = useState(false);
    const { toast } = useToast();

    useEffect(() => {
        if (product) {
            setFormData(product);
        }
    }, [product]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const url = product ? `/api/products/${product.id}` : '/api/products';
            const method = product ? 'PUT' : 'POST';

            const response = await fetch(url, {
                method,
                headers: {
                    'Content-Type': 'application/json',
                    'x-admin-auth': 'true',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                toast({
                    title: product ? 'Товар обновлен' : 'Товар создан',
                    description: 'Изменения успешно сохранены',
                });
                onSuccess();
            } else {
                const data = await response.json();
                toast({
                    title: 'Ошибка',
                    description: data.error || 'Не удалось сохранить товар',
                    variant: 'destructive',
                });
            }
        } catch (error) {
            toast({
                title: 'Ошибка',
                description: 'Не удалось подключиться к серверу',
                variant: 'destructive',
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <Label htmlFor="name">Название</Label>
                <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    disabled={loading}
                />
            </div>

            <div className="grid grid-cols-2 gap-4">
                <div>
                    <Label htmlFor="price">Цена</Label>
                    <Input
                        id="price"
                        type="number"
                        step="0.01"
                        value={formData.price}
                        onChange={(e) => setFormData({ ...formData, price: parseFloat(e.target.value) })}
                        required
                        disabled={loading}
                    />
                </div>
                <div>
                    <Label htmlFor="currency">Валюта</Label>
                    <Select
                        value={formData.currency}
                        onValueChange={(value) => setFormData({ ...formData, currency: value })}
                        disabled={loading}
                    >
                        <SelectTrigger>
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="RUB">RUB (₽)</SelectItem>
                            <SelectItem value="AMD">AMD (֏)</SelectItem>
                            <SelectItem value="USD">USD ($)</SelectItem>
                            <SelectItem value="EUR">EUR (€)</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>

            <div>
                <Label htmlFor="image">URL изображения</Label>
                <Input
                    id="image"
                    type="url"
                    value={formData.image}
                    onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                    required
                    disabled={loading}
                />
            </div>

            <div>
                <Label htmlFor="category">Категория</Label>
                <Select
                    value={formData.category}
                    onValueChange={(value) => setFormData({ ...formData, category: value })}
                    disabled={loading}
                >
                    <SelectTrigger>
                        <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="coins">Монеты</SelectItem>
                        <SelectItem value="stamps">Марки</SelectItem>
                        <SelectItem value="medals">Медали</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <div>
                <Label htmlFor="description">Описание</Label>
                <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    required
                    disabled={loading}
                    rows={4}
                />
            </div>

            <div className="flex gap-2 justify-end">
                <Button type="button" variant="outline" onClick={onCancel} disabled={loading}>
                    Отмена
                </Button>
                <Button type="submit" className="bg-red-600 hover:bg-red-700" disabled={loading}>
                    {loading ? 'Сохранение...' : product ? 'Обновить' : 'Создать'}
                </Button>
            </div>
        </form>
    );
}
