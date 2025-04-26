
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// Remove Toaster import from root, handle in locale layout
// import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";
// Remove Navbar import from root, handle in locale layout
// import { Navbar } from "@/components/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadata defined here will be the default, overridden by locale layout
export const metadata: Metadata = {
  title: "RealtyReach - Rajal Realty",
  description:
    "Your trusted partner in property buying, selling, rentals, and unique real estate investments.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Default lang set here, locale layout will override via props if needed,
    // but next-intl handles lang attribute automatically based on URL segment.
    // Removed whitespace between <html> and <body> to fix hydration error
    <html lang="en" suppressHydrationWarning={true}><body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          geistSans.variable,
          geistMono.variable
        )}
      >
        {/* Navbar is removed from here, rendered in locale layout */}
        {/* Wrap children directly, locale layout provides structure */}
        {children}
        {/* Toaster is removed from here, rendered in locale layout */}
        {/* <Toaster /> */}
      </body></html>
  );
}
