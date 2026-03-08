'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
    Home,
    UtensilsCrossed,
    Search,
    BookMarked,
    ShoppingCart,
    User,
    ChefHat,
    LogOut,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useAuth } from '@/providers/auth-provider';

const NAV_ITEMS = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/pantry', label: 'Pantry', icon: UtensilsCrossed },
    { href: '/recipes', label: 'Recipes', icon: Search },
    { href: '/collections', label: 'Collections', icon: BookMarked },
    { href: '/grocery-list', label: 'Grocery List', icon: ShoppingCart },
    { href: '/profile', label: 'Profile', icon: User },
] as const;

export default function Sidebar() {
    const pathname = usePathname();
    const { user, logout } = useAuth();

    return (
        <aside
            className={cn(
                'hidden lg:flex flex-col',
                'fixed left-0 top-0 h-full w-64',
                'bg-white border-r border-slate-200',
                'z-40'
            )}
        >
            {/* Logo */}
            <div className="flex items-center gap-3 px-6 py-5 border-b border-slate-200">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-green-600 shadow-sm">
                    <ChefHat className="h-5 w-5 text-white" />
                </div>
                <span className="text-lg font-bold text-slate-900 tracking-tight">
                    Recipe<span className="text-green-600">Pantry</span>
                </span>
            </div>

            {/* Navigation links */}
            <nav className="flex flex-col gap-1 px-3 py-4 flex-1">
                {NAV_ITEMS.map(({ href, label, icon: Icon }) => {
                    const isActive =
                        href === '/' ? pathname === '/' : pathname.startsWith(href);

                    return (
                        <Link
                            key={href}
                            href={href}
                            className={cn(
                                'group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium',
                                'min-h-[44px] transition-colors duration-150',
                                isActive
                                    ? 'bg-green-50 text-green-700'
                                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                            )}
                        >
                            <span
                                className={cn(
                                    'absolute left-0 h-6 w-1 rounded-r-full bg-green-600 transition-opacity duration-150',
                                    isActive ? 'opacity-100' : 'opacity-0'
                                )}
                            />
                            <Icon
                                className={cn(
                                    'h-5 w-5 shrink-0 transition-colors duration-150',
                                    isActive ? 'text-green-600' : 'text-slate-400 group-hover:text-slate-600'
                                )}
                            />
                            {label}
                        </Link>
                    );
                })}
            </nav>

            {/* User Profile & Logout */}
            <div className="p-4 border-t border-slate-200 space-y-3">
                {user ? (
                    <div className="flex flex-col gap-3">
                        <div className="flex items-center gap-3 px-2">
                            <div className="h-8 w-8 rounded-full bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-600 uppercase">
                                {user.name.charAt(0)}
                            </div>
                            <div className="flex flex-col overflow-hidden">
                                <span className="text-sm font-bold text-slate-900 truncate">{user.name}</span>
                                <span className="text-xs text-slate-500 truncate">{user.email}</span>
                            </div>
                        </div>
                        <button
                            onClick={() => logout()}
                            className="flex items-center gap-3 w-full rounded-xl px-3 py-2 text-sm font-medium text-rose-600 hover:bg-rose-50 transition-colors"
                        >
                            <LogOut className="h-4 w-4" />
                            Sign Out
                        </button>
                    </div>
                ) : (
                    <Link
                        href="/login"
                        className="flex items-center gap-3 w-full rounded-xl px-3 py-2 text-sm font-bold text-green-600 hover:bg-green-50 transition-colors"
                    >
                        <User className="h-4 w-4" />
                        Sign In
                    </Link>
                )}

                <p className="text-[10px] text-slate-400 font-medium tracking-widest uppercase text-center pt-2">
                    © {new Date().getFullYear()} RecipePantry
                </p>
            </div>
        </aside>
    );
}
