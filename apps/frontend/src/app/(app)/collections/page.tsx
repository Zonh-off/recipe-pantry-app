"use client";

import {
    PageContainer,
    AppButton
} from "@/shared/components/ui";
import {
    CollectionGrid,
    CollectionCard,
    CreateCollectionModal
} from "@/features/collections/components";
import { Plus, Search } from "lucide-react";
import { AppInput } from "@/shared/components/ui/AppInput";
import { useState } from "react";
import { useCollections } from "@/features/collections/api/collections";

export default function CollectionsPage() {
    const { data: collections = [], isLoading } = useCollections();
    const [search, setSearch] = useState("");

    const filteredCollections = collections.filter(c =>
        c.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <PageContainer
            title="My Collections"
            subtitle="Organize your favorite recipes into custom folders."
            action={<CreateCollectionModal />}
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

                {isLoading ? (
                    <div className="py-20 text-center text-slate-400 font-medium">
                        Fetching your collections...
                    </div>
                ) : (
                    <CollectionGrid>
                        {filteredCollections.map((collection) => (
                            <CollectionCard key={collection.id} {...collection} />
                        ))}

                        {/* Create New placeholder */}
                        <CreateCollectionModal
                            trigger={
                                <button
                                    className="flex flex-col items-center justify-center p-8 rounded-2xl border-2 border-dashed border-slate-200 hover:border-green-300 hover:bg-green-50/50 transition-all group aspect-[1.5]"
                                >
                                    <div className="h-12 w-12 rounded-full bg-slate-50 flex items-center justify-center mb-4 group-hover:bg-green-100 group-hover:text-green-600 transition-colors">
                                        <Plus className="h-6 w-6" />
                                    </div>
                                    <span className="font-bold text-slate-600 group-hover:text-green-700">Create New Collection</span>
                                </button>
                            }
                        />
                    </CollectionGrid>
                )}

                {!isLoading && filteredCollections.length === 0 && search && (
                    <div className="py-20 text-center border border-dashed border-slate-200 rounded-3xl">
                        <p className="text-slate-500">No collections found matching your search.</p>
                    </div>
                )}
            </div>
        </PageContainer>
    );
}
