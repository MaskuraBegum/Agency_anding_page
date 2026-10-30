import Navbar from "../layout/Navbar";
import Hero from "../layout/Hero";
import TrustedBy from "./TrustedBy";
import AboutUs from "../layout/AboutUs";
import Stats from "../layout/Stats";
import WorkShowcase from "../layout/WorkShowcase";
import ProblemSection from "../layout/ProblemSection";
import ServicesSection from "../layout/ServicesSection";
import ProcessSection from "../layout/ProcessSection";
import LaunchSection from "../layout/LaunchSection";
import TestimonialsSection from "../layout/TestimonialsSection";
import FAQSection from "../layout/FAQSection";
import CTASection from "../layout/CTASection";
import FooterSection from "../layout/socialLinks";
import GiantLogoSection from "../layout/LogoSection";

export default function Home() {
  return (
   
    <div className="px-0 lg:px-52 bg-black">
        <main className="h-full bg-black border-x-2 border-gray-700  ">
      
      <div className=" w-full lg:w-[1440px] "><Navbar /></div>
      <Hero />
      <TrustedBy/>
      <AboutUs/>
      <Stats/>
      <WorkShowcase></WorkShowcase>
      <ProblemSection></ProblemSection>
      <ServicesSection></ServicesSection>
      <ProcessSection></ProcessSection>
      <LaunchSection></LaunchSection>
      <TestimonialsSection></TestimonialsSection>
      <FAQSection></FAQSection>
      <CTASection></CTASection>
      <FooterSection></FooterSection>
      <GiantLogoSection></GiantLogoSection>
    </main>
    </div>
  );
}