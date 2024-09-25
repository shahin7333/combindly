"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Moon, Sun, Menu } from "lucide-react";
import Image from "next/image";
import Logo from "@/app/assets/combindly.png";

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="w-full px-4 lg:px-16 border-b border-input sticky top-0 bg-white dark:bg-[#050506] z-100">
      <div className="flex items-center justify-between h-14 ">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image src={Logo} alt="Logo" width="140" height="40" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
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
          </Link>
          <Link href="#" className="text-sm font-medium">
            Support
          </Link>
        </div>

        {/* Right side items */}
        <div className="flex items-center space-x-4">
          {/* "Get Started" button - visible only on desktop */}
          <Button
            variant="secondary"
            className="hidden md:inline-flex text-white"
          >
            Get Started
          </Button>

          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle theme"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="border border-input"
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>

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
                  About
                </Link>
                <Link
                  href="#"
                  className="text-sm font-medium hover:text-primary"
                  onClick={closeMenu}
                >
                  Services
                </Link>
                <Link
                  href="#"
                  className="text-sm font-medium hover:text-primary"
                  onClick={closeMenu}
                >
                  Contact
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
