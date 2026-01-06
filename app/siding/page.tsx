import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { ServiceBlock } from "@/components/sections/ServiceBlock";

export default function SidingPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <PageHero
        title="Siding"
        subtitle="Premium exterior solutions for lasting curb appeal"
        imageSrc="/images/generated/siding-hero.webp"
      />

      <ServiceBlock
        title="James Hardie Certified"
        subtitle="Premium Materials"
        description="As certified James Hardie installers, we provide the highest quality fiber cement siding installation. James Hardie siding is engineered for climate-specific performance, offering superior protection against moisture, pests, and fire while maintaining its beautiful appearance for decades."
        imageSrc="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop"
        align="right"
        bgColor="white"
      />

      <ServiceBlock
        title="Vinyl Siding"
        subtitle="Affordable Excellence"
        description="Our vinyl siding options offer exceptional value without compromising on quality. Available in a wide range of colors and styles, vinyl siding provides excellent insulation, requires minimal maintenance, and stands up to the elements year after year."
        imageSrc="https://images.unsplash.com/photo-1600573472592-401b489a3cdc?q=80&w=2070&auto=format&fit=crop"
        align="left"
        bgColor="gray"
      />

      <ServiceBlock
        title="Commercial Siding"
        subtitle="Business Solutions"
        description="From retail storefronts to office buildings, we provide commercial-grade siding solutions that combine durability with professional aesthetics. Our team understands the unique requirements of commercial projects and delivers on time and on budget."
        imageSrc="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
        align="right"
        bgColor="white"
      />

      <Footer />
    </main>
  );
}
