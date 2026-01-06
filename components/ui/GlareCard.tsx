"use client";

import { useRef, ReactNode } from "react";
import { useInView } from "motion/react";
import { cn } from "@/lib/utils";

interface GlareCardProps {
  children: ReactNode;
  className?: string;
  glareColor?: string;
  glareOpacity?: number;
  glareAngle?: number;
  glareSize?: number;
  transitionDuration?: number;
}

export function GlareCard({
  children,
  className,
  glareColor = "#ffffff",
  glareOpacity = 0.4,
  glareAngle = -35,
  glareSize = 300,
  transitionDuration = 800,
}: GlareCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  // Trigger when element is 50% visible (center of viewport)
  const isInView = useInView(ref, { amount: 0.5 });

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
