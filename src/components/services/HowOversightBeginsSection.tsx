"use client";

import { Check, Calendar } from "lucide-react";

export default function HowOversightBeginsSection() {
  const triggerConsultation = () => {
    window.dispatchEvent(new CustomEvent("open-consultation-modal"));
  };

  const packageItems = [
    {
      title: "Intake Conversation",
      detail:
        "Understand your loved one’s history, routines, risks, and priorities.",
    },
    {
      title: "Observation Plan",
      detail:
        "A structured protocol tailored to your loved one’s living environment.",
    },
    {
      title: "In-Person Proxy Visit",
      detail:
        "Using the same governance-aligned observational criteria applied in ongoing oversight.",
    },
    {
      title: "Governance-Grade Report",
      detail:
        "Clear findings, recommended follow-up questions, and escalation actions if needed.",
    },
  ];

  return (
    <section className="py-16 md:py-24 border-b border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-slate-900">
            How Oversight Begins
          </h2>
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
            Every oversight relationship starts with a structured Starter
            Session — a governance-grade baseline assessment that ensures your
            loved one’s needs are clearly understood before ongoing visits
            begin.
          </p>
        </div>

        <div className="bg-white border border-slate-200 border-t-4 border-t-[#2B4336] rounded-xl p-8 sm:p-12 shadow-xs space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
            <div className="space-y-2">
              <h3 className="font-serif text-2xl font-semibold text-slate-900">
                Starter Session + Proxy Visit Package
              </h3>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                A one-time, comprehensive onboarding that includes:
              </p>
            </div>
            <span className="bg-amber-100 text-[#2B4336] border border-amber-200/80 px-3.5 py-1.5 rounded-md text-sm font-semibold whitespace-nowrap shrink-0 self-start">
              $349–$599
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {packageItems.map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-3 p-3.5 bg-[#FBF9F5] rounded-md border border-slate-200/70"
              >
                <div className="p-1 bg-amber-100 text-[#2B4336] rounded-md shrink-0 mt-0.5">
                  <Check className="w-4 h-4" />
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-semibold text-slate-900">
                    {item.title}
                  </p>
                  <p className="text-sm text-slate-600 leading-snug">
                    {item.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-sm text-slate-600 leading-relaxed">
            Pricing depends on distance and complexity.
          </p>

          <button
            onClick={triggerConsultation}
            className="inline-flex items-center justify-center gap-2 bg-[#2B4336] hover:bg-[#203328] text-white px-6 py-3 rounded-md text-sm font-medium transition-colors shadow-xs"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Starter Session</span>
          </button>
        </div>
      </div>
    </section>
  );
}
