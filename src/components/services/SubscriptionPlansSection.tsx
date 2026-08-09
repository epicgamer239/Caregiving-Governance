"use client";

import { Check, Calendar } from "lucide-react";

type Plan = {
  title: string;
  price: string;
  blurb: string;
  includes: string[];
  idealFor: string[];
  featured?: boolean;
};

const plans: Plan[] = [
  {
    title: "Weekly Oversight Plan",
    price: "$229/month",
    blurb: "Consistent visibility and early detection of changes.",
    includes: [
      "One in-person visit every week",
      "Full governance report after each visit",
      "Red-flag monitoring",
      "Escalation to family when concerns arise",
      "Trend tracking across visits",
    ],
    idealFor: [
      "Memory care residents",
      "Residents without regular visitors",
      "Families living out of state",
    ],
    featured: true,
  },
  {
    title: "Biweekly Oversight Plan",
    price: "$149/month",
    blurb: "Regular updates without weekly frequency.",
    includes: [
      "One in-person visit every two weeks",
      "Governance report after each visit",
      "Red-flag monitoring",
      "Escalation to family when concerns arise",
    ],
    idealFor: [
      "Assisted living residents",
      "Families who visit occasionally but want structured oversight",
    ],
  },
  {
    title: "Monthly Oversight Plan",
    price: "$89/month",
    blurb: "Periodic visibility and reassurance.",
    includes: [
      "One in-person visit per month",
      "Governance report",
      "Red-flag monitoring",
    ],
    idealFor: [
      "Independent living residents",
      "Families who want reassurance without frequent updates",
    ],
  },
];

const addOns = [
  { title: "Photo Documentation", price: "+$20/month" },
  { title: "Video Call Facilitation", price: "+$25/month" },
  { title: "Escalation Support", price: "+$40/month" },
  { title: "Quarterly Trend Analysis Report", price: "+$50/quarter" },
  { title: "Family Council Reporting", price: "+$75/report" },
];

type SubscriptionPlansSectionProps = {
  detailed?: boolean;
  id?: string;
};

export default function SubscriptionPlansSection({
  detailed = false,
  id = "plans",
}: SubscriptionPlansSectionProps) {
  const triggerConsultation = () => {
    window.dispatchEvent(new CustomEvent("open-consultation-modal"));
  };

  return (
    <section id={id} className="py-16 md:py-24 border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-slate-900">
            Subscription Plans
          </h2>
          <p className="text-base text-slate-700 leading-relaxed">
            All plans include structured reporting, red-flag monitoring, and
            escalation when concerns arise.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.title}
              className={`bg-white border border-slate-200 rounded-lg p-6 sm:p-8 shadow-xs flex flex-col justify-between space-y-6 border-t-4 ${
                plan.featured ? "border-t-amber-400" : "border-t-[#2B4336]"
              }`}
            >
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-serif text-xl font-semibold text-slate-900">
                      {plan.title}
                    </h3>
                    <span className="bg-amber-100 text-[#2B4336] border border-amber-200/80 px-3 py-1 rounded-md text-sm font-semibold whitespace-nowrap shrink-0">
                      {plan.price}
                    </span>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {plan.blurb}
                  </p>
                </div>

                {detailed ? (
                  <>
                    <div className="pt-4 border-t border-slate-100 space-y-3">
                      <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                        Includes
                      </h4>
                      <ul className="space-y-2 text-sm text-slate-800">
                        {plan.includes.map((item) => (
                          <li key={item} className="flex items-start gap-2.5">
                            <div className="p-1 bg-amber-100 text-[#2B4336] rounded-md shrink-0 mt-0.5">
                              <Check className="w-3.5 h-3.5" />
                            </div>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="pt-2 space-y-2">
                      <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                        Ideal for
                      </h4>
                      <ul className="space-y-1.5 text-sm text-slate-700">
                        {plan.idealFor.map((item) => (
                          <li key={item}>• {item}</li>
                        ))}
                      </ul>
                    </div>
                  </>
                ) : null}
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

        <div className="space-y-6">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <h3 className="font-serif text-2xl font-semibold text-slate-900">
              Premium Add-Ons
            </h3>
            <p className="text-sm text-slate-600">
              Add these to any plan for enhanced visibility and communication.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {addOns.map((item) => (
              <div
                key={item.title}
                className="bg-white border border-slate-200 border-t-4 border-t-[#2B4336] rounded-lg p-5 text-center shadow-xs space-y-2"
              >
                <h4 className="font-semibold text-slate-900 text-sm">
                  {item.title}
                </h4>
                <p className="font-serif text-lg text-[#2B4336] font-semibold">
                  {item.price}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
