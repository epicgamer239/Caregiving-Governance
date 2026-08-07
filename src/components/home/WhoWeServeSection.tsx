"use client";

import { ArrowUpRight } from "lucide-react";

export default function WhoWeServeSection() {
  const triggerConsultation = () => {
    window.dispatchEvent(new CustomEvent("open-consultation-modal"));
  };

  const audienceList = [
    "Out-of-state families",
    "Families with limited mobility",
    "Residents without visitors",
    "Memory care residents",
    "Understaffed nursing homes",
    "Assisted living operators",
    "CCRC communities",
  ];

  return (
    <section className="py-16 md:py-20 border-b border-slate-200/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-slate-900">
            Who We Serve
          </h2>
          <p className="text-base text-[#2B4336] font-medium">
            Families and operators who need clarity and protective oversight —
            not more noise.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {audienceList.map((item, index) => (
            <button
              key={index}
              onClick={triggerConsultation}
              className="bg-white border border-slate-200 border-t-4 border-t-[#2B4336] rounded-lg p-6 shadow-xs hover:shadow-md transition-all text-left flex flex-col justify-between group cursor-pointer"
            >
              <div className="space-y-4 mb-6">
                <div className="w-8 h-8 rounded-md bg-amber-100 text-[#2B4336] flex items-center justify-center font-serif text-sm font-semibold">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <strong className="block text-base font-semibold text-slate-900 group-hover:text-[#2B4336] transition-colors leading-snug">
                  {item}
                </strong>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#2B4336] group-hover:underline decoration-amber-300 decoration-2 underline-offset-4 w-full">
                <span>Book a Consultation</span>
                <ArrowUpRight className="w-4 h-4 text-[#2B4336] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
