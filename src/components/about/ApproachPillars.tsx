import {
  ShieldCheck,
  LayoutGrid,
  HeartHandshake,
  Stethoscope,
  Building2,
  Users,
} from "lucide-react";

export default function ApproachPillars() {
  const pillars = [
    {
      title: "Governance-Forward",
      icon: ShieldCheck,
      description:
        "Oversight systems designed for accountability, clarity, and institutional alignment.",
    },
    {
      title: "Structured",
      icon: LayoutGrid,
      description:
        "Consistent observational assessment, documentation, and reporting rhythms.",
    },
    {
      title: "Protective",
      icon: HeartHandshake,
      description:
        "Early identification of concerns that protect resident dignity and well-being.",
    },
    {
      title: "Non-Clinical",
      icon: Stethoscope,
      description:
        "Professional monitoring without medical or hands-on caregiving services.",
    },
    {
      title: "Institutionally Aligned",
      icon: Building2,
      description:
        "Partnership-ready oversight that supports facilities and strengthens transparency.",
    },
    {
      title: "Human-Centered",
      icon: Users,
      description:
        "Calm, steady support that helps families and operators move forward with confidence.",
    },
  ];

  return (
    <section id="approach" className="py-16 md:py-20 border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-slate-900">
            Philosophy & Approach
          </h2>
          <p className="text-base text-slate-600">
            We help families and facilities make sense of complexity and move
            forward with confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => {
            const IconComponent = pillar.icon;
            return (
              <div
                key={index}
                className="bg-white border border-slate-200 rounded-lg p-8 shadow-xs border-t-4 border-t-[#2B4336] space-y-4"
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
