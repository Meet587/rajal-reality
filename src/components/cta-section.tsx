'use client'; // Keep 'use client' as Button and Link might need client interaction

import type { FC } from "react";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
// Removed i18n imports: useTranslations, useLocale

export const CtaSection: FC = () => {
  // Removed t function and locale variable

  return (
    <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
         {/* Hardcoded English text */}
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Find Your Perfect Property or Investment?
        </h2>
         {/* Hardcoded English text */}
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Let Rajal Realty guide you through every step. Contact us today for a personalized consultation or explore our current listings.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          {/* Update href to non-locale path */}
          <Link href={`/contact`} passHref>
            <Button size="lg" variant="secondary" className="text-primary hover:bg-accent hover:text-accent-foreground">
              {/* Hardcoded English text */}
              Contact Us Now
            </Button>
          </Link>
          {/* Update href to non-locale path */}
          <Link href={`/properties`} passHref>
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              {/* Hardcoded English text */}
              View Properties
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
