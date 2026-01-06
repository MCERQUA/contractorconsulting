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
        imageSrc="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2073&auto=format&fit=crop"
      />

      <ServiceBlock
        title="Fix & Flip Services"
        subtitle="Maximize ROI"
        description="Looking to flip properties? Our team provides turnkey renovation services for real estate investors. We understand the unique demands of investment projects - fast timelines, controlled budgets, and finishes that appeal to buyers. Let us help you maximize your return on investment."
        imageSrc="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?q=80&w=2073&auto=format&fit=crop"
        align="right"
        bgColor="white"
      />

      <ServiceBlock
        title="Rental Property Renovations"
        subtitle="Durable Finishes"
        description="Upgrade your rental properties with renovations designed for durability and tenant appeal. We select materials and finishes that withstand wear while attracting quality tenants and commanding higher rents. From single units to multi-family properties, we scale to meet your needs."
        imageSrc="https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=2070&auto=format&fit=crop"
        align="left"
        bgColor="gray"
      />

      <ServiceBlock
        title="Property Assessment"
        subtitle="Know Before You Buy"
        description="Considering a property purchase? Our experts provide detailed assessments of renovation potential, estimated costs, and projected timelines. Make informed investment decisions with accurate data on what it will take to bring a property to market-ready condition."
        imageSrc="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2072&auto=format&fit=crop"
        align="right"
        bgColor="white"
      />

      <Footer />
    </main>
  );
}
