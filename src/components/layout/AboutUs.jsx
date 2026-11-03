import { useState, useRef, useEffect, useLayoutEffect, Fragment } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight } from "lucide-react";
import { frame3 } from "./layout";

// Static colours used before the click (and the blue end of the gradient)
const DIM = "#115A7C";
const WHITE_HEX = "#FFFFFF";

const BLUE = [17, 90, 124]; // #115A7C
const WHITE = [255, 255, 255];

// Position inside the visible box: 0 = top, 1 = bottom
const WHITE_UNTIL = 0.12; // only the first line or so is fully white
const BLUE_FROM = 0.32; // from here down the text is fully blue

// How far (px) the box must scroll before the heading's white text
// starts following the gradient. Keeps the top identical to "before click".
const HOLD_PX = 90;

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

const stats = [
  { value: "100+", label: "Project Completed" },
  { value: "14+", label: "Businesses Supported" },
  { value: "44%", label: "Performance Improvement" },
  { value: "4+", label: "Years of Experience" },
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

// One shared text style for the heading, intro paragraph and expanded paragraphs.
const ABOUT_TEXT =
  "font-['Merriweather'] text-3xl font-normal leading-[1.15] tracking-tight sm:text-4xl lg:text-[36px]";

// Background of the whole left column
const ABOUT_BG =
  "linear-gradient(180deg, #002776 0%, #0382B4 38.46%, #010101 100%)";

/* ---------- Gradient helpers ---------- */

const clamp = (n) => Math.min(1, Math.max(0, n));

// 1 = white, 0 = blue, based on position in the box
function whiteness(t) {
  return 1 - clamp((t - WHITE_UNTIL) / (BLUE_FROM - WHITE_UNTIL));
}

function mix(w) {
  const c = WHITE.map((v, i) => Math.round(BLUE[i] + (v - BLUE[i]) * w));
  return `rgb(${c[0]}, ${c[1]}, ${c[2]})`;
}

// Splits text into words. `base` is the colour used before the click.
function Words({ children, base = WHITE_HEX }) {
  return children.split(" ").map((word, i) => (
    <Fragment key={i}>
      <span data-w data-base={base}>
        {word}
      </span>{" "}
    </Fragment>
  ));
}

export default function AboutUs() {
  const [isAboutExpanded, setIsAboutExpanded] = useState(false);
  const [lockedHeight, setLockedHeight] = useState(null);
  const aboutScrollRef = useRef(null);
  const expandedRef = useRef(false);
  expandedRef.current = isAboutExpanded;

  // Collapsed: every word gets its static colour.
  // Expanded: white at the top fading to blue at the bottom.
  const updateColors = () => {
    const box = aboutScrollRef.current;
    if (!box) return;

    const words = box.querySelectorAll("[data-w]");

    if (!expandedRef.current) {
      words.forEach((el) => {
        el.style.color = el.dataset.base;
      });
      return;
    }

    const boxRect = box.getBoundingClientRect();
    const height = boxRect.height || 1;

    // 1 at the very top of the scroll, fading to 0 after HOLD_PX
    const hold = 1 - clamp(box.scrollTop / HOLD_PX);

    words.forEach((el) => {
      const r = el.getBoundingClientRect();
      const t = (r.top + r.height / 2 - boxRect.top) / height;

      let w = whiteness(t);

      // Heading words that are white before the click stay white at the
      // top of the scroll, so the look is identical to the collapsed state.
      if (el.dataset.base === WHITE_HEX) w = Math.max(w, hold);

      el.style.color = mix(w);
    });
  };

  // Measure the collapsed height so the box never grows after the click
  const measure = () => {
    const box = aboutScrollRef.current;
    if (box && !expandedRef.current) {
      setLockedHeight(box.offsetHeight);
    }
  };

  useLayoutEffect(() => {
    measure();
    updateColors();
  }, []);

  // Re-colour while the expand / collapse animation runs
  useEffect(() => {
    let frame;
    const start = performance.now();

    const tick = (now) => {
      updateColors();
      if (now - start < 900) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [isAboutExpanded]);

  // Resize
  useEffect(() => {
    const onResize = () => {
      measure();
      updateColors();
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const toggleAbout = () => {
    if (isAboutExpanded) {
      setIsAboutExpanded(false);

      if (aboutScrollRef.current) {
        aboutScrollRef.current.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }
    } else {
      measure();
      setIsAboutExpanded(true);
    }
  };

  return (
    <section id="about" className="relative bg-black text-white">
      {/* Shared frame for About Us and Stats */}
      <div className={`${frame3} border-x border-white/20`}>
        {/* ================= ABOUT US SECTION ================= */}

        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left: About card */}
          <motion.div
  variants={fadeUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }}
  style={{ background: ABOUT_BG }}
  className="flex min-h-[660px] flex-col items-center border-white/20 px-6 py-10 text-center sm:px-10 sm:py-12 lg:min-h-[800px] lg:items-start lg:border-b-0 lg:border-r lg:px-10 lg:pb-10 lg:pt-10 lg:text-left"
>
            <span className="bg-black px-1.5 py-1 text-sm uppercase leading-none">
              About Us
            </span>

            {/* About content
                - Collapsed: overflow-hidden, so it cannot be scrolled.
                - Expanded: same height as collapsed, text scrolls inside,
                  and the page takes over at the top or bottom. */}
            <div
              ref={aboutScrollRef}
              onScroll={updateColors}
              style={
                isAboutExpanded && lockedHeight
                  ? { height: lockedHeight }
                  : undefined
              }
              className={`mt-8 w-full shrink-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${
                isAboutExpanded
                  ? "overflow-y-auto overscroll-auto"
                  : "overflow-hidden"
              }`}
            >
              {/* Intro heading: white, with the last part dimmed */}
              <h2 className={`max-w-[472px] ${ABOUT_TEXT}`}>
                <Words base={WHITE_HEX}>
                  We transform outdated digital systems into fast, intuitive,
                  and
                </Words>
                <Words base={DIM}>scalable experiences.</Words>
              </h2>

              {/* Intro paragraph */}
              <p className={`mt-7 max-w-[472px] ${ABOUT_TEXT}`}>
                <Words base={DIM}>
                  By combining strategy, design, engineering, and performance,
                  we build digital solutions that work better for your business
                  and your users.
                </Words>
              </p>

              {/* Additional content revealed on click */}
              <AnimatePresence>
                {isAboutExpanded && (
                  <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    transition={{ duration: 0.5 }}
                    className="mt-7 space-y-7 pb-6 text-left"
                  >
                    <p className={ABOUT_TEXT}>
                      <Words base={DIM}>
                        We believe great digital experiences start with
                        understanding the people and businesses behind them.
                        That's why we focus on solving real problems rather
                        than simply building websites.
                      </Words>
                    </p>

                    <p className={ABOUT_TEXT}>
                      <Words base={DIM}>
                        From thoughtful interface design to reliable backend
                        architecture, every part of our process is built around
                        clarity, performance, and long-term value.
                      </Words>
                    </p>

                    <p className={ABOUT_TEXT}>
                      <Words base={DIM}>
                        Our approach combines business strategy, creative
                        thinking, and engineering to create solutions that are
                        intuitive to use, easy to maintain, and ready to grow.
                      </Words>
                    </p>

                    <p className={ABOUT_TEXT}>
                      <Words base={DIM}>
                        We value clear communication, purposeful collaboration,
                        and continuous improvement throughout every project.
                        Every decision has a reason, and every detail matters.
                      </Words>
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Expand / Collapse button: smaller when it says "Show Less" */}
            <button
              type="button"
              onClick={toggleAbout}
              className={`inline-flex shrink-0 cursor-pointer items-center gap-2 border border-white/70 bg-white/5 text-white transition-all hover:bg-white hover:text-black ${
                isAboutExpanded
                  ? "mt-12 px-4 py-1.5 text-sm"
                  : "mt-12 px-8 py-3 text-lg"
              }`}
            >
              {isAboutExpanded ? "Show Less" : "More About Us"}

              <ArrowRight
                className={`size-4 transition-transform duration-300 ${
                  isAboutExpanded ? "rotate-90" : ""
                }`}
              />
            </button>
          </motion.div>

          {/* Right: Principles */}
          <div className="flex flex-col gap-8 px-6 py-10 sm:px-10 sm:py-12 lg:grid lg:min-h-[800px] lg:grid-rows-[235px_235px_1fr] lg:gap-0 lg:p-0">
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
                className={`flex flex-col items-center text-center lg:items-start lg:pr-6 lg:pt-10 lg:text-left ${principlePadding[index]}`}
              >
                <div className="relative flex size-[70px] shrink-0 items-center justify-center bg-[#111] font-['Merriweather'] text-[36px] leading-none">
                  {principle.number}

                  <span className="absolute left-0 top-0 h-2 w-2 border-l border-t border-white/70" />
                  <span className="absolute right-0 top-0 h-2 w-2 border-r border-t border-white/70" />
                  <span className="absolute bottom-0 left-0 h-2 w-2 border-b border-l border-white/70" />
                  <span className="absolute bottom-0 right-0 h-2 w-2 border-b border-r border-white/70" />
                </div>

                <h3 className="mt-5 text-[20px] font-normal font-body">
                  {principle.title}
                </h3>

                <p className="mt-2 max-w-[300px] text-sm leading-[1.5] text-gray-300 font-body">
                  {principle.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Existing divider */}
        <div className="bleed-line" />
      </div>
    </section>
  );
}