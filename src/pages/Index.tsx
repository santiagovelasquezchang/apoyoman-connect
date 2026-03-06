import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { QuoteSection } from "@/components/sections/QuoteSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ServicesPreview />
      <QuoteSection />
    </Layout>
  );
};

export default Index;
