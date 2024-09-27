"use client";

import { motion } from "framer-motion";
import { ArrowRight, CircleCheck, Zap } from "lucide-react";
import { FaDiscord } from "react-icons/fa";
import { Button } from "../ui/button";

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
            className="max-w-[1440px] mx-auto px-4 lg:px-16"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <motion.div
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
            </motion.div>
            <motion.h1
                className="mt-10 text-3xl md:text-[80px] text-center mx-auto font-semibold md:max-w-[95%] lg:leading-[90px]"
                variants={topItemVariants}
            >
                The 8-in-1 Shopify Booster for{" "}
                <motion.span
                    className="bg-clip-text text-transparent md:text-[92px] bg-gradient-to-r from-[#2856cb]  via-[#F56028] to-[#FAA22B]"
                    variants={topItemVariants}
                >
                    {" "}
                    Unmatched Conversion Rates
                </motion.span>
            </motion.h1>

            <motion.div
                className="md:max-w-[45%] mx-auto text-center pt-8 text-sm md:text-2xl"
                variants={middleItemVariants}
            >
                At Combindly, experience a seamless boost in conversion rates
                with our all-in-one app collection – simplifying success for
                you.
            </motion.div>
            <motion.div
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
            </motion.div>
            <motion.div
                className="mt-10 flex justify-center items-center gap-6 flex-wrap"
                variants={bottomItemVariants}
            >
                <Button
                    variant="ghost"
                    className="shadow dark:shadow-gray-700 md:text-base"
                >
                    <CircleCheck className="h-4 w-4 mr-2 text-secondary" /> Free
                    7-Days trial
                </Button>
                <Button
                    variant="ghost"
                    className="shadow dark:shadow-gray-700 md:text-base"
                >
                    <CircleCheck className="h-4 w-4 mr-2 text-secondary" />{" "}
                    Built exclusively for Shopify
                </Button>
                <Button
                    variant="ghost"
                    className="shadow dark:shadow-gray-700 md:text-base"
                >
                    <CircleCheck className="h-4 w-4 mr-2 text-secondary" /> 24/7
                    Live Support
                </Button>
            </motion.div>
        </motion.div>
    );
}
