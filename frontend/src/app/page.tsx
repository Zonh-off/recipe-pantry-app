'use client';

import { PageContainer, SectionHeader, AppButton } from '@/shared/components/ui';
import { RecipeGrid, RecipeCard } from '@/features/recipes/components';
import { ChefHat, Plus } from 'lucide-react';
import { useRecipeRecommendations } from '@/features/recipes/api/recipes';
import { LoadingSkeleton } from '@/shared/components/feedback';

const CATEGORIES = [
  { name: 'Breakfast', emoji: '🍳' },
  { name: 'Lunch', emoji: '🥗' },
  { name: 'Dinner', emoji: '🍝' },
  { name: 'Vegetarian', emoji: '🌱' },
  { name: 'Vegan', emoji: '🥑' },
  { name: 'Dessert', emoji: '🍰' },
  { name: 'Snacks', emoji: '🥨' },
  { name: 'Drinks', emoji: '🥤' },
];

const POPULAR_RECIPES = [
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

export default function HomePage() {
  const { data: recommendations, isLoading } = useRecipeRecommendations();

  return (
    <PageContainer
      title="Discover"
      subtitle="Perfect recipes based on your pantry."
    >
      <div className="space-y-12 pb-10">
        {/* Banner / Hero Section */}
        <section className="relative overflow-hidden rounded-3xl bg-green-600 p-8 md:p-12 text-white">
          <div className="relative z-10 max-w-xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">What&apos;s in your pantry?</h2>
            <p className="text-green-50 mb-8 text-lg opacity-90">
              We found <span className="font-bold underline">8 recipes</span> you can cook right now with your current ingredients.
            </p>
            <div className="flex flex-wrap gap-4">
              <AppButton variant="secondary" className="bg-white text-green-700 hover:bg-green-50 border-none shadow-lg">
                Cook from Pantry
              </AppButton>
              <AppButton variant="ghost" className="text-white hover:bg-white/10 border border-white/20">
                Update Pantry
              </AppButton>
            </div>
          </div>
          <ChefHat className="absolute -bottom-10 -right-10 h-72 w-72 text-green-500/20 rotate-12" aria-hidden />
        </section>

        {/* Categories Section */}
        <section>
          <SectionHeader title="Categories" />
          <div className="flex flex-wrap gap-3">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.name}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-slate-200 text-slate-700 font-medium hover:border-green-300 hover:bg-green-50 hover:text-green-700 transition-all shadow-sm active:scale-95"
              >
                <span>{cat.emoji}</span>
                <span>{cat.name}</span>
              </button>
            ))}
          </div>
        </section>

        {/* Recommendations Section */}
        <section>
          <SectionHeader
            title="Recommended for You"
            subtitle="Based on your pantry ingredients"
            action={<AppButton variant="ghost" size="sm" className="text-green-600 font-bold hover:bg-green-50">See all →</AppButton>}
          />
          {isLoading ? (
            <RecipeGrid>
              {[1, 2, 3, 4].map((i) => (
                <LoadingSkeleton key={i} variant="card" />
              ))}
            </RecipeGrid>
          ) : (
            <RecipeGrid>
              {recommendations?.items?.map((recipe) => (
                <RecipeCard key={recipe.id} {...recipe} />
              ))}
            </RecipeGrid>
          )}
        </section>

        {/* Popular Recipes Section */}
        <section>
          <SectionHeader
            title="Popular this Week"
            subtitle="Most cooked by the community"
            action={<AppButton variant="ghost" size="sm" className="text-green-600 font-bold hover:bg-green-50">See all →</AppButton>}
          />
          <RecipeGrid>
            {POPULAR_RECIPES.map((recipe) => (
              <RecipeCard key={recipe.id} {...recipe} />
            ))}
          </RecipeGrid>
        </section>
      </div>
    </PageContainer>
  );
}
