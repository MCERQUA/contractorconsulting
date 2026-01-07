"use client";

import { useState, useRef } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { motion, useInView, AnimatePresence } from "motion/react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";

const categories = ["All", "Roofing", "Remodeling", "Siding", "Framing", "Decks"];

const projects = [
  { category: "Roofing", image: "/images/generated/roofing-hero.webp", title: "Complete Roof Replacement" },
  { category: "Remodeling", image: "/images/generated/kitchen.webp", title: "Modern Kitchen Renovation" },
  { category: "Siding", image: "/images/generated/siding-hero.webp", title: "James Hardie Installation" },
  { category: "Framing", image: "/images/generated/framing.webp", title: "Custom Home Framing" },
  { category: "Decks", image: "/images/generated/deck-cedar.webp", title: "Natural Cedar Deck" },
  { category: "Remodeling", image: "/images/generated/bathroom-spa.webp", title: "Luxury Bathroom Remodel" },
  { category: "Roofing", image: "/images/generated/roof-repair.webp", title: "Storm Damage Repair" },
  { category: "Siding", image: "/images/generated/siding-vinyl.webp", title: "Vinyl Siding Installation" },
  { category: "Framing", image: "/images/generated/framing-addition.webp", title: "Second Story Addition" },
  { category: "Decks", image: "/images/generated/deck-pergola.webp", title: "Multi-Level Deck with Pergola" },
  { category: "Remodeling", image: "/images/generated/basement.webp", title: "Basement Transformation" },
  { category: "Roofing", image: "/images/generated/roof-metal.webp", title: "Metal Roof Installation" },
];

interface PortfolioCardProps {
  project: typeof projects[0];
  index: number;
  onClick: (project: typeof projects[0]) => void;
}

function PortfolioCard({ project, index, onClick }: PortfolioCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.2 });

  // Calculate stagger delay based on position in grid
  const row = Math.floor(index / 3);
  const col = index % 3;
  const staggerDelay = (row * 0.1) + (col * 0.08);

  return (
    <motion.div
      ref={cardRef}
      layout
      onClick={() => onClick(project)}
      initial={{ opacity: 0, y: 60, scale: 0.9 }}
      animate={isInView ? {
        opacity: 1,
        y: 0,
        scale: 1,
      } : {}}
      exit={{ opacity: 0, scale: 0.9, y: 20 }}
      transition={{
        duration: 0.7,
        delay: staggerDelay,
        ease: [0.25, 0.1, 0.25, 1],
        layout: { duration: 0.4 }
      }}
      className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-zinc-200 cursor-pointer"
      style={{ perspective: 1000 }}
    >
      {/* Image with zoom effect */}
      <motion.div
        className="absolute inset-0"
        whileHover={{ scale: 1.08 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </motion.div>

      {/* Animated gradient overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />

      {/* Shine effect on hover */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-10"
        initial={{ opacity: 0, x: '-100%' }}
        whileHover={{ opacity: 1, x: '100%' }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.2) 50%, transparent 100%)',
        }}
      />

      {/* Content overlay with slide-up animation */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 p-6"
        initial={{ y: 20, opacity: 0 }}
        whileHover={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        <motion.span
          className="inline-block text-sm text-white/80 font-medium uppercase tracking-wider mb-1 px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full"
          initial={{ y: 10, opacity: 0 }}
          whileHover={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          {project.category}
        </motion.span>
        <motion.h3
          className="text-xl font-bold text-white"
          initial={{ y: 10, opacity: 0 }}
          whileHover={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.15 }}
        >
          {project.title}
        </motion.h3>
      </motion.div>

      {/* Corner accent on hover */}
      <motion.div
        className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-white/50"
        initial={{ opacity: 0, scale: 0.5 }}
        whileHover={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      />
      <motion.div
        className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-white/50"
        initial={{ opacity: 0, scale: 0.5 }}
        whileHover={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      />
    </motion.div>
  );
}

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const gridRef = useRef<HTMLDivElement>(null);

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
          {/* Category Filter with animations */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {categories.map((cat, idx) => (
              <motion.button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-6 py-2 rounded-full font-medium transition-all relative overflow-hidden",
                  activeCategory === cat
                    ? "bg-primary text-white"
                    : "bg-zinc-100 text-foreground/70 hover:bg-zinc-200"
                )}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + (idx * 0.05) }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {cat}
                {activeCategory === cat && (
                  <motion.div
                    className="absolute inset-0 bg-primary -z-10"
                    layoutId="activeCategory"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </motion.button>
            ))}
          </motion.div>

          {/* Project Grid with AnimatePresence for smooth filtering */}
          <motion.div
            ref={gridRef}
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, idx) => (
                <PortfolioCard
                  key={`${project.title}-${idx}`}
                  project={project}
                  index={idx}
                  onClick={setSelectedProject}
                />
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Empty state */}
          {filteredProjects.length === 0 && (
            <motion.div
              className="text-center py-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              <p className="text-foreground/60 text-lg">No projects found in this category.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-[1000] flex items-center justify-center p-4 pt-20 bg-black/80 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl max-h-[85vh] overflow-y-auto bg-white rounded-2xl shadow-2xl"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-50 p-2 bg-black/70 hover:bg-black text-white rounded-full transition-colors shadow-lg"
              >
                <X size={24} />
              </button>
              
              <div className="relative aspect-video w-full">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="p-8">
                <div className="inline-block px-3 py-1 mb-4 text-sm font-medium text-primary bg-primary/10 rounded-full">
                  {selectedProject.category}
                </div>
                <h3 className="text-3xl font-bold mb-4 text-foreground">{selectedProject.title}</h3>
                <p className="text-lg text-foreground/70 leading-relaxed">
                  Experience the quality and craftsmanship that Consulting Contractors brings to every {selectedProject.category.toLowerCase()} project. 
                  Our team ensures attention to detail and superior durability, working closely with you to bring your vision to life.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </main>
  );
}
