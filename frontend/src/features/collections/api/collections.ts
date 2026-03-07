import apiClient from '@/shared/lib/api/client';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

export interface Collection {
    id: string;
    name: string;
    recipeCount: number;
    thumbnails: string[];
    recipes?: any[]; // Full recipe objects if requested
}

export interface CreateCollectionDto {
    name: string;
}

/* ─── API Methods ─────────────────────────────────────────── */

export const collectionsApi = {
    getCollections: async (): Promise<Collection[]> => {
        const { data } = await apiClient.get('/collections');
        return data;
    },

    getCollectionDetails: async (id: string): Promise<Collection> => {
        const { data } = await apiClient.get(`/collections/${id}`);
        return data;
    },

    createCollection: async (dto: CreateCollectionDto): Promise<Collection> => {
        const { data } = await apiClient.post('/collections', dto);
        return data;
    },

    addRecipeToCollection: async (collectionId: string, recipeId: string | number): Promise<void> => {
        await apiClient.post(`/collections/${collectionId}/recipes`, { recipeId });
    },

    removeCollection: async (id: string): Promise<void> => {
        await apiClient.delete(`/collections/${id}`);
    },
};

/* ─── React Query Hooks ───────────────────────────────────── */

export const useCollections = () => {
    return useQuery({
        queryKey: ['collections'],
        queryFn: collectionsApi.getCollections,
    });
};

export const useCollectionDetails = (id: string) => {
    return useQuery({
        queryKey: ['collections', 'details', id],
        queryFn: () => collectionsApi.getCollectionDetails(id),
        enabled: !!id,
    });
};

export const useCreateCollection = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: collectionsApi.createCollection,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['collections'] });
        },
    });
};

export const useAddRecipeToCollection = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({ collectionId, recipeId }: { collectionId: string, recipeId: string | number }) =>
            collectionsApi.addRecipeToCollection(collectionId, recipeId),
        onSuccess: (_, variables) => {
            queryClient.invalidateQueries({ queryKey: ['collections'] });
            queryClient.invalidateQueries({ queryKey: ['collections', 'details', variables.collectionId] });
        },
    });
};
