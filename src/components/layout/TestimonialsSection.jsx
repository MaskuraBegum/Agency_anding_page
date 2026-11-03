import { motion } from "motion/react";
import { Star } from "lucide-react";
import { frame2, extTop, extBottom } from "./layout";

const testimonials = [
  {
    name: "Daniel Carter",
    role: "Founder, Northline Labs",
    rating: 5,
    quote:
      "They understood what we needed before we even had the words for it. The new website feels clearer, faster, and much more aligned with our brand.",
  },
  {
    name: "Alex Morgan",
    role: "Founder, BrightPath",
    rating: 5,
    quote:
      "We needed a modern website without spending months going back and forth. The team moved quickly, stayed focused, and delivered exactly what we needed.",
  },
  {
    name: "Sarah Mitchell",
    role: "Marketing Director, Elevate Digital",
    rating: 5,
    quote:
      "The entire process was smooth from strategy to launch. Communication was clear, the design was thoughtful, and the final website feels incredibly polished.",
  },
  {
    name: "Emma Wilson",
    role: "CEO, NovaWorks",
    rating: 5,
    quote:
      "From strategy to launch, everything felt intentional. They brought strong design thinking and technical execution to every part of the project.",
  },
  
];

const PANEL_GRADIENT =
  "linear-gradient(180deg, #012a7a 0%, #0789b7 50%, #000000 100%)";

/* ---------- Review card ---------- */

function ReviewCard({ item }) {
  return (
    <article className="shrink-0 snap-start bg-white p-5 text-black sm:p-6">
      {/* Stars */}
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`size-[18px] sm:size-5 ${
              star <= item.rating
                ? "fill-[#F5B83D] text-[#F5B83D]"
                : "fill-transparent text-black/20"
            }`}
          />
        ))}
      </div>

      {/* Quote */}
      <p className="mt-5 font-['Merriweather'] text-[17px] leading-[1.35] tracking-tight text-black sm:mt-6 sm:text-[22px] lg:text-2xl">
        “{item.quote}”
      </p>

      {/* Author */}
      <div className="mt-6 sm:mt-8">
        <h3 className="font-['Merriweather'] text-base font-normal text-black sm:text-lg">
          {item.name}
        </h3>
        <p className="mt-1 font-['Inter'] text-[13px] text-black/70 sm:text-sm">
          {item.role}
        </p>
      </div>
    </article>
  );
}

/* ---------- Section ---------- */

export default function TestimonialsSection() {
  return (
    <section className="overflow-x-clip bg-black font-['Inter'] text-white">
      {/* Vertical borders only. The line at the top comes from the end of LaunchSection. */}
      <div className={frame2}>
        {/* Heading */}
        <div className="flex flex-col items-center px-5 pb-12 pt-16 text-center sm:pb-14 sm:pt-20 lg:pb-[72px] lg:pt-[90px]">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-slate-700/70 px-1.5 py-1 text-[14px] uppercase leading-none"
          >
            Client Experiences
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-8 font-['Merriweather'] text-3xl leading-tight tracking-tight sm:text-4xl md:text-5xl"
          >
            Don’t Just Take Our Word for It
          </motion.h2>
        </div>

        {/* Extended lines at the top and bottom of the panel */}
        <div className={`${extTop} ${extBottom}`}>
          {/* Inset gradient panel with its own vertical borders on desktop */}
          <div
            className="mx-auto w-full border-white/20 lg:w-[76%] lg:border-x"
            style={{ background: PANEL_GRADIENT }}
          >
            <div className="grid grid-cols-1 gap-8 px-4 py-8 sm:px-8 sm:py-10 lg:grid-cols-[minmax(0,540px)_1fr] lg:gap-10 lg:px-11 lg:py-11">
              {/* Stat: first on mobile, right column on desktop */}
              <div className="order-first text-left lg:order-last">
                <p className="font-['Merriweather'] text-5xl leading-none tracking-tight sm:text-6xl lg:text-[56px]">
                  40%
                </p>
                <p className="mt-4 max-w-[260px] font-['Merriweather'] text-base leading-snug text-white/90 sm:text-lg">
                  Marked improvement in financial efficiency and performance.
                </p>
              </div>

              {/* Scrollable cards */}
              <div
                className="flex h-[430px] snap-y snap-mandatory flex-col gap-5 overflow-y-auto overscroll-auto pb-6 [mask-image:linear-gradient(to_bottom,black_88%,transparent)] [scrollbar-width:none] sm:h-[480px] lg:h-[440px] [&::-webkit-scrollbar]:hidden"
                tabIndex={0}
                aria-label="Client testimonials"
              >
                {testimonials.map((item) => (
                  <ReviewCard key={item.name} item={item} />
                ))}
              </div>
            </div>
          </div>
        </div>

        
      </div>
    </section>
  );
}