'use client';

import Sidebar from './Sidebar';
import BottomNav from './BottomNav';
import { cn } from '@/lib/utils';
import { useAuth } from '@/providers/auth-provider';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';

/**
 * AppShell – the top-level layout wrapper that handles layout and route protection.
 */
export default function AppShell({
    children,
}: {
    children: React.ReactNode;
}) {
    const { user, isLoading } = useAuth();
    const pathname = usePathname();
    const router = useRouter();

    const isPublicRoute = ['/login', '/register', '/'].includes(pathname);
    const isAuthPage = ['/login', '/register'].includes(pathname);

    useEffect(() => {
        if (!isLoading) {
            if (!user && !isPublicRoute) {
                router.push('/login');
            } else if (user && isAuthPage) {
                router.push('/pantry');
            }
        }
    }, [user, isLoading, pathname, router, isPublicRoute, isAuthPage]);

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

    if (!user && !isPublicRoute) {
        return null; // Will redirect shortly
    }

    // Hide sidebar/bottomnav on auth pages
    const showNav = !isAuthPage;

    return (
        <div className="min-h-screen bg-slate-50">
            {showNav && <Sidebar />}
            {showNav && <BottomNav />}

            <main
                className={cn(
                    // Push content right of sidebar on desktop if nav is visible
                    showNav ? 'lg:pl-64' : '',
                    // Add bottom padding on mobile if nav is visible
                    showNav ? 'pb-20 lg:pb-0' : '',
                    'min-h-screen transition-all duration-300',
                )}
            >
                <div className={cn(
                    "mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8 transition-all duration-300",
                    isAuthPage ? 'max-w-7xl' : 'max-w-7xl'
                )}>
                    {children}
                </div>
            </main>
        </div>
    );
}
