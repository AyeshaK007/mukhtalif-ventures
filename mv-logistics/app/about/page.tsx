import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, Award, CheckCircle2, Trophy, Users, Truck } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import FadeIn from '@/components/FadeIn';
import { timeline, values, leadership } from '@/lib/data';

export const metadata: Metadata = {
  title: 'About Us | Mukhtalif Ventures',
  description: 'Our story, mission, vision, and the team behind Mukhtalif Ventures logistics network.',
};

export default function AboutPage() {
  return (
    <>
      {/* CLEAN EDITORIAL HERO - No Dark Warehouse, Focused Identity */}
      <section className="pt-36 pb-20 bg-white border-b border-slate-200 text-center">
        <div className="container-page max-w-4xl mx-auto px-4">
          <FadeIn>
            <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-5 py-1.5 text-xs font-semibold tracking-wide text-slate-700 border border-slate-200 mb-6 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-[#DC2626]" /> About Mukhtalif Ventures
            </span>
          </FadeIn>
          <FadeIn delay={0.08}>
            <h1 className="font-display text-4xl font-extrabold tracking-tight leading-[1.1] md:text-6xl text-[#111827]">
              Building Pakistan&apos;s most <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#DC2626]">
                trusted logistics network.
              </span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.16}>
            <p className="mt-6 text-base leading-relaxed text-slate-600 md:text-lg max-w-2xl mx-auto font-sans">
              Trusted since 1999. Delivering robust supply chain solutions across Healthcare, Retail, and Industrial sectors nationwide.
            </p>
          </FadeIn>
          <FadeIn delay={0.24}>
            <div className="mt-8 flex justify-center">
              <Link href="/services" className="inline-flex items-center justify-center rounded-full bg-[#DC2626] px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-xl shadow-red-600/20 transition-all hover:bg-[#B91C1C] hover:scale-105">
                Explore Our Services <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* INTEGRATED STATISTICS STRIP - Dark/Navy Blue Theme */}
      <section className="bg-[#0A0F1D] py-16 border-y border-white/10 text-white">
        <div className="container-page max-w-6xl px-4">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
            <FadeIn className="p-4">
              <div className="flex items-center justify-center gap-1.5 text-amber-400 mb-2">
                <Trophy className="h-4 w-4" />
                <span className="font-mono text-3xl md:text-4xl font-extrabold text-white">25+</span>
              </div>
              <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold">Years Experience</p>
            </FadeIn>
            <FadeIn delay={0.05} className="p-4">
              <div className="flex items-center justify-center gap-1.5 text-blue-400 mb-2">
                <Users className="h-4 w-4" />
                <span className="font-mono text-3xl md:text-4xl font-extrabold text-white">450+</span>
              </div>
              <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold">Employees</p>
            </FadeIn>
            <FadeIn delay={0.1} className="p-4">
              <div className="flex items-center justify-center gap-1.5 text-red-500 mb-2">
                <Truck className="h-4 w-4" />
                <span className="font-mono text-3xl md:text-4xl font-extrabold text-white">800+</span>
              </div>
              <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold">Vehicles Fleet</p>
            </FadeIn>
            <FadeIn delay={0.15} className="p-4">
              <div className="flex items-center justify-center gap-1.5 text-emerald-400 mb-2">
                <CheckCircle2 className="h-4 w-4" />
                <span className="font-mono text-3xl md:text-4xl font-extrabold text-white">99.6%</span>
              </div>
              <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold">On-Time Deliveries</p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="section-pad bg-white">
        <div className="container-page">
          <SectionHeading eyebrow="Our Core Purpose" title="Mission & Vision" align="center" />
          <div className="mt-12 grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
            <FadeIn>
              <div className="rounded-[28px] border border-slate-200/80 bg-[#F8FAFC] p-8 h-full shadow-sm relative overflow-hidden border-l-4 border-l-[#DC2626] transition-all hover:shadow-md">
                <div className="h-12 w-12 rounded-[16px] bg-red-50 flex items-center justify-center text-[#DC2626] mb-6 shadow-sm">
                  <ShieldCheck className="h-6 w-6" strokeWidth={1.8} />
                </div>
                <h3 className="font-display text-xl font-bold text-[#111827]">Our Mission</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  To move goods reliably and compliantly across Pakistan, so our clients never have to choose between speed and care.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="rounded-[28px] border border-slate-200/80 bg-[#F8FAFC] p-8 h-full shadow-sm relative overflow-hidden border-l-4 border-l-[#2563EB] transition-all hover:shadow-md">
                <div className="h-12 w-12 rounded-[16px] bg-blue-50 flex items-center justify-center text-[#2563EB] mb-6 shadow-sm">
                  <Award className="h-6 w-6" strokeWidth={1.8} />
                </div>
                <h3 className="font-display text-xl font-bold text-[#111827]">Our Vision</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  To be the logistics network Pakistan&apos;s healthcare and retail sectors trust by default, in every city we serve.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* COMPANY TIMELINE */}
      <section className="section-pad bg-[#F8FAFC]">
        <div className="container-page max-w-4xl">
          <SectionHeading eyebrow="Our Journey" title="Milestones that shaped our network" align="center" />
          <div className="mt-16 relative border-l-2 border-slate-300 ml-4 md:ml-32 space-y-12">
            {timeline.map((item, idx) => (
              <FadeIn key={item.year} delay={idx * 0.08} className="relative pl-8 md:pl-12">
                <div className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full bg-[#DC2626] border-4 border-[#F8FAFC] shadow-sm" />
                <div className="md:absolute md:-left-32 md:top-1 md:w-24 md:text-right">
                  <span className="font-mono text-lg font-bold text-[#DC2626]">{item.year}</span>
                </div>
                <div className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-display text-lg font-bold text-[#111827]">{item.title}</h4>
                  <p className="mt-2 text-sm text-slate-600">{item.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="section-pad bg-[#0F172A] text-white">
        <div className="container-page">
          <SectionHeading eyebrow="Leadership" title="The team behind the network" align="center" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
            {leadership.map((leader, idx) => (
              <FadeIn key={leader.name} delay={idx * 0.08}>
                <div className="rounded-[24px] border border-white/10 bg-white/5 p-6 backdrop-blur-md text-center hover:border-[#2563EB] transition-all group">
                  <div className="mx-auto h-24 w-24 rounded-full bg-gradient-to-br from-[#2563EB] to-slate-800 flex items-center justify-center mb-5 text-2xl font-bold font-mono shadow-inner group-hover:scale-105 transition-transform">
                    {leader.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <h3 className="text-base font-bold text-white">{leader.name}</h3>
                  <p className="mt-1 text-xs text-[#2563EB] font-semibold">{leader.role}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* COMPANY VALUES */}
      <section className="section-pad bg-white">
        <div className="container-page max-w-6xl">
          <SectionHeading eyebrow="Company Values" title="What guides how we operate" align="center" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <FadeIn key={v.title} delay={i * 0.06}>
                <div className="rounded-[24px] border border-slate-200 bg-[#F8FAFC] p-6 h-full flex flex-col justify-between shadow-sm transition-all hover:bg-[#0F172A] hover:text-white group">
                  <div>
                    <div className="h-12 w-12 rounded-[16px] bg-blue-50 text-[#2563EB] flex items-center justify-center mb-6 group-hover:bg-[#DC2626] group-hover:text-white transition-colors">
                      <ShieldCheck className="h-6 w-6" strokeWidth={1.8} />
                    </div>
                    <h3 className="text-lg font-bold text-[#111827] group-hover:text-white">{v.title}</h3>
                    <p className="mt-3 text-xs leading-relaxed text-slate-600 group-hover:text-slate-300">{v.text}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="section-pad bg-[#F8FAFC]">
        <div className="container-page text-center">
          <SectionHeading eyebrow="Certifications" title="Standards we operate by" align="center" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
            {[
              { code: 'ISO 9001', title: 'International Quality' },
              { code: 'GDP Compliant', title: 'Good Distribution Practice' },
              { code: 'DRAP Registered', title: 'Pharma Regulatory Authority' },
              { code: 'HSE Certified', title: 'Health, Safety & Environment' },
            ].map((cert, i) => (
              <FadeIn key={cert.code} delay={i * 0.05}>
                <div className="rounded-[20px] border border-slate-200 bg-white p-6 shadow-sm flex flex-col items-center">
                  <div className="h-10 w-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mb-3">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <h4 className="text-sm font-bold text-[#111827]">{cert.code}</h4>
                  <p className="mt-1 text-xs text-slate-500">{cert.title}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}