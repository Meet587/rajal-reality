
"use client"; // Keep this as the form logic is client-side

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

// Removed locale param and unstable_setRequestLocale
// Removed useTranslations

// Define Zod schema for form validation (using English messages)
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

// Removed interface ContactPageProps

const ContactPage: FC = () => {
  // Removed locale logic and t function
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

    // Placeholder success notification with English text
    toast({
      title: "Message Sent (Simulated)",
      description: "We've received your inquiry and will be in touch soon.",
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

  // Hardcoded contact details
  const contactEmail = "rajal.associate@gmail.com";
  const contactPhone = "+91 90999 04235 / +91 94296 86726";
  const addressLine1 = "Shivranjani Society, Shivranjani Cross Road";
  const addressLine2 = "Satellite, Ahmedabad";
  // const addressLine3 = ""; // Keep if needed

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-primary text-primary-foreground py-6 shadow-md">
        <div className="container mx-auto px-4">
          {/* Hardcoded English text */}
          <h1 className="text-3xl font-bold">Contact Rajal Realty</h1>
          <p className="text-primary-foreground/80">We're here to help with all your real estate needs.</p>
        </div>
      </header>
      <main className="flex-grow container mx-auto px-4 py-12 lg:py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form Section */}
          <Card className="shadow-lg">
            <CardHeader>
              {/* Hardcoded English text */}
              <CardTitle className="text-2xl text-primary">Send Us a Message</CardTitle>
              <CardDescription>Fill out the form below, and we'll get back to you shortly.</CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        {/* Hardcoded English text */}
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} />
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
                        {/* Hardcoded English text */}
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="john.doe@example.com" {...field} />
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
                         {/* Hardcoded English text */}
                        <FormLabel>Phone Number (Optional)</FormLabel>
                        <FormControl>
                          <Input type="tel" placeholder="+91 90999 04235" {...field} />
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
                         {/* Hardcoded English text */}
                        <FormLabel>Subject</FormLabel>
                        <FormControl>
                          <Input placeholder="Inquiry about Property ID 123" {...field} />
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
                         {/* Hardcoded English text */}
                        <FormLabel>Your Message</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Please provide details about your inquiry..."
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
                    {/* Hardcoded English text */}
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>

          {/* Contact Details Section */}
          <div className="space-y-8">
             <Card className="shadow-lg">
                <CardHeader>
                     {/* Hardcoded English text */}
                    <CardTitle className="text-2xl text-primary">Get in Touch Directly</CardTitle>
                    <CardDescription>Reach out to us via phone, email, or visit our office.</CardDescription>
                 </CardHeader>
                 <CardContent className="space-y-4">
                    <div className="flex items-center gap-4">
                         <Mail className="h-6 w-6 text-accent" />
                         <a href={`mailto:${contactEmail}`} className="text-foreground hover:text-accent transition-colors">{contactEmail}</a>
                    </div>
                     <div className="flex items-start gap-4">
                         <Phone className="h-6 w-6 text-accent mt-1" />
                         <div>
                             {renderPhoneLinks(contactPhone)}
                         </div>
                    </div>
                     <div className="flex items-start gap-4">
                         <MapPin className="h-6 w-6 text-accent mt-1" />
                         <p className="text-foreground">
                         {addressLine1}<br />
                         {addressLine2}
                         {/* {addressLine3 && <><br />{addressLine3}</>} */}
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
