'use client'; // Keep 'use client' if needed for future interactions, although static currently

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
// Removed i18n imports: useTranslations

export const InvestmentSection: FC = () => {
  // Removed t function

  // Define investments using hardcoded English text
  const investments = [
    {
      icon: TrendingUp,
      title: "Buyback Deals",
      description: "Secure investments with guaranteed returns through our exclusive property buyback agreements.",
    },
    {
      icon: Building2,
      title: "Pre-Lease Properties",
      description: "Invest in commercial properties with tenants already secured, ensuring immediate rental income.",
    },
    {
      icon: Map,
      title: "Plotting",
      description: "Acquire strategically located land parcels with high appreciation potential for future development.",
    },
    {
      icon: Palmtree,
      title: "Weekend Villas",
      description: "Own a luxurious getaway home perfect for relaxation or generating rental income.",
    },
    {
      icon: Rocket,
      title: "Pre-Launch Projects",
      description: "Gain early access to promising new developments at preferential rates before public launch.",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
         {/* Hardcoded English text */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
          Explore Unique Investment Opportunities
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
