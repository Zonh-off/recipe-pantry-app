'use client';

import { PageContainer, SectionHeader, AppButton } from '@/shared/components/ui';
import { RecipeGrid, RecipeCard } from '@/features/recipes/components';
import { CollectionCard } from '@/features/collections/components';
import { EmptyState } from '@/shared/components/feedback';
import { ChefHat, Plus } from 'lucide-react';

const RECOMMENDED_RECIPES = [
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
  {
    id: '7',
    title: 'Mushroom Risotto',
    image: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&q=80&w=800',
    readyInMinutes: 40,
    servings: 4,
    calories: 550,
  },
  {
    id: '8',
    title: 'Greek Salad with Feta',
    image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&q=80&w=800',
    readyInMinutes: 10,
    servings: 2,
    calories: 250,
  },
];

const QUICK_MEALS = [
  {
    id: '9',
    title: 'Scrambled Eggs on Toast',
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&q=80&w=800',
    readyInMinutes: 5,
    servings: 1,
    calories: 320,
  },
  {
    id: '10',
    title: 'Pesto Pasta',
    image: 'https://images.unsplash.com/photo-1473093226795-af9932fe5856?auto=format&fit=crop&q=80&w=800',
    readyInMinutes: 10,
    servings: 1,
    calories: 540,
  },
];

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

export default function HomePage() {
  return (
    <PageContainer
      title="Discover"
      subtitle="Perfect recipes based on your pantry."
      action={
        <AppButton size="sm">
          <Plus className="h-4 w-4" />
          Add Ingredient
        </AppButton>
      }
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
          <RecipeGrid>
            {RECOMMENDED_RECIPES.map((recipe) => (
              <RecipeCard key={recipe.id} {...recipe} />
            ))}
          </RecipeGrid>
        </section>

        {/* Quick Meals Section */}
        <section className="bg-slate-50 -mx-6 px-6 py-12 rounded-[2.5rem]">
          <SectionHeader
            title="Quick Meals"
            subtitle="Delicious recipes in under 15 minutes"
            action={<AppButton variant="ghost" size="sm" className="text-green-600 font-bold hover:bg-green-50">See all →</AppButton>}
          />
          <RecipeGrid>
            {QUICK_MEALS.map((recipe) => (
              <RecipeCard key={recipe.id} {...recipe} />
            ))}
            {/* Show loading state placeholders or more items */}
            <div className="hidden lg:block">
              <RecipeCard
                id="11"
                title="Avocado Toast with Egg"
                image="https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&q=80&w=800"
                readyInMinutes={10}
                servings={1}
              />
            </div>
            <div className="hidden xl:block">
              <RecipeCard
                id="12"
                title="Greek Yogurt Bowl"
                image="https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&q=80&w=800"
                readyInMinutes={5}
                servings={1}
              />
            </div>
          </RecipeGrid>
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
