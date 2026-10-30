
import { motion } from "motion/react";
import {
  Video,
  Palette,
  Rocket,
  BarChart3,
  Workflow,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Strategy & Discovery",
    description:
      "We learn about your business, users, goals, and challenges to create a clear strategy and project roadmap.",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1000&q=85",
    tools: [
      { name: "Meet", icon: Video },
      { name: "Slack", label: "S" },
    ],
  },
  {
    number: "02",
    title: "Design & Development",
    description:
      "We turn strategy into thoughtful designs and reliable digital solutions, with clear communication throughout.",
    image:
      "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1000&q=85",
    tools: [
      { name: "Figma", icon: Palette },
      { name: "Workflow", icon: Workflow },
    ],
  },
  {
    number: "03",
    title: "Launch & Optimize",
    description:
      "We test, refine, and launch your project with a focus on performance, usability, and long-term growth.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=85",
    tools: [
      { name: "Launch", icon: Rocket },
      { name: "Analytics", icon: BarChart3 },
    ],
  },
];

function ToolBadge({ tool, className = "" }) {
  const Icon = tool.icon;

  return (
    <div
      title={tool.name}
      className={`absolute z-10 flex size-12 items-center justify-center rounded-full bg-white text-black shadow-lg sm:size-[50px] ${className}`}
    >
      {Icon ? (
        <Icon size={23} strokeWidth={2.2} />
      ) : (
        <span className="text-xl font-bold text-emerald-500">
          {tool.label}
        </span>
      )}
    </div>
  );
}

function ProcessCard({ step, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      className="min-w-0 border-b border-white/20 lg:border-b-0 lg:border-r lg:last:border-r-0"
    >
      {/* Image panel */}
      <div className="relative flex h-[230px] items-center justify-center overflow-hidden bg-[linear-gradient(180deg,#073b91_0%,#0789b7_50%,#071015_100%)] px-8 sm:h-[270px] lg:h-[256px]">
        <img
          src={step.image}
          alt={`${step.title} preview`}
          loading="lazy"
          className="h-[78%] w-[88%] rounded-[3px] object-cover shadow-xl"
        />

        {/* Subtle image overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10" />

        {/* Floating tool icons */}
        <ToolBadge tool={step.tools[0]} className="left-[5%] top-[8%]" />
        <ToolBadge tool={step.tools[1]} className="bottom-[12%] right-[7%]" />
      </div>

      {/* Step details */}
      <div className="px-6 py-7 text-center sm:px-8 sm:py-8 lg:min-h-[200px] lg:px-6">
        <p className="text-sm text-white/75">
          STEP {step.number}
        </p>

        <h3 className="mt-3 text-lg font-medium tracking-tight">
          {step.title}
        </h3>

        <p className="mx-auto mt-3 max-w-[360px] text-[15px] leading-[1.5] text-white/80">
          {step.description}
        </p>
      </div>
    </motion.article>
  );
}

export default function ProcessSection() {
  return (
    <section id="process" className="bg-black text-white">
      <div className="mx-auto max-w-[1237px]">
        {/* Heading */}
        <div className="flex flex-col items-center border-b border-white/20 px-5 pb-12 pt-16 text-center sm:pb-16 sm:pt-20 lg:pb-[78px] lg:pt-[90px]">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-slate-700/70 px-1.5 py-1 text-xs uppercase leading-none"
          >
            How We Work
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-8 max-w-[700px] font-serif text-4xl leading-[1.12] tracking-tight sm:text-5xl lg:text-[52px]"
          >
            From Digital Challenge to
            <br className="hidden sm:block" /> Scalable Solution
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 max-w-[650px] text-[15px] leading-relaxed text-white/80 sm:text-base"
          >
            A clear process keeps complex projects focused, transparent, and
            moving forward
          </motion.p>
        </div>

        {/* Three process steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <ProcessCard
              key={step.number}
              step={step}
              index={index}
            />
          ))}
        </div>
      </div>

      {/* Bottom divider */}
      <div className="h-px w-full bg-white/20" />
    </section>
  );
}
