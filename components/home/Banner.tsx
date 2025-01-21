"use client";

import HeroImage from "@/app/assets/hero_dashboard.png";
import Image from "next/image";
import { Button } from "../ui/button";
import { HeroBannerList } from "./HeroBannerList";

export default function Banner() {
    return (
        <div className="max-w-[1440px] mx-auto px-4 lg:px-16 font-axiforma relative">
            <div>
                <div className="mt-24 flex flex-col items-center">
                    <Button
                        variant="secondary"
                        className="shadow bg-[#13C9CD] bg-opacity-15 text-xs dark:shadow-gray-700 border border-secondary hover:bg-opacity-25 rounded-lg mx-auto text-center max-w-max px-1.5 py-1 h-8 font-medium"
                    >
                        <p className="px-1 py-0.5 bg-secondary rounded-sm font-semibold mr-2 text-white">
                            Live Now
                        </p>{" "}
                        Shopify Conversion Booster Combo!{" "}
                        <span className="ml-2">🚀</span>
                    </Button>
                </div>
                <h1 className=" text-xl md:text-[64px] text-center mx-auto font-extrabold md:max-w-[95%] lg:leading-[90px] font-axiforma text-[#24223E] dark:text-white">
                    8-in-1 shopify conversion boosters
                </h1>

                <div className="md:max-w-[80%] mx-auto text-center pt-4 text-sm md:text-xl font-semibold font-axiforma">
                    One app, includes 8 tools to boost your shopify store&apos;s
                    conversion rates.
                </div>
                <div className="md:max-w-[85%] mx-auto text-center text-sm md:text-xl font-semibold font-axiforma">
                    Get more sales & revenue easily—faster
                </div>
                <div className="flex justify-center items-center mt-40 blur-sm">
                    <Image
                        src={HeroImage}
                        alt="Hero Image"
                        width={1080}
                        height={400}
                        className="shadow-[-2px_-45px_100px_100px_rgba(122,_186,_255,_0.2)] rounded-lg p-3 border"
                    />
                </div>
            </div>
            <div className="absolute bottom-[-100px] left-1/2 transform -translate-x-1/2 rounded-2xl border border-white shadow">
                <div className="bg-white rounded-2xl  md:w-[700px] m-2 shadow-[1px_-30px_100px_50px_rgba(187,_0,_255,_0.2)]">
                    <HeroBannerList />
                </div>
            </div>
        </div>
    );
}
