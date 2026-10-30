import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Menu, X } from "lucide-react";

// Section navigation links matching exact IDs across your landing page
const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Work", href: "#work" },
  { name: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (linkName) => {
    setActive(linkName);
    setOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-md" : "bg-black"
      }`}
    >
      <nav className="mx-auto flex h-[70px] w-full max-w-[1140px] items-center justify-between px-6 sm:px-8 lg:px-12">
        {/* Text Logo */}
        <a
          href="#home"
          onClick={() => setActive("Home")}
          className="font-serif text-2xl tracking-tight text-white"
        >
          LOGO
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={() => handleNavClick(link.name)}
                className={`relative text-sm transition-colors ${
                  active === link.name
                    ? "text-white"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {link.name}
                {active === link.name && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 h-px w-full bg-white"
                  />
                )}
              </a>
            </li>
          ))}

          <li>
            <motion.a
              href="#socials"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="group flex items-center gap-2 bg-[#2f6bff] px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#4a7fff]"
            >
              Let's Talk
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </motion.a>
          </li>
        </ul>

        {/* Mobile Toggle Button */}
        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="text-white md:hidden"
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Grid Border Line Below Navbar */}
      <div className="h-px w-full lg:w-[1290px] bg-white/20 mx-0 lg:mx-28" />

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-b border-white/20 bg-black px-6 md:hidden"
          >
            {links.map((link) => (
              <li key={link.name} className="py-3">
                <a
                  href={link.href}
                  onClick={() => handleNavClick(link.name)}
                  className={
                    active === link.name ? "text-white" : "text-white/70"
                  }
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li className="py-3">
              <a
                href="#socials"
                onClick={() => setOpen(false)}
                className="inline-flex items-center gap-2 bg-[#2f6bff] px-4 py-2.5 text-sm font-medium text-white"
              >
                Let's Talk <ArrowRight className="size-4" />
              </a>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.header>
  );
}