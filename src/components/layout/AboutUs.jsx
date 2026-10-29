
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

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
  return (
    <section id="about" className="bg-black text-white">
      <div className="mx-auto grid max-w-[1237px] grid-cols-1 border-x border-white/20 lg:grid-cols-2">
        {/* Left: About content */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex min-h-[600px] flex-col items-start border-b border-white/20 bg-[linear-gradient(180deg,#073b91_0%,#087da7_38%,#07566b_68%,#001014_100%)] px-6 py-10 sm:px-10 sm:py-12 lg:min-h-[858px] lg:border-b-0 lg:border-r lg:border-white/20 lg:px-10 lg:py-10"
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

          <a
            href="#contact"
            className="mt-12 inline-flex items-center gap-2 border border-white/70 px-5 py-3 text-sm transition-colors hover:bg-white hover:text-black"
          >
            More About Us
            <ArrowRight className="size-4" />
          </a>
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
              className={`max-w-[320px] ${
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
      <div className="h-px w-full lg:w-[1290px] bg-white/20 mx-0 lg:-mx-24" />
    </section>
  );
}
