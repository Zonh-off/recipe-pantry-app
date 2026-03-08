import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface RecipeGridProps {
    children: ReactNode;
    className?: string;
}

export function RecipeGrid({ children, className }: RecipeGridProps) {
    return (
        <div
            className={cn(
                "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6",
                className
            )}
        >
            {children}
        </div>
    );
}
