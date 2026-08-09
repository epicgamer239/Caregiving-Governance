import Image from "next/image";
import { Check } from "lucide-react";

export default function AleciaProfile() {
  const workFocusList = [
    "Governance-forward operational leadership",
    "Risk and accountability infrastructure",
    "Cross-functional alignment and systems design",
    "Executive-level advisory roles",
    "Multi-site institutional oversight",
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
                Owner & CEO, Pazant Consulting Services, LLC · Founder,
                Caregiving Governance™
              </p>
            </div>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
              Alecia is an organizational effectiveness and governance leader
              with more than a decade of experience designing oversight systems,
              decision pathways, and accountability structures for complex
              institutions.
            </p>

            <div className="bg-amber-50/80 border border-amber-200/90 p-6 rounded-lg shadow-xs space-y-3">
              <h3 className="font-serif text-lg font-medium text-slate-900">
                Her background includes:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {workFocusList.map((item) => (
                  <div
                    key={item}
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

            <p className="text-base sm:text-lg font-serif text-[#2B4336] font-medium italic">
              Families deserve structured visibility. Residents deserve to be
              seen, supported, and protected — not just cared for.
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
