import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { Button } from "@/components/ui/Button";
import { PremiumCard } from "@/components/ui/PremiumCard";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

const financingOptions = [
  {
    title: "0% APR Financing",
    term: "12 Months",
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
        title="Financing"
        subtitle="Flexible payment options to make your project possible"
        imageSrc="/images/generated/financing-hero.webp"
      />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
              Make Your Dream Project a Reality
            </h2>
            <p className="text-lg text-foreground/70">
              Don&apos;t let budget constraints hold back your vision. We&apos;ve partnered with leading financing providers to offer flexible options that fit your needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {financingOptions.map((option, idx) => (
              <PremiumCard
                key={idx}
                className={cn(
                  "p-8",
                  option.highlight ? "ring-2 ring-primary pt-12" : ""
                )}
              >
                {option.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-sm font-bold px-4 py-1 rounded-full z-20 shadow-lg">
                    Most Popular
                  </span>
                )}
                <h3 className="text-2xl font-bold text-foreground mb-2">{option.title}</h3>
                <p className="text-primary font-medium mb-6">{option.term}</p>
                <ul className="space-y-3 mb-8">
                  {option.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-3 text-foreground/70">
                      <Check className="w-5 h-5 text-primary flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full" variant={option.highlight ? "primary" : "secondary"}>
                  Learn More
                </Button>
              </PremiumCard>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-zinc-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
              How It Works
            </h2>
            <p className="text-lg text-foreground/70 mb-12">
              Getting approved is quick and easy. Here&apos;s what to expect.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { step: "1", title: "Apply Online", desc: "Complete a simple application in minutes with no impact to your credit score." },
                { step: "2", title: "Get Approved", desc: "Receive a decision quickly with multiple options to choose from." },
                { step: "3", title: "Start Your Project", desc: "Once approved, we can begin your project immediately." }
              ].map((item, idx) => (
                <div key={idx} className="text-center">
                  <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-black mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-foreground/70">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
