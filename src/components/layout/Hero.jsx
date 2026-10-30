import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, X, Calendar, Clock, CheckCircle2 } from "lucide-react";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("10:00 AM");
  const [bookingSubmitted, setBookingSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", company: "", message: "" });

  const timeSlots = ["09:00 AM", "10:30 AM", "01:00 PM", "02:30 PM", "04:00 PM"];

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    setBookingSubmitted(true);
    setTimeout(() => {
      setBookingSubmitted(false);
      setIsBookingOpen(false);
      setFormData({ name: "", email: "", company: "", message: "" });
      setSelectedDate("");
    }, 2500);
  };

  return (
    <section id="home" className="bg-black pt-[70px] h-screen relative">
      {/* Framed column with hairline borders */}
      <div className="w-full">
        <div className="relative flex min-h-[calc(95svh-70px)] items-end overflow-hidden px-6 pb-10 sm:px-8 sm:pb-12 lg:px-10 lg:pb-16">
          {/* Animated gradient backdrop */}
          <div className="absolute inset-0 bg-[linear-gradient(180deg,#38f5e0_0%,#1ab0e8_38%,#0a2a9a_58%,#050c4a_75%,#030620_100%)]" />

          {/* Waving aurora animations */}
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
              className="mt-5 max-w-[330px] md:max-w-[600px] text-[15px] leading-[1.45] text-white/90"
            >
              We design, develop, and optimize high-performance digital
              experiences that help ambitious businesses operate better,
              convert more customers, and scale with confidence.
            </motion.p>

            <div>
              <motion.div variants={item} className="mt-6 flex flex-wrap w-[200px] md:w-full gap-3 flex-col md:flex-row">
                <motion.button
                  onClick={() => setIsBookingOpen(true)}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="group flex items-center justify-center gap-2 bg-white px-4 py-2.5 text-sm font-medium text-black cursor-pointer"
                >
                  Book a Consultation
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </motion.button>

                <motion.a
                  href="#work"
                  whileHover={{ scale: 1.03, backgroundColor: "rgba(255,255,255,0.18)" }}
                  whileTap={{ scale: 0.97 }}
                  className="bg-white/10 px-4 py-2.5 text-sm font-medium backdrop-blur-sm text-white text-center"
                >
                  Explore Our Work
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Booking Modal */}
      <AnimatePresence>
        {isBookingOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsBookingOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-xl bg-[#0a0a0a] border border-white/20 p-6 sm:p-8 text-white shadow-2xl z-10 max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setIsBookingOpen(false)}
                className="absolute right-5 top-5 rounded-full p-2 bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="size-5" />
              </button>

              {bookingSubmitted ? (
                <div className="py-12 text-center flex flex-col items-center">
                  <CheckCircle2 className="size-16 text-emerald-500 mb-4 animate-bounce" />
                  <h3 className="font-serif text-2xl font-medium">Consultation Scheduled!</h3>
                  <p className="mt-2 text-sm text-white/70 max-w-md">
                    We’ve reserved your spot for <span className="text-white font-medium">{selectedDate}</span> at <span className="text-white font-medium">{selectedTime}</span>. A calendar invitation has been sent to your email.
                  </p>
                </div>
              ) : (
                <>
                  <span className="bg-[#1ab0e8]/20 text-[#38f5e0] border border-[#1ab0e8]/40 px-2 py-1 text-xs uppercase leading-none font-medium">
                    1-on-1 Strategy Session
                  </span>

                  <h3 className="mt-4 font-serif text-2xl sm:text-3xl tracking-tight">
                    Book Your Consultation
                  </h3>
                  <p className="mt-1 text-sm text-white/70">
                    Select a date and time that works best for your team.
                  </p>

                  <form onSubmit={handleBookingSubmit} className="mt-6 space-y-4">
                    {/* Date and Time Pickers */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs uppercase tracking-wider text-white/60 mb-1 flex items-center gap-1.5">
                          <Calendar className="size-3.5 text-[#38f5e0]" /> Select Date
                        </label>
                        <input
                          type="date"
                          required
                          min={new Date().toISOString().split("T")[0]}
                          value={selectedDate}
                          onChange={(e) => setSelectedDate(e.target.value)}
                          className="w-full bg-white/5 border border-white/20 px-3 py-2 text-sm text-white focus:border-white focus:outline-none transition-colors [color-scheme:dark]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs uppercase tracking-wider text-white/60 mb-1 flex items-center gap-1.5">
                          <Clock className="size-3.5 text-[#38f5e0]" /> Preferred Time
                        </label>
                        <select
                          value={selectedTime}
                          onChange={(e) => setSelectedTime(e.target.value)}
                          className="w-full bg-[#141414] border border-white/20 px-3 py-2 text-sm text-white focus:border-white focus:outline-none transition-colors"
                        >
                          {timeSlots.map((slot) => (
                            <option key={slot} value={slot}>
                              {slot}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Personal Information */}
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-white/60 mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full bg-white/5 border border-white/20 px-4 py-2.5 text-sm text-white placeholder-white/30 focus:border-white focus:outline-none transition-colors"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs uppercase tracking-wider text-white/60 mb-1">
                          Work Email
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="john@company.com"
                          className="w-full bg-white/5 border border-white/20 px-4 py-2.5 text-sm text-white placeholder-white/30 focus:border-white focus:outline-none transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs uppercase tracking-wider text-white/60 mb-1">
                          Company / Website
                        </label>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="Acme Inc."
                          className="w-full bg-white/5 border border-white/20 px-4 py-2.5 text-sm text-white placeholder-white/30 focus:border-white focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-white/60 mb-1">
                        What would you like to discuss?
                      </label>
                      <textarea
                        rows={2}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Briefly describe your project or key challenges..."
                        className="w-full bg-white/5 border border-white/20 px-4 py-2 text-sm text-white placeholder-white/30 focus:border-white focus:outline-none transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="mt-4 w-full inline-flex items-center justify-center gap-2 bg-white text-black py-3 px-5 text-sm font-medium hover:bg-white/90 transition-colors cursor-pointer"
                    >
                      Confirm Booking
                      <ArrowRight className="size-4" />
                    </button>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      <div className="h-px w-full bg-white/20" />
    </section>
  );
}