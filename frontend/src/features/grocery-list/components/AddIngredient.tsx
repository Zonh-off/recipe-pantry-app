"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { AppInput, AppButton } from "@/shared/components/ui";

interface AddIngredientProps {
    onAdd: (name: string) => void;
}

export function AddIngredient({ onAdd }: AddIngredientProps) {
    const [name, setName] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (name.trim()) {
            onAdd(name.trim());
            setName("");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex gap-3">
            <AppInput
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Add item to list..."
                className="flex-1 bg-white shadow-sm border-slate-200"
            />
            <AppButton type="submit" disabled={!name.trim()} className="shadow-lg shadow-green-600/10">
                <Plus className="h-4 w-4 mr-2" />
                Add Item
            </AppButton>
        </form>
    );
}
