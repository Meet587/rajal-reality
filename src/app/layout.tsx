import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster"; // Import Toaster
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/navbar"; // Import Navbar

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Default metadata, no longer based on locale
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
    // Removed locale-specific lang attribute, default to "en"
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          geistSans.variable,
          geistMono.variable
        )}
      >
        <Navbar /> {/* Add Navbar here */}
        {children}
        <Toaster /> {/* Add Toaster here */}
      </body>
    </html>
  );
}
