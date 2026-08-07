import Link from "next/link";
import {
  ArrowRight,
  ClipboardList,
  FileText,
  ShieldAlert,
  Building2,
  Activity,
} from "lucide-react";

export default function CoreServicesSection() {
  const services = [
    {
      title: "Scheduled Proxy Visits",
      description:
        "Weekly, biweekly, or monthly in-person visits with structured observational review.",
      icon: ClipboardList,
    },
    {
      title: "Governance-Grade Reporting",
      description:
        "Clear, structured reports sent to families after each visit.",
      icon: FileText,
    },
    {
      title: "Escalation Pathways",
      description:
        "Four-level escalation model ensuring concerns are addressed promptly.",
      icon: ShieldAlert,
    },
    {
      title: "Facility Partnership Programs",
      description:
        "Governance dashboards, trend analysis, and transparency support for operators.",
      icon: Building2,
    },
    {
      title: "Resident Protection & Early Detection",
      description:
        "Trend tracking that identifies issues before they escalate.",
      icon: Activity,
    },
  ];

  return (
    <section className="py-16 md:py-24 border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-slate-900 mb-2">
            Core Services
          </h2>
          <p className="text-base text-slate-600">
            Protective oversight designed for families and senior living
            operators.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white border border-slate-200 border-t-4 border-t-[#2B4336] rounded-lg p-6 shadow-xs space-y-4"
              >
                <div className="w-10 h-10 bg-amber-100 text-[#2B4336] rounded-md flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-slate-900">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-[#2B4336] font-semibold text-base hover:underline decoration-amber-300 decoration-2 underline-offset-4"
          >
            <span>View All Services</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
