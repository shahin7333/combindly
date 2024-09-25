"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Moon, Sun, Menu } from "lucide-react";

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="w-full px-4 lg:px-6 h-12 flex items-center justify-between border-b border-input sticky top-0">
      {/* Logo */}
      <Link href="/" className="flex items-center space-x-2">
        <svg
          className="h-8 w-auto"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
        <span className="font-bold text-xl">YourLogo</span>
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex space-x-4">
        <Link href="#" className="text-sm font-medium hover:text-primary">
          Home
        </Link>
        <Link href="#" className="text-sm font-medium hover:text-primary">
          About
        </Link>
        <Link href="#" className="text-sm font-medium hover:text-primary">
          Services
        </Link>
        <Link href="#" className="text-sm font-medium hover:text-primary">
          Contact
        </Link>
      </div>

      {/* Right side items */}
      <div className="flex items-center space-x-4">
        {/* "Get Started" button - visible only on desktop */}
        <Button className="hidden md:inline-flex">Get Started</Button>

        <Button
          variant="ghost"
          size="icon"
          aria-label="Toggle theme"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
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
    </nav>
  );
}
