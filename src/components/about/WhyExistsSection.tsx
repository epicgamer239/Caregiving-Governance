import { Check } from "lucide-react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function WhyExistsSection() {
  const quotes = [
    "I just want to know someone is checking on them.",
    "I wish I had eyes and ears there.",
    "I don’t want anything to fall through the cracks.",
  ];

  return (
    <section className="py-16 md:py-20 border-b border-slate-200/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-slate-900">
            Why Caregiving Governance™ Exists
          </h2>
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
            Senior living communities work hard — but staffing shortages,
            turnover, and competing demands mean residents without regular
            visitors can unintentionally receive less attention.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {quotes.map((quote) => (
            <div
              key={quote}
              className="bg-white border border-slate-200 border-t-4 border-t-[#2B4336] rounded-lg p-6 shadow-xs"
            >
              <p className="font-serif text-base text-[#2B4336] font-medium leading-snug">
                “{quote}”
              </p>
            </div>
          ))}
        </div>

        <div className="p-8 bg-[#2B4336] border border-[#203328] rounded-lg text-center shadow-xs">
          <p className="text-base sm:text-lg text-slate-100 leading-relaxed max-w-3xl mx-auto">
            Caregiving Governance™ answers those needs with{" "}
            <span className="text-amber-200 font-medium">
              professional oversight, not caregiving
            </span>
            .
          </p>
        </div>

        <div className="text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-[#2B4336] font-semibold text-base hover:underline decoration-amber-300 decoration-2 underline-offset-4"
          >
            <span>Explore Structured Proxy Visits</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export function WhatMakesUsDifferent() {
  const differences = [
    {
      title: "Governance-Grade Structure",
      detail: "Visits follow a structured observational protocol — not casual check-ins.",
    },
    {
      title: "Professional Reporting",
      detail: "Families receive governance-style documentation, not narrative notes.",
    },
    {
      title: "Escalation Pathways",
      detail: "Concerns escalate through a defined four-level model.",
    },
    {
      title: "Trend Tracking",
      detail: "Patterns across visits help detect early signs of decline.",
    },
    {
      title: "Non-Clinical, Non-Caregiving",
      detail: "We do not provide care. We provide oversight, visibility, and accountability.",
    },
  ];

  return (
    <section id="approach" className="py-16 md:py-20 border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-slate-900">
            What Makes Us Different
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {differences.map((item) => (
            <div
              key={item.title}
              className="bg-white border border-slate-200 rounded-lg p-6 shadow-xs border-t-4 border-t-[#2B4336] space-y-3"
            >
              <div className="flex items-start gap-3">
                <div className="p-1 bg-amber-100 text-[#2B4336] rounded-md shrink-0 mt-0.5">
                  <Check className="w-4 h-4" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-serif text-lg font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
