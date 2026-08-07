import Image from "next/image";
import { Check } from "lucide-react";

export default function AleciaProfile() {
  const workFocusList = [
    "Decision pathways",
    "Operating models",
    "Oversight systems",
    "Institutional accountability",
    "Federal advisory",
    "Prime-contractor compliance",
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
              A governance-forward leader with deep experience in federal
              advisory, prime-contractor environments, and institutional
              accountability. Her work in decision pathways, operating models,
              and oversight systems shapes the Caregiving Governance™ approach.
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
              Her background includes senior federal advisory roles, service as
              a Presidential Appointee at the U.S. Small Business
              Administration, and more than a decade supporting major federal
              prime contractors in governance and compliance.
            </p>

            <p className="text-base sm:text-lg font-serif text-[#2B4336] font-medium italic">
              Caregiving Governance™ extends that work: structured oversight and
              protective monitoring for vulnerable residents.
            </p>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white border border-slate-200 p-4 sm:p-5 rounded-lg shadow-xs">
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-md border border-slate-200/80 bg-[#FBF9F5]">
                <Image
                  src="/alecia-headshot.jpg"
                  alt="Alecia Pazant, Founder of Caregiving Governance™"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 90vw, 380px"
                  priority
                />
              </div>
              <p className="mt-4 text-sm font-medium text-slate-800 text-center">
                Alecia Pazant
              </p>
              <p className="text-xs text-slate-500 text-center">
                Founder, Caregiving Governance™
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
