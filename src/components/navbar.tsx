
"use client";

import type { FC } from "react";
import Link from "next/link";
import { Home, Building, Info, Mail } from "lucide-react"; // Icons for links
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react"; // Hamburger menu icon

// Define navigation links
const navLinks = [
  { href: "/", label: "Home", icon: Home },
  { href: "/properties", label: "Properties", icon: Building },
  { href: "/about", label: "About Us", icon: Info },
  { href: "/contact", label: "Contact Us", icon: Mail },
];

export const Navbar: FC = () => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" passHref>
          <span className="text-xl font-bold text-primary cursor-pointer">
            Rajal Realty
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} passHref>
              <Button variant="ghost" className="text-foreground hover:bg-accent hover:text-accent-foreground">
                <link.icon className="mr-2 h-4 w-4" />
                {link.label}
              </Button>
            </Link>
          ))}
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="grid gap-4 py-6">
                 {/* Mobile Logo */}
                 <Link href="/" passHref>
                    <span className="text-lg font-bold text-primary px-4 pb-4 border-b mb-4 block">
                        Rajal Realty
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
