"use client";

import {
    PageContainer,
    SectionHeader,
    AppButton
} from "@/shared/components/ui";
import {
    CollectionGrid,
    CollectionCard
} from "@/features/collections/components";
import { Plus, Search } from "lucide-react";
import { AppInput } from "@/shared/components/ui/AppInput";
import { useState } from "react";

const MOCK_COLLECTIONS = [
    {
        id: "1",
        name: "Quick Weeknight Dinners",
        recipeCount: 12,
        thumbnails: [
            "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&q=80&w=200",
            "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&q=80&w=200",
            "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=200",
            "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=200",
        ],
    },
    {
        id: "2",
        name: "Healthy Lunch Ideas",
        recipeCount: 5,
        thumbnails: [
            "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=200",
            "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=200",
        ],
    },
    {
        id: "3",
        name: "Vegetarian Favorites",
        recipeCount: 8,
        thumbnails: [
            "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&q=80&w=200",
        ],
    },
    {
        id: "4",
        name: "Holiday Feast",
        recipeCount: 0,
        thumbnails: [],
    },
];

export default function CollectionsPage() {
    const [search, setSearch] = useState("");

    const filteredCollections = MOCK_COLLECTIONS.filter(c =>
        c.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <PageContainer
            title="My Collections"
            subtitle="Organize your favorite recipes into custom folders."
            action={
                <AppButton size="sm">
                    <Plus className="h-4 w-4 mr-1" />
                    New Collection
                </AppButton>
            }
        >
            <div className="space-y-8">
                {/* Search / Filter Bar */}
                <div className="max-w-md">
                    <AppInput
                        placeholder="Search collections..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        icon={<Search className="h-4 w-4 text-slate-400" />}
                        className="bg-white border-slate-200"
                    />
                </div>

                <CollectionGrid>
                    {filteredCollections.map((collection) => (
                        <CollectionCard key={collection.id} {...collection} />
                    ))}

                    {/* Empty / Create New placeholder */}
                    <button className="flex flex-col items-center justify-center p-8 rounded-2xl border-2 border-dashed border-slate-200 hover:border-green-300 hover:bg-green-50/50 transition-all group aspect-[1.2]">
                        <div className="h-12 w-12 rounded-full bg-slate-50 flex items-center justify-center mb-4 group-hover:bg-green-100 group-hover:text-green-600 transition-colors">
                            <Plus className="h-6 w-6" />
                        </div>
                        <span className="font-bold text-slate-600 group-hover:text-green-700">Create New Collection</span>
                    </button>
                </CollectionGrid>

                {filteredCollections.length === 0 && (
                    <div className="py-20 text-center border border-dashed border-slate-200 rounded-3xl">
                        <p className="text-slate-500">No collections found matching your search.</p>
                    </div>
                )}
            </div>
        </PageContainer>
    );
}
