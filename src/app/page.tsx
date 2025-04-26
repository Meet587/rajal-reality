import { HeroSection } from "@/components/hero-section";
import { ServicesSection } from "@/components/services-section";
import { InvestmentSection } from "@/components/investment-section";
import { CtaSection } from "@/components/cta-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <HeroSection />
      <ServicesSection />
      <InvestmentSection />
      {/* Placeholder for Testimonials/Trust Signals if available */}
      {/* <TestimonialSection /> */}
      <CtaSection />
      <Footer />
    </main>
  );
}
