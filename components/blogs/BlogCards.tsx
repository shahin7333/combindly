"use client";
import React, { useState } from "react";
import Blog1 from "@/app/assets/blog-1.png";
import Blog2 from "@/app/assets/blog-2.png";
import Blog3 from "@/app/assets/blog-3.png";
import Blog4 from "@/app/assets/blog-4.png";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { FaRegClock } from "react-icons/fa";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { IoBookOutline } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export default function BlogCards() {
  const [blogsData] = useState([
    {
      id: 0,
      img: Blog1,
      badge: "Using ClickUp",
      title: "How ClickUp’s Marketing Team Uses ClickUp",
      author: "Shaparan shahin",
      authorImg: Blog1,
      time: "Max 10min read",
    },
    {
      id: 1,
      img: Blog2,

      badge: "People Management",
      title: "How to Create an Effective 30-60-90 Day Plan for Onboarding",
      author: "Shaparan shahin",
      authorImg: Blog2,
      time: "Max 10min read",
    },
    {
      id: 3,
      img: Blog3,
      badge: "Planing",
      title: "Context Switching: What Does Switching Tasks Cost Your Team?",
      author: "Shaparan shahin",
      authorImg: Blog3,
      time: "Max 10min read",
    },
    {
      id: 4,
      img: Blog4,
      badge: "Using ClickUp",
      title: "ClickUp Best Practices: Tips & Tricks for Getting Started",
      author: "Shaparan shahin",
      authorImg: Blog4,
      time: "Max 10min read",
    },
    {
      id: 5,
      img: Blog1,
      badge: "Using ClickUp",
      title: "How ClickUp’s Marketing Team Uses ClickUp",
      author: "Shaparan shahin",
      authorImg: Blog1,
      time: "Max 10min read",
    },
    {
      id: 6,
      img: Blog2,

      badge: "People Management",
      title: "How to Create an Effective 30-60-90 Day Plan for Onboarding",
      author: "Shaparan shahin",
      authorImg: Blog2,
      time: "Max 10min read",
    },
  ]);
  return (
    <div className="max-w-[1440px] mx-auto px-4 lg:px-16 font-axiforma mt-[72px] mb-28">
      <div className="max-w-[90%] mx-auto">
        <div>
          <Tabs defaultValue="recent">
            <div className="flex justify-between items-center gap-4 mb-10">
              <div className="flex items-center gap-4">
                <div className="p-5 bg-[#E455A9] shadow-xl shadow-[#E455A9] rounded-md">
                  <IoBookOutline className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-[22px] font-bold">Articles</h4>
              </div>
              <TabsList className="flex justify-end bg-transparent max-w-max">
                <TabsTrigger className="uppercase" value="recent">
                  Recent
                </TabsTrigger>
                <TabsTrigger className="uppercase" value="popular">
                  Popular
                </TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="recent">
              <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-10">
                {blogsData.map((blog, index) => (
                  <Card
                    key={index}
                    className={`border-0 dark:border  shadow-md ${
                      index === 1 || index === 2
                        ? "lg:col-span-8"
                        : "lg:col-span-4"
                    }`}
                  >
                    {index === 1 || index === 2 ? (
                      <div className="grid md:grid-cols-2 h-[100%]">
                        <CardContent className="p-6 lg:p-8">
                          <div className="flex flex-col justify-between gap-4 h-full">
                            <div>
                              <p className="text-[#E455A9] uppercase text-xs font-semibold mb-2">
                                {blog.badge}
                              </p>
                              <h2 className="text-3xl leading-[42px] font-bold">
                                {blog.title}
                              </h2>
                              <div className="flex items-center gap-2 text-gray-500 mt-2">
                                <FaRegClock className="h-4 w-4" />
                                <span className="text-[13px]">{blog.time}</span>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <Avatar className="h-8 w-8">
                                <AvatarImage
                                  src="/placeholder.svg?height=40&width=40"
                                  alt="Author"
                                />
                                <AvatarFallback className="text-xs">
                                  SS
                                </AvatarFallback>
                              </Avatar>
                              <span className="font-semibold text-[13px]">
                                {blog.author}
                              </span>
                            </div>
                          </div>
                        </CardContent>
                        <div className="h-full">
                          <Image
                            src={blog.img}
                            alt="Chat interface"
                            width={1200}
                            height={800}
                            className="w-auto h-full object-cover rounded-r-md"
                          />
                        </div>
                      </div>
                    ) : (
                      <>
                        <div>
                          <Image
                            src={blog.img}
                            alt="Chat interface"
                            width={1200}
                            height={800}
                            className="w-full h-[270px] rounded-t-md"
                          />
                        </div>
                        <CardContent className="p-6 lg:p-8">
                          <div className="">
                            <p className="text-[#E455A9] uppercase text-xs font-semibold mb-2">
                              {blog.badge}
                            </p>
                            <h2 className="text-xl leading-[32px] font-bold mb-4">
                              {blog.title}
                            </h2>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <Avatar className="h-8 w-8">
                                  <AvatarImage
                                    src="/placeholder.svg?height=40&width=40"
                                    alt="Author"
                                  />
                                  <AvatarFallback className="text-xs">
                                    SS
                                  </AvatarFallback>
                                </Avatar>
                                <span className="font-semibold text-[13px]">
                                  {blog.author}
                                </span>
                              </div>
                              <div className="flex items-center gap-2 text-gray-500">
                                <FaRegClock className="h-4 w-4" />
                                <span className="text-[13px]">{blog.time}</span>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </>
                    )}
                  </Card>
                ))}
                <Card
                  className={`border-0 dark:border shadow-md lg:col-span-4`}
                >
                  <CardContent className="p-6 lg:p-8 h-full">
                    <div className="flex flex-col justify-between gap-6 h-full">
                      <div>
                        <div className="bg-[#E455A9] shadow-xl shadow-[#E455A9] rounded-md h-16 w-16 flex items-center justify-center">
                          <HiOutlineMail className="h-8 w-8 text-white" />
                        </div>
                        <h2 className="text-[32px] font-bold leading-[44px] mt-6">
                          Subscribe to our blog
                        </h2>
                        <p className="mt-4 text-sm">
                          Get the latest posts in your email
                        </p>
                      </div>
                      <div>
                        <form className="flex flex-col gap-3 w-full mt-4">
                          <Input
                            type="email"
                            placeholder="Enter email"
                            className="bg-white text-lg placeholder:text-gray-400/70 h-12 shadow-lg"
                          />
                          <Button
                            type="submit"
                            className="bg-[#E455A9] hover:bg-[#E455A9] text-white px-8 h-12 text-lg font-bold rounded-md shadow-2xl shadow-[#E455A9]"
                          >
                            Subscribe
                          </Button>
                        </form>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="popular">poplular</TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
