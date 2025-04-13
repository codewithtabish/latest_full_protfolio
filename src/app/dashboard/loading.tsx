// app/dashboard/loading.tsx

import { SkeletonMain, SkeletonSidebar } from "@/components/skeleton/dashboard-main-skeleton";

export default function Loading() {
    return (
        <div className="flex h-screen">
            <SkeletonSidebar />
            <main className="flex-1 p-6 overflow-auto">
                <SkeletonMain />
            </main>
        </div>
    );
}
