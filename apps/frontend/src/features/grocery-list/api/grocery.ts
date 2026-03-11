import apiClient from '@/shared/lib/api/client';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

export interface GroceryItem {
    id: string | number;
    name: string;
    amount?: string;
    category?: string;
    checked: boolean;
    recipeName?: string;
}

/* ─── API Methods ─────────────────────────────────────────── */

export const groceryApi = {
    getGroceryList: async (): Promise<GroceryItem[]> => {
        const { data } = await apiClient.get('/grocery-list');
        return data;
    },

    addItem: async (name: string): Promise<GroceryItem> => {
        const { data } = await apiClient.post('/grocery-list', { name });
        return data;
    },

    toggleItem: async ({ id, checked }: { id: string | number, checked: boolean }): Promise<GroceryItem> => {
        const { data } = await apiClient.patch(`/grocery-list/${id}`, { checked });
        return data;
    },

    removeItem: async (id: string | number): Promise<void> => {
        await apiClient.delete(`/grocery-list/${id}`);
    },

    clearCompleted: async (): Promise<void> => {
        await apiClient.delete('/grocery-list/clear/checked');
    },

    bulkAdd: async (items: { name: string, amount?: number, unit?: string }[]): Promise<{ addedCount: number }> => {
        const { data } = await apiClient.post('/grocery-list/bulk', { items });
        return data;
    },
};

/* ─── React Query Hooks ───────────────────────────────────── */

export const useGroceryList = () => {
    return useQuery({
        queryKey: ['grocery-list'],
        queryFn: groceryApi.getGroceryList,
    });
};

export const useAddGroceryItem = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: groceryApi.addItem,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['grocery-list'] });
        },
    });
};

export const useToggleGroceryItem = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({ id, checked }: { id: string | number, checked: boolean }) =>
            groceryApi.toggleItem({ id, checked }),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['grocery-list'] });
        },
    });
};

export const useRemoveGroceryItem = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: groceryApi.removeItem,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['grocery-list'] });
        },
    });
};

export const useClearCompletedGroceryItems = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: groceryApi.clearCompleted,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['grocery-list'] });
        },
    });
};

export const useBulkAddGroceryItems = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: groceryApi.bulkAdd,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['grocery-list'] });
        },
    });
};
