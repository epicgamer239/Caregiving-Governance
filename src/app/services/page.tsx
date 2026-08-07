import ServicesGrid from "@/components/services/ServicesGrid";
import FeesSection from "@/components/services/FeesSection";
import AddOnsSection from "@/components/services/AddOnsSection";
import FinalCtaSection from "@/components/global/FinalCtaSection";

export default function ServicesPage() {
  return (
    <>
      <ServicesGrid />
      <FeesSection />
      <AddOnsSection />
      <FinalCtaSection headline="Strengthen Oversight. Protect Residents. Support Families." />
    </>
  );
}
