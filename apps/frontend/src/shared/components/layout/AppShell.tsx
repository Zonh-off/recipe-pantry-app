'use client';

import Sidebar from './Sidebar';
import BottomNav from './BottomNav';
import { cn } from '@/lib/utils';

/**
 * AppShell – the visual layout wrapper that provides Sidebar and BottomNav.
 * This is a pure UI component. Redirection and protection are handled by 
 * Next.js layouts in (app) and (auth) route groups.
 */
export default function AppShell({
    children,
    showNav = true,
}: {
    children: React.ReactNode;
    showNav?: boolean;
}) {
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
                <div className="mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8 max-w-7xl">
                    {children}
                </div>
            </main>
        </div>
    );
}
