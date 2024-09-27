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
        <nav className="w-full px-4 lg:px-16 sticky top-0 bg-white/80 dark:bg-[#050506]/80 backdrop-blur-sm z-[9999999]">
            <div className="flex items-center justify-between h-[50px] border-b border-border">
                {/* Logo */}
                <Link href="/" className="flex items-center space-x-2">
                    <Image
                        src={Logo}
                        alt="Logo"
                        width="120"
                        height="36"
                        priority
                    />
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex space-x-8">
                    <Link href="#" className="text-sm font-medium">
                        Home
                    </Link>
                    <Link href="#" className="text-sm font-medium">
                        All Apps
                    </Link>
                    <Link href="#" className="text-sm font-medium">
                        Pricing
                    </Link>
                    <Link href="#" className="text-sm font-medium">
                        Affiliates
                        <span className="px-1 py-0.5 bg-secondary rounded-sm font-semibold ml-2 text-white">
                            Upcoming
                        </span>
                    </Link>
                    <Link href="#" className="text-sm font-medium">
                        Support
                    </Link>
                </div>

                {/* Right side items */}
                <div className="flex items-center space-x-4">
                    {/* "Get Started" button - visible only on desktop */}

                    <Button
                        variant="outline"
                        className="hidden md:inline-flex dark:text-white bg-transparent hover:bg-secondary hover:text-white"
                        size="sm"
                    >
                        Get Started
                    </Button>
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
