"use client";

import img1 from "@/app/assets/1.png";
import img3 from "@/app/assets/3.png";
import img4 from "@/app/assets/4.png";
import img5 from "@/app/assets/5.png";
import img6 from "@/app/assets/6.png";
import img7 from "@/app/assets/7.png";
import { AnimatedList } from "@/components/ui/animated-list";
import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";

interface Item {
    src: string | StaticImageData;
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
        src: img1,
        label: "Advanced CountDown",
        description:
            "Adds urgency to your deals, making every moment a must-buy opportunity.",
    },
    {
        id: 2,
        src: img1,
        label: "Animated add to cart",
        description:
            "Bring your products to life – where every click becomes a delightful experience.",
    },
    {
        id: 3,
        src: img3,
        label: "Sticky Add to Cart",
        description:
            "Ensures your cart is always at your fingertips, ready for a seamless checkout experience!",
    },
    {
        id: 4,
        src: img4,
        label: "Sticky Buy Now",
        description:
            "Instant satisfaction at your fingertips – for a seamless and swift checkout experience.",
    },
    {
        id: 5,
        src: img5,
        label: "Shipping Information",
        description:
            "Navigate hassle-free deliveries – your go-to for clear and reliable shipping details!",
    },
    {
        id: 6,
        src: img6,
        label: "Stock Scarcity",
        description:
            "Keeps you informed and boosts urgency for items running low.",
    },
    {
        id: 7,
        src: img7,
        label: "Related Products",
        description: "Discover more you'll love – meet your perfect match.",
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
                <Image
                    src={src}
                    alt={label}
                    width={800}
                    height={400}
                    className="w-full h-full object-fit rounded-lg"
                />
            </div>
        </figure>
    );
};

export function BannerList({ className }: { className?: string }) {
    return (
        <div className={cn("overflow-hidden", className)}>
            <AnimatedList className={className}>
                {cards?.map((item, idx) => (
                    <BannerImage {...item} key={idx} />
                ))}
            </AnimatedList>
        </div>
    );
}
