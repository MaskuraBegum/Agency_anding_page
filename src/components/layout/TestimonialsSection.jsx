import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Daniel Carter",
    role: "Founder, Digital Agency",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=85",
    quote:
      "Working with this team was a great experience. They understood our vision, communicated clearly, and delivered a website that exceeded our expectations.",
  },
  {
    name: "Sarah Mitchell",
    role: "Marketing Director",
    rating: 4,
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=85",
    quote:
      "The attention to detail and the overall quality of the work really impressed us. The entire process felt smooth, collaborative, and well organized.",
  },
  {
    name: "James Wilson",
    role: "Business Owner",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=85",
    quote:
      "They transformed our ideas into a polished digital experience. The result looks great, works smoothly, and gives our business a stronger online presence.",
  },
  {
    name: "Emily Roberts",
    role: "Startup Founder",
    rating: 4,
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=85",
    quote:
      "From the initial discussion to the final delivery, the team was thoughtful and professional. I really appreciated their creative approach and communication.",
  },
  {
    name: "Michael Anderson",
    role: "Product Manager",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=85",
    quote:
      "A reliable team with a strong understanding of design and development. They helped us turn a complicated idea into a clear and usable product.",
  },
];

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const activeTestimonial = testimonials[activeIndex];

  const paginationDots = (
    <div className="flex w-full items-center justify-center gap-3">
      {testimonials.map((testimonial, index) => (
        <button
          key={testimonial.name}
          type="button"
          onClick={() => setActiveIndex(index)}
          aria-label={`Show testimonial ${index + 1}`}
          aria-current={activeIndex === index ? "true" : undefined}
          className={`h-2.5 rounded-full transition-all duration-300 ${
            activeIndex === index
              ? "w-8 bg-white"
              : "w-2.5 bg-white/40 hover:bg-white/70"
          }`}
        />
      ))}
    </div>
  );

  return (
    <section className="w-full bg-black px-4 py-20 text-white sm:px-6 lg:px-0">
      <div className="mx-auto max-w-[1237px]">
        {/* Section heading */}
        <div className="mb-12 text-center sm:mb-16">
          <span className="mb-4 inline-flex items-center rounded-full border border-white/20 px-4 py-2 text-xs tracking-wide text-white/70">
            Client Experiences
          </span>

          <h2 className="font-serif text-3xl leading-tight sm:text-4xl md:text-5xl">
            Don’t Just Take Our Word for It
          </h2>
        </div>

        {/* Testimonial panel */}
        <div
          className="overflow-hidden rounded-[18px] px-5 py-12 sm:rounded-[24px] sm:px-8 sm:py-[72px] lg:px-10 lg:py-[72px]"
          style={{
            background:
              "linear-gradient(135deg, #063d91 0%, #0785ae 45%, #00303b 100%)",
          }}
        >
          {/* Main layout */}
          <div className="mx-auto grid max-w-[1100px] grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.5fr)_minmax(100px,0.3fr)] lg:gap-x-28 lg:gap-y-8">
            {/* LEFT: Image stack */}
            <div className="flex w-full justify-center lg:justify-start">
              <div className="relative aspect-square w-full max-w-[220px] sm:max-w-[340px] lg:max-w-[380px]">
                {/* Background images */}
                {testimonials.map((testimonial, index) => {
                  const offset =
                    (index - activeIndex + testimonials.length) %
                    testimonials.length;

                  if (offset === 0) return null;

                  return (
                    <motion.div
                      key={testimonial.name}
                      className="absolute left-1/2 top-1/2 aspect-square h-full w-[88%] overflow-hidden rounded-[24px_8px_24px_8px] shadow-xl sm:rounded-[28px_9px_28px_9px] lg:rounded-[32px_9px_32px_9px]"
                      style={{
                        zIndex: testimonials.length - offset,
                      }}
                      animate={{
                        x: `calc(-50% + ${offset * 9}px)`,
                        y: `calc(-50% + ${offset * 6}px)`,
                        scale: 1 - offset * 0.025,
                        rotate: offset * 1.2,
                        opacity: 1 - offset * 0.035,
                      }}
                      transition={{
                        duration: 0.6,
                        ease: "easeInOut",
                      }}
                    >
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                    </motion.div>
                  );
                })}

                {/* Active image */}
                <AnimatePresence mode="sync">
                  <motion.div
                    key={activeTestimonial.name}
                    className="absolute left-1/2 top-1/2 aspect-square h-full w-[88%] overflow-hidden rounded-[24px_8px_24px_8px] shadow-2xl sm:rounded-[28px_9px_28px_9px] lg:rounded-[32px_9px_32px_9px]"
                    style={{
                      zIndex: testimonials.length + 1,
                    }}
                    initial={{
                      x: "115%",
                      y: "-50%",
                      opacity: 0,
                    }}
                    animate={{
                      x: "-50%",
                      y: "-50%",
                      opacity: 1,
                    }}
                    exit={{
                      x: "-115%",
                      y: "-50%",
                      opacity: 0,
                    }}
                    transition={{
                      duration: 0.85,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <img
                      src={activeTestimonial.image}
                      alt={activeTestimonial.name}
                      className="h-full w-full object-cover"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* MIDDLE: Review content */}
            <div className="flex min-h-[280px] w-full flex-col justify-center sm:min-h-[340px] lg:min-h-[360px] lg:pl-2">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTestimonial.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.45 }}
                >
                  {/* Client details */}
                  <div className="mb-5">
                    <h3 className="text-lg font-semibold">
                      {activeTestimonial.name}
                    </h3>

                    <p className="mt-1 text-sm text-white/65">
                      {activeTestimonial.role}
                    </p>
                  </div>

                  {/* Star rating */}
                  <div className="mb-6 flex items-center gap-1.5">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        size={18}
                        className={
                          star <= activeTestimonial.rating
                            ? "fill-white text-white"
                            : "fill-transparent text-white/40"
                        }
                      />
                    ))}
                  </div>

                  {/* Review quote */}
                  <p className="max-w-[590px] text-lg leading-relaxed text-white sm:text-xl md:text-[22px]">
                    “{activeTestimonial.quote}”
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Mobile pagination: directly after review */}
            <div className="md:hidden">
              {paginationDots}
            </div>

            {/* RIGHT: Statistic */}
            <div className="flex items-start justify-start border-t border-white/20 pt-8 text-left md:col-span-2 md:flex-row md:gap-5 lg:col-span-1 lg:-ml-20 lg:h-full lg:justify-start lg:border-l lg:border-t-0 lg:pl-3 lg:pt-0">
              <div className="text-left">
                <p className="font-serif text-4xl leading-none sm:text-5xl lg:text-4xl">
                  40%
                </p>

                <p className="mt-3 max-w-[120px] text-xs leading-relaxed text-white/75">
                  Marked improvement in financial efficiency and performance.
                </p>
              </div>
            </div>
          </div>

          {/* Desktop and tablet pagination */}
          <div className="mt-12 hidden md:flex md:mt-14">
            {paginationDots}
          </div>
        </div>
      </div>
    </section>
  );
}