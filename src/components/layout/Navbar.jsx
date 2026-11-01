import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, Menu, X } from "lucide-react";
import { frame, inset } from "./layout"; // adjust the path to where layout.js lives

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "FAQ", href: "#faq" },
];

const CONTACT_URL = "https://forms.gle/your-google-form-link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState("home");

  // Track which section is in view and mark its nav link as active
  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.href.slice(1)))
      .filter(Boolean);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      // A section becomes active when it crosses the middle band of the screen
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed left-0 top-0 z-50 w-full bg-black text-white">
      <div className={`${frame} flex h-20 items-center justify-between`}>
        {/* Logo */}
        <a
          href="#home"
          className="font-['Merriweather'] text-2xl font-medium leading-none text-white"
        >
          LOGO
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-[26px] md:flex">
          {navLinks.map((link) => {
            const isActive = activeId === link.href.slice(1);

            return (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setActiveId(link.href.slice(1))}
                aria-current={isActive ? "page" : undefined}
                className={`relative py-1 font-['Inter'] text-base font-medium tracking-[-0.5px] transition-colors hover:text-white ${
                  isActive ? "text-white" : "text-white/75"
                }`}
              >
                {link.label}

                {/* Active underline (slides between links) */}
                {isActive && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-0.5 left-0 h-px w-full bg-white"
                    transition={{ type: "spring", stiffness: 500, damping: 40 }}
                  />
                )}
              </a>
            );
          })}

          <a
            href={CONTACT_URL}
            target="_blank"
            rel="noreferrer"
            className="flex h-[42px] w-36 items-center justify-center gap-2 bg-gradient-to-b from-[#4a5cf0] to-[#2b8cf5] font-['Inter'] text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            Let's Talk
            <ArrowRight size={17} />
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="flex h-10 w-10 items-center justify-center text-white md:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="absolute left-0 top-full w-full overflow-hidden border-b border-white/10 bg-[#031b19] md:hidden"
          >
            <div className={`${frame} ${inset} flex flex-col gap-5 py-6`}>
              {navLinks.map((link) => {
                const isActive = activeId === link.href.slice(1);

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => {
                      setActiveId(link.href.slice(1));
                      setMenuOpen(false);
                    }}
                    aria-current={isActive ? "page" : undefined}
                    className={`w-fit border-b py-0.5 font-['Inter'] text-base transition-colors hover:text-white ${
                      isActive
                        ? "border-white text-white"
                        : "border-transparent text-white/80"
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}

              <a
                href={CONTACT_URL}
                target="_blank"
                rel="noreferrer"
                onClick={() => setMenuOpen(false)}
                className="flex h-11 w-full items-center justify-center gap-2 bg-gradient-to-b from-[#4a5cf0] to-[#2b8cf5] font-['Inter'] text-sm font-medium text-white"
              >
                Let's Talk
                <ArrowRight size={17} />
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}