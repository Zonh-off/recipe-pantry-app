'use client';

import AppShell from '@/shared/components/layout/AppShell';
import { useAuth } from '@/providers/auth-provider';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

/**
 * AppLayout – the protected layout for application pages.
 * Redirects to login if user is not authenticated.
 */
export default function AppLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const { user, isLoading } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!isLoading && !user) {
            router.push('/login');
        }
    }, [user, isLoading, router]);

    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-50">
                <div className="flex flex-col items-center gap-4">
                    <div className="h-12 w-12 border-4 border-green-600 border-t-transparent rounded-full animate-spin" />
                    <p className="text-slate-500 font-bold animate-pulse">Initializing your kitchen...</p>
                </div>
            </div>
        );
    }

    if (!user) return null;

    return <AppShell>{children}</AppShell>;
}
