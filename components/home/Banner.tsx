"use client";

// import HeroImage2 from "@/app/assets/1.png";
// import DarkHeroImage2 from "@/app/assets/2.png";
import HeroImage from "@/app/assets/hero_dashboard.png";
import Image from "next/image";
import { HeroBannerList } from "./HeroBannerList";

export default function Banner() {
    return (
        <div className="max-w-[1440px] mx-auto px-4 lg:px-16 font-axiforma relative mt-[72px] mb-28">
            <div>
                <h1 className=" text-xl md:text-[64px] text-center mx-auto font-extrabold md:max-w-[95%] lg:leading-[90px] font-axiforma text-[#24223E] dark:text-white">
                    8-in-1 shopify conversion boosters
                </h1>

                <div className="md:max-w-[80%] mx-auto text-center pt-2 text-sm md:text-xl font-semibold font-axiforma">
                    One app, includes 8 tools to boost your shopify store&apos;s
                    conversion rates.
                </div>
                <div className="md:max-w-[85%] mx-auto text-center text-sm md:text-xl font-semibold font-axiforma">
                    Get more sales & revenue easily—faster
                </div>
                <div className="mt-8 flex flex-col items-center">
                    <button className="gradient-button text-white font-bold py-3 px-6 rounded-xl shadow text-xl font-axiforma border border-border transition-transform duration-200 hover:translate-y-[1px] ">
                        Get started. It&apos;s FREE!
                    </button>
                    <p className="text-xs font-semibold text-gray-600 mt-1">
                        14 Days Free Access. No Credit Card.
                    </p>
                </div>
                <div className="flex justify-center items-center mt-16 blur-sm rounded-2xl">
                    <Image
                        src={HeroImage}
                        alt="Hero Image"
                        width={1058}
                        height={504}
                        className="shadow-[-2px_-45px_100px_100px_rgba(122,_186,_255,_0.2)] rounded-2xl p-3 border m-2"
                    />
                </div>
            </div>
            <div className="absolute bottom-[-150px] left-1/2 transform -translate-x-1/2 rounded-2xl border border-white shadow">
                <div className="bg-white rounded-2xl  md:w-[700px] m-2 shadow-[1px_-30px_100px_50px_rgba(187,_0,_255,_0.2)]">
                    <HeroBannerList />
                    {/* <Image
                        src={HeroImage2}
                        alt="Hero Image"
                        width={730}
                        height={300}
                        className="rounded-2xl object-cover dark:hidden"
                    />
                    <Image
                        src={DarkHeroImage2}
                        alt="Hero Image"
                        width={730}
                        height={300}
                        className="rounded-2xl object-cover hidden dark:block"
                    /> */}
                </div>
            </div>
        </div>
    );
}
