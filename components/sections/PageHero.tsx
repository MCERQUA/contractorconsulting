"use client";

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface PageHeroProps {
  title: string;
  subtitle?: string;
  imageSrc: string;
  imageAlt?: string;
}

export function PageHero({
  title,
  subtitle,
  imageSrc,
}: PageHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.to('.page-hero-bg', {
        scale: 1.1,
        y: '5%',
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 0.5,
        },
      });

      gsap.from('.page-hero-title', {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      });

      gsap.from('.page-hero-subtitle', {
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: 'power3.out',
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative h-[50vh] md:h-[60vh] w-full overflow-hidden flex items-center justify-center">
      {/* Background Layer - Always dark overlay */}
      <div className="page-hero-bg absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${imageSrc})` }}
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content - Always white text */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <h1 className="page-hero-title text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-4 text-white">
          {title}
        </h1>
        {subtitle && (
          <p className="page-hero-subtitle text-lg md:text-xl max-w-2xl mx-auto text-white/80">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
