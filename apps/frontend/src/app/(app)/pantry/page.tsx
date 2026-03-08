"use client";

import { useState } from "react";
import { PageContainer, AppButton } from "@/shared/components/ui";
import {
    PantryList,
    PantryToolbar,
    AddIngredientModal
} from "@/features/pantry/components";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import { usePantry, useAddPantryItem, useRemovePantryItem } from "@/features/pantry/api/pantry";

export default function PantryPage() {
    const { data: ingredients = [], isLoading } = usePantry();
    const addMutation = useAddPantryItem();
    const removeMutation = useRemovePantryItem();

    const [search, setSearch] = useState("");
    const router = useRouter();

    const handleAdd = (name: string, amount: string, category: string) => {
        addMutation.mutate({ name, amount, category });
    };

    const handleRemove = (id: string | number) => {
        removeMutation.mutate(id);
    };

    const filteredIngredients = ingredients.filter(i =>
        i.name.toLowerCase().includes(search.toLowerCase()) ||
        (i.category?.toLowerCase().includes(search.toLowerCase()))
    );

    const handleFindRecipes = () => {
        router.push("/recipes?mode=pantry");
    };

    return (
        <PageContainer
            title="My Pantry"
            subtitle={isLoading ? "Loading your pantry..." : `You have ${ingredients.length} ingredients in your pantry.`}
            action={
                <AddIngredientModal
                    onAdd={handleAdd}
                    trigger={
                        <AppButton size="sm" loading={addMutation.isPending}>
                            <Plus className="h-4 w-4 mr-2" />
                            Add Ingredient
                        </AppButton>
                    }
                />
            }
        >
            <div className="space-y-8">
                <PantryToolbar
                    searchValue={search}
                    onSearchChange={setSearch}
                    onFindRecipes={handleFindRecipes}
                    className="sticky top-0 z-10 pt-2 pb-4 bg-slate-50/80 backdrop-blur-sm -mt-2"
                />

                {isLoading ? (
                    <div className="py-20 text-center text-slate-400 font-medium">
                        Fetching your ingredients...
                    </div>
                ) : (
                    <PantryList
                        ingredients={filteredIngredients}
                        onRemove={handleRemove}
                    />
                )}

                {!isLoading && filteredIngredients.length === 0 && search && (
                    <div className="py-20 text-center space-y-4">
                        <p className="text-slate-500">No ingredients match "{search}"</p>
                        <AppButton variant="outline" size="sm" onClick={() => setSearch("")}>
                            Clear Search
                        </AppButton>
                    </div>
                )}
            </div>
        </PageContainer>
    );
}
