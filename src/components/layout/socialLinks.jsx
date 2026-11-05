import { extBottom, frame2 } from "./layout";

import dribbble from "../../assets/Dribbble.png";
import instagram from "../../assets/Instagram.png";
import behance from "../../assets/Behance.png";
import linkedin from "../../assets/Linkedin.png";
import facebook from "../../assets/Facebook.png";
import x from "../../assets/X.png";

const socialLinks = [
  {
    name: "Dribbble",
    icon: dribbble,
    alt: "Dribbble logo representing our design portfolio",
    href: "#",
  },
  {
    name: "Instagram",
    icon: instagram,
    alt: "Instagram logo representing our social media profile",
    href: "#",
  },
  {
    name: "Behance",
    icon: behance,
    alt: "Behance logo representing our creative case studies",
    href: "#",
  },
  {
    name: "LinkedIn",
    icon: linkedin,
    alt: "LinkedIn logo representing our professional network",
    href: "#",
  },
  {
    name: "Facebook",
    icon: facebook,
    alt: "Facebook logo representing our community page",
    href: "#",
  },
  {
    name: "X (Twitter)",
    icon: x,
    alt: "X logo representing our official social channel",
    href: "#",
  },
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
      <footer className="overflow-x-clip bg-black text-white">
        <div className={`${frame2} ${extBottom}`}>
          {/* Main Footer */}
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left Contact Block */}
            <div className="flex min-h-[300px] flex-col justify-end border-b border-white/20 bg-[#181818] p-5 sm:min-h-[360px] sm:p-10 md:p-12 lg:min-h-[440px] lg:border-b-0 lg:border-r">
              <h3 className="max-w-[600px] font-['Merriweather'] text-[21px] font-normal leading-tight tracking-[-1px] text-white sm:text-[24px]">
                Let’s turn your idea into a digital experience that works for
                your business.
              </h3>

              <a
                href="mailto:hello@logo.com"
                className="mt-4 w-fit break-all font-['Merriweather'] text-[21px] font-normal text-[#A4A4A4] underline decoration-white/40 underline-offset-8 transition-colors hover:decoration-white sm:mt-5 sm:text-3xl md:text-4xl lg:text-[36px]"
              >
                hello@logo.com
              </a>
            </div>

            {/* Right Brand Block */}
            <div className="flex min-h-[300px] flex-col justify-between p-5 sm:min-h-[360px] sm:p-10 md:p-12 lg:min-h-[440px]">
              {/* Logo & Tagline */}
              <div>
                <a href="#home" className="inline-block">
                  <h2 className="font-['Merriweather'] text-[27px] font-medium uppercase tracking-tight text-white sm:text-[34px]">
                    LOGO
                  </h2>
                </a>

                <p className="mt-3 max-w-[320px] font-['Inter'] text-[14px] font-medium leading-[24px] tracking-[-0.5px] text-white sm:mt-4 sm:text-[18px] sm:leading-[28px] sm:tracking-[-1px]">
                  Digital transformation for businesses ready to move forward.
                </p>
              </div>

              {/* Navigation */}
              <nav className="mt-10 flex flex-wrap items-center justify-center gap-x-4 gap-y-3 font-['Inter'] text-[12px] font-medium leading-[22px] tracking-[-0.3px] text-[#CACACA] sm:mt-12 sm:gap-x-7 sm:gap-y-4 sm:text-[16px] sm:leading-[26px] sm:tracking-[-0.5px] lg:mt-10 lg:justify-between">
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
                    className="whitespace-nowrap transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>
          </div>

          {/* Social Links Grid */}
          <div className="grid grid-cols-2 border-t border-white/20 sm:grid-cols-3">
            {socialLinks.map((social, index) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                title={social.name}
                className={[
                  "group flex min-h-[60px] items-center justify-center gap-2 border-white/20 px-2 transition-colors hover:bg-white/[0.04] sm:min-h-[72px]",
                  index % 2 === 0 ? "border-r" : "",
                  index % 3 !== 2 ? "sm:border-r" : "",
                  index < 4 ? "border-b" : "border-b-0",
                  index < 3 ? "sm:border-b" : "sm:border-b-0",
                ].join(" ")}
              >
                <img
  src={social.icon}
  alt={social.alt}
  className={`h-10 w-10 shrink-0 object-contain transition-transform duration-300 sm:h-16 sm:w-14 group-hover:scale-110 ${
    social.name === "LinkedIn"
      ? "max-sm:-translate-x-1"
      : social.name === "X (Twitter)"
        ? "max-sm:translate-x-1"
        : ""
  }`}
/>

                <span className="font-body text-[12px] font-medium leading-[20px] text-white sm:text-[16px] sm:leading-[28px]">
                  {social.name}
                </span>
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}