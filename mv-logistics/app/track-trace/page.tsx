'use client';

import { useState } from 'react';
import { Search, Package, Truck, CheckCircle2, MapPin } from 'lucide-react';
import RouteLine from '@/components/RouteLine';
import TruckIllustration from '@/components/TruckIllustration';
import FadeIn from '@/components/FadeIn';

const steps = [
  { label: 'Order Confirmed', icon: Package },
  { label: 'Picked Up', icon: Truck },
  { label: 'In Transit', icon: MapPin },
  { label: 'Delivered', icon: CheckCircle2 },
];

export default function TrackTracePage() {
  const [id, setId] = useState('');
  const [result, setResult] = useState<null | { current: number; location: string; eta: string }>(null);
  const [error, setError] = useState('');

  const handleSearch = () => {
    if (!id.trim()) {
      setError('Enter a shipment ID to track.');
      setResult(null);
      return;
    }
    setError('');
    // Demo: deterministic mock result based on input.
    setResult({
      current: (id.length % 4) + 1 > 4 ? 3 : (id.length % 4) || 2,
      location: 'Lahore Sorting Facility',
      eta: 'Tomorrow, by 6:00 PM',
    });
  };

  return (
    <>
      <section className="relative overflow-hidden bg-blue-dark py-24">
        <div className="absolute inset-0 bg-hero-overlay" />
        <RouteLine className="absolute bottom-0 w-full opacity-60" />
        <TruckIllustration className="pointer-events-none absolute -bottom-6 right-0 w-72 opacity-20 md:w-96" variant="light" />
        <div className="container-page relative">
          <p className="eyebrow mb-3 text-gold">Track &amp; Trace</p>
          <h1 className="max-w-2xl font-display text-4xl font-extrabold text-white md:text-5xl">
            Know exactly where your shipment is.
          </h1>

          <div className="mt-10 flex max-w-xl flex-col gap-3 sm:flex-row">
            <input
              value={id}
              onChange={(e) => setId(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
              placeholder="Enter Shipment ID e.g. MV-2026-84213"
              className="w-full rounded-full border-0 px-6 py-3.5 text-sm text-ink-body shadow-button focus:outline-none focus:ring-2 focus:ring-gold"
            />
            <button onClick={handleSearch} className="btn-primary shrink-0">
              <Search className="mr-2 h-4 w-4" /> Track
            </button>
          </div>
          {error && <p className="mt-3 text-sm text-gold">{error}</p>}
        </div>
      </section>

      {result && (
        <section className="section-pad">
          <div className="container-page">
            <FadeIn>
              <div className="rounded-card-lg border border-surface-border bg-white p-8 shadow-card">
                <div className="flex flex-col justify-between gap-2 border-b border-surface-border pb-6 sm:flex-row sm:items-center">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-ink-light">Shipment ID</p>
                    <p className="font-mono text-lg font-bold text-ink-heading">{id.toUpperCase()}</p>
                  </div>
                  <div className="sm:text-right">
                    <p className="text-xs font-semibold uppercase tracking-wide text-ink-light">Estimated Delivery</p>
                    <p className="text-sm font-bold text-blue">{result.eta}</p>
                  </div>
                </div>

                <div className="mt-8">
                  <p className="mb-6 text-sm text-ink-secondary">
                    Current location: <span className="font-semibold text-ink-heading">{result.location}</span>
                  </p>
                  <div className="relative flex justify-between">
                    <div className="absolute left-0 right-0 top-5 h-0.5 bg-surface-border">
                      <div
                        className="h-0.5 bg-red transition-all duration-700"
                        style={{ width: `${(result.current / (steps.length - 1)) * 100}%` }}
                      />
                    </div>
                    {steps.map((s, i) => {
                      const StepIcon = s.icon;
                      const done = i <= result.current;
                      return (
                        <div key={s.label} className="relative z-10 flex flex-col items-center gap-2 text-center">
                          <div
                            className={`flex h-10 w-10 items-center justify-center rounded-full border-2 ${
                              done ? 'border-red bg-red text-white' : 'border-surface-border bg-white text-ink-light'
                            }`}
                          >
                            <StepIcon className="h-4 w-4" />
                          </div>
                          <span className={`w-20 text-xs font-medium ${done ? 'text-ink-heading' : 'text-ink-light'}`}>
                            {s.label}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>
      )}
    </>
  );
}
