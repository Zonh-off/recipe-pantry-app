'use client';

import { useAuth } from '@/providers/auth-provider';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

/**
 * AuthLayout – centered container for login and registration pages.
 * No sidebar or app navigation.
 */
export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const { user, isLoading } = useAuth();
    const router = useRouter();

    useEffect(() => {
        // If already logged in, redirect to pantry
        if (!isLoading && user) {
            router.push('/pantry');
        }
    }, [user, isLoading, router]);

    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-50">
                <div className="h-12 w-12 border-4 border-green-600 border-t-transparent rounded-full animate-spin" />
            </div>
        );
    }

    if (user) return null;

    return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
            <div className="w-full max-w-md">
                {children}
            </div>
        </div>
    );
}
