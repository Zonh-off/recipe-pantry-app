"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
    Modal,
    AppButton
} from "@/shared/components/ui";
import { Trash2 } from "lucide-react";
import { useRemoveCollection } from "@/features/collections/api/collections";

interface DeleteCollectionModalProps {
    collectionId: string;
    collectionName: string;
    trigger?: React.ReactElement;
}

export function DeleteCollectionModal({ collectionId, collectionName, trigger }: DeleteCollectionModalProps) {
    const [open, setOpen] = useState(false);
    const router = useRouter();

    const { mutateAsync: removeCollection, isPending } = useRemoveCollection();

    const handleConfirm = async () => {
        try {
            await removeCollection(collectionId);
            setOpen(false);
            router.push("/collections");
        } catch (error) {
            console.error("Failed to delete collection", error);
        }
    };

    return (
        <Modal
            open={open}
            onOpenChange={setOpen}
            title="Delete Collection"
            description={`Are you sure you want to delete "${collectionName}"? This action cannot be undone.`}
            trigger={trigger || (
                <AppButton variant="destructive" size="icon-sm">
                    <Trash2 className="h-4 w-4" />
                </AppButton>
            )}
            confirmLabel={isPending ? "Deleting..." : "Delete Collection"}
            onConfirm={handleConfirm}
            confirmDisabled={isPending}
            confirmVariant="destructive"
        >
            <div className="p-4 bg-rose-50 border border-rose-200 rounded-2xl">
                <p className="text-sm font-medium text-rose-800 leading-snug">
                    Deleting this collection will cancel any saved links to these recipes in this specific group. The recipes themselves won't be deleted.
                </p>
            </div>
        </Modal>
    );
}
