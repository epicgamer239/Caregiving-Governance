import { ShieldCheck, Users, ClipboardCheck } from "lucide-react";

export default function ApproachPillars() {
  const pillars = [
    {
      title: "1. Structured Oversight",
      icon: ShieldCheck,
      description:
        "Consistent, non-clinical presence inside the care environment. Clear documentation. Early issue identification. Professional communication with staff.",
    },
    {
      title: "2. Family Governance",
      icon: Users,
      description:
        "Decision rights. Communication norms. Escalation pathways. Alignment sessions. Conflict reduction.",
    },
    {
      title: "3. Accountability & Follow-Through",
      icon: ClipboardCheck,
      description:
        "Ensuring care plans are implemented. Ensuring updates are communicated. Ensuring responsibilities are clear. Ensuring issues are addressed.",
    },
  ];

  return (
    <section id="approach" className="py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-slate-900 mb-2">
            Our Approach
          </h2>
          <p className="text-base text-slate-600">
            Caregiving Governance is built on three pillars:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => {
            const IconComponent = pillar.icon;
            return (
              <div
                key={index}
                className="bg-white border border-slate-200 rounded-lg p-8 shadow-sm border-t-4 border-t-[#2B4336] space-y-4"
              >
                <div className="w-10 h-10 bg-amber-100 text-[#2B4336] rounded-md flex items-center justify-center">
                  <IconComponent className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-slate-900">
                  {pillar.title}
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
