"use client";

import React, { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "motion/react";
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
  const imageRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  // Parallax effect for the image
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const rotate = useTransform(scrollYProgress, [0, 1], [2, -2]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.92, 1, 0.96]);

  // Staggered animation delays
  const baseDelay = 0.05;

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
            initial={{ opacity: 0, x: align === "left" ? -60 : 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{
              duration: 0.9,
              ease: [0.25, 0.1, 0.25, 1],
              delay: baseDelay
            }}
          >
            {subtitle && (
              <motion.div
                className="mb-4 overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: baseDelay + 0.1 }}
              >
                <span className="text-sm font-bold tracking-widest text-primary uppercase border-b-2 border-primary pb-1">
                  {subtitle}
                </span>
              </motion.div>
            )}

            <AnimatedText
              as="h2"
              animation="slideUp"
              className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-6 leading-tight"
            >
              {title}
            </AnimatedText>

            <motion.p
              className="text-lg text-foreground/70 leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: baseDelay + 0.3 }}
            >
              {description}
            </motion.p>

            <motion.div
              className="flex gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: baseDelay + 0.4 }}
            >
              <Button size="lg" icon>
                Learn More
              </Button>
            </motion.div>
          </motion.div>

          {/* Image Content with Enhanced Animations */}
          <motion.div
            ref={imageRef}
            className="flex-1 w-full relative"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{
              duration: 0.8,
              delay: baseDelay + 0.2,
            }}
          >
            {/* Animated reveal mask with directional clip */}
            <motion.div
              className="relative"
              initial={{
                clipPath: align === "left" ? "inset(0 100% 0 0)" : "inset(0 0 0 100%)",
                filter: "blur(10px)"
              }}
              animate={isInView ? {
                clipPath: "inset(0 0% 0 0%)",
                filter: "blur(0px)"
              } : {}}
              transition={{
                clipPath: {
                  duration: 1.4,
                  delay: baseDelay + 0.3,
                  ease: [0.65, 0, 0.35, 1]
                },
                filter: {
                  duration: 0.8,
                  delay: baseDelay + 0.5
                }
              }}
            >
              <motion.div style={{ y, scale, rotate }}>
                <GlareCard
                  className="relative aspect-[4/3] shadow-2xl bg-zinc-200"
                  glareOpacity={0.35}
                  glareAngle={-30}
                  transitionDuration={900}
                  tiltIntensity={8}
                >
                  <div
                    className="relative w-full h-full"
                    style={{ aspectRatio: '4/3' }}
                  >
                    {/* Gradient vignette */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-black/5 z-10 pointer-events-none" />

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/5 z-10 hover:bg-transparent transition-colors duration-500" />

                    <Image
                      src={imageSrc}
                      alt={title}
                      fill
                      className="object-cover transform transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority={index === 0}
                    />
                  </div>
                </GlareCard>
              </motion.div>
            </motion.div>

            {/* Animated blur orb background */}
            <motion.div
              className={cn(
                "absolute -z-10 w-2/3 h-2/3 rounded-full blur-[100px]",
                align === "left" ? "bg-primary -right-10 -bottom-10" : "bg-secondary -left-10 -top-10"
              )}
              initial={{ scale: 0, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 0.25 } : {}}
              transition={{ duration: 1.5, delay: baseDelay + 0.5 }}
            />

            {/* Decorative corner accent */}
            <motion.div
              className={cn(
                "absolute w-24 h-24 border-2 border-primary/15 rounded-lg -z-10",
                align === "left" ? "-right-6 -bottom-6" : "-left-6 -top-6"
              )}
              initial={{ scale: 0, opacity: 0, rotate: 45 }}
              animate={isInView ? { scale: 1, opacity: 1, rotate: 0 } : {}}
              transition={{ duration: 0.8, delay: baseDelay + 0.6, ease: "easeOut" }}
            />

            {/* Floating dot accent */}
            <motion.div
              className={cn(
                "absolute w-3 h-3 rounded-full bg-primary/40 -z-10",
                align === "left" ? "-right-8 top-1/4" : "-left-8 bottom-1/4"
              )}
              initial={{ scale: 0, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: baseDelay + 0.7 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
