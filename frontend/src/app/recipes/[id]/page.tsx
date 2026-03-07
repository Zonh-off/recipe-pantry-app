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
    Bookmark
} from "lucide-react";
import {
    PageContainer,
    AppButton,
    SectionHeader,
    AppCard,
    AppCardContent,
    AppBadge,
    Chip
} from "@/shared/components/ui";
import { IngredientList } from "@/features/recipes/components";
import { useState } from "react";
import { cn } from "@/lib/utils";

// Mock data for a single recipe
const MOCK_RECIPE = {
    id: "1",
    title: "Creamy Avocado Pasta",
    description: "A quick, healthy, and incredibly creamy pasta dish made with fresh avocados, garlic, and a hint of lemon. Perfect for a busy weeknight dinner when you want something satisfying but nutritious.",
    image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&q=80&w=1200",
    readyInMinutes: 15,
    servings: 2,
    calories: 450,
    matchPercentage: 90,
    diets: ["Vegetarian", "Vegan Options", "Quick"],
    cuisines: ["Italian-Fusion"],
    ingredients: [
        { id: 1, name: "Spaghetti", amount: "200g", status: "available" as const },
        { id: 2, name: "Ripe Avocados", amount: "2 large", status: "available" as const },
        { id: 3, name: "Garlic", amount: "2 cloves", status: "available" as const },
        { id: 4, name: "Fresh Basil", amount: "1/4 cup", status: "missing" as const },
        { id: 5, name: "Lemon Juice", amount: "1 tbsp", status: "available" as const },
        { id: 6, name: "Olive Oil", amount: "2 tbsp", status: "available" as const },
        { id: 7, name: "Cherry Tomatoes", amount: "100g", status: "missing" as const },
    ],
    instructions: [
        "Bring a large pot of salted water to a boil. Add spaghetti and cook according to package directions until al dente.",
        "While the pasta is cooking, prepare the sauce. Scoop the avocado flesh into a blender or food processor.",
        "Add garlic, basil, lemon juice, and olive oil. Blend until smooth and creamy. If it's too thick, add a tablespoon of the pasta water.",
        "Drain the pasta, reserving a small amount of extra pasta water.",
        "Toss the pasta with the avocado sauce until well coated. If needed, add a splash of reserved pasta water to reach your desired consistency.",
        "Fold in halved cherry tomatoes (if using) and season with salt and pepper to taste.",
        "Serve immediately, garnished with extra basil leaves if desired."
    ]
};

export default function RecipeDetailsPage() {
    const params = useParams();
    const router = useRouter();
    const [isSaved, setIsSaved] = useState(false);

    // In a real app, we would fetch the recipe by ID
    const recipe = MOCK_RECIPE;

    const missingIngredients = recipe.ingredients.filter(i => i.status === "missing");

    return (
        <PageContainer
            title=""
            className="pb-20"
        >
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
                            onClick={() => setIsSaved(!isSaved)}
                        >
                            <Heart className={cn("h-4 w-4 transition-colors", isSaved ? "fill-rose-500 text-rose-500" : "text-slate-400")} />
                        </AppButton>
                        <AppButton variant="outline" size="icon-sm" className="rounded-full shadow-sm">
                            <Share2 className="h-4 w-4 text-slate-400" />
                        </AppButton>
                        <AppButton variant="outline" size="icon-sm" className="rounded-full shadow-sm">
                            <Bookmark className="h-4 w-4 text-slate-400" />
                        </AppButton>
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
                        {recipe.matchPercentage >= 90 && (
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
                            {recipe.diets.map(diet => (
                                <Chip key={diet} color="green" className="font-semibold">{diet}</Chip>
                            ))}
                            <Chip color="sky" className="font-semibold">{recipe.cuisines[0]}</Chip>
                        </div>

                        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                            {recipe.title}
                        </h1>

                        <p className="text-slate-500 text-lg leading-relaxed">
                            {recipe.description}
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
                                <span className="text-sm font-bold text-slate-900">{recipe.calories} kcal</span>
                                <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Per saving</span>
                            </div>
                        </div>

                        {/* CTA Actions */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-2">
                            <AppButton className="flex-1 h-12 shadow-lg shadow-green-600/20 text-base">
                                <Bookmark className="h-5 w-5 mr-2" />
                                Save to Collection
                            </AppButton>
                            {missingIngredients.length > 0 && (
                                <AppButton variant="secondary" className="flex-1 h-12 border-slate-200">
                                    <ShoppingCart className="h-5 w-5 mr-2" />
                                    Get {missingIngredients.length} Ingredients
                                </AppButton>
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
                                subtitle={`${recipe.ingredients.length} items needed`}
                                className="mb-6"
                            />
                            <div className="space-y-4">
                                {recipe.ingredients.map(ingredient => (
                                    <div key={ingredient.id} className="flex items-start gap-3 group">
                                        <div className={cn(
                                            "mt-1 p-0.5 rounded-full",
                                            ingredient.status === "available" ? "text-green-600" : "text-slate-300"
                                        )}>
                                            <CheckCircle2 className="h-5 w-5" />
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex justify-between items-baseline">
                                                <span className={cn(
                                                    "text-sm font-medium",
                                                    ingredient.status === "available" ? "text-slate-900" : "text-slate-500 italic"
                                                )}>
                                                    {ingredient.name}
                                                </span>
                                                <span className="text-xs font-bold text-slate-400 ml-2">
                                                    {ingredient.amount}
                                                </span>
                                            </div>
                                        </div>
                                        {ingredient.status === "missing" && (
                                            <AppButton variant="ghost" size="icon-xs" className="text-green-600 opacity-0 group-hover:opacity-100">
                                                <Plus className="h-4 w-4" />
                                            </AppButton>
                                        )}
                                    </div>
                                ))}
                            </div>

                            {missingIngredients.length > 0 && (
                                <div className="mt-8 p-4 bg-amber-50 rounded-2xl border border-amber-100 border-dashed">
                                    <p className="text-xs font-semibold text-amber-700 leading-snug">
                                        You're missing {missingIngredients.length} ingredients. Add them to your grocery list with one click.
                                    </p>
                                    <AppButton variant="ghost" size="sm" className="text-amber-700 font-bold hover:bg-amber-100 mt-2 p-0 h-auto">
                                        Add all to list →
                                    </AppButton>
                                </div>
                            )}
                        </AppCard>
                    </div>

                    {/* Instructions Column */}
                    <div className="lg:col-span-2 space-y-6">
                        <SectionHeader title="Cooking Instructions" className="mb-6" />
                        <div className="space-y-8">
                            {recipe.instructions.map((step, index) => (
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
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </PageContainer>
    );
}
