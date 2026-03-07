"use client";

import { Search, SlidersHorizontal, Sparkles } from "lucide-react";
import { AppInput, AppButton } from "@/shared/components/ui";

interface PantryToolbarProps {
    searchValue: string;
    onSearchChange: (value: string) => void;
    onFindRecipes: () => void;
    className?: string;
}

export function PantryToolbar({
    searchValue,
    onSearchChange,
    onFindRecipes,
    className,
}: PantryToolbarProps) {
    return (
        <div className={className}>
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-white p-4 rounded-3xl border border-slate-200 shadow-sm">
                <div className="relative w-full md:max-w-md">
                    <AppInput
                        placeholder="Search your pantry..."
                        value={searchValue}
                        onChange={(e) => onSearchChange(e.target.value)}
                        icon={<Search className="h-4 w-4 text-slate-400" />}
                        className="bg-slate-50 border-none shadow-none focus-visible:ring-offset-0"
                    />
                </div>

                <div className="flex items-center gap-2 w-full md:w-auto">
                    <AppButton variant="outline" size="sm" className="hidden md:flex">
                        <SlidersHorizontal className="h-4 w-4 mr-2" />
                        Filters
                    </AppButton>

                    <AppButton
                        variant="primary"
                        size="md"
                        onClick={onFindRecipes}
                        className="flex-1 md:flex-none shadow-lg shadow-green-600/20"
                    >
                        <Sparkles className="h-4 w-4 mr-2" />
                        Find Recipes
                    </AppButton>
                </div>
            </div>
        </div>
    );
}
