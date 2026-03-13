'use client';

import { PageContainer, SectionHeader, AppButton } from '@/shared/components/ui';
import { RecipeGrid, RecipeCard } from '@/features/recipes/components';
import { ChefHat, Plus, ShoppingBasket } from 'lucide-react';
import { useRecipeRecommendations, useRecipesSearch, Recipe } from '@/features/recipes/api/recipes';
import { usePantry } from '@/features/pantry/api/pantry';
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
  const { data: recommendations, isLoading: recommendationsLoading } = useRecipeRecommendations();
  const { data: pantryItems = [], isLoading: pantryLoading } = usePantry();

  // Fetch recipes based on pantry ingredients
  const { data: pantryRecipes, isLoading: pantryRecipesLoading } = useRecipesSearch({
    mode: 'pantry',
    pageSize: 4,
  });

  const hasPantryItems = pantryItems.length > 0;
  const hasPantryRecipes = (pantryRecipes?.items?.length ?? 0) > 0;
  const isLoading = recommendationsLoading || pantryLoading || (hasPantryItems && pantryRecipesLoading);

  return (
    <PageContainer
      title="Discover"
      subtitle={user ? "Perfect recipes based on your pantry." : "Discover delicious recipes to cook today."}
    >
      <div className="space-y-12 pb-10">
        {/* Banner / Hero Section */}
        <section className="relative overflow-hidden rounded-[2.5rem] bg-green-600 p-8 md:p-12 text-white shadow-xl shadow-green-600/20">
          <div className="relative z-10 max-w-xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
              {user ? (hasPantryItems ? (hasPantryRecipes ? "Cook something fresh." : "Almost there!") : "Your pantry is empty.") : "Cook with what you have."}
            </h2>
            <p className="text-green-50 mb-8 text-lg opacity-90 leading-relaxed">
              {user
                ? (hasPantryItems
                  ? (hasPantryRecipes
                    ? <>We found <span className="font-bold underline">{pantryRecipes?.total ?? 0} recipes</span> you can cook with your current ingredients.</>
                    : "Not enough ingredients to provide recipes from your pantry. Keep adding more!")
                  : "Add your ingredients to see personalized recipe suggestions and minimize food waste.")
                : "Manage your ingredients, discover perfect recipes, and build grocery lists effortlessly."
              }
            </p>
            <div className="flex flex-wrap gap-4">
              <AppButton
                variant="secondary"
                className="bg-white text-green-700 hover:bg-green-50 border-none shadow-lg px-8 h-12 text-base font-bold rounded-xl"
                onClick={() => router.push(user ? '/pantry' : '/register')}
              >
                {user ? (hasPantryItems && hasPantryRecipes ? "Explore Pantry Recipes" : "Add Ingredients") : "Get Started"}
              </AppButton>
              {!user && (
                <AppButton
                  variant="ghost"
                  className="text-white hover:bg-white/10 border border-white/20 px-8 h-12 text-base rounded-xl"
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

        {/* Pantry Recipes or Empty Pantry CTA */}
        {user && (
          <section>
            {!hasPantryItems ? (
              <>
                <SectionHeader title="Complete Your Pantry" subtitle="Add more items to get better recommendations" />
                <div className="bg-slate-50 border border-dashed border-slate-200 rounded-[2rem] p-10 text-center flex flex-col items-center max-w-2xl mx-auto shadow-sm">
                  <div className="bg-white p-4 rounded-2xl shadow-sm mb-4">
                    <ShoppingBasket className="h-8 w-8 text-slate-300" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">No ingredients added yet</h3>
                  <p className="text-slate-500 mb-6">Start by adding what you have in your kitchen. We'll show you exactly what you can cook!</p>
                  <AppButton onClick={() => router.push('/pantry')} className="rounded-xl px-8 shadow-md shadow-green-600/10">
                    <Plus className="h-4 w-4 mr-2" />
                    Add first ingredient
                  </AppButton>
                </div>
              </>
            ) : pantryRecipesLoading ? (
              <>
                <SectionHeader title="Finding matching recipes..." />
                <RecipeGrid>
                  {[1, 2, 3, 4].map((i) => (
                    <LoadingSkeleton key={i} variant="card" />
                  ))}
                </RecipeGrid>
              </>
            ) : hasPantryRecipes ? (
              <>
                <SectionHeader
                  title="Ready to Cook"
                  subtitle="Recipes that match your ingredients"
                  action={
                    <AppButton variant="ghost" size="sm" className="text-green-600 font-bold hover:bg-green-50" onClick={() => router.push('/recipes?mode=pantry')}>
                      View all →
                    </AppButton>
                  }
                />
                <RecipeGrid>
                  {pantryRecipes?.items?.slice(0, 4).map((recipe: Recipe) => (
                    <RecipeCard key={recipe.id} {...recipe} />
                  ))}
                </RecipeGrid>
              </>
            ) : (
              <div className="bg-amber-50/50 border border-amber-100 rounded-[2rem] p-8 text-center flex flex-col items-center shadow-sm">
                <p className="text-amber-800 font-medium">Not enough ingredients to provide recipes from your pantry yet. Try adding more common items like salt, pepper, or olive oil!</p>
                <AppButton variant="ghost" className="mt-4 text-amber-700 font-bold hover:bg-amber-100" onClick={() => router.push('/pantry')}>
                  Manage Pantry →
                </AppButton>
              </div>
            )}
          </section>
        )}

        {/* Recommendations Section */}
        <section>
          <SectionHeader
            title={user ? "Recommended for You" : "Trending Recipes"}
            subtitle={user ? "Based on your taste preferences" : "Top picks for your next meal"}
            action={<AppButton variant="ghost" size="sm" className="text-green-600 font-bold hover:bg-green-50" onClick={() => router.push('/recipes')}>See all →</AppButton>}
          />
          {recommendationsLoading ? (
            <RecipeGrid>
              {[1, 2, 3, 4].map((i) => (
                <LoadingSkeleton key={i} variant="card" />
              ))}
            </RecipeGrid>
          ) : (
            <RecipeGrid>
              {recommendations?.items?.slice(0, 4).map((recipe: Recipe) => (
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
