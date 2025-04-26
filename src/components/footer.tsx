'use client'; // Keep 'use client' if needed for future interactions, although static currently

import type { FC } from "react";
// Removed i18n imports: useTranslations

export const Footer: FC = () => {
  // Removed t function
  const currentYear = new Date().getFullYear(); // Get current year

  return (
    <footer className="py-8 bg-secondary border-t border-border">
      <div className="container mx-auto px-4 text-center text-muted-foreground text-sm">
        {/* Hardcoded English text with dynamic year */}
        <p>&#169; {currentYear} Rajal Realty. All rights reserved.</p>
        {/* Hardcoded English text */}
        <p>Your Trusted Partner in Real Estate.</p>
        {/* Add social media links or other footer content here if needed */}
      </div>
    </footer>
  );
};
