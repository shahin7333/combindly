/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-unescaped-entities */
"use client";
import App from "@/app/assets/gallery.jpg";
import Image from "next/image";
import React, { useState } from "react";
import { Card, CardContent } from "../ui/card";

export default function Gallery() {
  const [galleryData] = useState([
    {
      img: App,
      title: "Advanced Countdown",
      des: "Adds urgency to your deals, making every moment a must-buy opportunity.",
    },
    {
      img: App,
      title: "Advanced Countdown",
      des: "Adds urgency to your deals, making every moment a must-buy opportunity.",
    },
    {
      img: App,
      title: "Advanced Countdown",
      des: "Adds urgency to your deals, making every moment a must-buy opportunity.",
    },
    {
      img: App,
      title: "Advanced Countdown",
      des: "Adds urgency to your deals, making every moment a must-buy opportunity.",
    },
  ]);

  const handleMouseMove = (e: any) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left; // Mouse X position relative to the card
    const y = e.clientY - rect.top; // Mouse Y position relative to the card
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Adjust rotation so the side of the card where the mouse is hovering tilts upwards
    const rotateX = (y - centerY) / 10; // Hover side tilts upwards
    const rotateY = -(x - centerX) / 10; // Hover side tilts upwards

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = (e: any) => {
    const card = e.currentTarget;
    card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
  };

  return (
    <div className="pt-36 max-w-[1440px] mx-auto px-4 lg:px-16 pb-4">
      <div className="mb-12 md:max-w-[50%] mx-auto">
        <p className="shadow dark:shadow-gray-700 text-xs md:text-sm border border-input rounded-full mx-auto text-center max-w-max px-3 py-1">
          Essential Shopify Apps for Conversions
        </p>
        <h1 className="text-2xl md:text-5xl text-center font-medium mt-8 mb-6">
          Too Good to Be True? It's That Good & It's True.
        </h1>
        <p className="text-center md:max-w-[80%] mx-auto">
          Get 8+ apps along with improved page speed, reduced app conflicts, and
          a single point of support.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {galleryData?.map((item, index) => (
          <Card
            key={index}
            className="overflow-hidden transition-transform duration-200 ease-out"
            onMouseMove={(e) => handleMouseMove(e)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="relative w-full h-[180px]">
              <Image
                src={item.img}
                alt="Project image"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <CardContent className="pt-2">
              <h2 className="py-2 text-md md:text-lg font-semibold">
                {item.title}
              </h2>
              <p className="dark:text-gray-300 text-xs">{item.des}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
