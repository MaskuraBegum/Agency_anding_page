import paypalLogo from "../../assets/logos/PayPal.png";
import paycoLogo from "../../assets/logos/PAYCO.png";
import tossPayLogo from "../../assets/logos/toss pay.png";
import amazonPayLogo from "../../assets/logos/amazonpay.png";
import { frame } from "../layout/layout.js"; // adjust the path to where layout.js lives

const brands = [
  { name: "PayPal", logo: paypalLogo, width: "110px" },
  { name: "PAYCO", logo: paycoLogo, width: "100px" },
  { name: "PayPal", logo: paypalLogo, width: "110px" },
  { name: "toss pay", logo: tossPayLogo, width: "105px" },
  { name: "amazon pay", logo: amazonPayLogo, width: "115px" },
];

export default function TrustedBy() {
  return (
    <section aria-label="Trusted by" className="w-full bg-black text-white">
      <div className={frame}>
        <div className="relative flex min-h-[362px] w-full flex-col items-center justify-center border-x border-white/20 px-5 py-14 sm:px-10">
          {/* Section Label */}
          <span className="bg-slate-700/70 px-1.5 py-1 font-['Inter'] text-xs font-normal uppercase leading-none tracking-wide text-white">
            They Trusted Us
          </span>

          {/* Brand Logos */}
          <div className="mt-12 grid w-full max-w-[900px] grid-cols-2 items-center sm:mt-14 sm:grid-cols-5">
            {brands.map((brand, index) => (
              <div
                key={`${brand.name}-${index}`}
                className={`
                  flex min-h-[65px] items-center justify-center px-3
                  ${index % 2 === 1 ? "border-l border-white/20" : ""}
                  ${index >= 2 ? "border-t border-white/20 sm:border-t-0" : ""}
                  ${index > 0 ? "sm:border-l sm:border-white/20" : "sm:border-l-0"}
                  ${index === 4 ? "col-span-2 sm:col-span-1" : ""}
                `}
              >
                <img
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  style={{ width: brand.width }}
                  className="h-auto max-h-[48px] max-w-full object-contain opacity-100 transition-transform duration-300 hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    
    </section>
  );
}