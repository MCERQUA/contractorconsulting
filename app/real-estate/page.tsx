import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { ServiceBlock } from "@/components/sections/ServiceBlock";

export default function RealEstatePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <PageHero
        title="Real Estate Investing"
        subtitle="Partner with us on your next investment property"
        imageSrc="/images/generated/real-estate-hero.webp"
      />

      <ServiceBlock
        title="Fix & Flip Services"
        subtitle="Maximize ROI"
        description="Looking to flip properties? Our team provides turnkey renovation services for real estate investors. We understand the unique demands of investment projects - fast timelines, controlled budgets, and finishes that appeal to buyers. Let us help you maximize your return on investment."
        imageSrc="/images/generated/real-estate-flip.webp"
        align="right"
        bgColor="white"
        index={0}
      />

      <ServiceBlock
        title="Rental Property Renovations"
        subtitle="Durable Finishes"
        description="Upgrade your rental properties with renovations designed for durability and tenant appeal. We select materials and finishes that withstand wear while attracting quality tenants and commanding higher rents. From single units to multi-family properties, we scale to meet your needs."
        imageSrc="/images/generated/real-estate-hero.webp"
        align="left"
        bgColor="gray"
        index={1}
      />

      <ServiceBlock
        title="Property Assessment"
        subtitle="Know Before You Buy"
        description="Considering a property purchase? Our experts provide detailed assessments of renovation potential, estimated costs, and projected timelines. Make informed investment decisions with accurate data on what it will take to bring a property to market-ready condition."
        imageSrc="/images/generated/property-assessment.webp"
        align="right"
        bgColor="white"
        index={2}
      />

      <Footer />
    </main>
  );
}
