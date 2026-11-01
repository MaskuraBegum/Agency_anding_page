
import { frame } from "./layout";

import dribbble from "../../assets/Dribbble.png";
import instagram from "../../assets/Instagram.png";
import behance from "../../assets/Behance.png";
import linkedin from "../../assets/Linkedin.png";
import facebook from "../../assets/Facebook.png";
import x from "../../assets/X.png";

const socialLinks = [
  { name: "Dribbble", icon: dribbble, href: "#" },
  { name: "Instagram", icon: instagram, href: "#" },
  { name: "Behance", icon: behance, href: "#" },
  { name: "LinkedIn", icon: linkedin, href: "#" },
  { name: "Facebook", icon: facebook, href: "#" },
  { name: "X (Twitter)", icon: x, href: "#" },
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

export default function FooterSection() {
  return (
    <div id="socials" className="scroll-mt-[70px]">
      <footer className="bg-black text-white">
        <div className={`${frame} border-x border-white/20`}>
          <div className="bleed-line" />

          {/* Main Footer */}
          <div className="grid grid-cols-1 border-b border-white/20 lg:grid-cols-2">
            {/* Left Contact Block */}
            <div className="flex min-h-[380px] flex-col justify-end border-b border-white/20 bg-[#181818] p-8 sm:p-12 md:p-12 lg:min-h-[460px] lg:border-b-0 lg:border-r">
              <h3 className="max-w-[600px] font-['Merriweather'] font-normal text-2xl leading-tight text-white sm:text-3xl md:text-[24px]">
                Let’s turn your idea into a digital experience that works for
                your business.
              </h3>

              <a
                href="mailto:hello@logo.com"
                className="mt-6 w-fit font-['Merriweather'] text-3xl text-gray-400 underline decoration-white/40 underline-offset-8 transition-colors hover:decoration-white sm:text-4xl md:text-[40px]"
              >
                hello@logo.com
              </a>
            </div>

            {/* Right Brand & Social Block */}
            <div className="flex min-h-[380px] flex-col justify-between p-8 sm:p-4 md:p-12 lg:min-h-[460px]">
              {/* Logo & Tagline */}
              <div>
                <a href="#home" className="inline-block">
                  <h2 className="font-['Merriweather'] text-3xl uppercase tracking-tight text-white sm:text-4xl">
                    LOGO
                  </h2>
                </a>

                <p className="mt-4 max-w-[320px] font-['Inter'] text-[18px] leading-relaxed text-gray-100 sm:text-base">
                  Digital transformation for businesses ready to move forward.
                </p>
              </div>

              {/* Social Icons */}
              <div className="mt-10 grid grid-cols-6 gap-2 -mb-10">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    title={social.name}
                    className="group flex items-center justify-center py-3"
                  >
                    <img
                      src={social.icon}
                      alt=""
                      className="h-20 w-20 object-contain transition-transform duration-300 group-hover:scale-110"
                    />
                  </a>
                ))}
              </div>

              {/* Mobile Navigation */}
              <nav className="mt-8 flex flex-wrap font-['Inter'] items-center justify-center gap-x-6 gap-y-4 text-sm text-white/90 sm:text-base lg:hidden">
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

          {/* Desktop Navigation */}
          <nav className="hidden items-center text-[16px] text-white font-['Inter'] justify-between border-b border-white/20 lg:flex">
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
                className="flex-1 px-3 py-5 text-center text-sm font-medium text-white/80 transition-colors duration-300 hover:bg-white/[0.04] hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Bottom Horizontal Line */}
        <div className="bleed-line" />
      </footer>
    </div>
  );
}
