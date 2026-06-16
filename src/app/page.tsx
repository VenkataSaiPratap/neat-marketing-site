import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import TrustedBy from "@/components/sections/TrustedBy";
import GCCExplained from "@/components/sections/GCCExplained";
import FractionalLeadership from "@/components/sections/FractionalLeadership";
import Services from "@/components/sections/Services";
import Industries from "@/components/sections/Industries";
import Process from "@/components/sections/Process";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import CaseStudies from "@/components/sections/CaseStudies";
import CostCalculator from "@/components/sections/CostCalculator";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustedBy />
        <GCCExplained />
        <FractionalLeadership />
        <Services />
        <Industries />
        <Process />
        <WhyChooseUs />
        <CaseStudies />
        <CostCalculator />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
