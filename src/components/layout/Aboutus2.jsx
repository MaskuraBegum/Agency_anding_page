
import { useState, useRef, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "motion/react";
import { ArrowRight, X } from "lucide-react";
import { frame3 } from "./layout";

const DIM = "#115A7C";
const WHITE = "#FFFFFF";

const FREE_OFFSET = ["start 10%", "start -30%"];
const PIN_DONE = 0.85;

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

const principlePadding = [
  "lg:pl-10",
  "lg:pl-[45%]",
  "lg:pl-10",
];

const aboutParagraphs = [
  "We believe great digital experiences start with understanding the people and businesses behind them. That's why we focus on solving real problems rather than simply building websites.",
  "From thoughtful interface design to reliable backend architecture, every part of our process is built around clarity, performance, and long-term value.",
  "Our approach combines business strategy, creative thinking, and engineering to create solutions that are intuitive to use, easy to maintain, and ready to grow.",
  "We value clear communication, purposeful collaboration, and continuous improvement throughout every project. Every decision has a reason, and every detail matters.",
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const ABOUT_TEXT =
  "font-['Merriweather'] text-2xl font-normal leading-[1.25] tracking-tight sm:text-4xl lg:text-[36px]";

const ABOUT_BG =
  "linear-gradient(180deg, #002776 0%, #0382B4 38.46%, #010101 100%)";

/* ---------- Scroll-driven words ---------- */

function Word({ word, index, total, progress }) {
  const start = (index / total) * 0.3;
  const end = start + 0.7;
  const color = useTransform(progress, [start, end], [DIM, WHITE]);

  return (
    <>
      <motion.span style={{ color }}>{word}</motion.span>{" "}
    </>
  );
}

function Words({ children, progress }) {
  const words = children.split(" ");

  return words.map((word, i) => (
    <Word
      key={i}
      word={word}
      index={i}
      total={words.length}
      progress={progress}
    />
  ));
}

/* ---------- About modal ---------- */

function AboutModal({ onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();

    window.addEventListener("keydown", onKey);

    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-3 sm:p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label="More about us"
    >
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.97 }}
        transition={{ duration: 0.25 }}
        onClick={(e) => e.stopPropagation()}
        style={{ background: ABOUT_BG }}
        className="relative max-h-[90dvh] w-full max-w-[640px] overflow-y-auto border border-white/20 p-5 text-white shadow-[0_30px_80px_rgba(0,0,0,0.7)] sm:p-10"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 text-white/70 transition-colors hover:text-white"
        >
          <X className="size-5" />
        </button>

        <span className="bg-black px-1.5 py-1 text-sm uppercase leading-none">
          About Us
        </span>

        <h3 className="mt-6 font-['Merriweather'] text-2xl leading-tight tracking-tight sm:text-3xl">
          Digital solutions built around your business
        </h3>

        <div className="mt-6 space-y-5">
          {aboutParagraphs.map((text) => (
            <p
              key={text}
              className="font-['Merriweather'] text-base leading-relaxed text-white/90 sm:text-lg"
            >
              {text}
            </p>
          ))}
        </div>

        <button
          type="button"
          onClick={onClose}
          className="mt-8 border border-white/70 bg-white/5 px-6 py-2.5 text-sm text-white transition-colors hover:bg-white hover:text-black"
        >
          Close
        </button>
      </motion.div>
    </motion.div>
  );
}

/* ---------- Main component ---------- */

