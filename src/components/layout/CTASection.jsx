import React from "react";

export default function CTASection() {
  return (
    <section id="cta" className="bg-black text-white">
      <div className="mx-auto max-w-[1237px] border-x border-white/20">
        
        {/* Top Header Section */}
        <div className="flex min-h-[278px] flex-col items-center justify-center border-b border-white/20 px-5 py-12 text-center">
          <span className="bg-slate-700 px-1.5 py-1 text-xs uppercase leading-none text-white">
            Let's Build What's Next
          </span>

          <h2 className="mt-8 max-w-[600px] font-serif text-4xl leading-[1.12] tracking-tight sm:text-5xl md:text-[52px]">
            Ready to Elevate Your
            <br />
            Digital Presence?
          </h2>

          <p className="mt-6 max-w-[600px] text-sm text-white/75 sm:text-base leading-relaxed">
            Tell us where your digital experience stands today, what's holding it back, and where you want to take it next. We'll help you identify the right path forward.
          </p>
        </div>

        {/* Horizontal Divider Line */}
        <div className="h-px w-full lg:w-[1290px] bg-white/20 mx-0 lg:-mx-24" />

        {/* Embedded Container Section - Matching 3-Column Grid */}
        <div className="grid grid-cols-1 border-b border-white/20 md:grid-cols-[216px_1fr_216px]">
          
          {/* Left empty column */}
          <div className="hidden border-r border-white/20 md:block" />

          {/* Center Content / Embed Container */}
          <div className="border-x border-white/20 px-5 py-16 md:py-24 text-center flex items-center justify-center min-h-[350px]">
            <p className="text-base sm:text-lg font-light text-white/80">
              We’ll add the Call.com/Calendly link here.
            </p>
          </div>

          {/* Right empty column */}
          <div className="hidden border-l border-white/20 md:block" />

        </div>

        {/* Bottom Horizontal Divider Line */}
        <div className="h-px w-full lg:w-[1290px] bg-white/20 mx-0 lg:-mx-24" />

      </div>
    </section>
  );
}