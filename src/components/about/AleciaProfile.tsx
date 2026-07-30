import { Check, Image as ImageIcon } from "lucide-react";

export default function AleciaProfile() {
  const workFocusList = [
    "governance frameworks",
    "operating model design",
    "decision pathways",
    "accountability structures",
    "executive advisory",
    "organizational clarity",
  ];

  return (
    <section className="py-16 md:py-20 border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 space-y-6">
            <div>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-slate-900 mb-2">
                About Alecia Pazant
              </h2>
              <p className="text-base text-[#2B4336] font-medium">
                Founder, Caregiving Governance™ Principal & Strategic Advisor,
                Pazant Consulting Services
              </p>
            </div>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
              Alecia brings more than two decades of{" "}
              <strong className="text-[#2B4336] bg-amber-100/70 px-1 py-0.5 rounded-sm font-semibold">
                organizational effectiveness, governance design, and
                cross-functional alignment
              </strong>{" "}
              experience across research institutions, federal-aligned
              organizations, and mission-driven environments.
            </p>

            <div className="bg-white border border-slate-200/80 p-6 rounded-lg shadow-sm space-y-3">
              <h3 className="font-serif text-lg font-medium text-slate-900">
                Her work has centered on:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {workFocusList.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 text-sm text-slate-800"
                  >
                    <Check className="w-4 h-4 text-[#2B4336] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
              She created Caregiving Governance™ after witnessing how families
              struggle inside complex care environments — not because they lack
              love, but because they lack{" "}
              <strong className="text-[#2B4336] font-semibold">
                structure
              </strong>
              .
            </p>

            <p className="text-base sm:text-lg font-serif text-[#2B4336] font-medium italic">
              Her approach is calm, steady, and deeply human.
            </p>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white border border-slate-200 p-6 rounded-lg shadow-sm space-y-4">
              <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-normal border-b border-slate-100 pb-2">
                Executive Leadership Gallery & Headshots
              </h3>

              <ul className="space-y-3 text-sm text-slate-700">
                <li className="flex items-start gap-3 p-3 bg-[#FBF9F5] rounded-md border border-slate-200/60 text-slate-400 italic">
                  <ImageIcon className="w-4 h-4 text-slate-400 mt-0.5 shrink-0" />
                  <span>[PLACEHOLDER TEXT]</span>
                </li>

                <li className="flex items-start gap-3 p-3 bg-[#FBF9F5] rounded-md border border-slate-200/60">
                  <ImageIcon className="w-4 h-4 text-[#2B4336] mt-0.5 shrink-0" />
                  <span>Female Executive Portraits</span>
                </li>

                <li className="flex items-start gap-3 p-3 bg-[#FBF9F5] rounded-md border border-slate-200/60">
                  <ImageIcon className="w-4 h-4 text-[#2B4336] mt-0.5 shrink-0" />
                  <span>
                    Corporate Finance Headshot | Corporate headshot poses,
                    Corporate ...
                  </span>
                </li>

                <li className="flex items-start gap-3 p-3 bg-[#FBF9F5] rounded-md border border-slate-200/60">
                  <ImageIcon className="w-4 h-4 text-[#2B4336] mt-0.5 shrink-0" />
                  <span>
                    Headshot for Executive Leadership Consultant - Testimonial
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
