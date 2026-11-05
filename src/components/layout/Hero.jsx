import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowRight,
  X,
  Calendar,
  Clock,
  CheckCircle2,
} from "lucide-react";
import { frame, frame2 } from "./layout";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const timeSlots = ["09:00 AM", "10:30 AM", "01:00 PM", "02:30 PM", "04:00 PM"];

const initialFormData = {
  name: "",
  email: "",
  company: "",
  message: "",
};

export default function Hero() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("10:00 AM");
  const [bookingSubmitted, setBookingSubmitted] = useState(false);
  const [formData, setFormData] = useState(initialFormData);

  // Stop the page from scrolling behind the modal
  useEffect(() => {
    if (!isBookingOpen) return;

    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = prev;
    };
  }, [isBookingOpen]);

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    setBookingSubmitted(true);
  };

  const closeBooking = () => {
    setIsBookingOpen(false);

    setTimeout(() => {
      setBookingSubmitted(false);
      setFormData(initialFormData);
      setSelectedDate("");
      setSelectedTime("10:00 AM");
    }, 300);
  };

  return (
    <section id="home" className="relative overflow-hidden bg-black text-white">
      {/* Main Hero Frame */}
      <div
        className={`${frame2} relative h-[680px] min-h-[calc(100svh-80px)] max-h-[900px] overflow-hidden border-x border-white/20 sm:h-[760px]`}
      >
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#38f5e0_0%,#1ab0e8_38%,#0a2a9a_58%,#050c4a_75%,#030620_100%)]" />

        {/* Aurora Animation 1 */}
        <motion.div
          aria-hidden="true"
          className="absolute left-[-25%] top-[-10%] h-[85%] w-[90%] bg-[radial-gradient(closest-side,rgba(70,255,240,0.95),transparent)] blur-2xl"
          animate={{
            x: ["0%", "35%", "10%", "0%"],
            y: ["0%", "10%", "-8%", "0%"],
            scale: [1, 1.2, 0.95, 1],
            borderRadius: [
              "50% 50% 50% 50%",
              "60% 40% 55% 45%",
              "45% 55% 40% 60%",
              "50% 50% 50% 50%",
            ],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Aurora Animation 2 */}
        <motion.div
          aria-hidden="true"
          className="absolute left-0 top-[15%] h-[85%] w-[130%] bg-[radial-gradient(closest-side,rgba(8,30,170,1),rgba(8,30,170,0.7)_55%,transparent)] blur-2xl"
          animate={{
            x: ["-20%", "25%", "-30%", "-20%"],
            y: ["0%", "-12%", "6%", "0%"],
            rotate: [-12, 14, -18, -12],
            scale: [1, 1.15, 0.9, 1],
            borderRadius: [
              "55% 45% 60% 40%",
              "40% 60% 45% 55%",
              "60% 40% 50% 50%",
              "55% 45% 60% 40%",
            ],
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Aurora Animation 3 */}
        <motion.div
          aria-hidden="true"
          className="absolute right-[-30%] top-[-15%] h-[60%] w-[75%] bg-[radial-gradient(closest-side,rgba(90,255,235,0.8),transparent)] blur-3xl"
          animate={{
            x: ["0%", "-40%", "0%"],
            y: ["0%", "25%", "0%"],
            rotate: [0, 25, 0],
          }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Bottom Dark Overlay */}
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-b from-transparent to-[#030620]/80" />

        {/* Hero Text Content */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="absolute bottom-10 left-5 z-10 w-[calc(100%-40px)] max-w-[900px] sm:bottom-[80px] sm:left-[40px] sm:w-[calc(100%-80px)]"
        >
          {/* Label */}
          <motion.span
            variants={item}
            className="inline-flex min-h-[17px] items-center bg-white/15 px-1.5 py-1 font-['Inter'] font-medium text-[11px] uppercase leading-[100%] tracking-[-0.5px] text-white backdrop-blur-sm sm:text-[14px]"
          >
            Design • Development • Growth
          </motion.span>

          {/* Main Heading */}
          <motion.h1
            variants={item}
            className="mt-3 w-full max-w-[1250px] font-['Merriweather'] text-[30px] font-normal leading-[1.12] tracking-[-1px] text-white sm:mt-4 sm:text-[48px] lg:text-[64px] lg:leading-[1.05]"
          >
            Turn Digital Infrastructure Into Business Growth
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={item}
            className="mt-4 w-full max-w-[671px] font-['Inter'] text-[14px] font-medium leading-[22px] tracking-[-0.5px] text-[#F1F2F5] sm:mt-5 sm:text-[15px] sm:leading-[24px] lg:text-[16px] lg:leading-[26px]"
          >
            We design, develop, and optimize high-performance digital
            experiences that help ambitious businesses operate better, convert
            more customers, and scale with confidence.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={item}
            className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-[18px]"
          >
            {/* Primary Button */}
            <motion.button
              type="button"
              onClick={() => setIsBookingOpen(true)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="group flex h-[41px] w-full shrink-0 cursor-pointer items-center justify-center gap-[6px] bg-white px-5 text-center font-['Inter'] text-[16px] font-medium leading-[26px] tracking-[-1px] text-[#010101] transition-colors hover:bg-white/90 sm:w-[198px]"
            >
              <span className="whitespace-nowrap">Book a Consultation</span>
              <ArrowRight className="size-4 shrink-0 transition-transform group-hover:translate-x-1" />
            </motion.button>

            {/* Secondary Button */}
            <motion.a
              href="#work"
              whileHover={{
                backgroundColor: "#FFFFFF",
                color: "#000000",
              }}
              whileTap={{ scale: 0.97 }}
              className="flex h-[41px] w-full shrink-0 items-center justify-center gap-[6px] bg-white/10 px-5 text-center font-['Inter'] text-[16px] font-medium leading-[26px] tracking-[-1px] text-white backdrop-blur-sm transition-colors sm:w-[159px]"
            >
              <span className="whitespace-nowrap">Explore Our Work</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Booking Modal */}
      <AnimatePresence>
        {isBookingOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-4">
            {/* Modal Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeBooking}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 max-h-[90dvh] w-full max-w-xl overflow-y-auto overscroll-contain border border-white/20 bg-[#0a0a0a] p-5 text-white shadow-2xl sm:p-8"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={closeBooking}
                className="absolute right-4 top-4 cursor-pointer rounded-full bg-white/10 p-2 transition-colors hover:bg-white/20"
                aria-label="Close modal"
              >
                <X className="size-5" />
              </button>

              {bookingSubmitted ? (
                <div className="flex flex-col items-center py-12 text-center">
                  <CheckCircle2 className="mb-4 size-16 text-emerald-500" />

                  <h3 className="font-['Merriweather'] text-2xl font-medium">
                    Request Submitted!
                  </h3>

                  <p className="mt-2 max-w-md text-sm text-white/70">
                    Thank you, {formData.name}. Your consultation request for{" "}
                    <span className="font-medium text-white">
                      {selectedDate}
                    </span>{" "}
                    at{" "}
                    <span className="font-medium text-white">
                      {selectedTime}
                    </span>{" "}
                    has been recorded in this demo.
                  </p>

                  <button
                    type="button"
                    onClick={closeBooking}
                    className="mt-6 bg-white px-6 py-2.5 text-sm font-medium text-black hover:bg-white/90"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <>
                  {/* Modal Heading */}
                  <span className="inline-block border border-[#1ab0e8]/40 bg-[#1ab0e8]/20 px-2 py-1 text-xs font-medium uppercase leading-none text-[#38f5e0]">
                    1-on-1 Strategy Session
                  </span>

                  <h3 className="mt-4 pr-8 font-['Inter'] text-2xl font-medium tracking-tight sm:pr-0 sm:text-3xl">
                    Book Your Consultation
                  </h3>

                  <p className="mt-1 text-sm text-white/70">
                    Select a date and time that works best for your team.
                  </p>

                  <form onSubmit={handleBookingSubmit} className="mt-6 space-y-4">
                    {/* Date and Time */}
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div className="min-w-0">
                        <label className="mb-1 flex items-center gap-1.5 text-xs uppercase tracking-wider text-white/60">
                          <Calendar className="size-3.5 text-[#38f5e0]" />
                          Select Date
                        </label>

                        <input
                          type="date"
                          required
                          min={new Date().toLocaleDateString("en-CA")}
                          value={selectedDate}
                          onChange={(e) => setSelectedDate(e.target.value)}
                          className="block w-full min-w-0 border border-white/20 bg-white/5 px-3 py-2 text-base text-white transition-colors [color-scheme:dark] focus:border-[#38f5e0] focus:outline-none sm:text-sm"
                        />
                      </div>

                      <div className="min-w-0">
                        <label className="mb-1 flex items-center gap-1.5 text-xs uppercase tracking-wider text-white/60">
                          <Clock className="size-3.5 text-[#38f5e0]" />
                          Preferred Time
                        </label>

                        <select
                          value={selectedTime}
                          onChange={(e) => setSelectedTime(e.target.value)}
                          className="block w-full min-w-0 border border-white/20 bg-[#141414] px-3 py-2 text-base text-white focus:border-[#38f5e0] focus:outline-none sm:text-sm"
                        >
                          {timeSlots.map((slot) => (
                            <option key={slot} value={slot}>
                              {slot}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Full Name */}
                    <div>
                      <label className="mb-1 block text-xs uppercase tracking-wider text-white/60">
                        Full Name
                      </label>

                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="John Doe"
                        className="w-full border border-white/20 bg-white/5 px-4 py-2.5 text-base text-white placeholder-white/30 transition-colors focus:border-[#38f5e0] focus:outline-none sm:text-sm"
                      />
                    </div>

                    {/* Email and Company */}
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <label className="mb-1 block text-xs uppercase tracking-wider text-white/60">
                          Work Email
                        </label>

                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          placeholder="john@company.com"
                          className="w-full border border-white/20 bg-white/5 px-4 py-2.5 text-base text-white placeholder-white/30 focus:border-[#38f5e0] focus:outline-none sm:text-sm"
                        />
                      </div>

                      <div>
                        <label className="mb-1 block text-xs uppercase tracking-wider text-white/60">
                          Company / Website
                        </label>

                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              company: e.target.value,
                            })
                          }
                          placeholder="Acme Inc."
                          className="w-full border border-white/20 bg-white/5 px-4 py-2.5 text-base text-white placeholder-white/30 focus:border-[#38f5e0] focus:outline-none sm:text-sm"
                        />
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="mb-1 block text-xs uppercase tracking-wider text-white/60">
                        What would you like to discuss?
                      </label>

                      <textarea
                        rows={2}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        placeholder="Briefly describe your project or key challenges..."
                        className="w-full resize-none border border-white/20 bg-white/5 px-4 py-2 text-base text-white placeholder-white/30 focus:border-[#38f5e0] focus:outline-none sm:text-sm"
                      />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      className="mt-4 inline-flex w-full cursor-pointer items-center justify-center gap-2 bg-white px-5 py-3 text-sm font-medium text-black transition-colors hover:bg-white/90"
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

      {/* Bottom Border */}
    </section>
  );
}