'use client';

import { cn } from "@/lib/utils";
import { AppButton } from "@/shared/components/ui/AppButton";
import { Search, LucideIcon } from "lucide-react";

interface EmptyStateProps {
    icon?: LucideIcon;
    title: string;
    description: string;
    actionLabel?: string;
    onAction?: () => void;
    className?: string;
}

export function EmptyState({
    icon: Icon = Search,
    title,
    description,
    actionLabel,
    onAction,
    className,
}: EmptyStateProps) {
    return (
        <div
            className={cn(
                "flex flex-col items-center justify-center text-center p-8 md:p-12",
                "card-surface border-dashed bg-slate-50/50",
                className
            )}
        >
            <div className="h-16 w-16 rounded-full bg-white flex items-center justify-center shadow-sm border border-slate-100 mb-6">
                <Icon className="h-8 w-8 text-slate-400" />
            </div>

            <h3 className="text-lg font-semibold text-slate-900 mb-2">{title}</h3>
            <p className="text-sm text-slate-500 max-w-sm mb-8 leading-relaxed">
                {description}
            </p>

            {actionLabel && onAction && (
                <AppButton onClick={onAction} size="sm">
                    {actionLabel}
                </AppButton>
            )}
        </div>
    );
}
