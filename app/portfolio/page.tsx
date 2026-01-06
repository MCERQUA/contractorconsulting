"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { motion } from "motion/react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const categories = ["All", "Roofing", "Remodeling", "Siding", "Framing", "Decks"];

const projects = [
  { category: "Roofing", image: "https://images.unsplash.com/photo-1632759145351-1d592919f522?q=80&w=800", title: "Complete Roof Replacement" },
  { category: "Remodeling", image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=800", title: "Modern Kitchen Renovation" },
  { category: "Siding", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800", title: "James Hardie Installation" },
  { category: "Framing", image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800", title: "Custom Home Framing" },
  { category: "Decks", image: "https://images.unsplash.com/photo-1591825729269-caeb344f6df2?q=80&w=800", title: "Multi-Level Deck Build" },
  { category: "Remodeling", image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=800", title: "Luxury Bathroom Remodel" },
  { category: "Roofing", image: "https://images.unsplash.com/photo-1635424710928-0544e8512eae?q=80&w=800", title: "Storm Damage Repair" },
  { category: "Siding", image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=800", title: "Full Exterior Renovation" },
  { category: "Framing", image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=800", title: "Second Story Addition" },
  { category: "Decks", image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=800", title: "Cedar Deck with Pergola" },
  { category: "Remodeling", image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=800", title: "Basement Transformation" },
  { category: "Roofing", image: "https://images.unsplash.com/photo-1632759145354-dde40e0a1afd?q=80&w=800", title: "Metal Roof Installation" },
];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <PageHero
        title="Portfolio"
        subtitle="Browse our completed projects and see our craftsmanship"
        imageSrc="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2070&auto=format&fit=crop"
      />

      <section className="py-20">
        <div className="container mx-auto px-6">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-6 py-2 rounded-full font-medium transition-all",
                  activeCategory === cat
                    ? "bg-primary text-white"
                    : "bg-zinc-100 text-foreground/70 hover:bg-zinc-200"
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Project Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={`${project.title}-${idx}`}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-zinc-200 cursor-pointer"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-sm text-white/70 font-medium uppercase tracking-wider">{project.category}</span>
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
