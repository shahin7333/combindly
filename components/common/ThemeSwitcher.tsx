"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";

const ThemeSwitcher = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => setMounted(true), []);

    return (
        <>
            <Button
                variant="ghost"
                size="icon"
                aria-label="Toggle theme"
                onClick={() =>
                    mounted && setTheme(theme === "dark" ? "light" : "dark")
                }
                className="p-0 hover:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 border-border"
            >
                {mounted &&
                    (theme === "dark" ? (
                        <Sun className="h-5 w-5" />
                    ) : (
                        <Moon className="h-5 w-5" />
                    ))}
            </Button>
        </>
    );
};

export default ThemeSwitcher;
