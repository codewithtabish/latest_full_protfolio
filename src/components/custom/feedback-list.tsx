import { cn } from "@/lib/utils";
import { Marquee } from "../magicui/marquee";
import Image from "next/image";

const reviews = [
    {
        name: "Jack",
        username: "@jack",
        position: "Software Engineer",
        body: "I've never seen anything like this before. The design is sleek, and the functionality is top-notch. Absolutely love it!",
        img: "https://avatar.iran.liara.run/public/boy",
    },
    {
        name: "Jill",
        username: "@jill",
        position: "Product Manager",
        body: "I don't know what to say. The user experience is smooth, and everything feels well thought out. This is just amazing.",
        img: "https://avatar.iran.liara.run/public/girl",
    },
    {
        name: "John",
        username: "@john",
        position: "UI/UX Designer",
        body: "The attention to detail here is incredible. Every animation, layout, and interaction is fluid and engaging. Well done!",
        img: "https://avatar.iran.liara.run/public/boy",
    },
    {
        name: "Samantha",
        username: "@samantha",
        position: "Mobile Developer",
        body: "The responsiveness and design are perfect! Works flawlessly on every device I’ve tested. Great job!",
        img: "https://avatar.iran.liara.run/public/girl",
    },
    {
        name: "Alex",
        username: "@alex",
        position: "Full-Stack Developer",
        body: "A truly polished and well-built product. The performance and scalability are impressive. Excited to see more!",
        img: "https://avatar.iran.liara.run/public/boy",
    },
    {
        name: "Emily",
        username: "@emily",
        position: "Marketing Specialist",
        body: "As a non-technical user, I found the interface incredibly intuitive. It’s easy to navigate and visually appealing!",
        img: "https://avatar.iran.liara.run/public/girl",
    },
    {
        name: "Michael",
        username: "@michael",
        position: "DevOps Engineer",
        body: "The backend architecture is solid. Fast load times and minimal latency even under heavy traffic. Very impressed!",
        img: "https://avatar.iran.liara.run/public/boy",
    },
    {
        name: "Sophia",
        username: "@sophia",
        position: "Data Scientist",
        body: "The AI-driven features are impressive! It's clear that a lot of thought went into optimizing performance and accuracy.",
        img: "https://avatar.iran.liara.run/public/girl",
    },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
    img,
    name,
    username,
    position,
    body,
}: {
    img: string;
    name: string;
    username: string;
    position: string;
    body: string;
}) => {
    return (
        <figure
            className={cn(
                "relative h-full md:w-42 cursor-pointer overflow-hidden rounded-xl border p-4",
                "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
                "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
            )}
        >
            <div className="flex flex-row items-center gap-2">
                <Image className="rounded-full" width={32} height={32} alt={name} src={img} />
                <div className="flex flex-col">
                    <figcaption className="text-sm font-medium dark:text-white">{name}</figcaption>
                    <p className="text-xs font-medium dark:text-white/40">{username}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{position}</p>
                </div>
            </div>
            <blockquote className="mt-2 text-sm">{body}</blockquote>
        </figure>
    );
};

export default function FeedbackListData() {
    return (
        <div className="relative flex h-[500px] w-full flex-row items-center justify-center overflow-hidden">
            <Marquee pauseOnHover vertical className="[--duration:20s]">
                {firstRow.map((review) => (
                    <ReviewCard key={review.username} {...review} />
                ))}
            </Marquee>
            <Marquee reverse pauseOnHover vertical className="[--duration:20s]">
                {secondRow.map((review) => (
                    <ReviewCard key={review.username} {...review} />
                ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-background"></div>
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background"></div>
        </div>
    );
}
