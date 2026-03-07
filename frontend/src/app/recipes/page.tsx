"use client";

import { useState } from "react";
import { PageContainer, SectionHeader, AppButton } from "@/shared/components/ui";
import {
    RecipeGrid,
    RecipeCard,
    SearchBar,
    RecipeFilters
} from "@/features/recipes/components";
import { EmptyState } from "@/shared/components/feedback";
import { SlidersHorizontal, LayoutGrid } from "lucide-react";
import { cn } from "@/lib/utils";

const MOCK_RESULTS = [
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
        missedIngredientCount: 2,
    },
    {
        id: '3',
        title: 'Quinoa Salad with Roasted Veggies',
        image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800',
        readyInMinutes: 30,
        servings: 4,
        calories: 380,
        matchPercentage: 100,
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
    {
        id: '5',
        title: 'Classic Beef Burger',
        image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=800',
        readyInMinutes: 20,
        servings: 4,
        calories: 750,
    },
    {
        id: '6',
        title: 'Homemade Margherita Pizza',
        image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&q=80&w=800',
        readyInMinutes: 45,
        servings: 2,
        calories: 820,
    },
];

export default function RecipesPage() {
    const [search, setSearch] = useState("");
    const [showFilters, setShowFilters] = useState(false);
    const [results, setResults] = useState(MOCK_RESULTS);

    const handleSearch = () => {
        // Mock search logic: just filter the mock results by title
        const filtered = MOCK_RESULTS.filter(r =>
            r.title.toLowerCase().includes(search.toLowerCase())
        );
        setResults(filtered);
    };

    const handleFilterChange = (filters: any) => {
        console.log("Filters changed:", filters);
        // Real search would call API here
    };

    return (
        <PageContainer
            title="Search Recipes"
            subtitle="Find your next favorite meal from thousands of options."
        >
            <div className="flex flex-col gap-8">
                {/* Search & Actions Header */}
                <div className="flex flex-col md:flex-row gap-4">
                    <SearchBar
                        value={search}
                        onChange={setSearch}
                        onSearch={handleSearch}
                        className="flex-1"
                    />
                    <AppButton
                        variant="secondary"
                        onClick={() => setShowFilters(!showFilters)}
                        className={cn(
                            "md:w-auto h-12 rounded-xl border-slate-200 transition-all",
                            showFilters && "bg-green-50 border-green-200 text-green-700"
                        )}
                    >
                        <SlidersHorizontal className="h-4 w-4 mr-2" />
                        Filters
                    </AppButton>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Filters Sidebar - Mobile: Toggleable, Desktop: Collapsible */}
                    <aside className={cn(
                        "lg:col-span-1 space-y-6",
                        !showFilters && "hidden lg:block lg:invisible lg:h-0"
                    )}>
                        <RecipeFilters onFilterChange={handleFilterChange} />
                    </aside>

                    {/* Results Grid */}
                    <main className={cn(
                        "space-y-6",
                        showFilters ? "lg:col-span-3" : "lg:col-span-4"
                    )}>
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium text-slate-500">
                                Found {results.length} recipes
                            </span>
                            <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg">
                                <button className="p-1.5 rounded-md bg-white shadow-sm text-green-600">
                                    <LayoutGrid className="h-4 w-4" />
                                </button>
                            </div>
                        </div>

                        {results.length > 0 ? (
                            <RecipeGrid className={cn(
                                "grid-cols-1 sm:grid-cols-2",
                                showFilters ? "xl:grid-cols-2" : "xl:grid-cols-3 2xl:grid-cols-4"
                            )}>
                                {results.map((recipe) => (
                                    <RecipeCard key={recipe.id} {...recipe} />
                                ))}
                            </RecipeGrid>
                        ) : (
                            <EmptyState
                                title="No recipes found"
                                description={`We couldn't find any recipes matching "${search}". Try adjusting your filters or search terms.`}
                                actionLabel="Clear all filters"
                                onAction={() => {
                                    setSearch("");
                                    setResults(MOCK_RESULTS);
                                }}
                            />
                        )}
                    </main>
                </div>
            </div>
        </PageContainer>
    );
}
