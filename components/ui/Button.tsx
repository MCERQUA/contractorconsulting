"use strict";
"use client";

import * as React from "react";
import { motion, HTMLMotionProps } from "motion/react";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  icon?: boolean;
  children: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", icon = false, children, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center rounded-lg font-bold transition-all duration-300 focus:outline-none disabled:opacity-50 disabled:pointer-events-none group";
    
    const variants = {
      primary: "bg-primary text-primary-foreground shadow-lg shadow-black/30 hover:shadow-black/50 hover:scale-[1.02]", // Black button with white text
      secondary: "bg-secondary text-primary shadow-lg hover:bg-secondary-foreground hover:scale-[1.02]", // Grey button with black text
      outline: "border-2 border-primary/50 text-primary hover:bg-primary/10",
      ghost: "text-foreground/80 hover:text-primary hover:bg-foreground/10",
    };

    const sizes = {
      sm: "h-9 px-4 text-sm",
      md: "h-12 px-6 text-base",
      lg: "h-14 px-8 text-lg",
    };

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.95 }}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
        {icon && (
          <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
        )}
      </motion.button>
    );
  }
);
Button.displayName = "Button";

export { Button };
