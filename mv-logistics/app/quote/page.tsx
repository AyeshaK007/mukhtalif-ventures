'use client';

import { useState } from 'react';
import { CheckCircle2, Phone, ArrowRight, ShieldCheck, Clock, Globe } from 'lucide-react';
import FadeIn from '@/components/FadeIn';

export default function QuotePage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#F5F7FB] pt-32 pb-24">
      <div className="container-page max-w-3xl px-4 mx-auto">
        
        {/* SaaS-Style Minimalist Header */}
        <div className="text-center mb-10">
          <FadeIn>
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1 text-xs font-bold uppercase tracking-wider text-blue mb-3 border border-blue-100">
              Instant Pricing
            </span>
            <h1 className="font-display text-3xl md:text-4xl font-extrabold text-ink-heading tracking-tight">
              Request a Quote
            </h1>
            <p className="mt-2 text-sm text-ink-secondary">
              Get pricing within 24 hours. Fill out the details of your shipment below.
            </p>
          </FadeIn>
        </div>

       {/* Quick Trust / Support Bar (Navy/Dark Blue Theme) */}
        <FadeIn delay={0.05} className="mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-blue-dark rounded-2xl border border-white/10 p-5 shadow-lg text-white text-center">
            <div className="flex items-center justify-center gap-2 text-xs font-semibold text-white">
              <Clock className="h-4 w-4 text-blue-400" /> 24h Response Time
            </div>
            <div className="flex items-center justify-center gap-2 text-xs font-semibold text-white border-t sm:border-t-0 sm:border-x border-white/10 py-2 sm:py-0">
              <Globe className="h-4 w-4 text-amber-400" /> Nationwide Coverage
            </div>
            <div className="flex items-center justify-center gap-2 text-xs font-semibold text-white">
              <ShieldCheck className="h-4 w-4 text-emerald-400" /> Fully Insured Freight
            </div>
          </div>
        </FadeIn>

        {/* Form Card or Success State */}
        <FadeIn delay={0.1}>
          {submitted ? (
            <div className="rounded-card-lg border border-surface-border bg-white p-12 text-center shadow-xl">
              <CheckCircle2 className="mx-auto h-12 w-12 text-blue" />
              <h2 className="mt-4 font-display text-xl font-bold text-ink-heading">Request received</h2>
              <p className="mt-2 text-sm text-ink-secondary">
                Thanks — our logistics team will reach out with a tailored quote shortly.
              </p>
            </div>
          ) : (
            <div className="rounded-card-lg border border-surface-border bg-white p-8 md:p-12 shadow-xl">
              <form onSubmit={handleSubmit} className="space-y-8">
                
                {/* Group 1: Contact Information */}
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-blue mb-4 pb-2 border-b border-surface-border">
                    1. Contact Information
                  </h3>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="block text-[11px] font-bold text-ink-secondary uppercase tracking-wider mb-1.5">Full Name *</label>
                      <input required placeholder="Ali Khan" className="w-full rounded-card border border-surface-border bg-slate-50 px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue focus:bg-white transition-all" />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-ink-secondary uppercase tracking-wider mb-1.5">Company Name</label>
                      <input placeholder="Enterprise Ltd." className="w-full rounded-card border border-surface-border bg-slate-50 px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue focus:bg-white transition-all" />
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2 mt-5">
                    <div>
                      <label className="block text-[11px] font-bold text-ink-secondary uppercase tracking-wider mb-1.5">Email Address *</label>
                      <input required type="email" placeholder="ali@example.com" className="w-full rounded-card border border-surface-border bg-slate-50 px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue focus:bg-white transition-all" />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-ink-secondary uppercase tracking-wider mb-1.5">Phone Number *</label>
                      <input required placeholder="+92 300 1234567" className="w-full rounded-card border border-surface-border bg-slate-50 px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue focus:bg-white transition-all" />
                    </div>
                  </div>
                </div>

                {/* Group 2: Shipment Details */}
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-blue mb-4 pb-2 border-b border-surface-border">
                    2. Shipment Details
                  </h3>
                  
                  <div className="grid gap-5 sm:grid-cols-2 mb-5">
                    <div>
                      <label className="block text-[11px] font-bold text-ink-secondary uppercase tracking-wider mb-1.5">Service Needed</label>
                      <select className="w-full rounded-card border border-surface-border bg-slate-50 px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue focus:bg-white transition-all">
                        <option>Select Service...</option>
                        <option>Road Freight</option>
                        <option>Warehousing</option>
                        <option>Healthcare / Pharma Distribution</option>
                        <option>Cold Chain Logistics</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-ink-secondary uppercase tracking-wider mb-1.5">Cargo Weight (Approx.)</label>
                      <input placeholder="e.g. 500 kg / 2 Pallets" className="w-full rounded-card border border-surface-border bg-slate-50 px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue focus:bg-white transition-all" />
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2 mb-5">
                    <div>
                      <label className="block text-[11px] font-bold text-ink-secondary uppercase tracking-wider mb-1.5">Origin City *</label>
                      <input required placeholder="e.g. Karachi" className="w-full rounded-card border border-surface-border bg-slate-50 px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue focus:bg-white transition-all" />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-ink-secondary uppercase tracking-wider mb-1.5">Destination City *</label>
                      <input required placeholder="e.g. Lahore" className="w-full rounded-card border border-surface-border bg-slate-50 px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue focus:bg-white transition-all" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-ink-secondary uppercase tracking-wider mb-1.5">Preferred Pickup Date</label>
                    <input type="date" className="w-full rounded-card border border-surface-border bg-slate-50 px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue focus:bg-white transition-all" />
                  </div>
                </div>

                {/* Group 3: Additional Notes */}
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-blue mb-4 pb-2 border-b border-surface-border">
                    3. Additional Information
                  </h3>
                  <div>
                    <label className="block text-[11px] font-bold text-ink-secondary uppercase tracking-wider mb-1.5">Special Instructions / Notes</label>
                    <textarea placeholder="Temperature requirements, fragile goods, specific delivery timing..." rows={4} className="w-full rounded-card border border-surface-border bg-slate-50 px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue focus:bg-white transition-all resize-none" />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-4 flex justify-center">
                  <button type="submit" className="btn-primary w-full sm:w-[260px] inline-flex items-center justify-center">
                    Submit Request <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>

              </form>
            </div>
          )}
        </FadeIn>

        {/* Need Help Footer Link */}
        <div className="mt-8 text-center">
          <p className="text-xs text-ink-secondary flex items-center justify-center gap-2">
            Need immediate assistance? 
            <a href="tel:+923001234567" className="text-blue font-bold inline-flex items-center gap-1 hover:underline">
              <Phone className="h-3 w-3" /> +92 300 1234567
            </a>
          </p>
        </div>

      </div>
    </div>
  );
}