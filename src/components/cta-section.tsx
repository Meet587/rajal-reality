import type { FC } from "react";
import { Button } from "@/components/ui/button";
import Link from 'next/link';

export const CtaSection: FC = () => {
  return (
    <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Find Your Perfect Property or Investment?
        </h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Let Rajal Realty guide you through every step. Contact us today for a
          personalized consultation or explore our current listings.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/contact" passHref>
            <Button size="lg" variant="secondary" className="text-primary hover:bg-accent hover:text-accent-foreground">
              Contact Us Now
            </Button>
          </Link>
          <Link href="/properties" passHref>
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              View Properties
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
