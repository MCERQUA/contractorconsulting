"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Roofing", href: "/roofing" },
  { name: "Remodeling", href: "/remodeling" },
  { name: "Siding", href: "/siding" },
  { name: "Framing", href: "/framing" },
  { name: "Decks", href: "/decks" },
  { name: "Design", href: "/design" },
  { name: "Real Estate", href: "/real-estate" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Financing", href: "/financing" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  
  const backgroundColor = useTransform(
    scrollY,
    [0, 50],
    ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.8)"] // White-based background
  );

  const backdropBlur = useTransform(
    scrollY,
    [0, 50],
    ["blur(0px)", "blur(12px)"]
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        isScrolled ? "border-black/10" : "border-transparent" // Black border
      )}
      style={{
        backgroundColor,
        backdropFilter: backdropBlur,
        WebkitBackdropFilter: backdropBlur,
      }}
    >
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="text-2xl font-black tracking-tighter bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
          CC<span className="text-secondary">.</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors duration-300"
            >
              {item.name}
            </Link>
          ))}
          <Link href="/contact">
            <Button size="sm" variant="primary">
              Contact Us
            </Button>
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-foreground" // Text color changed
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden absolute top-20 left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-black/10 p-6 flex flex-col gap-4 shadow-2xl" // Background and border changed
        >
          {navItems.map((item) => (
            <motion.div key={item.name} whileTap={{ scale: 0.95, x: 10 }}>
              <Link
                href={item.href}
                className="block text-lg font-medium text-foreground/80 active:text-primary py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
          <motion.div whileTap={{ scale: 0.95 }}>
            <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
              <Button className="w-full">Contact Us</Button>
            </Link>
          </motion.div>
        </motion.div>
      )}
    </motion.header>
  );
}
