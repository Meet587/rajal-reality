
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";
// Remove Navbar import
// import { Navbar } from "@/components/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RealtyReach - Rajal Realty", // This will be overridden by locale layout
  description:
    "Your trusted partner in property buying, selling, rentals, and unique real estate investments.", // This will be overridden by locale layout
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Default lang, will be overridden by locale layout
    // Removed whitespace between <html> and <body> to fix hydration error
    <html lang="en"><body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          geistSans.variable,
          geistMono.variable
        )}
      >
        {/* Navbar is removed from here */}
        <main>{children}</main> {/* Wrap content in main for semantics */}
        <Toaster />
      </body></html>
  );
}
