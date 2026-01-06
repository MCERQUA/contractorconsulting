import Link from "next/link";
import { Button } from "@/components/ui/Button";

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-3xl font-black text-white mb-6">
              Consulting<span className="text-primary">.</span>
            </h2>
            <p className="text-white/60 max-w-sm mb-8">
              Premium contracting services for residential and commercial projects. 
              Quality, integrity, and precision in every build.
            </p>
            <div className="flex gap-4">
              {/* Social placeholders */}
              <div className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 transition-colors" />
              <div className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 transition-colors" />
              <div className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 transition-colors" />
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Services</h4>
            <ul className="space-y-4 text-white/60">
              <li><Link href="#" className="hover:text-primary transition-colors">Roofing</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Remodeling</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Custom Framing</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Design & Permits</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-6">Contact</h4>
            <ul className="space-y-4 text-white/60">
              <li>123 Contractor Way</li>
              <li>Seattle, WA 98101</li>
              <li>(555) 123-4567</li>
              <li><Button size="sm" variant="outline" className="mt-2">Get a Quote</Button></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-white/40">
          <p>&copy; 2026 Consulting Contractors. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white">Privacy Policy</Link>
            <Link href="#" className="hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
