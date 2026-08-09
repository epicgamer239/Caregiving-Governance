import { Check } from "lucide-react";

export default function PurposeSection() {
  const outcomes = [
    "Visibility",
    "Accountability",
    "Safety",
    "Family peace of mind",
  ];

  return (
    <section className="py-16 md:py-24 border-b border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-slate-200/80 border-l-4 border-l-[#2B4336] rounded-xl p-8 sm:p-12 shadow-xs space-y-8">
          <div className="space-y-4">
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-slate-900">
              Our Purpose
            </h2>
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
              To ensure residents without regular visitors receive consistent,
              structured oversight that strengthens:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {outcomes.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 p-3.5 bg-[#FBF9F5] rounded-md border border-slate-200/70"
              >
                <div className="p-1 bg-amber-100 text-[#2B4336] rounded-md shrink-0">
                  <Check className="w-4 h-4" />
                </div>
                <span className="text-sm font-medium text-slate-800">{item}</span>
              </div>
            ))}
          </div>

          <p className="font-serif text-xl text-[#2B4336] font-medium leading-snug">
            We serve as your eyes and ears — with governance-grade documentation
            after every visit.
          </p>
        </div>
      </div>
    </section>
  );
}
