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
  { category: "Roofing", image: "/images/generated/roofing-hero.webp", title: "Complete Roof Replacement" },
  { category: "Remodeling", image: "/images/generated/kitchen.webp", title: "Modern Kitchen Renovation" },
  { category: "Siding", image: "/images/generated/siding-hero.webp", title: "James Hardie Installation" },
  { category: "Framing", image: "/images/generated/framing.webp", title: "Custom Home Framing" },
  { category: "Decks", image: "/images/generated/deck.webp", title: "Multi-Level Deck Build" },
  { category: "Remodeling", image: "/images/generated/bathroom-blueprint.webp", title: "Luxury Bathroom Remodel" },
  { category: "Roofing", image: "/images/generated/roof-repair.webp", title: "Storm Damage Repair" },
  { category: "Siding", image: "/images/generated/siding-vinyl.webp", title: "Full Exterior Renovation" },
  { category: "Framing", image: "/images/generated/framing-addition.webp", title: "Second Story Addition" },
  { category: "Decks", image: "/images/generated/deck-composite.webp", title: "Cedar Deck with Pergola" },
  { category: "Remodeling", image: "/images/generated/basement.webp", title: "Basement Transformation" },
  { category: "Roofing", image: "/images/generated/roof-replacement.webp", title: "Metal Roof Installation" },
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
        imageSrc="/images/generated/remodeling-hero.webp"
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
