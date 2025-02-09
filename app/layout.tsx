import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

const axiforma = localFont({
    src: "./fonts/Axiforma-Black.woff",
    variable: "--font-axiforma",
    weight: "100 900",
});

export const metadata: Metadata = {
    title: "Combindly: Conversion Boosters - Grow Your Store Faster: Everything You Need to Boost Sales! | Shopify App",
    description:
        "Boost your Shopify store’s sales and growth with our powerful all-in-one tool. Increase conversions, reduce costs, and optimize your store for faster success!",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} ${axiforma.variable} antialiased dark:bg-[#050506]`}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="light"
                    enableSystem
                    disableTransitionOnChange
                >
                    <Navbar />
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
