
import React from "react";
import { frame } from "./layout";

export default function GiantLogoSection() {
  return (
    <section className="bg-black text-white">
      <div className={`${frame} relative border-x border-white/20`}>

        {/* Top Horizontal Grid Line Extension */}
        <div className="bleed-line" />

        {/* Logo Container Box */}
        <div className="relative flex h-[180px] items-end justify-center overflow-hidden border-b border-white/20 sm:h-[240px] md:h-[300px] lg:h-[360px]">

          {/* Subtle Cyan-to-Black Gradient Background Glow */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#006080] via-[#002d40]/70 to-transparent" />

          {/* Ultra-Thin, Dissolving LOGO Text */}
          <h1 className="relative z-10 font-heading -mb-3 select-none bg-gradient-to-b from-white/90 via-[#80d0e8]/70 to-transparent bg-clip-text text-center font-['Merriweather'] text-[160px] font-[100] uppercase leading-[0.72] tracking-tight text-transparent sm:-mb-5 sm:text-[240px] md:-mb-8 md:text-[320px] lg:text-[400px] xl:text-[470px]">
            LOGO
          </h1>

        </div>

        {/* Bottom Bar: Copyright & Legal Links */}
        <div className="flex items-center justify-between font-['Inter'] font-normal leading[26px] tracking-[-0.5px] text-xs text-white sm:text-[16px]">
          <div className="border-r border-white/20 px-5 py-3 ">
            ©2026 Logo Inc. All right reserved.
          </div>

          <div className="flex items-center border-l border-white/20">
            <a
              href="#privacy"
              className="border-r border-white/20 px-4 py-3 transition-colors hover:text-white"
            >
              Privacy Policy
            </a>
            <a
              href="#terms"
              className="px-4 py-3 transition-colors hover:text-white"
            >
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
