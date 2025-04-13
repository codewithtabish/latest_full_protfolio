// loading.tsx
import { Skeleton } from "@/components/ui/skeleton";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { BlurFade } from "@/components/magicui/blur-fade";
import { HackathonCard } from "@/components/hackathon-card";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";

const BLUR_FADE_DELAY = 0.04;

export default function Loading() {
    return (
        <main className="flex flex-col min-h-[100dvh] space-y-20 mt-28 relative">
            <section id="hero">
                <div className="mx-auto w-full max-w-2xl space-y-8">
                    <div className="gap-2 flex justify-between">
                        <div className="flex-col flex flex-1 space-y-1.5">
                            <Skeleton className="h-8 w-[200px]" />
                            <Skeleton className="h-6 w-[300px]" />
                        </div>
                        <Skeleton className="h-28 w-28 rounded-full" />
                    </div>
                </div>
            </section>
            <section id="about">
                <BlurFade delay={BLUR_FADE_DELAY * 3}>
                    <Skeleton className="h-6 w-[100px]" />
                </BlurFade>
                <BlurFade delay={BLUR_FADE_DELAY * 4}>
                    <Skeleton className="h-4 w-full max-w-[600px]" />
                </BlurFade>
            </section>
            <section id="work">
                <div className="flex min-h-0 flex-col gap-y-3">
                    <BlurFade delay={BLUR_FADE_DELAY * 5}>
                        <Skeleton className="h-6 w-[200px]" />
                    </BlurFade>
                    <div className="space-y-3">
                        {Array(3)
                            .fill("")
                            .map((_, index) => (
                                <BlurFade
                                    key={index}
                                    delay={BLUR_FADE_DELAY * 6 + index * 0.05}
                                >
                                    <ResumeCard
                                        key={index}
                                        logoUrl=""
                                        altText="Loading..."
                                        title="Loading..."
                                        subtitle="Loading..."
                                        href="#"
                                        // badges={[<Badge key={index}>Loading...</Badge>]}
                                        period="Loading..."
                                        description="Loading..."
                                    />
                                </BlurFade>
                            ))}
                    </div>
                </div>
            </section>
            <section id="education">
                <div className="flex min-h-0 flex-col gap-y-3">
                    <BlurFade delay={BLUR_FADE_DELAY * 7}>
                        <Skeleton className="h-6 w-[200px]" />
                    </BlurFade>
                    <div className="space-y-3">
                        {Array(3)
                            .fill("")
                            .map((_, index) => (
                                <BlurFade
                                    key={index}
                                    delay={BLUR_FADE_DELAY * 8 + index * 0.05}
                                >
                                    <ResumeCard
                                        key={index}
                                        href="#"
                                        logoUrl=""
                                        altText="Loading..."
                                        title="Loading..."
                                        subtitle="Loading..."
                                        period="Loading..."
                                    />
                                </BlurFade>
                            ))}
                    </div>
                </div>
            </section>
            <section id="skills">
                <div className="flex min-h-0 flex-col gap-y-3">
                    <BlurFade delay={BLUR_FADE_DELAY * 9}>
                        <Skeleton className="h-6 w-[100px]" />
                    </BlurFade>
                    <div className="flex flex-wrap gap-1">
                        {Array(5)
                            .fill("")
                            .map((_, index) => (
                                <BlurFade
                                    key={index}
                                    delay={BLUR_FADE_DELAY * 10 + index * 0.05}
                                >
                                    <Badge key={index}>
                                        <Skeleton className="h-4 w-[100px]" />
                                    </Badge>
                                </BlurFade>
                            ))}
                    </div>
                </div>
            </section>
            <section className="flex flex-wrap gap-1 md:mt-18 mt-8">
                <BlurFade delay={BLUR_FADE_DELAY * 9}>
                    <Skeleton className="h-6 w-[200px]" />
                </BlurFade>
                <div className="space-y-4">
                    {Array(3)
                        .fill("")
                        .map((_, index) => (
                            <Skeleton key={index} className="h-56 w-full rounded-md" />
                        ))}
                </div>
            </section>
            <section className="flex flex-wrap gap-1 md:mt-18 mt-8">
                <BlurFade delay={BLUR_FADE_DELAY * 9}>
                    <Skeleton className="h-6 w-[200px]" />
                </BlurFade>
                <div className="space-y-4">
                    {Array(3)
                        .fill("")
                        .map((_, index) => (
                            <Skeleton key={index} className="h-16 w-full rounded-md" />
                        ))}
                </div>
            </section>
            <section id="projects">
                <div className="space-y-12 w-full py-12">
                    <BlurFade delay={BLUR_FADE_DELAY * 11}>
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <Skeleton className="h-6 w-[200px]" />
                            <Skeleton className="h-8 w-[300px]" />
                        </div>
                    </BlurFade>
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
                        {Array(4)
                            .fill("")
                            .map((_, index) => (
                                <BlurFade
                                    key={index}
                                    delay={BLUR_FADE_DELAY * 12 + index * 0.05}
                                >
                                    <ProjectCard
                                        key={index}
                                        href="#"
                                        title="Loading..."
                                        description="Loading..."
                                        dates="Loading..."
                                        tags={["Loading..."]}
                                        image=""
                                        video=""
                                        links={[]}
                                    />
                                </BlurFade>
                            ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
