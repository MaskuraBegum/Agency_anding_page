import { ArrowRight } from "lucide-react";
import { frame2, extTop, extBottom } from "./layout";
import com1 from "../../assets/com1.png";
import com2 from "../../assets/com2.png";
import com3 from "../../assets/com3.png";
import card1 from "../../assets/card1.png";

const communicationTools = [
  { 
    image: com1, 
    title: "For Communication", 
    alt: "Slack logo representing team communication" 
  },
  { 
    image: com2, 
    title: "For Daily Updates", 
    alt: "Notion logo representing daily project updates" 
  },
  { 
    image: com3, 
    title: "For Check-in calls", 
    alt: "Google Meet logo representing check-in calls" 
  },
];

const details = [
  ["Price", "Certified"],
  ["Timeline", "48 hours"],
  ["Page", "1 page"],
  ["Revisions", "Unlimited"],
];

function CommunicationSection() {
  return (
    <div>
      {/* Top line comes from the end of ProcessSection, so only a bottom
          border here (the middle line between the two rows) */}
      <div className="flex min-h-[105px] items-center justify-center border-b border-white/20 px-6 py-7 text-center">
        <p className="max-w-[900px] text-base font-medium leading-relaxed tracking-tight text-white sm:text-lg">
          Clear communication, regular updates, and check-in calls keep you
          involved from start to finish.
        </p>
      </div>

      {/* Bottom line is the extended line */}
      <div className={`${extBottom} grid grid-cols-1 bg-black sm:grid-cols-3`}>
  {communicationTools.map((tool, index) => (
    <div
      key={tool.title}
      className={`group flex min-h-[60px] items-center justify-center gap-2 bg-black px-4 py-0 transition-colors duration-300 hover:bg-white/[0.09] sm:min-h-[60px] ${
        index !== 2
          ? "border-b border-white/20 sm:border-b-0 sm:border-r"
          : ""
      }`}
    >
      <img
        src={tool.image}
        alt={tool.alt}
        aria-hidden="true"
        loading="lazy"
        className="size-12 shrink-0 object-contain sm:size-[68px]"
      />
      <p className="-ml-4 text-[14px] font-medium tracking-tight text-white md:text-[10px] lg:text-[18px] text-center">
        {tool.title}
      </p>
    </div>
  ))}
</div>
    </div>
  );
}

function SilverLines({ id, viewBox, startX, endX, top, bottom, className }) {
  const gap = 13;
  const paths = [0, 1, 2, 3].map(
    (i) => `M ${startX + i * gap} ${top} L ${endX + i * gap} ${bottom}`
  );

  return (
    <svg
      viewBox={viewBox}
      preserveAspectRatio="xMidYMid slice"
      className={`h-full w-full ${className}`}
    >
      <defs>
        <linearGradient id={`${id}-line`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#b8bbc0" stopOpacity="0.5" />
          <stop offset="35%" stopColor="#ffffff" stopOpacity="0.95" />
          <stop offset="60%" stopColor="#c6c9cd" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0.4" />
        </linearGradient>

        <filter id={`${id}-shadow`} x="-30%" y="-10%" width="160%" height="120%">
          <feGaussianBlur stdDeviation="3" />
        </filter>
      </defs>

      {/* Soft shadows */}
      <g
        fill="none"
        stroke="#8e9298"
        strokeWidth="9"
        opacity="0.22"
        filter={`url(#${id}-shadow)`}
      >
        {paths.map((d) => (
          <path key={d} d={d} />
        ))}
      </g>

      {/* Main silver lines */}
      <g
        fill="none"
        stroke={`url(#${id}-line)`}
        strokeWidth="6"
        strokeLinecap="butt"
      >
        {paths.map((d) => (
          <path key={d} d={d} />
        ))}
      </g>

      {/* Sharp white highlights */}
      <g fill="none" stroke="#ffffff" strokeWidth="1.5" opacity="0.9">
        <path d={paths[0]} />
        <path d={paths[2]} />
      </g>

      {/* Fine grey edges */}
      <g fill="none" stroke="#a6a9ae" strokeWidth="1" opacity="0.65">
        <path d={paths[1]} />
        <path d={paths[3]} />
      </g>
    </svg>
  );
}

function DiagonalBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
    >
      {/* Mobile / tablet */}
      <SilverLines
        id="silverMobile"
        viewBox="0 0 600 800"
        startX={330}
        endX={735}
        top={-30}
        bottom={830}
        className="lg:hidden"
      />

      {/* Desktop: same geometry as the original (700,-30 -> 1080,776) */}
      <SilverLines
        id="silverDesktop"
        viewBox="0 0 1210 746"
        startX={700}
        endX={1080}
        top={-30}
        bottom={776}
        className="hidden lg:block"
      />
    </div>
  );
}

