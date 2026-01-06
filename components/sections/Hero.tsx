"use client";

import { useRef } from 'react';
import { Button } from '@/components/ui/Button';
import { AnimatedText } from '@/components/ui/AnimatedText';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      // Parallax Background
      gsap.to('.hero-bg', {
        scale: 1.2,
        y: '10%',
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 0.5,
        },
      });

      // Content fade out
      gsap.to('.hero-content', {
        y: -100,
        opacity: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '50% top',
          scrub: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Layer - Dark theme */}
      <div className="hero-bg absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/60" /> {/* Dark overlay */}
      </div>

      {/* Floating Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary/30 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px]" />
      </div>

      {/* Content */}
      <div className="hero-content relative z-30 container mx-auto px-6 text-center">
        <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-md">
          <span className="text-sm font-medium text-white uppercase tracking-widest">Premium Contracting Services</span>
        </div>

        <div className="flex flex-col items-center justify-center w-full px-2">
          <AnimatedText
            as="h1"
            animation="wave"
            className="text-[11vw] leading-[1.1] font-black tracking-tighter text-white whitespace-nowrap break-keep"
          >
            Consulting
          </AnimatedText>
          <AnimatedText
            as="h1"
            animation="wave"
            stagger={0.1}
            className="text-[11vw] leading-[1.1] font-black tracking-tighter text-secondary whitespace-nowrap mb-8 break-keep"
          >
            Contractors
          </AnimatedText>
        </div>

        <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/80 mb-10 leading-relaxed px-4">
          Elevating construction standards with precision, design, and integrity.
          From custom framing to high-end remodels.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" icon>
            Start Your Project
          </Button>
          <Button size="lg" variant="secondary">
            View Portfolio
          </Button>
        </div>
      </div>
    </section>
  );
}
