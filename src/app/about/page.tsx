
import type { FC } from "react";
import { Footer } from "@/components/footer";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Building, DollarSign, Users, Target } from "lucide-react"; // Relevant icons

// Removed locale param and unstable_setRequestLocale
// Removed useTranslations

const AboutPage: FC = () => {
  // Removed locale logic and t function

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Section - Keep consistent with other pages */}
      <header className="bg-primary text-primary-foreground py-6 shadow-md">
        <div className="container mx-auto px-4">
          {/* Hardcoded English text */}
          <h1 className="text-3xl font-bold">About Rajal Realty</h1>
          <p className="text-primary-foreground/80">Your Partner in Real Estate and Finance</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-12 lg:py-16">
        <Card className="shadow-lg mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-primary flex items-center gap-2">
                <Users className="w-6 h-6" /> Welcome to Rajal Realty and Financial Services {/* Hardcoded English text */}
            </CardTitle>
            {/* Hardcoded English text */}
            <CardDescription>Your trusted partner in Ahmedabad for all your real estate and financial needs.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 text-foreground/90">
             {/* Hardcoded English text */}
            <p>
             Based in Ahmedabad, Rajal Realty specializes in helping you find your dream property, whether it’s residential, commercial, or investment-focused. With deep roots in Ahmedabad’s vibrant real estate market and strong relationships with local builders, we combine expertise, transparency, and commitment to deliver unmatched value and customer satisfaction.
            </p>
            {/* Hardcoded English text */}
            <p>
              On the financial services front, we offer tailored solutions in Ahmedabad to empower you with the resources and guidance needed to make sound financial decisions. From loans and investment planning to comprehensive advisory services, our team ensures your financial goals are met with ease and confidence.
            </p>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-8">
           <Card className="shadow-lg">
                <CardHeader>
                    {/* Hardcoded English text */}
                    <CardTitle className="text-xl text-primary flex items-center gap-2"><Target className="w-5 h-5"/> Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                    {/* Hardcoded English text */}
                    <p className="text-foreground/90">
                        Our mission is simple: to build lasting relationships by providing professional, personalized, and reliable services that exceed your expectations.
                    </p>
                </CardContent>
           </Card>
            <Card className="shadow-lg">
                <CardHeader>
                     {/* Hardcoded English text */}
                    <CardTitle className="text-xl text-primary flex items-center gap-2"><DollarSign className="w-5 h-5"/> Partner in Growth</CardTitle>
                </CardHeader>
                <CardContent>
                    {/* Hardcoded English text */}
                    <p className="text-foreground/90">
                       Let Rajal Realty and Financial Services be your partner in growth. Connect with us today to explore opportunities, make informed decisions, and secure your future!
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
