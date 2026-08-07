import { AlertTriangle } from "lucide-react";

export default function WhyThisMattersSection() {
  const risks = [
    "Missed care",
    "Hygiene lapses",
    "Unnoticed decline",
    "Social isolation",
    "Medication errors",
    "Neglect",
  ];

  return (
    <section className="py-16 md:py-24 border-b border-slate-200/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-slate-900">
            Why This Matters
          </h2>
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
            Residents without regular visitors face higher risks. Families
            experience anxiety and lack of visibility. Facilities face
            complaints, ombudsman involvement, and reputational risk.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {risks.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 p-4 bg-white border border-slate-200 border-l-4 border-l-[#2B4336] rounded-lg shadow-xs"
            >
              <div className="p-1.5 bg-amber-100 text-[#2B4336] rounded-md shrink-0">
                <AlertTriangle className="w-4 h-4" />
              </div>
              <span className="text-sm font-medium text-slate-800">{item}</span>
            </div>
          ))}
        </div>

        <div className="p-8 bg-[#2B4336] border border-[#203328] rounded-lg text-center shadow-xs">
          <p className="text-base sm:text-lg text-slate-100 leading-relaxed max-w-3xl mx-auto">
            Caregiving Governance™ fills the gap with{" "}
            <span className="text-amber-200 font-medium">
              proactive, governance-grade oversight
            </span>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
