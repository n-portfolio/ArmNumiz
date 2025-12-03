'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { adminAuth } from '@/lib/adminAuth';

export default function AdminDashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const router = useRouter();

    useEffect(() => {
        if (!adminAuth.isAuthenticated()) {
            router.push('/admin');
        }
    }, [router]);

    if (!adminAuth.isAuthenticated()) {
        return null;
    }

    return <>{children}</>;
}
