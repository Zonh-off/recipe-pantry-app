"use client";

import { useState } from "react";
import { Modal, AppInput, AppButton } from "@/shared/components/ui";
import { Plus } from "lucide-react";

interface AddIngredientModalProps {
    trigger?: React.ReactElement;
    onAdd: (name: string, amount: string, category: string) => void;
}

const CATEGORIES = ["Vegetables", "Fruits", "Spices", "Grains", "Dairy", "Meat", "Other"];

export function AddIngredientModal({ trigger, onAdd }: AddIngredientModalProps) {
    const [open, setOpen] = useState(false);
    const [name, setName] = useState("");
    const [amount, setAmount] = useState("");
    const [category, setCategory] = useState("Other");

    const handleAdd = () => {
        if (!name) return;
        onAdd(name, amount, category);
        setName("");
        setAmount("");
        setOpen(false);
    };

    return (
        <Modal
            open={open}
            onOpenChange={setOpen}
            title="Add Ingredient"
            description="Add a new item to your pantry."
            trigger={trigger || (
                <AppButton size="sm">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Item
                </AppButton>
            )}
            confirmLabel="Add to Pantry"
            onConfirm={handleAdd}
        >
            <div className="space-y-4">
                <AppInput
                    label="Ingredient Name"
                    placeholder="e.g. Tomato"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    autoFocus
                />
                <AppInput
                    label="Amount"
                    placeholder="e.g. 500g, 2 items"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                />
                <div className="space-y-1.5">
                    <label className="text-sm font-medium text-slate-700">Category</label>
                    <div className="flex flex-wrap gap-2">
                        {CATEGORIES.map((cat) => (
                            <button
                                key={cat}
                                type="button"
                                onClick={() => setCategory(cat)}
                                className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${category === cat
                                        ? "bg-green-600 text-white shadow-md shadow-green-600/20"
                                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </Modal>
    );
}
