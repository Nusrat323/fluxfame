import {
  FaRobot,
  FaComments,
  FaCalendarCheck,
  FaUserCheck,
  FaArrowRight,
  FaCheckCircle,
  FaChartLine,
} from "react-icons/fa";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ease = [0.16, 1, 0.3, 1];

const automationSteps = [
  {
    icon: FaComments,
    title: "Lead Arrives",
    description: "New lead enters your system.",
  },
  {
    icon: FaRobot,
    title: "AI Responds",
    description: "Instant reply + qualification.",
  },
  {
    icon: FaUserCheck,
    title: "Lead Qualified",
    description: "High-intent leads are identified.",
  },
  {
    icon: FaCalendarCheck,
    title: "Appointment Booked",
    description: "Qualified leads move to booking.",
  },
];

const benefits = [
  "Instant response",
  "AI qualification",
  "CRM automation",
  "Automated follow-up",
];

const growthData = [
  { month: "Jan", value: 18 },
  { month: "Feb", value: 25 },
  { month: "Mar", value: 32 },
  { month: "Apr", value: 40 },
  { month: "May", value: 48 },
  { month: "Jun", value: 55 },
  { month: "Jul", value: 63 },
  { month: "Aug", value: 70 },
  { month: "Sep", value: 77 },
  { month: "Oct", value: 84 },
  { month: "Nov", value: 91 },
  { month: "Dec", value: 100 },
];

