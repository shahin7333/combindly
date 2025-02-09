"use client";
import React, { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { Card, CardContent } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { FaPencilAlt } from "react-icons/fa";

export default function WriterSlide() {
  const [blogsData] = useState([
    {
      id: 0,
      author: "Shaparan shahin",
      designation: "CEO",
      authorImg: "",
    },
    {
      id: 1,
      author: "Shaparan shahin",
      designation: "CEO",
      authorImg: "",
    },
    {
      id: 3,
      author: "Shaparan shahin",
      designation: "CEO",
      authorImg: "",
    },
    {
      id: 4,
      author: "Shaparan shahin",
      designation: "CEO",
      authorImg: "",
    },
    {
      id: 5,
      author: "Shaparan shahin",
      designation: "CEO",
      authorImg: "",
    },
    {
      id: 6,
      author: "Shaparan shahin",
      designation: "CEO",
      authorImg: "",
    },
  ]);
  return (
    <div className="max-w-[1440px] mx-auto px-4 lg:px-16 font-axiforma mt-[72px] mb-28">
      <div className="max-w-[90%] mx-auto">
        <div className="flex space-x-2 -mb-5">
          <div className="flex items-center gap-4">
            <div className="p-5 bg-[#49CCF8] shadow-xl rounded-md">
              <FaPencilAlt className="h-6 w-6 text-white" />
            </div>
            <h4 className="text-[22px] font-bold">Featured Writers</h4>
          </div>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full relative mb-5 pt-12"
        >
          <CarouselContent className="">
            {blogsData.map((blog, index) => (
              <CarouselItem key={index} className=" md:basis-1/3">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex items-center justify-center p-6">
                      <div className="flex items-center gap-3">
                        <Avatar className="h-20 w-20">
                          <AvatarImage
                            src="/placeholder.svg?height=40&width=40"
                            alt="Author"
                          />
                          <AvatarFallback>SS</AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="text-xl font-bold mb-1">
                            {blog.author}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {blog.designation}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="absolute right-12 top-0 flex space-x-2">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>
      </div>
    </div>
  );
}
