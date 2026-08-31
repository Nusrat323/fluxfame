import {
  FaCheckCircle,
  FaArrowRight,
  FaGlobe,
  FaBolt,
} from "react-icons/fa";

import { Link } from "react-router-dom";

const features = [
  "Custom UI/UX Design",
  "Fully Responsive Experience",
  "Conversion-Focused Layout",
  "Product & Shopping Experience",
  "Fast & Performance Optimized",
  "SEO-Friendly Structure",
  "Clear Calls To Action",
  "Modern Customer Experience",
];

export default function WebsiteShowcasePreview() {
  return (
    <div className="relative h-full overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.055] p-5 shadow-[0_0_60px_rgba(217,255,47,.045)] backdrop-blur-[30px] sm:p-6">
      {/* BACKGROUND GLOWS */}

      <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-lime-400/10 blur-[90px]" />

      <div className="pointer-events-none absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-lime-400/8 blur-[100px]" />

      {/* HEADER */}

      <div className="relative z-10 mb-5 flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-lime-400">
            Website Experience
          </p>

          <h3 className="mt-2 text-2xl font-black leading-tight sm:text-3xl">
            Your Business
            <br />
            <span className="gradient-text">
              With A Better Website
            </span>
          </h3>
        </div>

        <div
          className="
            flex
            h-12
            w-12
            shrink-0
            items-center
            justify-center
            rounded-2xl
            border
            border-lime-400/20
            bg-lime-400/10
            text-lime-400
          "
        >
          <FaGlobe />
        </div>
      </div>

      <p className="relative z-10 text-sm leading-relaxed text-gray-400">
        Your website should do more than simply exist online. We build
        modern, responsive experiences designed to make your business
        look professional, communicate your value clearly, and turn
        visitors into customers.
      </p>

      {/* BROWSER MOCKUP */}

      <div className="relative z-10 mt-6">
        {/* GLOW */}

        <div className="pointer-events-none absolute -inset-4 rounded-[30px] bg-lime-400/8 blur-[45px]" />

        <div className="relative rounded-2xl bg-gradient-to-br from-lime-400/35 via-white/10 to-transparent p-[1.5px]">
          <div className="overflow-hidden rounded-2xl bg-[#0d1117]/95 shadow-[0_25px_70px_rgba(0,0,0,0.45)]">

            {/* BROWSER BAR */}

            <div className="flex items-center gap-2 border-b border-white/[0.06] bg-white/[0.045] px-3 py-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-lime-400/70" />

              <div className="ml-2 flex min-w-0 flex-1 items-center gap-2 rounded-full bg-white/[0.05] px-3 py-1.5 text-[10px] text-gray-500">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-lime-400 shadow-[0_0_8px_rgba(217,255,47,.8)]" />

                <span className="truncate">
                  yourbusiness.com
                </span>
              </div>
            </div>

            {/* WEBSITE */}

            <div className="relative p-3">
              {/* WEBSITE GLOW */}

              <div className="pointer-events-none absolute left-1/2 top-0 h-28 w-3/4 -translate-x-1/2 bg-lime-400/10 blur-[55px]" />

              {/* NAV */}

              <div className="relative mb-3 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <div className="h-2.5 w-2.5 rounded-full bg-lime-400" />
                  <div className="h-2.5 w-12 rounded-full bg-white/30" />
                </div>

                <div className="hidden gap-2 sm:flex">
                  <div className="h-1.5 w-8 rounded-full bg-white/15" />
                  <div className="h-1.5 w-8 rounded-full bg-white/15" />
                  <div className="h-1.5 w-8 rounded-full bg-white/15" />
                  <div className="h-1.5 w-8 rounded-full bg-white/15" />
                </div>

                <div className="h-6 w-6 rounded-full bg-white/[0.07]" />
              </div>
              <div className="relative overflow-hidden rounded-xl border border-white/[0.06] bg-black">
                <img
                  src="/casestudy.jpg"
                  alt="Website showcase preview"
                  className="
                    block
                    h-auto
                    w-full
                    object-cover
                    object-top
                  "
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/10" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FEATURES */}

      <div className="relative z-10 mt-5 grid grid-cols-2 gap-2">
        {features.map((feature) => (
          <div
            key={feature}
            className="
              flex
              items-center
              gap-2
              rounded-xl
              border
              border-white/[0.06]
              bg-white/[0.025]
              px-3
              py-2.5
            "
          >
            <FaCheckCircle className="shrink-0 text-xs text-lime-400" />

            <span className="text-xs leading-tight text-white/80">
              {feature}
            </span>
          </div>
        ))}
      </div>

      {/* CTA */}

      <Link
        to="/case-studies"
        className="
          relative
          z-10
          mt-6
          flex
          w-full
          items-center
          justify-center
          gap-2
          rounded-2xl
          bg-lime-400
          px-5
          py-3
          text-sm
          font-semibold
          text-black
          transition-all
          duration-300
          hover:scale-[1.015]
          hover:shadow-[0_0_30px_rgba(163,230,53,0.18)]
        "
      >
        Explore Our Websites
        <FaArrowRight className="text-xs" />
      </Link>
    </div>
  );
}