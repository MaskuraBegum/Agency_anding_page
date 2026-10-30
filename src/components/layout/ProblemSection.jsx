
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Gauge,
  Paintbrush,
  Settings2,
  ChartNoAxesColumnDecreasing,
  Smartphone,
  ArrowRight,
  X,
  CheckCircle2,
} from "lucide-react";

const problems = [
  {
    icon: Gauge,
    title: "Slow Website",
    description:
      "Slow pages frustrate users, increase drop-offs, and can cost you valuable customers and business opportunities.",
  },
  {
    icon: Paintbrush,
    title: "Outdated Design",
    description:
      "Your business has grown, but your digital experience no longer reflects your brand, services, or customer expectations.",
  },
  {
    icon: Settings2,
    title: "Complex Systems",
    description:
      "Hard-to-manage technology makes updates slower, harder, and more expensive.",
  },
  {
    icon: ChartNoAxesColumnDecreasing,
    title: "Low Conversions",
    description:
      "People visit your website, but unclear messaging and poor user journeys can stop them from taking the next step.",
  },
  {
    icon: Smartphone,
    title: "Poor Mobile Experience",
    description:
      "Your website may look good on desktop but still frustrate mobile users with difficult navigation, slow loading, or poor usability.",
  },
];

const cardAnimation = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

function ProblemCard({ icon: Icon, title, description }) {
  return (
    <motion.article
      variants={cardAnimation}
      className="flex min-w-0 flex-col items-center text-center border-b border-white/20 p-6 sm:p-7 lg:items-start lg:text-left lg:p-[30px]"
    >
      {/* Icon */}
      <div className="relative flex size-[44px] shrink-0 items-center justify-center border border-blue-400/40 bg-blue-500/15 shadow-[0_0_20px_rgba(59,130,246,0.12)]">
      <Icon
    size={29}
    strokeWidth={1.0}
    className="text-blue-500"
    aria-hidden="true"
  />

  {/* White corner details */}
  <span className="absolute left-0 top-0 size-2 border-l-2 border-t-2 border-gray-400" />
  <span className="absolute right-0 top-0 size-2 border-r-2 border-t-2 border-gray-400" />
  <span className="absolute bottom-0 left-0 size-2 border-b-2 border-l-2 border-gray-400" />
  <span className="absolute bottom-0 right-0 size-2 border-b-2 border-r-2 border-gray-400" />
</div>

      <h3 className="mt-7 text-lg font-medium tracking-tight">
        {title}
      </h3>

      <p className="mx-auto mt-3 max-w-[340px] text-[15px] leading-[1.5] text-white/80 lg:mx-0">
        {description}
      </p>
    </motion.article>
  );
}

