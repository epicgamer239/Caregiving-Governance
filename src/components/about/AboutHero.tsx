import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutHero() {
  return (
    <section className="py-16 md:py-24 border-b border-slate-200/80 bg-gradient-to-b from-[#FAF8F3] to-[#FBF9F5]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-center">
        <p className="text-sm font-semibold tracking-wide text-[#2B4336] uppercase">
          About Caregiving Governance™
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl font-semibold text-slate-900 tracking-tight leading-tight">
          A Governance-Grade Oversight Service
        </h1>
        <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-3xl mx-auto">
          By Pazant Consulting Services, LLC — structured proxy visits and
          reporting so residents are never overlooked.
        </p>
        <div className="pt-2">
          <Link
            href="/about#mission"
            className="inline-flex items-center gap-2 text-[#2B4336] font-semibold text-base hover:underline decoration-amber-300 decoration-2 underline-offset-4"
          >
            <span>Our mission</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
