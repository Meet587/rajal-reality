'use client'; // Keep 'use client' if needed for future interactions, although static currently

import type { FC } from "react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Home, Tag, KeyRound } from "lucide-react";
// Removed i18n imports: useTranslations

export const ServicesSection: FC = () => {
  // Removed t function

  // Define services using hardcoded English text
  const services = [
    {
      icon: Home,
      title: "Property Buying",
      description: "Find your dream home or ideal investment property with our expert guidance and extensive listings.",
    },
    {
      icon: Tag,
      title: "Property Selling",
      description: "Maximize your property's value and reach the right buyers through our strategic marketing and negotiation skills.",
    },
    {
      icon: KeyRound,
      title: "Property Rentals",
      description: "Secure reliable tenants or find the perfect rental property with our comprehensive management and screening services.",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-secondary">
      <div className="container mx-auto px-4">
         {/* Hardcoded English text */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
          Our Core Real Estate Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="text-center shadow-md hover:shadow-xl transition-all duration-300 ease-in-out hover:scale-[1.03]"
            >
              <CardHeader className="items-center">
                <div className="p-4 bg-accent text-accent-foreground rounded-full mb-4 inline-block transition-transform duration-300 group-hover:scale-110">
                  <service.icon className="h-8 w-8" />
                </div>
                <CardTitle className="text-xl font-semibold text-primary mb-2">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">{service.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
