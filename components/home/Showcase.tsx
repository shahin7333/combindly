import React from "react";
import Dashboard from "@/app/assets/dashboard-dark.webp";
import Image from "next/image";

export default function Showcase() {
  return (
    <div className="max-w-[1440px] mx-auto px-4 lg:px-16 pt-36">
      <Image
        src={Dashboard}
        alt="Logo"
        width="1400"
        height="700"
        className="w-full h-auto rounded-xl shadow dark:shadow-gray-700"
      />
    </div>
  );
}
