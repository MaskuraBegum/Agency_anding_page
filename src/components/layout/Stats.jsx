import { motion } from "motion/react";

const stats = [
  { value: "100+", label: "Project Completed" },
  { value: "14+", label: "Businesses Supported" },
  { value: "44%", label: "Performance Improvement" },
  { value: "4+", label: "Years of Experience" },
];

export default function Stats() {
  return (
    <section className="bg-black text-white">
      <div className="mx-auto grid max-w-[1237px] grid-cols-1 border-x border-white/20 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`flex min-h-[150px] flex-col items-center text-center lg:items-start lg:text-left justify-center border-b border-white/20 px-6 py-8 sm:min-h-[180px] sm:px-8 lg:min-h-[210px] lg:border-b-0 lg:px-10 ${
              index > 0 ? "lg:border-l lg:border-white/20" : ""
            } ${
              index === 1 ? "bg-white/[0.10]" : ""
            } ${
              index % 2 === 1 ? "sm:border-l sm:border-white/20 lg:border-l" : ""
            }`}
          >
            <p className="font-serif text-5xl leading-none tracking-tight sm:text-[52px]">
              {stat.value}
            </p>

            <p className="mt-5 text-base tracking-tight text-white/80">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
      <div className="h-px w-full lg:w-[1290px] bg-white/20 mx-0 lg:-mx-24" />
    </section>
  );
}