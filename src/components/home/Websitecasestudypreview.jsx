import { FaCheckCircle, FaArrowRight, FaCss3Alt } from "react-icons/fa";
import { SiReact, SiTailwindcss } from "react-icons/si";
import { Link } from "react-router-dom";

const features = [
  "Custom UI/UX Design",
  "Fully Responsive Layout",
  "Cart & Checkout Flow",
  "Auth & User Pages",
  "Admin Panel Management",
  "Performance Optimized",
  "SEO Friendly Structure",
];

const techStack = [
  { icon: <SiReact />, name: "React" },
  { icon: <SiTailwindcss />, name: "Tailwind" },
  { icon: <FaCss3Alt />, name: "CSS" },
];

export default function WebsiteCaseStudyPreview() {
  return (
    <section className="relative py-10 overflow-hidden">
      {/* BACKGROUND GLOW */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-lime-400/10 blur-[150px] rounded-full" />
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-lime-400/10 blur-[150px] rounded-full" />

      <div className="container-custom px-3 sm:px-6 lg:px-0 relative z-10">
        {/* CASE STUDY CARD */}
        <div
          className="
            relative overflow-hidden rounded-[30px]
            bg-white/[0.06] backdrop-blur-[40px]
            border border-white/10
            shadow-[0_0_60px_rgba(217,255,47,.05)]
            grid lg:grid-cols-2
          "
        >
         
          <div className="hidden lg:block absolute left-1/2 top-0 w-px h-full bg-white/10" />
          <div
            className="
              hidden lg:block absolute left-1/2 top-1/2
              -translate-x-1/2 -translate-y-1/2
              w-[1.5px] h-40
              bg-gradient-to-b from-transparent via-lime-400/30 to-transparent
              blur-[1px]
            "
          />

          {/* EDGE GLOW LINES */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-[1.5px] bg-gradient-to-r from-transparent via-lime-400/70 to-transparent blur-[1px]" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-40 h-[1.5px] bg-gradient-to-r from-transparent via-lime-400/70 to-transparent blur-[1px]" />
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[1.5px] h-40 bg-gradient-to-b from-transparent via-lime-400/70 to-transparent blur-[1px]" />
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[1.5px] h-40 bg-gradient-to-b from-transparent via-lime-400/70 to-transparent blur-[1px]" />

          {/* CORNER SOFT GLOWS */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-56 h-20 bg-lime-400/8 blur-[60px] pointer-events-none" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-56 h-20 bg-lime-400/8 blur-[60px] pointer-events-none" />
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-20 h-56 bg-lime-400/6 blur-[60px] pointer-events-none" />
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-20 h-56 bg-lime-400/6 blur-[60px] pointer-events-none" />

          {/* LEFT SIDE */}
          <div className="p-6 lg:p-8 relative z-10">
            <div className="glass inline-flex items-center px-3 py-1.5 rounded-full text-lime-400 text-xs whitespace-nowrap mb-4">
              ✦ CASE STUDY
            </div>

            <h2 className="text-2xl sm:text-3xl font-black leading-tight">
              Grocery E-commerce
              <br />
              <span className="gradient-text">Frontend Build</span>
            </h2>

            <p className="text-gray-400 mt-2 text-sm leading-relaxed max-w-xl">
              We designed and built a complete grocery e-commerce
              frontend from scratch, complete with a dedicated
              admin panel, focused on clean UI, smooth navigation
              and a seamless cart-to-checkout experience.
            </p>

            <div className="grid sm:grid-cols-2 gap-2 mt-4">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-2">
                  <FaCheckCircle className="text-lime-400 shrink-0 text-sm" />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 mt-4">
              {techStack.map((tech) => (
                <div
                  key={tech.name}
                  className="glass flex items-center gap-2 px-2.5 py-1 rounded-lg text-xs text-gray-300"
                >
                  <span className="text-lime-400">{tech.icon}</span>
                  {tech.name}
                </div>
              ))}
            </div>

            <Link
              to="/case-studies"
              className="
                mt-5 w-full sm:w-fit
                bg-lime-400 text-black font-semibold
                px-6 py-2.5 rounded-2xl
                flex items-center justify-center gap-3
                hover:scale-105 transition-all
              "
            >
              View Full Case Study
              <FaArrowRight />
            </Link>
          </div>

          {/* RIGHT SIDE */}
          <div className="p-6 lg:p-8 flex items-center relative z-10">
            <div className="relative w-full">
              <div className="absolute -inset-4 bg-lime-400/10 blur-[60px] rounded-[30px] pointer-events-none" />

              <div className="relative rounded-2xl p-[1.5px] bg-gradient-to-br from-lime-400/40 via-white/10 to-transparent">
                <div
                  className="
                    relative w-full overflow-hidden rounded-2xl
                    bg-[#0d1117]/80 backdrop-blur-[24px]
                    shadow-[0_25px_70px_rgba(0,0,0,0.45)]
                  "
                >
                  {/* Browser Top Bar */}
                  <div className="flex items-center gap-2 px-4 py-3 bg-white/[0.05] border-b border-white/[0.06]">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-lime-400/70" />

                    <div className="ml-3 flex-1 bg-white/[0.06] rounded-full px-3 py-1 text-[11px] text-gray-400 truncate flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-lime-400 shadow-[0_0_8px_rgba(217,255,47,.8)]" />
                      freshcart.app
                    </div>
                  </div>

                  {/* Mock Website */}
                  <div className="p-3 relative">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-16 bg-lime-400/10 blur-[50px] pointer-events-none" />

                    <div className="flex items-center justify-between mb-2 relative">
                      <div className="w-14 h-2.5 rounded-full bg-lime-400/60" />
                      <div className="flex gap-2">
                        <div className="w-7 h-2 rounded-full bg-white/20" />
                        <div className="w-7 h-2 rounded-full bg-white/20" />
                        <div className="w-7 h-2 rounded-full bg-white/20" />
                      </div>
                      <div className="w-5 h-5 rounded-full bg-white/10" />
                    </div>

                    <div className="rounded-xl bg-gradient-to-br from-lime-400/15 to-transparent border border-white/[0.06] p-2.5 mb-2 relative overflow-hidden">
                      <div className="absolute -top-6 -right-6 w-24 h-24 bg-lime-400/15 blur-[40px] rounded-full" />
                      <div className="w-2/3 h-2.5 rounded-full bg-white/40 mb-1.5" />
                      <div className="w-1/2 h-2 rounded-full bg-white/20 mb-2" />
                      <div className="w-16 h-5 rounded-lg bg-lime-400/80 shadow-[0_0_16px_rgba(217,255,47,.35)]" />
                    </div>

                    <div className="grid grid-cols-3 gap-2">
                      {[1, 2, 3].map((item) => (
                        <div
                          key={item}
                          className="rounded-lg bg-white/[0.05] border border-white/[0.06] p-1.5 transition-transform hover:-translate-y-1"
                        >
                          <div className="w-full h-8 rounded-md bg-white/[0.08] mb-1.5" />
                          <div className="w-3/4 h-1.5 rounded-full bg-white/20 mb-1" />
                          <div className="w-1/2 h-1.5 rounded-full bg-lime-400/60" />
                        </div>
                      ))}
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