"use client";

import Link from "next/link";
import {
  ArrowRight,
  Calendar,
  Image as ImageIcon,
  ShieldCheck,
} from "lucide-react";

export default function HeroSection() {
  const triggerConsultation = () => {
    window.dispatchEvent(new CustomEvent("open-consultation-modal"));
  };

  return (
    <section className="py-16 md:py-24 border-b border-slate-200/80 bg-gradient-to-b from-[#FAF8F3] to-[#FBF9F5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Core Messaging */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-slate-900 tracking-tight leading-tight">
              Caregiving Governance
            </h1>

            <p className="font-serif text-xl sm:text-2xl text-[#2B4336] font-medium leading-snug">
              Structured oversight for your loved one’s care. Clear guidance for
              your family.
            </p>

            {/* Deep Sage Callout Box */}
            <div className="p-6 bg-[#2B4336] border border-[#203328] rounded-lg shadow-xs">
              <p className="text-base sm:text-lg leading-relaxed text-slate-100">
                <strong className="text-amber-300 font-semibold border-b border-amber-300/40 pb-0.5 mr-1.5">
                  Clarity. Oversight. Accountability.
                </strong>
                <span>
                  Your loved one’s care deserves structure — and your family
                  deserves peace of mind.
                </span>
              </p>
            </div>

            <div className="pt-2 flex flex-wrap gap-4 items-center">
              <Link
                href="/services"
                className="inline-flex items-center gap-2.5 bg-slate-900 hover:bg-slate-800 text-white px-6 py-3.5 rounded-md text-base font-medium transition-all shadow-xs"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <button
                onClick={triggerConsultation}
                className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-[#2B4336] border border-[#2B4336]/80 px-6 py-3.5 rounded-md text-base font-medium transition-all shadow-xs"
              >
                <Calendar className="w-4 h-4 text-[#2B4336]" />
                <span>Schedule a Consultation</span>
              </button>
            </div>
          </div>

          {/* Right Column: Featured Image & Indicators */}
          <div className="lg:col-span-5 space-y-5">
            {/* Featured Caregiving Image Frame */}
            <div className="relative rounded-xl overflow-hidden border border-slate-200/90 shadow-md aspect-[4/3] group">
              <img
                src="/caregiving-hero-backdrop.png"
                alt="Caregiver assisting elderly resident with walker"
                className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/10 to-transparent" />

              <div className="absolute bottom-3 left-3 right-3 p-3 bg-white/90 backdrop-blur-md rounded-lg border border-white/60 shadow-xs flex items-center gap-2.5 text-xs text-slate-800 font-medium">
                <ShieldCheck className="w-4 h-4 text-[#2B4336] shrink-0" />
                <span>Professional Oversight & Dedicated Presence</span>
              </div>
            </div>

            {/* Visual Indicators Box */}
            <div className="bg-white border border-slate-200 p-5 rounded-lg shadow-xs space-y-3">
              <h3 className="text-xs font-semibold text-slate-500 font-sans border-b border-slate-100 pb-2">
                Care Environment Visual Indicators
              </h3>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                <li className="flex items-center gap-3 p-3 bg-[#FBF9F5] rounded-md border border-slate-200/70 hover:border-[#2B4336]/40 transition-colors">
                  <div className="p-1.5 bg-amber-100 text-[#2B4336] rounded-md shrink-0">
                    <ImageIcon className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-medium text-slate-800 leading-snug">
                    Maplewood Park Place | Assisted Living & Skilled Nursing |
                    Wagman
                  </span>
                </li>

                <li className="flex items-center gap-3 p-3 bg-[#FBF9F5] rounded-md border border-slate-200/70 hover:border-[#2B4336]/40 transition-colors">
                  <div className="p-1.5 bg-amber-100 text-[#2B4336] rounded-md shrink-0">
                    <ImageIcon className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-medium text-slate-800 leading-snug">
                    Nursing Home Interior Design Hallway
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
