"use client";

import { Check, X } from "lucide-react";
import { Chip, ChipColor } from "@/shared/components/ui/Chip";
import { cn } from "@/lib/utils";

interface IngredientChipProps {
    name: string;
    status?: "available" | "missing" | "neutral";
    amount?: string;
    className?: string;
    interactive?: boolean;
    onClick?: () => void;
    onRemove?: () => void;
}

const STATUS_COLOR_MAP: Record<string, ChipColor> = {
    available: "green",
    missing: "rose",
    neutral: "slate",
};

export function IngredientChip({
    name,
    status = "neutral",
    amount,
    className,
    interactive = false,
    onClick,
    onRemove,
}: IngredientChipProps) {
    const icon = status === "available" ? (
        <Check className="h-3 w-3" />
    ) : status === "missing" ? (
        <X className="h-3 w-3" />
    ) : undefined;

    return (
        <Chip
            color={STATUS_COLOR_MAP[status]}
            interactive={interactive}
            onClick={onClick}
            onRemove={onRemove}
            icon={icon}
            className={cn("capitalize", className)}
        >
            <span>{name}</span>
            {amount && (
                <span className="opacity-60 ml-1 font-normal">
                    ({amount})
                </span>
            )}
        </Chip>
    );
}
