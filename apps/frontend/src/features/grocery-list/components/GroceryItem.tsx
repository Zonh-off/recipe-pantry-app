"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Trash2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { AppButton } from "@/shared/components/ui/AppButton";

export interface GroceryItemType {
    id: string | number;
    name: string;
    amount?: string;
    category?: string;
    checked: boolean;
    recipeName?: string;
}

interface GroceryItemProps {
    item: GroceryItemType;
    onToggle: (id: string | number) => void;
    onRemove: (id: string | number) => void;
    className?: string;
}

export function GroceryItem({
    item,
    onToggle,
    onRemove,
    className,
}: GroceryItemProps) {
    return (
        <div
            className={cn(
                "group flex items-center justify-between p-4 bg-white border border-slate-200 rounded-2xl transition-all",
                item.checked ? "bg-slate-50 border-slate-100" : "hover:border-green-200 shadow-sm",
                className
            )}
        >
            <div className="flex items-center gap-4 flex-1">
                <Checkbox
                    checked={item.checked}
                    onCheckedChange={() => onToggle(item.id)}
                    className="h-5 w-5 rounded-md border-slate-300 data-[state=checked]:bg-green-600 data-[state=checked]:border-green-600"
                />
                <div className="flex-1">
                    <h4
                        className={cn(
                            "font-semibold text-slate-900 capitalize transition-all",
                            item.checked && "text-slate-400 line-through decoration-slate-300"
                        )}
                    >
                        {item.name}
                    </h4>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-0.5">
                        {item.amount && (
                            <span className={cn(
                                "text-xs font-bold px-1.5 py-0.5 rounded bg-slate-100 text-slate-500",
                                item.checked && "opacity-50"
                            )}>
                                {item.amount}
                            </span>
                        )}
                        {item.recipeName && (
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                                For: {item.recipeName}
                            </span>
                        )}
                    </div>
                </div>
            </div>

            <AppButton
                variant="ghost"
                size="icon-xs"
                onClick={() => onRemove(item.id)}
                className="text-slate-300 hover:text-rose-500 opacity-0 group-hover:opacity-100 transition-opacity"
            >
                <Trash2 className="h-4 w-4" />
            </AppButton>
        </div>
    );
}
