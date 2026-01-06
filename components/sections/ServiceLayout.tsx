"use client";

import { FeatureSection } from "@/components/sections/FeatureSection";

const features = [
  {
    title: "Roofing & Repairs",
    subtitle: "Protection Above All",
    description: "From minor repairs to complete replacements, we deliver roofing solutions that stand the test of time. Specializing in Malarkey and Owen's Corning materials for maximum durability and weather resistance.",
    imageSrc: "https://images.unsplash.com/photo-1632759145351-1d592919f522?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "High-End Remodeling",
    subtitle: "Kitchens & Bathrooms",
    description: "Transform your living spaces with our premium remodeling services. Whether it's a chef's kitchen, a spa-like bathroom, or a complete basement renovation, we bring modern design and functionality to every corner of your home.",
    imageSrc: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop",
  },
  {
    title: "The Process",
    subtitle: "Investment to Construction",
    description: "We guide you through every phase: from initial investment planning and pre-construction consulting to the final build. Our transparent approach ensures you know exactly how your project is progressing at every step.",
    imageSrc: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2000&auto=format&fit=crop",
  },
  {
    title: "Siding & Exteriors",
    subtitle: "James Hardie Certified",
    description: "Boost your curb appeal and energy efficiency with top-tier siding installations. As certified experts, we ensure your exterior is not just beautiful, but armored against the elements.",
    imageSrc: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Custom Framing",
    subtitle: "Structural Artistry",
    description: "The backbone of any great structure. We specialize in complex framing, additions, and structural modifications. 'Cool framing shit' isn't just a phrase to us—it's a craft we've mastered.",
    imageSrc: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Design & Permitting",
    subtitle: "Vision to Reality",
    description: "Navigating the red tape so you don't have to. Our design team creates stunning 3D renderings while our permitting specialists handle the city requirements, ensuring a smooth path to breaking ground.",
    imageSrc: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2072&auto=format&fit=crop",
  },
];

export function ServiceLayout() {
  return (
    <div className="bg-background">
      {features.map((feature, idx) => (
        <FeatureSection
          key={idx}
          index={idx}
          align={idx % 2 === 0 ? "right" : "left"} // Alternating alignment
          {...feature}
        />
      ))}
    </div>
  );
}
