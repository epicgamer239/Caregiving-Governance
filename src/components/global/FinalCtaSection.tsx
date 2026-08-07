"use client";

import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

type FinalCtaSectionProps = {
  headline: string;
  primaryLabel?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  showSecondary?: boolean;
};

export default function FinalCtaSection({
  headline,
  primaryLabel = "Book a Consultation",
  secondaryLabel = "Request More Information",
  secondaryHref = "/contact",
  showSecondary = true,
}: FinalCtaSectionProps) {
  const triggerConsultation = () => {
    window.dispatchEvent(new CustomEvent("open-consultation-modal"));
  };

  return (
    <section className="py-16 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#2B4336] border border-[#203328] rounded-xl p-8 sm:p-12 shadow-xs text-center space-y-6">
          <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-white leading-snug">
            {headline}
          </h2>

          <div className="flex flex-wrap gap-4 items-center justify-center pt-2">
            <button
              onClick={triggerConsultation}
              className="inline-flex items-center gap-2 bg-amber-300 hover:bg-amber-400 text-slate-950 px-6 py-3.5 rounded-md text-base font-semibold transition-colors shadow-xs"
            >
              <Calendar className="w-4 h-4" />
              <span>{primaryLabel}</span>
            </button>

            {showSecondary ? (
              <Link
                href={secondaryHref}
                className="inline-flex items-center gap-2 bg-transparent hover:bg-white/10 text-white border border-white/40 px-6 py-3.5 rounded-md text-base font-medium transition-colors"
              >
                <span>{secondaryLabel}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
