/**
 * Chip – a compact, pill-shaped tag used for:
 *   - dietary preferences (vegan, gluten-free…)
 *   - cuisine types
 *   - ingredient tags
 *   - category filters
 *   - metadata (calories, time, servings)
 *
 * Per VISUAL_DIRECTION §6.4: compact, softly tinted, easily scannable.
 *
 * Usage:
 *   <Chip>Vegan</Chip>
 *   <Chip color="amber" icon={<Clock className="h-3 w-3" />}>25 min</Chip>
 *   <Chip color="sky" onRemove={() => remove(id)}>Pasta</Chip>
 *   <Chip color="green" selected>Italian</Chip>
 */

'use client';

import { cn } from '@/lib/utils';
import { X } from 'lucide-react';
import type { ReactNode, MouseEvent } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const chipVariants = cva(
    [
        'inline-flex items-center gap-1 rounded-full px-3 py-1',
        'text-xs font-medium leading-none select-none',
        'transition-colors duration-150',
    ].join(' '),
    {
        variants: {
            color: {
                green: 'bg-green-100 text-green-700',
                amber: 'bg-amber-100 text-amber-700',
                sky: 'bg-sky-100 text-sky-700',
                rose: 'bg-rose-100 text-rose-600',
                violet: 'bg-violet-100 text-violet-700',
                slate: 'bg-slate-100 text-slate-600',
                orange: 'bg-orange-100 text-orange-700',
            },
            interactive: {
                true: 'cursor-pointer hover:brightness-95',
                false: '',
            },
            selected: {
                true: '',
                false: '',
            },
        },
        compoundVariants: [
            // Selected state overrides — solid fill of same hue
            { color: 'green', selected: true, className: 'bg-green-600  text-white' },
            { color: 'amber', selected: true, className: 'bg-amber-500  text-white' },
            { color: 'sky', selected: true, className: 'bg-sky-500    text-white' },
            { color: 'rose', selected: true, className: 'bg-rose-500   text-white' },
            { color: 'violet', selected: true, className: 'bg-violet-500 text-white' },
            { color: 'slate', selected: true, className: 'bg-slate-600  text-white' },
            { color: 'orange', selected: true, className: 'bg-orange-500 text-white' },
        ],
        defaultVariants: {
            color: 'slate',
            interactive: false,
            selected: false,
        },
    }
);

type ChipColor = NonNullable<VariantProps<typeof chipVariants>['color']>;

interface ChipProps extends VariantProps<typeof chipVariants> {
    children: ReactNode;
    className?: string;
    /** Leading icon (e.g. Clock, Flame) */
    icon?: ReactNode;
    /** Callback when the × remove button is clicked */
    onRemove?: (e: MouseEvent<HTMLButtonElement>) => void;
    /** Click handler — makes the chip interactive */
    onClick?: (e: MouseEvent<HTMLSpanElement>) => void;
    /** Accessible label for remove button */
    removeLabel?: string;
}

export function Chip({
    children,
    className,
    color = 'slate',
    selected = false,
    interactive,
    icon,
    onRemove,
    onClick,
    removeLabel = 'Remove',
}: ChipProps) {
    const isInteractive = interactive ?? (!!onClick || !!onRemove);

    return (
        <span
            role={onClick ? 'button' : undefined}
            tabIndex={onClick ? 0 : undefined}
            onClick={onClick}
            onKeyDown={
                onClick
                    ? (e) => { if (e.key === 'Enter' || e.key === ' ') onClick(e as unknown as MouseEvent<HTMLSpanElement>); }
                    : undefined
            }
            className={cn(
                chipVariants({ color: color as ChipColor, selected: !!selected, interactive: isInteractive }),
                className
            )}
        >
            {icon && <span className="shrink-0">{icon}</span>}
            {children}
            {onRemove && (
                <button
                    type="button"
                    aria-label={removeLabel}
                    onClick={(e) => {
                        e.stopPropagation();
                        onRemove(e);
                    }}
                    className="ml-0.5 -mr-0.5 shrink-0 rounded-full p-0.5 hover:bg-black/10 transition-colors"
                >
                    <X className="h-3 w-3" aria-hidden />
                </button>
            )}
        </span>
    );
}

export type { ChipColor };
