"use client";

import { Check, Calendar } from "lucide-react";

const visitProtocol = [
  {
    title: "Appearance & Hygiene",
    detail: "Grooming, clothing condition, hygiene cues",
  },
  {
    title: "Mood & Engagement",
    detail: "Emotional state, social interaction, responsiveness",
  },
  {
    title: "Room Condition",
    detail: "Cleanliness, organization, safety indicators",
  },
  {
    title: "Safety Cues",
    detail: "Fall risks, environmental hazards, lighting, mobility pathways",
  },
  {
    title: "Staff Responsiveness",
    detail: "Timeliness, attentiveness, communication",
  },
  {
    title: "Signs of Decline",
    detail: "Physical, cognitive, or behavioral changes",
  },
  {
    title: "Red Flags",
    detail: "Any concern requiring follow-up or escalation",
  },
];

const reportItems = [
  "Visit summary",
  "Observational findings",
  "Red-flag alerts",
  "Recommended follow-up questions for facility staff",
  "Trend notes (if applicable)",
  "Escalation actions (if needed)",
];

const escalationLevels = [
  { level: "Level 1", title: "Monitor", detail: "Continue observation" },
  { level: "Level 2", title: "Notify Family", detail: "Direct communication with family" },
  { level: "Level 3", title: "Notify Facility", detail: "Coordination with staff or leadership" },
  { level: "Level 4", title: "Formal Escalation", detail: "Ombudsman or administrative escalation" },
];

const trendItems = [
  "Changes in hygiene",
  "Shifts in mood or engagement",
  "Room condition patterns",
  "Safety risks",
  "Staff responsiveness trends",
  "Emerging concerns",
];

export default function ServicesGrid() {
  const triggerConsultation = () => {
    window.dispatchEvent(new CustomEvent("open-consultation-modal"));
  };

  return (
    <section className="py-16 md:py-20 border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <p className="text-sm font-semibold tracking-wide text-[#2B4336] uppercase">
            Caregiving Governance™ Services
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl font-semibold text-slate-900 leading-tight">
            Protective Oversight • Structured Reporting • Accountability
          </h1>
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
            Scheduled, in-person proxy visits and governance-grade reporting for
            residents in assisted living, memory care, and nursing homes —
            especially when families cannot visit regularly.
          </p>
        </div>

        <div className="p-6 sm:p-8 bg-[#2B4336] border border-[#203328] rounded-xl text-center max-w-4xl mx-auto">
          <p className="text-base sm:text-lg text-slate-100 leading-relaxed">
            <strong className="text-amber-300">This is not caregiving.</strong>{" "}
            This is protective oversight — designed to strengthen visibility,
            reduce risk, and keep your loved one supported, seen, and safe.
          </p>
        </div>

        <div className="space-y-6">
          <div className="max-w-3xl space-y-3">
            <h2 className="font-serif text-3xl font-semibold text-slate-900">
              Our Core Service: Structured Proxy Visits
            </h2>
            <p className="text-base text-slate-700 leading-relaxed">
              Each visit follows a governance-grade observational protocol for
              consistency, accuracy, and early detection of concerns.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {visitProtocol.map((item) => (
              <div
                key={item.title}
                className="bg-white border border-slate-200 border-l-4 border-l-[#2B4336] rounded-lg p-5 shadow-xs space-y-1"
              >
                <h3 className="font-serif text-lg font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600">{item.detail}</p>
              </div>
            ))}
          </div>
          <p className="font-serif text-lg text-[#2B4336] font-medium">
            This is structured oversight, not casual observation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white border border-slate-200 border-t-4 border-t-[#2B4336] rounded-lg p-8 shadow-xs space-y-5">
            <h2 className="font-serif text-2xl font-semibold text-slate-900">
              Governance-Grade Reporting
            </h2>
            <p className="text-sm text-slate-700 leading-relaxed">
              After each visit, families receive a clear report documenting what
              was observed and what actions, if any, are recommended.
            </p>
            <ul className="space-y-2 text-sm text-slate-800">
              {reportItems.map((item) => (
                <li key={item} className="flex items-center gap-2.5">
                  <div className="p-1 bg-amber-100 text-[#2B4336] rounded-md shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white border border-slate-200 border-t-4 border-t-[#2B4336] rounded-lg p-8 shadow-xs space-y-5">
            <h2 className="font-serif text-2xl font-semibold text-slate-900">
              Escalation Pathways
            </h2>
            <p className="text-sm text-slate-700 leading-relaxed">
              A four-level model so concerns are addressed promptly and
              appropriately.
            </p>
            <ul className="space-y-3">
              {escalationLevels.map((item) => (
                <li
                  key={item.level}
                  className="p-3 bg-[#FBF9F5] border border-slate-200/70 rounded-md"
                >
                  <p className="text-sm font-semibold text-slate-900">
                    {item.level}: {item.title}
                  </p>
                  <p className="text-xs text-slate-600 mt-0.5">{item.detail}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-white border border-slate-200 border-l-4 border-l-[#2B4336] rounded-xl p-8 sm:p-10 shadow-xs space-y-6">
          <div className="space-y-3">
            <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-slate-900">
              Trend Tracking & Visibility Over Time
            </h2>
            <p className="text-base text-slate-700 leading-relaxed">
              Trend analysis across visits highlights patterns — especially
              valuable for memory care, residents without visitors, and families
              living out of state.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {trendItems.map((item) => (
              <div
                key={item}
                className="flex items-center gap-2.5 p-3 bg-[#FBF9F5] rounded-md border border-slate-200/70 text-sm font-medium text-slate-800"
              >
                <div className="p-1 bg-amber-100 text-[#2B4336] rounded-md shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={triggerConsultation}
            className="inline-flex items-center justify-center gap-2 bg-[#2B4336] hover:bg-[#203328] text-white px-6 py-3 rounded-md text-sm font-medium transition-colors shadow-xs"
          >
            <Calendar className="w-4 h-4" />
            <span>Book a Consultation</span>
          </button>
        </div>
      </div>
    </section>
  );
}
