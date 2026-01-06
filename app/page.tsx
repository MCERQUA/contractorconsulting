import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-dark-900 selection:bg-primary/30 selection:text-white">
      <Navbar />
      <Hero />
      <Services />
      <Footer />
    </main>
  );
}