"use client";

import { GroceryItem, GroceryItemType } from "./GroceryItem";
import { SectionHeader } from "@/shared/components/ui";

interface GroceryListProps {
    items: GroceryItemType[];
    onToggle: (id: string | number) => void;
    onRemove: (id: string | number) => void;
    groupBy?: "category" | "recipe" | "none";
}

export function GroceryList({
    items,
    onToggle,
    onRemove,
    groupBy = "none",
}: GroceryListProps) {
    if (items.length === 0) return null;

    if (groupBy === "none") {
        return (
            <div className="space-y-3">
                {items.map((item) => (
                    <GroceryItem
                        key={item.id}
                        item={item}
                        onToggle={onToggle}
                        onRemove={onRemove}
                    />
                ))}
            </div>
        );
    }

    const groupKey = groupBy === "category" ? "category" : "recipeName";
    const groups = items.reduce((acc, item) => {
        const key = item[groupKey] || "Other";
        if (!acc[key]) acc[key] = [];
        acc[key].push(item);
        return acc;
    }, {} as Record<string, GroceryItemType[]>);

    return (
        <div className="space-y-10">
            {Object.entries(groups).map(([title, groupItems]) => (
                <div key={title} className="space-y-4">
                    <SectionHeader
                        title={title}
                        className="mb-2"
                    />
                    <div className="space-y-3">
                        {groupItems.map((item) => (
                            <GroceryItem
                                key={item.id}
                                item={item}
                                onToggle={onToggle}
                                onRemove={onRemove}
                            />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
