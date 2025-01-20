"use client";

import Logo from "@/app/assets/combindly.png";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ThemeSwitcher from "./common/ThemeSwitcher";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const closeMenu = () => setIsOpen(false);

    return (
        <nav className="w-full px-4 lg:px-16 sticky top-5 backdrop-blur-sm z-[9999999]">
            <div className="flex items-center justify-center gap-20 h-[60px] pb-4">
                {/* Logo */}
                <div className="flex items-center space-x-2 px-4 py-2 border border-border rounded-xl bg-white dark:bg-[#050506]/80">
                    <Link href="/" className="flex items-center space-x-2">
                        <Image
                            src={Logo}
                            alt="Logo"
                            width="100"
                            height="20"
                            priority
                        />
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center px-4 py-2 border border-border rounded-xl bg-white dark:bg-[#050506]/80 space-x-8">
                    <Link href="#" className=" font-medium">
                        Home
                    </Link>
                    <Link href="#" className="font-medium">
                        All Apps
                    </Link>
                    <Link href="#" className="font-medium">
                        Pricing
                    </Link>
                    <Link href="#" className="font-medium flex items-center">
                        Affiliates
                        <span className="px-1 py-0.5 bg-secondary rounded-sm text-xs font-semibold ml-2 text-white">
                            Upcoming
                        </span>
                    </Link>
                    <Link href="#" className="font-medium">
                        Support
                    </Link>
                </div>

                {/* Right side items */}
                <div className="flex items-center space-x-3">
                    {/* "Get Started" button - visible only on desktop */}

                    <button className="hidden md:inline-flex bg-secondary dark:bg-transparent text-white px-4 py-2  rounded-xl font-medium ">
                        Get Started
                    </button>
                    <ThemeSwitcher />

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
                        <SheetContent side="right">
                            <div className="flex flex-col space-y-4 mt-4">
                                <Link
                                    href="#"
                                    className="text-sm font-medium hover:text-primary"
                                    onClick={closeMenu}
                                >
                                    Home
                                </Link>
                                <Link
                                    href="#"
                                    className="text-sm font-medium hover:text-primary"
                                    onClick={closeMenu}
                                >
                                    All Apps
                                </Link>
                                <Link
                                    href="#"
                                    className="text-sm font-medium hover:text-primary"
                                    onClick={closeMenu}
                                >
                                    Pricing
                                </Link>
                                <Link
                                    href="#"
                                    className="text-sm font-medium hover:text-primary"
                                    onClick={closeMenu}
                                >
                                    Affiliates
                                </Link>
                                <Link
                                    href="#"
                                    className="text-sm font-medium hover:text-primary"
                                    onClick={closeMenu}
                                >
                                    Support
                                </Link>
                                {/* "Get Started" button - visible only in mobile sidebar */}
                                <Button className="w-full" onClick={closeMenu}>
                                    Get Started
                                </Button>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </nav>
    );
}
