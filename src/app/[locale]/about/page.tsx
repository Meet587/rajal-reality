
'use client';

import type { FC } from "react";
import { Footer } from "@/components/footer";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Building, DollarSign, Users, Target } from "lucide-react"; // Relevant icons
import { useTranslations } from 'next-intl';

const AboutPage: FC = () => {
  const t = useTranslations('AboutPage');

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Section - Keep consistent with other pages */}
      <header className="bg-primary text-primary-foreground py-6 shadow-md">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold">{t('headerTitle')}</h1>
          <p className="text-primary-foreground/80">{t('headerDescription')}</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-12 lg:py-16">
        <Card className="shadow-lg mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-primary flex items-center gap-2">
                <Users className="w-6 h-6" /> {t('welcomeTitle')}
            </CardTitle>
            <CardDescription>{t('welcomeDescription')}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 text-foreground/90">
            <p>
              {t('contentP1')}
            </p>
            <p>
              {t('contentP2')}
            </p>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-8">
           <Card className="shadow-lg">
                <CardHeader>
                    <CardTitle className="text-xl text-primary flex items-center gap-2"><Target className="w-5 h-5"/> {t('missionTitle')}</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-foreground/90">
                        {t('missionDescription')}
                    </p>
                </CardContent>
           </Card>
            <Card className="shadow-lg">
                <CardHeader>
                    <CardTitle className="text-xl text-primary flex items-center gap-2"><DollarSign className="w-5 h-5"/> {t('growthTitle')}</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-foreground/90">
                       {t('growthDescription')}
                    </p>
                </CardContent>
           </Card>
        </div>

      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;
