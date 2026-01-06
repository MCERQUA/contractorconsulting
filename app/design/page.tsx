import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { ServiceBlock } from "@/components/sections/ServiceBlock";

export default function DesignPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <PageHero
        title="Design"
        subtitle="From vision to reality with expert design and permitting"
        imageSrc="/images/generated/design.webp"
      />

      <ServiceBlock
        title="3D Renderings"
        subtitle="Visualize Your Project"
        description="See your project before construction begins. Our advanced 3D rendering services bring your vision to life, allowing you to explore different materials, colors, and layouts. Make confident decisions with photorealistic visualizations that show exactly what your finished project will look like."
        imageSrc="/images/generated/design.webp"
        align="right"
        bgColor="white"
        index={0}
      />

      <ServiceBlock
        title="Floor Plans & Blueprints"
        subtitle="Detailed Planning"
        description="Our design team creates comprehensive floor plans and construction documents that guide every aspect of your project. From spatial layouts to structural details, we ensure your plans meet all building codes while maximizing functionality and aesthetic appeal."
        imageSrc="/images/generated/design-blueprints.webp"
        align="left"
        bgColor="gray"
        index={1}
      />

      <ServiceBlock
        title="Permitting Services"
        subtitle="Navigate the Red Tape"
        description="Let us handle the complexities of building permits and city requirements. Our permitting specialists have established relationships with local building departments and understand exactly what's needed to get your project approved quickly and efficiently."
        imageSrc="/images/generated/insurance-approved.webp"
        align="right"
        bgColor="white"
        index={2}
      />

      <Footer />
    </main>
  );
}
