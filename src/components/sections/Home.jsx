
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
   <div className="overflow-x-clip bg-black">
    <main className="relative mx-auto w-full max-w-[1237px] bg-black min-[1238px]:border-x min-[1238px]:border-white/20">

        <Navbar />
        <Hero />
        <TrustedBy />
        <AboutUs />
        <Stats />
        <WorkShowcase />
        <ProblemSection />
        <ServicesSection />
        <ProcessSection />
        <LaunchSection />
        <TestimonialsSection />
        <FAQSection />
        <CTASection />
        <FooterSection />
        <GiantLogoSection />

      </main>
    </div>
  );
}
