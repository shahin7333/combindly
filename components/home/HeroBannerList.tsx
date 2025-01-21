"use client";

import { AnimatedList } from "@/components/ui/animated-list";
import { cn } from "@/lib/utils";

interface Item {
    src: string;
    label: string;
    description: string;
}

// const images = [
//     {
//         id: 1,
//         src: ImageOne,
//         label: "Image One",
//     },
//     {
//         id: 2,
//         src: ImageTwo,
//         label: "Image Two",
//     },
//     {
//         id: 3,
//         src: ImageThree,
//         label: "Image Three",
//     },
//     {
//         id: 4,
//         src: ImageFour,
//         label: "Image Four",
//     },
//     {
//         id: 5,
//         src: ImageFive,
//         label: "Image Five",
//     },
//     {
//         id: 6,
//         src: ImageSix,
//         label: "Image Six",
//     },
//     {
//         id: 7,
//         src: ImageSeven,
//         label: "Image Seven",
//     },
// ];
const cards = [
    {
        id: 1,
        src: "https://shopify-apps-images.s3.amazonaws.com/combindly-conversion-boosters/Advanced+CountDown+Thumbnail.jpg",
        label: "Advanced CountDown",
        description:
            "Adds urgency to your deals, making every moment a must-buy opportunity.",
    },
    {
        id: 2,
        src: "https://shopify-apps-images.s3.amazonaws.com/combindly-conversion-boosters/Animated+add+to+cart.jpg",
        label: "Animated add to cart",
        description:
            "Bring your products to life – where every click becomes a delightful experience.",
    },
    {
        id: 3,
        src: "https://shopify-apps-images.s3.amazonaws.com/combindly-conversion-boosters/Sticky+Add+to+Cart+Thumbnail+for+shopify.jpg",
        label: "Sticky Add to Cart",
        description:
            "Ensures your cart is always at your fingertips, ready for a seamless checkout experience!",
    },
    {
        id: 4,
        src: "https://shopify-apps-images.s3.amazonaws.com/combindly-conversion-boosters/Sticky+Buy+Now+Thumbnail+image.jpg",
        label: "Sticky Buy Now",
        description:
            "Instant satisfaction at your fingertips – for a seamless and swift checkout experience.",
    },
    {
        id: 5,
        src: "https://shopify-apps-images.s3.amazonaws.com/combindly-conversion-boosters/Shipping+Information.jpg",
        label: "Shipping Information",
        description:
            "Navigate hassle-free deliveries – your go-to for clear and reliable shipping details!",
    },
    {
        id: 6,
        src: "https://shopify-apps-images.s3.amazonaws.com/combindly-conversion-boosters/Stock+Scarcity+Thumbnail.jpg",
        label: "Stock Scarcity",
        description:
            "Keeps you informed and boosts urgency for items running low.",
    },
    {
        id: 7,
        src: "https://shopify-apps-images.s3.amazonaws.com/combindly-conversion-boosters/Related+Products.jpg",
        label: "Related Products",
        description: "Discover more you'll love – meet your perfect match.",
    },
    {
        id: 8,
        src: "https://shopify-apps-images.s3.amazonaws.com/combindly-conversion-boosters/Recently+Viwed+Products+Thumbnail.jpg",
        label: "Recently Viwed Products",
        description:
            "Your browsing history at your fingertips to rediscover favorites.",
    },
];

const BannerImage = ({ src, label }: Item) => {
    return (
        <figure
            className={cn(
                "relative mx-auto min-h-fit w-full max-w-[800px] cursor-pointer overflow-hidden rounded-2xl",

                "transition-all duration-200 ease-in-out hover:scale-[103%]",

                "bg-white shadow dark:shadow-gray-700",

                "transform-gpu dark:bg-transparent dark:backdrop-blur-md"
            )}
        >
            <div className="flex flex-row items-center gap-3">
                <img
                    src={src}
                    alt={label}
                    className="w-full h-full object-fit rounded-lg"
                />
            </div>
        </figure>
    );
};

export function HeroBannerList({ className }: { className?: string }) {
    return (
        <div className={cn("h-[400px] overflow-hidden p-2", className)}>
            <AnimatedList>
                {cards?.map((item, idx) => (
                    <BannerImage {...item} key={idx} />
                ))}
            </AnimatedList>
        </div>
    );
}
