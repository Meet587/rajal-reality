
'use client';

import type { FC } from "react";
import { Footer } from "@/components/footer";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Home, Tag, KeyRound, Building, MapPin } from "lucide-react";
import Image from "next/image";
import { useTranslations } from 'next-intl';

// Sample property data (replace with actual data fetching)
const sampleProperties = [
  // Kept sample data structure, titles/locations won't be translated unless fetched dynamically
  { id: 1, title: "Modern Downtown Apartment", type: "Rent", price: "$2,500/mo", location: "City Center", beds: 2, baths: 2, sqft: 1200, image: "https://picsum.photos/seed/prop1/400/300" },
  { id: 2, title: "Spacious Suburban House", type: "Sale", price: "$450,000", location: "Green Valley", beds: 4, baths: 3, sqft: 2500, image: "https://picsum.photos/seed/prop2/400/300" },
  { id: 3, title: "Luxury Villa with Pool", type: "Sale", price: "$1,200,000", location: "Sunset Hills", beds: 5, baths: 5, sqft: 4500, image: "https://picsum.photos/seed/prop3/400/300" },
  { id: 4, title: "Cozy Studio Near University", type: "Rent", price: "$1,500/mo", location: "University District", beds: 1, baths: 1, sqft: 600, image: "https://picsum.photos/seed/prop4/400/300" },
  { id: 5, title: "Commercial Space Downtown", type: "Lease", price: "$5,000/mo", location: "Business District", sqft: 3000, image: "https://picsum.photos/seed/prop5/400/300" },
  { id: 6, title: "Vacant Land Parcel", type: "Sale", price: "$150,000", location: "Rural Outskirts", acres: 5, image: "https://picsum.photos/seed/prop6/400/300" },
];

const PropertiesPage: FC = () => {
  const t = useTranslations('PropertiesPage');
  // In a real app, use useState for filters and fetch data based on them

  const getPropertyTypeLabel = (type: string) => {
    switch (type.toLowerCase()) {
        case 'rent': return t('propertyTypeRent');
        case 'sale': return t('propertyTypeSale');
        case 'lease': return t('propertyTypeLease');
        default: return type;
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-primary text-primary-foreground py-6 shadow-md">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold">{t('headerTitle')}</h1>
          <p className="text-primary-foreground/80">{t('headerDescription')}</p>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8 lg:py-12">
        {/* Filter Section */}
        <Card className="mb-8 shadow-md bg-secondary">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2"><Search className="w-5 h-5" /> {t('filterTitle')}</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <Input placeholder={t('filterKeywordPlaceholder')} />
            <Select>
              <SelectTrigger>
                <SelectValue placeholder={t('filterTypePlaceholder')} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">{t('filterTypeAll')}</SelectItem>
                <SelectItem value="sale">{t('filterTypeSale')}</SelectItem>
                <SelectItem value="rent">{t('filterTypeRent')}</SelectItem>
                <SelectItem value="lease">{t('filterTypeLease')}</SelectItem>
              </SelectContent>
            </Select>
             <Select>
              <SelectTrigger>
                <SelectValue placeholder={t('filterPricePlaceholder')} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="any">{t('filterPriceAny')}</SelectItem>
                <SelectItem value="<100k">{t('filterPrice100k')}</SelectItem>
                <SelectItem value="100k-300k">{t('filterPrice100k300k')}</SelectItem>
                <SelectItem value="300k-500k">{t('filterPrice300k500k')}</SelectItem>
                <SelectItem value="500k+">{t('filterPrice500k')}</SelectItem>
              </SelectContent>
            </Select>
             <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
              {t('filterApplyButton')}
            </Button>
          </CardContent>
        </Card>

        {/* Property Listings */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sampleProperties.map((prop) => (
            <Card key={prop.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <div className="relative w-full h-48">
                <Image
                  src={prop.image}
                  alt={prop.title} // Alt text might not be translated easily for dynamic images
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 group-hover:scale-105"
                />
                <span className="absolute top-2 left-2 bg-primary text-primary-foreground px-2 py-1 text-xs font-semibold rounded">
                  {prop.type === 'Rent' || prop.type === 'Lease' ? <KeyRound className="inline w-3 h-3 mr-1"/> : <Tag className="inline w-3 h-3 mr-1"/>}
                  {getPropertyTypeLabel(prop.type)}
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
                  {prop.beds && <span>{t('propertyBeds', { count: prop.beds })}</span>}
                  {prop.baths && <span>{t('propertyBaths', { count: prop.baths })}</span>}
                  {prop.sqft && <span>{t('propertySqft', { count: prop.sqft })}</span>}
                  {prop.acres && <span>{t('propertyAcres', { count: prop.acres })}</span>}
                   {prop.type === 'Lease' && <span><Building className="inline w-4 h-4 mr-1"/>{t('propertyCommercial')}</span>}
                </div>
              </CardContent>
              {/* <CardFooter className="p-4 border-t">
                 <Button variant="outline" className="w-full">View Details</Button>
              </CardFooter> */}
            </Card>
          ))}
        </div>

        {/* Placeholder if no properties match */}
        {sampleProperties.length === 0 && (
          <div className="text-center py-16 text-muted-foreground">
            <p>{t('noProperties')}</p>
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
