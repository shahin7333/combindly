import { appList } from "@/app/assets/data";
import { motion } from "framer-motion";
import AppCard from "../common/AppCard";

function HeroRightShowCase() {
    return (
        <motion.div
            className="absolute -right-10 top-30 rounded-2xl border border-white shadow"
            initial={{ x: 20, y: -20 }}
            animate={{ x: 0, y: 0 }}
            transition={{ duration: 1 }}
        >
            <div className=" bg-white rounded-lg m-2 shadow-[0px_-19px_100px_50px_rgba(154,_117,_255,_0.25)] p-4">
                <div className="flex flex-col items-center justify-center">
                    <h1 className="font-extrabold text-[#24223E] text-[19px]">
                        Boost your Sales and Revenue
                    </h1>
                    <p className="text-[#24223E] text-[14px] font-medium max-w-[400px] text-center">
                        Grow your Shopify store with these Must-Have apps.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2  gap-4 px-4 my-4 md:mt-8 md:mb-4">
                    {appList.map((app, index) => (
                        <AppCard key={index} {...app} />
                    ))}
                </div>
            </div>
        </motion.div>
    );
}

export default HeroRightShowCase;
