import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";

export default function WhatWeDoSection() {
  const checkPoints = [
    "What’s happening",
    "Who is responsible",
    "What needs follow-through",
    "Where issues exist",
    "How decisions should be made",
    "How to stay aligned",
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
              Caregiving today is fragmented, complex, and emotionally
              overwhelming. Families often feel distant from what’s happening
              inside the facility, unsure whether their loved one is receiving
              the attention, follow-through, or communication they deserve.
            </p>
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
              Caregiving Governance provides{" "}
              <strong className="text-[#2B4336] font-semibold border-b-2 border-amber-400/60 pb-0.5">
                non-clinical, professional oversight
              </strong>{" "}
              that brings structure, accountability, and clarity to your loved
              one’s care — without providing medical or hands-on services.
            </p>
          </div>

          <div className="border-t border-b border-slate-100 py-8 space-y-4">
            <h3 className="font-serif text-xl font-medium text-slate-900">
              We ensure your family always knows:
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {checkPoints.map((item, idx) => (
                <div
                  key={idx}
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
            <p className="font-serif text-xl text-[#2B4336] font-medium leading-snug">
              This is governance. This is oversight. This is calm, structured
              support.
            </p>

            <div>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-[#2B4336] font-semibold text-base hover:underline decoration-amber-300 decoration-2 underline-offset-4"
              >
                <span>Learn about governance</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
