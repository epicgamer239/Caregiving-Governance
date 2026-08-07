import { Check, Image as ImageIcon } from "lucide-react";

export default function AleciaProfile() {
  const workFocusList = [
    "governance and decision pathways",
    "operating-model design",
    "oversight systems",
    "institutional accountability",
    "federal advisory environments",
    "prime-contractor compliance",
  ];

  return (
    <section className="py-16 md:py-20 border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 space-y-6">
            <div>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-slate-900 mb-2">
                Alecia Pazant
              </h2>
              <p className="text-base text-[#2B4336] font-medium">
                Founder, Caregiving Governance™ · Organizational Effectiveness &
                Governance Leader
              </p>
            </div>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
              Alecia Pazant is a governance-forward organizational effectiveness
              leader with deep experience in federal advisory, prime-contractor
              environments, and institutional accountability. Her work centers
              on governance, decision pathways, operating-model design, and
              oversight systems — disciplines that directly inform the
              Caregiving Governance™ model.
            </p>

            <div className="bg-amber-50/80 border border-amber-200/90 p-6 rounded-lg shadow-xs space-y-3">
              <h3 className="font-serif text-lg font-medium text-slate-900">
                Her work has centered on:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {workFocusList.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 text-sm text-slate-800"
                  >
                    <div className="p-1 bg-amber-200/80 text-[#2B4336] rounded-md shrink-0">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
              She brings a rare ability to diagnose structural gaps, design
              oversight systems, and strengthen accountability in complex
              environments. Her background includes senior federal advisory
              roles, service as a Presidential Appointee at the U.S. Small
              Business Administration, and more than a decade supporting major
              federal prime contractors in governance and compliance.
            </p>

            <p className="text-base sm:text-lg font-serif text-[#2B4336] font-medium italic">
              Caregiving Governance™ is a natural extension of her
              governance-aligned identity: structured oversight, protective
              monitoring, and institutional accountability for vulnerable
              residents.
            </p>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white border border-slate-200 p-6 rounded-lg shadow-xs space-y-4">
              <h3 className="text-xs font-semibold text-slate-500 font-sans border-b border-slate-100 pb-3">
                Executive Leadership Gallery & Headshots
              </h3>

              <ul className="space-y-3 text-sm text-slate-700">
                <li className="flex items-start gap-3 p-3.5 bg-[#FBF9F5] rounded-md border border-slate-200/70 hover:border-[#2B4336]/40 transition-colors">
                  <ImageIcon className="w-4 h-4 text-[#2B4336] mt-0.5 shrink-0" />
                  <span className="font-medium text-slate-800">
                    Female Executive Portraits
                  </span>
                </li>

                <li className="flex items-start gap-3 p-3.5 bg-[#FBF9F5] rounded-md border border-slate-200/70 hover:border-[#2B4336]/40 transition-colors">
                  <ImageIcon className="w-4 h-4 text-[#2B4336] mt-0.5 shrink-0" />
                  <span className="font-medium text-slate-800">
                    Corporate Finance Headshot | Corporate headshot poses
                  </span>
                </li>

                <li className="flex items-start gap-3 p-3.5 bg-[#FBF9F5] rounded-md border border-slate-200/70 hover:border-[#2B4336]/40 transition-colors">
                  <ImageIcon className="w-4 h-4 text-[#2B4336] mt-0.5 shrink-0" />
                  <span className="font-medium text-slate-800">
                    Headshot for Executive Leadership Consultant
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
