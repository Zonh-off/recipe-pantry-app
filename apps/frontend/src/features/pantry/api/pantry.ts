import apiClient from '@/shared/lib/api/client';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

export interface Ingredient {
    id: string;
    name: string;
    amount?: string;
    unit?: string;
}

export interface AddIngredientDto {
    ingredientName: string;
    amount?: number;
    unit?: string;
}

export interface UpdateIngredientDto {
    amount?: number;
    unit?: string;
}

/* ─── API Methods ─────────────────────────────────────────── */

export const pantryApi = {
    getIngredients: async (): Promise<Ingredient[]> => {
        const { data } = await apiClient.get('/pantry');
        return data;
    },

    addIngredient: async (dto: AddIngredientDto): Promise<Ingredient> => {
        const { data } = await apiClient.post('/pantry', dto);
        return data;
    },

    removeIngredient: async (id: string | number): Promise<void> => {
        await apiClient.delete(`/pantry/${id}`);
    },

    updateIngredient: async (id: string | number, dto: UpdateIngredientDto): Promise<Ingredient> => {
        const { data } = await apiClient.patch(`/pantry/${id}`, dto);
        return data;
    },
};

/* ─── React Query Hooks ───────────────────────────────────── */

export const usePantry = () => {
    return useQuery({
        queryKey: ['pantry'],
        queryFn: pantryApi.getIngredients,
    });
};

export const useAddPantryItem = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: pantryApi.addIngredient,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['pantry'] });
        },
    });
};

export const useRemovePantryItem = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: pantryApi.removeIngredient,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['pantry'] });
        },
    });
};
