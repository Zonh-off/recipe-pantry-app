"use client";

import { useState } from "react";
import {
    Modal,
    AppButton,
    AppInput
} from "@/shared/components/ui";
import { Plus, FolderPlus, Folder, Check, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import {
    useCollections,
    useAddRecipeToCollection,
    useCreateCollection
} from "@/features/collections/api/collections";

interface AddToCollectionModalProps {
    recipeId: string | number;
    trigger?: React.ReactElement;
    onAdd?: (collectionId: string) => void;
}

export function AddToCollectionModal({
    recipeId,
    trigger,
    onAdd
}: AddToCollectionModalProps) {
    const [open, setOpen] = useState(false);
    const [selectedId, setSelectedId] = useState<string | null>(null);
    const [isCreating, setIsCreating] = useState(false);
    const [newCollectionName, setNewCollectionName] = useState("");

    const { data: collections = [], isLoading } = useCollections();
    const { mutateAsync: addRecipe, isPending: isAdding } = useAddRecipeToCollection();
    const { mutateAsync: createCollection, isPending: isCreatingCollection } = useCreateCollection();

    const isSubmitting = isAdding || isCreatingCollection;

    const handleConfirm = async () => {
        if (!selectedId && (!isCreating || !newCollectionName.trim())) return;

        try {
            let targetCollectionId = selectedId;

            if (isCreating && newCollectionName.trim()) {
                const newColl = await createCollection({ name: newCollectionName.trim() });
                targetCollectionId = newColl.id;
            }

            if (targetCollectionId) {
                await addRecipe({ collectionId: targetCollectionId, recipeId });
                if (onAdd) onAdd(targetCollectionId);
            }

            setOpen(false);
            resetState();
        } catch (error) {
            console.error("Failed to add to collection", error);
            // Optionally set an error state here
        }
    };

    const resetState = () => {
        setSelectedId(null);
        setIsCreating(false);
        setNewCollectionName("");
    };

    return (
        <Modal
            open={open}
            onOpenChange={(isOpen) => {
                setOpen(isOpen);
                if (!isOpen) resetState();
            }}
            title="Save to Collection"
            description="Choose a collection to save this recipe to."
            trigger={trigger || (
                <AppButton size="sm">
                    <Plus className="h-4 w-4 mr-2" />
                    Save to Collection
                </AppButton>
            )}
            confirmLabel={isSubmitting ? "Saving..." : isCreating ? "Create & Save" : "Add to Collection"}
            onConfirm={handleConfirm}
            confirmDisabled={isSubmitting || (!selectedId && (!isCreating || !newCollectionName.trim()))}
        >
            <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                {isLoading ? (
                    <div className="py-8 flex justify-center">
                        <Loader2 className="h-6 w-6 animate-spin text-green-600" />
                    </div>
                ) : (
                    <>
                        {!isCreating && collections.map((collection) => (
                            <button
                                key={collection.id}
                                onClick={() => setSelectedId(collection.id)}
                                disabled={isSubmitting}
                                className={cn(
                                    "w-full flex items-center justify-between p-4 rounded-2xl border transition-all text-left",
                                    selectedId === collection.id
                                        ? "bg-green-50 border-green-200 ring-1 ring-green-200"
                                        : "bg-white border-slate-100 hover:border-slate-200 hover:bg-slate-50",
                                    isSubmitting && "opacity-50 cursor-not-allowed"
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

                        {isCreating ? (
                            <div className="p-4 rounded-2xl border border-green-200 bg-green-50/50 space-y-3">
                                <AppInput
                                    label="Collection Name"
                                    placeholder="e.g. Healthy Dinners"
                                    value={newCollectionName}
                                    onChange={(e) => setNewCollectionName(e.target.value)}
                                    autoFocus
                                    disabled={isSubmitting}
                                />
                                <div className="flex gap-2">
                                    <AppButton
                                        variant="ghost"
                                        size="sm"
                                        className="text-slate-500 flex-1"
                                        onClick={() => {
                                            setIsCreating(false);
                                            setNewCollectionName("");
                                        }}
                                        disabled={isSubmitting}
                                    >
                                        Cancel
                                    </AppButton>
                                </div>
                            </div>
                        ) : (
                            <button
                                onClick={() => {
                                    setIsCreating(true);
                                    setSelectedId(null);
                                }}
                                disabled={isSubmitting}
                                className="w-full flex items-center gap-4 p-4 rounded-2xl border border-dashed border-slate-200 text-slate-500 hover:text-green-600 hover:border-green-300 hover:bg-green-50/50 transition-all text-left group disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                <div className="h-10 w-10 rounded-xl bg-slate-50 flex items-center justify-center group-hover:bg-green-100 group-hover:text-green-600 transition-colors">
                                    <FolderPlus className="h-5 w-5" />
                                </div>
                                <span className="font-bold text-sm">Create New Collection</span>
                            </button>
                        )}
                    </>
                )}
            </div>
        </Modal>
    );
}
