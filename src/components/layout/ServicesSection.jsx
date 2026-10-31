import { useEffect, useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "motion/react";
import { ArrowRight, X, CheckCircle2 } from "lucide-react";

const CONTACT_EMAIL = "hello@youragency.com"; // Change this to your email

const services = [
  {
    number: "01",
    title: "UI/UX Engineering & Redesign",
    description:
      "We combine user-centered design with frontend engineering to create interfaces that look refined, feel effortless, and support your business goals.",
    features: [
      "UX Research",
      "Information Architecture",
      "Wireframes",
      "UI Design",
      "Responsive Design",
      "Frontend Implementation",
    ],
    button: "Improve My Experience",
    placeholder: "Tell us about your website and what you'd like to improve...",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1000&q=80",
  },
  {
    number: "02",
    title: "Logo & Branding",
    description:
      "We create distinctive logos and brand identities that communicate your value, build trust, and keep your brand consistent.",
    features: [
      "Logo Design",
      "Brand Identity",
      "Typography & Color",
      "Brand Guidelines",
      "Social Media Assets",
      "Startup Branding",
    ],
    button: "Build My Brand Now",
    placeholder: "Tell us about your business and the brand you want to build...",
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1000&q=80",
  },
  {
    number: "03",
    title: "CMS & E-Commerce Infrastructure",
    description:
      "We build and optimize CMS and e-commerce experiences that make it easier for your team to manage content, products, and customer journeys.",
    features: [
      "CMS Development",
      "E-Commerce",
      "Product Experiences",
      "Checkout Optimization",
      "Responsive Interfaces",
      "Technical Optimization",
    ],
    button: "Scale My Website",
    placeholder: "Tell us about your store or platform and your growth goals...",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1000&q=80",
  },
];

const CARD_GRADIENT =
  "linear-gradient(180deg, #02307f 0%, #05509a 28%, #0480b8 55%, #03354f 80%, #010a10 100%)";

/* ---------- Number badge ---------- */

function NumberBadge({ number }) {
  return (
    <div className="relative size-[54px] md:size-[62px]">
      <span className="absolute -left-1 -top-1 size-2 border-l border-t border-white/80" />
      <span className="absolute -right-1 -top-1 size-2 border-r border-t border-white/80" />
      <span className="absolute -bottom-1 -left-1 size-2 border-b border-l border-white/80" />
      <span className="absolute -bottom-1 -right-1 size-2 border-b border-r border-white/80" />

      <div className="flex size-full items-center justify-center bg-[#1e4f95] font-serif text-[28px] leading-none text-white md:text-[34px]">
        {number}
      </div>
    </div>
  );
}

/* ---------- Inquiry modal ---------- */

function InquiryModal({ service, onClose }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [sent, setSent] = useState(false);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();

    window.addEventListener("keydown", onKey);

    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  const update = (key) => (e) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent(`New inquiry: ${service.title}`);

    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nService: ${service.title}\n\n${form.message}`
    );

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;

    setSent(true);
  };

  const inputClass =
    "w-full border border-white/20 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none transition-colors focus:border-white/70";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label={`Inquiry about ${service.title}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.97 }}
        transition={{ duration: 0.25 }}
        onClick={(e) => e.stopPropagation()}
        className="relative max-h-[90vh] w-full max-w-[520px] overflow-y-auto rounded-2xl border border-white/20 p-6 text-white shadow-[0_30px_80px_rgba(0,0,0,0.7)] sm:p-8"
        style={{ background: CARD_GRADIENT }}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 text-white/70 transition-colors hover:text-white"
        >
          <X className="size-5" />
        </button>

        {sent ? (
          <div className="flex flex-col items-center py-8 text-center">
            <CheckCircle2 className="size-12 text-white" />

            <h4 className="mt-4 font-serif text-2xl">
              Thank you!
            </h4>

            <p className="mt-2 max-w-[360px] text-sm leading-6 text-white/80">
              Your email app should have opened with your message. We'll get
              back to you within one business day.
            </p>

            <button
              type="button"
              onClick={onClose}
              className="mt-6 border border-white/60 px-6 py-2.5 text-sm font-semibold transition-colors hover:bg-white hover:text-black"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <p className="text-xs uppercase tracking-[0.2em] text-white/60">
              Start a project
            </p>

            <h4 className="font-serif text-2xl leading-tight">
              {service.title}
            </h4>

            <input
              required
              type="text"
              placeholder="Your name"
              value={form.name}
              onChange={update("name")}
              className={inputClass}
            />

            <input
              required
              type="email"
              placeholder="Your email"
              value={form.email}
              onChange={update("email")}
              className={inputClass}
            />

            <textarea
              required
              rows={4}
              placeholder={service.placeholder}
              value={form.message}
              onChange={update("message")}
              className={`${inputClass} resize-none`}
            />

            <button
              type="submit"
              className="group flex w-full items-center justify-center gap-2 rounded-md border border-white bg-white px-5 py-3 text-sm font-semibold text-black transition-colors hover:bg-transparent hover:text-white"
            >
              Send Inquiry
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </button>
          </form>
        )}
      </motion.div>
    </motion.div>
  );
}

