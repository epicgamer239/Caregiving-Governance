"use client";

import { Check, Calendar } from "lucide-react";

const services = [
  {
    title: "Scheduled Proxy Visits",
    description:
      "Structured in-person visits with observational review for residents whose families cannot visit regularly.",
    items: [
      "Resident Interaction",
      "Room & Environment Review",
      "Safety Indicators",
      "Staff Responsiveness Snapshot",
      "Trend Tracking",
    ],
  },
  {
    title: "Governance-Grade Reporting",
    description:
      "Clear, structured reports sent to families after each visit.",
    items: [
      "Appearance & hygiene",
      "Mood & engagement",
      "Room condition",
      "Safety cues",
      "Staff responsiveness",
      "Red flags",
      "Recommended follow-up",
    ],
  },
  {
    title: "Escalation Pathways",
    description:
      "Four-level escalation model ensuring concerns are addressed promptly.",
    items: [
      "Level 1: Monitor",
      "Level 2: Notify family",
      "Level 3: Notify facility",
      "Level 4: Formal escalation (ombudsman, leadership)",
    ],
  },
  {
    title: "Facility Partnership Programs",
    description: "Governance dashboards and transparency support for operators.",
    items: [
      "Quarterly Governance Dashboards",
      "Trend Analysis",
      "Family Council Reporting",
      "Oversight Training",
    ],
  },
  {
    title: "Resident Protection & Early Detection",
    description: "Trend tracking that identifies issues early.",
    items: [
      "Hygiene trends",
      "Room condition stability",
      "Staff responsiveness patterns",
      "Decline indicators",
      "Complaint reduction",
    ],
  },
  {
    title: "Virginia Launch Services",
    description:
      "Focused rollout in Northern Virginia, Richmond, and Hampton Roads.",
    items: ["Pilot Programs", "Operator Outreach", "Family Enrollment"],
  },
];

export default function ServicesGrid() {
  const triggerConsultation = () => {
    window.dispatchEvent(new CustomEvent("open-consultation-modal"));
  };

  return (
    <section className="py-16 md:py-20 border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h1 className="font-serif text-4xl sm:text-5xl font-semibold text-slate-900">
            Oversight Designed for Resident Protection & Institutional
            Accountability
          </h1>
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
            Structured proxy visits, governance reporting, and escalation
            pathways that strengthen transparency and reduce risk — powered by
            Caregiving Governance™.
          </p>
        </div>

        <div className="bg-white border border-slate-200/80 border-l-4 border-l-[#2B4336] rounded-xl p-8 sm:p-10 shadow-xs space-y-4 max-w-4xl mx-auto">
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
            Traditional caregiving services focus on tasks and clinical support.
            Ombudsman programs are reactive. Families often lack visibility.
            Facilities face complaints and reputational risk.
          </p>
          <p className="text-lg sm:text-xl font-serif text-[#2B4336] font-medium leading-snug">
            Caregiving Governance™ operates at a different level.
          </p>
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
            We provide governance-grade oversight that strengthens
            accountability, improves communication, and ensures residents receive
            consistent attention — especially those without regular visitors.
          </p>
        </div>

        <div className="space-y-4 pt-4">
          <h2 className="font-serif text-3xl font-semibold text-slate-900 text-center">
            Core Services
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border border-slate-200 border-t-4 border-t-[#2B4336] rounded-lg p-8 shadow-xs flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <h3 className="font-serif text-2xl font-semibold text-slate-900">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {service.description}
                </p>

                <div className="pt-4 border-t border-slate-100">
                  <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
                    Includes
                  </h4>
                  <ul className="space-y-2 text-sm text-slate-800">
                    {service.items.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2.5">
                        <div className="p-1 bg-amber-100 text-[#2B4336] rounded-md shrink-0">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <button
                onClick={triggerConsultation}
                className="w-full inline-flex items-center justify-center gap-2 bg-[#2B4336] hover:bg-[#203328] text-white py-3 rounded-md text-sm font-medium transition-colors shadow-xs"
              >
                <Calendar className="w-4 h-4" />
                <span>Book a Consultation</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
