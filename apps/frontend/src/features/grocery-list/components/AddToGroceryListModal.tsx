"use client";

import { useState } from "react";
import {
    Modal,
    AppButton,
    AppBadge
} from "@/shared/components/ui";
import { ShoppingCart, Check, Loader2, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useBulkAddGroceryItems } from "@/features/grocery-list/api/grocery";

interface Ingredient {
    name: string;
    amount?: string | number;
    unit?: string;
    status?: "available" | "missing" | "neutral";
}

interface AddToGroceryListModalProps {
    recipeTitle: string;
    ingredients: Ingredient[];
    trigger?: React.ReactElement;
    onAdded?: () => void;
}

export function AddToGroceryListModal({
    recipeTitle,
    ingredients,
    trigger,
    onAdded
}: AddToGroceryListModalProps) {
    const [open, setOpen] = useState(false);
    const [selectedIngredients, setSelectedIngredients] = useState<Ingredient[]>(
        ingredients.filter(i => i.status !== "available")
    );

    const { mutateAsync: bulkAdd, isPending } = useBulkAddGroceryItems();

    const toggleIngredient = (ingredient: Ingredient) => {
        if (selectedIngredients.some(i => i.name === ingredient.name)) {
            setSelectedIngredients(selectedIngredients.filter(i => i.name !== ingredient.name));
        } else {
            setSelectedIngredients([...selectedIngredients, ingredient]);
        }
    };

    const handleConfirm = async () => {
        if (selectedIngredients.length === 0) return;

        try {
            const itemsToAdd = selectedIngredients.map(i => {
                // Parse amount if it's a string, or just pass it if it's a number
                let amount: number | undefined = undefined;
                if (typeof i.amount === 'number') {
                    amount = i.amount;
                } else if (typeof i.amount === 'string') {
                    const match = i.amount.match(/(\d+(\.\d+)?)/);
                    if (match) amount = parseFloat(match[1]);
                }

                return {
                    name: i.name,
                    amount,
                    unit: i.unit
                };
            });

            await bulkAdd(itemsToAdd);
            setOpen(false);
            if (onAdded) onAdded();
        } catch (error) {
            console.error("Failed to add to grocery list", error);
        }
    };

    return (
        <Modal
            open={open}
            onOpenChange={setOpen}
            title="Add to Grocery List"
            description={`Select ingredients from "${recipeTitle}" to add to your grocery list.`}
            trigger={trigger || (
                <AppButton variant="secondary" size="sm">
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Add Items
                </AppButton>
            )}
            confirmLabel={isPending ? "Adding..." : `Add ${selectedIngredients.length} Items`}
            onConfirm={handleConfirm}
            confirmDisabled={isPending || selectedIngredients.length === 0}
            size="lg"
        >
            <div className="space-y-4 max-h-[450px] overflow-y-auto pr-2 custom-scrollbar py-2">
                <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                        Recipe Ingredients
                    </span>
                    <AppButton
                        variant="ghost"
                        size="sm"
                        onClick={() => setSelectedIngredients(selectedIngredients.length === ingredients.length ? [] : [...ingredients])}
                        className="text-green-600 font-bold"
                    >
                        {selectedIngredients.length === ingredients.length ? "Deselect All" : "Select All"}
                    </AppButton>
                </div>

                <div className="grid gap-2">
                    {ingredients.map((ingredient, idx) => {
                        const isSelected = selectedIngredients.some(i => i.name === ingredient.name);
                        const isAvailable = ingredient.status === "available";

                        return (
                            <button
                                key={idx}
                                onClick={() => toggleIngredient(ingredient)}
                                disabled={isPending}
                                className={cn(
                                    "w-full flex items-center justify-between p-3 rounded-2xl border transition-all text-left group",
                                    isSelected
                                        ? "bg-green-50 border-green-200"
                                        : "bg-white border-slate-100 hover:border-slate-200",
                                    isPending && "opacity-50 cursor-not-allowed"
                                )}
                            >
                                <div className="flex items-center gap-3">
                                    <div className={cn(
                                        "h-6 w-6 rounded-full border flex items-center justify-center transition-colors",
                                        isSelected
                                            ? "bg-green-600 border-green-600 text-white"
                                            : "border-slate-200 bg-white"
                                    )}>
                                        {isSelected && <Check className="h-3 w-3" />}
                                    </div>
                                    <div className="flex flex-col">
                                        <span className={cn(
                                            "text-sm font-bold",
                                            isSelected ? "text-green-900" : "text-slate-900",
                                            isAvailable && !isSelected && "text-slate-400"
                                        )}>
                                            {ingredient.name}
                                        </span>
                                        <span className="text-xs text-slate-500">
                                            {ingredient.amount} {ingredient.unit}
                                        </span>
                                    </div>
                                </div>
                                {isAvailable && (
                                    <AppBadge variant="info" className="bg-slate-100 text-[10px] py-0 px-2 border-none">
                                        In Pantry
                                    </AppBadge>
                                )}
                            </button>
                        );
                    })}
                </div>
            </div>
        </Modal>
    );
}
