import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { ServiceBlock } from "@/components/sections/ServiceBlock";

export default function RemodelingPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <PageHero
        title="Remodeling"
        subtitle="Transform your living spaces with premium renovation services"
        imageSrc="/images/generated/remodeling-hero.webp"
      />

      {/* Process Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-black text-center text-foreground mb-4">The Remodeling Process</h2>
          <p className="text-lg text-foreground/70 text-center max-w-2xl mx-auto mb-16">From initial consultation to final walkthrough, we guide you through every phase of your project.</p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { phase: "Investment", desc: "Budget planning, material selection, and project scope definition to align with your vision and finances." },
              { phase: "Pre-Construction", desc: "Permits, designs, 3D renderings, and detailed planning before any work begins." },
              { phase: "Construction", desc: "Expert execution with regular updates, quality craftsmanship, and on-time delivery." }
            ].map((item, idx) => (
              <div key={idx} className="text-center p-8 rounded-2xl bg-zinc-50">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-black mx-auto mb-4">{idx + 1}</div>
                <h3 className="text-xl font-bold text-foreground mb-2">{item.phase}</h3>
                <p className="text-foreground/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ServiceBlock
        title="Kitchens"
        subtitle="Heart of the Home"
        description="Transform your kitchen into the heart of your home. From custom cabinetry and premium countertops to modern appliances and thoughtful layouts, we create chef-worthy spaces that bring families together."
        imageSrc="/images/generated/kitchen.webp"
        align="right"
        bgColor="gray"
        index={0}
      />

      <ServiceBlock
        title="Bathrooms"
        subtitle="Spa-Like Retreats"
        description="Escape the everyday in your own personal sanctuary. Our bathroom remodels feature luxurious finishes, efficient layouts, and spa-inspired designs that turn your morning routine into a relaxing experience."
        imageSrc="/images/generated/bathroom-spa.webp"
        align="left"
        bgColor="white"
        index={1}
      />

      <ServiceBlock
        title="Basements"
        subtitle="Unlock Hidden Potential"
        description="Transform unused basement space into valuable living area. Whether you envision a home theater, wet bar, guest suite, or home gym, we handle everything from waterproofing to finishing touches."
        imageSrc="/images/generated/basement.webp"
        align="right"
        bgColor="gray"
        index={2}
      />

      <Footer />
    </main>
  );
}
