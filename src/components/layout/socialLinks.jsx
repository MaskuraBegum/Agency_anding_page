
import React from "react";

import {
  FaDribbble,
  FaInstagram,
  FaBehance,
  FaLinkedinIn,
  FaFacebookF,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

const socialLinks = [
  { name: "Dribbble", icon: FaDribbble, href: "#" },
  { name: "Instagram", icon: FaInstagram, href: "#" },
  { name: "Behance", icon: FaBehance, href: "#" },
  { name: "LinkedIn", icon: FaLinkedinIn, href: "#" },
  { name: "Facebook", icon: FaFacebookF, href: "#" },
  { name: "X (Twitter)", icon: FaXTwitter, href: "#" },
];

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "FAQ", href: "#faq" },
  {
    label: "Contact Us",
    href: "https://docs.google.com/forms/d/e/1FAIpQLSei64i0y7IMQl9JlE9cP-StTMGTM8X8bGvRPvpOSixo_Nh5Vg/viewform?usp=publish-editor",
  },
];

const iconColors = {
  Dribbble: "text-[#EA4C89]",
  Instagram: "text-[#E4405F]",
  Behance: "text-[#1769FF]",
  LinkedIn: "text-[#0A66C2]",
  Facebook: "text-[#1877F2]",
  "X (Twitter)": "text-white",
};

export default function FooterSection() {
  return (
    <div id="socials" className="scroll-mt-[70px]">
      <footer className="bg-black text-white">
        <div className="mx-auto max-w-[1237px]">
          <div className="bleed-line" />

          {/* Main Footer */}
          <div className="grid grid-cols-1 border-b border-white/20 lg:grid-cols-2">
            {/* Left Contact Block */}
            <div className="flex min-h-[380px] flex-col justify-end border-b border-white/20 bg-[#181818] p-8 sm:p-12 md:p-12 lg:min-h-[460px] lg:border-b-0 lg:border-r">
              <h3 className="max-w-[480px] font-serif text-2xl leading-tight text-white sm:text-3xl md:text-[28px]">
                Let’s turn your idea into a digital experience that works for
                your business.
              </h3>

              <a
                href="mailto:hello@logo.com"
                className="mt-6 w-fit font-serif text-3xl text-gray-200 underline decoration-white/40 underline-offset-8 transition-colors hover:decoration-white sm:text-4xl md:text-[40px]"
              >
                hello@logo.com
              </a>
            </div>

            {/* Right Brand & Social Block */}
            <div className="flex min-h-[380px] flex-col justify-between p-8 sm:p-4 md:p-12 lg:min-h-[460px]">
              {/* Logo & Tagline */}
              <div>
                <a href="#home" className="inline-block">
                  <h2 className="font-serif text-3xl uppercase tracking-tight text-white sm:text-4xl">
                    LOGO
                  </h2>
                </a>

                <p className="mt-4 max-w-[320px] text-sm leading-relaxed text-white/80 sm:text-base">
                  Digital transformation for businesses ready to move forward.
                </p>
              </div>

              {/* Social Icons - No Borders */}
              <div className="mt-10 grid grid-cols-6 gap-2">
                {socialLinks.map((social) => {
                  const Icon = social.icon;

                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                      title={social.name}
                      className="group flex items-center justify-center py-3"
                    >
                      <Icon
                        size={19}
                        className={`transition-transform duration-300 group-hover:scale-125 ${iconColors[social.name]}`}
                      />
                    </a>
                  );
                })}
              </div>

              {/* Mobile Navigation */}
              <nav className="mt-8 grid grid-cols-3 justify-items-center gap-x-4 gap-y-3 text-center text-sm text-white/90 sm:text-base lg:hidden">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.label === "Contact Us" ? "_blank" : undefined}
                    rel={
                      link.label === "Contact Us"
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>
          </div>

          {/* Desktop Navigation - Single Row */}
          <nav className="hidden grid-cols-6 border-b border-white/20 lg:grid">
            {navLinks.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                target={link.label === "Contact Us" ? "_blank" : undefined}
                rel={
                  link.label === "Contact Us"
                    ? "noopener noreferrer"
                    : undefined
                }
                className={`flex items-center justify-center px-3 py-5 text-sm font-medium text-white/80 transition-colors duration-300 hover:bg-white/[0.04] hover:text-white ${
                  index !== 5 ? "border-r border-white/20" : ""
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </footer>

      {/* Bottom Horizontal Line */}
      <div className="mx-auto max-w-[1237px]">
        <div className="bleed-line" />
      </div>
    </div>
  );
}
