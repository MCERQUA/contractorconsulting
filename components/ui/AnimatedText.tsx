"use strict";
"use client";

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
import { cn } from '@/lib/utils';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface AnimatedTextProps {
  children: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p';
  animation?: 'slideUp' | 'blur' | 'wave' | 'cascade';
  className?: string;
  stagger?: number;
}

export function AnimatedText({
  children,
  as: Component = 'p',
  animation = 'slideUp',
  className = '',
  stagger = 0.03,
}: AnimatedTextProps) {
  const textRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!textRef.current) return;

    // Split text
    const split = new SplitType(textRef.current, {
      types: animation === 'cascade' ? 'words' : 'chars',
      tagName: 'span',
    });

    const elements = animation === 'cascade' ? split.words : split.chars;
    if (!elements) return;

    // Animation presets
    const presets = {
      slideUp: { y: 50, opacity: 0 },
      blur: { filter: 'blur(10px)', opacity: 0 },
      wave: { y: 30, opacity: 0, rotateX: -90 },
      cascade: { y: 40, opacity: 0, rotateY: -20 },
    };

    // Set initial state
    gsap.set(elements, presets[animation]);

    // Animate
    const ctx = gsap.context(() => {
      gsap.to(elements, {
        y: 0,
        opacity: 1,
        filter: 'blur(0px)',
        rotateX: 0,
        rotateY: 0,
        duration: 0.8,
        stagger: stagger,
        ease: animation === 'wave' ? 'back.out(1.7)' : 'power3.out',
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      });
    }, textRef);

    return () => {
      ctx.revert();
      split.revert();
    };
  }, [children, animation, stagger]);

  return (
    <Component ref={textRef as any} className={cn(className, "kerning-normal")}>
      {children}
    </Component>
  );
}
