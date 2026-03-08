import apiClient from '@/shared/lib/api/client';
import { useQuery } from '@tanstack/react-query';

export interface Recipe {
    id: string | number;
    title: string;
    image: string;
    readyInMinutes: number;
    servings: number;
    calories?: number;
    matchPercentage?: number;
    missedIngredientCount?: number;
    summary?: string;
    diets?: string[];
    cuisines?: string[];
    ingredients?: RecipeIngredient[];
    instructions?: string | string[];
}

export interface RecipeIngredient {
    id: number;
    name: string;
    amount: string;
    status: 'available' | 'missing' | 'neutral';
}

export interface RecipeQueryParams {
    query?: string;
    diet?: string | string[];
    cuisine?: string | string[];
    intolerances?: string | string[];
    maxReadyTime?: number;
    maxCalories?: number;
    minCalories?: number;
    page?: number;
    pageSize?: number;
}

export interface PaginatedResult<T> {
    items: T[];
    total: number;
    page: number;
    pageSize: number;
}

/* ─── API Methods ─────────────────────────────────────────── */

export const recipesApi = {
    searchRecipes: async (params: RecipeQueryParams): Promise<PaginatedResult<Recipe>> => {
        // Transform arrays to comma-separated strings for the backend
        const formattedParams = {
            ...params,
            diet: Array.isArray(params.diet) ? params.diet.join(',') : params.diet,
            cuisine: Array.isArray(params.cuisine) ? params.cuisine.join(',') : params.cuisine,
            intolerances: Array.isArray(params.intolerances) ? params.intolerances.join(',') : params.intolerances,
        };

        const { data } = await apiClient.get('/recipes/search', { params: formattedParams });
        return data;
    },

    getRecipeDetails: async (id: string): Promise<Recipe> => {
        const { data } = await apiClient.get(`/recipes/${id}`);
        return data;
    },

    getRecommendations: async (): Promise<PaginatedResult<Recipe>> => {
        const { data } = await apiClient.get('/recipes/recommendations');
        return data;
    },
};

/* ─── React Query Hooks ───────────────────────────────────── */

export const useRecipesSearch = (params: any) => {
    // Map frontend-specific filter names to backend API names
    const apiParams: RecipeQueryParams = {
        query: params.query,
        diet: params.diets,
        cuisine: params.cuisines,
        maxReadyTime: params.maxTime,
        maxCalories: params.maxCalories,
        page: params.page,
        pageSize: params.pageSize,
    };

    return useQuery({
        queryKey: ['recipes', 'search', apiParams],
        queryFn: () => recipesApi.searchRecipes(apiParams),
    });
};

export const useRecipeDetails = (id: string) => {
    return useQuery({
        queryKey: ['recipes', 'details', id],
        queryFn: () => recipesApi.getRecipeDetails(id),
        enabled: !!id,
    });
};

export const useRecipeRecommendations = () => {
    return useQuery({
        queryKey: ['recipes', 'recommendations'],
        queryFn: recipesApi.getRecommendations,
    });
};
