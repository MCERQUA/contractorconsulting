"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";

export function PassionSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section
      ref={ref}
      className="py-24 md:py-32 bg-white relative overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Heading */}
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground tracking-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            A PASSION FOR EXCELLENCE
          </motion.h2>

          {/* Decorative Divider */}
          <motion.div
            className="flex justify-center mb-10"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="w-16 h-0.5 bg-primary" />
          </motion.div>

          {/* Mission Statement */}
          <motion.p
            className="text-base md:text-lg text-foreground/70 leading-relaxed mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Consulting Contractors is the premier place to connect with your area&apos;s absolute best home improvement and commercial renovation specialists. Consulting Contractors sets the standard in homebuilding, combining highly skilled craftsmanship with progressive technical expertise. Whether your project requires complex engineering or time honored techniques, our experienced team tailors the ideal strategy delivering a quality and schedule driven project with a positive client experience. When faced with difficult installations or advanced building methods, we understand that research and critical thinking is key. It&apos;s Consulting Contractors professional and forward-thinking approach that distinguishes us as an industry leader.
          </motion.p>

          {/* Founder Attribution */}
          <motion.p
            className="text-sm md:text-base font-semibold text-foreground/80 italic"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Rory W. Knight, Founder
          </motion.p>
        </div>
      </div>
    </section>
  );
}
