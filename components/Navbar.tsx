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
                    {desktopNav.map((item) => (
                        <Link
                            href={item.href}
                            className="font-medium"
                            key={item.name}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
                {/* Right side items */}
                <div className="flex items-center space-x-3">
                    {/* "Get Started" button - visible only on desktop */}

                    <button className="gradient-button-small px-4 py-2  rounded-xl font-medium ">
                        See Demo
                    </button>

                    <ModeToggle />

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
