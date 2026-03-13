"use client";

import { useState, useEffect, useRef } from "react";
import { Modal, AppInput, AppButton } from "@/shared/components/ui";
import { Plus, Search, Check, Loader2 } from "lucide-react";
import { useIngredientSearch } from "@/features/recipes/api/recipes";
import { useClickAway } from "react-use";

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
    const [showSuggestions, setShowSuggestions] = useState(false);

    // Autocomplete hook
    const { data: suggestions = [], isLoading: isSearching } = useIngredientSearch(name);

    const dropdownRef = useRef<HTMLDivElement>(null);
    useClickAway(dropdownRef, () => setShowSuggestions(false));

    const handleAdd = () => {
        if (!name) return;
        // Allow numeric amount or default to 1 if user just wants the item
        onAdd(name, amount || 1, unit);
        setName("");
        setAmount(undefined);
        setOpen(false);
    };

    const handleSelectSuggestion = (suggestion: string) => {
        setName(suggestion);
        setShowSuggestions(false);
    };

    return (
        <Modal
            open={open}
            onOpenChange={setOpen}
            title="Add Ingredient"
            description="Add a new item to your pantry with correct spelling."
            trigger={trigger || (
                <AppButton size="sm">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Item
                </AppButton>
            )}
            confirmLabel="Add to Pantry"
            onConfirm={handleAdd}
            onCancel={() => {
                setName("");
                setAmount(undefined);
            }}
        >
            <div className="space-y-4 pb-4">
                <div className="relative" ref={dropdownRef}>
                    <AppInput
                        label="Ingredient Name"
                        placeholder="Search ingredients..."
                        value={name}
                        onChange={(e) => {
                            setName(e.target.value);
                            setShowSuggestions(true);
                        }}
                        onFocus={() => setShowSuggestions(true)}
                        autoFocus
                        icon={<Search className="h-4 w-4" />}
                        trailingElement={isSearching ? <Loader2 className="h-4 w-4 animate-spin text-slate-300" /> : null}
                    />

                    {showSuggestions && name.length >= 2 && (suggestions.length > 0 || isSearching) && (
                        <div className="absolute z-50 top-full left-0 right-0 mt-1 bg-white border border-slate-200 rounded-xl shadow-xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                            {isSearching && suggestions.length === 0 ? (
                                <div className="p-4 text-center text-xs text-slate-400">Searching...</div>
                            ) : (
                                <div className="max-h-48 overflow-y-auto">
                                    {suggestions.map((s, i) => (
                                        <button
                                            key={i}
                                            type="button"
                                            className="w-full px-4 py-2.5 text-left text-sm hover:bg-slate-50 flex items-center justify-between group transition-colors"
                                            onClick={() => handleSelectSuggestion(s)}
                                        >
                                            <span className="font-medium text-slate-700">{s}</span>
                                            <Check className="h-3 w-3 text-green-600 opacity-0 group-hover:opacity-100" />
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    )}
                </div>

                <AppInput
                    label="Amount"
                    placeholder="e.g. 500"
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
