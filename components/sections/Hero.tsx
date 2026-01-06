"use client";

import { useRef, useState } from 'react';
import { Button } from '@/components/ui/Button';
import { AnimatedText } from '@/components/ui/AnimatedText';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      // Ken Burns effect on background image
      const kenBurnsTl = gsap.timeline({
        repeat: -1,
        yoyo: true,
      });

      kenBurnsTl.to('.hero-image', {
        scale: 1.12,
        x: '2%',
        y: '-1%',
        duration: 25,
        ease: 'none',
      });

      // Parallax Background on scroll
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

      // Content fade out on scroll
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

      // Floating orbs animation
      gsap.to('.floating-orb-1', {
        y: -30,
        x: 20,
        scale: 1.1,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      gsap.to('.floating-orb-2', {
        y: 40,
        x: -30,
        scale: 0.9,
        duration: 10,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      gsap.to('.floating-orb-3', {
        y: -50,
        x: -20,
        scale: 1.15,
        duration: 12,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      // Badge reveal animation
      gsap.from('.hero-badge', {
        y: -30,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: 'power3.out',
      });

      // Subtitle reveal animation
      gsap.from('.hero-subtitle', {
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 0.8,
        ease: 'power3.out',
      });

      // Buttons stagger animation
      gsap.from('.hero-buttons', {
        y: 40,
        opacity: 0,
        duration: 1,
        delay: 1,
        ease: 'power3.out',
      });

      // Gradient overlay reveal
      gsap.from('.gradient-overlay', {
        opacity: 0,
        duration: 2,
        ease: 'power2.inOut',
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Layer with Ken Burns Effect */}
      <div className="hero-bg absolute inset-0 z-0 overflow-hidden">
        <div className="hero-image absolute inset-[-10%] w-[120%] h-[120%]">
          <Image
            src="/images/generated/hero-bg.webp"
            alt="Premium construction services"
            fill
            priority
            className="object-cover"
            sizes="100vw"
            onLoad={() => setImageLoaded(true)}
          />
        </div>

        {/* Multi-layer gradient overlay for depth */}
        <div className="gradient-overlay absolute inset-0">
          {/* Base dark overlay */}
          <div className="absolute inset-0 bg-black/60" />

          {/* Gradient for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30" />

          {/* Radial vignette */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />
        </div>
      </div>

      {/* Subtle grain texture */}
      <div
        className="absolute inset-0 z-5 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
        }}
      />

      {/* Floating Orbs with enhanced animations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
        <div className="floating-orb-1 absolute top-1/4 left-1/4 w-96 h-96 bg-secondary/25 rounded-full blur-[120px]" />
        <div className="floating-orb-2 absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[140px]" />
        <div className="floating-orb-3 absolute top-1/2 right-1/3 w-72 h-72 bg-white/10 rounded-full blur-[100px]" />
      </div>

      {/* Content */}
      <div className="hero-content relative z-30 container mx-auto px-6 text-center">
        <div className="hero-badge inline-block mb-6 px-4 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-md">
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

        <p className="hero-subtitle max-w-2xl mx-auto text-lg md:text-xl text-white/80 mb-10 leading-relaxed px-4">
          Elevating construction standards with precision, design, and integrity.
          From custom framing to high-end remodels.
        </p>

        <div className="hero-buttons flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" icon>
            Start Your Project
          </Button>
          <Button size="lg" variant="secondary">
            View Portfolio
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white/50 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
