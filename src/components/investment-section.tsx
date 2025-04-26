
'use client'; // Add this directive for useTranslations

import type { FC } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import {
  TrendingUp,
  Building2,
  Map,
  Palmtree,
  Rocket,
} from "lucide-react"; // Example icons
import { useTranslations } from 'next-intl'; // Import useTranslations

export const InvestmentSection: FC = () => {
  const t = useTranslations('InvestmentSection'); // Initialize translations

  // Define investments using translations
  const investments = [
    {
      icon: TrendingUp,
      title: t('buybackTitle'),
      description: t('buybackDescription'),
    },
    {
      icon: Building2,
      title: t('preLeaseTitle'),
      description: t('preLeaseDescription'),
    },
    {
      icon: Map,
      title: t('plottingTitle'),
      description: t('plottingDescription'),
    },
    {
      icon: Palmtree,
      title: t('weekendVillasTitle'),
      description: t('weekendVillasDescription'),
    },
    {
      icon: Rocket,
      title: t('preLaunchTitle'),
      description: t('preLaunchDescription'),
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
          {t('title')} {/* Use translated section title */}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {investments.map((investment, index) => (
            <Card
              key={index}
              className="flex flex-col shadow-md hover:shadow-xl transition-all duration-300 ease-in-out hover:scale-[1.03]"
            >
              <CardHeader className="flex flex-row items-center gap-4 pb-4">
                <div className="p-3 bg-primary text-primary-foreground rounded-md transition-transform duration-300 group-hover:scale-110">
                  <investment.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl font-semibold text-primary">
                  {investment.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  {investment.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
