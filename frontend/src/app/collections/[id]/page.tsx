"use client";

import { useParams, useRouter } from "next/navigation";
import {
    PageContainer,
    SectionHeader,
    AppButton,
    AppCard,
    AppCardTitle,
    AppCardContent
} from "@/shared/components/ui";
import { RecipeGrid, RecipeCard } from "@/features/recipes/components";
import {
    ChevronLeft,
    Settings,
    Trash2,
    Filter,
    SortAsc,
    Plus
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const MOCK_COLLECTION = {
    id: "1",
    name: "Quick Weeknight Dinners",
    recipeCount: 12,
    recipes: [
        {
            id: '1',
            title: 'Creamy Avocado Pasta',
            image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&q=80&w=800',
            readyInMinutes: 15,
            servings: 2,
            calories: 450,
            matchPercentage: 90,
        },
        {
            id: '2',
            title: 'Garlic Butter Salmon',
            image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&q=80&w=800',
            readyInMinutes: 25,
            servings: 2,
            calories: 600,
            matchPercentage: 75,
        },
        {
            id: '4',
            title: 'Spicy Tofu Stir Fry',
            image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=800',
            readyInMinutes: 20,
            servings: 3,
            calories: 420,
            matchPercentage: 85,
        },
    ]
};

export default function CollectionDetailsPage() {
    const params = useParams();
    const router = useRouter();

    // Mock data for this example
    const collection = MOCK_COLLECTION;

    return (
        <PageContainer
            title={collection.name}
            subtitle={`${collection.recipeCount} recipes saved here`}
            action={
                <div className="flex gap-2">
                    <AppButton variant="secondary" size="icon-sm">
                        <Settings className="h-4 w-4" />
                    </AppButton>
                    <AppButton variant="destructive" size="icon-sm">
                        <Trash2 className="h-4 w-4" />
                    </AppButton>
                </div>
            }
        >
            <div className="space-y-8">
                {/* Navigation Bar */}
                <div className="flex items-center justify-between">
                    <AppButton
                        variant="ghost"
                        size="sm"
                        onClick={() => router.push("/collections")}
                        className="text-slate-500 pl-0 hover:bg-transparent"
                    >
                        <ChevronLeft className="h-4 w-4 mr-1" />
                        All Collections
                    </AppButton>

                    <div className="flex items-center gap-2">
                        <AppButton variant="outline" size="sm" className="hidden sm:flex">
                            <Filter className="h-4 w-4 mr-2" />
                            Filter
                        </AppButton>
                        <AppButton variant="outline" size="sm" className="hidden sm:flex">
                            <SortAsc className="h-4 w-4 mr-2" />
                            Sort
                        </AppButton>
                        <AppButton size="sm">
                            <Plus className="h-4 w-4 mr-1" />
                            Add Recipe
                        </AppButton>
                    </div>
                </div>

                {/* Recipes Grid */}
                <RecipeGrid>
                    {collection.recipes.map((recipe) => (
                        <RecipeCard key={recipe.id} {...recipe} />
                    ))}
                </RecipeGrid>

                {collection.recipes.length === 0 && (
                    <div className="py-24 flex flex-col items-center justify-center text-center space-y-4 border border-dashed border-slate-200 rounded-[2.5rem]">
                        <div className="h-16 w-16 rounded-full bg-slate-50 flex items-center justify-center text-slate-300">
                            <Plus className="h-8 w-8" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-slate-900">Your collection is empty</h3>
                            <p className="text-slate-500 mt-1">Start adding recipes you want to save for later.</p>
                        </div>
                        <AppButton className="mt-2" onClick={() => router.push("/recipes")}>
                            Browse Recipes
                        </AppButton>
                    </div>
                )}
            </div>
        </PageContainer>
    );
}
