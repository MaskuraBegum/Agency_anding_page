
import { motion, useReducedMotion } from "motion/react";

const projects = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=700&auto=format&fit=crop&q=80",
    title: "Project 1",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=700&auto=format&fit=crop&q=80",
    title: "Project 2",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=700&auto=format&fit=crop&q=80",
    title: "Project 3",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=700&auto=format&fit=crop&q=80",
    title: "Project 4",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=700&auto=format&fit=crop&q=80",
    title: "Project 5",
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=700&auto=format&fit=crop&q=80",
    title: "Project 6",
  },
  {
    id: 7,
    image: "https://images.unsplash.com/photo-1487014679447-9f8336841d58?w=700&auto=format&fit=crop&q=80",
    title: "Project 7",
  },
  {
    id: 8,
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=700&auto=format&fit=crop&q=80",
    title: "Project 8",
  },
  {
    id: 9,
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=700&auto=format&fit=crop&q=80",
    title: "Project 9",
  },
];

export default function WorkShowcase() {
  const prefersReducedMotion = useReducedMotion();

  // Duplicate projects to create the continuous scrolling effect.
  const gallery = [...projects, ...projects];

  return (
    <section
      id="work"
      className="bg-black text-white"
    >
      {/* Heading */}
      <div className="mx-auto flex max-w-[1237px] flex-col items-center border-t border-white/20 px-5 pb-8 pt-16 text-center sm:pb-10 sm:pt-20 lg:pb-16 lg:pt-24">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-slate-700/70 px-1.5 py-1 text-xs uppercase leading-none"
        >
          Work Showcase
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-6 max-w-full font-serif text-4xl leading-tight tracking-tight sm:mt-7 sm:text-5xl lg:text-[52px]"
        >
          Some of Our Recent Projects
        </motion.h2>
      </div>

      {/* Infinite scrolling gallery */}
      <div className="mx-auto max-w-[1237px] overflow-hidden border-y border-white/20">
        <motion.div
          className="flex w-max gap-[22px]"
          animate={
            prefersReducedMotion ? { x: 0 } : { x: ["0%", "-50%"] }
          }
          transition={
            prefersReducedMotion
              ? { duration: 0 }
              : {
                  duration: 35,
                  ease: "linear",
                  repeat: Infinity,
                  repeatType: "loop",
                }
          }
        >
          {gallery.map((project, index) => (
            <div
              key={`${project.id}-${index}`}
              className="h-[300px] w-[230px] shrink-0 overflow-hidden bg-[#171717] sm:h-[380px] sm:w-[280px] lg:h-[393px] lg:w-[310px]"
            >
              <img
                src={project.image}
                alt={project.title}
                loading={index < 5 ? "eager" : "lazy"}
                draggable="false"
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
              />
            </div>
          ))}
        </motion.div>
        
      </div>
      <div className="bleed-line" />
    </section>
  );
}
