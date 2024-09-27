"use client";
import React, { useState } from "react";
import { BsFire } from "react-icons/bs";
import Dashboard from "@/app/assets/dashboard-dark.webp";
import Image from "next/image";
import { FaCartPlus, FaRegClock } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { ScanBarcode } from "lucide-react";
import { Card, CardContent } from "../ui/card";

export default function CommonSection() {
  const [boostData] = useState([
    {
      icon: <FaRegClock className="text-secondary h-6 w-6" />,
      title: "Advanced Countdown",
      des: "Adds urgency to your deals, making every moment a must-buy opportunity.",
    },
    {
      icon: <FaCartPlus className="text-secondary h-6 w-6" />,
      title: "Advanced Countdown",
      des: "Adds urgency to your deals, making every moment a must-buy opportunity.",
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
  ]);
  return (
    <div className="max-w-[1440px] mx-auto px-4 lg:px-16 pt-36 mb-6">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="flex gap-4 items-center">
            <div className="p-3 rounded-lg border border-input">
              <BsFire size={28} className="text-secondary " />
            </div>

            <h3 className="text-md md:text-lg font-semibold text-secondary">
              Get started in minutes
            </h3>
          </div>
          <h1 className="text-2xl lg:text-[44px] lg:leading-[58px] font-medium mt-4">
            <span>Production-Ready.</span>{" "}
            <span className="text-gray-600 dark:text-gray-400">
              The SaaS Starter includes all the essential tools and resources
              you need to launch your project.
            </span>
          </h1>
        </div>
        <div>
          {/* <video
            preload="none"
            className="h-auto w-full mt-16 md:mt-0"
            autoPlay
            loop
            // controls
            playsInline
            muted
            // poster={heroPoster}
          >
            <source src={CMCvideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video> */}
          <Image
            src={Dashboard}
            alt="Logo"
            width="1400"
            height="700"
            className="w-full h-auto rounded-xl shadow dark:shadow-gray-700"
          />
        </div>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-12">
        {boostData?.map((data, index) => (
          <Card key={index} className="dark:shadow-gray-700">
            <CardContent className="pt-4">
              {data.icon}
              <h2 className="py-2 text-md md:text-xl font-medium">
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
