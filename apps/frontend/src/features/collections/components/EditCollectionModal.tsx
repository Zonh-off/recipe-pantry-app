"use client";

import { useState, useEffect } from "react";
import {
    Modal,
    AppButton,
    AppInput
} from "@/shared/components/ui";
import { Settings } from "lucide-react";
import { useUpdateCollection } from "@/features/collections/api/collections";

interface EditCollectionModalProps {
    collectionId: string;
    initialName: string;
    trigger?: React.ReactElement;
}

export function EditCollectionModal({ collectionId, initialName, trigger }: EditCollectionModalProps) {
    const [open, setOpen] = useState(false);
    const [name, setName] = useState(initialName);

    // Sync if initialName changes
    useEffect(() => {
        if (open) setName(initialName);
    }, [initialName, open]);

    const { mutateAsync: updateCollection, isPending } = useUpdateCollection();

    const handleConfirm = async () => {
        if (!name.trim() || name.trim() === initialName) {
            setOpen(false);
            return;
        }

        try {
            await updateCollection({ id: collectionId, name: name.trim() });
            setOpen(false);
        } catch (error) {
            console.error("Failed to update collection", error);
        }
    };

    return (
        <Modal
            open={open}
            onOpenChange={setOpen}
            title="Edit Collection"
            description="Rename your collection."
            trigger={trigger || (
                <AppButton variant="secondary" size="icon-sm">
                    <Settings className="h-4 w-4" />
                </AppButton>
            )}
            confirmLabel={isPending ? "Saving..." : "Save Changes"}
            onConfirm={handleConfirm}
            confirmDisabled={isPending || !name.trim() || name.trim() === initialName}
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
