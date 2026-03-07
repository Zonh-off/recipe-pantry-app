import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";

interface LoadingSkeletonProps {
    className?: string;
    variant?: "card" | "list-item" | "text" | "image";
}

export function LoadingSkeleton({ className, variant = "text" }: LoadingSkeletonProps) {
    if (variant === "card") {
        return (
            <div className={cn("card-surface p-0 flex flex-col gap-0 overflow-hidden", className)}>
                <Skeleton className="aspect-video w-full rounded-none" />
                <div className="p-5 space-y-3">
                    <Skeleton className="h-5 w-2/3" />
                    <div className="flex gap-2">
                        <Skeleton className="h-4 w-16 rounded-full" />
                        <Skeleton className="h-4 w-16 rounded-full" />
                    </div>
                </div>
            </div>
        );
    }

    if (variant === "list-item") {
        return (
            <div className={cn("flex items-center gap-4 p-4 card-surface", className)}>
                <Skeleton className="h-12 w-12 rounded-xl" />
                <div className="flex-1 space-y-2">
                    <Skeleton className="h-4 w-1/3" />
                    <Skeleton className="h-3 w-1/4" />
                </div>
            </div>
        );
    }

    if (variant === "image") {
        return <Skeleton className={cn("w-full h-full rounded-2xl", className)} />;
    }

    return <Skeleton className={cn("h-4 w-full rounded-md", className)} />;
}
