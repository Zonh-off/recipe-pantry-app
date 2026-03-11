"use client";

import { useParams, useRouter } from "next/navigation";
import {
    Clock,
    Users,
    Flame,
    ChevronLeft,
    Heart,
    Share2,
    Plus,
    ShoppingCart,
    CheckCircle2,
    Bookmark,
    CircleAlert,
    FolderHeart
} from "lucide-react";
import {
    PageContainer,
    AppButton,
    SectionHeader,
    AppCard,
    AppBadge,
    Chip
} from "@/shared/components/ui";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { useRecipeDetails } from "@/features/recipes/api/recipes";
import { LoadingSkeleton } from "@/shared/components/feedback";
import { AddToCollectionModal } from "@/features/collections/components";
import { useCollections } from "@/features/collections/api/collections";
import { AddToGroceryListModal } from "@/features/grocery-list/components";
import { useAuth } from "@/providers/auth-provider";

export default function RecipeDetailsPage() {
    const params = useParams();
    const router = useRouter();
    const id = params.id as string;
    const { user } = useAuth();

    const { data: recipe, isLoading, isError } = useRecipeDetails(id);
    const { data: collections = [] } = useCollections();
    const [isSaved, setIsSaved] = useState(false);
    const [showAuthPrompt, setShowAuthPrompt] = useState(false);

    const recipeCollections = user
        ? collections.filter(c => c.recipeIds.includes(Number(id)))
        : [];

    if (isLoading) {
        return (
            <PageContainer title="Loading Recipe...">
                <div className="space-y-8">
                    <LoadingSkeleton variant="image" className="aspect-[21/9]" />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="md:col-span-2 space-y-4">
                            <LoadingSkeleton variant="text" className="h-10 w-2/3" />
                            <LoadingSkeleton variant="text" />
                            <LoadingSkeleton variant="text" />
                        </div>
                        <LoadingSkeleton variant="card" />
                    </div>
                </div>
            </PageContainer>
        );
    }

    if (isError || !recipe) {
        return (
            <PageContainer title="Recipe Not Found">
                <div className="py-20 text-center space-y-4">
                    <p className="text-slate-500">We couldn't load the recipe details. It might have been removed or the ID is incorrect.</p>
                    <AppButton onClick={() => router.push("/recipes")}>Back to Recipes</AppButton>
                </div>
            </PageContainer>
        );
    }

    const diets = recipe.diets ?? [];
    const cuisines = recipe.cuisines ?? [];
    const ingredients = recipe.ingredients ?? [];
    const instructions = Array.isArray(recipe.instructions)
        ? recipe.instructions
        : typeof recipe.instructions === 'string'
            ? [recipe.instructions]
            : [];

    const missingIngredients = user ? ingredients.filter(i => i.status === "missing") : [];
    const showPantryInfo = !!user;

    const handleGatedAction = (e: React.MouseEvent) => {
        if (!user) {
            e.preventDefault();
            e.stopPropagation();
            setShowAuthPrompt(true);
            return false;
        }
        return true;
    };

    return (
        <PageContainer
            title=""
            className="pb-20"
        >
            {showAuthPrompt && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-2xl flex items-center justify-between gap-4 animate-in fade-in slide-in-from-top-2">
                    <div className="flex items-center gap-3">
                        <CircleAlert className="h-5 w-5 text-green-600" />
                        <p className="text-sm font-medium text-green-800">
                            Sign in to save recipes and track your pantry ingredients.
                        </p>
                    </div>
                    <AppButton size="sm" onClick={() => router.push('/login')}>Sign In</AppButton>
                </div>
            )}

            <div className="flex flex-col gap-8">
                {/* Navigation & Actions Top Bar */}
                <div className="flex items-center justify-between pointer-events-auto">
                    <AppButton
                        variant="ghost"
                        size="sm"
                        onClick={() => router.back()}
                        className="text-slate-600 pl-0 hover:bg-transparent"
                    >
                        <ChevronLeft className="h-5 w-5 mr-1" />
                        Back to results
                    </AppButton>

                    <div className="flex items-center gap-2">
                        <AppButton
                            variant="outline"
                            size="icon-sm"
                            className="rounded-full shadow-sm"
                            onClick={(e) => {
                                if (handleGatedAction(e)) {
                                    setIsSaved(!isSaved);
                                }
                            }}
                        >
                            <Heart className={cn("h-4 w-4 transition-colors", isSaved ? "fill-rose-500 text-rose-500" : "text-slate-400")} />
                        </AppButton>
                        <AppButton variant="outline" size="icon-sm" className="rounded-full shadow-sm">
                            <Share2 className="h-4 w-4 text-slate-400" />
                        </AppButton>
                        {user ? (
                            <AddToCollectionModal
                                recipeId={recipe.id}
                                trigger={
                                    <AppButton variant="outline" size="icon-sm" className="rounded-full shadow-sm">
                                        <Bookmark className="h-4 w-4 text-slate-400" />
                                    </AppButton>
                                }
                            />
                        ) : (
                            <AppButton
                                variant="outline"
                                size="icon-sm"
                                className="rounded-full shadow-sm"
                                onClick={handleGatedAction}
                            >
                                <Bookmark className="h-4 w-4 text-slate-400" />
                            </AppButton>
                        )}
                    </div>
                </div>

                {/* Hero Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                    {/* Left: Image Container */}
                    <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-slate-100">
                        <img
                            src={recipe.image}
                            alt={recipe.title}
                            className="w-full h-full object-cover"
                        />
                        {showPantryInfo && recipe.matchPercentage && recipe.matchPercentage >= 90 && (
                            <div className="absolute top-4 left-4">
                                <AppBadge variant="primary" className="bg-green-600/90 backdrop-blur-md px-3 py-1 text-sm border-none shadow-lg">
                                    Perfect Match
                                </AppBadge>
                            </div>
                        )}
                    </div>

                    {/* Right: Primary Info */}
                    <div className="space-y-6 pt-2">
                        <div className="flex flex-wrap gap-2 mb-2">
                            {diets.map(diet => (
                                <Chip key={diet} color="green" className="font-semibold">{diet}</Chip>
                            ))}
                            {cuisines.length > 0 && (
                                <Chip color="sky" className="font-semibold">{cuisines[0]}</Chip>
                            )}
                            {recipeCollections.map(collection => (
                                <AppBadge
                                    key={collection.id}
                                    variant="violet"
                                    className="rounded-lg h-7 px-3 border-none flex items-center shadow-sm"
                                >
                                    <FolderHeart className="h-3 w-3 mr-1.5" />
                                    {collection.name}
                                </AppBadge>
                            ))}
                        </div>

                        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                            {recipe.title}
                        </h1>

                        <p className="text-slate-500 text-lg leading-relaxed">
                            {recipe.summary ? recipe.summary.replace(/<[^>]*>?/gm, '') : 'No description available.'}
                        </p>

                        {/* Metadata Grid */}
                        <div className="grid grid-cols-3 gap-4 border-y border-slate-100 py-6">
                            <div className="flex flex-col items-center gap-1">
                                <div className="bg-amber-50 p-2 rounded-xl text-amber-600 mb-1">
                                    <Clock className="h-5 w-5" />
                                </div>
                                <span className="text-sm font-bold text-slate-900">{recipe.readyInMinutes}m</span>
                                <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Ready in</span>
                            </div>
                            <div className="flex flex-col items-center gap-1">
                                <div className="bg-sky-50 p-2 rounded-xl text-sky-600 mb-1">
                                    <Users className="h-5 w-5" />
                                </div>
                                <span className="text-sm font-bold text-slate-900">{recipe.servings} Servings</span>
                                <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Feeds</span>
                            </div>
                            <div className="flex flex-col items-center gap-1">
                                <div className="bg-rose-50 p-2 rounded-xl text-rose-600 mb-1">
                                    <Flame className="h-5 w-5" />
                                </div>
                                <span className="text-sm font-bold text-slate-900">{recipe.calories || 0} kcal</span>
                                <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Per saving</span>
                            </div>
                        </div>

                        {/* CTA Actions */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-2">
                            {user ? (
                                <AddToCollectionModal
                                    recipeId={recipe.id}
                                    trigger={
                                        <AppButton className="flex-1 h-12 shadow-lg shadow-green-600/20 text-base">
                                            <Bookmark className="h-5 w-5 mr-2" />
                                            Save to Collection
                                        </AppButton>
                                    }
                                />
                            ) : (
                                <AppButton
                                    className="flex-1 h-12 shadow-lg shadow-green-600/20 text-base"
                                    onClick={handleGatedAction}
                                >
                                    <Bookmark className="h-5 w-5 mr-2" />
                                    Save to Collection
                                </AppButton>
                            )}

                            {ingredients.length > 0 && (
                                <AddToGroceryListModal
                                    recipeTitle={recipe.title}
                                    ingredients={ingredients}
                                    trigger={
                                        <AppButton
                                            variant="secondary"
                                            className="flex-1 h-12 border-slate-200"
                                            onClick={handleGatedAction}
                                        >
                                            <ShoppingCart className="h-5 w-5 mr-2" />
                                            {showPantryInfo && missingIngredients.length > 0
                                                ? `Get ${missingIngredients.length} Ingredients`
                                                : "Add to grocery list"
                                            }
                                        </AppButton>
                                    }
                                />
                            )}
                        </div>
                    </div>
                </div>

                {/* Content Tabs/Sections */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-4">
                    {/* Ingredients Column */}
                    <div className="lg:col-span-1 space-y-6">
                        <AppCard variant="flat" className="bg-slate-50/50 border-none rounded-3xl p-6">
                            <SectionHeader
                                title="Ingredients"
                                subtitle={`${ingredients.length} items needed`}
                                className="mb-6"
                            />
                            <div className="space-y-4">
                                {ingredients.map((ingredient, idx) => (
                                    <div key={idx} className="flex items-start gap-3 group">
                                        <div className={cn(
                                            "mt-1 p-0.5 rounded-full",
                                            showPantryInfo && ingredient.status === "available" ? "text-green-600" : "text-slate-300"
                                        )}>
                                            <CheckCircle2 className="h-5 w-5" />
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex justify-between items-baseline">
                                                <span className={cn(
                                                    "text-sm font-medium",
                                                    showPantryInfo && ingredient.status === "available" ? "text-slate-900" : "text-slate-500 italic"
                                                )}>
                                                    {ingredient.name}
                                                </span>
                                                <span className="text-xs font-bold text-slate-400 ml-2">
                                                    {ingredient.amount}
                                                </span>
                                            </div>
                                        </div>
                                        {showPantryInfo && ingredient.status === "missing" && (
                                            <AppButton variant="ghost" size="icon-xs" className="text-green-600 opacity-0 group-hover:opacity-100">
                                                <Plus className="h-4 w-4" />
                                            </AppButton>
                                        )}
                                    </div>
                                ))}
                            </div>

                            {showPantryInfo && missingIngredients.length > 0 && (
                                <div className="mt-8 p-4 bg-amber-50 rounded-2xl border border-amber-100 border-dashed">
                                    <p className="text-xs font-semibold text-amber-700 leading-snug">
                                        You're missing {missingIngredients.length} ingredients. Add them to your grocery list with one click.
                                    </p>
                                    <AddToGroceryListModal
                                        recipeTitle={recipe.title}
                                        ingredients={ingredients}
                                        trigger={
                                            <AppButton variant="ghost" size="sm" className="text-amber-700 font-bold hover:bg-amber-100 mt-2 p-0 h-auto">
                                                Add missing to list →
                                            </AppButton>
                                        }
                                    />
                                </div>
                            )}
                        </AppCard>
                    </div>

                    {/* Instructions Column */}
                    <div className="lg:col-span-2 space-y-6">
                        <SectionHeader title="Cooking Instructions" className="mb-6" />
                        <div className="space-y-8">
                            {instructions.length > 0 ? instructions.map((step, index) => (
                                <div key={index} className="flex gap-6">
                                    <div className="shrink-0">
                                        <div className="h-10 w-10 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-sm font-black text-slate-900 shadow-sm">
                                            {index + 1}
                                        </div>
                                    </div>
                                    <div className="pt-2">
                                        <p className="text-slate-600 text-lg leading-relaxed">
                                            {step}
                                        </p>
                                    </div>
                                </div>
                            )) : (
                                <p className="text-slate-500 italic">No instructions provided for this recipe.</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </PageContainer>
    );
}
