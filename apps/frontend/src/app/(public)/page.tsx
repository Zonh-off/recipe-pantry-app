'use client';

import { PageContainer, SectionHeader, AppButton } from '@/shared/components/ui';
import { RecipeGrid, RecipeCard } from '@/features/recipes/components';
import { ChefHat } from 'lucide-react';
import { useRecipeRecommendations } from '@/features/recipes/api/recipes';
import { LoadingSkeleton } from '@/shared/components/feedback';
import { useAuth } from '@/providers/auth-provider';
import { useRouter } from 'next/navigation';

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
  const { user } = useAuth();
  const router = useRouter();
  const { data: recommendations, isLoading } = useRecipeRecommendations();

  return (
    <PageContainer
      title="Discover"
      subtitle={user ? "Perfect recipes based on your pantry." : "Discover delicious recipes to cook today."}
    >
      <div className="space-y-12 pb-10">
        {/* Banner / Hero Section */}
        <section className="relative overflow-hidden rounded-3xl bg-green-600 p-8 md:p-12 text-white shadow-xl shadow-green-600/20">
          <div className="relative z-10 max-w-xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
              {user ? "What's in your pantry?" : "Cook with what you have."}
            </h2>
            <p className="text-green-50 mb-8 text-lg opacity-90">
              {user
                ? <>We found <span className="font-bold underline">8 recipes</span> you can cook right now with your current ingredients.</>
                : "Manage your ingredients, discover perfect recipes, and build grocery lists effortlessly."
              }
            </p>
            <div className="flex flex-wrap gap-4">
              <AppButton
                variant="secondary"
                className="bg-white text-green-700 hover:bg-green-50 border-none shadow-lg px-8 h-12 text-base font-bold"
                onClick={() => router.push(user ? '/pantry' : '/register')}
              >
                {user ? "Cook from Pantry" : "Get Started"}
              </AppButton>
              {!user && (
                <AppButton
                  variant="ghost"
                  className="text-white hover:bg-white/10 border border-white/20 px-8 h-12 text-base"
                  onClick={() => router.push('/login')}
                >
                  Sign In
                </AppButton>
              )}
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
                onClick={() => router.push(`/recipes?q=${encodeURIComponent(cat.name.toLowerCase())}`)}
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
            title={user ? "Recommended for You" : "Trending Recipes"}
            subtitle={user ? "Based on your pantry ingredients" : "Top picks for your next meal"}
            action={<AppButton variant="ghost" size="sm" className="text-green-600 font-bold hover:bg-green-50" onClick={() => router.push('/recipes')}>See all →</AppButton>}
          />
          {isLoading ? (
            <RecipeGrid>
              {[1, 2, 3, 4].map((i) => (
                <LoadingSkeleton key={i} variant="card" />
              ))}
            </RecipeGrid>
          ) : (
            <RecipeGrid>
              {recommendations?.items?.slice(0, 4).map((recipe) => (
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
            action={<AppButton variant="ghost" size="sm" className="text-green-600 font-bold hover:bg-green-50" onClick={() => router.push('/recipes')}>See all →</AppButton>}
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
