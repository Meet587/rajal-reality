
'use client'; // Add this directive for useTranslations

import type { FC } from "react";
import Image from "next/image";
import Link from 'next/link'; // Import Link
import { Button } from "@/components/ui/button";
import { useLocale, useTranslations } from 'next-intl'; // Import useTranslations and useLocale

export const HeroSection: FC = () => {
  const t = useTranslations('HeroSection'); // Initialize translations
  const locale = useLocale(); // Get current locale

  return (
    <section className="relative w-full h-[60vh] min-h-[400px] flex items-center justify-center text-center bg-gradient-to-r from-primary to-blue-800 text-primary-foreground p-8 overflow-hidden">
      {/* Optional: Background Image */}
      <Image
        src="https://picsum.photos/1600/900?grayscale&blur=2" // Replace with a relevant real estate image
        alt="Modern architecture background"
        layout="fill"
        objectFit="cover"
        quality={75}
        className="absolute inset-0 z-0 opacity-20"
      />
      <div className="relative z-10 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold !leading-tight mb-4 drop-shadow-md">
          {t('title')} {/* Use translated title */}
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto drop-shadow-sm">
          {t('subtitle')} {/* Use translated subtitle */}
        </p>
        {/* Link the button to the properties page with locale */}
        <Link href={`/${locale}/properties`} passHref legacyBehavior>
            <Button asChild size="lg" variant="secondary" className="text-primary hover:bg-accent hover:text-accent-foreground">
                <a>{t('button')}</a>{/* Use translated button text */}
            </Button>
        </Link>
      </div>
    </section>
  );
};
