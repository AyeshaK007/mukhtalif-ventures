'use client';

import Link from 'next/link';
import { ArrowRight, ShieldCheck, Clock, Truck as TruckIcon, Package, Globe, Thermometer, Cpu, MapPin, CheckCircle2 } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import FadeIn from '@/components/FadeIn';
import Icon from '@/components/Icon';
import { services, stats, testimonials, partners } from '@/lib/data';

const industriesList = [
  { name: 'Healthcare & Hospitals', icon: ShieldCheck, desc: 'Direct-to-facility delivery for critical medical supplies.' },
  { name: 'Pharmaceuticals', icon: Thermometer, desc: 'GDP-aligned, temperature-verified movement from plant to shelf.' },
  { name: 'Retail & Consumer Goods', icon: Package, desc: 'High-volume multi-store replenishment on strict schedules.' },
  { name: 'Cold Chain Logistics', icon: Cpu, desc: 'Unbroken thermal integrity for sensitive perishables and vaccines.' },
];

const processSteps = [
  { step: '01', title: 'Pickup', desc: 'Secure cargo intake & verification against digital manifests.' },
  { step: '02', title: 'Warehousing', desc: 'Optimized staging, barcode tracking, and inventory control.' },
  { step: '03', title: 'Transportation', desc: 'Route-optimized multi-modal transit across domestic & global corridors.' },
  { step: '04', title: 'Tracking', desc: 'Real-time telemetry and checkpoints updating live dashboards.' },
  { step: '05', title: 'Delivery', desc: 'Signed proof-of-delivery captured and transmitted instantly.' },
];

