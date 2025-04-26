
'use client'; // Add this directive for useTranslations

import type { FC } from "react";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { useTranslations } from 'next-intl'; // Import useTranslations
import { useLocale } from 'next-intl'; // Import useLocale

export const CtaSection: FC = () => {
  const t = useTranslations('CtaSection'); // Initialize translations
  const locale = useLocale(); // Get current locale for Link

  return (
    <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          {t('title')} {/* Use translated title */}
        </h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          {t('subtitle')} {/* Use translated subtitle */}
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          {/* Update href to include locale */}
          <Link href={`/${locale}/contact`} passHref>
            <Button size="lg" variant="secondary" className="text-primary hover:bg-accent hover:text-accent-foreground">
              {t('contactButton')} {/* Use translated button text */}
            </Button>
          </Link>
          {/* Update href to include locale */}
          <Link href={`/${locale}/properties`} passHref>
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              {t('propertiesButton')} {/* Use translated button text */}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
