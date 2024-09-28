"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const AppListScollSlider = () => {
    return <HorizontalScrollCarousel />;
};

const HorizontalScrollCarousel = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 0.9], ["1%", "-82%"]);

    return (
        <section ref={targetRef} className="relative h-[300vh]">
            <div className="sticky top-0 left-0 flex h-screen items-center overflow-hidden">
                <motion.div style={{ x }} className="flex gap-20">
                    {cards.map((card, index) => {
                        return (
                            <Card
                                card={card}
                                key={card.id}
                                isLast={index === cards.length - 1}
                            />
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

const Card = ({ card, isLast }: { card: any; isLast: boolean }) => {
    return (
        <div
            className={`flex items-center gap-10 max-w-[1400px] mx-auto ${
                isLast ? "mr-[50vw]" : ""
            }`}
        >
            <div
                key={card.id}
                className="h-auto w-[1000px] overflow-hidden bg-gradient-to-r from-[#dbffe6] dark:from-[#280e49] via-[#f3ffcc] dark:via-[#F56028] pl-4 py-4 rounded-lg"
            >
                <div className="inset-0 z-10 grid place-content-center">
                    <img
                        src={card.src}
                        alt="Advanced CountDown Thumbnail"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
            <motion.div className="flex flex-col gap-4">
                <p className="text-6xl bg-clip-text text-transparent bg-gradient-to-r from-[#2856cb]  via-[#F56028] to-[#FAA22B] uppercase font-semibold max-w-[400px] break-words hyphens-auto">
                    {card.label}
                </p>
                <p className="text-xl font-medium text-gray-600 dark:text-gray-400">
                    {card.description}
                </p>
            </motion.div>
        </div>
    );
};

export default AppListScollSlider;

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
