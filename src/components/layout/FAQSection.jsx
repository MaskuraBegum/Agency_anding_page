
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { extBottom, extTop, frame2 } from "./layout";

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
    <section
      id="faq"
      className="scroll-mt-[70px] overflow-x-clip bg-black text-white"
    >
      <div className={`${frame2} ${extTop} ${extBottom}`}>
        {/* FAQ Heading */}
        <div className="flex min-h-[230px] flex-col items-center justify-center border-b border-white/20 px-4 pt-10 text-center sm:min-h-[278px] sm:px-5 sm:pt-12">
          <span className="bg-[#242D3C] px-1.5 py-1 font-body text-[11px] md:text-[14px] font-normal uppercase leading-none tracking-[-0.5px] text-white shadow-[0px_4px_16px_0px_#00000026]">
            FAQ
          </span>

          <h2 className="mt-6 max-w-[340px] font-['Merriweather'] text-[24px] font-normal leading-[1.3] tracking-[-0.8px] sm:mt-8 sm:max-w-[600px] sm:text-3xl sm:leading-14 sm:tracking-[-1px] md:text-[48px]">
            Questions Before We
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            Get Started?
          </h2>
        </div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_minmax(0,677px)_minmax(0,1fr)]">
          {/* Left border column */}
          <div className="hidden border-r border-white/20 md:block" />

          {/* Accordion */}
          <div>
            <div className="min-h-0 pt-5 font-['Inter'] sm:pt-6 md:min-h-[603px] md:pt-6 lg:pt-20">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;

                return (
                  <div
                    key={faq.question}
                    className={`${
                      index === faqs.length - 1
                        ? "border-b-0"
                        : "border-b"
                    } border-white/20 transition-colors ${
                      isOpen ? "bg-[#1A1A1A]" : "bg-black"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => toggleFAQ(index)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-3 px-4 py-4 text-left sm:gap-5 sm:px-6 sm:py-5"
                    >
                      <span className="min-w-0 flex-1 font-body text-[14px] font-medium leading-[1.5] tracking-[-0.4px] text-white sm:text-base sm:leading-[28px] sm:tracking-[-1px] sm:text-[18px]">
                        {faq.question}
                      </span>

                      <span
                        className={`flex size-[30px] shrink-0 items-center justify-center border transition-colors sm:size-[34px] ${
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
                      <div className="max-w-[655px] px-4 pb-4 sm:px-6 sm:pb-5 sm:pr-14">
                        <p className="font-body text-[13px] font-medium leading-[1.6] tracking-[-0.2px] text-[#CACACA] sm:text-base sm:leading-[1.5] sm:tracking-[-0.5px]">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right border column */}
          <div className="hidden border-l border-white/20 md:block" />
        </div>
      </div>
    </section>
  );
}