export default function AboutUs2() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const trackRef = useRef(null);

  // Desktop breakpoint
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const update = () => setIsDesktop(mq.matches);

    update();
    mq.addEventListener("change", update);

    return () => mq.removeEventListener("change", update);
  }, []);

  // Desktop scroll progress
  const { scrollYProgress: pinProgress } = useScroll({
    target: trackRef,
    offset: ["start start", "end end"],
  });

  const pinColorProgress = useTransform(
    pinProgress,
    [0, PIN_DONE],
    [0, 1],
    { clamp: true }
  );

  // Mobile / tablet scroll progress
  const { scrollYProgress: freeProgress } = useScroll({
    target: trackRef,
    offset: FREE_OFFSET,
  });

  const progress = isDesktop ? pinColorProgress : freeProgress;

  return (
    <section id="about" className="relative bg-black text-white">
      <div
        ref={trackRef}
        className={`${frame3} border-x border-white/20`}
      >
        {/* Main content */}

        <div className="lg:sticky lg:top-0">
          <div className="grid grid-cols-1 lg:grid-cols-2">

            {/* Left: About card */}

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              style={{ background: ABOUT_BG }}
              className="
                flex flex-col items-center
                min-h-0
                border-white/20
                px-5 py-12
                text-center
                sm:px-8 sm:py-14
                md:px-12
                lg:min-h-[800px]
                lg:items-start
                lg:border-b-0 lg:border-r
                lg:px-10 lg:pb-10 lg:pt-10
                lg:text-left
              "
            >
              <span className="bg-black px-1.5 py-1 font-body text-14 font-normal uppercase leading-none tracking-[-0.5px]">
                About Us
              </span>

              <div className="mt-8 w-full">
                <h2
                  className={`mx-auto max-w-[472px] ${ABOUT_TEXT} lg:mx-0 text-left`}
                >
                  <span className="text-white ">
                    We transform outdated digital systems into fast, intuitive,
                    and{" "}
                  </span>
                  <Words progress={progress}>
                    scalable experiences.
                  </Words>
                </h2>

                <p
                  className={`mx-auto mt-6 max-w-[494px] sm:mt-7 ${ABOUT_TEXT} lg:mx-0 text-left`}
                >
                  <Words progress={progress}>
                    By combining strategy, design, engineering, and
                    performance, we build digital solutions that work better
                    for your business and your users.
                  </Words>
                </p>
              </div>

              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="
                  mt-9
                  inline-flex h-[41px] w-[168px]
                  shrink-0 cursor-pointer items-center justify-center
                  gap-2
                  border border-white/70 bg-white/5
                  px-3.5 pl-5 py-1
                  font-body text-[16px] font-medium
                  leading-[26px] tracking-[-1px]
                  text-white transition-colors
                  hover:bg-white hover:text-black
                  sm:mt-10
                  lg:mt-12 lg:justify-start
                "
              >
                More About Us
                <ArrowRight className="size-4 shrink-0" />
              </button>
            </motion.div>

            {/* Right: Principles */}

            <div
              className="
                flex flex-col
                gap-12
                px-5 py-12
                sm:gap-14 sm:px-8 sm:py-14
                md:px-12
                lg:grid lg:min-h-[800px]
                lg:grid-rows-[235px_235px_1fr]
                lg:gap-0 lg:p-0
              "
            >
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
                  className={`
                    flex flex-col items-center
                    text-center
                    lg:items-start lg:pr-6 lg:pt-10 lg:text-left
                    ${principlePadding[index]}
                  `}
                >
                  <div className="relative flex size-[64px] shrink-0 items-center justify-center bg-[#111] font-['Merriweather'] text-[32px] leading-none sm:size-[70px] sm:text-[36px]">
                    {principle.number}

                    <span className="absolute left-0 top-0 h-2 w-2 border-l border-t border-white/70" />
                    <span className="absolute right-0 top-0 h-2 w-2 border-r border-t border-white/70" />
                    <span className="absolute bottom-0 left-0 h-2 w-2 border-b border-l border-white/70" />
                    <span className="absolute bottom-0 right-0 h-2 w-2 border-b border-r border-white/70" />
                  </div>

                  <h3 className="mt-5 font-body text-[20px] font-normal">
                    {principle.title}
                  </h3>

                  <p className="mt-2 max-w-[300px] font-body text-sm leading-[1.5] text-gray-300">
                    {principle.description}
                  </p>
                </motion.article>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop-only scroll distance */}

        <div
          className="hidden h-[150vh] lg:block"
          aria-hidden="true"
        />

        <div className="bleed-line" />
      </div>

      {/* About modal */}

      <AnimatePresence>
        {isModalOpen && (
          <AboutModal onClose={() => setIsModalOpen(false)} />
        )}
      </AnimatePresence>
    </section>
  );
}
