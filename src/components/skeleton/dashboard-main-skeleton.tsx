// components/skeleton/dashboard-skeleton.tsx
import React from 'react';
import { Skeleton } from "@/components/ui/skeleton";

export const SkeletonSidebar = () => (
    <aside className="w-64 bg-gray-100 p-4 border-r">
        <div className="space-y-4">
            <Skeleton className="h-10 w-full rounded" />
            <Skeleton className="h-8 w-3/4 rounded" />
            <Skeleton className="h-8 w-2/3 rounded" />
            <Skeleton className="h-8 w-1/2 rounded" />
        </div>
    </aside>
);

export const SkeletonMain = () => (
    <div className="space-y-6">
        <Skeleton className="h-8 w-1/2 rounded" />
        <Skeleton className="h-6 w-1/3 rounded" />
        <Skeleton className="h-64 w-full rounded" />
        <div className="grid grid-cols-3 gap-4">
            <Skeleton className="h-24 w-full rounded" />
            <Skeleton className="h-24 w-full rounded" />
            <Skeleton className="h-24 w-full rounded" />
        </div>
    </div>
);