export default function LaunchSection() {
  return (
    <section
      id="launch"
      className="overflow-x-clip bg-black font-['Inter'] text-white"
    >
      {/* frame2 = vertical borders only */}
      <div className={frame2}>
        <div className="mb-30">
          <CommunicationSection />
        </div>

        {/* Extended lines at the start and end of the big block.
            They sit on this wrapper, not on the overflow-hidden block,
            so they aren't clipped. */}
        <div className={`${extTop} ${extBottom}`}>
          <div className="relative isolate overflow-hidden bg-[#f1f2f4] text-black">
            <DiagonalBackground />

            <div className="relative z-10 grid gap-12 px-6 py-12 sm:px-8 sm:py-14 lg:min-h-[680px] lg:grid-cols-[1.55fr_0.85fr] lg:items-center lg:gap-8 lg:px-[42px] lg:py-[60px]">
              <div className="flex h-full flex-col items-start">
                <span className="bg-[#202938] px-1.5 py-1 text-xs font-normal uppercase leading-none text-white shadow-[0_4px_12px_rgba(0,0,0,0.2)] sm:text-sm">
                  Launch Without the Long Wait
                </span>

                <h2 className="mt-7 text-[#010101] font-heading font-normal text-[40px] md:text-[60px] lg:text-[80px] leading-[86px] tracking-[-1px] mt-10">
                  $1,112
                  <br />
                  <span className="inline-block my-1">From Idea to</span>
                  <br />
                  Live Website
                </h2>

                <div className="mt-16 max-w-[565px] lg:mt-auto lg:pt-16">
                  <h3 className="text-lg font-body font-semibold leading-[1.4] tracking-[-0.035em] sm:text-[18px] text-[#010101]leading-[26px] tracking-[-1px]">
                    48 hours. One complete landing page. Ready to launch.
                  </h3>

                  <p className="mt-3 text-[15px] font-medium sm:text-[18px] text-[#010101] leading-[26px] tracking-[-1px]">
                    We handle the full process, from Figma UX/UI design and
                    conversion-focused layout to Framer or Webflow development,
                    responsive optimization, and final launch.
                  </p>

                  <p className="mt-4 text-[15px] font-semibold font-body text-[#010101] sm:text-[18px] leading-[26px] tracking-[-1px]">
                    $1,112 flat. One focused project. Designed to convert.
                    Built to launch.
                  </p>
                </div>
              </div>

              <div className="z-10 mx-auto w-full max-w-[305px] bg-white  shadow-[0_14px_35px_rgba(0,0,0,0.17)] sm:max-w-[310px] lg:mt-8">
                <div className="h-[195px] overflow-hidden bg-[#052c83] sm:h-[215px]">
                  <img
                    src={card1}
                    alt="Preview of a modern landing page design for a financial dashboard featuring headline Transform Cash Into Lasting Growth"
                    loading="lazy"
                    className="h-full w-full object-cover object-top"
                  />
                </div>

                <div className="px-3 pb-3 pt-4 sm:px-4">
                  <h3 className="text-sm font-['Inter'] font-medium  leading-[20.62px] tracking-[-0.74px] uppercase  text-[#000000] sm:text-[13.26px]]">
                    Landing Page Live
                  </h3>

                  <div className="mt-3">
                    {details.map(([label, value]) => (
                      <div
                        key={label}
                        className="flex items-center justify-between gap-3 border-b border-black/15  py-2 font-['Inter'] text-[12px] leading-[20px] tracking-[-0.5px] text-[#636363] sm:text-[13px]">
                        <span>
                          <span className="mr-2 font-medium">•</span>
                          {label}
                        </span>
                        <span className="font-bold text-[#858585]">
                          {value}
                        </span>
                      </div>
                    ))}
                  </div>

                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSei64i0y7IMQl9JlE9cP-StTMGTM8X8bGvRPvpOSixo_Nh5Vg/viewform?usp=publish-editor"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 flex min-h-[39px] items-center justify-center gap-2 bg-[linear-gradient(358.13deg,#00DBF5_-49.55%,#3A4DE9_98.42%)] px-3 py-2 text-center text-xs font-medium leading-[26px] tracking-[-1px] text-[#FFFFFF] transition-opacity hover:opacity-90 sm:text-[14px]"
                  >
                    Book Your Free Call
                    <ArrowRight className="size-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}