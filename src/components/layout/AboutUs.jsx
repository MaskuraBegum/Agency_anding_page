
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, X, CheckCircle2 } from "lucide-react";

// Replace this with your actual Google Form responder URL
const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSei64i0y7IMQl9JlE9cP-StTMGTM8X8bGvRPvpOSixo_Nh5Vg/viewform?usp=publish-editor";

const principles = [
  {
    number: "01",
    title: "Business First",
    description:
      "Every technical decision starts with the business problem we're solving.",
  },
  {
    number: "02",
    title: "Built to Scale",
    description:
      "We create flexible digital foundations designed to support future growth.",
  },
  {
    number: "03",
    title: "Performance by Default",
    description:
      "Speed, usability, accessibility, and technical quality are built into the process, not added at the end.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function AboutUs() {
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);

  // Open Google Form instead of opening the contact modal
  const handleOpenContact = () => {
    setIsAboutModalOpen(false);
    window.open(GOOGLE_FORM_URL, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="about" className="relative bg-black text-white">
      <div className="mx-auto grid max-w-[1237px] grid-cols-1 lg:grid-cols-2">

        {/* Left: About content */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex min-h-[600px] flex-col items-center border-b border-white/20 bg-[linear-gradient(180deg,#073b91_0%,#087da7_38%,#07566b_68%,#001014_100%)] px-6 py-10 text-center sm:px-10 sm:py-12 lg:min-h-[858px] lg:items-start lg:border-b-0 lg:border-r lg:border-white/20 lg:px-10 lg:py-10 lg:text-left"
        >
          <span className="bg-black px-1.5 py-1 text-xs uppercase leading-none">
            About Us
          </span>

          <h2 className="mt-8 max-w-[510px] font-serif text-3xl leading-[1.12] tracking-tight sm:text-4xl lg:text-[40px]">
            <span className="text-white">
              We transform outdated digital systems into fast, intuitive, and
            </span>{" "}
            <span className="text-[#07566b]">scalable experiences.</span>
          </h2>

          <p className="mt-7 max-w-[510px] font-serif text-3xl leading-[1.12] tracking-tight text-[#07566b] sm:text-4xl lg:text-[40px]">
            By combining strategy, design, engineering, and performance, we
            build digital solutions that work better for your business and your
            users.
          </p>

          <button
            type="button"
            onClick={() => setIsAboutModalOpen(true)}
            className="mt-12 inline-flex cursor-pointer items-center gap-2 border border-white/70 px-5 py-3 text-sm transition-colors hover:bg-white hover:text-black"
          >
            More About Us
            <ArrowRight className="size-4" />
          </button>
        </motion.div>

        {/* Right: Principles */}

        <div className="flex flex-col justify-between gap-12 px-6 py-10 sm:px-10 sm:py-12 lg:min-h-[858px] lg:gap-8 lg:px-10 lg:py-10">
          {principles.map((principle, index) => (
            <motion.article
              key={principle.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`mx-auto flex max-w-[320px] flex-col items-center text-center lg:mx-0 lg:items-start lg:text-left ${
                index === 1 ? "lg:self-center" : ""
              } ${index === 2 ? "lg:self-start" : ""}`}
            >
              <div className="relative flex size-[70px] items-center justify-center bg-white/[0.06] font-serif text-[40px] leading-none">
                {principle.number}

                {/* Corner marks */}

                <span className="absolute left-0 top-0 h-2 w-2 border-l border-t border-white/70" />
                <span className="absolute right-0 top-0 h-2 w-2 border-r border-t border-white/70" />
                <span className="absolute bottom-0 left-0 h-2 w-2 border-b border-l border-white/70" />
                <span className="absolute bottom-0 right-0 h-2 w-2 border-b border-r border-white/70" />
              </div>

              <h3 className="mt-6 text-base font-medium">
                {principle.title}
              </h3>

              <p className="mt-3 text-[15px] leading-[1.5] text-white/75">
                {principle.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>

      <div className="bleed-line" />

      {/* About Us Modal */}

      <AnimatePresence>
        {isAboutModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            {/* Modal backdrop */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsAboutModalOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />

            {/* Modal content */}

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 w-full max-w-2xl border border-white/20 bg-[#0a0a0a] p-8 text-white shadow-2xl sm:p-10"
            >
              <button
                type="button"
                onClick={() => setIsAboutModalOpen(false)}
                className="absolute right-6 top-6 cursor-pointer rounded-full bg-white/10 p-2 transition-colors hover:bg-white/20"
                aria-label="Close modal"
              >
                <X className="size-5" />
              </button>

              <span className="bg-[#07566b] px-2 py-1 text-xs font-medium uppercase leading-none">
                Our Story & Vision
              </span>

              <h3 className="mt-6 font-serif text-2xl tracking-tight sm:text-3xl">
                Empowering businesses through next-generation web engineering.
              </h3>

              <div className="mt-4 space-y-4 text-sm leading-relaxed text-white/80 sm:text-base">
                <p>
                  Founded with a clear mission to bridge the gap between design
                  and high-performance engineering, our team helps
                  forward-thinking companies modernize their digital
                  architecture.
                </p>

                <p>
                  We don’t just write code—we analyze your core business
                  workflow to eliminate friction, optimize conversion funnels,
                  and ensure your web assets remain lightweight, accessible,
                  and ready for rapid scaling.
                </p>
              </div>

              <div className="mt-8 flex justify-end">
                <button
                  type="button"
                  onClick={handleOpenContact}
                  className="inline-flex cursor-pointer items-center gap-2 bg-white px-5 py-3 text-sm font-medium text-black transition-colors hover:bg-white/90"
                >
                  Let’s Work Together
                  <ArrowRight className="size-4" />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
