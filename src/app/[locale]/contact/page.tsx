
"use client"; // Keep this as the form logic is client-side

// Add unstable_setRequestLocale to hint the build process about the locale,
// even though the component uses 'use client'. This helps resolve static rendering issues during build.
import { unstable_setRequestLocale } from 'next-intl/server';

import { useState, type FC } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Footer } from "@/components/footer";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
import { useTranslations } from 'next-intl';

// Define Zod schema for form validation (messages are handled by react-hook-form, not i18n directly here)
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().optional(),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." })
    .max(500, { message: "Message cannot exceed 500 characters." }),
});

type FormData = z.infer<typeof formSchema>;

interface ContactPageProps {
  params: {
    locale: string;
  };
}

const ContactPage: FC<ContactPageProps> = ({ params: { locale } }) => {
  // Enable static rendering analysis hint
  unstable_setRequestLocale(locale);

  const t = useTranslations('ContactPage');
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

   // Server Action (placeholder - replace with actual logic)
   async function onSubmit(values: FormData) {
    setIsSubmitting(true);
    console.log("Form submitted:", values);
    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // In a real app, you'd send this data to your backend/API endpoint here.
    // Example:
    // try {
    //   const response = await fetch('/api/contact', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(values),
    //   });
    //   if (!response.ok) throw new Error('Submission failed');
    //   toast({ title: t('toastSuccessTitle'), description: t('toastSuccessDescription') });
    //   form.reset(); // Clear form on success
    // } catch (error) {
    //   console.error("Submission error:", error);
    //   toast({ title: t('toastErrorTitle'), description: t('toastErrorDescription'), variant: "destructive" });
    // } finally {
    //   setIsSubmitting(false);
    // }

    // Placeholder success notification
    toast({
      title: t('toastSuccessTitle'),
      description: t('toastSuccessDescription'),
    });
    form.reset(); // Clear form after simulated submission
    setIsSubmitting(false);
  }

    // Helper to split phone numbers and create links
    const renderPhoneLinks = (phoneString: string) => {
        const phones = phoneString.split(' / ');
        return phones.map((phone, index) => {
            const cleanPhone = phone.replace(/\s+/g, ''); // Remove spaces for tel link
            return (
                <a key={index} href={`tel:${cleanPhone}`} className="text-foreground hover:text-accent transition-colors block">
                    {phone.trim()} {/* Display original phone number */}
                </a>
            );
        });
    };


  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-primary text-primary-foreground py-6 shadow-md">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold">{t('headerTitle')}</h1>
          <p className="text-primary-foreground/80">{t('headerDescription')}</p>
        </div>
      </header>
      <main className="flex-grow container mx-auto px-4 py-12 lg:py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form Section */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">{t('formTitle')}</CardTitle>
              <CardDescription>{t('formDescription')}</CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t('formNameLabel')}</FormLabel>
                        <FormControl>
                          <Input placeholder={t('formNamePlaceholder')} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t('formEmailLabel')}</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder={t('formEmailPlaceholder')} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                   <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t('formPhoneLabel')}</FormLabel>
                        <FormControl>
                          <Input type="tel" placeholder={t('formPhonePlaceholder')} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t('formSubjectLabel')}</FormLabel>
                        <FormControl>
                          <Input placeholder={t('formSubjectPlaceholder')} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t('formMessageLabel')}</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder={t('formMessagePlaceholder')}
                            className="resize-none"
                            rows={5}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" disabled={isSubmitting} className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                    {isSubmitting ? t('formSubmittingButton') : t('formSubmitButton')}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>

          {/* Contact Details Section */}
          <div className="space-y-8">
             <Card className="shadow-lg">
                <CardHeader>
                    <CardTitle className="text-2xl text-primary">{t('detailsTitle')}</CardTitle>
                    <CardDescription>{t('detailsDescription')}</CardDescription>
                 </CardHeader>
                 <CardContent className="space-y-4">
                    <div className="flex items-center gap-4">
                         <Mail className="h-6 w-6 text-accent" />
                         <a href={`mailto:${t('email')}`} className="text-foreground hover:text-accent transition-colors">{t('email')}</a>
                    </div>
                     <div className="flex items-start gap-4">
                         <Phone className="h-6 w-6 text-accent mt-1" />
                         <div>
                             {renderPhoneLinks(t('phone'))}
                         </div>
                    </div>
                     <div className="flex items-start gap-4">
                         <MapPin className="h-6 w-6 text-accent mt-1" />
                         <p className="text-foreground">
                         {t('addressLine1')}<br />
                         {t('addressLine2')}
                         {t('addressLine3') && <><br />{t('addressLine3')}</>}
                         </p>
                    </div>
                 </CardContent>
             </Card>
             {/* Optional: Map Embed */}
             {/* <Card className="shadow-lg overflow-hidden">
                 <CardHeader>
                    <CardTitle className="text-xl text-primary">Our Location</CardTitle>
                 </CardHeader>
                 <CardContent className="p-0">
                    <div className="aspect-video bg-muted flex items-center justify-center text-muted-foreground">
                         Map Placeholder (Integrate Google Maps or similar here)
                    </div>
                 </CardContent>
             </Card> */}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
