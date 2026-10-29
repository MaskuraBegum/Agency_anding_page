
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

const services = [
  {
    number: "01",
    title: "UI/UX Engineering & Redesign",
    description:
      "We combine user-centered design with frontend engineering to create interfaces that look refined, feel effortless, and support your business goals.",
    includes: [
      "UX Research",
      "Information Architecture",
      "Wireframes",
      "UI Design",
      "Responsive Design",
      "Frontend Implementation",
    ],
    image: "", // Add your project image path here
  },
];

function NumberBadge({ number }) {
  return (
    <div className="relative flex size-[50px] items-center justify-center bg-white/10 font-serif text-3xl">
      {number}
      <span className="absolute left-0 top-0 h-2 w-2 border-l border-t border-white/70" />
      <span className="absolute right-0 top-0 h-2 w-2 border-r border-t border-white/70" />
      <span className="absolute bottom-0 left-0 h-2 w-2 border-b border-l border-white/70" />
      <span className="absolute bottom-0 right-0 h-2 w-2 border-b border-r border-white/70" />
    </div>
  );
}

export default function ServicesSection() {
  return (
    <section id="services" className="bg-black text-white">
      <div className="mx-auto max-w-[1237px] border-x border-white/20">
        {/* Section heading */}
        <div className="border-b border-white/20 px-6 py-16 sm:px-8 sm:py-20 lg:px-[42px] lg:pb-[86px] lg:pt-[90px]">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block bg-slate-700/70 px-1.5 py-1 text-xs uppercase leading-none">
              What We Do
            </span>

            <h2 className="mt-8 max-w-[760px] font-serif text-4xl leading-[1.1] tracking-tight sm:text-5xl lg:text-[52px]">
              Everything You Need to Build
              <br className="hidden sm:block" /> Digital That Performs
            </h2>

            <p className="mt-5 max-w-[570px] text-[15px] leading-[1.5] text-white/80 sm:text-base">
              From a complete redesign to deep technical optimization, we
              solve digital challenges across strategy, experience, and
              engineering.
            </p>
          </motion.div>
        </div>

        {/* Service cards */}
        {services.map((service) => (
          <motion.article
            key={service.number}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.65 }}
            className="grid border-b border-white/20 bg-[linear-gradient(165deg,#073b91_0%,#0788b8_36%,#004451_70%,#02090c_100%)] lg:min-h-[495px] lg:grid-cols-[1.15fr_0.85fr]"
          >
            {/* Text content */}
            <div className="flex flex-col items-start px-6 py-8 sm:px-8 sm:py-10 lg:px-[42px] lg:py-[42px]">
              <NumberBadge number={service.number} />

              <h3 className="mt-7 font-serif text-2xl leading-tight tracking-tight sm:text-3xl">
                {service.title}
              </h3>

              <p className="mt-3 max-w-[600px] text-[15px] leading-[1.5] text-white/95 sm:text-base">
                {service.description}
              </p>

              <div className="mt-3">
                <p className="text-sm">Includes:</p>
                <ul className="mt-1 list-disc space-y-1 pl-[22px] text-sm leading-[1.45] text-white/95 sm:text-[15px]">
                  {service.includes.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <a
                href="#contact"
                className="group mt-8 inline-flex min-h-[44px] w-full max-w-[422px] items-center justify-center gap-2 border border-white/70 bg-white/[0.06] px-4 py-2.5 text-sm font-medium transition-colors hover:bg-white hover:text-black sm:mt-10"
              >
                Improve My Experience
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            {/* Image area */}
            <div className="flex items-center justify-center px-6 pb-8 sm:px-8 lg:px-8 lg:py-10">
              <div className="aspect-[1.05/1] w-full max-w-[440px] overflow-hidden bg-black/20 sm:aspect-[1.1/1] lg:aspect-[0.95/1]">
                {service.image ? (
                  <img
                    src={service.image}
                    alt={`${service.title} project preview`}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center border border-white/10 text-sm text-white/50">
                    <img src="./src/assets/hero.png"></img>
                  </div>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
      <div className="h-px w-full lg:w-[1290px] bg-white/20 mx-0 lg:-mx-24" />
    </section>
  );
}
