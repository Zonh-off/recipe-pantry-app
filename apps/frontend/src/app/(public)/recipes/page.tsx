"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { PageContainer, SectionHeader, AppButton } from "@/shared/components/ui";
import {
    RecipeGrid,
    RecipeCard,
    SearchBar,
    RecipeFilters
} from "@/features/recipes/components";
import { EmptyState, LoadingSkeleton } from "@/shared/components/feedback";
import { SlidersHorizontal, LayoutGrid } from "lucide-react";
import { cn } from "@/lib/utils";
import { useRecipesSearch } from "@/features/recipes/api/recipes";

export default function RecipesPage() {
    return (
        <Suspense fallback={<div className="min-h-[80vh] flex items-center justify-center"><LoadingSkeleton variant="card" /></div>}>
            <RecipesContent />
        </Suspense>
    );
}

function RecipesContent() {
    const searchParams = useSearchParams();
    const initialQuery = searchParams.get('q') || "";
    const [search, setSearch] = useState(initialQuery);
    const [showFilters, setShowFilters] = useState(false);
    const [filters, setFilters] = useState<any>({});

    const { data, isLoading, isError } = useRecipesSearch({
        query: search,
        ...filters
    });
    const recipes = data?.items ?? [];

    const handleSearch = () => {
        // useRecipesSearch handles the fetch automatically when search changes
    };

    const handleFilterChange = (newFilters: any) => {
        setFilters(newFilters);
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
                    {/* Filters Sidebar */}
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
                        {!isLoading && (
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-sm font-medium text-slate-500">
                                    Found {recipes.length} recipes
                                </span>
                                <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg">
                                    <button className="p-1.5 rounded-md bg-white shadow-sm text-green-600">
                                        <LayoutGrid className="h-4 w-4" />
                                    </button>
                                </div>
                            </div>
                        )}

                        {isLoading ? (
                            <RecipeGrid className={cn(
                                "grid-cols-1 sm:grid-cols-2",
                                showFilters ? "xl:grid-cols-2" : "xl:grid-cols-3 2xl:grid-cols-4"
                            )}>
                                {[1, 2, 3, 4, 5, 6].map((i) => (
                                    <LoadingSkeleton key={i} variant="card" />
                                ))}
                            </RecipeGrid>
                        ) : recipes.length > 0 ? (
                            <RecipeGrid className={cn(
                                "grid-cols-1 sm:grid-cols-2",
                                showFilters ? "xl:grid-cols-2" : "xl:grid-cols-3 2xl:grid-cols-4"
                            )}>
                                {recipes.map((recipe) => (
                                    <RecipeCard key={recipe.id} {...recipe} />
                                ))}
                            </RecipeGrid>
                        ) : (
                            <EmptyState
                                title="No recipes found"
                                description={isError ? "There was an error connecting to the recipes service." : `We couldn't find any recipes matching your criteria.`}
                                actionLabel="Clear all filters"
                                onAction={() => {
                                    setSearch("");
                                    setFilters({});
                                }}
                            />
                        )}
                    </main>
                </div>
            </div>
        </PageContainer>
    );
}
