/**
 * AppInput – the app's primary input component.
 *
 * Wraps shadcn's Input and applies the design system rules from
 * VISUAL_DIRECTION §6.3: white background, subtle border, green focus ring,
 * comfortable padding, support for leading/trailing icons.
 *
 * Usage:
 *   <AppInput placeholder="Search recipes…" />
 *   <AppInput
 *     label="Ingredient name"
 *     error="This field is required"
 *     icon={<Search className="h-4 w-4" />}
 *   />
 */

import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import type { ComponentProps } from 'react';
import type { ReactNode } from 'react';

type AppInputProps = ComponentProps<'input'> & {
    /** Accessible label rendered above the input */
    label?: string;
    /** Error message rendered below the input (red) */
    error?: string;
    /** Helper / hint text rendered below the input (muted) */
    hint?: string;
    /** Icon placed on the left inside the input */
    icon?: ReactNode;
    /** Icon or button placed on the right inside the input */
    trailingElement?: ReactNode;
};

export function AppInput({
    className,
    label,
    error,
    hint,
    icon,
    trailingElement,
    id,
    ...props
}: AppInputProps) {
    const inputId = id ?? (label ? label.toLowerCase().replaceAll(' ', '-') : undefined);

    return (
        <div className="flex flex-col gap-1.5 w-full">
            {label && (
                <label
                    htmlFor={inputId}
                    className="text-sm font-medium text-slate-700"
                >
                    {label}
                </label>
            )}

            <div className="relative flex items-center">
                {icon && (
                    <span className="pointer-events-none absolute left-3 text-slate-400">
                        {icon}
                    </span>
                )}

                <Input
                    id={inputId}
                    data-slot="app-input"
                    aria-invalid={!!error}
                    aria-describedby={
                        error ? `${inputId}-error` : hint ? `${inputId}-hint` : undefined
                    }
                    className={cn(
                        // Height matching 44px touch target
                        'h-11 min-h-[44px]',
                        // White background, slate borders
                        'bg-white border-slate-300 text-slate-900',
                        'placeholder:text-slate-400',
                        // Green focus ring
                        'focus-visible:border-green-500 focus-visible:ring-2 focus-visible:ring-green-500/20',
                        // Icon adjustments
                        icon ? 'pl-9' : '',
                        trailingElement ? 'pr-9' : '',
                        // Error state
                        error
                            ? 'border-rose-400 focus-visible:border-rose-400 focus-visible:ring-rose-400/20'
                            : '',
                        className
                    )}
                    {...props}
                />

                {trailingElement && (
                    <span className="absolute right-3 text-slate-400">
                        {trailingElement}
                    </span>
                )}
            </div>

            {error && (
                <p id={`${inputId}-error`} className="text-xs text-rose-500 font-medium">
                    {error}
                </p>
            )}
            {hint && !error && (
                <p id={`${inputId}-hint`} className="text-xs text-slate-500">
                    {hint}
                </p>
            )}
        </div>
    );
}
