"use client";

import { useState } from "react";
import { Modal, AppInput, AppButton } from "@/shared/components/ui";
import { Plus } from "lucide-react";

interface AddIngredientModalProps {
    trigger?: React.ReactElement;
    onAdd: (name: string, amount: number, unit: string) => void;
}

const UNITS = ["g", "ml", "kg", "l", "item", "Other"];

export function AddIngredientModal({ trigger, onAdd }: AddIngredientModalProps) {
    const [open, setOpen] = useState(false);
    const [name, setName] = useState("");
    const [amount, setAmount] = useState<number | undefined>(undefined);
    const [unit, setUnit] = useState("Other");

    const handleAdd = () => {
        if (!name) return;
        if (!amount || amount <= 0) return;
        onAdd(name, amount, unit);
        setName("");
        setAmount(undefined);
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
                    type="number"
                    value={amount ?? ""}
                    onChange={(e) => setAmount(e.target.value ? +e.target.value : undefined)}
                />
                <div className="space-y-1.5">
                    <label className="text-sm font-medium text-slate-700">Unit</label>
                    <div className="flex flex-wrap gap-2 mt-1">
                        {UNITS.map((u) => (
                            <button
                                key={u}
                                type="button"
                                onClick={() => setUnit(u)}
                                className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${u === unit
                                    ? "bg-green-600 text-white shadow-md shadow-green-600/20"
                                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                                    }`}
                            >
                                {u}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </Modal>
    );
}
