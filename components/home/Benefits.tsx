"use client";

import img3 from "@/app/assets/3.png";
import img4 from "@/app/assets/4.png";
import img5 from "@/app/assets/5.png";
import img6 from "@/app/assets/6.png";
import img7 from "@/app/assets/7.png";
import { appList } from "@/app/assets/data";
import Image from "next/image";
import { useState } from "react";

const cards = [
    {
        id: 3,
        src: img3,
        label: "Advanced CountDown",
        description:
            "Adds urgency to your deals, making every moment a must-buy opportunity.",
    },
    {
        id: 7,
        src: img7,
        label: "Shipping Information",
        description:
            "Navigate hassle-free deliveries – your go-to for clear and reliable shipping details!",
    },
    {
        id: 5,
        src: img5,
        label: "Stock Scarcity",
        description:
            "Keeps you informed and boosts urgency for items running low.",
    },
    {
        id: 4,
        src: img4,
        label: "Animated Add to Cart",
        description:
            "Bring your products to life – where every click becomes a delightful experience.",
    },
    {
        id: 1,
        src: img4,
        label: "Sticky Add to Cart",
        description:
            "Ensures your cart is always at your fingertips, ready for a seamless checkout experience!",
    },
    {
        id: 2,
        src: img4,
        label: "Sticky Buy Now",
        description:
            "Instant satisfaction at your fingertips – for a seamless and swift checkout experience.",
    },

    {
        id: 6,
        src: img6,
        label: "Recently Viewed Products",
        description:
            "Your browsing history at your fingertips to rediscover favorites.",
    },
    {
        id: 8,
        src: img6,
        label: "Related Products",
        description: "Discover more you'll love – meet your perfect match.",
    },
];

function Benefits() {
    const [selectedApp, setSelectedApp] = useState(1);
    return (
        <div className="max-w-[1440px] mx-auto px-4 lg:px-16 font-axiforma py-10 md:py-20">
            <div className="max-w-[1200px] mx-auto">
                <div className="text-[24px] md:text-[41px] text-[#24223E] dark:text-white font-extrabold line-clamp-2 gradient-text">
                    Save $50 Monthly with just one app
                </div>

                <p className="text-md md:text-[19px] text-[#24223E] dark:text-white mt-2 max-w-[1200px]">
                    Before Combindly, Shopify Store owners needed to download 8
                    apps ranging from $5 a month, to $15+ dollars a month to
                    achieve the same results that you can achieve by downloading
                    Combindely.This was costing store owners $50’s each and
                    every month! Save $50’s and only pay $14.99 monthly by
                    downloading Combindly Today!
                </p>
            </div>
            <div className="grid grid-cols-4  gap-4 my-4 md:mt-8 md:mb-4 max-w-[1200px] mx-auto">
                {appList.map((app, index) => (
                    <div
                        key={index}
                        className={`flex items-center shadow rounded-xl px-4 py-2 gap-4 cursor-pointer ${
                            selectedApp === app?.id
                                ? "gradient-bg text-white"
                                : ""
                        }`}
                        onClick={() => setSelectedApp(app?.id)}
                    >
                        <div className="h-[30px] w-[30px] flex justify-center items-center rounded-full group-hover:bg-white ">
                            <img
                                className={`h-full w-full rounded-full object-cover animate__animated animate__1 ${app?.imageAnimation}`}
                                src={app?.imageURL}
                                alt={app?.alt}
                                loading="lazy"
                            />
                        </div>
                        <div
                            className={` font-bold tracking-wide text-lg font-axiforma truncate ${
                                selectedApp === app?.id
                                    ? "text-white"
                                    : "text-[#24223E] dark:text-white"
                            }`}
                        >
                            {app?.name}
                        </div>
                    </div>
                ))}
            </div>
            {selectedApp && (
                <div className="flex items-center justify-start gap-10 mt-10 max-w-[1200px] mx-auto">
                    <div className="rounded-xl shadow">
                        <Image
                            src={cards[selectedApp]?.src}
                            alt={cards[selectedApp]?.label}
                            width={600}
                            height={300}
                            className="w-full h-full object-fit rounded-lg"
                        />
                    </div>
                </div>
            )}
        </div>
    );
}

export default Benefits;
