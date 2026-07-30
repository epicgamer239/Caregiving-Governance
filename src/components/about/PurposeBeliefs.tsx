import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function PurposeBeliefs() {
  return (
    <section className="py-16 md:py-20 border-b border-slate-200/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="bg-white border border-slate-200 rounded-lg p-8 sm:p-12 shadow-sm space-y-6">
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-slate-900">
            Our Purpose
          </h2>

          <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
            Caregiving Governance exists to bring{" "}
            <strong className="text-[#2B4336] bg-amber-100/70 px-1 py-0.5 rounded-sm font-semibold">
              structure, clarity, and accountability
            </strong>{" "}
            to families navigating nursing homes, assisted living, and complex
            care environments.
          </p>

          <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
            We provide{" "}
            <strong className="text-[#2B4336] bg-amber-100/70 px-1 py-0.5 rounded-sm font-semibold">
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

        <div className="space-y-8">
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-slate-900 text-center">
            What We Believe
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border border-slate-200 p-6 rounded-lg shadow-sm space-y-2">
              <p className="text-sm text-slate-500 font-medium">For Families</p>
              <p className="text-base text-slate-800 leading-relaxed">
                Families deserve more than updates. They deserve{" "}
                <strong className="text-[#2B4336] font-semibold bg-amber-100/70 px-1 rounded-sm">
                  clarity
                </strong>
                .
              </p>
            </div>

            <div className="bg-white border border-slate-200 p-6 rounded-lg shadow-sm space-y-2">
              <p className="text-sm text-slate-500 font-medium">
                For Loved Ones
              </p>
              <p className="text-base text-slate-800 leading-relaxed">
                Loved ones deserve more than care. They deserve{" "}
                <strong className="text-[#2B4336] font-semibold bg-amber-100/70 px-1 rounded-sm">
                  oversight
                </strong>
                .
              </p>
            </div>

            <div className="bg-white border border-slate-200 p-6 rounded-lg shadow-sm space-y-2">
              <p className="text-sm text-slate-500 font-medium">
                For Facilities
              </p>
              <p className="text-base text-slate-800 leading-relaxed">
                Facilities deserve more than complaints. They deserve{" "}
                <strong className="text-[#2B4336] font-semibold bg-amber-100/70 px-1 rounded-sm">
                  structured communication
                </strong>
                .
              </p>
            </div>
          </div>

          <div className="p-6 bg-[#F1EFE9] border border-slate-300/70 rounded-lg text-center">
            <p className="text-base sm:text-lg text-slate-800 leading-relaxed max-w-3xl mx-auto">
              Caregiving Governance is built on the belief that when families
              have structure — decision pathways, communication rhythms, and
              clear accountability — caregiving becomes calmer, more
              coordinated, and more humane.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
