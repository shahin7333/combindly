"use client";

import ATCBannerWhite from "@/app/assets/atc_white_banner.png";
import { motion, useAnimationControls } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function HeroThumbnailSlider() {
    const [width, setWidth] = useState(0);
    const controls = useAnimationControls();
    const images = [
        {
            src: "https://shopify-apps-images.s3.amazonaws.com/combindly-conversion-boosters/Advanced+CountDown+Thumbnail.jpg",
            label: "Advanced CountDown",
        },
        {
            src: "https://shopify-apps-images.s3.amazonaws.com/combindly-conversion-boosters/Animated+add+to+cart.jpg",
            label: "Animated add to cart",
        },
        {
            src: "https://shopify-apps-images.s3.amazonaws.com/combindly-conversion-boosters/Sticky+Add+to+Cart+Thumbnail+for+shopify.jpg",
            label: "Sticky Add to Cart Thumbnail for shopify",
        },
        {
            src: "https://shopify-apps-images.s3.amazonaws.com/combindly-conversion-boosters/Sticky+Buy+Now+Thumbnail+image.jpg",
            label: "Sticky Buy Now Thumbnail image",
        },
        {
            src: "https://shopify-apps-images.s3.amazonaws.com/combindly-conversion-boosters/Shipping+Information.jpg",
            label: "Shipping Information",
        },
        {
            src: "https://shopify-apps-images.s3.amazonaws.com/combindly-conversion-boosters/Stock+Scarcity+Thumbnail.jpg",
            label: "Stock Scarcity Thumbnail",
        },
        {
            src: "https://shopify-apps-images.s3.amazonaws.com/combindly-conversion-boosters/Related+Products.jpg",
            label: "Related Products",
        },
        {
            src: "https://shopify-apps-images.s3.amazonaws.com/combindly-conversion-boosters/Recently+Viwed+Products+Thumbnail.jpg",
            label: "Recently Viwed Products Thumbnail",
        },
    ];

    useEffect(() => {
        const updateWidth = () => {
            setWidth(window.innerWidth);
        };
        updateWidth();
        window.addEventListener("resize", updateWidth);
        return () => window.removeEventListener("resize", updateWidth);
    }, []);

    useEffect(() => {
        if (width > 0) {
            controls.start({
                x: [-width / 2, -width],
                transition: {
                    x: {
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 15,
                        ease: "linear",
                    },
                },
            });
        }
    }, [width, controls]);

    return (
        <motion.div
            className="overflow-hidden pt-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 1.2 }}
            variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                        duration: 0.7,
                        ease: [0.48, 0.15, 0.25, 0.96],
                        delay: 1.2,
                    },
                },
            }}
        >
            <motion.div
                className="flex gap-20"
                animate={controls}
                transition={{ duration: 0.5, delay: 1.4 }}
            >
                {images.map((image, index) => (
                    <div key={index} className="flex-shrink-0 mx-1 ">
                        <Image
                            src={ATCBannerWhite}
                            alt={image.label}
                            width="400"
                            height="300"
                            className="w-full h-full rounded-lg shadow-[41px_-3px_64px_50px_rgba(140,_0,_255,_0.15)] "
                        />
                    </div>
                ))}
            </motion.div>
        </motion.div>
    );
}
