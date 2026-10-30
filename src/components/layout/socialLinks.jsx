import React from "react";

const socialLinks = [
  { name: "Dribbble", icon: "🏀", href: "#" },
  { name: "Instagram", icon: "📸", href: "#" },
  { name: "Behance", icon: "🎨", href: "#" },
  { name: "Linkedin", icon: "💼", href: "#" },
  { name: "Facebook", icon: "👍", href: "#" },
  { name: "X (Twitter)", icon: "𝕏", href: "#" },
];

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact Us", href: "#cta" },
];

export default function FooterSection() {
  return (
    <div id="socials" className="scroll-mt-[70px]">
      <footer className="bg-black text-white overflow-hidden">
        <div className="mx-auto max-w-[1237px] border-x border-white/20">

          {/* Top Horizontal Grid Line Extension */}
          <div className="h-px w-full lg:w-[1290px] bg-white/20 mx-0 lg:-mx-24" />

          {/* Main Footer Block: 2 Columns */}
          <div className="grid grid-cols-1 lg:grid-cols-2 border-b border-white/20">
            
            {/* Left Dark Card Block */}
            <div className="bg-[#181818] p-8 sm:p-12 md:p-12 flex flex-col justify-end min-h-[380px] lg:min-h-[460px] border-b lg:border-b-0 lg:border-r border-white/20">
              <h3 className="font-serif text-2xl sm:text-3xl md:text-[28px] leading-tight text-white max-w-[480px]">
                Let’s turn your idea into a digital experience that works for your business.
              </h3>
              <a
                href="mailto:hello@logo.com"
                className="mt-6 font-serif text-3xl sm:text-4xl md:text-[40px] text-gray-200 underline underline-offset-8 decoration-white/40 hover:decoration-white transition-colors w-fit"
              >
                hello@logo.com
              </a>
            </div>

            {/* Right Brand & Nav Block */}
            <div className="p-8 sm:p-4 md:p-12 flex flex-col justify-between min-h-[380px] lg:min-h-[460px]">
              {/* Logo & Tagline */}
              <div>
                <a href="#home" className="inline-block">
                  <h2 className="font-serif text-3xl sm:text-4xl tracking-tight text-white uppercase">
                    LOGO
                  </h2>
                </a>
                <p className="mt-4 text-sm sm:text-base text-white/80 max-w-[320px] leading-relaxed">
                  Digital transformation for businesses ready to move forward.
                </p>
              </div>

              {/* Navigation Links with Proper Section Anchors */}
              {/* Navigation Links with Proper Section Anchors */}
<nav className="mt-12 grid grid-cols-3 gap-x-4 gap-y-3 text-sm sm:text-base text-white/90 lg:flex lg:flex-wrap lg:items-center lg:gap-x-6">
  {navLinks.map((link) => (
    <a
      key={link.label}
      href={link.href}
      className="hover:text-white transition-colors"
    >
      {link.label}
    </a>
  ))}
</nav>
            </div>

          </div>

          {/* Social Links Grid with Full Vertical Borders */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 border-b border-white/20">
            {socialLinks.map((social, index) => {
              const isLastInRow = (index + 1) % 3 === 0;
              const isTopRow = index < 3;

              return (
                <a
                  key={social.name}
                  href={social.href}
                  className={`flex items-center justify-center gap-3 py-4 px-6 transition-colors hover:bg-white/5 border-white/20 ${
                    isTopRow ? "border-b" : ""
                  } ${
                    !isLastInRow ? "border-r" : ""
                  }`}
                >
                  <span className="flex size-8 items-center justify-center rounded bg-white/10 text-xs font-light text-white shrink-0">
                    {social.icon}
                  </span>
                  <span className="text-base font-medium text-white">
                    {social.name}
                  </span>
                </a>
              );
            })}
          </div>

        </div>
      </footer>

      {/* Bottom Horizontal Grid Line Extension */}
      <div className="mx-auto max-w-[1237px]">
        <div className="h-px w-full lg:w-[1290px] bg-white/20 mx-0 lg:-mx-24" />
      </div>
    </div>
  );
}