import Sidebar from './Sidebar';
import BottomNav from './BottomNav';
import { cn } from '@/lib/utils';

/**
 * AppShell – the top-level layout wrapper that composes:
 *   - Sidebar (desktop left nav, lg+)
 *   - BottomNav (mobile fixed bar, < lg)
 *   - Main content area with responsive offset padding
 *
 * This is a Server Component; Sidebar and BottomNav are Client Components
 * that use usePathname() internally.
 */
export default function AppShell({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-background">
            {/* Desktop sidebar */}
            <Sidebar />

            {/* Mobile bottom nav */}
            <BottomNav />

            {/* Main content area */}
            <main
                className={cn(
                    // Push content right of sidebar on desktop
                    'lg:pl-64',
                    // Add bottom padding on mobile so content isn't hidden behind BottomNav
                    'pb-20 lg:pb-0',
                    // Minimum full viewport height
                    'min-h-screen',
                )}
            >
                {/* Responsive content container */}
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
                    {children}
                </div>
            </main>
        </div>
    );
}
