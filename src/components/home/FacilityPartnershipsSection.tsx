"use client";

import { Check, ArrowRight } from "lucide-react";

export default function FacilityPartnershipsSection() {
  const triggerConsultation = () => {
    window.dispatchEvent(new CustomEvent("open-consultation-modal"));
  };

  const offerings = [
    "Governance dashboards",
    "Trend reporting",
    "Risk-reduction oversight",
    "Family satisfaction enhancements",
    "Pilot programs",
  ];

  return (
    <section className="py-16 md:py-24 border-b border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-slate-200 border-t-4 border-t-[#2B4336] rounded-xl p-8 sm:p-12 shadow-xs space-y-8">
          <div className="space-y-3">
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-slate-900">
              Facility Partnerships
            </h2>
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
              Caregiving Governance™ also supports senior living operators
              through structured oversight and transparency tools. Pricing is
              customized.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {offerings.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 p-3.5 bg-[#FBF9F5] rounded-md border border-slate-200/70"
              >
                <div className="p-1 bg-amber-100 text-[#2B4336] rounded-md shrink-0">
                  <Check className="w-4 h-4" />
                </div>
                <span className="text-sm font-medium text-slate-800">{item}</span>
              </div>
            ))}
          </div>

          <button
            onClick={triggerConsultation}
            className="inline-flex items-center gap-2 text-[#2B4336] font-semibold text-base hover:underline decoration-amber-300 decoration-2 underline-offset-4"
          >
            <span>Request a Facility Partnership Proposal</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
