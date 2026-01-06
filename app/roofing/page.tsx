import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { ServiceBlock } from "@/components/sections/ServiceBlock";

export default function RoofingPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <PageHero
        title="Roofing"
        subtitle="Expert roofing solutions for your home and business"
        imageSrc="/images/generated/roofing-hero.webp"
      />

      <ServiceBlock
        title="Insurance Approval Specialist"
        subtitle="Hassle-Free Claims"
        description="Consulting Contractors is dedicated to helping local homeowners get their roofs repaired or replaced for the money they've already paid for in their insurance premiums. Our insurance specialists work directly with your insurance company to ensure you get the coverage you deserve."
        imageSrc="/images/generated/insurance-approved.webp"
        align="right"
        bgColor="white"
        index={0}
      />

      <ServiceBlock
        title="Roof Replacement"
        subtitle="Complete Solutions"
        description="When repairs aren't enough, our expert team provides full roof replacement services using premium materials from trusted brands like Malarkey and Owen's Corning. We handle everything from tear-off to final inspection, ensuring your new roof is built to last."
        imageSrc="/images/generated/roof-replacement.webp"
        align="left"
        bgColor="gray"
        index={1}
      />

      <ServiceBlock
        title="Roof Repair"
        subtitle="Fast Response"
        description="From minor leaks to storm damage, our roofing specialists provide quick, reliable repair services. We diagnose the issue, provide transparent pricing, and complete repairs efficiently to protect your home from further damage."
        imageSrc="/images/generated/roof-repair.webp"
        align="right"
        bgColor="white"
        index={2}
      />

      <Footer />
    </main>
  );
}
