"use client";

import { useRef } from 'react';
import { PremiumCard } from '@/components/ui/PremiumCard';
import { AnimatedText } from '@/components/ui/AnimatedText';
import { Button } from '@/components/ui/Button';
import { motion, useInView } from 'motion/react';
import { Hammer, Home, PaintBucket, Ruler, Layers, ShieldCheck } from 'lucide-react';

const services = [
  {
    title: "Roofing",
    description: "Expert repairs, replacements, and maintenance using top-tier materials like Malarkey and Owen's Corning.",
    icon: ShieldCheck,
    color: "blue" // Color is not directly used for styling anymore, but can keep for internal context
  },
  {
    title: "Remodeling",
    description: "Full-scale kitchen, bathroom, and basement transformations tailored to your lifestyle.",
    icon: Home,
    color: "orange"
  },
  {
    title: "Custom Framing",
    description: "Structural precision for complex builds, additions, and architectural features.",
    icon: Ruler,
    color: "teal"
  },
  {
    title: "Siding",
    description: "Certified James Hardie installation ensuring durability and curb appeal.",
    icon: Layers,
    color: "indigo"
  },
  {
    title: "Design Services",
    description: "3D renderings, floor plans, and permitting assistance to visualize your project.",
    icon: PaintBucket,
    color: "purple"
  },
  {
    title: "Construction",
    description: "From pre-construction planning to final phases, we manage the entire build process.",
    icon: Hammer,
    color: "emerald"
  }
];

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' as const }
    },
  };

  return (
    <section id="services" className="relative py-32 bg-background overflow-hidden"> {/* Background changed */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-secondary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" /> {/* Orb color changed */}

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-20 max-w-3xl">
          <AnimatedText as="h2" animation="slideUp" className="text-sm font-bold text-primary uppercase tracking-widest mb-4">
            Our Expertise
          </AnimatedText>
          <AnimatedText as="h3" animation="cascade" className="text-5xl md:text-6xl font-black text-primary mb-6 whitespace-pre-line">
            {"Building Excellence\nIn Every Detail."}
          </AnimatedText>
          <p className="text-xl text-foreground/80"> {/* Text color changed */}
            We bring years of experience and a commitment to quality in every project we undertake.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, idx) => (
            <motion.div key={idx} variants={itemVariants}>
              <PremiumCard className="h-full flex flex-col justify-between group/card">
                <div>
                  <div className={`w-14 h-14 rounded-2xl bg-black/5 flex items-center justify-center mb-6 group-hover/card:bg-primary/10 transition-colors duration-300`}> {/* Background changed */}
                    <service.icon className="w-7 h-7 text-primary/80 group-hover/card:text-primary transition-colors" /> {/* Icon color changed */}
                  </div>
                  <h4 className="text-2xl font-bold text-primary mb-3">{service.title}</h4>
                  <p className="text-foreground/70 leading-relaxed mb-6"> {/* Text color changed */}
                    {service.description}
                  </p>
                </div>
                <div className="flex items-center text-sm font-bold text-primary transition-all duration-300 
                  opacity-100 translate-x-0 
                  lg:opacity-0 lg:-translate-x-4 lg:group-hover/card:opacity-100 lg:group-hover/card:translate-x-0">
                  Learn More <span className="ml-2">→</span>
                </div>
              </PremiumCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
