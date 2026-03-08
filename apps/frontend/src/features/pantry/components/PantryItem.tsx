"use client";

import { Trash2, Edit2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { AppButton } from "@/shared/components/ui/AppButton";

interface PantryItemProps {
    id: string | number;
    name: string;
    amount?: string;
    category?: string;
    className?: string;
    onRemove?: (id: string | number) => void;
    onEdit?: (id: string | number) => void;
}

export function PantryItem({
    id,
    name,
    amount,
    category,
    className,
    onRemove,
    onEdit,
}: PantryItemProps) {
    return (
        <div
            className={cn(
                "group flex items-center justify-between p-4 bg-white border border-slate-200 rounded-2xl shadow-sm hover:border-green-200 transition-all",
                className
            )}
        >
            <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-xl bg-slate-50 flex items-center justify-center text-xl">
                    {/* Placeholder for ingredient icon or emoji */}
                    🍎
                </div>
                <div>
                    <h4 className="font-semibold text-slate-900 capitalize">{name}</h4>
                    {amount && (
                        <p className="text-xs text-slate-500 font-medium">{amount}</p>
                    )}
                    {category && (
                        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-0.5">
                            {category}
                        </p>
                    )}
                </div>
            </div>

            <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                {onEdit && (
                    <AppButton
                        variant="ghost"
                        size="icon-sm"
                        onClick={() => onEdit(id)}
                        className="text-slate-400 hover:text-green-600"
                    >
                        <Edit2 className="h-4 w-4" />
                    </AppButton>
                )}
                {onRemove && (
                    <AppButton
                        variant="ghost"
                        size="icon-sm"
                        onClick={() => onRemove(id)}
                        className="text-slate-400 hover:text-rose-500"
                    >
                        <Trash2 className="h-4 w-4" />
                    </AppButton>
                )}
            </div>
        </div>
    );
}
