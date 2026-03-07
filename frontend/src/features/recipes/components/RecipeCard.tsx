import Link from "next/link";
import { Clock, Users, Flame } from "lucide-react";
import { cn } from "@/lib/utils";
import {
    AppCard,
    AppCardContent,
    AppCardFooter,
    AppBadge,
} from "@/shared/components/ui";

interface RecipeCardProps {
    id: string;
    title: string;
    image: string;
    readyInMinutes: number;
    servings: number;
    calories?: number;
    matchPercentage?: number;
    missedIngredientCount?: number;
    className?: string;
}

export function RecipeCard({
    id,
    title,
    image,
    readyInMinutes,
    servings,
    calories,
    matchPercentage,
    missedIngredientCount,
    className,
}: RecipeCardProps) {
    const showMatch = matchPercentage !== undefined;

    return (
        <Link href={`/recipes/${id}`} className="group block h-full">
            <AppCard className={cn("h-full border-none shadow-sm hover:shadow-md transition-all", className)}>
                {/* Image Section */}
                <div className="relative aspect-video overflow-hidden rounded-t-2xl">
                    <img
                        src={image}
                        alt={title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Match Badge */}
                    {showMatch && (
                        <div className="absolute top-3 left-3">
                            <AppBadge variant="primary" className="bg-green-600/90 backdrop-blur-sm">
                                {matchPercentage}% Match
                            </AppBadge>
                        </div>
                    )}

                    {/* Missed Ingredients Badge */}
                    {missedIngredientCount !== undefined && missedIngredientCount > 0 && (
                        <div className="absolute top-3 right-3">
                            <AppBadge variant="warning" className="bg-amber-500/90 text-white backdrop-blur-sm border-none">
                                {missedIngredientCount} missing
                            </AppBadge>
                        </div>
                    )}
                </div>

                {/* Content Section */}
                <AppCardContent className="p-4 space-y-3">
                    <h3 className="font-semibold text-slate-900 leading-snug group-hover:text-green-600 transition-colors line-clamp-2 min-h-[2.5rem]">
                        {title}
                    </h3>

                    <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-slate-500 font-medium">
                        <div className="flex items-center gap-1.25">
                            <Clock className="h-3.5 w-3.5 text-slate-400" />
                            <span>{readyInMinutes}m</span>
                        </div>
                        <div className="flex items-center gap-1.25">
                            <Users className="h-3.5 w-3.5 text-slate-400" />
                            <span>{servings} serving{servings !== 1 ? 's' : ''}</span>
                        </div>
                        {calories && (
                            <div className="flex items-center gap-1.25">
                                <Flame className="h-3.5 w-3.5 text-slate-400" />
                                <span>{calories} kcal</span>
                            </div>
                        )}
                    </div>
                </AppCardContent>

                <AppCardFooter className="px-4 py-3 bg-slate-50/50 border-t border-slate-100 mt-auto">
                    <span className="text-xs font-semibold text-green-600 uppercase tracking-wider group-hover:underline">
                        View Recipe →
                    </span>
                </AppCardFooter>
            </AppCard>
        </Link>
    );
}
