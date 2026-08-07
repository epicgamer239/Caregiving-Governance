"use client";

import { Check, Calendar } from "lucide-react";

const services = [
  {
    title: "Scheduled Proxy Visits",
    description: "In-person visits with structured observational review.",
    items: [
      "Resident interaction",
      "Room & environment",
      "Safety indicators",
      "Staff responsiveness",
      "Trend tracking",
    ],
  },
  {
    title: "Governance-Grade Reporting",
    description: "Clear reports sent to families after each visit.",
    items: [
      "Appearance & hygiene",
      "Mood & engagement",
      "Room condition",
      "Safety cues",
      "Staff responsiveness",
      "Red flags",
      "Follow-up recommendations",
    ],
  },
  {
    title: "Escalation Pathways",
    description: "Four levels so concerns get handled promptly.",
    items: [
      "Level 1: Monitor",
      "Level 2: Notify family",
      "Level 3: Notify facility",
      "Level 4: Formal escalation",
    ],
  },
  {
    title: "Facility Partnership Programs",
    description: "Dashboards and transparency support for operators.",
    items: [
      "Quarterly dashboards",
      "Trend analysis",
      "Family council reporting",
      "Oversight training",
    ],
  },
  {
    title: "Resident Protection & Early Detection",
    description: "Trend tracking that identifies issues early.",
    items: [
      "Hygiene trends",
      "Room condition",
      "Staff responsiveness",
      "Decline indicators",
      "Complaint reduction",
    ],
  },
  {
    title: "Virginia Launch Services",
    description: "Northern Virginia, Richmond, and Hampton Roads.",
    items: ["Pilot programs", "Operator outreach", "Family enrollment"],
  },
];

export default function ServicesGrid() {
  const triggerConsultation = () => {
    window.dispatchEvent(new CustomEvent("open-consultation-modal"));
  };

  return (
    <section className="py-14 md:py-20 border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="max-w-2xl space-y-3">
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-900 leading-tight">
            Resident Protection & Institutional Accountability
          </h1>
          <p className="text-base text-slate-700 leading-relaxed">
            Proxy visits, reporting, and escalation pathways that strengthen
            transparency and reduce risk.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div className="bg-white border border-slate-200 rounded-lg p-4 shadow-xs">
            <p className="font-medium text-slate-900 mb-1">Traditional care</p>
            <p className="text-slate-600 leading-snug">
              Focuses on tasks and clinical support.
            </p>
          </div>
          <div className="bg-white border border-slate-200 rounded-lg p-4 shadow-xs">
            <p className="font-medium text-slate-900 mb-1">Ombudsman programs</p>
            <p className="text-slate-600 leading-snug">
              Often reactive — after a concern surfaces.
            </p>
          </div>
          <div className="bg-[#2B4336] border border-[#203328] rounded-lg p-4 shadow-xs">
            <p className="font-medium text-amber-200 mb-1">
              Caregiving Governance™
            </p>
            <p className="text-slate-200 leading-snug">
              Proactive oversight with consistent attention and clear follow-up.
            </p>
          </div>
        </div>

        <div className="space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
            <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-slate-900">
              Core Services
            </h2>
            <button
              onClick={triggerConsultation}
              className="inline-flex items-center justify-center gap-2 bg-[#2B4336] hover:bg-[#203328] text-white px-4 py-2.5 rounded-md text-sm font-medium transition-colors shadow-xs shrink-0"
            >
              <Calendar className="w-4 h-4" />
              <span>Book a Consultation</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white border border-slate-200 border-t-4 border-t-[#2B4336] rounded-lg p-5 sm:p-6 shadow-xs space-y-3"
              >
                <div>
                  <h3 className="font-serif text-xl font-semibold text-slate-900">
                    {service.title}
                  </h3>
                  <p className="mt-1 text-sm text-slate-600 leading-snug">
                    {service.description}
                  </p>
                </div>

                <ul className="flex flex-wrap gap-1.5 pt-1">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#FBF9F5] border border-slate-200/80 text-xs font-medium text-slate-700"
                    >
                      <Check className="w-3 h-3 text-[#2B4336] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
