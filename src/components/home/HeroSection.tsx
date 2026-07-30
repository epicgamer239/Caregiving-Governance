"use client";

import Link from "next/link";
import { ArrowRight, Calendar, Image as ImageIcon } from "lucide-react";

export default function HeroSection() {
  const triggerConsultation = () => {
    window.dispatchEvent(new CustomEvent("open-consultation-modal"));
  };

  return (
    <section className="py-16 md:py-24 border-b border-slate-200/80 bg-gradient-to-b from-[#FAF8F3] to-[#FBF9F5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-slate-900 tracking-tight leading-tight">
              Caregiving Governance
            </h1>

            <p className="font-serif text-xl sm:text-2xl text-[#2B4336] font-medium leading-snug">
              Structured oversight for your loved one’s care. Clear guidance for
              your family.
            </p>

            {/* Clean Deep Sage Callout Box (Warm Gold Typography) */}
            <div className="p-6 bg-[#2B4336] border border-[#203328] rounded-lg shadow-sm">
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

          <div className="lg:col-span-5">
            <div className="bg-white border border-slate-200 p-6 rounded-lg shadow-xs space-y-4">
              <h3 className="text-xs font-semibold text-slate-500 font-sans border-b border-slate-100 pb-3">
                Care Environment Visual Indicators
              </h3>

              <ul className="space-y-3 text-sm text-slate-700">
                <li className="flex items-center gap-3 p-3.5 bg-[#FBF9F5] rounded-md border border-slate-200/70 hover:border-[#2B4336]/40 transition-colors">
                  <div className="p-2 bg-amber-100 text-[#2B4336] rounded-md shrink-0">
                    <ImageIcon className="w-4 h-4" />
                  </div>
                  <span className="font-medium text-slate-800">
                    Maplewood Park Place | Assisted Living & Skilled Nursing |
                    Wagman
                  </span>
                </li>

                <li className="flex items-center gap-3 p-3.5 bg-[#FBF9F5] rounded-md border border-slate-200/70 hover:border-[#2B4336]/40 transition-colors">
                  <div className="p-2 bg-amber-100 text-[#2B4336] rounded-md shrink-0">
                    <ImageIcon className="w-4 h-4" />
                  </div>
                  <span className="font-medium text-slate-800">
                    Nursing Home Interior Design Hallway
                  </span>
                </li>

                <li className="flex items-center gap-3 p-3.5 bg-[#FBF9F5]/60 rounded-md border border-slate-200/50 text-slate-400 italic">
                  <div className="p-2 bg-slate-100 text-slate-400 rounded-md shrink-0">
                    <ImageIcon className="w-4 h-4" />
                  </div>
                  <span>[PLACEHOLDER TEXT]</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
