"use client";

import { CheckIcon } from "lucide-react";
import SectionHeader from "../common/SectionHeader";

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
}

export default function Price() {
    const tiers = [
        {
            name: "Advanced",
            id: "tier-advanced",
            href: "#",
            price: "$14.99",
            interval: "month",
            description:
                "The perfect plan if you're just getting started with our product.",
            features: [
                "Animated Add To Cart",
                "Sticky Add To Cart",
                "Countdown",
                "Sticky Buy Now",
                "Shipping Information",
                "Stock Scarcity",
                "Related Products",
                "Recently Viewed Products",
                "24/7 Lifetime Support",
                "Automated Updated Features",
            ],
            featured: true,
            customClass: "sm:px-10 sm:py-20",
        },
        {
            name: "Premium",
            id: "tier-premium",
            href: "#",
            price: "$149",
            interval: "year",
            description:
                "A plan that scales with your rapidly growing business.",
            features: [
                "Animated Add To Cart",
                "Sticky Add To Cart",
                "Countdown",
                "Sticky Buy Now",
                "Shipping Information",
                "Stock Scarcity",
                "Related Products",
                "Recently Viewed Products",
                "24/7 Lifetime Support",
                "Automated Updated Features",
            ],
            featured: false,
            customClass: "sm:p-10",
        },
    ];

    return (
        <div className="relative isolate bg-white dark:bg-black px-6 py-24 sm:py-32 lg:px-8 dark:mt-10">
            <div
                aria-hidden="true"
                className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl"
            >
                <div
                    style={{
                        clipPath:
                            "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                    }}
                    className="mx-auto aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
                />
            </div>
            <SectionHeader
                title="Choose the right plan for you"
                description="Explore cost-effective pricing for Combindly: Tailored plans for all business sizes, offering maximum value with no hidden costs. Perfect for budget-friendly, efficient solutions."
            />
            <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2">
                {tiers.map((tier, tierIdx) => (
                    <div
                        key={tier.name}
                        className={classNames(
                            tier.featured
                                ? "relative bg-white dark:bg-[#021526] shadow-2xl"
                                : "bg-white/60 dark:bg-[#021526]/60 sm:mx-8 lg:mx-0",
                            tier.featured
                                ? ""
                                : tierIdx === 0
                                ? "rounded-t-3xl sm:rounded-b-none lg:rounded-bl-3xl lg:rounded-tr-none"
                                : "sm:rounded-t-none lg:rounded-bl-none lg:rounded-tr-3xl",
                            "rounded-3xl p-8 ring-1 ring-gray-900/10",
                            tier.customClass
                        )}
                    >
                        <h3
                            id={tier.id}
                            className="text-base/7 font-semibold text-indigo-600 "
                        >
                            {tier.name}
                        </h3>
                        <p className="mt-4 flex items-baseline gap-x-2">
                            <span className="text-5xl font-semibold tracking-tight text-gray-900 dark:text-white">
                                {tier.price}
                            </span>
                            <span className="text-base text-gray-500 dark:text-gray-300">
                                /{tier.interval}
                            </span>
                        </p>
                        <p className="mt-6 text-base/7 text-gray-600 dark:text-gray-300">
                            {tier.description}
                        </p>
                        <ul
                            role="list"
                            className="mt-8 space-y-3 text-sm/6 text-gray-600 dark:text-gray-300 sm:mt-10"
                        >
                            {tier.features.map((feature) => (
                                <li key={feature} className="flex gap-x-3">
                                    <CheckIcon
                                        aria-hidden="true"
                                        className="h-6 w-5 flex-none text-indigo-600"
                                    />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                        <a
                            href={tier.href}
                            aria-describedby={tier.id}
                            className={classNames(
                                tier.featured
                                    ? "bg-indigo-600 text-white shadow hover:bg-indigo-500"
                                    : "text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300",
                                "mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:mt-10"
                            )}
                        >
                            Get started today
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}
