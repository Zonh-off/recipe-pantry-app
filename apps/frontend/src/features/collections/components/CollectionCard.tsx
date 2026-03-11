import Link from "next/link";
import { FolderHeart, MoreVertical } from "lucide-react";
import { cn } from "@/lib/utils";
import {
    AppCard,
    AppCardContent,
    AppCardHeader,
    AppCardTitle,
    AppCardDescription,
} from "@/shared/components/ui";

interface CollectionCardProps {
    id: string;
    name: string;
    recipeCount: number;
    thumbnails?: string[];
    className?: string;
}

export function CollectionCard({
    id,
    name,
    recipeCount,
    thumbnails = [],
    className,
}: CollectionCardProps) {
    return (
        <Link href={`/collections/${id}`} className="group block">
            <AppCard className={cn("overflow-hidden hover:border-green-200 transition-colors", className)}>
                {/* Cover / Grid Layout */}
                <div className="aspect-[1.5] bg-slate-100 relative">
                    {thumbnails.length >= 3 ? (
                        <div className="grid grid-cols-2 grid-rows-2 h-full gap-0.5">
                            {thumbnails.slice(0, 3).map((img, i) => (
                                <img
                                    key={i}
                                    src={img}
                                    alt=""
                                    className={cn("w-full h-full object-cover", i === 0 ? "row-span-2" : "")}
                                />
                            ))}
                        </div>
                    ) : thumbnails.length > 0 ? (
                        <div className="flex h-full w-full gap-0.5">
                            {thumbnails.map((img, i) => (
                                <img
                                    key={i}
                                    src={img}
                                    alt=""
                                    className="h-full object-cover flex-1 min-w-0"
                                />
                            ))}
                        </div>
                    ) : (
                        <div className="flex items-center justify-center h-full text-slate-300">
                            <FolderHeart className="h-12 w-12" />
                        </div>
                    )}

                    <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors" />
                </div>

                <AppCardHeader className="p-4 pt-4 flex flex-row items-start justify-between space-y-0">
                    <div className="space-y-1">
                        <AppCardTitle className="group-hover:text-green-600 transition-colors">
                            {name}
                        </AppCardTitle>
                        <AppCardDescription>
                            {recipeCount} recipe{recipeCount !== 1 ? 's' : ''}
                        </AppCardDescription>
                    </div>
                    {name.toLowerCase() !== 'saved' && (
                        <button className="text-slate-400 hover:text-slate-600 p-1">
                            <MoreVertical className="h-4 w-4" />
                        </button>
                    )}
                </AppCardHeader>
            </AppCard>
        </Link>
    );
}
