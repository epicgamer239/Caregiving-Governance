import AboutHero from "@/components/about/AboutHero";
import PurposeBeliefs from "@/components/about/PurposeBeliefs";
import AleciaProfile from "@/components/about/AleciaProfile";
import WhyExistsSection, {
  WhatMakesUsDifferent,
} from "@/components/about/WhyExistsSection";
import AboutCommitment, {
  AboutAudienceAndPartnerships,
} from "@/components/about/AboutCommitment";
import FinalCtaSection from "@/components/global/FinalCtaSection";

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <PurposeBeliefs />
      <AleciaProfile />
      <WhyExistsSection />
      <WhatMakesUsDifferent />
      <AboutAudienceAndPartnerships />
      <AboutCommitment />
      <FinalCtaSection
        headline="Protect Residents. Strengthen Oversight. Build Trust."
        showSecondary={false}
      />
    </>
  );
}