export default function HomePage() {
  return (
    <>
      {/* HERO SECTION WITH VIGNETTE DARK NAVY GRADIENT & LIVE TELEMETRY CARD */}
      <section className="relative min-h-[760px] overflow-hidden bg-[#0A0F1D] text-white pt-16">
        {/* Subtle Warehouse Texture Overlay (~15% Visibility) */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.15] pointer-events-none scale-105"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1920&auto=format&fit=crop')` }}
        />
        {/* Vignette Lighting Effect (Dark Corners, Brighter Center) */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(37,99,235,0.15),transparent_60%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1D] via-transparent to-[#0A0F1D]/80" />

        <div className="container-page relative grid min-h-[700px] items-center gap-12 py-24 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <FadeIn>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-1.5 text-xs font-semibold tracking-wide text-amber-400 backdrop-blur-md border border-white/10 mb-6 shadow-sm">
                <span className="h-2 w-2 rounded-full bg-amber-400 animate-pulse" /> Premium Cross-Border &amp; Road Freight
              </span>
            </FadeIn>
            <FadeIn delay={0.08}>
              <h1 className="font-display text-4xl font-extrabold tracking-tight leading-[1.1] md:text-6xl text-white">
                Fast &amp; Sustainable <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#DC2626]">
                  Road Freight Solutions
                </span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.16}>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-slate-300 md:text-lg font-sans">
                Express pallet cargo shipping with same-day and next-day delivery. 
                Real-time tracking, optimized routes, dependable logistics and temperature-controlled transportation designed for supply chains.
              </p>
            </FadeIn>
            <FadeIn delay={0.24}>
              <div className="mt-8 flex flex-wrap gap-4 items-center">
                <Link href="/quote" className="btn-primary transform transition-all duration-200 hover:scale-105 shadow-xl shadow-blue-600/30 bg-[#DC2626] hover:bg-[#B91C1C] rounded-full px-8 py-3.5">
                  Request a Quote <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link href="/contact" className="btn-secondary bg-white/10 text-white border-white/20 hover:bg-white/20 backdrop-blur-md rounded-full px-8 py-3.5">
                  Contact Our Team
                </Link>
              </div>

              {/* Trust Strip Below CTAs */}
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-medium text-slate-300">
                <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-emerald-400" /> GDP Compliant</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-emerald-400" /> Cold Chain Certified</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-emerald-400" /> 25+ Years Experience</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-emerald-400" /> 300+ Partners</span>
              </div>
            </FadeIn>
          </div>

          {/* Redesigned Live Fleet Tracking Card */}
          <FadeIn delay={0.3} className="hidden lg:block pt-8">
            <div className="relative mx-auto max-w-sm rounded-[24px] border border-white/20 bg-white/10 p-6 backdrop-blur-2xl shadow-2xl">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-[14px] bg-[#DC2626] flex items-center justify-center font-bold text-white shadow-md">
                    MV
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white tracking-wide">LIVE SHIPMENT</p>
                    <p className="text-xs text-slate-300 font-mono">Container: MV-34872</p>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 rounded-full bg-emerald-500/20 px-3 py-1 border border-emerald-500/30">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-semibold text-emerald-400">GPS Live</span>
                </div>
              </div>

              <div className="mt-5 space-y-4 font-mono text-xs">
                <div className="flex justify-between items-center bg-white/5 p-3 rounded-xl border border-white/5">
                  <span className="text-slate-400">Route Origin:</span>
                  <span className="text-white font-bold">Karachi Hub</span>
                </div>
                <div className="flex justify-between items-center bg-white/5 p-3 rounded-xl border border-white/5">
                  <span className="text-slate-400">Destination:</span>
                  <span className="text-white font-bold">Lahore Terminal</span>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white/5 p-3 rounded-xl border border-white/5 text-center">
                    <p className="text-slate-400 text-[10px]">EST. ARRIVAL</p>
                    <p className="text-emerald-400 font-bold text-sm mt-1">2 hr 18 min</p>
                  </div>
                  <div className="bg-white/5 p-3 rounded-xl border border-white/5 text-center">
                    <p className="text-slate-400 text-[10px]">CARGO TEMP</p>
                    <p className="text-amber-400 font-bold text-sm mt-1">4.0°C</p>
                  </div>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-300 font-sans">
                <span className="flex items-center gap-1 text-emerald-400 font-semibold"><span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" /> Telemetry Active</span>
                <span className="text-slate-400">Secured &amp; Verified</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* TRUSTED BY INFINITE TICKER */}
      <section className="border-y border-slate-200 bg-[#F8FAFC] py-8 overflow-hidden">
        <div className="container-page text-center mb-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">Trusted by industry leaders at</p>
        </div>
        <div className="flex w-full overflow-hidden mask-gradient">
          <div className="flex animate-marquee gap-16 whitespace-nowrap items-center px-4">
            {[...partners, ...partners, ...partners].map((p, idx) => (
              <span key={idx} className="font-display text-base font-bold text-slate-700 tracking-wider flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#2563EB]" /> {p}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW WITH OVERLAPPING 25+ YEARS CARD */}
      <section className="section-pad bg-white">
        <div className="container-page grid items-center gap-14 md:grid-cols-2">
          <FadeIn className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[20px] shadow-2xl border border-slate-200">
              <img 
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1000&auto=format&fit=crop" 
                alt="Modern Warehouse Logistics" 
                className="h-full w-full object-cover transform transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
            </div>
            {/* Overlapping Floating Badge */}
            <div className="absolute -bottom-6 -right-6 md:bottom-[-20px] md:right-[-20px] rounded-[20px] bg-[#0F172A] text-white p-6 shadow-2xl border border-white/10 backdrop-blur-xl z-10">
              <p className="font-mono text-3xl font-extrabold text-[#2563EB]">25+ Years</p>
              <p className="text-xs font-medium text-slate-300 mt-1">Excellence in National Logistics</p>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.1}>
            <p className="eyebrow mb-3 text-[#DC2626] font-semibold uppercase tracking-wider text-xs">About Mukhtalif Ventures</p>
            <h2 className="font-display text-3xl font-bold text-[#111827] md:text-4xl">
              A logistics partner built for enterprise-grade reliability.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              We leverage advanced route optimization and modern transport infrastructure to ensure your sensitive cargo arrives safe, secure, and right on schedule.
            </p>
            {/* Rich Feature Cards with Icons & Height */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { icon: ShieldCheck, title: 'Compliant Handling', desc: 'Strict regulatory safety protocols.' },
                { icon: Clock, title: 'On-Time Delivery', desc: 'Predictable scheduling windows.' },
                { icon: TruckIcon, title: 'National Fleet', desc: 'Modern specialized transport.' },
              ].map(({ icon: I, title, desc }) => (
                <div key={title} className="rounded-[16px] border border-slate-200 bg-[#F8FAFC] p-5 flex flex-col justify-between shadow-sm transition-all hover:shadow-md hover:border-blue-300 group">
                  <div>
                    <div className="h-10 w-10 rounded-xl bg-[#EAF3FF] flex items-center justify-center text-[#2563EB] mb-4 group-hover:rotate-6 transition-transform">
                      <I className="h-5 w-5" strokeWidth={1.8} />
                    </div>
                    <h4 className="text-sm font-bold text-[#111827]">{title}</h4>
                    <p className="mt-1 text-xs text-slate-500 leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link href="/about" className="mt-8 inline-flex items-center text-sm font-semibold text-[#2563EB] hover:text-blue-800 group">
              Learn more about us <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* SERVICES OVERVIEW */}
      <section className="section-pad bg-[#F8FAFC]">
        <div className="container-page">
          <SectionHeading
            eyebrow="What We Do"
            title="Services built around your supply chain"
            description="From local logistics to international shipping and warehousing, every service is managed professionally."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <FadeIn key={s.slug} delay={i * 0.06}>
                <Link href={`/services/${s.slug}`} className="rounded-[16px] border border-slate-200 bg-white p-6 block h-full shadow-sm hover:shadow-xl hover:border-blue-400 transition-all duration-300 group">
                  <div className="flex h-12 w-12 items-center justify-center rounded-[14px] bg-[#EAF3FF] text-[#2563EB] group-hover:bg-[#2563EB] group-hover:text-white transition-colors">
                    <Icon name={s.icon} />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-bold text-[#111827]">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.short}</p>
                  <span className="mt-5 inline-flex items-center text-sm font-semibold text-[#DC2626] group-hover:text-red-700">
                    Learn More <ArrowRight className="ml-1.5 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES WE SERVE */}
      <section className="section-pad bg-white">
        <div className="container-page">
          <SectionHeading eyebrow="Industries We Serve" title="Purpose-built for sensitive, regulated cargo" align="center" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {industriesList.map((ind, i) => (
              <FadeIn key={ind.name} delay={i * 0.05}>
                <div className="rounded-[16px] border border-slate-200 bg-[#F8FAFC] p-6 h-full flex flex-col justify-between shadow-sm hover:shadow-md transition-all group">
                  <div>
                    <div className="h-12 w-12 rounded-[14px] bg-red-50 flex items-center justify-center text-[#DC2626] mb-4 group-hover:scale-110 transition-transform">
                      <ind.icon className="h-6 w-6" strokeWidth={1.8} />
                    </div>
                    <h3 className="text-base font-bold text-[#111827]">{ind.name}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-slate-600">{ind.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* OUR PROCESS TIMELINE */}
      <section className="section-pad bg-[#0F172A] text-white">
        <div className="container-page">
          <SectionHeading eyebrow="How It Works" title="Our seamless logistics workflow" align="center" />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {processSteps.map((p, i) => (
              <FadeIn key={p.step} delay={i * 0.08}>
                <div className="rounded-[16px] border border-white/10 bg-white/5 p-6 backdrop-blur-md h-full flex flex-col justify-between relative group hover:border-[#2563EB] transition-colors">
                  <div>
                    <span className="font-mono text-2xl font-black text-[#2563EB] opacity-60 group-hover:opacity-100 transition-opacity">{p.step}</span>
                    <h4 className="mt-4 font-display text-lg font-bold text-white">{p.title}</h4>
                    <p className="mt-2 text-xs leading-relaxed text-slate-300">{p.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US / STATS CARDS */}
      <section className="relative overflow-hidden bg-[#0A0F1D] section-pad text-white border-y border-white/10">
        <div className="container-page relative max-w-6xl mx-auto px-4">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="A network built on twenty-five years of moving essential goods"
            align="center"
          />
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <FadeIn>
              <div className="rounded-[24px] border border-white/10 bg-white/5 p-8 text-center backdrop-blur-md shadow-lg transition-transform hover:-translate-y-1 h-full flex flex-col justify-center">
                <span className="font-mono text-4xl font-extrabold text-white">300+</span>
                <p className="mt-2 text-xs uppercase tracking-wider text-slate-400 font-semibold">Cities Served</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.05}>
              <div className="rounded-[24px] border border-white/10 bg-white/5 p-8 text-center backdrop-blur-md shadow-lg transition-transform hover:-translate-y-1 h-full flex flex-col justify-center">
                <span className="font-mono text-4xl font-extrabold text-white">1000+</span>
                <p className="mt-2 text-xs uppercase tracking-wider text-slate-400 font-semibold">Shipments Handled</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="rounded-[24px] border border-white/10 bg-white/5 p-8 text-center backdrop-blur-md shadow-lg transition-transform hover:-translate-y-1 h-full flex flex-col justify-center">
                <span className="font-mono text-4xl font-extrabold text-white">25+</span>
                <p className="mt-2 text-xs uppercase tracking-wider text-slate-400 font-semibold">Years Experience</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.15}>
              <div className="rounded-[24px] border border-white/10 bg-white/5 p-8 text-center backdrop-blur-md shadow-lg transition-transform hover:-translate-y-1 h-full flex flex-col justify-center">
                <span className="font-mono text-4xl font-extrabold text-white">100%</span>
                <p className="mt-2 text-xs uppercase tracking-wider text-slate-400 font-semibold">Coverage</p>
                <p className="text-[10px] text-slate-500 mt-0.5">Nationwide &amp; Global</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section-pad bg-[#F8FAFC]">
        <div className="container-page">
          <SectionHeading eyebrow="Testimonials" title="What our clients say" align="center" />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {testimonials.map((t, i) => (
              <FadeIn key={t.name} delay={i * 0.08}>
                <div className="rounded-[16px] border border-slate-200 bg-white p-8 h-full shadow-sm flex flex-col justify-between">
                  <p className="text-sm leading-relaxed text-slate-700 italic">&ldquo;{t.quote}&rdquo;</p>
                  <div className="mt-6 border-t border-slate-100 pt-4">
                    <p className="text-sm font-bold text-[#111827]">{t.name}</p>
                    <p className="text-xs text-slate-500">{t.role}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad bg-gradient-to-br from-[#0F172A] to-[#1E3A8A] text-white">
        <div className="container-page flex flex-col items-center gap-6 text-center">
          <h2 className="font-display text-3xl font-bold md:text-4xl">
            Ready to move your next shipment?
          </h2>
          <p className="max-w-xl text-slate-300">
            Tell us what you need moved, stored, or managed &mdash; we&apos;ll get back
            to you with a plan within one business day.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/quote" className="btn-primary shadow-xl bg-[#DC2626] hover:bg-[#B91C1C] transform transition-transform hover:scale-105 rounded-full px-8 py-3.5">Request a Quote</Link>
            <Link href="/contact" className="btn-secondary bg-white/10 text-white border-white/20 hover:bg-white/20 rounded-full px-8 py-3.5">Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  );
}