export default function ProblemSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    primaryIssue: "Slow Website",
    details: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      setIsModalOpen(false);

      setFormData({
        name: "",
        email: "",
        website: "",
        primaryIssue: "Slow Website",
        details: "",
      });
    }, 2500);
  };

  return (
    <section className="relative mt-0 bg-black text-white">
      {/* Top divider */}
      <div className="h-px w-full bg-white/20" />

      <div className="mx-auto max-w-[1237px]">
        {/* Heading */}
        <div className="flex flex-col items-center px-5 pb-12 pt-16 text-center sm:pb-16 sm:pt-20 lg:pb-[76px] lg:pt-[90px]">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-slate-700/70 px-1.5 py-1 text-xs uppercase leading-none"
          >
            Does This Sound Familiar?
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-8 max-w-[850px] font-serif text-4xl leading-[1.12] tracking-tight sm:text-5xl lg:text-[52px]"
          >
            Your Digital Infrastructure
            <br className="hidden sm:block" /> Shouldn’t Hold Your Business Back
          </motion.h2>
        </div>

        {/* Problem cards and CTA */}
        <motion.div
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.1 },
            },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 border-t border-white/20 sm:grid-cols-2 lg:grid-cols-3"
        >
          {problems.map((problem) => (
            <ProblemCard key={problem.title} {...problem} />
          ))}

          {/* CTA card */}
          <motion.div
            variants={cardAnimation}
            className="flex min-h-[245px] flex-col items-center justify-between bg-[linear-gradient(160deg,#073b91_0%,#0784b7_45%,#001014_100%)] p-6 text-center sm:p-7 lg:items-start lg:p-[30px] lg:text-left"
          >
            <div>
              <h3 className="text-lg font-medium leading-snug">
                Ready to Fix What’s Holding You Back?
              </h3>

              <p className="mt-3 text-[15px] leading-[1.5] text-white/95">
                Let’s identify the gaps, improve the experience, and build a
                digital foundation ready for growth.
              </p>
            </div>

            <button
              onClick={() => setIsModalOpen(true)}
              className="mt-8 inline-flex w-full cursor-pointer items-center justify-center gap-2 bg-white px-4 py-3 text-center text-sm font-medium tracking-tight text-black transition-colors hover:bg-white/85"
            >
              Let’s Improve Your Digital Experience
              <ArrowRight className="size-4 shrink-0" />
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom divider */}
      <div className="h-px w-full bg-white/20" />

      {/* Conversational Intake Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            {/* Background overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 max-h-[90vh] w-full max-w-lg overflow-y-auto border border-white/20 bg-[#0a0a0a] p-6 text-white shadow-2xl sm:p-8"
            >
              {/* Close button */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute right-5 top-5 cursor-pointer rounded-full bg-white/10 p-2 transition-colors hover:bg-white/20"
                aria-label="Close modal"
              >
                <X className="size-5" />
              </button>

              {submitted ? (
                <div className="flex flex-col items-center py-12 text-center">
                  <CheckCircle2 className="mb-4 size-16 animate-bounce text-blue-500" />

                  <h3 className="font-serif text-2xl font-medium">
                    Audit Request Received!
                  </h3>

                  <p className="mt-2 max-w-sm text-sm text-white/70">
                    Thanks,{" "}
                    <span className="font-medium text-white">
                      {formData.name}
                    </span>
                    . Our engineering team will review your digital gaps and
                    reach out soon.
                  </p>
                </div>
              ) : (
                <>
                  <span className="border border-blue-500/30 bg-[#073b91]/40 px-2 py-1 text-xs font-medium uppercase leading-none text-blue-400">
                    Quick Digital Assessment
                  </span>

                  <h3 className="mt-4 font-serif text-2xl tracking-tight sm:text-3xl">
                    Let’s Talk About Your Experience
                  </h3>

                  <p className="mt-1 text-sm text-white/70">
                    Tell us a bit about your current setup so we can tailor our
                    recommendations.
                  </p>

                  <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                    {/* Main issue */}
                    <div>
                      <label className="mb-1 block text-xs uppercase tracking-wider text-white/60">
                        What is your main bottleneck?
                      </label>

                      <select
                        value={formData.primaryIssue}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            primaryIssue: e.target.value,
                          })
                        }
                        className="w-full border border-white/20 bg-[#141414] px-3 py-2.5 text-sm text-white transition-colors focus:border-white focus:outline-none"
                      >
                        {problems.map((p) => (
                          <option key={p.title} value={p.title}>
                            {p.title}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Name and email */}
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <label className="mb-1 block text-xs uppercase tracking-wider text-white/60">
                          Your Name
                        </label>

                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              name: e.target.value,
                            })
                          }
                          placeholder="John Doe"
                          className="w-full border border-white/20 bg-white/5 px-4 py-2 text-sm text-white transition-colors placeholder:text-white/30 focus:border-white focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="mb-1 block text-xs uppercase tracking-wider text-white/60">
                          Work Email
                        </label>

                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              email: e.target.value,
                            })
                          }
                          placeholder="john@company.com"
                          className="w-full border border-white/20 bg-white/5 px-4 py-2 text-sm text-white transition-colors placeholder:text-white/30 focus:border-white focus:outline-none"
                        />
                      </div>
                    </div>

                    {/* Website */}
                    <div>
                      <label className="mb-1 block text-xs uppercase tracking-wider text-white/60">
                        Current Website URL
                      </label>

                      <input
                        type="text"
                        value={formData.website}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            website: e.target.value,
                          })
                        }
                        placeholder="https://yourcompany.com"
                        className="w-full border border-white/20 bg-white/5 px-4 py-2 text-sm text-white transition-colors placeholder:text-white/30 focus:border-white focus:outline-none"
                      />
                    </div>

                    {/* Project details */}
                    <div>
                      <label className="mb-1 block text-xs uppercase tracking-wider text-white/60">
                        Any specific goals or details?
                      </label>

                      <textarea
                        rows={3}
                        value={formData.details}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            details: e.target.value,
                          })
                        }
                        placeholder="Tell us what you want to achieve..."
                        className="w-full resize-none border border-white/20 bg-white/5 px-4 py-2 text-sm text-white transition-colors placeholder:text-white/30 focus:border-white focus:outline-none"
                      />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      className="mt-2 inline-flex w-full cursor-pointer items-center justify-center gap-2 bg-white px-5 py-3 text-sm font-medium text-black transition-colors hover:bg-white/90"
                    >
                      Request Free Audit
                      <ArrowRight className="size-4" />
                    </button>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
