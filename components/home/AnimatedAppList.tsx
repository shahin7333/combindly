"use client";

import { AnimatedList } from "@/components/ui/animated-list";
import { cn } from "@/lib/utils";

interface Item {
    name: string;
    description: string;
    icon: string;
    color: string;
    time: string;
}

let notifications = [
    {
        name: "Payment received",
        description: "Magic UI",
        time: "15m ago",

        icon: "💸",
        color: "#00C9A7",
    },
    {
        name: "User signed up",
        description: "Magic UI",
        time: "10m ago",
        icon: "👤",
        color: "#FFB800",
    },
    {
        name: "New message",
        description: "Magic UI",
        time: "5m ago",
        icon: "💬",
        color: "#FF3D71",
    },
    {
        name: "New event",
        description: "Magic UI",
        time: "2m ago",
        icon: "🗞️",
        color: "#1E86FF",
    },
];

notifications = Array.from({ length: 10 }, () => notifications).flat();

const Notification = ({ name, description, icon, color, time }: Item) => {
    return (
        <figure
            className={cn(
                "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4",
                // animation styles
                "transition-all duration-200 ease-in-out hover:scale-[103%]",
                // light styles
                "bg-white shadow dark:shadow-gray-700",
                // dark styles
                "transform-gpu dark:bg-transparent dark:backdrop-blur-md"
            )}
        >
            <div className="flex flex-row items-center gap-3">
                <div
                    className="flex size-10 items-center justify-center rounded-2xl"
                    style={{
                        backgroundColor: color,
                    }}
                >
                    <span className="text-lg">{icon}</span>
                </div>
                <div className="flex flex-col overflow-hidden">
                    <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white ">
                        <span className="text-sm sm:text-lg">{name}</span>
                        <span className="mx-1">·</span>
                        <span className="text-xs text-gray-500">{time}</span>
                    </figcaption>
                    <p className="text-sm font-normal dark:text-white/60">
                        {description}
                    </p>
                </div>
            </div>
        </figure>
    );
};

export function AnimatedAppList({ className }: { className?: string }) {
    return (
        <div
            className={cn("h-[110px] flex-col p-6 overflow-hidden", className)}
        >
            <AnimatedList>
                {notifications.map((item, idx) => (
                    <Notification {...item} key={idx} />
                ))}
            </AnimatedList>
        </div>
    );
}
