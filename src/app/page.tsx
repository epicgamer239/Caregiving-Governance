import HeroSection from "@/components/home/HeroSection";
import PurposeSection from "@/components/home/PurposeSection";
import WhatWeDoSection from "@/components/home/WhatWeDoSection";
import WhyChooseUsSection from "@/components/home/WhyChooseUsSection";
import HowOversightBeginsSection from "@/components/services/HowOversightBeginsSection";
import SubscriptionPlansSection from "@/components/services/SubscriptionPlansSection";
import WhoWeServeSection from "@/components/home/WhoWeServeSection";
import FacilityPartnershipsSection from "@/components/home/FacilityPartnershipsSection";
import FinalCtaSection from "@/components/global/FinalCtaSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <PurposeSection />
      <WhatWeDoSection />
      <WhyChooseUsSection />
      <HowOversightBeginsSection />
      <SubscriptionPlansSection />
      <WhoWeServeSection />
      <FacilityPartnershipsSection />
      <FinalCtaSection headline="Ready to Begin? Choose a plan or schedule a conversation." />
    </>
  );
}
