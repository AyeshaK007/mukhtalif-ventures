import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, Check, ShieldCheck, Cpu } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import FadeIn from '@/components/FadeIn';
import Icon from '@/components/Icon';
import { services } from '@/lib/data';

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) return {};
  return {
    title: `${service.title} | Mukhtalif Ventures`,
    description: service.short,
  };
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) notFound();

  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      {/* RICH NAVY / DARK BLUE HERO - No Warehouse Photo, High-End Typography & Icon */}
      <section className="pt-40 pb-28 bg-[#0A0F1D] text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(37,99,235,0.18),transparent_70%)]" />
        
        <div className="container-page relative z-10 max-w-4xl mx-auto px-4">
          <FadeIn>
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-[24px] bg-white/10 text-white mb-6 backdrop-blur-md border border-white/10 shadow-lg">
              <Icon name={service.icon} className="h-10 w-10 text-blue-400" />
            </div>
            
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block mb-3">
              Specialized Service Offering
            </span>
            
            <h1 className="font-display text-4xl font-extrabold tracking-tight text-white md:text-6xl leading-[1.1]">
              {service.title}
            </h1>
            
            <p className="mt-6 text-base md:text-lg leading-relaxed text-slate-300 max-w-2xl mx-auto font-sans">
              {service.description}
            </p>
            
            <div className="mt-10 flex justify-center">
              <Link 
                href="/quote" 
                className="inline-flex items-center justify-center rounded-full bg-[#DC2626] px-9 py-4 text-xs font-bold uppercase tracking-wider text-white shadow-xl shadow-red-600/30 transition-all hover:bg-[#B91C1C] hover:scale-105"
              >
                Request a Custom Quote <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CORE FEATURES & BENEFITS SPLIT SECTION */}
      <section className="section-pad bg-[#F8FAFC]">
        <div className="container-page max-w-6xl grid gap-12 lg:grid-cols-2 items-start">
          <FadeIn>
            <div className="bg-white rounded-[24px] border border-slate-200 p-8 md:p-10 shadow-sm h-full">
              <div className="h-10 w-10 rounded-xl bg-blue-50 text-[#2563EB] flex items-center justify-center mb-6">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h3 className="font-display text-xl font-bold text-[#111827] mb-6">Core Capabilities &amp; Features</h3>
              <ul className="space-y-4">
                {service.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-slate-600">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#2563EB]" /> 
                    <span className="font-medium">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={0.08}>
            <div className="bg-white rounded-[24px] border border-slate-200 p-8 md:p-10 shadow-sm h-full">
              <div className="h-10 w-10 rounded-xl bg-red-50 text-[#DC2626] flex items-center justify-center mb-6">
                <Cpu className="h-5 w-5" />
              </div>
              <h3 className="font-display text-xl font-bold text-[#111827] mb-6">Key Client Benefits</h3>
              <ul className="space-y-4">
                {service.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm text-slate-600">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#DC2626]" /> 
                    <span className="font-medium">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* WORKFLOW PROCESS TIMELINE */}
      <section className="section-pad bg-white border-y border-slate-200">
        <div className="container-page max-w-5xl">
          <SectionHeading eyebrow="Execution" title="Process timeline" align="center" />
          <div className="mt-14 grid gap-6 md:grid-cols-4">
            {service.process.map((p, i) => (
              <FadeIn key={p.title} delay={i * 0.08}>
                <div className="relative rounded-[20px] border border-slate-200 bg-[#F8FAFC] p-6 shadow-sm h-full flex flex-col justify-between">
                  <div>
                    <span className="font-mono text-xs font-bold text-[#DC2626] bg-red-50 px-2.5 py-1 rounded-full">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h4 className="mt-4 font-display text-base font-bold text-[#111827]">{p.title}</h4>
                    <p className="mt-2 text-xs leading-relaxed text-slate-600">{p.text}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS */}
      <section className="section-pad bg-[#F8FAFC]">
        <div className="container-page max-w-3xl">
          <SectionHeading eyebrow="Support" title="Common questions" align="center" />
          <div className="mt-12 space-y-4">
            {service.faqs.map((f) => (
              <div key={f.q} className="rounded-[20px] border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-sm font-bold text-[#111827]">{f.q}</p>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HIGH-IMPACT CTA BANNER */}
      <section className="py-24 bg-[#0A0F1D] text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(37,99,235,0.15),transparent_60%)]" />
        <div className="container-page relative z-10 flex flex-col items-center gap-6 max-w-3xl mx-auto px-4">
          <h2 className="font-display text-3xl font-extrabold text-white md:text-4xl tracking-tight">
            Ready to talk about your {service.title.toLowerCase()} needs?
          </h2>
          <p className="text-slate-300 text-sm max-w-lg">
            Connect with our logistics experts today for a comprehensive operational consultation and transparent pricing.
          </p>
          <Link 
            href="/quote" 
            className="mt-4 inline-flex items-center justify-center rounded-full bg-[#DC2626] px-8 py-4 text-xs font-bold uppercase tracking-wider text-white shadow-xl shadow-red-600/30 transition-all hover:bg-[#B91C1C] hover:scale-105"
          >
            Request a Quote <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* RELATED SERVICES GRID */}
      <section className="section-pad bg-white">
        <div className="container-page max-w-6xl">
          <SectionHeading eyebrow="Explore More" title="Related services" />
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {related.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="rounded-[24px] border border-slate-200 bg-[#F8FAFC] p-6 block group transition-all hover:border-[#2563EB] hover:shadow-md">
                <div className="h-10 w-10 rounded-xl bg-blue-50 text-[#2563EB] flex items-center justify-center mb-4">
                  <Icon name={s.icon} className="h-5 w-5" />
                </div>
                <h4 className="font-display text-base font-bold text-[#111827] group-hover:text-[#2563EB] transition-colors">{s.title}</h4>
                <p className="mt-2 text-xs text-slate-600 line-clamp-2 leading-relaxed">{s.short}</p>
                <span className="mt-4 inline-flex items-center text-xs font-semibold text-[#DC2626]">
                  View service <ArrowRight className="ml-1.5 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}