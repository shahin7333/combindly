"use client";

import Logo from "@/app/assets/combindly.png";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ModeToggle from "./ui/mode-toggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  // Desktop Navigation
  const desktopNav = [
    { name: "Home", href: "/" },
    { name: "All Apps", href: "/apps" },
    { name: "Pricing", href: "/pricing" },
    { name: "Affiliates", href: "/affiliates" },
    { name: "Support", href: "/support" },
  ];

  return (
    <nav className="w-full px-4 lg:px-16 sticky top-5 backdrop-blur-sm z-[99999]">
      <div className="flex items-center justify-center gap-20 h-[60px] pb-4">
        {/* Logo */}
        <div className="flex items-center space-x-2 px-2 py-1.5 h-full w-10 md:h-auto md:w-auto border border-border rounded-xl bg-white dark:bg-[#050506]/80">
          <Link href="/" className="flex items-center cursor-pointer">
            <Image
              src={Logo}
              alt="Combindly: Shopify Conversion Boosters"
              width={30}
              height={30}
              priority
            />
            <span className="font-extrabold font-axiforma text-[#24223E] dark:text-white hidden md:block">
              Combindly
            </span>
          </Link>

          <div className="border-l-2 border-border h-full pl-2 hidden md:block">
            <p className="text-[10px] font-bold text-[#24223E] dark:text-white tracking-tighter">
              The everything
            </p>
            <p className="text-[10px] font-bold text-[#24223E] dark:text-white tracking-tighter">
              app, for Shopify.
            </p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center px-2 py-1 border border-border rounded-xl bg-white dark:bg-[#050506]/80 space-x-2 ">
          {desktopNav.map((item) => (
            <Link
              href={item.href}
              className="font-medium hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer py-1.5 px-3 rounded-xl"
              key={item.name}
            >
              {item.name}
            </Link>
          ))}
        </div>
        {/* Right side items */}
        <div className="flex items-center space-x-3">
          {/* "Get Started" button - visible only on desktop */}
          <ModeToggle />
          <button
            className="gradient-button-small text-xs md:text-base px-4 py-2 rounded-xl md:font-medium whitespace-nowrap"
            onClick={() => {
              window.open(
                "https://apps.shopify.com/combindly-conversion-boosters",
                "_blank"
              );
            }}
          >
            Start free trial
          </button>
          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="z-[9999999]">
              <div className="flex flex-col space-y-4 mt-4">
                {desktopNav.map((item) => (
                  <Link
                    href={item.href}
                    className="text-sm font-medium hover:text-primary"
                    onClick={closeMenu}
                    key={item.name}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
