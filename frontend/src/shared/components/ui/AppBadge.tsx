/**
 * AppBadge – the app's status/count badge component.
 *
 * Built on shadcn's Badge. Provides color-semantic variants aligned with
 * VISUAL_DIRECTION §6.4 (tinted backgrounds, easily scannable).
 *
 * Usage:
 *   <AppBadge>New</AppBadge>
 *   <AppBadge variant="success">Saved</AppBadge>
 *   <AppBadge variant="warning">3 missing</AppBadge>
 *   <AppBadge variant="info" dot>Processing</AppBadge>
 */

import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import type { ComponentProps } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const appBadgeVariants = cva(
    'inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium border-0',
    {
        variants: {
            variant: {
                /** Green — positive / saved / success */
                success: 'bg-green-100 text-green-700',
                /** Amber — warning / partial / caution */
                warning: 'bg-amber-100 text-amber-700',
                /** Rose — error / missing / danger */
                danger: 'bg-rose-100 text-rose-600',
                /** Sky — info / neutral tag */
                info: 'bg-sky-100 text-sky-700',
                /** Violet — category / label */
                violet: 'bg-violet-100 text-violet-700',
                /** Slate — neutral count / muted */
                muted: 'bg-slate-100 text-slate-600',
                /** Solid green — strong CTA highlight */
                primary: 'bg-green-600 text-white',
            },
        },
        defaultVariants: {
            variant: 'muted',
        },
    }
);

type AppBadgeProps = Omit<ComponentProps<typeof Badge>, 'variant'> &
    VariantProps<typeof appBadgeVariants> & {
        /** Renders a small coloured dot before the label */
        dot?: boolean;
    };

const DOT_COLOR: Record<NonNullable<AppBadgeProps['variant']>, string> = {
    success: 'bg-green-500',
    warning: 'bg-amber-500',
    danger: 'bg-rose-500',
    info: 'bg-sky-500',
    violet: 'bg-violet-500',
    muted: 'bg-slate-400',
    primary: 'bg-white',
};

export function AppBadge({
    className,
    variant = 'muted',
    dot,
    children,
    ...props
}: AppBadgeProps) {
    return (
        <Badge
            data-slot="app-badge"
            className={cn(appBadgeVariants({ variant }), className)}
            {...props}
        >
            {dot && (
                <span
                    className={cn(
                        'inline-block h-1.5 w-1.5 shrink-0 rounded-full',
                        DOT_COLOR[variant ?? 'muted']
                    )}
                    aria-hidden
                />
            )}
            {children}
        </Badge>
    );
}

export { appBadgeVariants };
