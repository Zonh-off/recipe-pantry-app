"use client";

import { useParams, useRouter } from "next/navigation";
import {
    PageContainer,
    AppButton,
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
import { useCollectionDetails } from "@/features/collections/api/collections";
import { LoadingSkeleton } from "@/shared/components/feedback";

export default function CollectionDetailsPage() {
    const params = useParams();
    const router = useRouter();
    const id = params.id as string;

    const { data: collection, isLoading, isError } = useCollectionDetails(id);

    return (
        <PageContainer
            title={isLoading ? "Loading Collection..." : collection?.name || "Collection"}
            subtitle={collection ? `${collection.recipeCount} recipes saved here` : ""}
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
                        <AppButton size="sm" onClick={() => router.push("/recipes")}>
                            <Plus className="h-4 w-4 mr-1" />
                            Add Recipe
                        </AppButton>
                    </div>
                </div>

                {/* Recipes Grid */}
                {isLoading ? (
                    <RecipeGrid>
                        {[1, 2, 3, 4].map(i => <LoadingSkeleton key={i} variant="card" />)}
                    </RecipeGrid>
                ) : collection?.recipes && collection.recipes.length > 0 ? (
                    <RecipeGrid>
                        {collection.recipes.map((recipe: any) => (
                            <RecipeCard key={recipe.id} {...recipe} />
                        ))}
                    </RecipeGrid>
                ) : (
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
