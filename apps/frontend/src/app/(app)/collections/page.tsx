"use client";

import {
    PageContainer,
} from "@/shared/components/ui";
import {
    CollectionGrid,
    CollectionCard,
    CreateCollectionModal
} from "@/features/collections/components";
import { Plus } from "lucide-react";
import { useCollections } from "@/features/collections/api/collections";

export default function CollectionsPage() {
    const { data: collections = [], isLoading } = useCollections();

    return (
        <PageContainer
            title="My Collections"
            subtitle="Organize your favorite recipes into custom folders."
            action={<CreateCollectionModal />}
        >
            <div className="space-y-8">

                {isLoading ? (
                    <div className="py-20 text-center text-slate-400 font-medium">
                        Fetching your collections...
                    </div>
                ) : (
                    <CollectionGrid>
                        {collections.map((collection) => (
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
            </div>
        </PageContainer>
    );
}
