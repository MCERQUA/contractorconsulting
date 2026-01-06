import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { ServiceBlock } from "@/components/sections/ServiceBlock";

export default function FramingPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <PageHero
        title="Custom Framing"
        subtitle="Structural excellence for complex builds and additions"
        imageSrc="/images/generated/framing.png"
      />

      <ServiceBlock
        title="Residential Framing"
        subtitle="New Construction"
        description="From ground-up builds to room additions, our framing team delivers precision structural work that forms the backbone of your project. We specialize in complex roof systems, vaulted ceilings, and custom architectural features that set your home apart."
        imageSrc="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=2069&auto=format&fit=crop"
        align="right"
        bgColor="white"
      />

      <ServiceBlock
        title="Structural Modifications"
        subtitle="Opening Up Spaces"
        description="Want to remove a wall or open up your floor plan? Our structural framing experts assess load-bearing requirements, engineer proper support solutions, and execute modifications that transform your space while maintaining structural integrity."
        imageSrc="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2070&auto=format&fit=crop"
        align="left"
        bgColor="gray"
      />

      <ServiceBlock
        title="Additions & Extensions"
        subtitle="Expand Your Space"
        description="Whether it's a second story addition, garage conversion, or bump-out expansion, our framing crew seamlessly integrates new construction with existing structures. We handle the complex transitions and connections that make additions look like they were always part of the original home."
        imageSrc="https://images.unsplash.com/photo-1590595978583-3967cf17d2ea?q=80&w=2070&auto=format&fit=crop"
        align="right"
        bgColor="white"
      />

      <Footer />
    </main>
  );
}
