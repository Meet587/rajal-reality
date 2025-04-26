
"use client";

import type { FC } from "react";
import Link from "next/link";
import { Home, Building, Info, Mail, Languages, Menu } from "lucide-react"; // Icons
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation'; // Use next/navigation for App Router

export const Navbar: FC = () => {
  const t = useTranslations('Navbar');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  // Function to switch locale
  const switchLocale = (newLocale: string) => {
    // Remove current locale prefix from pathname
    const currentPathWithoutLocale = pathname.startsWith(`/${locale}`)
      ? pathname.substring(`/${locale}`.length) || '/' // Ensure root path '/' is handled
      : pathname;
    router.push(`/${newLocale}${currentPathWithoutLocale}`);
  };

  // Define navigation links using translations and locale-prefixed hrefs
  const navLinks = [
    { href: `/${locale}/`, label: t('home'), icon: Home },
    { href: `/${locale}/properties`, label: t('properties'), icon: Building },
    { href: `/${locale}/about`, label: t('about'), icon: Info },
    { href: `/${locale}/contact`, label: t('contact'), icon: Mail },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo - Link points to locale-specific home */}
        <Link href={`/${locale}/`} passHref>
          <span className="text-xl font-bold text-primary cursor-pointer">
            {t('logo')}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-4">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} passHref>
              <Button variant="ghost" className="text-foreground hover:bg-accent hover:text-accent-foreground">
                <link.icon className="mr-2 h-4 w-4" />
                {link.label}
              </Button>
            </Link>
          ))}

          {/* Language Switcher Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <Languages className="h-5 w-5" />
                <span className="sr-only">{t('language')}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => switchLocale('en')} disabled={locale === 'en'}>
                {t('english')}
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => switchLocale('gu')} disabled={locale === 'gu'}>
                {t('gujarati')}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center gap-2">
           {/* Language Switcher Dropdown (Mobile) */}
           <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <Languages className="h-5 w-5" />
                <span className="sr-only">{t('language')}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => switchLocale('en')} disabled={locale === 'en'}>
                 {t('english')}
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => switchLocale('gu')} disabled={locale === 'gu'}>
                 {t('gujarati')}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">{t('toggleNavigation')}</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="grid gap-4 py-6">
                 {/* Mobile Logo - Link points to locale-specific home */}
                 <Link href={`/${locale}/`} passHref>
                    <span className="text-lg font-bold text-primary px-4 pb-4 border-b mb-4 block">
                        {t('logo')}
                    </span>
                 </Link>
                {navLinks.map((link) => (
                  <Link key={link.href} href={link.href} passHref>
                    <Button variant="ghost" className="w-full justify-start text-foreground hover:bg-accent hover:text-accent-foreground">
                        <link.icon className="mr-2 h-4 w-4" />
                         {link.label}
                    </Button>
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};
