import Link from "next/link";
import { ArrowRight, Heart, ShieldCheck, MessageSquare } from "lucide-react";

export default function PurposeBeliefs() {
  return (
    <section className="py-16 md:py-20 border-b border-slate-200/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Our Purpose: Clean White Card with Deep Sage Left Accent Border */}
        <div className="bg-white border border-slate-200/90 border-l-4 border-l-[#2B4336] rounded-lg p-8 sm:p-12 shadow-xs space-y-6">
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-slate-900">
            Our Purpose
          </h2>

          <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
            Caregiving Governance exists to bring{" "}
            <strong className="text-[#2B4336] bg-amber-100/80 px-1.5 py-0.5 rounded-md font-semibold">
              structure, clarity, and accountability
            </strong>{" "}
            to families navigating nursing homes, assisted living, and complex
            care environments.
          </p>

          <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
            We provide{" "}
            <strong className="text-[#2B4336] bg-amber-100/80 px-1.5 py-0.5 rounded-md font-semibold">
              non-clinical, professional oversight
            </strong>{" "}
            that ensures your loved one’s care is monitored, documented, and
            supported — and your family stays informed, aligned, and confident.
          </p>

          <p className="text-lg sm:text-xl font-serif text-slate-900 leading-relaxed pt-2">
            This is not caregiving. This is not care management. This is not
            nursing. This is{" "}
            <strong className="text-[#2B4336] underline decoration-amber-300 decoration-2 font-semibold">
              governance
            </strong>
            .
          </p>

          <div className="pt-2">
            <Link
              href="/about#approach"
              className="inline-flex items-center gap-2 text-[#2B4336] font-semibold text-base hover:underline decoration-amber-300 decoration-2 underline-offset-4"
            >
              <span>Learn about governance</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* What We Believe Section */}
        <div className="space-y-8">
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-slate-900 text-center">
            What We Believe
          </h2>

          {/* 3 Unified Cards (All Using Deep Sage Accent) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border border-slate-200 border-t-4 border-t-[#2B4336] p-6 rounded-lg shadow-xs space-y-3">
              <div className="flex items-center gap-2 text-[#2B4336]">
                <Heart className="w-4 h-4 text-[#2B4336]" />
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 font-sans">
                  For Families
                </span>
              </div>
              <p className="text-base text-slate-800 leading-relaxed">
                Families deserve more than updates. They deserve{" "}
                <strong className="text-[#2B4336] font-semibold bg-amber-100/80 px-1.5 py-0.5 rounded-md">
                  clarity
                </strong>
                .
              </p>
            </div>

            <div className="bg-white border border-slate-200 border-t-4 border-t-[#2B4336] p-6 rounded-lg shadow-xs space-y-3">
              <div className="flex items-center gap-2 text-[#2B4336]">
                <ShieldCheck className="w-4 h-4 text-[#2B4336]" />
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 font-sans">
                  For Loved Ones
                </span>
              </div>
              <p className="text-base text-slate-800 leading-relaxed">
                Loved ones deserve more than care. They deserve{" "}
                <strong className="text-[#2B4336] font-semibold bg-amber-100/80 px-1.5 py-0.5 rounded-md">
                  oversight
                </strong>
                .
              </p>
            </div>

            <div className="bg-white border border-slate-200 border-t-4 border-t-[#2B4336] p-6 rounded-lg shadow-xs space-y-3">
              <div className="flex items-center gap-2 text-[#2B4336]">
                <MessageSquare className="w-4 h-4 text-[#2B4336]" />
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 font-sans">
                  For Facilities
                </span>
              </div>
              <p className="text-base text-slate-800 leading-relaxed">
                Facilities deserve more than complaints. They deserve{" "}
                <strong className="text-[#2B4336] font-semibold bg-amber-100/80 px-1.5 py-0.5 rounded-md">
                  structured communication
                </strong>
                .
              </p>
            </div>
          </div>

          {/* Unified Deep Sage Summary Block */}
          <div className="p-8 bg-[#2B4336] border border-[#203328] rounded-lg text-center shadow-md">
            <p className="text-base sm:text-lg text-slate-100 leading-relaxed max-w-3xl mx-auto">
              Caregiving Governance is built on the belief that when families
              have structure —{" "}
              <span className="text-amber-200 font-medium">
                decision pathways
              </span>
              ,{" "}
              <span className="text-amber-200 font-medium">
                communication rhythms
              </span>
              , and{" "}
              <span className="text-amber-200 font-medium">
                clear accountability
              </span>{" "}
              — caregiving becomes calmer, more coordinated, and more humane.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
