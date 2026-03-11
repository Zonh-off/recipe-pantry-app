"use client";

import { useState } from "react";
import {
    AppCard,
    AppCardContent,
    AppCardHeader,
    AppCardTitle,
    AppButton,
    Chip
} from "@/shared/components/ui";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import {
    Clock,
    Flame,
    Leaf,
    Globe2,
    RotateCcw,
    Check
} from "lucide-react";
import { cn } from "@/lib/utils";

const DIETS = ["Vegetarian", "Vegan", "Gluten Free", "Ketogenic", "Paleo", "Low Carb"];
const CUISINES = ["Italian", "Mexican", "Asian", "Mediterranean", "American", "French", "Indian"];

interface FilterState {
    diets: string[];
    cuisines: string[];
    maxTime: number;
    maxCalories: number;
}

interface RecipeFiltersProps {
    onFilterChange: (filters: FilterState) => void;
    className?: string;
}

export function RecipeFilters({ onFilterChange, className }: RecipeFiltersProps) {
    const [filters, setFilters] = useState<FilterState>({
        diets: [],
        cuisines: [],
        maxTime: 60,
        maxCalories: 1000,
    });

    const updateFilters = (newFilters: Partial<FilterState>) => {
        const updated = { ...filters, ...newFilters };
        setFilters(updated);
        onFilterChange(updated);
    };

    const toggleItem = (list: string[], item: string) => {
        return list.includes(item)
            ? list.filter(i => i !== item)
            : [...list, item];
    };

    const resetFilters = () => {
        const initial = {
            diets: [],
            cuisines: [],
            maxTime: 60,
            maxCalories: 1000,
        };
        setFilters(initial);
        onFilterChange(initial);
    };

    return (
        <div className={cn("space-y-6", className)}>
            <AppCard variant="flat" className="rounded-2xl border-slate-200">
                <AppCardHeader className="flex flex-row items-center justify-between border-b border-slate-100 py-4">
                    <AppCardTitle className="text-sm font-bold uppercase tracking-wider text-slate-500">
                        Filters
                    </AppCardTitle>
                    <button
                        onClick={resetFilters}
                        className="text-xs font-semibold text-green-600 hover:text-green-700 flex items-center gap-1 transition-colors"
                    >
                        <RotateCcw className="h-3 w-3" />
                        Reset
                    </button>
                </AppCardHeader>

                <AppCardContent className="space-y-8 pt-6">
                    {/* Diets */}
                    <div className="space-y-3">
                        <div className="flex items-center gap-2 text-sm font-semibold text-slate-800">
                            <Leaf className="h-4 w-4 text-green-600" />
                            Dietary Preferences
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {DIETS.map((diet) => (
                                <Chip
                                    key={diet}
                                    color="green"
                                    selected={filters.diets.includes(diet)}
                                    onClick={() => updateFilters({ diets: toggleItem(filters.diets, diet) })}
                                    interactive
                                >
                                    {diet}
                                </Chip>
                            ))}
                        </div>
                    </div>

                    {/* Cuisines */}
                    <div className="space-y-3">
                        <div className="flex items-center gap-2 text-sm font-semibold text-slate-800">
                            <Globe2 className="h-4 w-4 text-blue-600" />
                            Cuisine
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {CUISINES.map((cuisine) => (
                                <Chip
                                    key={cuisine}
                                    color="sky"
                                    selected={filters.cuisines.includes(cuisine)}
                                    onClick={() => updateFilters({ cuisines: toggleItem(filters.cuisines, cuisine) })}
                                    interactive
                                >
                                    {cuisine}
                                </Chip>
                            ))}
                        </div>
                    </div>

                    {/* Max Cooking Time */}
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2 text-sm font-semibold text-slate-800">
                                <Clock className="h-4 w-4 text-amber-600" />
                                Max Ready Time
                            </div>
                            <span className="text-xs font-bold text-slate-500 bg-slate-100 px-2 py-1 rounded-md">
                                {filters.maxTime === 120 ? "2h+" : `${filters.maxTime} min`}
                            </span>
                        </div>
                        <Slider
                            value={[filters.maxTime]}
                            min={5}
                            max={120}
                            step={5}
                            onValueChange={(val) => {
                                const newValue = Array.isArray(val) ? val[0] : val;
                                updateFilters({ maxTime: newValue });
                            }}
                            className="py-1 bg-slate-100 rounded-full"
                        />
                        <div className="flex justify-between text-[10px] font-bold text-slate-400 uppercase tracking-tighter">
                            <span>5m</span>
                            <span>120m+</span>
                        </div>
                    </div>

                    {/* Max Calories */}
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2 text-sm font-semibold text-slate-800">
                                <Flame className="h-4 w-4 text-rose-600" />
                                Max Calories
                            </div>
                            <span className="text-xs font-bold text-slate-500 bg-slate-100 px-2 py-1 rounded-md">
                                {filters.maxCalories} kcal
                            </span>
                        </div>
                        <Slider
                            value={[filters.maxCalories]}
                            min={100}
                            max={1500}
                            step={50}
                            onValueChange={(val) => {
                                const newValue = Array.isArray(val) ? val[0] : val;
                                updateFilters({ maxCalories: newValue });
                            }}
                            className="py-1 bg-slate-100 rounded-full"
                        />
                        <div className="flex justify-between text-[10px] font-bold text-slate-400 uppercase tracking-tighter">
                            <span>100</span>
                            <span>1500+</span>
                        </div>
                    </div>
                </AppCardContent>
            </AppCard>

            {/* Quick Toggles */}
            <div className="bg-green-50/50 rounded-2xl p-4 border border-green-100">
                <h4 className="text-xs font-bold text-green-700 uppercase tracking-widest mb-3">Quick Hints</h4>
                <div className="space-y-2">
                    <label className="flex items-center gap-3 cursor-pointer group">
                        <div className="relative flex items-center justify-center h-5 w-5 rounded border border-green-300 bg-white group-hover:border-green-500 transition-colors">
                            <Checkbox id="pantry-only" className="h-5 w-5 border-none shadow-none ring-0 data-[state=checked]:bg-green-600" />
                        </div>
                        <span className="text-sm font-medium text-slate-700 group-hover:text-green-800 transition-colors underline decoration-green-200 underline-offset-4 decoration-2">In my Pantry only</span>
                    </label>
                </div>
            </div>
        </div>
    );
}
