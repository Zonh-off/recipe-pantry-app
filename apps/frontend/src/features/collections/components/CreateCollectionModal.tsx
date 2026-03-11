"use client";

import { useState } from "react";
import {
    Modal,
    AppButton,
    AppInput
} from "@/shared/components/ui";
import { Plus } from "lucide-react";
import { useCreateCollection } from "@/features/collections/api/collections";

interface CreateCollectionModalProps {
    trigger?: React.ReactElement;
    onSuccess?: (collectionId: string) => void;
}

export function CreateCollectionModal({ trigger, onSuccess }: CreateCollectionModalProps) {
    const [open, setOpen] = useState(false);
    const [name, setName] = useState("");

    const { mutateAsync: createCollection, isPending } = useCreateCollection();

    const handleConfirm = async () => {
        if (!name.trim()) return;

        try {
            const newColl = await createCollection({ name: name.trim() });
            setOpen(false);
            setName("");
            if (onSuccess) onSuccess(newColl.id);
        } catch (error) {
            console.error("Failed to create collection", error);
        }
    };

    return (
        <Modal
            open={open}
            onOpenChange={(isOpen) => {
                setOpen(isOpen);
                if (!isOpen) setName("");
            }}
            title="Create New Collection"
            description="Organize your recipes by grouping them together."
            trigger={trigger || (
                <AppButton size="sm">
                    <Plus className="h-4 w-4 mr-2" />
                    New Collection
                </AppButton>
            )}
            confirmLabel={isPending ? "Creating..." : "Create Collection"}
            onConfirm={handleConfirm}
            confirmDisabled={isPending || !name.trim()}
        >
            <div className="py-2">
                <AppInput
                    label="Collection Name"
                    placeholder="e.g. Grandma's Recipes"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    autoFocus
                    disabled={isPending}
                />
            </div>
        </Modal>
    );
}
