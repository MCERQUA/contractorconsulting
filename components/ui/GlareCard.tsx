"use client";

import { useRef, useState, useEffect, ReactNode } from "react";
import { motion, useInView, useMotionValue, useSpring, useTransform } from "motion/react";
import { cn } from "@/lib/utils";

interface GlareCardProps {
  children: ReactNode;
  className?: string;
  glareColor?: string;
  glareOpacity?: number;
  glareAngle?: number;
  glareSize?: number;
  transitionDuration?: number;
  enable3D?: boolean;
  tiltIntensity?: number;
}

export function GlareCard({
  children,
  className,
  glareColor = "#ffffff",
  glareOpacity = 0.4,
  glareAngle = -35,
  glareSize = 300,
  transitionDuration = 800,
  enable3D = true,
  tiltIntensity = 10,
}: GlareCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.5 });
  const [isMobile, setIsMobile] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  // Mouse tracking for 3D tilt effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring physics for tilt
  const springConfig = { damping: 20, stiffness: 200 };
  const rotateX = useSpring(
    useTransform(mouseY, [-0.5, 0.5], [tiltIntensity, -tiltIntensity]),
    springConfig
  );
  const rotateY = useSpring(
    useTransform(mouseX, [-0.5, 0.5], [-tiltIntensity, tiltIntensity]),
    springConfig
  );

  // Gradient position based on mouse for dynamic highlight
  const gradientX = useTransform(mouseX, [-0.5, 0.5], [0, 100]);
  const gradientY = useTransform(mouseY, [-0.5, 0.5], [0, 100]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia("(hover: none), (pointer: coarse)").matches);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isMobile || !enable3D) return;

    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;

    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  // Convert hex to rgba
  const hexToRgba = (hex: string, opacity: number) => {
    const cleanHex = hex.replace("#", "");
    let r, g, b;

    if (cleanHex.length === 6) {
      r = parseInt(cleanHex.slice(0, 2), 16);
      g = parseInt(cleanHex.slice(2, 4), 16);
      b = parseInt(cleanHex.slice(4, 6), 16);
    } else if (cleanHex.length === 3) {
      r = parseInt(cleanHex[0] + cleanHex[0], 16);
      g = parseInt(cleanHex[1] + cleanHex[1], 16);
      b = parseInt(cleanHex[2] + cleanHex[2], 16);
    } else {
      return `rgba(255, 255, 255, ${opacity})`;
    }

    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  };

  const glareRgba = hexToRgba(glareColor, glareOpacity);

  // For mobile or when 3D is disabled, use simpler structure
  if (isMobile || !enable3D) {
    return (
      <div
        ref={ref}
        className={cn(
          "glare-card",
          isInView && "glare-card--active",
          className
        )}
        style={{
          "--glare-angle": `${glareAngle}deg`,
          "--glare-duration": `${transitionDuration}ms`,
          "--glare-size": `${glareSize}%`,
          "--glare-rgba": glareRgba,
        } as React.CSSProperties}
      >
        {children}
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      className={cn(
        "glare-card group",
        isInView && "glare-card--active",
        className
      )}
      style={{
        "--glare-angle": `${glareAngle}deg`,
        "--glare-duration": `${transitionDuration}ms`,
        "--glare-size": `${glareSize}%`,
        "--glare-rgba": glareRgba,
        perspective: 1000,
        transformStyle: "preserve-3d",
        rotateX: rotateX,
        rotateY: rotateY,
      } as React.CSSProperties & { rotateX: typeof rotateX; rotateY: typeof rotateY }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}

      {/* Dynamic highlight that follows cursor */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at ${gradientX}% ${gradientY}%, rgba(255,255,255,0.15) 0%, transparent 50%)`,
        }}
      />

      {/* Edge glow effect on hover */}
      <div
        className={cn(
          "absolute inset-0 pointer-events-none z-20 rounded-2xl transition-opacity duration-500",
          isHovering ? "opacity-100" : "opacity-0"
        )}
        style={{
          boxShadow: "inset 0 0 30px rgba(255,255,255,0.1), 0 0 40px rgba(0,0,0,0.1)",
        }}
      />
    </motion.div>
  );
}
