import AboutHero from "@/components/about/AboutHero";
import PurposeBeliefs from "@/components/about/PurposeBeliefs";
import AleciaProfile from "@/components/about/AleciaProfile";
import ApproachPillars from "@/components/about/ApproachPillars";
import FinalCtaSection from "@/components/global/FinalCtaSection";

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <PurposeBeliefs />
      <AleciaProfile />
      <ApproachPillars />
      <FinalCtaSection
        headline="Protect Residents. Strengthen Oversight. Build Trust."
        showSecondary={false}
      />
    </>
  );
}
