'use client'; // Keep this as filtering/sorting will likely be client-side

import type { FC } from "react";
import { Footer } from "@/components/footer";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Home, Tag, KeyRound, Building, MapPin } from "lucide-react";
import Image from "next/image";

// Removed locale param and unstable_setRequestLocale
// Removed useTranslations

// Sample property data (replace with actual data fetching)
const sampleProperties = [
  // Kept sample data structure, using English titles/locations
  { id: 1, title: "Modern Downtown Apartment", type: "Rent", price: "$2,500/mo", location: "City Center", beds: 2, baths: 2, sqft: 1200, image: "https://picsum.photos/seed/prop1/400/300" },
  { id: 2, title: "Spacious Suburban House", type: "Sale", price: "$450,000", location: "Green Valley", beds: 4, baths: 3, sqft: 2500, image: "https://picsum.photos/seed/prop2/400/300" },
  { id: 3, title: "Luxury Villa with Pool", type: "Sale", price: "$1,200,000", location: "Sunset Hills", beds: 5, baths: 5, sqft: 4500, image: "https://picsum.photos/seed/prop3/400/300" },
  { id: 4, title: "Cozy Studio Near University", type: "Rent", price: "$1,500/mo", location: "University District", beds: 1, baths: 1, sqft: 600, image: "https://picsum.photos/seed/prop4/400/300" },
  { id: 5, title: "Commercial Space Downtown", type: "Lease", price: "$5,000/mo", location: "Business District", sqft: 3000, image: "https://picsum.photos/seed/prop5/400/300" },
  { id: 6, title: "Vacant Land Parcel", type: "Sale", price: "$150,000", location: "Rural Outskirts", acres: 5, image: "https://picsum.photos/seed/prop6/400/300" },
];

// Removed interface PropertiesPageProps

const PropertiesPage: FC = () => {
  // Removed locale logic and t function
  // In a real app, use useState for filters and fetch data based on them

  // Property type label remains the same (English)
  const getPropertyTypeLabel = (type: string) => {
    return type; // Just return the type directly
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-primary text-primary-foreground py-6 shadow-md">
        <div className="container mx-auto px-4">
          {/* Hardcoded English text */}
          <h1 className="text-3xl font-bold">Explore Properties</h1>
          <p className="text-primary-foreground/80">Find your next home, rental, or investment opportunity.</p>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8 lg:py-12">
        {/* Filter Section */}
        <Card className="mb-8 shadow-md bg-secondary">
          <CardHeader>
            {/* Hardcoded English text */}
            <CardTitle className="text-xl flex items-center gap-2"><Search className="w-5 h-5" /> Filter Properties</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {/* Hardcoded English text */}
            <Input placeholder="Search by keyword or location..." />
            <Select>
              <SelectTrigger>
                {/* Hardcoded English text */}
                <SelectValue placeholder="Property Type" />
              </SelectTrigger>
              <SelectContent>
                {/* Hardcoded English text */}
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="sale">For Sale</SelectItem>
                <SelectItem value="rent">For Rent</SelectItem>
                <SelectItem value="lease">For Lease</SelectItem>
              </SelectContent>
            </Select>
             <Select>
              <SelectTrigger>
                 {/* Hardcoded English text */}
                <SelectValue placeholder="Price Range" />
              </SelectTrigger>
              <SelectContent>
                 {/* Hardcoded English text */}
                <SelectItem value="any">Any Price</SelectItem>
                <SelectItem value="<100k">&lt; $100,000</SelectItem>
                <SelectItem value="100k-300k">$100k - $300k</SelectItem>
                <SelectItem value="300k-500k">$300k - $500k</SelectItem>
                <SelectItem value="500k+">$500,000+</SelectItem>
              </SelectContent>
            </Select>
             <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
              {/* Hardcoded English text */}
              Apply Filters
            </Button>
          </CardContent>
        </Card>

        {/* Property Listings */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sampleProperties.map((prop) => (
            <Card
              key={prop.id}
              className="group overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out hover:scale-[1.03] flex flex-col"
            >
              <div className="relative w-full h-48 overflow-hidden">
                <Image
                  src={prop.image}
                  alt={prop.title} // Alt text remains English
                  fill
                  style={{ objectFit: "cover" }}
                  className="transition-transform duration-300 ease-in-out group-hover:scale-110"
                />
                <span className="absolute top-2 left-2 bg-primary text-primary-foreground px-2 py-1 text-xs font-semibold rounded z-10">
                  {prop.type === 'Rent' || prop.type === 'Lease' ? <KeyRound className="inline w-3 h-3 mr-1"/> : <Tag className="inline w-3 h-3 mr-1"/>}
                  {getPropertyTypeLabel(prop.type)} {/* Displays English type */}
                </span>
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-semibold text-primary line-clamp-1">{prop.title}</CardTitle>
                <CardDescription className="flex items-center gap-1 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4"/> {prop.location}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col justify-between">
                <p className="text-xl font-bold text-accent mb-3">{prop.price}</p>
                <div className="flex items-center justify-between text-sm text-muted-foreground border-t pt-3 mt-auto">
                  {/* Hardcoded English text */}
                  {prop.beds && <span>{prop.beds} Beds</span>}
                  {prop.baths && <span>{prop.baths} Baths</span>}
                  {prop.sqft && <span>{prop.sqft} sqft</span>}
                  {prop.acres && <span>{prop.acres} Acres</span>}
                   {prop.type === 'Lease' && <span><Building className="inline w-4 h-4 mr-1"/>Commercial</span>}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Placeholder if no properties match */}
        {sampleProperties.length === 0 && (
          <div className="text-center py-16 text-muted-foreground">
            {/* Hardcoded English text */}
            <p>No properties match your current filters.</p>
          </div>
        )}

         {/* Optional Pagination */}
         {/* <div className="mt-12 flex justify-center">
           <Pagination> ... </Pagination>
         </div> */}

      </main>
      <Footer />
    </div>
  );
};

export default PropertiesPage;
