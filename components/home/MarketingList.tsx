import SectionHeader from "../common/SectionHeader";

import image1 from "@/app/assets/atc_white_banner.png";
import { BannerList } from "./BannerList";

const marketingList = [
    {
        title: "Boost Sales and Revenue.",
        description:
            "Optimize your store with 8+ tools designed to enhance conversions and improve customer experience.",
        description_points: [
            {
                title: "Drive Conversions:",
                description:
                    "Features like Stock Scarcity, Countdown Timers, and Sticky Add to Cart create urgency, encouraging faster purchases.",
            },
            {
                title: "Enhance Engagement:",
                description:
                    "Recently Viewed Products, Related Products, and Shipping Info keep customers engaged and informed.",
            },
            {
                title: "Seamless Integration:",
                description:
                    "Easy to integrate with Shopify, offering a fully customizable experience for merchants.",
            },
            {
                title: "Enhance Store Performance",
                description:
                    "Optimized to streamline shopping journeys and elevate overall store performance.",
            },
        ],
        badges: [
            "🛒 Always Accessible",
            "🚀 Instant Conversions",
            "🎨 Customizable Design",
            "⚙️ Effortless Integration",
        ],
        image: image1,
        position: "normal",
    },
    // {
    //     title: "Boost Conversions with Ease",
    //     description:
    //         "Streamline the shopping journey with our Sticky Add To Cart app. Elevate user experience effortlessly:",
    //     badges: [
    //         "🛒 Always Accessible",
    //         "🚀 Instant Conversions",
    //         "🎨 Customizable Design",
    //         "⚙️ Effortless Integration",
    //     ],
    //     image: image1,
    //     position: "reverse",
    // },
];

function MarketingList() {
    return (
        <div className="max-w-[1440px] mx-auto px-4 lg:px-16 font-axiforma py-10 md:py-20">
            <SectionHeader
                title="Built for Shopify, Tailored to your needs"
                description="Experience a seamless boost in conversion rates with our
                    all-in-one app collection – simplifying success for you."
            />
            <div className="max-w-[1200px] mx-auto mt-10 md:mt-[100px]">
                {marketingList.map((item, index) => (
                    <div
                        key={index}
                        className={`flex gap-10 relative ${
                            item.position === "reverse"
                                ? "flex-row-reverse"
                                : ""
                        }`}
                    >
                        <div className="flex-1 max-w-[42%]">
                            <h2
                                className="gradient-text text-xl md:text-[41px] font-extrabold"
                                style={{
                                    lineHeight: "1",
                                }}
                            >
                                {item.title}
                            </h2>
                            <p className="text-md md:text-[19px] text-[#24223E] dark:text-white mt-6 font-semibold">
                                {item.description}
                            </p>
                            <div className="mt-6">
                                {item.description_points.map((point, index) => (
                                    <div
                                        key={index}
                                        className="flex gap-3 mb-4"
                                    >
                                        <span className="text-md md:text-[16px] font-semibold gradient-text">
                                            ✔️
                                        </span>
                                        <h3 className="text-md md:text-[16px] text-[#24223E] dark:text-white max-w-[450px]">
                                            <span className="font-semibold">
                                                {point.title}
                                            </span>{" "}
                                            <span>{point.description}</span>
                                        </h3>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div
                            className={`absolute top-0 ${
                                item.position === "reverse"
                                    ? " -left-40 pr-6 rounded-r-xl  shadow-[-2px_50px_100px_50px_rgba(255,_149,_0,_0.1)]"
                                    : "-right-40 pl-6 rounded-l-xl gradient-bg"
                            } pt-6 `}
                        >
                            <div className="-mb-10">
                                <BannerList className="rounded-l-2xl h-[400px]" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MarketingList;
