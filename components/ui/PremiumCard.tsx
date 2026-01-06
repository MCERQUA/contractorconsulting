"use strict";
"use client";

import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { cn } from "@/lib/utils";
import React, { useRef, useState } from "react";

interface PremiumCardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export function PremiumCard({ children, className, onClick }: PremiumCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
    
    ref.current.style.setProperty('--mouse-x', `${(mouseX / width) * 100}%`);
    ref.current.style.setProperty('--mouse-y', `${(mouseY / height) * 100}%`);
  };

  const handleMouseEnter = () => setIsHovered(true);
  
  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      whileTap={{ scale: 0.95 }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={cn(
        "relative rounded-2xl bg-dark-800/50 p-6 backdrop-blur-xl border border-white/10 overflow-hidden group transition-all duration-300",
        // Desktop: Hover effects
        "hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10",
        // Mobile: Active state for touch feedback
        "active:border-primary/50 active:bg-dark-800/80",
        className
      )}
    >
      {/* Dynamic Gradient - Mouse follower for Desktop */}
      <div 
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100 hidden md:block"
        style={{
          background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(14, 165, 233, 0.15), transparent 40%)`
        }}
      />
      
      {/* Mobile Touch Highlight - Simple gradient fade in on active */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-active:opacity-100 transition-opacity duration-300 md:hidden pointer-events-none" />

      <div style={{ transform: "translateZ(20px)" }} className="relative z-10 h-full">
        {children}
      </div>
    </motion.div>
  );
}
