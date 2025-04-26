
'use client'; // Add this directive for useTranslations

import type { FC } from "react";
import { useTranslations } from 'next-intl'; // Import useTranslations

export const Footer: FC = () => {
  const t = useTranslations('Footer'); // Initialize translations
  const currentYear = new Date().getFullYear(); // Get current year

  return (
    <footer className="py-8 bg-secondary border-t border-border">
      <div className="container mx-auto px-4 text-center text-muted-foreground text-sm">
        {/* Use translated copyright text with dynamic year */}
        <p>{t('copyright', { year: currentYear })}</p>
        <p>{t('tagline')}</p> {/* Use translated tagline */}
        {/* Add social media links or other footer content here if needed */}
      </div>
    </footer>
  );
};
