"use client";
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardTitle } from "../ui/card";

export default function Boost() {
  const [boostData] = useState([
    {
      img: "",
      title: "Advanced Countdown",
      des: "Adds urgency to your deals, making every moment a must-buy opportunity.",
    },
    {
      img: "",
      title: "Advanced Countdown",
      des: "Adds urgency to your deals, making every moment a must-buy opportunity.",
    },
    {
      img: "",
      title: "Advanced Countdown",
      des: "Adds urgency to your deals, making every moment a must-buy opportunity.",
    },
    {
      img: "",
      title: "Advanced Countdown",
      des: "Adds urgency to your deals, making every moment a must-buy opportunity.",
    },
    {
      img: "",
      title: "Advanced Countdown",
      des: "Adds urgency to your deals, making every moment a must-buy opportunity.",
    },
    {
      img: "",
      title: "Advanced Countdown",
      des: "Adds urgency to your deals, making every moment a must-buy opportunity.",
    },
    {
      img: "",
      title: "Advanced Countdown",
      des: "Adds urgency to your deals, making every moment a must-buy opportunity.",
    },
    {
      img: "",
      title: "Advanced Countdown",
      des: "Adds urgency to your deals, making every moment a must-buy opportunity.",
    },
  ]);
  return (
    <div className="py-28 max-w-[1440px] mx-auto px-4 lg:px-16">
      <p className="shadow dark:shadow-gray-700 md:text-base border border-input rounded-lg mx-auto text-center max-w-max px-3 py-1">
        Apps showcase
      </p>
      <h1 className="text-3xl md:text-5xl text-center font-bold mt-8 md:max-w-[70%] mx-auto">
        Boost Your Shopify Store with Must-Have Apps for Better Conversion
        Rates!
      </h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-10">
        {boostData?.map((data, index) => (
          <Card key={index}>
            <CardContent className="pt-4">
              <h2 className="pb-2 text-xl font-semibold">{data.title}</h2>
              <p>{data.des}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
