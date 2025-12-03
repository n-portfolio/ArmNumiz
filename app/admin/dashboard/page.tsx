'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { adminAuth } from '@/lib/adminAuth';
import { ProductList } from '@/components/admin/ProductList';
import { LogOut } from 'lucide-react';

export default function AdminDashboardPage() {
    const router = useRouter();

    const handleLogout = () => {
        adminAuth.logout();
        router.push('/admin');
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="bg-white shadow">
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                    <h1 className="text-2xl font-bold text-gray-900">Панель администратора</h1>
                    <Button onClick={handleLogout} variant="outline" className="gap-2">
                        <LogOut className="w-4 h-4" />
                        Выйти
                    </Button>
                </div>
            </div>

            <div className="container mx-auto px-4 py-8">
                <ProductList />
            </div>
        </div>
    );
}