export default function CaseStudyPreview() {
  return (
    <div className="relative h-full overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.055] p-5 shadow-[0_0_60px_rgba(217,255,47,.045)] backdrop-blur-[30px] sm:p-6">
      {/* BACKGROUND GLOW */}

      <div className="pointer-events-none absolute -left-20 -top-20 h-56 w-56 rounded-full bg-lime-400/10 blur-[90px]" />

      <div className="pointer-events-none absolute -bottom-24 -right-20 h-64 w-64 rounded-full bg-lime-400/8 blur-[100px]" />

      {/* HEADER */}

      <div className="relative z-10 mb-4 flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-lime-400">
            AI Automation
          </p>

          <h3 className="mt-2 text-2xl font-black leading-tight sm:text-3xl">
            Your Business
            <br />
            <span className="gradient-text">
              After Automation
            </span>
          </h3>
        </div>

        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-lime-400/20 bg-lime-400/10 text-lime-400 shadow-[0_0_25px_rgba(217,255,47,.08)]">
          <FaRobot />
        </div>
      </div>

      {/* AUTOMATION FLOW */}

      <div className="relative z-10 mt-5 rounded-2xl border border-white/[0.08] bg-black/20 p-4">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-[0.16em] text-gray-500">
              Automated Journey
            </p>

            <p className="mt-1 text-sm font-semibold text-white">
              Lead → Appointment
            </p>
          </div>

          <div className="flex items-center gap-2 text-[10px] text-lime-400">
            <span className="h-2 w-2 animate-pulse rounded-full bg-lime-400" />
            Live
          </div>
        </div>

        <div className="space-y-2.5">
          {automationSteps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.title}
                initial={{
                  opacity: 0,
                  x: -15,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.3,
                }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.08,
                  ease,
                }}
              >
                <div
                  className="
                    group
                    flex
                    items-center
                    gap-3
                    rounded-xl
                    border
                    border-white/[0.07]
                    bg-white/[0.035]
                    p-3
                    transition-all
                    duration-300
                    hover:border-lime-400/20
                    hover:bg-white/[0.055]
                  "
                >
                  <div
                    className="
                      flex
                      h-9
                      w-9
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      bg-lime-400/10
                      text-sm
                      text-lime-400
                      transition-transform
                      duration-300
                      group-hover:scale-105
                    "
                  >
                    <Icon />
                  </div>

                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-white">
                      {step.title}
                    </p>

                    <p className="mt-0.5 text-xs leading-relaxed text-gray-500">
                      {step.description}
                    </p>
                  </div>

                  <FaCheckCircle className="ml-auto shrink-0 text-xs text-lime-400/70" />
                </div>

                {index !== automationSteps.length - 1 && (
                  <div className="ml-[17px] h-2.5 w-px bg-gradient-to-b from-lime-400/30 to-transparent" />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* GROWTH VISUAL */}

      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.25,
        }}
        transition={{
          duration: 0.5,
          delay: 0.15,
          ease,
        }}
        className="relative z-10 mt-4 overflow-hidden rounded-2xl border border-white/[0.08] bg-black/20 p-4"
      >
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-[0.16em] text-gray-500">
              Growth Momentum
            </p>

            <div className="mt-1 flex items-center gap-2">
              <FaChartLine className="text-xs text-lime-400" />

              <p className="text-sm font-semibold text-white">
                Business Growth
              </p>
            </div>
          </div>

          <span className="rounded-full border border-lime-400/15 bg-lime-400/[0.06] px-2.5 py-1 text-[9px] font-medium text-lime-300">
            2026
          </span>
        </div>

        {/* CHART */}

        <div className="mt-5 flex h-[105px] items-end gap-[5px] sm:gap-2">
          {growthData.map((item, index) => (
            <div
              key={item.month}
              className="flex h-full flex-1 flex-col items-center justify-end gap-1.5"
            >
              <div className="flex h-[78px] w-full items-end">
                <motion.div
                  initial={{
                    height: 0,
                  }}
                  whileInView={{
                    height: `${item.value}%`,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.3,
                  }}
                  transition={{
                    duration: 0.55,
                    delay: 0.35 + index * 0.055,
                    ease,
                  }}
                  className="
                    relative
                    w-full
                    min-w-[4px]
                    overflow-hidden
                    rounded-t-[5px]
                    bg-gradient-to-t
                    from-lime-500/30
                    via-lime-400/60
                    to-lime-300
                  "
                >
                  <motion.div
                    initial={{
                      opacity: 0,
                    }}
                    whileInView={{
                      opacity: 1,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      delay: 0.5 + index * 0.055,
                    }}
                    className="absolute inset-x-0 top-0 h-px bg-lime-200/80"
                  />
                </motion.div>
              </div>

              <span className="text-[7px] text-white/30 sm:text-[8px]">
                {item.month}
              </span>
            </div>
          ))}
        </div>

        {/* CHART FOOTER */}

        <div className="mt-3 flex items-center justify-between border-t border-white/[0.06] pt-3">
          <div>
            <p className="text-[8px] uppercase tracking-wider text-white/25">
              Lead Flow
            </p>

            <p className="mt-0.5 text-xs font-semibold text-white/70">
              Increasing
            </p>
          </div>

          <div className="text-right">
            <p className="text-[8px] uppercase tracking-wider text-white/25">
              Momentum
            </p>

            <p className="mt-0.5 text-xs font-semibold text-lime-400">
              ↑ Growing
            </p>
          </div>
        </div>
      </motion.div>

      {/* BENEFITS */}

      <div className="relative z-10 mt-4 grid grid-cols-2 gap-2">
        {benefits.map((benefit, index) => (
          <motion.div
            key={benefit}
            initial={{
              opacity: 0,
              y: 8,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.3,
              delay: 0.25 + index * 0.05,
              ease,
            }}
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

            <span className="text-xs text-white/80">
              {benefit}
            </span>
          </motion.div>
        ))}
      </div>

      {/* CTA */}

      <Link
        to="/services?service=automation"
        className="
          relative
          z-10
          mt-5
          flex
          w-full
          items-center
          justify-center
          gap-2
          rounded-2xl
          border
          border-lime-400/20
          bg-lime-400/10
          px-5
          py-3
          text-sm
          font-semibold
          text-lime-400
          transition-all
          duration-300
          hover:border-lime-400/40
          hover:bg-lime-400
          hover:text-black
          hover:shadow-[0_0_30px_rgba(163,230,53,0.15)]
        "
      >
        Explore Our Automation Systems

        <FaArrowRight className="text-xs transition-transform duration-200 group-hover:translate-x-1" />
      </Link>
    </div>
  );
}