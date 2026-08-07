export default function PurposeBeliefs() {
  return (
    <section className="py-16 md:py-20 border-b border-slate-200/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="bg-white border border-slate-200/90 border-l-4 border-l-[#2B4336] rounded-lg p-8 sm:p-12 shadow-xs space-y-6">
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-slate-900">
            About Caregiving Governance™
          </h2>

          <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
            We provide consistent, in-person monitoring for nursing home and
            assisted living residents — especially those without regular
            visitors. Proxy visits, structured reports, and clear escalation
            pathways reduce risk and strengthen transparency.
          </p>

          <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
            Our model is{" "}
            <strong className="text-[#2B4336] font-semibold border-b-2 border-amber-400/60 pb-0.5">
              non-clinical, governance-aligned, and scalable
            </strong>
            , serving families, facilities, and aging organizations.
          </p>
        </div>

        <div className="space-y-8">
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-slate-900 text-center">
            Where We Begin
          </h2>

          <div className="bg-white border border-slate-200 border-t-4 border-t-[#2B4336] p-8 sm:p-10 rounded-lg shadow-xs space-y-5">
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
              Staffing shortages, high turnover, and rising regulatory pressure
              leave residents without visitors more exposed to missed care,
              unnoticed decline, and isolation.
            </p>
            <p className="text-lg sm:text-xl font-serif text-[#2B4336] font-medium leading-snug">
              Our work starts in these gaps.
            </p>
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
              Through observation, trend tracking, and escalation pathways, we
              help residents get the attention and protection they deserve —
              with clarity for families and operators.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
