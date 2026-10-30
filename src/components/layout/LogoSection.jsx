import React from "react";

export default function GiantLogoSection() {
  return (
    <section className="bg-black text-white">
      <div className="mx-auto max-w-[1237px] relative">

        {/* Top Horizontal Grid Line Extension */}
        <div className="bleed-line" />

        {/* Logo Container Box */}
        <div className="relative flex items-end justify-center h-[180px] sm:h-[240px] md:h-[300px] lg:h-[360px] overflow-hidden border-b border-white/20">
          
          {/* Subtle Cyan-to-Black Gradient Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#006080] via-[#002d40]/70 to-transparent pointer-events-none" />

          {/* Ultra-Thin, Dissolving LOGO Text */}
          <h1 className="relative z-10 font-serif font-[100] tracking-tight uppercase text-transparent bg-clip-text bg-gradient-to-b from-white/90 via-[#80d0e8]/70 to-transparent select-none text-center leading-[0.72] text-[160px] sm:text-[240px] md:text-[320px] lg:text-[400px] xl:text-[470px] -mb-3 sm:-mb-5 md:-mb-8">
            LOGO
          </h1>

        </div>

        {/* Bottom Bar: Copyright & Legal Links */}
        <div className="flex items-center justify-between text-xs sm:text-sm text-white/70">
          <div className="px-5 py-3 border-r border-white/20">
            ©2026 Logo Inc. All right reserved.
          </div>
          
          <div className="flex items-center border-l border-white/20">
            <a href="#privacy" className="px-4 py-3 hover:text-white transition-colors border-r border-white/20">
              Privacy Policy
            </a>
            <a href="#terms" className="px-4 py-3 hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>

        {/* Bottom Horizontal Grid Line Extension */}
        <div className="bleed-line" />

      </div>
    </section>
  );
}