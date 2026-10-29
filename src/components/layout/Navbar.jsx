
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Menu, X } from "lucide-react";

const links = ["Home", "About", "Services", "Work", "FAQ"];

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

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-md" : "bg-black"
      }`}
    >
      <nav className="mx-auto flex h-[70px] w-full max-w-[1140px] items-center justify-between px-6 sm:px-8 lg:px-12 ">
        {/* Text logo — replace with an image if you receive the actual logo */}
        <a
          href="#home"
          className="font-serif text-2xl tracking-tight text-white"
        >
          LOGO
        </a>

        {/* Desktop navigation */}
        <ul className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                onClick={() => setActive(link)}
                className={`relative text-sm transition-colors ${
                  active === link
                    ? "text-white"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {link}
                {active === link && (
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
              href="#contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="group flex items-center gap-2 bg-[#2f6bff] px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#4a7fff]"
            >
              Let's Talk
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </motion.a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="text-white md:hidden"
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Divider below navbar */}
      <div className="h-px w-full lg:w-[1290px] bg-white/20 mx-0 lg:mx-24" />

      {/* Mobile navigation */}
      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-b border-white/20 bg-black px-6 md:hidden"
          >
            {links.map((link) => (
              <li key={link} className="py-3">
                <a
                  href={`#${link.toLowerCase()}`}
                  onClick={() => {
                    setActive(link);
                    setOpen(false);
                  }}
                  className={
                    active === link ? "text-white" : "text-white/70"
                  }
                >
                  {link}
                </a>
              </li>
            ))}
            <li className="py-3">
              <a
                href="#contact"
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
