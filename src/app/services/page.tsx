import ServicesGrid from "@/components/services/ServicesGrid";
import HowOversightBeginsSection from "@/components/services/HowOversightBeginsSection";
import SubscriptionPlansSection from "@/components/services/SubscriptionPlansSection";
import WhoWeServeSection from "@/components/home/WhoWeServeSection";
import FacilityPartnershipsSection from "@/components/home/FacilityPartnershipsSection";
import FinalCtaSection from "@/components/global/FinalCtaSection";

export default function ServicesPage() {
  return (
    <>
      <ServicesGrid />
      <HowOversightBeginsSection />
      <SubscriptionPlansSection detailed />
      <WhoWeServeSection />
      <FacilityPartnershipsSection />
      <FinalCtaSection headline="Ready to Get Started? Choose a plan or schedule a conversation." />
    </>
  );
}
