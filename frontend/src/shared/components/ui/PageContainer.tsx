/**
 * PageContainer – the standard page-level wrapper.
 *
 * Provides consistent max-width, horizontal padding, and optional page header
 * (title + subtitle + action) that all pages use as their root element.
 *
 * This keeps the AppShell content container generic (just offsets for sidebar/
 * bottom-nav) while PageContainer handles per-page content width + heading.
 *
 * Usage:
 *   // Minimal
 *   <PageContainer title="Pantry">
 *     <PantryContent />
 *   </PageContainer>
 *
 *   // With header action
 *   <PageContainer
 *     title="Collections"
 *     subtitle="Your saved recipe groups"
 *     action={<AppButton size="sm">New Collection</AppButton>}
 *   >
 *     <CollectionsGrid />
 *   </PageContainer>
 */

import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

interface PageContainerProps {
    /** Page-level <h1> title — required for SEO + a11y */
    title: string;
    /** Optional supporting description shown below the title */
    subtitle?: string;
    /** Right-aligned action slot in the page header */
    action?: ReactNode;
    /** Page body content */
    children: ReactNode;
    /** Extra className on the outer wrapper */
    className?: string;
}

export function PageContainer({
    title,
    subtitle,
    action,
    children,
    className,
}: PageContainerProps) {
    return (
        <div className={cn('space-y-6', className)}>
            {/* Page header */}
            <header className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                    <h1 className="text-2xl font-bold text-slate-900 leading-tight">
                        {title}
                    </h1>
                    {subtitle && (
                        <p className="mt-1 text-sm text-slate-500">{subtitle}</p>
                    )}
                </div>

                {action && (
                    <div className="shrink-0 self-start pt-0.5">{action}</div>
                )}
            </header>

            {/* Page body */}
            <div>{children}</div>
        </div>
    );
}
