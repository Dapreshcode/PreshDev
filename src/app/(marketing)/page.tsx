import FAQ from "@/component/marketing/home/Faq";
import FeaturedWork from "@/component/marketing/home/FeaturedWorks";
import FinalCTA from "@/component/marketing/home/FinalCta";
import Hero from "@/component/marketing/home/Hero";
import Process from "@/component/marketing/home/Process";
import ServicesSection from "@/component/marketing/home/ServicesSection";
import TrustSection from "@/component/marketing/home/TrustSection";
import WhyWorkWithUs from "@/component/marketing/home/WhyWorkWithUs";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustSection />
      <ServicesSection />
      <FeaturedWork />
      <Process />
      <WhyWorkWithUs />
      <FAQ />
      <FinalCTA />
    </>
  );
}