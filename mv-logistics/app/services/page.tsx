import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import FadeIn from '@/components/FadeIn';
import Icon from '@/components/Icon';
import RouteLine from '@/components/RouteLine';
import TruckIllustration from '@/components/TruckIllustration';
import { services } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Services | Mukhtalif Ventures',
  description: 'Distribution, warehousing, supply chain, healthcare logistics, cold chain, and inventory management services.',
};

export default function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-blue-dark py-24">
        <div className="absolute inset-0 bg-hero-overlay" />
        <RouteLine className="absolute bottom-0 w-full opacity-60" />
        <TruckIllustration className="pointer-events-none absolute -bottom-6 right-0 w-72 opacity-20 md:w-96" variant="light" />
        <div className="container-page relative">
          <p className="eyebrow mb-3 text-gold">Our Services</p>
          <h1 className="max-w-2xl font-display text-4xl font-extrabold text-white md:text-5xl">
            Every part of your supply chain, on one network.
          </h1>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page">
          <SectionHeading title="Six services, one connected network" description="Each service runs on the same live fleet, warehousing, and tracking infrastructure." />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <FadeIn key={s.slug} delay={i * 0.06}>
                <Link href={`/services/${s.slug}`} className="card-base block h-full">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-light text-blue">
                    <Icon name={s.icon} />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-bold text-ink-heading">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-secondary">{s.short}</p>
                  <span className="mt-5 inline-flex items-center text-sm font-semibold text-red">
                    Learn More <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                  </span>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
