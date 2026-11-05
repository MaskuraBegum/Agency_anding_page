import { motion } from "motion/react";
import { extBottom, frame2 } from "./layout";

export default function CTASection() {
  return (
    <section id="cta" className="overflow-x-clip bg-black text-white">
      <div className={`${frame2} ${extBottom}`}>
        {/* Top Header Section */}
        <div className="flex min-h-[230px] flex-col items-center justify-center border-b border-white/20 px-4 py-10 text-center sm:min-h-[278px] sm:px-5 sm:py-12 lg:pt-[100px]">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-[#242D3C] px-1.5 py-1 font-body text-[11px] font-normal uppercase leading-none tracking-[-0.5px] shadow-[0px_4px_16px_0px_#00000026] sm:text-[14px]"
          >
            LET'S BUILD WHAT'S NEXT
          </motion.span>

          <h2 className="mt-6 max-w-[600px] font-['Merriweather'] text-[24px] font-normal leading-[1.3] tracking-[-1px] sm:mt-8 sm:text-3xl sm:leading-14 md:text-[48px]">
            Ready to Elevate Your
            <br />
            Digital Presence?
          </h2>

          <p className="mt-4 max-w-[620px] font-body text-[13px] font-medium leading-[1.6] tracking-[-0.3px] text-[#CACACA] sm:mt-6 sm:text-[16px] sm:leading-[22px] sm:tracking-[-0.5px]">
            Tell us where your digital experience stands today, what's holding
            it back, and where you want to take it next. We'll help you identify
            the right path forward.
          </p>
        </div>

        {/* Embedded Container Section */}
        <div className="grid grid-cols-1 md:grid-cols-[216px_1fr_216px]">
          {/* Left empty column */}
          <div className="hidden border-r border-white/20 md:block" />

          {/* Center Content / Embed Container */}
          <div className="flex min-h-[300px] items-center justify-center px-4 py-12 text-center sm:min-h-[450px] sm:px-5 sm:py-16 md:py-24">
            <p className="text-center font-['Inter'] text-[14px] font-medium leading-[22px] tracking-[-0.5px] text-[#CACACA] sm:text-[24px]">
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