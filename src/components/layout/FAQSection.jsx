
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { extBottom, extTop, frame, frame2, frame5 } from "./layout";

const faqs = [
  {
    question: "How long does a typical project take?",
    answer:
      "Project timelines depend on the scope, complexity, existing infrastructure, and number of deliverables. After an initial consultation, we'll provide a clear timeline based on your specific requirements.",
  },
  {
    question: "What is your pricing structure?",
    answer:
      "Our pricing depends on the project's requirements, features, and overall complexity. We discuss your goals first and provide a clear proposal with transparent pricing before starting any work.",
  },
  {
    question: "Do you work with existing websites and applications?",
    answer:
      "Yes. We can improve, redesign, maintain, and add new features to existing websites and applications. We'll first review your current setup and recommend the best approach.",
  },
  {
    question: "Can you work with our existing development team?",
    answer:
      "Absolutely. We can collaborate with your in-house developers, designers, and project managers to support your workflow and help move the project forward.",
  },
  {
    question: "Do you offer ongoing technical support?",
    answer:
      "Yes. We can provide ongoing maintenance, bug fixes, performance improvements, and technical support depending on your project's needs.",
  },
  {
    question: "What happens after I book a consultation?",
    answer:
      "We'll discuss your business, goals, project requirements, and expectations. After the consultation, we'll outline the recommended solution, timeline, and next steps.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex((current) => (current === index ? -1 : index));
  };

  return (
    <section id="faq" className="scroll-mt-[70px] overflow-x-clip bg-black text-white">
  <div className={`${frame2} ${extTop} ${extBottom}`}>
        {/* Top Grid Extension Line */}
        

        {/* FAQ Heading */}
        <div className="flex min-h-[278px] flex-col items-center justify-center border-b border-white/20 px-5 py-12 text-center">
          <span className="bg-slate-700 px-1.5 py-1 text-[14px] uppercase leading-none text-white">
            FAQ
          </span>

          <h2 className="mt-8 max-w-[600px] font-['Merriweather'] text-3xl leading-[1.12] tracking-tight sm:text-3xl md:text-[48px]">
            Questions Before We
            <br />
            Get Started?
          </h2>
        </div>


        {/* FAQ 3-Column Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-[216px_1fr_216px]">
          {/* Left empty grid column */}
          <div className="hidden border-r border-white/20 md:block" />

          {/* Accordion List Center Column */}
          <div>
            <div className="py-6 md:py-10 font-['Inter'] max-w-[677px] min-h-[623px]">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;

                return (
                  <div
                    key={faq.question}
                    className={`border-b border-white/20 transition-colors ${
                      isOpen ? "bg-[#1b1b1b]" : "bg-black"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => toggleFAQ(index)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left sm:px-6"
                    >
                      <span className="text-base font-medium leading-snug text-white sm:text-[18px]">
                        {faq.question}
                      </span>

                      <span
                        className={`flex size-[34px] shrink-0 items-center justify-center border transition-colors ${
                          isOpen
                            ? "border-white bg-white text-black"
                            : "border-white/20 bg-transparent text-white"
                        }`}
                      >
                        {isOpen ? (
                          <Minus size={18} strokeWidth={1.5} />
                        ) : (
                          <Plus size={18} strokeWidth={1.5} />
                        )}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-5 sm:px-6 sm:pr-14">
                        <p className="text-[18px] leading-[1.5] text-white/75 sm:text-base">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right empty grid column */}
          <div className="hidden border-l border-white/20 md:block" />
        </div>

        
      </div>
    </section>
  );
}
