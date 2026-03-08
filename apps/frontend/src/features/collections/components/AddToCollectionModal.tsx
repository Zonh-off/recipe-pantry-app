"use client";

import { useState } from "react";
import {
    Modal,
    AppButton,
    AppCardTitle,
    AppCardDescription,
    SectionHeader
} from "@/shared/components/ui";
import { Plus, FolderPlus, Folder, Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface AddToCollectionModalProps {
    recipeId: string | number;
    trigger?: React.ReactElement;
    onAdd?: (collectionId: string) => void;
}

const MOCK_COLLECTIONS = [
    { id: "1", name: "Quick Dinners", recipeCount: 12 },
    { id: "2", name: "Healthy Lunch", recipeCount: 5 },
    { id: "3", name: "Vegetarian Favorites", recipeCount: 8 },
    { id: "4", name: "Desserts to Try", recipeCount: 3 },
];

export function AddToCollectionModal({
    recipeId,
    trigger,
    onAdd
}: AddToCollectionModalProps) {
    const [open, setOpen] = useState(false);
    const [selectedId, setSelectedId] = useState<string | null>(null);

    const handleConfirm = () => {
        if (selectedId && onAdd) {
            onAdd(selectedId);
            setOpen(false);
        }
    };

    return (
        <Modal
            open={open}
            onOpenChange={setOpen}
            title="Save to Collection"
            description="Choose a collection to save this recipe to."
            trigger={trigger || (
                <AppButton size="sm">
                    <Plus className="h-4 w-4 mr-2" />
                    Save to Collection
                </AppButton>
            )}
            confirmLabel="Add to Collection"
            onConfirm={handleConfirm}
            confirmDisabled={!selectedId}
        >
            <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                {MOCK_COLLECTIONS.map((collection) => (
                    <button
                        key={collection.id}
                        onClick={() => setSelectedId(collection.id)}
                        className={cn(
                            "w-full flex items-center justify-between p-4 rounded-2xl border transition-all text-left",
                            selectedId === collection.id
                                ? "bg-green-50 border-green-200 ring-1 ring-green-200"
                                : "bg-white border-slate-100 hover:border-slate-200 hover:bg-slate-50"
                        )}
                    >
                        <div className="flex items-center gap-4">
                            <div className={cn(
                                "h-10 w-10 rounded-xl flex items-center justify-center transition-colors",
                                selectedId === collection.id ? "bg-green-100 text-green-600" : "bg-slate-100 text-slate-500"
                            )}>
                                <Folder className="h-5 w-5" />
                            </div>
                            <div>
                                <h4 className={cn(
                                    "font-bold text-sm",
                                    selectedId === collection.id ? "text-green-900" : "text-slate-900"
                                )}>
                                    {collection.name}
                                </h4>
                                <p className="text-xs text-slate-500">
                                    {collection.recipeCount} recipes
                                </p>
                            </div>
                        </div>
                        {selectedId === collection.id && (
                            <div className="bg-green-600 text-white rounded-full p-1 shadow-sm">
                                <Check className="h-3 w-3" />
                            </div>
                        )}
                    </button>
                ))}

                <button className="w-full flex items-center gap-4 p-4 rounded-2xl border border-dashed border-slate-200 text-slate-500 hover:text-green-600 hover:border-green-300 hover:bg-green-50/50 transition-all text-left group">
                    <div className="h-10 w-10 rounded-xl bg-slate-50 flex items-center justify-center group-hover:bg-green-100 group-hover:text-green-600 transition-colors">
                        <FolderPlus className="h-5 w-5" />
                    </div>
                    <span className="font-bold text-sm">Create New Collection</span>
                </button>
            </div>
        </Modal>
    );
}
