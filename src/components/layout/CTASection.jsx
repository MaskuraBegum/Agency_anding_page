
import { motion } from "motion/react";
import { extBottom, frame, frame2 } from "./layout";

export default function CTASection() {
  return (
    <section id="cta" className="overflow-x-clip bg-black text-white">
      <div className={`${frame2} ${extBottom}`}>
        {/* Top Header Section */}
        <div className="flex min-h-[278px] flex-col items-center justify-center border-b border-white/20 px-5 py-12 text-center lg:pt-[100px]">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-[#242D3C] font-body shadow-[0px_4px_16px_0px_#00000026] px-1.5 py-1 font-normal leading-none tracking-[-0.5px] text-[14px] uppercase"
          >
            LET'S BUILD WHAT'S NEXT
          </motion.span>

          <h2 className="mt-8 max-w-[600px] font-['Merriweather'] font-normal text-3xl leading-14 tracking-[-1px] sm:text-3xl md:text-[48px]">
            Ready to Elevate Your
            <br />
            Digital Presence?
          </h2>

          <p className="mt-6 max-w-[620px] font-body font-medium leading-[22px] tracking-[-0.5px] text-sm text-[#CACACA] sm:text-[16px]">
            Tell us where your digital experience stands today, what's holding
            it back, and where you want to take it next. We'll help you identify
            the right path forward.
          </p>
        </div>

        {/* Horizontal Divider Line */}
       

        {/* Embedded Container Section - Matching 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-[216px_1fr_216px]">
          {/* Left empty column */}
          <div className="hidden border-r border-white/20 md:block" />

          {/* Center Content / Embed Container */}
          <div className="flex min-h-[450px] items-center justify-center px-5 py-16 text-center md:py-24">
            <p className="text-base text-center font-['Inter'] font-medium  leading-[22px] tracking-[-0.5px] text-[#CACACA] sm:text-[24px]">
              We’ll add the Call.com/Calendly link here.
            </p>
          </div>

          {/* Right empty column */}
          <div className="hidden border-l border-white/20 md:block" />
        </div>

        
      </div>
    </section>
  );
}
