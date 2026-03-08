import { IngredientChip } from "@/features/pantry/components/IngredientChip";
import { SectionHeader } from "@/shared/components/ui";

interface Ingredient {
    id: string | number;
    name: string;
    amount?: string;
    status?: "available" | "missing" | "neutral";
}

interface IngredientListProps {
    ingredients: Ingredient[];
    title?: string;
    showStatus?: boolean;
}

export function IngredientList({
    ingredients,
    title,
    showStatus = true,
}: IngredientListProps) {
    return (
        <div className="space-y-4">
            {title && <SectionHeader title={title} as="h3" className="mb-2" />}

            <div className="flex flex-wrap gap-2">
                {ingredients.map((ingredient) => (
                    <IngredientChip
                        key={ingredient.id}
                        name={ingredient.name}
                        amount={ingredient.amount}
                        status={showStatus ? ingredient.status : "neutral"}
                    />
                ))}
                {ingredients.length === 0 && (
                    <p className="text-sm text-slate-400 italic">No ingredients listed.</p>
                )}
            </div>
        </div>
    );
}
