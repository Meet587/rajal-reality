
import type { Metadata } from "next";
import { useLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { useMessages, NextIntlClientProvider } from 'next-intl';
import { Navbar } from "@/components/navbar"; // Import Navbar here
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  params: { locale: string };
};

// Can be imported from a shared config
const locales = ['en', 'gu'];

export function generateStaticParams() {
  return locales.map((locale) => ({locale}));
}

// Generate metadata based on locale
export async function generateMetadata({ params: { locale } }: Props): Promise<Metadata> {
  const messages = (await import(`../../messages/${locale}.json`)).default;

  return {
    title: messages.Metadata.title,
    description: messages.Metadata.description,
  };
}


export default function LocaleLayout({ children, params: { locale } }: Props) {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();

  // Using internationalization in Client Components
  const messages = useMessages();

  return (
    <html lang={locale}>
        <body>
            <NextIntlClientProvider locale={locale} messages={messages}>
                <Navbar />
                 {children}
            </NextIntlClientProvider>
        </body>
    </html>
  );
}
