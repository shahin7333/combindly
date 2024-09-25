import React from "react";
import { Button } from "../ui/button";
import { CircleCheck } from "lucide-react";

export default function Banner() {
  return (
    <div className="max-w-[1440px] mx-auto px-4 lg:px-16">
      <h1 className="text-3xl md:text-7xl text-center mx-auto font-bold md:max-w-[90%] lg:leading-[80px] mt-20 lg:mt-36">
        The 8-in-1 Shopify Booster for{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#395FC3] via-[#99488D] via-[#F56028] to-[#FAA22B]">
          {" "}
          Unmatched Conversion Rates
        </span>
      </h1>
      <p className="md:max-w-[45%] mx-auto text-center pt-8 text-sm md:text-2xl">
        At Combindly, experience a seamless boost in conversion rates with our
        all-in-one app collection – simplifying success for you.
      </p>
      <div className="mt-10 flex justify-center items-center gap-6 flex-wrap">
        <div className="bg-gradient-to-r from-[#395FC3] via-[#99488D] via-[#F56028] to-[#FAA22B] p-[2px] rounded-lg">
          <Button className="bg-white dark:bg-black text-foreground md:text-lg h-full">
            Start your free trail
          </Button>
        </div>
        <Button
          variant="secondary"
          className="md:text-lg border-[2px] border-[#3846EE] rounded-lg h-full bg-transparent text-foreground"
        >
          See demo store
        </Button>
      </div>
      <div className="mt-10 flex justify-center items-center gap-6 flex-wrap">
        <Button
          variant="ghost"
          className="shadow dark:shadow-gray-700 md:text-base"
        >
          <CircleCheck className="h-4 w-4 mr-2 text-green-400" /> Free 7-Days
          trial
        </Button>
        <Button
          variant="ghost"
          className="shadow dark:shadow-gray-700 md:text-base"
        >
          <CircleCheck className="h-4 w-4 mr-2 text-green-400" /> Built
          exclusively for Shopify
        </Button>
        <Button
          variant="ghost"
          className="shadow dark:shadow-gray-700 md:text-base"
        >
          <CircleCheck className="h-4 w-4 mr-2 text-green-400" /> 24/7 Live
          Support
        </Button>
      </div>
    </div>
  );
}
