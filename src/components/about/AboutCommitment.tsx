import FacilityPartnershipsSection from "@/components/home/FacilityPartnershipsSection";
import WhoWeServeSection from "@/components/home/WhoWeServeSection";

export default function AboutCommitment() {
  return (
    <section className="py-16 md:py-20 border-b border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#2B4336] border border-[#203328] rounded-xl p-8 sm:p-12 shadow-xs text-center space-y-4">
          <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-white">
            Our Commitment
          </h2>
          <p className="text-base sm:text-lg text-slate-100 leading-relaxed max-w-3xl mx-auto">
            Every resident deserves to be seen. Every family deserves to be
            informed. Every operator deserves transparent oversight that
            strengthens trust and reduces risk.
          </p>
          <p className="font-serif text-lg text-amber-200 font-medium">
            Caregiving Governance™ is the governance-grade layer that makes that
            possible.
          </p>
        </div>
      </div>
    </section>
  );
}

export function AboutAudienceAndPartnerships() {
  return (
    <>
      <WhoWeServeSection />
      <FacilityPartnershipsSection />
    </>
  );
}
