import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Mail, Clock, Twitter, Linkedin, Instagram, Facebook } from 'lucide-react';
import { services } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="bg-[#0A0F1D] text-white pt-20 pb-12 border-t border-white/10">
      <div className="container-page max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-white/10">
          
          {/* Column 1: Brand & Bio */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="flex items-center gap-3.5 group">
              <Image 
                src="/logo.png" 
                alt="Mukhtalif Ventures" 
                width={50} 
                height={50} 
                className="h-12 w-12 object-contain" 
              />
              <span className="font-display text-base font-extrabold leading-tight tracking-tight text-white">
                MUKHTALIF<br />
                <span className="text-[#DC2626]">VENTURES</span>
              </span>
            </Link>
            <p className="text-xs leading-relaxed text-slate-300 max-w-sm">
              Nationwide logistics, warehousing, and healthcare distribution built for reliability across Pakistan.
            </p>
            
            {/* Social Links: Twitter, LinkedIn, Instagram */}
            <div className="flex items-center gap-3 pt-2">
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="h-10 w-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:bg-[#2563EB] hover:text-white hover:border-transparent transition-all"
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="h-10 w-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:bg-[#2563EB] hover:text-white hover:border-transparent transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="h-10 w-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:bg-[#2563EB] hover:text-white hover:border-transparent transition-all"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Company Navigation */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-5">Company</h3>
            <ul className="space-y-3 text-xs">
              <li><Link href="/" className="text-slate-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-slate-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/careers" className="text-slate-300 hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="/contact" className="text-slate-300 hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 3: Services Navigation */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-5">Services</h3>
            <ul className="space-y-3 text-xs">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="text-slate-300 hover:text-white transition-colors">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Updated Contact Info & Opening Hours */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-5">Contact</h3>
            <ul className="space-y-4 text-xs text-slate-300">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-[#DC2626] shrink-0 mt-0.5" />
                <span>SB# 33 Mezzanine Floor, Chayell Apartment, Block 11, Gulistan-e-Johar, Karachi</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-[#DC2626] shrink-0" />
                <a href="tel:+923357225516" className="hover:text-white transition-colors">+92 335 722 5516</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-[#DC2626] shrink-0" />
                <a href="mailto:info@mukhtalifventures.com" className="hover:text-white transition-colors">info@mukhtalifventures.com</a>
              </li>
              <li className="flex items-center gap-3 pt-1 border-t border-white/10 text-slate-400">
                <Clock className="h-4 w-4 text-amber-400 shrink-0" />
                <span>Hours: 9:00 AM - 5:00 PM</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>&copy; {new Date().getFullYear()} Mukhtalif Ventures. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms-conditions" className="hover:text-white transition-colors">Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}