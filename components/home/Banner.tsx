"use client";

import HeroImage from "@/app/assets/hero.png";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Banner() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.2,
            },
        },
    };

    const topItemVariants = {
        hidden: { opacity: 0, y: -10 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.7, ease: [0.48, 0.15, 0.25, 0.96] },
        },
    };

    const middleItemVariants = {
        hidden: { opacity: 0, y: -10 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.7,
                ease: [0.48, 0.15, 0.25, 0.96],
                delay: 0.7,
            },
        },
    };

    const bottomItemVariants = {
        hidden: { opacity: 0, y: -10 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.7,
                ease: [0.48, 0.15, 0.25, 0.96],
                delay: 1.2,
            },
        },
    };

    return (
        <motion.div
            className="max-w-[1440px] mx-auto px-4 lg:px-16 font-axiforma"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            {/* <motion.div
                className="mt-24 flex flex-col items-center"
                variants={topItemVariants}
            >
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
            </motion.div> */}
            <motion.h1
                className="mt-20 text-xl md:text-[64px] text-center mx-auto font-extrabold md:max-w-[95%] lg:leading-[90px] font-axiforma text-[#24223E] dark:text-white"
                variants={topItemVariants}
            >
                8-in-1 shopify conversion boosters
                {/* <motion.div
                    className="bg-clip-text text-transparent md:text-[64px] bg-gradient-to-r from-[#2856cb]  via-[#F56028] to-[#FAA22B] -mt-4 font-axiforma"
                    variants={topItemVariants}
                >
                    {" Unmatched Conversion Rates"
                        .split("")
                        .map((child, idx) => (
                            <span
                                className="transition-all duration-350 hover:font-black hover:text-[rgb(255,207,63)] hover:next:font-medium hover:next:text-[rgb(199,210,254)] hover:next-next:font-light has-next-hover:font-medium has-next-hover:text-[rgb(199,210,254)] has-next-next-hover:font-light"
                                key={idx}
                            >
                                {child}
                            </span>
                        ))}{" "}
                    <SparklesText
                        text="Unmatched Conversion Rates"
                        className="text-[#F56028] md:text-[92px]"
                    />
                </motion.div> */}
            </motion.h1>

            <motion.div
                className="md:max-w-[80%] mx-auto text-center pt-4 text-sm md:text-xl font-semibold font-axiforma"
                variants={middleItemVariants}
            >
                One app, includes 8 tools to boost your shopify store's
                conversion rates.
            </motion.div>
            <motion.div
                className="md:max-w-[85%] mx-auto text-center text-sm md:text-xl font-semibold font-axiforma"
                variants={middleItemVariants}
            >
                Get more sales & revenue easily—faster
            </motion.div>
            <div className="flex justify-center items-center mt-40 blur">
                <Image
                    src={HeroImage}
                    alt="Hero Image"
                    width={1080}
                    height={400}
                    className="shadow-[11px_-31px_200px_10px_#c7c4ff] rounded-lg p-3 border"
                />
            </div>
            {/* <motion.div
                className="mt-14 flex justify-center items-center gap-6 flex-wrap"
                variants={bottomItemVariants}
            >
                <div className="bg-gradient-to-r from-[#395FC3] via-[#99488D] via-[#F56028] to-[#FAA22B] p-[2px] rounded-lg">
                    <Button className="bg-white dark:bg-black text-foreground h-full">
                        <Zap className="h-4 w-4 mr-2" /> Get Combindly{" "}
                        <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                </div>
                <Button
                    variant="secondary"
                    className="border-[2px] border-secondary rounded-lg h-full bg-transparent text-foreground"
                >
                    <FaDiscord className="mr-2 h-5 w-5" /> Join us on Discord
                </Button>
            </motion.div> */}
            {/* <motion.div
                className="mt-10 flex justify-center items-center gap-8 flex-wrap"
                variants={bottomItemVariants}
            >
                <div className="flex items-center gap-1 md:text-base">
                    <CircleCheck className="h-6 w-6 mr-2 text-secondary" /> Free
                    7-Days trial
                </div>
                <div className="flex items-center gap-1 md:text-base">
                    <CircleCheck className="h-6 w-6 mr-2 text-secondary" />{" "}
                    Built exclusively for Shopify
                </div>
                <div className="flex items-center gap-1 md:text-base">
                    <CircleCheck className="h-6 w-6 mr-2 text-secondary" /> 24/7
                    Live Support
                </div>
            </motion.div> */}
        </motion.div>
    );
}
