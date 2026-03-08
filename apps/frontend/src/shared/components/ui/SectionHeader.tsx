/**
 * SectionHeader – a consistent heading block used above content sections.
 *
 * Provides:
 *   - A strong section title (semibold slate-900)
 *   - Optional muted subtitle
 *   - Optional right-aligned action slot (e.g. "See all" link, button)
 *
 * Per VISUAL_DIRECTION §8: strong visual hierarchy, medium/semibold section
 * headers, clear separation from content below.
 *
 * Usage:
 *   <SectionHeader title="Popular Recipes" />
 *
 *   <SectionHeader
 *     title="Your Pantry"
 *     subtitle="12 items available"
 *     action={<Link href="/pantry">See all →</Link>}
 *   />
 */

import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

interface SectionHeaderProps {
    /** Primary section title */
    title: string;
    /** Optional supporting subtitle / count */
    subtitle?: string;
    /** Right-aligned element (link, button, badge) */
    action?: ReactNode;
    /** Extra className for the wrapper */
    className?: string;
    /** HTML heading level — controls semantic meaning, not visual size */
    as?: 'h2' | 'h3' | 'h4';
}

export function SectionHeader({
    title,
    subtitle,
    action,
    className,
    as: Heading = 'h2',
}: SectionHeaderProps) {
    return (
        <div
            className={cn(
                'flex items-start justify-between gap-4 mb-4',
                className
            )}
        >
            <div className="min-w-0">
                <Heading className="text-lg font-semibold text-slate-900 leading-snug truncate">
                    {title}
                </Heading>
                {subtitle && (
                    <p className="mt-0.5 text-sm text-slate-500 truncate">{subtitle}</p>
                )}
            </div>

            {action && (
                <div className="shrink-0 self-center">{action}</div>
            )}
        </div>
    );
}
