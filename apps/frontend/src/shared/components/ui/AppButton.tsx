/**
 * AppButton – the app's primary button component.
 *
 * Wraps shadcn's Button and applies the green-600 / white palette defined in
 * VISUAL_DIRECTION §6.2. Adds app-specific variants while keeping full access
 * to the underlying shadcn API.
 *
 * Usage:
 *   <AppButton>Save</AppButton>
 *   <AppButton variant="secondary">Cancel</AppButton>
 *   <AppButton variant="ghost" size="sm">Edit</AppButton>
 *   <AppButton variant="destructive" loading>Deleting…</AppButton>
 */

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';
import type { ComponentProps } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const appButtonVariants = cva(
    // Base: enforce 44 px min-height (VISUAL_DIRECTION §11.1 touch targets)
    [
        'relative inline-flex items-center justify-center gap-2',
        'min-h-[44px] px-5 font-semibold rounded-xl text-sm',
        'transition-colors duration-150 cursor-pointer',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
    ].join(' '),
    {
        variants: {
            variant: {
                /** Green-600 fill — primary CTA */
                primary:
                    'bg-green-600 text-white hover:bg-green-700 active:bg-green-800',
                /** White + slate border — secondary action */
                secondary:
                    'bg-white border border-slate-300 text-slate-800 hover:bg-slate-50 active:bg-slate-100',
                /** Outline-only — tertiary action */
                outline:
                    'border border-slate-300 bg-transparent text-slate-700 hover:bg-slate-50',
                /** No background — low-priority inline action */
                ghost:
                    'bg-transparent text-slate-600 hover:bg-slate-100 hover:text-slate-900',
                /** Danger — delete / destructive actions */
                destructive:
                    'bg-rose-50 border border-rose-200 text-rose-600 hover:bg-rose-100',
            },
            size: {
                sm: 'h-9 min-h-[36px] px-3 text-xs',
                md: 'h-11 min-h-[44px] px-5 text-sm',
                lg: 'h-12 min-h-[48px] px-6 text-base',
                icon: 'h-11 w-11 min-h-[44px] p-0',
                'icon-sm': 'h-9 w-9 min-h-[36px] p-0',
                'icon-xs': 'h-7 w-7 min-h-[28px] p-0',
            },
        },
        defaultVariants: {
            variant: 'primary',
            size: 'md',
        },
    }
);

type AppButtonProps = Omit<ComponentProps<typeof Button>, 'variant' | 'size'> &
    VariantProps<typeof appButtonVariants> & {
        loading?: boolean;
    };

export function AppButton({
    className,
    variant = 'primary',
    size = 'md',
    loading = false,
    disabled,
    children,
    ...props
}: AppButtonProps) {
    return (
        <Button
            data-slot="app-button"
            disabled={disabled || loading}
            className={cn(appButtonVariants({ variant, size }), className)}
            {...props}
        >
            {loading && (
                <Loader2 className="h-4 w-4 animate-spin shrink-0" aria-hidden />
            )}
            {children}
        </Button>
    );
}

export { appButtonVariants };
