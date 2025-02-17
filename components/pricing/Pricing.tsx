"use client";
import { BadgeCheck, BadgePercent } from "lucide-react";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { use, useState } from "react";

export default function Pricing() {
  const [cardData, setCardData] = useState([
    {
      title: "Advanced",
      price: "$14.99",
      duration: "per month",
      features: [
        {
          title: "Animated Add To Cart",
          description:
            "Bring your products to life – where every click becomes a delightful experience.",
        },
        {
          title: "Sticky Add To Cart",
          description:
            "Ensures your cart is always at your fingertips, ready for a seamless checkout experience!",
        },
        {
          title: "Countdown",
          description:
            "Adds urgency to your deals, making every moment a must-buy opportunity.",
        },
        {
          title: "Sticky Buy Now",
          description:
            "Instant satisfaction at your fingertips – for a seamless and swift checkout experience.",
        },
        {
          title: "Shipping Infromation",
          description:
            "Navigate hassle-free deliveries – your go-to for clear and reliable shipping details!",
        },
        {
          title: "Stock Scarcity",
          description:
            "Keeps you informed and boosts urgency for items running low.",
        },
        {
          title: "Related Products",
          description: "Discover more you'll love – meet your perfect match.",
        },
        {
          title: "Recently Viewed Products",
          description:
            "Your browsing history at your fingertips to rediscover favorites.",
        },
        {
          title: "24/7 Life time Support",
        },
        {
          title: "Automated Updated Features",
        },
      ],
      buttonText: "Start trail now",
    },
    {
      title: "Premium",
      price: "$149",
      duration: "per year",
      features: [
        {
          title: "Animated Add To Cart",
          description:
            "Bring your products to life – where every click becomes a delightful experience.",
        },
        {
          title: "Sticky Add To Cart",
          description:
            "Ensures your cart is always at your fingertips, ready for a seamless checkout experience!",
        },
        {
          title: "Countdown",
          description:
            "Adds urgency to your deals, making every moment a must-buy opportunity.",
        },
        {
          title: "Sticky Buy Now",
          description:
            "Instant satisfaction at your fingertips – for a seamless and swift checkout experience.",
        },
        {
          title: "Shipping Infromation",
          description:
            "Navigate hassle-free deliveries – your go-to for clear and reliable shipping details!",
        },
        {
          title: "Stock Scarcity",
          description:
            "Keeps you informed and boosts urgency for items running low.",
        },
        {
          title: "Related Products",
          description: "Discover more you'll love – meet your perfect match.",
        },
        {
          title: "Recently Viewed Products",
          description:
            "Your browsing history at your fingertips to rediscover favorites.",
        },
        {
          title: "24/7 Life time Support",
        },
        {
          title: "Automated Updated Features",
        },
      ],
      buttonText: "Start trail now",
    },
  ]);
  return (
    <div className="max-w-[1440px] mx-auto px-4 lg:px-16 font-axiforma mt-[72px] mb-20">
      <div className="text-center mb-10 lg:max-w-[60%] mx-auto">
        <h1 className="text-xl md:text-[41px] font-extrabold text-[#24223E] dark:text-white md:leading-[50px]">
          Affordable Pricing Plans for Combindly - Tailored to Fit Every Budget
        </h1>
        <p className="text-md md:text-[19px] font-semibold text-[#24223E] dark:text-white mt-6 mx-auto">
          Explore cost-effective pricing for Combindly: Tailored plans for all
          business sizes, offering maximum value with no hidden costs. Perfect
          for budget-friendly, efficient solutions.
        </p>
      </div>
      <Tabs defaultValue="monthly">
        <div className="flex justify-center items-center gap-4 mb-10">
          <TabsList className="flex justify-center items-center gap-4 bg-transparent max-w-max bg-gray-100 dark:bg-gray-800 rounded-full h-[42px]">
            <TabsTrigger className="h-[35px]" value="monthly">
              Monthly
            </TabsTrigger>
            <TabsTrigger className="h-[35px]" value="yearly">
              Yearly{" "}
              <span className="text-xs px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded-full ms-2">
                Save 16.67%
              </span>
            </TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="monthly">
          <Card className="border-[#7877c6] border-2 max-w-[500px] mx-auto inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.1),rgba(255,255,255,0))] dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
            <CardHeader>
              <CardTitle className="text-xl font-medium">
                {cardData[0].title}
              </CardTitle>
              <CardDescription>
                <div className="mt-4">
                  <p className="text-2xl font-semibold">{cardData[0].price}</p>
                  <p className="text-xs text-gray-500">
                    {cardData[0].duration}
                  </p>
                </div>
              </CardDescription>
            </CardHeader>
            <CardContent className="px-6">
              <div>
                <div className="space-y-3 mt-4 text-gray-700 dark:text-gray-300 font-light">
                  {cardData[0].features.map((feature, index) => (
                    <div key={index}>
                      <p className="flex items-center gap-1.5 font-medium">
                        <BadgeCheck className="h-5 w-5" />
                        {feature.title}
                      </p>
                      {feature.description && (
                        <p className="text-sm pl-6 pt-0.5">
                          {feature.description}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
            <CardFooter className="mt-4">
              <Button className="w-full">{cardData[0].buttonText}</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="yearly">
          <Card className="border-[#7877c6] border-2 max-w-[500px] mx-auto inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.1),rgba(255,255,255,0))] dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
            <CardHeader>
              <CardTitle className="text-xl font-medium">
                {cardData[1].title} <span className="ms-2 px-3 py-1 bg-primary text-white rounded-full text-xs font-bold">🔥 Most Popular</span>
              </CardTitle>
              <CardDescription>
                <div className="mt-4">
                  <p className="text-2xl font-semibold">{cardData[1].price}</p>
                  <p className="text-xs text-gray-500">
                    {cardData[1].duration}
                  </p>
                </div>
              </CardDescription>
            </CardHeader>
            <CardContent className="px-6">
              <div>
                <div className="space-y-3 mt-4 text-gray-700 dark:text-gray-300 font-light">
                  {cardData[1].features.map((feature, index) => (
                    <div key={index}>
                      <p className="flex items-center gap-1.5 font-medium">
                        <BadgeCheck className="h-5 w-5" />
                        {feature.title}
                      </p>
                      {feature.description && (
                        <p className="text-sm pl-6 pt-0.5">
                          {feature.description}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
            <CardFooter className="mt-4">
              <Button className="w-full">{cardData[1].buttonText}</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
