'use client';

import Link from 'next/link';
import { 
  ArrowRight, MapPin, Heart, TrendingUp, BookOpen, 
  Truck, Users, Target, CheckCircle2, UploadCloud, 
  Clock, Briefcase, Quote 
} from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import FadeIn from '@/components/FadeIn';

const openRoles = [
  { title: 'Fleet Operations Coordinator', type: 'Full-Time', exp: '2+ Years', loc: 'Karachi HQ' },
  { title: 'Warehouse Associate', type: 'Full-Time', exp: 'Entry Level', loc: 'Karachi Terminal' },
  { title: 'Logistics Planning Executive', type: 'Full-Time', exp: '1-3 Years', loc: 'Karachi HQ' },
  { title: 'Accounts & Compliance Officer', type: 'Full-Time', exp: '2+ Years', loc: 'Karachi HQ' },
];

const benefits = [
  { icon: Heart, title: 'Medical Insurance', text: 'Comprehensive health coverage for you and your immediate family.' },
  { icon: TrendingUp, title: 'Career Growth', text: 'Structured progression across our operations and fleet management roles.' },
  { icon: BookOpen, title: 'Professional Training', text: 'Continuous learning budgets and logistics certifications.' },
  { icon: Target, title: 'Performance Bonuses', text: 'Quarterly rewards tied directly to your operational excellence.' },
];

const hiringSteps = [
  { step: '01', title: 'Submit Resume' },
  { step: '02', title: 'Initial Screening' },
  { step: '03', title: 'Team Interview' },
  { step: '04', title: 'Offer & Welcome' },
];

export default function CareersPage() {
  return (
    <>
      {/* UNIQUE RECRUITMENT HERO - Clean Editorial Style (No Dark Warehouse Hero) */}
      <section className="pt-36 pb-16 bg-white border-b border-slate-200">
        <div className="container-page max-w-4xl text-center">
          <FadeIn>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-4 py-1.5 text-xs font-semibold text-emerald-600 border border-emerald-200 mb-4">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" /> 4 Active Roles Available in Karachi
            </span>
            <h1 className="font-display text-4xl font-extrabold tracking-tight text-[#111827] md:text-6xl">
              Join the team that keeps <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#DC2626]">
                Pakistan moving.
              </span>
            </h1>
            <p className="mt-5 text-base leading-relaxed text-slate-600 md:text-lg max-w-2xl mx-auto">
              We are building Pakistan&apos;s most reliable supply chain network from our Karachi headquarters. Explore our open positions or drop your resume below.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <a href="#open-roles" className="btn-primary bg-[#DC2626] hover:bg-[#B91C1C] rounded-full px-8 py-3.5 shadow-lg shadow-red-600/20">
                View Open Positions <ArrowRight className="ml-2 h-4 w-4 inline" />
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* METRICS BAR */}
      <section className="bg-[#1E293B] py-10 text-white border-y border-white/10">
        <div className="container-page max-w-5xl">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4 text-center">
            <div>
              <p className="font-mono text-3xl font-extrabold text-[#2563EB]">300+</p>
              <p className="text-xs uppercase tracking-wider text-slate-400 mt-1">Team Members</p>
            </div>
            <div>
              <p className="font-mono text-3xl font-extrabold text-[#DC2626]">4</p>
              <p className="text-xs uppercase tracking-wider text-slate-400 mt-1">Open Positions</p>
            </div>
            <div>
              <p className="font-mono text-3xl font-extrabold text-amber-400">99%</p>
              <p className="text-xs uppercase tracking-wider text-slate-400 mt-1">Retention Rate</p>
            </div>
            <div>
              <p className="font-mono text-3xl font-extrabold text-emerald-400">4.8★</p>
              <p className="text-xs uppercase tracking-wider text-slate-400 mt-1">Employee Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* CULTURE & BENEFITS */}
      <section className="py-24 bg-white">
        <div className="container-page max-w-5xl">
          <SectionHeading eyebrow="Why Work Here" title="Culture and benefits" align="center" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b, i) => (
              <FadeIn key={b.title} delay={i * 0.05}>
                <div className="rounded-[20px] border border-slate-200 bg-[#F8FAFC] p-6 h-full flex flex-col justify-between shadow-sm">
                  <div>
                    <div className="h-12 w-12 rounded-[14px] bg-blue-50 text-[#2563EB] flex items-center justify-center mb-4">
                      <b.icon className="h-6 w-6" strokeWidth={1.8} />
                    </div>
                    <h4 className="font-display text-base font-bold text-[#111827]">{b.title}</h4>
                    <p className="mt-2 text-xs leading-relaxed text-slate-600">{b.text}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* HIRING PROCESS TIMELINE */}
      <section className="py-20 bg-[#F8FAFC] border-y border-slate-200">
        <div className="container-page max-w-4xl">
          <SectionHeading eyebrow="Process" title="Simple & transparent hiring" align="center" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {hiringSteps.map((s, idx) => (
              <div key={s.step} className="rounded-[16px] bg-white border border-slate-200 p-6 text-center shadow-sm">
                <span className="font-mono text-xl font-bold text-[#2563EB]">{s.step}</span>
                <h4 className="mt-2 font-bold text-[#111827] text-sm">{s.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

    

      {/* APPLICATION FORM */}
      <section id="apply-form" className="py-24 bg-[#F8FAFC] border-t border-slate-200">
        <div className="container-page max-w-2xl">
          <SectionHeading eyebrow="Apply Now" title="Submit your application" align="center" />
          <form className="mt-10 bg-white rounded-[24px] border border-slate-200 p-8 md:p-10 shadow-xl space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="block text-[11px] font-bold text-[#111827] uppercase tracking-wider mb-1.5">Full Name</label>
                <input required placeholder="Ali Khan" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:bg-white transition-all" />
              </div>
              <div>
                <label className="block text-[11px] font-bold text-[#111827] uppercase tracking-wider mb-1.5">Email Address</label>
                <input required type="email" placeholder="ali@example.com" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:bg-white transition-all" />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-bold text-[#111827] uppercase tracking-wider mb-1.5">Position Applying For</label>
              <select required className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:bg-white transition-all">
                <option value="">Select a role...</option>
                {openRoles.map((r) => (
                  <option key={r.title} value={r.title}>{r.title}</option>
                ))}
                <option value="General Application">General Talent Pool</option>
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-bold text-[#111827] uppercase tracking-wider mb-1.5">Upload Resume (PDF, DOCX)</label>
              <div className="flex justify-center rounded-xl border-2 border-dashed border-slate-300 px-6 py-6 hover:border-[#2563EB] cursor-pointer transition-colors bg-slate-50">
                <div className="text-center">
                  <UploadCloud className="mx-auto h-8 w-8 text-slate-400" />
                  <p className="mt-2 text-xs text-slate-600 font-medium">Click to upload or drag and drop resume</p>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-bold text-[#111827] uppercase tracking-wider mb-1.5">Experience &amp; Cover Note</label>
              <textarea placeholder="Tell us about your background..." rows={4} className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:bg-white transition-all resize-none" />
            </div>

            <button type="submit" className="w-full inline-flex justify-center items-center rounded-full bg-[#DC2626] px-8 py-4 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-red-600/30 hover:bg-[#B91C1C] transition-all">
              Submit Application <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </form>
        </div>
      </section>
    </>
  );
}