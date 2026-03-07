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

const INITIAL_INGREDIENTS = [
    { id: 1, name: "Roma Tomatoes", amount: "3 items", category: "Vegetables" },
    { id: 2, name: "Red Onion", amount: "1/2", category: "Vegetables" },
    { id: 3, name: "Garlic", amount: "2 cloves", category: "Vegetables" },
    { id: 4, name: "Dried Oregano", amount: "1 tsp", category: "Spices" },
    { id: 5, name: "Sea Salt", amount: "Ongoing", category: "Spices" },
    { id: 6, name: "Olive Oil", amount: "1 bottle", category: "Other" },
    { id: 7, name: "Spaghetti", amount: "500g", category: "Grains" },
    { id: 8, name: "Parmesan Cheese", amount: "100g", category: "Dairy" },
];

export default function PantryPage() {
    const [ingredients, setIngredients] = useState(INITIAL_INGREDIENTS);
    const [search, setSearch] = useState("");
    const router = useRouter();

    const handleAdd = (name: string, amount: string, category: string) => {
        const newId = Math.max(...ingredients.map(i => i.id)) + 1;
        setIngredients([{ id: newId, name, amount, category }, ...ingredients]);
    };

    const handleRemove = (id: string | number) => {
        setIngredients(ingredients.filter(i => i.id !== id));
    };

    const filteredIngredients = ingredients.filter(i =>
        i.name.toLowerCase().includes(search.toLowerCase()) ||
        i.category.toLowerCase().includes(search.toLowerCase())
    );

    const handleFindRecipes = () => {
        // Navigate to recipes with pantry mode enabled (mock)
        router.push("/recipes?mode=pantry");
    };

    return (
        <PageContainer
            title="My Pantry"
            subtitle={`You have ${ingredients.length} ingredients in your pantry.`}
            action={
                <AddIngredientModal
                    onAdd={handleAdd}
                    trigger={
                        <AppButton size="sm">
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

                <PantryList
                    ingredients={filteredIngredients}
                    onRemove={handleRemove}
                />

                {filteredIngredients.length === 0 && search && (
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
