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
        overlay="light"
      />

      <ServiceBlock
        title="3D Renderings"
        subtitle="Visualize Your Project"
        description="See your project before construction begins. Our advanced 3D rendering services bring your vision to life, allowing you to explore different materials, colors, and layouts. Make confident decisions with photorealistic visualizations that show exactly what your finished project will look like."
        imageSrc="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070&auto=format&fit=crop"
        align="right"
        bgColor="white"
      />

      <ServiceBlock
        title="Floor Plans & Blueprints"
        subtitle="Detailed Planning"
        description="Our design team creates comprehensive floor plans and construction documents that guide every aspect of your project. From spatial layouts to structural details, we ensure your plans meet all building codes while maximizing functionality and aesthetic appeal."
        imageSrc="https://images.unsplash.com/photo-1536895058696-a69b1c7ba34f?q=80&w=2070&auto=format&fit=crop"
        align="left"
        bgColor="gray"
      />

      <ServiceBlock
        title="Permitting Services"
        subtitle="Navigate the Red Tape"
        description="Let us handle the complexities of building permits and city requirements. Our permitting specialists have established relationships with local building departments and understand exactly what's needed to get your project approved quickly and efficiently."
        imageSrc="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop"
        align="right"
        bgColor="white"
      />

      <Footer />
    </main>
  );
}
