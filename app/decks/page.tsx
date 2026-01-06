import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { ServiceBlock } from "@/components/sections/ServiceBlock";

export default function DecksPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <PageHero
        title="Decks"
        subtitle="Custom outdoor living spaces built to last"
        imageSrc="/images/generated/deck.png"
      />

      <ServiceBlock
        title="Custom Wood Decks"
        subtitle="Natural Beauty"
        description="Experience the timeless beauty of natural wood decking. We work with premium materials including cedar, redwood, and pressure-treated lumber to create stunning outdoor spaces. Each deck is custom-designed to complement your home's architecture and maximize your outdoor living potential."
        imageSrc="https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2070&auto=format&fit=crop"
        align="right"
        bgColor="white"
      />

      <ServiceBlock
        title="Composite Decking"
        subtitle="Low Maintenance"
        description="For homeowners who want beauty without the upkeep, our composite decking solutions deliver. Using top brands like Trex and TimberTech, we build decks that resist fading, staining, and scratching while requiring no sealing, staining, or painting."
        imageSrc="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2070&auto=format&fit=crop"
        align="left"
        bgColor="gray"
      />

      <ServiceBlock
        title="Multi-Level & Custom Features"
        subtitle="Beyond Basic"
        description="From multi-level designs and built-in seating to pergolas and outdoor kitchens, we create complete outdoor living experiences. Our design team works with you to incorporate features like lighting, railings, and privacy screens that make your deck truly unique."
        imageSrc="https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=2070&auto=format&fit=crop"
        align="right"
        bgColor="white"
      />

      <Footer />
    </main>
  );
}
