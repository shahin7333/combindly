"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeSwitcher = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => setMounted(true), []);

    return (
        <>
            <button
                aria-label="Toggle theme"
                onClick={() =>
                    mounted && setTheme(theme === "dark" ? "light" : "dark")
                }
                className="dark:text-white bg-white hover:bg-secondary dark:bg-transparent hover:text-white px-4 py-[10px] border border-border rounded-xl font-medium"
            >
                {mounted &&
                    (theme === "dark" ? (
                        <Sun className="h-5 w-5" />
                    ) : (
                        <Moon className="h-5 w-5" />
                    ))}
            </button>
        </>
    );
};

export default ThemeSwitcher;
