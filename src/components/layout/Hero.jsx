import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  return (
    <section id="home" className="bg-black pt-[70px] h-screen">
      {/* Framed column with hairline borders, as in the design */}
      <div className="mx-auto max-w-[1040px] border-x border-white/10 max-lg:max-w-none max-lg:border-x-0">
        <div className="relative flex min-h-[calc(95svh-70px)] items-end overflow-hidden px-6 pb-10 sm:px-8 sm:pb-12 lg:px-10 lg:pb-16">
          {/* Animated gradient backdrop */}
          <div className="absolute inset-0 bg-[linear-gradient(180deg,#38f5e0_0%,#1ab0e8_38%,#0a2a9a_58%,#050c4a_75%,#030620_100%)]" />
          {/* Waving aurora: big blurred shapes that sweep, tilt and morph */}
          <motion.div
            aria-hidden
            className="absolute left-[-25%] top-[-10%] h-[85%] w-[90%] bg-[radial-gradient(closest-side,rgba(70,255,240,0.95),transparent)] blur-2xl"
            animate={{
              x: ["0%", "35%", "10%", "0%"],
              y: ["0%", "10%", "-8%", "0%"],
              scale: [1, 1.2, 0.95, 1],
              borderRadius: ["50% 50% 50% 50%", "60% 40% 55% 45%", "45% 55% 40% 60%", "50% 50% 50% 50%"],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            aria-hidden
            className="absolute left-[0%] top-[15%] h-[85%] w-[130%] bg-[radial-gradient(closest-side,rgba(8,30,170,1),rgba(8,30,170,0.7)_55%,transparent)] blur-2xl"
            animate={{
              x: ["-20%", "25%", "-30%", "-20%"],
              y: ["0%", "-12%", "6%", "0%"],
              rotate: [-12, 14, -18, -12],
              scale: [1, 1.15, 0.9, 1],
              borderRadius: ["55% 45% 60% 40%", "40% 60% 45% 55%", "60% 40% 50% 50%", "55% 45% 60% 40%"],
            }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            aria-hidden
            className="absolute right-[-30%] top-[-15%] h-[60%] w-[75%] bg-[radial-gradient(closest-side,rgba(90,255,235,0.8),transparent)] blur-3xl"
            animate={{ x: ["0%", "-40%", "0%"], y: ["0%", "25%", "0%"], rotate: [0, 25, 0] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-b from-transparent to-[#030620]/80" />

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="relative z-10 max-w-[620px]"
          >
            <motion.span
              variants={item}
              className="inline-block bg-white/15 px-1.5 py-0.5 text-xs uppercase tracking-wide backdrop-blur-sm text-white"
            >
              Design • Development • Growth
            </motion.span>

            <motion.h1
              variants={item}
              className="mt-4 font-serif leading-[1.1] w-90 md:w-3xl tracking-tight text-white text-3xl md:text-7xl"
            >
              Turn Digital Infrastructure Into Business Growth
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-5 max-w-[600px] text-[15px] leading-[1.45] text-white/90"
            >
              We design, develop, and optimize high-performance digital
              experiences that help ambitious businesses operate better,
              convert more customers, and scale with confidence.
            </motion.p>

            <motion.div variants={item} className="mt-6 flex flex-wrap gap-3">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="group flex items-center gap-2 bg-white px-4 py-2.5 text-sm font-medium text-black"
              >
                Book a Consultation
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </motion.a>
              <motion.a
                href="#work"
                whileHover={{ scale: 1.03, backgroundColor: "rgba(255,255,255,0.18)" }}
                whileTap={{ scale: 0.97 }}
                className="bg-white/10 px-4 py-2.5 text-sm font-medium backdrop-blur-sm text-white"
              >
                Explore Our Work
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}