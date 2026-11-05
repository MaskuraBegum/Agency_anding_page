import { motion } from "motion/react";
import { frame3 } from "./layout";

const stats = [
  { value: "100+", label: "Project Completed" },
  { value: "14+", label: "Businesses Supported" },
  { value: "44%", label: "Performance Improvement" },
  { value: "4+", label: "Years of Experience" },
];

export default function Stats() {
  return (
    <section className="bg-black text-white">
      <div
        className={`${frame3} grid grid-cols-1 border-white/20 sm:grid-cols-2 lg:grid-cols-4`}
      >
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`flex min-h-[130px] flex-col items-center justify-center border-white/20 bg-black px-5 py-6 text-center transition-colors duration-300 sm:min-h-[180px] sm:px-8 sm:py-7 lg:min-h-[210px] lg:items-start lg:px-10 lg:text-left ${
              index > 0 && index !== 2
                ? "lg:border-l lg:border-white/20"
                : ""
            } ${
              index === 1
                ? "lg:relative lg:after:absolute lg:after:right-0 lg:after:top-0 lg:after:h-full lg:after:w-px lg:after:bg-white/20"
                : ""
            } ${
              index % 2 === 1
                ? "sm:border-l sm:border-white/20 lg:border-l"
                : ""
            } hover:bg-white/[0.10]`}
          >
            <p className="font-heading text-[38px] font-normal leading-none tracking-tight text-[#FFFFFF] sm:text-[48px]">
              {stat.value}
            </p>

            <p className="mt-3 font-body text-[13px] font-medium tracking-tight text-[#CACACA] sm:mt-5 sm:text-[14px] lg:text-[18px]">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}