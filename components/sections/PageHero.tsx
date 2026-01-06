"use client";

import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

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
  const imageRef = useRef<HTMLDivElement>(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      // Ken Burns effect - continuous slow zoom and pan
      const kenBurnsTl = gsap.timeline({
        repeat: -1,
        yoyo: true,
      });

      kenBurnsTl.to('.page-hero-image', {
        scale: 1.15,
        x: '3%',
        y: '-2%',
        duration: 20,
        ease: 'none',
      });

      // Parallax on scroll
      gsap.to('.page-hero-bg', {
        y: '15%',
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 0.5,
        },
      });

      // Title reveal animation
      gsap.from('.page-hero-title', {
        y: 80,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
        delay: 0.3,
      });

      // Title letter stagger effect (if already visible)
      gsap.from('.page-hero-title', {
        filter: 'blur(10px)',
        duration: 1,
        ease: 'power2.out',
        delay: 0.3,
      });

      // Subtitle fade in with slide
      gsap.from('.page-hero-subtitle', {
        y: 40,
        opacity: 0,
        duration: 1,
        delay: 0.6,
        ease: 'power3.out',
      });

      // Decorative line animation
      gsap.from('.hero-decorative-line', {
        scaleX: 0,
        duration: 1.2,
        delay: 0.8,
        ease: 'power3.inOut',
      });

      // Overlay gradient reveal
      gsap.from('.hero-gradient-overlay', {
        opacity: 0,
        duration: 1.5,
        ease: 'power2.inOut',
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative h-[50vh] md:h-[60vh] w-full overflow-hidden flex items-center justify-center"
    >
      {/* Background Layer with Ken Burns Effect */}
      <div className="page-hero-bg absolute inset-0 z-0 overflow-hidden">
        <div
          ref={imageRef}
          className="page-hero-image absolute inset-[-10%] w-[120%] h-[120%]"
        >
          <Image
            src={imageSrc}
            alt={title}
            fill
            priority
            className="object-cover"
            sizes="100vw"
            onLoad={() => setImageLoaded(true)}
          />
        </div>

        {/* Multi-layer gradient overlay for depth */}
        <div className="hero-gradient-overlay absolute inset-0">
          {/* Base dark overlay */}
          <div className="absolute inset-0 bg-black/50" />

          {/* Gradient from bottom for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />

          {/* Subtle vignette effect */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.3)_100%)]" />
        </div>
      </div>

      {/* Animated grain texture overlay */}
      <div
        className="absolute inset-0 z-5 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
        }}
      />

      {/* Content - Always white text */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* Decorative line above title */}
        <div className="hero-decorative-line w-16 h-0.5 bg-white/60 mx-auto mb-6 origin-center" />

        <h1 className="page-hero-title text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-4 text-white drop-shadow-lg">
          {title}
        </h1>

        {subtitle && (
          <p className="page-hero-subtitle text-lg md:text-xl max-w-2xl mx-auto text-white/80">
            {subtitle}
          </p>
        )}

        {/* Decorative line below subtitle */}
        <div className="hero-decorative-line w-24 h-0.5 bg-white/40 mx-auto mt-6 origin-center" />
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white/60 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
