import { motion, useReducedMotion } from "motion/react";
import { frame, frame2, frame3, frame4, frame5, frame6 } from "./layout"// adjust the path to where layout.js lives

import project1 from "../../assets/projects/project1.png";
import project2 from "../../assets/projects/project2.png";
import project3 from "../../assets/projects/project3.png";
import project4 from "../../assets/projects/project4.png";
import project5 from "../../assets/projects/project5.png";
import project6 from "../../assets/projects/project6.png";
import project7 from "../../assets/projects/project7.png";
import project8 from "../../assets/projects/project8.png";
import project9 from "../../assets/projects/project9.png";

const projects = [
  {
    id: 1,
    image: project1,
    title: "SaaS dashboard web application project mockup",
    background: "linear-gradient(180deg, #975BFF 0%, #000000 100%)",
  },
  {
    id: 2,
    image: project2,
    title: "Fintech mobile and web platform interface design",
    background: "linear-gradient(180deg, #34D771 0%, #000000 103.06%)",
  },
  {
    id: 3,
    image: project3,
    title: "E-commerce digital storefront and brand layout",
    background: "linear-gradient(178.98deg, #FFF100 -1.89%, #000000 102.13%)",
  },
  {
    id: 4,
    image: project4,
    title: "Enterprise software solution landing page design",
    background: "linear-gradient(180deg, #3B50FF 0%, #000000 103.06%)",
  },
  {
    id: 5,
    image: project5,
    title: "Creative portfolio and brand showcase website",
    background: "linear-gradient(180deg, #FFCEA7 0%, #000000 100%)",
  },
  {
    id: 6,
    image: project6,
    title: "Analytics and data visualization dashboard project",
    background: "linear-gradient(180deg, #F4C152 0%, #000000 100%)",
  },
  {
    id: 7,
    image: project7,
    title: "Healthcare tech web platform user interface",
    background: "linear-gradient(180deg, #69D9FF 0%, #000000 100%)",
  },
  {
    id: 8,
    image: project8,
    title: "Real estate digital experience and listing layout",
    background: "linear-gradient(180deg, #FF7028 0%, #000000 100%)",
  },
  {
    id: 9,
    image: project9,
    title: "Web3 application interface and dashboard design",
    background: "linear-gradient(180deg, #772BFF 0%, #000000 103.06%)",
  },
];

export default function WorkShowcase() {
  const prefersReducedMotion = useReducedMotion();

  const gallery = [...projects, ...projects];

  return (
    <section id="work" className="relative overflow-x-clip bg-black text-white">
      {/* Heading (shared frame) */}
      <div
        className={`${frame3} flex flex-col items-center border-x border-white/20 px-5 pb-8 pt-16 text-center sm:pb-10 sm:pt-20 lg:pb-16 lg:pt-[100px]`}
      >
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-slate-700/70 px-1.5 py-1 font-body font-normal text-[11px] md:text-[14px] uppercase leading-none"
        >
          Work Showcase
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-6 max-w-full font-heading font-normal text-[24px] leading-tight tracking-tight sm:mt-7 sm:text-4xl lg:text-[48px]"
        >
          Some of Our Recent Projects
        </motion.h2>
      </div>

      {/* Infinite Scrolling Gallery: full-width lines, content clipped to the frame */}
     
      {/* Infinite Scrolling Gallery */}
      <div className="relative">
        <div className="pointer-events-none absolute left-1/2 top-0 z-30 h-px w-[1480px] -translate-x-1/2 bg-white/20" />

        <div className={`${frame2} overflow-hidden`}>
          <motion.div
            className="flex w-max gap-[22px]"
            animate={prefersReducedMotion ? { x: 0 } : { x: ["0%", "-50%"] }}
            transition={
              prefersReducedMotion
                ? { duration: 0 }
                : {
                    duration: 55,
                    ease: "linear",
                    repeat: Infinity,
                    repeatType: "loop",
                  }
            }
          >
            {gallery.map((project, index) => (
              <div
                key={`${project.id}-${index}`}
                className="relative aspect-[299.8/380] w-[220px] shrink-0 overflow-hidden sm:w-[260px] lg:w-[299.8px]"
                style={{ background: project.background }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  loading={index < 9 ? "eager" : "lazy"}
                  draggable="false"
                  className="absolute left-[8%] top-[6.31%] h-auto w-[84.1%] max-w-none select-none transition-transform duration-500 hover:scale-[1.02]"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}