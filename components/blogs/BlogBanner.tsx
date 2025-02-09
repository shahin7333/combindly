import React from "react";
import HeroImage from "@/app/assets/blog-banner.png";
import Image from "next/image";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaRegClock,
  FaTwitter,
} from "react-icons/fa";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export default function BlogBanner() {
  return (
    <div className="max-w-[1440px] mx-auto px-4 lg:px-16 font-axiforma mt-[72px] mb-28">
      <div className="grid xl:grid-cols-12 gap-10 max-w-[90%] mx-auto items-center">
        <div className="xl:col-span-5">
          <h1 className=" text-xl md:text-5xl lg:text-[70px] font-extrabold md:max-w-[95%] md:leading-[60px] lg:leading-[90px] font-axiforma text-[#24223E] dark:text-white ">
            Project management tips & trends, delivered.
          </h1>

          <div className="text-gray-500 pt-2 text-base font-axiforma">
            Join productivity hackers from around the world that receive
            WriteClick—the ClickUp Blog Newsletter.
          </div>
          <form className="flex gap-4 w-full max-w-3xl mt-4">
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
          <div className="mt-6 flex items-center gap-4 text-base">
            <p className="text-gray-500">Follow us on:</p>{" "}
            <div className="flex gap-4 items-center text-xl">
              <FaTwitter /> <FaLinkedinIn /> <FaInstagram /> <FaFacebookF />
            </div>
          </div>
        </div>
        <div className="xl:col-span-7">
          <Card className="max-w-2xl overflow-hidden shadow-lg border-0 dark:border">
            <div className="bg-foreground dark:bg-background">
              <Image
                src={HeroImage}
                alt="Chat interface"
                width={1200}
                height={800}
                className="w-auto h-full md:h-[320px] mx-auto"
              />
            </div>
            <CardContent className="p-6">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">
                  Chat Is Broken. We&apos;re Fixing It.
                </h2>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Avatar className="h-10 w-10">
                      <AvatarImage
                        src="/placeholder.svg?height=40&width=40"
                        alt="Author"
                      />
                      <AvatarFallback>ZE</AvatarFallback>
                    </Avatar>
                    <span className="font-medium">Zeb Evans</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <FaRegClock className="h-4 w-4" />
                    <span>1min read</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
