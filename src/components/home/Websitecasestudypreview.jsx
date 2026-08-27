import { FaCheckCircle, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const features = [
  "Custom UI/UX Design",
  "Fully Responsive Experience",
  "Product & Shopping Experience",
  "Cart & Checkout Flow",
  "Customer Account Pages",
  "Admin Management System",
  "Performance Optimized",
  "SEO Friendly Structure",
];

export default function WebsiteCaseStudyPreview() {
  return (
    <section className="relative overflow-hidden py-10">
      {/* BACKGROUND GLOW */}
      <div className="absolute left-20 top-20 h-72 w-72 rounded-full bg-lime-400/10 blur-[150px]" />
      <div className="absolute bottom-20 right-20 h-72 w-72 rounded-full bg-lime-400/10 blur-[150px]" />

      <div className="container-custom relative z-10 px-3 sm:px-6 lg:px-0">
        {/* CASE STUDY CARD */}
        <div
          className="
            relative grid overflow-hidden rounded-[30px]
            border border-white/10
            bg-white/[0.06]
            shadow-[0_0_60px_rgba(217,255,47,.05)]
            backdrop-blur-[40px]
            lg:grid-cols-2
          "
        >
          {/* CENTER DIVIDER */}
          <div className="absolute left-1/2 top-0 hidden h-full w-px bg-white/10 lg:block" />

          <div
            className="
              absolute left-1/2 top-1/2 hidden
              h-40 w-[1.5px]
              -translate-x-1/2 -translate-y-1/2
              bg-gradient-to-b from-transparent via-lime-400/30 to-transparent
              blur-[1px]
              lg:block
            "
          />

          {/* EDGE GLOW LINES */}
          <div className="absolute left-1/2 top-0 h-[1.5px] w-40 -translate-x-1/2 bg-gradient-to-r from-transparent via-lime-400/70 to-transparent blur-[1px]" />
          <div className="absolute bottom-0 left-1/2 h-[1.5px] w-40 -translate-x-1/2 bg-gradient-to-r from-transparent via-lime-400/70 to-transparent blur-[1px]" />
          <div className="absolute left-0 top-1/2 h-40 w-[1.5px] -translate-y-1/2 bg-gradient-to-b from-transparent via-lime-400/70 to-transparent blur-[1px]" />
          <div className="absolute right-0 top-1/2 h-40 w-[1.5px] -translate-y-1/2 bg-gradient-to-b from-transparent via-lime-400/70 to-transparent blur-[1px]" />

          {/* CORNER SOFT GLOWS */}
          <div className="pointer-events-none absolute left-1/2 top-0 h-20 w-56 -translate-x-1/2 bg-lime-400/8 blur-[60px]" />
          <div className="pointer-events-none absolute bottom-0 left-1/2 h-20 w-56 -translate-x-1/2 bg-lime-400/8 blur-[60px]" />
          <div className="pointer-events-none absolute left-0 top-1/2 h-56 w-20 -translate-y-1/2 bg-lime-400/6 blur-[60px]" />
          <div className="pointer-events-none absolute right-0 top-1/2 h-56 w-20 -translate-y-1/2 bg-lime-400/6 blur-[60px]" />

          {/* LEFT SIDE */}
          <div className="relative z-10 p-6 lg:p-8">
            <div className="glass mb-4 inline-flex items-center whitespace-nowrap rounded-full px-3 py-1.5 text-xs text-lime-400">
              ✦ CASE STUDY
            </div>

            <h2 className="text-2xl font-black leading-tight sm:text-3xl">
              Grocery E-commerce
              <br />
              <span className="gradient-text">
                Website Experience
              </span>
            </h2>

            <p className="mt-2 max-w-xl text-sm leading-relaxed text-gray-400">
              We designed and built a complete grocery shopping experience
              focused on intuitive product discovery, smooth navigation,
              secure customer journeys, and a seamless path from browsing
              to checkout.
            </p>

            {/* FEATURES */}
            <div className="mt-4 grid gap-2 sm:grid-cols-2">
              {features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-2"
                >
                  <FaCheckCircle className="shrink-0 text-sm text-lime-400" />

                  <span className="text-sm text-white/85">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <Link
              to="/case-studies"
              className="
                mt-5 flex w-full items-center justify-center gap-3
                rounded-2xl
                bg-lime-400
                px-6 py-2.5
                font-semibold
                text-black
                transition-all
                hover:scale-[1.03]
                hover:shadow-[0_0_30px_rgba(163,230,53,0.2)]
                sm:w-fit
              "
            >
              View Full Case Study
              <FaArrowRight />
            </Link>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative z-10 flex items-center p-6 lg:p-8">
            <div className="relative w-full">
              {/* OUTER GLOW */}
              <div className="pointer-events-none absolute -inset-4 rounded-[30px] bg-lime-400/10 blur-[60px]" />

              <div className="relative rounded-2xl bg-gradient-to-br from-lime-400/40 via-white/10 to-transparent p-[1.5px]">
                <div
                  className="
                    relative w-full overflow-hidden rounded-2xl
                    bg-[#0d1117]/80
                    shadow-[0_25px_70px_rgba(0,0,0,0.45)]
                    backdrop-blur-[24px]
                  "
                >
                  {/* BROWSER TOP BAR */}
                  <div className="flex items-center gap-2 border-b border-white/[0.06] bg-white/[0.05] px-4 py-3">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
                    <span className="h-2.5 w-2.5 rounded-full bg-lime-400/70" />

                    <div className="ml-3 flex min-w-0 flex-1 items-center gap-1.5 rounded-full bg-white/[0.06] px-3 py-1 text-[11px] text-gray-400">
                      <span className="h-2 w-2 shrink-0 rounded-full bg-lime-400 shadow-[0_0_8px_rgba(217,255,47,.8)]" />

                      <span className="truncate">
                        freshcart.app
                      </span>
                    </div>
                  </div>

                  {/* MOCK WEBSITE */}
                  <div className="relative p-3">
                    <div className="pointer-events-none absolute left-1/2 top-0 h-16 w-3/4 -translate-x-1/2 bg-lime-400/10 blur-[50px]" />

                    {/* NAVIGATION */}
                    <div className="relative mb-2 flex items-center justify-between">
                      <div className="h-2.5 w-14 rounded-full bg-lime-400/60" />

                      <div className="flex gap-2">
                        <div className="h-2 w-7 rounded-full bg-white/20" />
                        <div className="h-2 w-7 rounded-full bg-white/20" />
                        <div className="h-2 w-7 rounded-full bg-white/20" />
                      </div>

                      <div className="h-5 w-5 rounded-full bg-white/10" />
                    </div>

                    {/* HERO */}
                    <div className="relative mb-2 overflow-hidden rounded-xl border border-white/[0.06] bg-gradient-to-br from-lime-400/15 to-transparent p-2.5">
                      <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-lime-400/15 blur-[40px]" />

                      <div className="mb-1.5 h-2.5 w-2/3 rounded-full bg-white/40" />

                      <div className="mb-2 h-2 w-1/2 rounded-full bg-white/20" />

                      <div className="h-5 w-16 rounded-lg bg-lime-400/80 shadow-[0_0_16px_rgba(217,255,47,.35)]" />
                    </div>

                    {/* PRODUCTS */}
                    <div className="grid grid-cols-3 gap-2">
                      {[1, 2, 3].map((item) => (
                        <div
                          key={item}
                          className="
                            rounded-lg
                            border border-white/[0.06]
                            bg-white/[0.05]
                            p-1.5
                            transition-transform
                            hover:-translate-y-1
                          "
                        >
                          <div className="mb-1.5 h-8 w-full rounded-md bg-white/[0.08]" />

                          <div className="mb-1 h-1.5 w-3/4 rounded-full bg-white/20" />

                          <div className="h-1.5 w-1/2 rounded-full bg-lime-400/60" />
                        </div>
                      ))}
                    </div>

                    {/* BOTTOM SHOPPING ROW */}
                    <div className="mt-2 flex items-center justify-between rounded-lg border border-white/[0.06] bg-white/[0.035] px-2.5 py-2">
                      <div>
                        <div className="mb-1 h-1.5 w-16 rounded-full bg-white/20" />
                        <div className="h-1.5 w-10 rounded-full bg-lime-400/50" />
                      </div>

                      <div className="h-6 w-16 rounded-lg bg-lime-400/70" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}