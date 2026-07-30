"use client";

import { Check, Calendar } from "lucide-react";

export default function ServicesGrid() {
  const triggerConsultation = () => {
    window.dispatchEvent(new CustomEvent("open-consultation-modal"));
  };

  return (
    <section className="py-16 md:py-20 border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="font-serif text-4xl sm:text-5xl font-semibold text-slate-900 mb-4">
            Services & Fees
          </h1>
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
            Transparent, governance-based engagement models offering
            non-clinical oversight, clear structure, and dedicated advocacy.
          </p>
        </div>

        {/* 2 Featured Core Services (Deep Sage Top Borders + Gold Price Badges) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white border border-slate-200 border-t-4 border-t-[#2B4336] rounded-lg p-8 shadow-xs flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex justify-between items-start gap-4">
                <h3 className="font-serif text-2xl font-semibold text-slate-900">
                  Governance-Based Advocacy Visits
                </h3>
                <span className="bg-amber-100 text-[#2B4336] border border-amber-200/80 px-3.5 py-1.5 rounded-md text-base font-semibold whitespace-nowrap shrink-0">
                  $495 per week
                </span>
              </div>

              <p className="text-sm text-slate-700 leading-relaxed">
                Professional, structured oversight inside the facility —
                non-clinical and non-caregiving.
              </p>

              <div className="pt-4 border-t border-slate-100">
                <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
                  Includes
                </h4>
                <ul className="space-y-2 text-sm text-slate-800">
                  {[
                    "Observation of care quality",
                    "Environment & safety checks",
                    "Professional communication with staff",
                    "Resident engagement",
                    "Early issue identification",
                    "Structured visit report",
                    "Optional photo documentation",
                  ].map((item, idx) => (
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
              <span>Schedule a Consultation</span>
            </button>
          </div>

          <div className="bg-white border border-slate-200 border-t-4 border-t-[#2B4336] rounded-lg p-8 shadow-xs flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex justify-between items-start gap-4">
                <h3 className="font-serif text-2xl font-semibold text-slate-900">
                  Care Plan Governance
                </h3>
                <span className="bg-amber-100 text-[#2B4336] border border-amber-200/80 px-3.5 py-1.5 rounded-md text-base font-semibold whitespace-nowrap shrink-0">
                  $650 per month
                </span>
              </div>

              <p className="text-sm text-slate-700 leading-relaxed">
                Oversight of the <em>process</em> — ensuring the care plan is
                followed, updated, and communicated.
              </p>

              <div className="pt-4 border-t border-slate-100">
                <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
                  Includes
                </h4>
                <ul className="space-y-2 text-sm text-slate-800">
                  {[
                    "Attendance at care plan meetings",
                    "Review of care plan updates (non-clinical)",
                    "Coordination with facility staff",
                    "Documentation of progress and gaps",
                    "Monthly governance summary",
                  ].map((item, idx) => (
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
              <span>Schedule a Consultation</span>
            </button>
          </div>
        </div>

        {/* 4 Secondary Flat-Fee / Hourly Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
          <div className="bg-white border border-slate-200 border-l-4 border-l-[#2B4336] rounded-lg p-6 shadow-xs space-y-3">
            <div className="flex justify-between items-start gap-4">
              <h3 className="font-serif text-xl font-semibold text-slate-900">
                Family Governance & Decision Alignment
              </h3>
              <span className="bg-slate-100 text-slate-900 px-2.5 py-1 rounded-md text-sm font-semibold whitespace-nowrap shrink-0">
                $395 per session
              </span>
            </div>
            <p className="text-sm text-slate-700 leading-relaxed">
              Calm, structured facilitation to help families align on roles,
              responsibilities, and decisions.
            </p>
          </div>

          <div className="bg-white border border-slate-200 border-l-4 border-l-[#2B4336] rounded-lg p-6 shadow-xs space-y-3">
            <div className="flex justify-between items-start gap-4">
              <h3 className="font-serif text-xl font-semibold text-slate-900">
                Caregiving Operating Model Design
              </h3>
              <span className="bg-slate-100 text-slate-900 px-2.5 py-1 rounded-md text-sm font-semibold whitespace-nowrap shrink-0">
                $1,250 flat fee
              </span>
            </div>
            <p className="text-sm text-slate-700 leading-relaxed">
              A governance-forward system that organizes the entire caregiving
              ecosystem.
            </p>
          </div>

          <div className="bg-white border border-slate-200 border-l-4 border-l-[#2B4336] rounded-lg p-6 shadow-xs space-y-3">
            <div className="flex justify-between items-start gap-4">
              <h3 className="font-serif text-xl font-semibold text-slate-900">
                Transition Navigation
              </h3>
              <span className="bg-slate-100 text-slate-900 px-2.5 py-1 rounded-md text-sm font-semibold whitespace-nowrap shrink-0">
                $995 flat fee
              </span>
            </div>
            <p className="text-sm text-slate-700 leading-relaxed">
              Non-clinical guidance through major care transitions.
            </p>
          </div>

          <div className="bg-white border border-slate-200 border-l-4 border-l-[#2B4336] rounded-lg p-6 shadow-xs space-y-3">
            <div className="flex justify-between items-start gap-4">
              <h3 className="font-serif text-xl font-semibold text-slate-900">
                Advocacy & Issue Escalation
              </h3>
              <span className="bg-slate-100 text-slate-900 px-2.5 py-1 rounded-md text-sm font-semibold whitespace-nowrap shrink-0">
                $175 per hour
              </span>
            </div>
            <p className="text-sm text-slate-700 leading-relaxed">
              Professional advocacy when concerns arise inside the facility.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
