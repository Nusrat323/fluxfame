import {
  FaRobot,
  FaShieldAlt,
  FaHeadset,
  FaChartLine,
  FaArrowRight,
  FaProjectDiagram,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function CTASection() {
  const features = [
    {
      icon: <FaRobot />,
      title: "AI Automation",
      subtitle: "Smart Workflows",
    },
    {
      icon: <FaProjectDiagram />,
      title: "Frontend",
      subtitle: "Web Development",
    },
    {
      icon: <FaChartLine />,
      title: "Business",
      subtitle: "Growth Focused",
    },
    {
      icon: <FaShieldAlt />,
      title: "Modern",
      subtitle: "Scalable Solutions",
    },
    {
      icon: <FaHeadset />,
      title: "Dedicated",
      subtitle: "Support",
    },
  ];

  return (
    <section className="relative py-16 lg:py-20 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[350px] h-[120px] bg-lime-400/10 blur-[90px]" />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* MAIN CTA CARD */}
          <div
            className="
              relative overflow-hidden
              rounded-[28px]
              bg-white/[0.04]
              backdrop-blur-[30px]
              border border-lime-400/20
              shadow-[0_0_50px_rgba(217,255,47,.06)]
              px-6 py-4 lg:px-8 lg:py-5
            "
          >
            {/* TOP LEFT GLOW */}
            <div className="absolute top-0 left-0 w-50 h-px bg-gradient-to-r from-lime-400/70 to-transparent" />

            {/* BOTTOM RIGHT GLOW */}
            <div className="absolute bottom-0 right-0 w-40 h-px bg-gradient-to-l from-lime-400/50 to-transparent" />

            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <div>
                <h2 className="text-2xl lg:text-4xl font-black leading-tight">
                  Ready to Build & Grow Your Business?
                </h2>

                <p className="text-gray-400 mt-3 max-w-xl text-sm lg:text-base">
                  From modern frontend websites to AI-powered automation
                  systems, we create scalable digital solutions that help
                  businesses grow, improve efficiency, and deliver better
                  customer experiences.
                </p>
              </div>

              <Link
                to="/contact"
                className="
                  shrink-0
                  bg-lime-400
                  text-black
                  font-semibold
                  px-6 py-3.5
                  rounded-2xl
                  flex items-center justify-center gap-3
                  hover:scale-105
                  transition-all
                "
              >
                Start Your Project
                <FaArrowRight />
              </Link>
            </div>
          </div>

          {/* FEATURES CARD */}
          <div
            className="
              mt-3
              rounded-[24px]
              bg-white/[0.04]
              backdrop-blur-[30px]
              border border-white/10
              px-4 py-4
            "
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
              {features.map((item, index) => (
                <div
                  key={index}
                  className="
                    flex items-center gap-3
                    p-3
                    rounded-2xl
                    bg-white/[0.03]
                    border border-white/[0.04]
                  "
                >
                  <div
                    className="
                      w-10 h-10 shrink-0
                      rounded-full
                      bg-lime-400/10
                      border border-lime-400/20
                      flex items-center justify-center
                      text-lime-400
                      shadow-[0_0_20px_rgba(217,255,47,.12)]
                    "
                  >
                    {item.icon}
                  </div>

                  <div>
                    <p className="font-medium text-sm leading-tight">
                      {item.title}
                    </p>

                    <p className="text-gray-500 text-xs mt-1 leading-tight">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}