/* ---------- Stacked card ---------- */

function StackedCard({ service, index, total, progress, onCta }) {
  const targetScale = 1 - (total - 1 - index) * 0.05;

  const scale = useTransform(
    progress,
    [index / total, 1],
    [1, targetScale]
  );

  const isLast = index === total - 1;

  return (
    <div
      className={`sticky top-0 flex items-start justify-center px-3 sm:px-6 ${
        isLast ? "pb-16" : "h-screen"
      }`}
      style={{ paddingTop: 24 + index * 28 }}
    >
      <motion.article
        style={{ scale, background: CARD_GRADIENT }}
        className="relative h-[min(540px,calc(100vh-110px))] w-full origin-top overflow-hidden rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.55)] ring-1 ring-white/15"
      >
        <div className="flex h-full flex-col gap-3 overflow-y-auto px-5 py-5 sm:gap-6 sm:px-10 sm:py-7 md:flex-row md:items-center md:gap-12 md:overflow-hidden md:px-12 md:py-10">
          {/* LEFT CONTENT */}

          <div className="flex min-w-0 flex-1 flex-col justify-center">
            <NumberBadge number={service.number} />

            <h3 className="mt-4 font-serif text-xl leading-tight tracking-tight text-white sm:mt-7 sm:text-2xl md:text-[30px]">
              {service.title}
            </h3>

            <p className="mt-2 max-w-[560px] text-xs leading-5 text-white/90 sm:mt-3 sm:text-sm sm:leading-6 md:text-base md:leading-7">
              {service.description}
            </p>

            {/* MOBILE IMAGE */}

            <div className="mt-3 h-[85px] w-full shrink-0 overflow-hidden rounded-sm bg-white/10 ring-1 ring-white/20 sm:mt-4 sm:h-[110px] md:hidden">
              <img
                src={service.image}
                alt={service.title}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>

            <p className="mt-3 text-xs font-medium text-white/90 sm:mt-5 sm:text-sm">
              Includes:
            </p>

            <ul className="mt-2 grid grid-cols-2 gap-x-3 gap-y-1 sm:gap-y-1.5 md:grid-cols-1">
              {service.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-2 text-[11px] text-white/90 sm:gap-3 sm:text-sm md:text-[15px]"
                >
                  <span className="size-1 shrink-0 rounded-full bg-white/90" />
                  {feature}
                </li>
              ))}
            </ul>

            <button
              type="button"
              onClick={() => onCta(service)}
              className="group mt-4 inline-flex w-full max-w-[450px] shrink-0 cursor-pointer items-center justify-center gap-2 rounded-md border border-white/50 bg-black/25 px-4 py-2.5 text-xs font-semibold text-white backdrop-blur transition-all duration-300 hover:border-white hover:bg-white hover:text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80 active:scale-[0.98] sm:mt-7 sm:px-5 sm:py-3 sm:text-sm"
            >
              {service.button}

              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>

          {/* DESKTOP IMAGE */}

          <div className="hidden h-full max-h-[440px] w-[42%] shrink-0 self-center overflow-hidden rounded-lg bg-white shadow-[0_10px_40px_rgba(0,0,0,0.4)] ring-1 ring-white/20 md:block">
            <img
              src={service.image}
              alt={service.title}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>
      </motion.article>
    </div>
  );
}

/* ---------- Section ---------- */

export default function ServicesSection() {
  const containerRef = useRef(null);

  const [activeService, setActiveService] = useState(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section id="services" className="bg-black text-white">
      <div className="mx-auto max-w-[1237px]">
        {/* HEADER */}

        <div className="px-6 pb-10 pt-14 sm:px-10 md:pb-12 md:pt-16 lg:px-[44px]">
          <span className="inline-block bg-white/15 px-1.5 py-0.5 text-xs font-medium uppercase tracking-wide text-white">
            What We Do
          </span>

          <h2 className="mt-6 max-w-[760px] font-serif text-4xl leading-[1.1] tracking-tight sm:text-5xl lg:text-[56px]">
            Everything You Need to Build Digital That Performs
          </h2>

          <p className="mt-6 max-w-[600px] text-base leading-7 text-white/70 md:text-lg">
            From a complete redesign to deep technical optimization, we solve
            digital challenges across strategy, experience, and engineering.
          </p>
        </div>

        <div className="h-px w-full bg-white/15" />

        {/* STACKED SERVICES */}

        <div ref={containerRef} className="relative">
          {services.map((service, i) => (
            <StackedCard
              key={service.number}
              service={service}
              index={i}
              total={services.length}
              progress={scrollYProgress}
              onCta={setActiveService}
            />
          ))}
        </div>
      </div>

      {/* INQUIRY MODAL */}

      <AnimatePresence>
        {activeService && (
          <InquiryModal
            key={activeService.number}
            service={activeService}
            onClose={() => setActiveService(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}