"use client";

import { useState } from "react";
import { PageContainer, AppButton } from "@/shared/components/ui";
import {
    PantryList,
    AddIngredientModal,
    ScanCameraModal
} from "@/features/pantry/components";
import { Plus, Camera, Sparkles } from "lucide-react";
import { useRouter } from "next/navigation";
import { usePantry, useAddPantryItem, useRemovePantryItem } from "@/features/pantry/api/pantry";
import { SearchBar } from "@/features/recipes/components";

export default function PantryPage() {
    const { data: ingredients = [], isLoading } = usePantry();
    const addMutation = useAddPantryItem();
    const removeMutation = useRemovePantryItem();

    const [search, setSearch] = useState("");
    const router = useRouter();

    const handleAdd = (name: string, amount: number, unit: string) => {
        addMutation.mutate({ ingredientName: name, amount, unit });
    };

    const handleRemove = (id: string | number) => {
        removeMutation.mutate(id);
    };

    const filteredIngredients = ingredients.filter(i =>
        i.name.toLowerCase().includes(search.toLowerCase()) ||
        (i.unit?.toLowerCase().includes(search.toLowerCase()))
    );

    const handleFindRecipes = () => {
        router.push("/recipes?mode=pantry");
    };

    return (
        <PageContainer
            title="My Pantry"
            subtitle={isLoading ? "Loading your pantry..." : `You have ${ingredients.length} ingredients in your pantry.`}
            action={
                <AppButton
                    variant="primary"
                    size="sm"
                    onClick={handleFindRecipes}
                    className="shadow-md shadow-green-600/10"
                >
                    <Sparkles className="h-4 w-4 mr-2" />
                    Find Recipes
                </AppButton>
            }
        >
            <div className="space-y-8">
                <div className={"flex flex-col gap-4 sticky top-0 z-10 pt-2 pb-4 bg-slate-50/80 backdrop-blur-sm -mt-2"}>
                    <div className="flex flex-col md:flex-row gap-4">
                        <SearchBar
                            value={search}
                            onChange={setSearch}
                            placeholder="Search your pantry..."
                            className="flex-1"
                        />

                        <div className="flex items-center gap-2">
                            <ScanCameraModal
                                trigger={
                                    <AppButton variant="secondary" className="md:w-auto h-12 rounded-xl border-slate-200">
                                        <Camera className="h-4 w-4 mr-2 text-slate-500" />
                                        Scan with camera
                                    </AppButton>
                                }
                            />
                            <AddIngredientModal
                                onAdd={handleAdd}
                                trigger={
                                    <AppButton className="md:w-auto h-12 rounded-xl shadow-lg shadow-green-600/10" loading={addMutation.isPending}>
                                        <Plus className="h-4 w-4 mr-2" />
                                        Add Ingredient
                                    </AppButton>
                                }
                            />
                        </div>
                    </div>
                </div>

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
