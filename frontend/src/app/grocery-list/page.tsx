"use client";

import { useState } from "react";
import { PageContainer, SectionHeader, AppButton, AppCard, AppCardContent } from "@/shared/components/ui";
import { GroceryList, AddIngredient, GroceryItemType } from "@/features/grocery-list/components";
import {
    Trash2,
    Share2,
    Printer,
    ShoppingCart,
    LayoutGrid,
    ListFilter,
    CheckCircle2
} from "lucide-react";
import { cn } from "@/lib/utils";

const MOCK_GROCERY_ITEMS: GroceryItemType[] = [
    { id: 1, name: "Roma Tomatoes", amount: "3 items", category: "Vegetables", completed: false, recipeName: "Creamy Avocado Pasta" },
    { id: 2, name: "Fresh Basil", amount: "1/4 cup", category: "Herbs", completed: false, recipeName: "Creamy Avocado Pasta" },
    { id: 3, name: "Cherry Tomatoes", amount: "100g", category: "Vegetables", completed: false, recipeName: "Creamy Avocado Pasta" },
    { id: 4, name: "Spaghetti", amount: "500g", category: "Grains", completed: true, recipeName: "Creamy Avocado Pasta" },
    { id: 5, name: "Milk", amount: "1L", category: "Dairy", completed: false },
    { id: 6, name: "Eggs", amount: "6 pack", category: "Dairy", completed: false },
];

export default function GroceryListPage() {
    const [items, setItems] = useState(MOCK_GROCERY_ITEMS);
    const [groupBy, setGroupBy] = useState<"category" | "recipe" | "none">("category");

    const handleToggle = (id: string | number) => {
        setItems(items.map(item =>
            item.id === id ? { ...item, completed: !item.completed } : item
        ));
    };

    const handleRemove = (id: string | number) => {
        setItems(items.filter(item => item.id !== id));
    };

    const handleAddItem = (name: string) => {
        const newId = Math.max(...items.map(i => Number(i.id))) + 1;
        setItems([{ id: newId, name, completed: false }, ...items]);
    };

    const clearCompleted = () => {
        setItems(items.filter(item => !item.completed));
    };

    const completedCount = items.filter(i => i.completed).length;
    const progress = items.length > 0 ? (completedCount / items.length) * 100 : 0;

    return (
        <PageContainer
            title="Grocery List"
            subtitle={`${items.length - completedCount} items left to buy`}
            action={
                <div className="flex gap-2">
                    <AppButton variant="secondary" size="icon-sm">
                        <Share2 className="h-4 w-4" />
                    </AppButton>
                    <AppButton variant="secondary" size="icon-sm">
                        <Printer className="h-4 w-4" />
                    </AppButton>
                </div>
            }
        >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Column: List Actions & Summary */}
                <div className="lg:col-span-1 space-y-6">
                    <AppCard variant="elevated" className="overflow-visible">
                        <AppCardContent className="p-6 space-y-6">
                            <div className="space-y-2">
                                <div className="flex justify-between text-sm font-bold text-slate-600 mb-1">
                                    <span>Shopping Progress</span>
                                    <span>{Math.round(progress)}%</span>
                                </div>
                                <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-green-500 rounded-full transition-all duration-500"
                                        style={{ width: `${progress}%` }}
                                    />
                                </div>
                            </div>

                            <div className="space-y-3 pt-2">
                                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Controls</h4>
                                <div className="flex flex-col gap-2">
                                    <div className="flex bg-slate-100 p-1 rounded-xl">
                                        <button
                                            onClick={() => setGroupBy("category")}
                                            className={cn(
                                                "flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-xs font-bold transition-all",
                                                groupBy === "category" ? "bg-white shadow-sm text-green-700" : "text-slate-500 hover:text-slate-700"
                                            )}
                                        >
                                            <LayoutGrid className="h-3 w-3" />
                                            Category
                                        </button>
                                        <button
                                            onClick={() => setGroupBy("recipe")}
                                            className={cn(
                                                "flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-xs font-bold transition-all",
                                                groupBy === "recipe" ? "bg-white shadow-sm text-green-700" : "text-slate-500 hover:text-slate-700"
                                            )}
                                        >
                                            <ShoppingCart className="h-3 w-3" />
                                            Recipe
                                        </button>
                                        <button
                                            onClick={() => setGroupBy("none")}
                                            className={cn(
                                                "flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-xs font-bold transition-all",
                                                groupBy === "none" ? "bg-white shadow-sm text-green-700" : "text-slate-500 hover:text-slate-700"
                                            )}
                                        >
                                            <ListFilter className="h-3 w-3" />
                                            None
                                        </button>
                                    </div>

                                    <AppButton
                                        variant="ghost"
                                        size="sm"
                                        className="justify-start text-slate-500 font-bold hover:text-rose-600 hover:bg-rose-50"
                                        onClick={clearCompleted}
                                        disabled={completedCount === 0}
                                    >
                                        <Trash2 className="h-4 w-4 mr-2" />
                                        Clear completed
                                    </AppButton>
                                </div>
                            </div>

                            <div className="bg-green-50 rounded-2xl p-4 border border-green-100">
                                <div className="flex gap-3">
                                    <div className="bg-green-100 p-2 rounded-xl text-green-600">
                                        <CheckCircle2 className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <h5 className="font-bold text-sm text-green-900">Items sync</h5>
                                        <p className="text-xs text-green-700 mt-0.5 opacity-80">
                                            Your grocery list is synced across all devices automatically.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </AppCardContent>
                    </AppCard>
                </div>

                {/* Right Column: The List */}
                <div className="lg:col-span-2 space-y-8">
                    <AddIngredient onAdd={handleAddItem} />

                    <GroceryList
                        items={items}
                        onToggle={handleToggle}
                        onRemove={handleRemove}
                        groupBy={groupBy}
                    />

                    {items.length === 0 && (
                        <div className="py-24 flex flex-col items-center justify-center text-center space-y-4 bg-white border border-dashed border-slate-200 rounded-[2.5rem] shadow-sm">
                            <div className="h-20 w-20 rounded-full bg-slate-50 flex items-center justify-center text-slate-200">
                                <ShoppingCart className="h-10 w-10" />
                            </div>
                            <div className="max-w-sm">
                                <h3 className="text-xl font-extrabold text-slate-900">Your list is empty</h3>
                                <p className="text-slate-500 mt-2">Add items manually or from your favorite recipes to get started with your next meal.</p>
                            </div>
                            <AppButton className="mt-2" onClick={() => handleAddItem("New Item")}>
                                Add your first item
                            </AppButton>
                        </div>
                    )}
                </div>
            </div>
        </PageContainer>
    );
}
