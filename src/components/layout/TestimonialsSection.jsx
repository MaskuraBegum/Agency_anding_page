
const testimonials = [
    {
      quote:
        "They understood what we needed before we even had the words for it. The new website feels clearer, faster, and much more aligned with our brand.",
      name: "Daniel Carter",
      role: "Founder, Northline Labs",
    },
    {
      quote:
        "Working with this team was a great experience. They transformed our ideas into a clean, professional website that represents our business perfectly.",
      name: "Sarah Mitchell",
      role: "CEO, Creative Studio",
    },
    {
      quote:
        "The attention to detail was impressive. Every section feels intentional, and the final website is much easier for our customers to navigate.",
      name: "James Wilson",
      role: "Director, Growth Partners",
    },
    {
      quote:
        "Communication was clear throughout the project. They listened to our feedback and delivered a result that exceeded our expectations.",
      name: "Emily Roberts",
      role: "Marketing Lead, Nova Digital",
    },
    {
      quote:
        "Our new website has given our brand a fresh identity. The process was smooth, the design was thoughtful, and the result speaks for itself.",
      name: "Michael Anderson",
      role: "Founder, Horizon Works",
    },
  ];
  
  export default function TestimonialsSection() {
    return (
      <section className="bg-black text-white">
        <div className="mx-auto max-w-[1237px] border-x border-white/20">
  
          {/* Section heading */}
          <div className="flex min-h-[230px] flex-col items-center justify-center border-b border-white/20 px-5 py-12 text-center">
            <span className="bg-slate-700 px-1.5 py-1 text-xs uppercase leading-none text-white">
              Client Experiences
            </span>
  
            <h2 className="mt-8 font-serif text-3xl leading-tight tracking-tight sm:text-4xl md:text-5xl">
              Don’t Just Take Our Word for It
            </h2>
            
          </div>
  
          {/* Testimonials panel */}
          <div className="border-b border-white/20 px-5 py-0 sm:px-10 lg:px-0">
          <div className="h-px w-full lg:w-[1290px] bg-white/20 mx-0 lg:-mx-24" />
            <div className="mx-auto grid h-[560px] max-w-[872px] grid-rows-[minmax(0,1fr)_auto] gap-6 overflow-hidden bg-[linear-gradient(180deg,#063d91_0%,#0785ae_38%,#00303b_78%,#000000_100%)] px-5 py-7 sm:px-8 sm:py-10 md:h-[460px] md:grid-cols-[2fr_0.9fr] md:grid-rows-1 md:gap-10 md:px-10">
  
              {/* Scrollable testimonial cards */}
              <div className="min-h-0 overflow-y-auto pr-2 [scrollbar-color:rgba(255,255,255,0.55)_transparent] [scrollbar-width:thin]">
                <div className="flex flex-col gap-5 pb-2">
                  {testimonials.map((testimonial) => (
                    <article
                      key={testimonial.name}
                      className="shrink-0 bg-white px-5 py-6 text-black sm:px-6 sm:py-6"
                    >
                      {/* Star rating */}
                      <div
                        className="mb-5 text-[25px] leading-none tracking-[2px] text-[#F7B844]"
                        aria-label="5 out of 5 stars"
                      >
                        ★★★★★
                      </div>
  
                      {/* Review */}
                      <blockquote className="font-serif text-xl leading-[1.25] tracking-tight sm:text-[25px]">
                        “{testimonial.quote}”
                      </blockquote>
  
                      {/* Client details */}
                      <div className="mt-8">
                        <h3 className="font-serif text-lg">
                          {testimonial.name}
                        </h3>
  
                        <p className="mt-1 text-sm text-black/75">
                          {testimonial.role}
                        </p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
  
              {/* Fixed results highlight */}
              <div className="flex flex-col items-start text-white md:pt-1">
                <span className="font-serif text-5xl leading-none sm:text-6xl">
                  40%
                </span>
  
                <p className="mt-3 max-w-[230px] font-serif text-lg leading-[1.35] sm:text-xl">
                  Marked improvement in financial efficiency and performance.
                </p>
              </div>
  
            </div>
            <div className="h-px w-full lg:w-[1290px] bg-white/20 mx-0 lg:-mx-24" />
          </div>
  
          
  
        </div>
      </section>
    );
  }
  