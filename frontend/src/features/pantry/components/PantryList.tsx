"use client";

import { PantryItem } from "./PantryItem";
import { SectionHeader } from "@/shared/components/ui";

interface Ingredient {
    id: string | number;
    name: string;
    amount?: string;
    category?: string;
}

interface PantryListProps {
    ingredients: Ingredient[];
    title?: string;
    onRemove?: (id: string | number) => void;
    onEdit?: (id: string | number) => void;
}

export function PantryList({
    ingredients,
    title,
    onRemove,
    onEdit,
}: PantryListProps) {
    // Optional: Group by category
    const groups = ingredients.reduce((acc, item) => {
        const cat = item.category || "Other";
        if (!acc[cat]) acc[cat] = [];
        acc[cat].push(item);
        return acc;
    }, {} as Record<string, Ingredient[]>);

    return (
        <div className="space-y-8">
            {Object.entries(groups).map(([category, items]) => (
                <div key={category} className="space-y-4">
                    <SectionHeader title={category} className="mb-2" />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {items.map((item) => (
                            <PantryItem
                                key={item.id}
                                {...item}
                                onRemove={onRemove}
                                onEdit={onEdit}
                            />
                        ))}
                    </div>
                </div>
            ))}

            {ingredients.length === 0 && (
                <div className="py-12 text-center text-slate-400">
                    No ingredients in this category.
                </div>
            )}
        </div>
    );
}
