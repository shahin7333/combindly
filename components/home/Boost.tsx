"use client";
import { ScanBarcode } from "lucide-react";
import { useState } from "react";
import { BsFillBoxSeamFill } from "react-icons/bs";
import { FaRegClock, FaShippingFast } from "react-icons/fa";
import { FaCartPlus, FaCartShopping } from "react-icons/fa6";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { TbShoppingBagSearch } from "react-icons/tb";
import { Card, CardContent } from "../ui/card";

export default function Boost() {
    const [boostData] = useState([
        {
            icon: <FaRegClock className="text-secondary h-6 w-6" />,
            title: "Advanced Countdown",
            des: "Adds urgency to your deals, making every moment a must-buy opportunity.",
        },
        {
            icon: <FaCartPlus className="text-secondary h-6 w-6" />,
            title: "Advanced Countdown",
            des: "Adds urgency to your deals, making every moment a must-buy opportunity. moment a must-buy opportunity.",
        },
        {
            icon: <FaCartShopping className="text-secondary h-6 w-6" />,
            title: "Advanced Countdown",
            des: "Adds urgency to your deals, making every moment a must-buy opportunity.",
        },
        {
            icon: <ScanBarcode className="text-secondary h-6 w-6" />,
            title: "Advanced Countdown",
            des: "Adds urgency to your deals, making every moment a must-buy opportunity.",
        },
        {
            icon: <FaShippingFast className="text-secondary h-6 w-6" />,
            title: "Advanced Countdown",
            des: "Adds urgency to your deals, making every moment a must-buy opportunity.",
        },
        {
            icon: <BsFillBoxSeamFill className="text-secondary h-6 w-6" />,
            title: "Advanced Countdown",
            des: "Adds urgency to your deals, making every moment a must-buy opportunity.",
        },
        {
            icon: (
                <MdOutlineProductionQuantityLimits className="text-secondary h-6 w-6" />
            ),
            title: "Advanced Countdown",
            des: "Adds urgency to your deals, making every moment a must-buy opportunity.",
        },
        {
            icon: <TbShoppingBagSearch className="text-secondary h-6 w-6" />,
            title: "Advanced Countdown",
            des: "Adds urgency to your deals, making every moment a must-buy opportunity.",
        },
    ]);
    return (
        <div className="pt-36 max-w-[1440px] mx-auto px-4 lg:px-16">
            <p className="shadow dark:shadow-gray-700 text-xs md:text-sm border border-input rounded-full mx-auto text-center max-w-max px-3 py-1">
                Essential Shopify Apps for Conversions
            </p>
            <h1 className="text-2xl md:text-5xl text-center font-medium mt-8 md:max-w-[70%] mx-auto">
                Boost Your Shopify Store with Must-Have Apps for Better
                Conversion Rates!
            </h1>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-10">
                {boostData?.map((data, index) => (
                    <Card key={index} className="dark:shadow-gray-700">
                        <CardContent className="pt-4">
                            {data.icon}
                            <h2 className="py-2 text-md md:text-xl font-semibold">
                                {data.title}
                            </h2>
                            <p className="dark:text-gray-300">{data.des}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
