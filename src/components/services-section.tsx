
'use client'; // Add this directive for useTranslations

import type { FC } from "react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Home, Tag, KeyRound } from "lucide-react";
import { useTranslations } from 'next-intl'; // Import useTranslations

export const ServicesSection: FC = () => {
  const t = useTranslations('ServicesSection'); // Initialize translations

  // Define services using translations
  const services = [
    {
      icon: Home,
      title: t('buyingTitle'),
      description: t('buyingDescription'),
    },
    {
      icon: Tag,
      title: t('sellingTitle'),
      description: t('sellingDescription'),
    },
    {
      icon: KeyRound,
      title: t('rentalsTitle'),
      description: t('rentalsDescription'),
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
          {t('title')} {/* Use translated section title */}
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
