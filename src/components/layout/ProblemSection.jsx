
import { motion } from "motion/react";
import {
  Gauge,
  Palette,
  Workflow,
  UsersRound,
  Smartphone,
  ArrowRight,
} from "lucide-react";

const problems = [
  {
    icon: Gauge,
    title: "Slow Website",
    description:
      "Slow pages frustrate users, increase drop-offs, and can cost you valuable customers and business opportunities.",
  },
  {
    icon: Palette,
    title: "Outdated Design",
    description:
      "Your business has grown, but your digital experience no longer reflects your brand, services, or customer expectations.",
  },
  {
    icon: Workflow,
    title: "Complex Systems",
    description:
      "Hard-to-manage technology makes updates slower, harder, and more expensive.",
  },
  {
    icon: UsersRound,
    title: "Low Conversions",
    description:
      "People visit your website, but unclear messaging and poor user journeys can stop them from taking the next step.",
  },
  {
    icon: Smartphone,
    title: "Poor Mobile Experience",
    description:
      "Your website may look good on desktop but still frustrate mobile users with difficult navigation, slow loading, or poor usability.",
  },
];

const cardAnimation = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

function ProblemCard({ icon: Icon, title, description }) {
  return (
    <motion.article
      variants={cardAnimation}
      className="min-w-0 border-b border-white/20 p-6 sm:p-7 lg:p-[30px]"
    >
      <div className="relative flex size-[50px] items-center justify-center bg-white/[0.06]">
        <Icon
          size={25}
          strokeWidth={1.4}
          className="text-blue-500"
          aria-hidden="true"
        />

        {/* Four corner details */}
        <span className="absolute left-0 top-0 h-1.5 w-1.5 border-l border-t border-white/70" />
        <span className="absolute right-0 top-0 h-1.5 w-1.5 border-r border-t border-white/70" />
        <span className="absolute bottom-0 left-0 h-1.5 w-1.5 border-b border-l border-white/70" />
        <span className="absolute bottom-0 right-0 h-1.5 w-1.5 border-b border-r border-white/70" />
      </div>

      <h3 className="mt-7 text-lg font-medium tracking-tight">
        {title}
      </h3>

      <p className="mt-3 max-w-[340px] text-[15px] leading-[1.5] text-white/80">
        {description}
      </p>
    </motion.article>
  );
}

export default function ProblemSection() {
  return (
    <section className="bg-black text-white mt-0 mid:-m4">
        <div className="h-px w-full lg:w-[1290px] bg-white/20 mx-0 lg:-mx-24" />
      <div className="mx-auto max-w-[1237px] border-x border-white/20">
        {/* Heading */}
        <div className="flex flex-col items-center px-5 pb-12 pt-16 text-center sm:pb-16 sm:pt-20 lg:pb-[76px] lg:pt-[90px]">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-slate-700/70 px-1.5 py-1 text-xs uppercase leading-none"
          >
            Does This Sound Familiar?
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-8 max-w-[850px] font-serif text-4xl leading-[1.12] tracking-tight sm:text-5xl lg:text-[52px]"
          >
            Your Digital Infrastructure
            <br className="hidden sm:block" /> Shouldn’t Hold Your Business Back
          </motion.h2>
        </div>

        {/* Problem cards and CTA */}
        <motion.div
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 border-t border-white/20 sm:grid-cols-2 lg:grid-cols-3"
        >
          {problems.map((problem) => (
            <ProblemCard key={problem.title} {...problem} />
          ))}

          {/* CTA card */}
          <motion.div
            variants={cardAnimation}
            className="flex min-h-[245px] flex-col justify-between bg-[linear-gradient(160deg,#073b91_0%,#0784b7_45%,#001014_100%)] p-6 sm:p-7 lg:p-[30px]"
          >
            <div>
              <h3 className="text-lg font-medium leading-snug">
                Ready to Fix What’s Holding You Back?
              </h3>

              <p className="mt-3 text-[15px] leading-[1.5] text-white/95">
                Let’s identify the gaps, improve the experience, and build a
                digital foundation ready for growth.
              </p>
            </div>

            <a
              href="#contact"
              className="mt-8 inline-flex w-full items-center justify-center gap-2 bg-white px-4 py-3 text-center text-sm font-medium tracking-tight text-black transition-colors hover:bg-white/85"
            >
              Let’s Improve Your Digital Experience
              <ArrowRight className="size-4 shrink-0" />
            </a>
          </motion.div>
        </motion.div>
      </div>
      <div className="h-px w-full lg:w-[1290px] bg-white/20 mx-0 lg:-mx-24" />
    </section>
  );
}
