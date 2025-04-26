
import type { Metadata } from "next";
import { useLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { useMessages, NextIntlClientProvider } from 'next-intl';
import { Navbar } from "@/components/navbar"; // Import Navbar here
import { ReactNode } from "react";
import { Toaster } from "@/components/ui/toaster"; // Import Toaster
import { cn } from "@/lib/utils"; // Import cn
import { Geist, Geist_Mono } from "next/font/google"; // Import fonts

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
  // Ensure locale is valid before attempting to import messages
  if (!locales.includes(locale)) {
    notFound();
  }
  try {
    const messages = (await import(`../../messages/${locale}.json`)).default;
    return {
      title: messages.Metadata.title,
      description: messages.Metadata.description,
    };
  } catch (error) {
    console.error(`Failed to load messages for locale: ${locale}`, error);
    // Fallback metadata or rethrow error
     return {
        title: "RealtyReach - Rajal Realty", // Fallback title
        description: "Error loading localized description.", // Fallback description
    };
  }
}


export default function LocaleLayout({ children, params: { locale } }: Props) {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();

  // Using internationalization in Client Components
  const messages = useMessages();

  return (
    // Removed <html> and <body> tags as they are handled by the root layout
    <NextIntlClientProvider locale={locale} messages={messages}>
        <Navbar />
         {children}
        <Toaster /> {/* Ensure Toaster is rendered within the provider */}
    </NextIntlClientProvider>
  );
}

// Root layout should handle <html> and <body> structure and global styles
// This layout focuses on locale-specific providers and components like Navbar
