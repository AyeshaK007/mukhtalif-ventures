import type { Metadata } from 'next';
import { MapPin, Phone, Mail, Clock, ArrowRight, Headphones, ShieldCheck, Truck, Globe, ChevronDown } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import FadeIn from '@/components/FadeIn';

export const metadata: Metadata = {
  title: 'Contact Us | Mukhtalif Ventures',
  description: 'Get in touch with Mukhtalif Ventures for logistics and supply chain enquiries.',
};

const trustItems = [
  { icon: Clock, title: 'Same-Day Response', desc: 'Replies within one business day.' },
  { icon: ShieldCheck, title: 'Logistics Experts', desc: 'Direct access to supply chain planners.' },
  { icon: Truck, title: 'Custom Freight', desc: 'Tailored solutions for your cargo.' },
  { icon: Globe, title: 'Nationwide Support', desc: 'Covering 300+ cities across Pakistan.' },
];

const faqs = [
  { q: 'How fast do you reply?', a: 'We typically respond to all quote requests and inquiries within one business day.' },
  { q: 'Do you provide nationwide delivery?', a: 'Yes, our secure freight and pallet transport network spans over 300 cities across Pakistan.' },
  { q: 'Can I request a custom quote for cold chain?', a: 'Absolutely. You can select "Healthcare Logistics" or "Cold Chain" in our contact form or visit our quote page for precise planning.' },
];

export default function ContactPage() {
  return (
    <>
      {/* MINimal EDITORIAL HEADER - No Giant Blue Hero Banner */}
      <section className="pt-36 pb-12 bg-white border-b border-surface-border">
        <div className="container-page max-w-4xl text-center">
          <FadeIn>
            <span className="eyebrow text-red mb-3 block">Get in Touch</span>
            <h1 className="font-display text-4xl font-extrabold text-ink-heading md:text-5xl tracking-tight">
              Let&apos;s discuss your logistics needs.
            </h1>
            <p className="mt-4 text-base text-ink-secondary max-w-xl mx-auto leading-relaxed">
              We respond within one business day. Reach out to our Karachi team for quotes, supply chain planning, or general inquiries.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="bg-slate-900 py-8 text-white">
        <div className="container-page max-w-6xl">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {trustItems.map((item, idx) => (
              <FadeIn key={idx} delay={idx * 0.05} className="flex items-center gap-3 p-2">
                <div className="h-10 w-10 rounded-card bg-white/5 border border-white/10 flex items-center justify-center text-blue shrink-0">
                  <item.icon className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">{item.title}</h4>
                  <p className="text-[11px] text-slate-400 mt-0.5">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* MAIN CONTENT: FORM + HQ & MAP */}
      <section className="section-pad bg-surface-gray">
        <div className="container-page max-w-6xl grid gap-12 lg:grid-cols-[1.2fr_1fr] items-start">
          
          {/* Left Column: Contact Form */}
          <FadeIn>
            <div className="bg-white rounded-card-lg border border-surface-border p-8 md:p-10 shadow-card">
              <h3 className="font-display text-2xl font-bold text-ink-heading mb-2">Send us a message</h3>
              <p className="text-xs text-ink-secondary mb-8 leading-relaxed">
                Fill out the form below and our logistics specialists will get back to you promptly.
              </p>
              
              <form className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="block text-[11px] font-bold text-ink-heading uppercase tracking-wider mb-1.5">Full Name</label>
                    <input required placeholder="Ali Khan" className="w-full rounded-card border border-surface-border bg-surface-gray px-5 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue focus:bg-white transition-all" />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-ink-heading uppercase tracking-wider mb-1.5">Email Address</label>
                    <input required type="email" placeholder="ali@example.com" className="w-full rounded-card border border-surface-border bg-surface-gray px-5 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue focus:bg-white transition-all" />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="block text-[11px] font-bold text-ink-heading uppercase tracking-wider mb-1.5">Phone Number</label>
                    <input placeholder="+92 300 1234567" className="w-full rounded-card border border-surface-border bg-surface-gray px-5 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue focus:bg-white transition-all" />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-ink-heading uppercase tracking-wider mb-1.5">Service Interested In</label>
                    <select className="w-full rounded-card border border-surface-border bg-surface-gray px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue focus:bg-white transition-all">
                      <option>Select service...</option>
                      <option>Local Logistics</option>
                      <option>International Logistics</option>
                      <option>Warehousing Management</option>
                      <option>Clearing & Forwading</option>
                      <option>Dangerous Good Handling</option>
                      <option>Sea Freight</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-ink-heading uppercase tracking-wider mb-1.5">Message / Details</label>
                  <textarea required placeholder="Tell us about your shipping requirements..." rows={4} className="w-full rounded-card border border-surface-border bg-surface-gray px-5 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue focus:bg-white transition-all resize-none" />
                </div>

                <button type="submit" className="btn-primary w-full sm:w-auto mt-2">Send Message <ArrowRight className="ml-2 h-4 w-4 inline" /></button>
              </form>
            </div>
          </FadeIn>

          {/* Right Column: HQ Card & Map */}
          <FadeIn delay={0.1} className="space-y-6">
            
            {/* Karachi Headquarters Card */}
            <div className="rounded-card-lg border border-surface-border bg-white p-7 shadow-card relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue to-red" />
              <h4 className="font-display text-base font-bold text-ink-heading mb-5">Mukhtalif Ventures (HQ)</h4>
              
              <div className="space-y-4 text-xs">
                <div className="flex items-start gap-3">
                  <div className="h-8 w-8 rounded-lg bg-blue/10 text-blue flex items-center justify-center shrink-0">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-bold text-ink-heading">Location</p>
                    <p className="text-ink-secondary mt-0.5">Shahrah-e-Faisal, Karachi, Pakistan</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="h-8 w-8 rounded-lg bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0">
                    <Clock className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-bold text-ink-heading">Working Hours</p>
                    <p className="text-ink-secondary mt-0.5">Mon–Sat, 9:00 AM – 7:00 PM</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="h-8 w-8 rounded-lg bg-red/10 text-red flex items-center justify-center shrink-0">
                    <Phone className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-bold text-ink-heading">Phone Inquiry</p>
                    <p className="text-ink-secondary mt-0.5">+92 21 3456 7890</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="h-8 w-8 rounded-lg bg-amber-500/10 text-amber-600 flex items-center justify-center shrink-0">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-bold text-ink-heading">Email Support</p>
                    <p className="text-ink-secondary mt-0.5">info@mukhtalifventures.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="aspect-[16/10] w-full overflow-hidden rounded-card-lg border border-surface-border bg-surface-gray shadow-card">
              <iframe
                title="Office location map"
                className="h-full w-full"
                loading="lazy"
                src="https://www.google.com/maps?q=Shahrah-e-Faisal,Karachi,Pakistan&output=embed"
              />
            </div>

          </FadeIn>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-24 bg-white border-t border-surface-border">
        <div className="container-page max-w-3xl">
          <SectionHeading eyebrow="Got Questions?" title="Frequently Asked Questions" align="center" />
          <div className="mt-12 space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="rounded-card border border-surface-border bg-surface-gray overflow-hidden shadow-sm p-6">
                <h4 className="font-display font-bold text-ink-heading text-sm">{faq.q}</h4>
                <p className="mt-2 text-xs text-ink-secondary leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}