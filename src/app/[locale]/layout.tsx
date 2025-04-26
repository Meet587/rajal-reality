
import type { Metadata } from "next";
import { notFound } from 'next/navigation';
// Remove useMessages import from server component scope
import { NextIntlClientProvider } from 'next-intl';
import { Navbar } from "@/components/navbar";
import { ReactNode } from "react";
import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";
import { Geist, Geist_Mono } from "next/font/google";

type Props = {
  children: ReactNode;
  params: { locale: string };
};

// Can be imported from a shared config
const locales = ['en', 'gu'];

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export function generateStaticParams() {
  return locales.map((locale) => ({locale}));
}

// Generate metadata based on locale
export async function generateMetadata({ params: { locale } }: Props): Promise<Metadata> {
  if (!locales.includes(locale)) {
    notFound();
  }
  try {
    // Fetch messages for metadata generation
    const messages = (await import(`../../messages/${locale}.json`)).default;
    return {
      title: messages.Metadata.title,
      description: messages.Metadata.description,
    };
  } catch (error) {
    console.error(`Failed to load messages for locale: ${locale}`, error);
    return {
        title: "RealtyReach - Rajal Realty", // Fallback title
        description: "Error loading localized description.", // Fallback description
    };
  }
}


export default async function LocaleLayout({ children, params: { locale } }: Props) {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();

  // Fetch messages explicitly for the provider
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    console.error(`Failed to load messages for locale: ${locale}`, error);
    notFound(); // Or handle error appropriately
  }

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
        <Navbar />
         {children}
        <Toaster />
    </NextIntlClientProvider>
  );
}

// Root layout should handle <html> and <body> structure and global styles
// This layout focuses on locale-specific providers and components like Navbar

