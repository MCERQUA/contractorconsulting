"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { Button } from "@/components/ui/Button";
import { PremiumCard } from "@/components/ui/PremiumCard";
import { Check, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

const financingOptions = [
  {
    title: "0% APR Financing",
    term: "12 Months",
    description: "Ideal for short-term projects and immediate needs.",
    features: [
      "No interest if paid in full",
      "Low monthly payments",
      "Quick approval process",
      "No prepayment penalties"
    ],
    highlight: true
  },
  {
    title: "Low Rate Financing",
    term: "24-60 Months",
    description: "Budget-friendly options for larger renovations.",
    features: [
      "Competitive fixed rates",
      "Extended payment terms",
      "Flexible payment options",
      "Projects of any size"
    ],
    highlight: false
  },
  {
    title: "Home Equity Options",
    term: "Custom Terms",
    description: "Leverage your home's value for major transformations.",
    features: [
      "Larger project budgets",
      "Potential tax benefits",
      "Lower interest rates",
      "Personalized solutions"
    ],
    highlight: false
  }
];

export default function FinancingPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <PageHero
        title="FINANCING"
        subtitle="Flexible payment options to make your dream project a reality"
        imageSrc="/images/generated/financing-hero.webp"
      />

      {/* Intro Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <motion.h2 
              className="text-3xl md:text-5xl font-black text-foreground tracking-tighter mb-6 uppercase"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Smart Solutions for Your Home
            </motion.h2>
            <div className="w-16 h-1 bg-primary mx-auto mb-8" />
            <p className="text-xl text-foreground/70 leading-relaxed">
              Don&apos;t let budget constraints hold back your vision. We&apos;ve partnered with leading financing providers 
              to offer premium options that fit your financial goals as perfectly as our builds fit your home.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {financingOptions.map((option, idx) => (
              <div key={idx} className="h-full">
                <PremiumCard
                  className={cn(
                    "flex flex-col h-full transition-all duration-500",
                    option.highlight ? "ring-2 ring-primary border-transparent shadow-2xl scale-105 z-10" : "bg-zinc-50/50"
                  )}
                >
                  <div className="flex flex-col h-full">
                    {option.highlight && (
                      <div className="mb-6">
                        <span className="inline-block bg-primary text-white text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full">
                          Most Popular
                        </span>
                      </div>
                    )}
                    
                    <h3 className="text-2xl font-black text-foreground mb-2 tracking-tight uppercase">{option.title}</h3>
                    <p className="text-primary font-bold text-lg mb-4">{option.term}</p>
                    <p className="text-foreground/60 mb-8 text-sm leading-relaxed">{option.description}</p>
                    
                    <div className="w-full h-px bg-foreground/5 mb-8" />
                    
                    <ul className="space-y-4 mb-10">
                      {option.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-3 text-foreground/80 font-medium text-sm">
                          <div className="mt-0.5 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <Check className="w-3 h-3 text-primary stroke-[3]" />
                          </div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="mt-auto">
                      <Button 
                        className="w-full group" 
                        variant={option.highlight ? "primary" : "outline"}
                      >
                        Learn More
                        <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </div>
                  </div>
                </PremiumCard>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-zinc-50 border-y border-foreground/5">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4 uppercase tracking-tight">
              Simple 3-Step Process
            </h2>
            <div className="w-12 h-0.5 bg-primary/30 mx-auto" />
          </div>
          
          <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            {[
              { 
                step: "01", 
                title: "APPLY ONLINE", 
                desc: "Complete a simple application in minutes with a soft credit pull that won't impact your score." 
              },
              { 
                step: "02", 
                title: "GET APPROVED", 
                desc: "Receive a decision quickly with multiple flexible payment plans to choose from." 
              },
              { 
                step: "03", 
                title: "START BUILDING", 
                desc: "Once approved, our team begins project scheduling so we can break ground immediately." 
              }
            ].map((item, idx) => (
              <div key={idx} className="relative">
                <div className="text-[8rem] font-black text-foreground/[0.03] absolute -top-20 -left-4 pointer-events-none select-none">
                  {item.step}
                </div>
                <div className="relative z-10">
                  <div className="text-primary font-black text-sm mb-4 tracking-widest">STEP {item.step}</div>
                  <h3 className="text-xl font-black text-foreground mb-4 tracking-tight">{item.title}</h3>
                  <p className="text-foreground/60 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ/Contact CTA */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto bg-primary rounded-[2rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
            {/* Decorative background element */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-black text-white mb-8 tracking-tighter uppercase">
                Ready to get started?
              </h2>
              <p className="text-white/80 text-xl mb-12 max-w-2xl mx-auto">
                Our financial specialists are here to help you navigate your options and find the perfect plan for your project.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Button size="lg" variant="secondary" className="px-10">
                  Speak with a Specialist
                </Button>
                <Button size="lg" variant="outline" className="px-10 border-white/30 text-white hover:bg-white/10">
                  Calculate Payments
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}