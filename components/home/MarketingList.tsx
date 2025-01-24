import SectionHeader from "../common/SectionHeader";

import image1 from "@/app/assets/atc_white_banner.png";
import { BannerList } from "./BannerList";

const marketingList = [
    {
        title: "Boost Conversions with Ease.",
        description:
            "Streamline the shopping journey with our Sticky/Animated Add To Cart app - ",
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
                        className={`flex gap-10 py-[100px] my-[100px] relative ${
                            item.position === "reverse"
                                ? "flex-row-reverse"
                                : ""
                        }`}
                    >
                        <div className="flex-1 max-w-[40%]">
                            <h2
                                className="gradient-text text-xl md:text-[41px] font-extrabold"
                                style={{
                                    lineHeight: "1",
                                }}
                            >
                                {item.title}
                            </h2>
                            <p className="text-md md:text-[19px] font-semibold text-[#24223E] dark:text-white mt-6">
                                {item.description}
                            </p>
                        </div>
                        <div
                            className={`absolute top-0 ${
                                item.position === "reverse"
                                    ? " -left-40 pr-6 rounded-r-xl  shadow-[-2px_50px_100px_50px_rgba(255,_149,_0,_0.1)]"
                                    : "-right-40 pl-6 rounded-l-xl gradient-bg"
                            } pt-6 `}
                        >
                            {/* <Image
                                src={item.image}
                                alt={item.title}
                                width={700}
                                className={`-mb-10 ${
                                    item.position === "reverse"
                                        ? "rounded-r-xl "
                                        : "rounded-l-xl"
                                }`}
                            /> */}
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
