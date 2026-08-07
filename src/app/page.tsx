import HeroSection from "@/components/home/HeroSection";
import WhatWeDoSection from "@/components/home/WhatWeDoSection";
import WhyThisMattersSection from "@/components/home/WhyThisMattersSection";
import CoreServicesSection from "@/components/home/CoreServicesSection";
import WhoWeServeSection from "@/components/home/WhoWeServeSection";
import WhyChooseUsSection from "@/components/home/WhyChooseUsSection";
import FinalCtaSection from "@/components/global/FinalCtaSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WhatWeDoSection />
      <WhyThisMattersSection />
      <CoreServicesSection />
      <WhoWeServeSection />
      <WhyChooseUsSection />
      <FinalCtaSection headline="Strengthen Oversight. Protect Residents. Support Families." />
    </>
  );
}
