"use client";

import { Search, X } from "lucide-react";
import { AppInput } from "@/shared/components/ui/AppInput";
import { cn } from "@/lib/utils";

interface SearchBarProps {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    className?: string;
}

export function SearchBar({
    value,
    onChange,
    placeholder = "Search for recipes, ingredients, or cuisines...",
    className,
}: SearchBarProps) {
    return (
        <div className={cn("relative flex items-center gap-2 w-full", className)}>
            <div className="relative flex-1">
                <AppInput
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    placeholder={placeholder}
                    icon={<Search className="h-5 w-5 text-slate-400" />}
                    trailingElement={
                        value ? (
                            <button
                                onClick={() => onChange("")}
                                className="hover:text-slate-600 transition-colors bg-slate-100 rounded-full p-0.5"
                            >
                                <X className="h-3 w-3" />
                            </button>
                        ) : null
                    }
                    className="h-12 text-base md:text-sm pl-11 pr-10 shadow-sm border-slate-200 focus-visible:ring-green-600/10"
                />
            </div>
        </div>
    );
}
