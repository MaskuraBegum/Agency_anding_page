
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

const communicationMethods = [
  {
    title: "For Communication",
    icon: "https://img.icons8.com/color/96/slack-new.png",
    alt: "Slack logo",
  },
  {
    title: "For Daily Updates",
    icon: "https://cdn.simpleicons.org/notion/FFFFFF",
    alt: "Notion logo",
  },
  {
    title: "For Check-in calls",
    icon: "https://cdn.simpleicons.org/googlemeet/00897B",
    alt: "Google Meet logo",
  },
];

const details = [
  ["Price", "Certified"],
  ["Timeline", "48 hours"],
  ["Page", "1 page"],
  ["Revisions", "Unlimited"],
];

export default function LaunchSection() {
  return (
    <section id="launch" className="bg-black text-white">
      <div className="mx-auto max-w-[1237px]">
        {/* Communication section */}
        <div className="border-t border-white/20 mb-20">
          <div className="flex min-h-[100px] items-center justify-center border-b border-white/20 px-5 py-6 text-center">
            <p className="max-w-[800px] text-xs leading-relaxed text-white sm:text-base">
              Clear communication, regular updates, and check-in calls keep
              you involved from start to finish.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3">
            {communicationMethods.map((method, index) => (
              <div
                key={method.title}
                className={`flex min-h-[76px]  items-center justify-center gap-3 border-t border-white/20 bg-black px-4 py-4 ${
                  index > 0 ? "sm:border-l" : ""
                }`}
              >
                <img
                  src={method.icon}
                  alt={method.alt}
                  className="size-8 shrink-0 object-contain"
                  loading="lazy"
                />

                <span className="whitespace-nowrap text-sm font-medium text-white sm:text-base">
                  {method.title}
                </span>
                
              </div>
            ))}
          </div>
          <div className="bleed-line" />
        </div>

        {/* Promotional section */}
        <div className="relative overflow-hidden bg-[#f3f3f5] text-black">
          {/* Decorative background lines */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-[19%] top-[-20%] h-[150%] w-[90px] rotate-[-24deg] bg-[repeating-linear-gradient(90deg,transparent_0px,transparent_8px,rgba(0,0,0,0.07)_9px,rgba(0,0,0,0.07)_12px)] blur-[1px]"
          />

          <div className="relative grid gap-10 px-6 py-10 sm:px-8 sm:py-14 lg:min-h-[600px] lg:grid-cols-[1.5fr_0.8fr] lg:items-center lg:gap-10 lg:px-[42px] lg:py-[60px]">
            {/* Left content */}
            <div className="flex flex-col items-start">
              <span className="bg-slate-700 px-1.5 py-1 text-xs uppercase leading-none text-white shadow-md">
                Launch Without the Long Wait
              </span>

              <h2 className="mt-7 font-serif text-[clamp(3.5rem,7vw,5.5rem)] leading-[0.99] tracking-[-0.045em]">
                $1,112
                <br />
                From Idea to
                <br />
                Live Website
              </h2>

              <div className="mt-12 max-w-[580px] sm:mt-16 lg:mt-auto lg:pt-16">
                <h3 className="text-base font-semibold tracking-tight sm:text-lg">
                  48 hours. One complete landing page. Ready to launch.
                </h3>

                <p className="mt-3 text-[15px] leading-[1.55] text-black sm:text-base">
                  We handle the full process, from Figma UX/UI design and
                  conversion-focused layout to Framer or Webflow development,
                  responsive optimization, and final launch.
                </p>
              </div>
            </div>

            {/* Pricing card */}
            <div className="z-10 mx-auto w-full max-w-[285px] bg-white p-1.5 shadow-[0_12px_35px_rgba(0,0,0,0.18)] sm:max-w-[320px] lg:mt-8">
              {/* Project preview */}
              <div className="flex h-[185px] items-center justify-center overflow-hidden bg-[linear-gradient(145deg,#052c83,#078cc2_45%,#b8a6ff)] p-3 sm:h-[205px]">
                <div className="flex h-full w-full flex-col items-center justify-center border border-white/40 bg-white/90 px-3 text-center">
                  <span className="text-xs font-semibold text-blue-700">
                    DIGITAL EXPERIENCE
                  </span>

                  <p className="mt-3 font-serif text-2xl leading-tight text-black">
                    Transform Ideas
                    <br />
                    Into Growth
                  </p>

                  <div className="mt-4 h-2 w-24 rounded-full bg-blue-500" />
                  <div className="mt-2 h-2 w-16 rounded-full bg-purple-300" />
                </div>
              </div>

              <div className="px-3 pb-3 pt-4 sm:px-4">
                <h3 className="text-sm font-semibold uppercase text-black">
                  Landing Page Live
                </h3>

                <div className="mt-3">
                  {details.map(([label, value]) => (
                    <div
                      key={label}
                      className="flex items-center justify-between gap-3 border-b border-black/15 py-2 text-xs sm:text-[13px]"
                    >
                      <span className="text-black/70">
                        <span className="mr-2">•</span>
                        {label}
                      </span>

                      <span className="font-semibold text-black">
                        {value}
                      </span>
                    </div>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="mt-4 flex min-h-[39px] items-center justify-center gap-2 bg-[linear-gradient(90deg,#4945ff,#0ba9ed)] px-3 py-2 text-center text-xs font-medium text-white sm:text-sm"
                >
                  Book Your Free Call
                  <ArrowRight className="size-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom divider */}
        <div className="bleed-line" />
      </div>
    </section>
  );
}
