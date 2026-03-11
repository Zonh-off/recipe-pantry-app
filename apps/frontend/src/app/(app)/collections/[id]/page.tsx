"use client";

import { useParams, useRouter } from "next/navigation";
import {
    PageContainer,
    AppButton,
} from "@/shared/components/ui";
import { RecipeGrid, RecipeCard } from "@/features/recipes/components";
import { EditCollectionModal, DeleteCollectionModal } from "@/features/collections/components";
import { ArrowLeft, Filter, SortAsc, Plus } from "lucide-react";
import { useCollectionDetails } from "@/features/collections/api/collections";
import { recipesApi } from "@/features/recipes/api/recipes";
import { useQueries } from "@tanstack/react-query";
import { LoadingSkeleton } from "@/shared/components/feedback";

export default function CollectionDetailsPage() {
    const params = useParams();
    const router = useRouter();
    const id = params.id as string;

    const { data: collection, isLoading, isError } = useCollectionDetails(id);

    const recipeQueries = useQueries({
        queries: (collection?.recipeIds || []).map((recipeId) => ({
            queryKey: ['recipes', 'details', String(recipeId)],
            queryFn: () => recipesApi.getRecipeDetails(String(recipeId)),
        })),
    });

    const isRecipesLoading = isLoading || recipeQueries.some(q => q.isLoading);
    const recipes = recipeQueries.map(q => q.data).filter(Boolean);

    return (
        <PageContainer
            title={isLoading ? "Loading CollectionEntity..." : collection?.name || "Collection"}
            subtitle={collection ? `${collection.recipeCount} recipes saved here` : ""}
            action={
                <div className="flex gap-2">
                    {collection && (
                        <>
                            {collection.name.toLowerCase() !== 'saved' && (
                                <>
                                    <EditCollectionModal
                                        collectionId={collection.id}
                                        initialName={collection.name}
                                    />
                                    <DeleteCollectionModal
                                        collectionId={collection.id}
                                        collectionName={collection.name}
                                    />
                                </>
                            )}
                        </>
                    )}
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
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        All Collections
                    </AppButton>

                    <div className="flex items-center gap-2">
                        {/*<AppButton variant="outline" size="sm" className="hidden sm:flex">
                            <Filter className="h-4 w-4 mr-2" />
                            Filter
                        </AppButton>
                        <AppButton variant="outline" size="sm" className="hidden sm:flex">
                            <SortAsc className="h-4 w-4 mr-2" />
                            Sort
                        </AppButton>*/}
                        <AppButton size="sm" onClick={() => router.push("/recipes")}>
                            <Plus className="h-4 w-4 mr-1" />
                            Add Recipe
                        </AppButton>
                    </div>
                </div>

                {/* Recipes Grid */}
                {isRecipesLoading ? (
                    <RecipeGrid>
                        {[1, 2, 3, 4].map(i => <LoadingSkeleton key={i} variant="card" />)}
                    </RecipeGrid>
                ) : recipes && recipes.length > 0 ? (
                    <RecipeGrid>
                        {recipes.map((recipe: any) => (
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
