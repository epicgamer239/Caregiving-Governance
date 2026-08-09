import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";

export default function WhatWeDoSection() {
  const protocol = [
    "Appearance & Hygiene",
    "Mood & Engagement",
    "Room Condition",
    "Safety Cues",
    "Staff Responsiveness",
    "Signs of Decline",
    "Red Flags",
  ];

  return (
    <section className="py-16 md:py-24 border-b border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-slate-200/80 border-l-4 border-l-[#2B4336] rounded-xl p-8 sm:p-12 shadow-xs space-y-8">
          <div className="space-y-4">
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-slate-900">
              What We Do
            </h2>
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
              Caregiving Governance™ delivers scheduled proxy visits using a
              structured observational protocol that evaluates:
            </p>
          </div>

          <div className="border-t border-b border-slate-100 py-8 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {protocol.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 p-3.5 bg-[#FBF9F5] rounded-md border border-slate-200/70"
                >
                  <div className="p-1 bg-amber-100 text-[#2B4336] rounded-md shrink-0">
                    <Check className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-medium text-slate-800">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4 pt-2">
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
              After each visit, families receive a{" "}
              <strong className="text-[#2B4336] font-semibold border-b-2 border-amber-400/60 pb-0.5">
                governance-grade report
              </strong>{" "}
              with clear findings, recommended follow-up questions, and
              escalation actions if needed.
            </p>

            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-[#2B4336] font-semibold text-base hover:underline decoration-amber-300 decoration-2 underline-offset-4"
            >
              <span>Explore Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
