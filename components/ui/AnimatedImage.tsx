"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, useMotionValue, useSpring, useTransform } from "motion/react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface AnimatedImageProps {
  src: string;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  priority?: boolean;
  sizes?: string;
  className?: string;
  containerClassName?: string;
  animation?: "reveal" | "zoom" | "parallax" | "tilt" | "blur";
  direction?: "left" | "right" | "up" | "down";
  delay?: number;
  duration?: number;
  enableHover?: boolean;
  aspectRatio?: string;
}

// Easing curves as tuples for TypeScript
const easeCubicOut: [number, number, number, number] = [0.65, 0, 0.35, 1];
const easeSmooth: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

export function AnimatedImage({
  src,
  alt,
  fill = true,
  width,
  height,
  priority = false,
  sizes = "(max-width: 768px) 100vw, 50vw",
  className,
  containerClassName,
  animation = "reveal",
  direction = "left",
  delay = 0,
  duration = 1.2,
  enableHover = true,
  aspectRatio = "4/3",
}: AnimatedImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });
  const [hasLoaded, setHasLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Mouse tracking for 3D tilt effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring physics for tilt
  const springConfig = { damping: 25, stiffness: 150 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), springConfig);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia("(hover: none), (pointer: coarse)").matches);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isMobile || animation !== "tilt") return;

    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;

    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Animation variants based on type
  const getClipPath = () => {
    switch (direction) {
      case "left": return { hidden: "inset(0 100% 0 0)", visible: "inset(0 0% 0 0)" };
      case "right": return { hidden: "inset(0 0 0 100%)", visible: "inset(0 0 0 0%)" };
      case "up": return { hidden: "inset(100% 0 0 0)", visible: "inset(0% 0 0 0)" };
      case "down": return { hidden: "inset(0 0 100% 0)", visible: "inset(0 0 0% 0)" };
      default: return { hidden: "inset(0 100% 0 0)", visible: "inset(0 0% 0 0)" };
    }
  };

  const revealVariants = {
    hidden: {
      clipPath: getClipPath().hidden,
      opacity: 0,
    },
    visible: {
      clipPath: getClipPath().visible,
      opacity: 1,
      transition: {
        clipPath: { duration, ease: easeCubicOut, delay },
        opacity: { duration: 0.4, delay },
      }
    }
  };

  const zoomVariants = {
    hidden: {
      scale: 1.3,
      opacity: 0,
      filter: "blur(10px)",
    },
    visible: {
      scale: 1,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        duration: duration * 1.2,
        ease: easeSmooth,
        delay,
      }
    }
  };

  const parallaxVariants = {
    hidden: {
      y: 60,
      opacity: 0,
      scale: 1.05,
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration,
        ease: easeSmooth,
        delay,
      }
    }
  };

  const blurVariants = {
    hidden: {
      filter: "blur(20px) saturate(0)",
      opacity: 0,
      scale: 1.1,
    },
    visible: {
      filter: "blur(0px) saturate(1)",
      opacity: 1,
      scale: 1,
      transition: {
        duration: duration * 1.5,
        ease: "easeOut" as const,
        delay,
      }
    }
  };

  const getVariants = () => {
    switch (animation) {
      case "reveal": return revealVariants;
      case "zoom": return zoomVariants;
      case "parallax": return parallaxVariants;
      case "blur": return blurVariants;
      case "tilt": return parallaxVariants;
      default: return revealVariants;
    }
  };

  const imageContent = (
    <Image
      src={src}
      alt={alt}
      fill={fill}
      width={!fill ? width : undefined}
      height={!fill ? height : undefined}
      priority={priority}
      sizes={sizes}
      onLoad={() => setHasLoaded(true)}
      className={cn(
        "object-cover transition-transform duration-700",
        enableHover && !isMobile && "group-hover:scale-105",
        className
      )}
    />
  );

  // Tilt animation uses different structure
  if (animation === "tilt" && !isMobile) {
    return (
      <motion.div
        ref={containerRef}
        className={cn(
          "relative overflow-hidden rounded-2xl bg-zinc-200 group",
          containerClassName
        )}
        style={{
          aspectRatio,
          perspective: 1000,
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        initial={{ opacity: 0, y: 60, scale: 1.05 }}
        animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
        transition={{ duration, ease: easeSmooth, delay }}
      >
        <motion.div
          className="relative w-full h-full"
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
          }}
        >
          {imageContent}
          {/* Shine effect on tilt */}
          <motion.div
            className="absolute inset-0 pointer-events-none z-10"
            style={{
              background: useTransform(
                mouseX,
                [-0.5, 0.5],
                [
                  "linear-gradient(135deg, rgba(255,255,255,0.2) 0%, transparent 50%)",
                  "linear-gradient(135deg, transparent 50%, rgba(255,255,255,0.2) 100%)"
                ]
              ),
            }}
          />
        </motion.div>
      </motion.div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative overflow-hidden rounded-2xl bg-zinc-200 group",
        containerClassName
      )}
      style={{ aspectRatio }}
    >
      <motion.div
        className="relative w-full h-full"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={getVariants()}
      >
        {imageContent}
      </motion.div>

      {/* Optional shimmer overlay on hover */}
      {enableHover && (
        <div className="absolute inset-0 z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent shimmer-effect" />
        </div>
      )}
    </div>
  );
}
