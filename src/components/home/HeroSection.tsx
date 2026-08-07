"use client";

import Link from "next/link";
import { ArrowRight, Calendar, ShieldCheck } from "lucide-react";

export default function HeroSection() {
  const triggerConsultation = () => {
    window.dispatchEvent(new CustomEvent("open-consultation-modal"));
  };

  return (
    <section className="border-b border-slate-200/80 bg-gradient-to-b from-[#FAF8F3] to-[#FBF9F5] min-h-[calc(100svh-4rem)] sm:min-h-[calc(100svh-5rem)] flex items-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          <div className="lg:col-span-7 space-y-4 md:space-y-5">
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] xl:text-5xl font-semibold text-slate-900 tracking-tight leading-[1.15]">
              Oversight for Nursing Home & Assisted Living Residents
            </h1>

            <p className="text-base sm:text-lg text-[#2B4336] font-medium leading-snug max-w-xl">
              In-person proxy visits, clear reports, and escalation pathways —
              for families and senior living operators.
            </p>

            <div className="flex flex-wrap gap-3 items-center pt-1">
              <button
                onClick={triggerConsultation}
                className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-5 py-3 rounded-md text-sm sm:text-base font-medium transition-all shadow-xs"
              >
                <Calendar className="w-4 h-4" />
                <span>Book a Consultation</span>
              </button>

              <Link
                href="/services"
                className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-[#2B4336] border border-[#2B4336]/80 px-5 py-3 rounded-md text-sm sm:text-base font-medium transition-all shadow-xs"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="p-4 bg-[#2B4336] border border-[#203328] rounded-lg shadow-xs">
              <p className="text-sm sm:text-base leading-relaxed text-slate-100">
                <strong className="text-amber-300 font-semibold border-b border-amber-300/40 pb-0.5 mr-1.5">
                  Protect. Report. Escalate.
                </strong>
                <span>
                  In-person proxy visits for residents whose families can’t
                  visit regularly.
                </span>
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 hidden sm:block">
            <div className="relative rounded-xl overflow-hidden border border-slate-200/90 shadow-md aspect-[4/3] max-h-[min(28rem,42svh)] lg:max-h-[min(32rem,48svh)] mx-auto w-full group">
              <img
                src="/caregiving-hero-backdrop.png"
                alt="Caregiver assisting elderly resident with walker"
                className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/10 to-transparent" />

              <div className="absolute bottom-3 left-3 right-3 p-3 bg-white/90 backdrop-blur-md rounded-lg border border-white/60 shadow-xs flex items-center gap-2.5 text-xs text-slate-800 font-medium">
                <ShieldCheck className="w-4 h-4 text-[#2B4336] shrink-0" />
                <span>Protective oversight when families can’t visit regularly</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
