import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutHero() {
  return (
    <section className="py-16 md:py-24 border-b border-slate-200/80 bg-gradient-to-b from-[#FAF8F3] to-[#FBF9F5]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-center">
        <h1 className="font-serif text-4xl sm:text-5xl font-semibold text-slate-900 tracking-tight leading-tight">
          A Governance-Forward Approach to Resident Oversight
        </h1>
        <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-3xl mx-auto">
          Protecting residents through structured proxy visits, governance
          reporting, and institutional accountability — delivered through
          Caregiving Governance™.
        </p>
        <div className="pt-2">
          <Link
            href="/about#approach"
            className="inline-flex items-center gap-2 text-[#2B4336] font-semibold text-base hover:underline decoration-amber-300 decoration-2 underline-offset-4"
          >
            <span>Learn about our approach</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
