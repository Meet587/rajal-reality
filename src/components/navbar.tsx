"use client";

import type { FC } from "react";
import Link from "next/link";
import Image from "next/image"; // Import Image component
import { Home, Building, Info, Mail, Menu } from "lucide-react"; // Icons (Removed Languages)
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
// Removed i18n imports: useLocale, useTranslations, DropdownMenu components
// Removed useRouter and usePathname as locale switching is gone

export const Navbar: FC = () => {
  // Removed t function, locale, router, pathname
  // Removed switchLocale function

  // Define navigation links with hardcoded English labels and non-locale paths
  const navLinks = [
    { href: `/`, label: 'Home', icon: Home },
    { href: `/properties`, label: 'Properties', icon: Building },
    { href: `/about`, label: 'About Us', icon: Info },
    { href: `/contact`, label: 'Contact Us', icon: Mail },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo - Link points to root home */}
        <Link href={`/`} passHref legacyBehavior>
          <a className="flex items-center cursor-pointer">
             <Image
               src="/logo.svg"
               alt="Rajal Realty Logo" // Hardcoded English alt text
               width={120}
               height={32}
               priority
             />
          </a>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-4">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} passHref legacyBehavior>
              <Button variant="ghost" className="text-foreground hover:bg-accent/80 hover:text-accent-foreground transition-colors duration-200" asChild>
                 <a>
                    <link.icon className="mr-2 h-4 w-4" />
                    {link.label}
                 </a>
              </Button>
            </Link>
          ))}

          {/* Removed Language Switcher Dropdown */}
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center gap-2">
           {/* Removed Language Switcher Dropdown (Mobile) */}

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
                {/* Hardcoded English screen reader text */}
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="grid gap-4 py-6">
                 {/* Mobile Logo - Link points to root home */}
                 <Link href={`/`} passHref legacyBehavior>
                    <a className="flex items-center px-4 pb-4 border-b mb-4 cursor-pointer">
                         <Image
                           src="/logo.svg"
                           alt="Rajal Realty Logo" // Hardcoded English alt text
                           width={100}
                           height={27}
                         />
                    </a>
                 </Link>
                {navLinks.map((link) => (
                  <Link key={link.href} href={link.href} passHref legacyBehavior>
                    <Button variant="ghost" className="w-full justify-start text-foreground hover:bg-accent/80 hover:text-accent-foreground transition-colors duration-200" asChild>
                       <a>
                         <link.icon className="mr-2 h-4 w-4" />
                         {link.label}
                       </a>
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
