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
        imageSrc="/images/generated/siding-hero.webp"
        align="right"
        bgColor="white"
        index={0}
      />

      <ServiceBlock
        title="Vinyl Siding"
        subtitle="Affordable Excellence"
        description="Our vinyl siding options offer exceptional value without compromising on quality. Available in a wide range of colors and styles, vinyl siding provides excellent insulation, requires minimal maintenance, and stands up to the elements year after year."
        imageSrc="/images/generated/siding-vinyl.webp"
        align="left"
        bgColor="gray"
        index={1}
      />

      <ServiceBlock
        title="Commercial Siding"
        subtitle="Business Solutions"
        description="From retail storefronts to office buildings, we provide commercial-grade siding solutions that combine durability with professional aesthetics. Our team understands the unique requirements of commercial projects and delivers on time and on budget."
        imageSrc="/images/generated/siding-commercial.webp"
        align="right"
        bgColor="white"
        index={2}
      />

      <Footer />
    </main>
  );
}
