/**
 * AppCard – the app's primary card component.
 *
 * Wraps shadcn's Card family and enforces the VISUAL_DIRECTION §6.1 look:
 * rounded-2xl, border-slate-200, bg-white, shadow-sm, hover:shadow-md.
 *
 * Re-exports individual slot components for flexible composition:
 *
 *   <AppCard>
 *     <AppCardHeader>
 *       <AppCardTitle>Pasta Carbonara</AppCardTitle>
 *       <AppCardDescription>A classic Italian dish</AppCardDescription>
 *     </AppCardHeader>
 *     <AppCardContent>…</AppCardContent>
 *     <AppCardFooter>…</AppCardFooter>
 *   </AppCard>
 *
 * Variants:
 *   default  — white card, subtle border + shadow
 *   flat     — no shadow, just border
 *   elevated — stronger shadow, for hero/featured cards
 *   ghost    — transparent, no border/shadow (e.g. skeleton containers)
 */

import { cn } from '@/lib/utils';
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter,
    CardAction,
} from '@/components/ui/card';
import type { ComponentProps } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

/* ── Variant definitions ──────────────────────────────────────── */
const cardVariants = cva(
    'bg-white text-slate-900 rounded-2xl transition-shadow duration-200 overflow-hidden',
    {
        variants: {
            variant: {
                default:
                    'border border-slate-200 shadow-sm hover:shadow-md',
                flat:
                    'border border-slate-200 shadow-none',
                elevated:
                    'border border-slate-200 shadow-md hover:shadow-lg',
                ghost:
                    'border-0 shadow-none bg-transparent',
            },
        },
        defaultVariants: {
            variant: 'default',
        },
    }
);

/* ── AppCard ──────────────────────────────────────────────────── */
type AppCardProps = ComponentProps<typeof Card> &
    VariantProps<typeof cardVariants>;

export function AppCard({ className, variant, ...props }: AppCardProps) {
    return (
        <Card
            data-slot="app-card"
            className={cn(cardVariants({ variant }), className)}
            {...props}
        />
    );
}

/* ── Slot re-exports styled for the app ─────────────────────────
   These thin wrappers exist so feature devs import from
   @/shared/components/ui, not from @/components/ui directly.      */

export function AppCardHeader({ className, ...props }: ComponentProps<typeof CardHeader>) {
    return (
        <CardHeader
            className={cn('px-5 pt-5 pb-0', className)}
            {...props}
        />
    );
}

export function AppCardTitle({ className, ...props }: ComponentProps<typeof CardTitle>) {
    return (
        <CardTitle
            className={cn('text-base font-semibold text-slate-900 leading-snug', className)}
            {...props}
        />
    );
}

export function AppCardDescription({ className, ...props }: ComponentProps<typeof CardDescription>) {
    return (
        <CardDescription
            className={cn('text-sm text-slate-500', className)}
            {...props}
        />
    );
}

export function AppCardContent({ className, ...props }: ComponentProps<typeof CardContent>) {
    return (
        <CardContent
            className={cn('px-5 py-4', className)}
            {...props}
        />
    );
}

export function AppCardFooter({ className, ...props }: ComponentProps<typeof CardFooter>) {
    return (
        <CardFooter
            className={cn('px-5 py-4 border-t border-slate-100 bg-slate-50/50', className)}
            {...props}
        />
    );
}

export function AppCardAction({ className, ...props }: ComponentProps<typeof CardAction>) {
    return <CardAction className={cn(className)} {...props} />;
}
