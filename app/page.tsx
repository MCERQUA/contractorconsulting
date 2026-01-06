import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { PassionSection } from "@/components/sections/PassionSection";
import { ServiceLayout } from "@/components/sections/ServiceLayout";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background selection:bg-primary/20 selection:text-primary">
      <Navbar />
      <Hero />
      <PassionSection />
      <ServiceLayout />
      <Footer />
    </main>
  );
}