import { motion } from "motion/react";
import { frame2, extTop, extBottom, frame4 } from "./layout";

// Main process images
import sol1 from "../../assets/sol1.png";
import sol2 from "../../assets/sol2.png";
import sol3 from "../../assets/sol3.png";

// Seven floating logo images
import bubble1 from "../../assets/bubble1.png";
import bubble2 from "../../assets/bubble2.png";
import bubble3 from "../../assets/bubble3.png";
import bubble4 from "../../assets/bubble4.png";
import bubble5 from "../../assets/bubble5.png";
import bubble6 from "../../assets/bubble6.png";
import bubble7 from "../../assets/bubble7.png";

const steps = [
  {
    number: "01",
    title: "Strategy & Discovery",
    description:
      "We learn about your business, users, goals, and challenges to create a clear strategy and project roadmap.",
    image: sol1,
    bubbles: [
      { image: bubble1, position: "left-[5%] top-[10%]" },
      { image: bubble2, position: "right-[5%] bottom-[10%]" },
    ],
  },
  {
    number: "02",
    title: "Design & Development",
    description:
      "We turn strategy into thoughtful designs and reliable digital solutions, with clear communication throughout.",
    image: sol2,
    bubbles: [
      { image: bubble3, position: "left-[5%] top-[10%]" },
      { image: bubble5, position: "right-[5%] top-[42%]" },
      { image: bubble4, position: "left-[8%] bottom-[8%]" },
    ],
  },
  {
    number: "03",
    title: "Launch & Optimize",
    description:
      "We test, refine, and launch your project with a focus on performance, usability, and long-term growth.",
    image: sol3,
    bubbles: [
      { image: bubble7, position: "right-[5%] top-[35%]" },
      { image: bubble6, position: "left-[5%] bottom-[8%]" },
    ],
  },
];

/* ---------- Floating logos ---------- */

function FloatingLogo({ image, position }) {
  return (
    <img
      src={image}
      alt=""
      aria-hidden="true"
      loading="lazy"
      className={`absolute z-10 size-12 object-contain sm:size-[61px] ${position}`}
    />
  );
}

/* ---------- Process card ---------- */

function ProcessCard({ step, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.6,
        delay: index * 0.12,
      }}
      className="min-w-0  border-white/20 lg:border-b-0 lg:border-r lg:last:border-r-0"
    >
      {/* Image panel */}

      <div className="relative flex h-[230px] items-center justify-center overflow-hidden bg-[linear-gradient(180deg,#073b91_0%,#0789b7_50%,#071015_100%)] px-5 sm:h-[270px] sm:px-8 lg:h-[256px]">
        <img
          src={step.image}
          alt={`${step.title} preview`}
          loading="lazy"
          className="relative z-[1] h-[78%] w-[88%] object-cover"
        />

        {/* Image overlay */}

        <div className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-t from-black/20 via-transparent to-black/10" />

        {/* Floating logos */}

        {step.bubbles.map((bubble, bubbleIndex) => (
          <FloatingLogo
            key={bubbleIndex}
            image={bubble.image}
            position={bubble.position}
          />
        ))}
      </div>

      {/* Step details */}

      <div className="px-6 py-7 text-center sm:px-8 sm:py-8 lg:min-h-[200px] lg:px-6">
        <p className="text-sm font-normal text-white/75">
          STEP {step.number}
        </p>

        <h3 className="mt-5 text-lg font-medium tracking-tight text-white">
          {step.title}
        </h3>

        <p className="mx-auto mt-3 max-w-[360px] text-[15px] leading-[1.5] text-white/80">
          {step.description}
        </p>
      </div>
    </motion.article>
  );
}

/* ---------- Process section ---------- */

export default function ProcessSection() {
  return (
    <section
      id="process"
      className="overflow-x-clip bg-black font-['Inter'] text-white"
    >
      {/* frame2 = vertical borders only. The extended line at the top comes
          from the end of ProblemSection, so it isn't drawn twice. */}
      <div className={frame2}>
        {/* Heading */}

        <div className="flex flex-col items-center px-5 pb-12 pt-16 text-center sm:pb-16 sm:pt-20 lg:pb-[78px] lg:pt-[100px]">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-slate-700/70 px-1.5 py-1 text-[14px] uppercase leading-none"
          >
            How We Work
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 max-w-[700px] font-['Merriweather'] text-3xl leading-[1.12] tracking-tight sm:text-5xl lg:text-[48px]"
          >
            From Digital Challenge to
            <br className="hidden sm:block" /> Scalable Solution
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 max-w-[650px] font-['Inter'] text-[15px] leading-relaxed text-white/80 sm:text-base"
          >
            A clear process keeps complex projects focused, transparent, and
            moving forward.
          </motion.p>
        </div>

        {/* Process cards: extended line before and after the grid */}

        <div
          className={`${extTop} ${extBottom} grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`}
        >
          {steps.map((step, index) => (
            <ProcessCard key={step.number} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}