export default function PurposeBeliefs() {
  return (
    <section className="py-16 md:py-20 border-b border-slate-200/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="bg-white border border-slate-200/90 border-l-4 border-l-[#2B4336] rounded-lg p-8 sm:p-12 shadow-xs space-y-6">
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-slate-900">
            About Caregiving Governance™
          </h2>

          <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
            Caregiving Governance™ was created to solve a growing challenge in
            senior living: residents without regular visitors often become
            invisible in busy, understaffed environments. Families want
            reassurance. Operators want transparency. Residents deserve
            consistent visibility and human presence.
          </p>

          <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
            We provide structured, in-person proxy visits and governance-grade
            reporting that strengthen accountability, reduce risk, and ensure
            your loved one is never overlooked.
          </p>

          <div className="p-5 bg-[#2B4336] border border-[#203328] rounded-lg">
            <p className="text-base text-slate-100 leading-relaxed">
              <strong className="text-amber-300 font-semibold">
                This is not caregiving.
              </strong>{" "}
              This is protective oversight — a new layer of governance designed
              to keep residents visible, supported, and safe.
            </p>
          </div>
        </div>

        <div
          id="mission"
          className="bg-white border border-slate-200 border-t-4 border-t-[#2B4336] p-8 sm:p-10 rounded-lg shadow-xs space-y-5"
        >
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-slate-900">
            Our Mission
          </h2>
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
            To bring governance-level visibility to senior living by giving
            families and operators structured oversight, clear reporting, and
            early detection of concerns.
          </p>
          <p className="font-serif text-xl text-[#2B4336] font-medium leading-snug">
            Every resident — especially those without regular visitors —
            deserves consistent, professional, accountable oversight.
          </p>
        </div>
      </div>
    </section>
  );
}
