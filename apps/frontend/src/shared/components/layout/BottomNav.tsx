'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, UtensilsCrossed, Search, BookMarked, User } from 'lucide-react';
import { cn } from '@/lib/utils';

/**
 * Bottom Navigation items for mobile.
 * Per architecture doc §16.2: exactly these 5 items on mobile.
 * Grocery List is omitted from the bottom bar (accessible via Collections or profile).
 */
const BOTTOM_NAV_ITEMS = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/pantry', label: 'Pantry', icon: UtensilsCrossed },
    { href: '/recipes', label: 'Search', icon: Search },
    { href: '/collections', label: 'Collections', icon: BookMarked },
    { href: '/profile', label: 'Profile', icon: User },
] as const;

/**
 * BottomNav – mobile fixed bottom navigation bar (hidden on lg+).
 * Per VISUAL_DIRECTION §5.5 and FRONTEND_RULES §16.2.
 */
export default function BottomNav() {
    const pathname = usePathname();

    return (
        <nav
            className={cn(
                'lg:hidden fixed bottom-0 left-0 right-0 z-40',
                'flex items-center justify-around',
                'h-16 bg-white border-t border-slate-200',
                'safe-area-inset-bottom'
            )}
            aria-label="Mobile navigation"
        >
            {BOTTOM_NAV_ITEMS.map(({ href, label, icon: Icon }) => {
                const isActive =
                    href === '/' ? pathname === '/' : pathname.startsWith(href);

                return (
                    <Link
                        key={href}
                        href={href}
                        className={cn(
                            'flex flex-col items-center justify-center gap-1',
                            'min-h-[44px] min-w-[44px] flex-1 py-2',
                            'transition-colors duration-150',
                            isActive ? 'text-green-600' : 'text-slate-400 hover:text-slate-600'
                        )}
                        aria-current={isActive ? 'page' : undefined}
                    >
                        <Icon className="h-5 w-5 shrink-0" />
                        <span
                            className={cn(
                                'text-[10px] font-medium leading-none',
                                isActive ? 'text-green-600' : 'text-slate-400'
                            )}
                        >
                            {label}
                        </span>
                    </Link>
                );
            })}
        </nav>
    );
}
