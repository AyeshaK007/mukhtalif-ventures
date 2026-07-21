'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { ChevronDown, Menu, X, ArrowRight } from 'lucide-react';
import { navLinks } from '@/lib/data';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <header className="pointer-events-auto w-full max-w-[1200px] rounded-full border border-white/20 bg-[rgba(255,255,255,0.72)] backdrop-blur-[18px] shadow-[0_10px_40px_rgba(0,0,0,0.12)] transition-all duration-300">
        <div className="flex h-20 items-center justify-between px-6 lg:px-8">
          
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-3.5 group">
            <Image 
              src="/logo.png" 
              alt="Mukhtalif Ventures" 
              width={60} 
              height={60} 
              className="h-15 w-15 object-contain transform transition-transform group-hover:scale-105" 
              priority 
            />
            <span className="font-display text-base font-extrabold leading-tight tracking-tight text-[#0F172A] sm:block">
              MUKHTALIF<br />
              <span className="text-[#DC2626]">VENTURES</span>
            </span>
          </Link>

          {/* FLOATING PILL NAVIGATION LINKS WITH HIERARCHY */}
          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.children && pathname.startsWith('/services'));

              return link.children ? (
                <div
                  key={link.href}
                  className="group relative py-2"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <button className={`flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider transition-colors py-1 ${isActive ? 'text-[#DC2626] font-extrabold' : 'text-[#46536A] hover:text-[#D62828]'}`}>
                    {link.label}
                    <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
                  </button>
                  <span className={`absolute bottom-0 left-0 h-0.5 w-full bg-[#DC2626] transform transition-transform duration-300 ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />

                  {servicesOpen && (
                    <div className="absolute left-1/2 top-full w-64 -translate-x-1/2 pt-3">
                      <div className="rounded-[20px] border border-slate-200/80 bg-white/95 p-3 shadow-2xl backdrop-blur-2xl">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block rounded-xl px-4 py-2.5 text-xs font-semibold text-slate-700 transition-colors hover:bg-[#EAF3FF] hover:text-[#2563EB]"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative py-2 text-xs font-bold uppercase tracking-wider transition-colors ${isActive ? 'text-[#DC2626] font-extrabold' : 'text-[#46536A] hover:text-[#D62828]'}`}
                >
                  {link.label}
                  <span className={`absolute bottom-0 left-0 h-0.5 w-full bg-[#DC2626] transform transition-transform duration-300 ${isActive ? 'scale-x-100' : 'scale-x-0 hover:scale-x-100'}`} />
                </Link>
              );
            })}
          </nav>

          {/* REQUEST A QUOTE BUTTON */}
          <div className="hidden lg:block">
            <Link 
              href="/quote" 
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#DC2626] to-[#B91C1C] px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-red-600/30 transition-all duration-200 hover:scale-105 active:scale-95"
            >
              Request a Quote <ArrowRight className="ml-2 h-3.5 w-3.5" />
            </Link>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            className="p-2 lg:hidden text-slate-800 hover:text-[#2563EB]"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* MOBILE DROPDOWN */}
        {open && (
          <div className="border-t border-slate-200/60 bg-white/95 backdrop-blur-2xl lg:hidden rounded-b-[24px] px-6 py-6 shadow-2xl">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <div key={link.href}>
                  <Link
                    href={link.href}
                    className="block rounded-xl px-3 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-800 hover:bg-slate-100"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                  {link.children && (
                    <div className="ml-4 flex flex-col border-l-2 border-slate-200 pl-4 my-1 gap-1">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="py-2 text-xs font-semibold text-slate-600 hover:text-[#2563EB]"
                          onClick={() => setOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link 
                href="/quote" 
                className="mt-4 flex items-center justify-center rounded-full bg-[#DC2626] py-3 text-xs font-bold uppercase tracking-wider text-white shadow-md" 
                onClick={() => setOpen(false)}
              >
                Request a Quote
              </Link>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}