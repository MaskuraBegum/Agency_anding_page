import { div } from "motion/react-client";

const brands = ["PayPal", "PAYCO", "PayPal", "toss pay", "amazon pay"];

export default function TrustedBy() {
  return (
    <div>
        <div className="h-px w-full lg:w-[1290px] bg-white/20 mx-0 lg:-mx-24" />
        <section
      aria-label="Trusted by"
      className="relative border-x-2 border-gray-900 bg-black text-white"
    >
      <div className="mx-auto flex min-h-[300px] max-w-[1237px] flex-col items-center justify-center px-5 py-16 sm:min-h-[340px] sm:py-20">
        {/* Section label */}
        <span className="bg-slate-700/70 px-1.5 py-1 text-xs font-normal uppercase leading-none tracking-wide text-white">
          They Trusted Us
        </span>

        {/* Brand names */}
        <div className="mt-10 grid w-full max-w-[900px] grid-cols-2 items-center sm:mt-11 sm:grid-cols-5">
          {brands.map((brand, index) => (
            <div
              key={`${brand}-${index}`}
              className={`flex min-h-[58px] items-center justify-center px-2 text-center ${
                index > 0 ? "sm:border-l sm:border-white/70" : ""
              } ${
                index % 2 === 1
                  ? "border-l border-white/40 sm:border-l"
                  : ""
              } ${
                index >= 2 ? "border-t border-white/30 sm:border-t-0" : ""
              } ${
                index === 4 ? "col-span-2 sm:col-span-1" : ""
              }`}
            >
              <span
                className={`whitespace-nowrap text-base font-bold tracking-tight text-white/45 sm:text-lg ${
                  brand === "PAYCO" ? "font-black" : ""
                } ${
                  brand === "toss pay" ? "font-semibold" : ""
                }`}
              >
                {brand === "amazon pay" ? (
                  <span className="relative inline-block">
                    amazon pay
                    <span className="absolute -bottom-1 left-1 h-1 w-7 rounded-full border-b-2 border-white/40" />
                  </span>
                ) : brand === "toss pay" ? (
                  <>
                    <span className="font-bold">toss</span>
                    <span className="font-normal"> pay</span>
                  </>
                ) : (
                  brand
                )}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
    <div className="h-px w-full lg:w-[1290px] bg-white/20 mx-0 lg:-mx-24" />
    </div>
  );
}
