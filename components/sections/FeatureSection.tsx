"use client";

import React, { useRef } from "react";
import { motion, useInView } from "motion/react";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { Button } from "@/components/ui/Button";
import { GlareCard } from "@/components/ui/GlareCard";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface FeatureSectionProps {
  title: string;
  subtitle?: string;
  description: string;
  imageSrc: string;
  align?: "left" | "right";
  index: number;
}

export function FeatureSection({
  title,
  subtitle,
  description,
  imageSrc,
  align = "left",
  index,
}: FeatureSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" }); // Relaxed margin

  return (
    <section
      ref={ref}
      className={cn(
        "py-24 md:py-32 overflow-hidden relative",
        index % 2 === 0 ? "bg-white" : "bg-zinc-50"
      )}
    >
      <div className="container mx-auto px-6">
        <div
          className={cn(
            "flex flex-col gap-12 lg:gap-20 items-center",
            align === "left" ? "lg:flex-row" : "lg:flex-row-reverse"
          )}
        >
          {/* Text Content */}
          <motion.div
            className="flex-1 max-w-2xl"
            initial={{ opacity: 0, x: align === "left" ? -50 : 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {subtitle && (
              <div className="mb-4">
                <span className="text-sm font-bold tracking-widest text-primary uppercase border-b-2 border-primary pb-1">
                  {subtitle}
                </span>
              </div>
            )}
            
            <AnimatedText
              as="h2"
              animation="slideUp"
              className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-6 leading-tight"
            >
              {title}
            </AnimatedText>

            <p className="text-lg text-foreground/70 leading-relaxed mb-8">
              {description}
            </p>

            <div className="flex gap-4">
              <Button size="lg" icon>
                Learn More
              </Button>
            </div>
          </motion.div>

          {/* Image Content */}
          <motion.div
            className="flex-1 w-full relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <GlareCard
              className="relative aspect-[4/3] shadow-2xl bg-zinc-200"
              glareOpacity={0.35}
              glareAngle={-30}
              transitionDuration={900}
            >
              <div
                className="relative w-full h-full"
                style={{ aspectRatio: '4/3' }}
              >
                <div className="absolute inset-0 bg-black/5 z-10 hover:bg-transparent transition-colors duration-500" />
                <Image
                  src={imageSrc}
                  alt={title}
                  fill
                  className="object-cover transform transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={index === 0}
                />
              </div>

              {/* Decorative Elements */}
              <div className={cn(
                "absolute -z-10 w-2/3 h-2/3 rounded-full blur-[100px] opacity-30",
                align === "left" ? "bg-primary -right-10 -bottom-10" : "bg-secondary -left-10 -top-10"
              )} />
            </GlareCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
