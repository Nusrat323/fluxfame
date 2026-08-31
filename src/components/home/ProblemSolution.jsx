import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  ArrowRight,
  Bot,
  CalendarCheck,
  Globe2,
  MessageSquare,
  RefreshCw,
  Sparkles,
  Target,
  Workflow,
  Maximize2,
} from "lucide-react";
import { Link } from "react-router-dom";

const ease = [0.16, 1, 0.3, 1];

const problems = [
  {
    number: "01",
    title: "No Lead Pipeline",
    description:
      "Leads arrive, but without a connected system, valuable opportunities slip through the cracks.",
    icon: Target,
  },
  {
    number: "02",
    title: "Invisible Online",
    description:
      "A weak digital presence makes it harder for the right customers to discover and trust your business.",
    icon: Globe2,
  },
  {
    number: "03",
    title: "Slow Response",
    description:
      "When customers have to wait for an answer, they often move to whoever responds first.",
    icon: MessageSquare,
  },
  {
    number: "04",
    title: "Leads Go Cold",
    description:
      "Without consistent follow-up, interested prospects can quietly disappear before they convert.",
    icon: RefreshCw,
  },
  {
    number: "05",
    title: "Manual Operations",
    description:
      "Your team spends valuable time repeating tasks that intelligent systems can handle automatically.",
    icon: Workflow,
  },
  {
    number: "06",
    title: "A Website That Doesn't Convert",
    description:
      "Your website should do more than look good. It should turn attention into real business opportunities.",
    icon: Globe2,
  },
];

const solutions = [
  {
    number: "01",
    title: "AI-Powered Lead Generation",
    description:
      "Capture and organize new opportunities around the clock.",
    icon: Target,
  },
  {
    number: "02",
    title: "AI Conversations",
    description:
      "Answer questions, qualify prospects, and keep conversations moving 24/7.",
    icon: Bot,
  },
  {
    number: "03",
    title: "Automated Lead Qualification",
    description:
      "Identify high-intent prospects and move them into the right workflow.",
    icon: Sparkles,
  },
  {
    number: "04",
    title: "Instant Appointment Booking",
    description:
      "Turn qualified interest into booked conversations without the back-and-forth.",
    icon: CalendarCheck,
  },
  {
    number: "05",
    title: "Intelligent Follow-Ups",
    description:
      "Stay connected with prospects automatically, at exactly the right time.",
    icon: RefreshCw,
  },
  {
    number: "06",
    title: "Connected CRM Workflows",
    description:
      "Bring leads, conversations, appointments, and follow-ups into one system.",
    icon: Workflow,
  },
];

export default function ProblemSolution() {
  return (
    <section className="relative overflow-hidden bg-[#090d09] text-white">
      <AmbientBackground />
      <div className="relative z-10 mx-auto max-w-7xl px-4 pb-20 pt-20 sm:px-6 sm:pb-24 sm:pt-24 lg:px-8 lg:pb-28 lg:pt-28">
        <ProblemIntro />

        <ProblemList />

        <TruthStatement />
      </div>
      <SolutionSection />
    </section>
  );
}
function ProblemIntro() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
        filter: "blur(8px)",
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
      }}
      viewport={{
        once: true,
        amount: 0.5,
      }}
      transition={{
        duration: 0.9,
        ease,
      }}
      className="mx-auto max-w-4xl text-center"
    >
      {/* Badge */}

      <div className="inline-flex items-center gap-2 rounded-full border border-lime-400/20 bg-lime-400/[0.07] px-3.5 py-2 text-[9px] font-semibold uppercase tracking-[0.16em] text-lime-300 backdrop-blur-xl sm:text-[10px]">
        <span className="relative flex h-1.5 w-1.5">
          <span className="absolute inset-0 animate-ping rounded-full bg-lime-400 opacity-60" />
          <span className="relative h-1.5 w-1.5 rounded-full bg-lime-400 shadow-[0_0_12px_rgba(163,230,53,0.9)]" />
        </span>

        The Problem
      </div>

      {/* Heading */}

      <h2 className="mt-6 text-[2.6rem] font-black leading-[0.98] tracking-[-0.055em] sm:text-5xl lg:text-[4.3rem]">
        Is your business
        <br />

        <span className="bg-gradient-to-r from-lime-200 via-lime-400 to-green-400 bg-clip-text text-transparent">
          stuck in manual mode?
        </span>
      </h2>

      {/* Description */}

      <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-white/40 sm:text-[15px]">
        Growth shouldn't depend on chasing leads, answering the same questions,
        or manually keeping your business moving.
      </p>
    </motion.div>
  );
}
function ProblemList() {
  return (
    <div className="mx-auto mt-14 max-w-5xl sm:mt-16">
      {problems.map((problem, index) => (
        <ProblemItem
          key={problem.number}
          problem={problem}
          index={index}
        />
      ))}
    </div>
  );
}
function ProblemItem({ problem, index }) {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    amount: 0.55,
  });

  const Icon = problem.icon;

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        y: 25,
        filter: "blur(6px)",
      }}
      animate={
        isInView
          ? {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
            }
          : {}
      }
      transition={{
        duration: 0.7,
        delay: index * 0.04,
        ease,
      }}
      className="group relative border-t border-white/[0.065] py-5 sm:py-5.5"
    >
      <div className="relative flex items-center gap-4 sm:gap-6">
        {/* Number */}

        <span className="w-6 shrink-0 font-mono text-[9px] tracking-[0.15em] text-lime-400/30 sm:w-8">
          {problem.number}
        </span>

        {/* Icon */}

        <motion.div
          whileHover={{
            scale: 1.1,
            rotate: 4,
          }}
          transition={{
            duration: 0.25,
          }}
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.025] text-white/30 transition-all duration-500 group-hover:border-lime-400/25 group-hover:bg-lime-400/[0.07] group-hover:text-lime-300"
        >
          <Icon size={15} strokeWidth={1.8} />
        </motion.div>

        {/* Content */}

        <div className="min-w-0 flex-1">
          <h3 className="text-[16px] font-semibold tracking-[-0.02em] text-white/70 transition-colors duration-500 group-hover:text-white sm:text-lg">
            {problem.title}
          </h3>

          <p className="mt-1 max-w-2xl text-xs leading-5 text-white/28 transition-colors duration-500 group-hover:text-white/42 sm:text-sm">
            {problem.description}
          </p>
        </div>

        {/* Arrow */}

        <div className="hidden text-white/15 transition-all duration-500 group-hover:translate-x-1 group-hover:text-lime-300/70 sm:block">
          <ArrowRight size={15} />
        </div>
      </div>

      {/* Animated line */}

      <motion.div
        initial={{
          scaleX: 0,
        }}
        animate={
          isInView
            ? {
                scaleX: 1,
              }
            : {}
        }
        transition={{
          duration: 0.9,
          delay: index * 0.04 + 0.15,
          ease,
        }}
        className="absolute bottom-0 left-0 h-px w-full origin-left bg-gradient-to-r from-lime-400/20 via-white/[0.04] to-transparent"
      />

      {/* Hover glow */}

      <div className="pointer-events-none absolute inset-y-0 left-0 w-[45%] bg-gradient-to-r from-lime-400/[0.025] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    </motion.div>
  );
}

function TruthStatement() {
  return (
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
        amount: 0.5,
      }}
      transition={{
        duration: 0.9,
        ease,
      }}
      className="mx-auto mt-16 max-w-2xl text-center sm:mt-20"
    >
      <div className="mx-auto mb-5 h-px w-10 bg-lime-400/40" />

      <p className="text-[13px] leading-6 text-white/32 sm:text-sm sm:leading-7">
        Every one of these problems has the same underlying solution —{" "}
        <span className="text-white/50">
          intelligent automation and a high-converting web presence working
          together as one system.
        </span>
      </p>

      <p className="mt-3 text-[12px] text-white/25 sm:text-sm">
        That's what{" "}
        <span className="text-lime-300/75">FluxFame</span> builds for you.
      </p>
    </motion.div>
  );
}

function SolutionSection() {
  return (
    <div className="relative border-t border-white/[0.06] bg-[#0d120d]">
      {/* Ambient glow */}

      <motion.div
        animate={{
          opacity: [0.08, 0.15, 0.08],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute left-[35%] top-[-220px] h-[500px] w-[650px] rounded-full bg-lime-400/[0.06] blur-[130px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        <SolutionHero />

        <SolutionFeatures />

        <SolutionCTA />
      </div>
    </div>
  );
}
function SolutionHero() {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    amount: 0.25,
  });

  return (
    <div
      ref={ref}
      className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14"
    >
      

      <motion.div
        initial={{
          opacity: 0,
          x: -60,
          filter: "blur(8px)",
        }}
        animate={
          isInView
            ? {
                opacity: 1,
                x: 0,
                filter: "blur(0px)",
              }
            : {}
        }
        transition={{
          duration: 1,
          ease,
        }}
        className="max-w-xl"
      >
        {/* Badge */}

        <div className="inline-flex items-center gap-2 rounded-full border border-lime-400/20 bg-lime-400/[0.07] px-3.5 py-2 text-[9px] font-semibold uppercase tracking-[0.16em] text-lime-300 sm:text-[10px]">
          <Sparkles size={12} />

          The Solution
        </div>

        {/* Main heading */}

        <h2 className="mt-6 text-[2.7rem] font-black leading-[0.97] tracking-[-0.055em] sm:text-5xl lg:text-[4.15rem]">
          Put your business
          <br />

          <span className="bg-gradient-to-r from-lime-200 via-lime-400 to-green-400 bg-clip-text text-transparent">
            on autopilot with AI
          </span>
        </h2>

        {/* Description */}

        <p className="mt-6 max-w-lg text-sm leading-7 text-white/38 sm:text-[15px]">
          We connect your website, leads, conversations, appointments, CRM, and
          follow-ups into intelligent systems that keep your business moving.
        </p>

        {/* Supporting line */}

        <div className="mt-6 flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.15em] text-white/25">
          <span className="h-px w-7 bg-lime-400/40" />

          Built to work while you work
        </div>
      </motion.div>

      <PremiumVideo isInView={isInView} />
    </div>
  );
}
function PremiumVideo({ isInView }) {
  const videoRef = useRef(null);
  const openFullscreen = async () => {
    const video = videoRef.current;

    if (!video) return;

    try {
      if (video.requestFullscreen) {
        await video.requestFullscreen();
      } else if (video.webkitRequestFullscreen) {
        video.webkitRequestFullscreen();
      } else if (video.webkitEnterFullscreen) {
        video.webkitEnterFullscreen();
      }
    } catch (error) {
      console.error("Fullscreen failed:", error);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openFullscreen();
    }
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 80,
        scale: 0.94,
        filter: "blur(10px)",
      }}
      animate={
        isInView
          ? {
              opacity: 1,
              x: 0,
              scale: 1,
              filter: "blur(0px)",
            }
          : {}
      }
      transition={{
        duration: 1.1,
        delay: 0.1,
        ease,
      }}
      className="relative"
    >

      <div
        className="
          pointer-events-none
          absolute
          -inset-12
          rounded-[50px]
          bg-lime-400/[0.055]
          blur-[85px]
        "
      />
      <div
        className="
          pointer-events-none
          absolute
          left-[15%]
          right-[15%]
          top-[15%]
          h-[65%]
          rounded-full
          bg-lime-300/[0.035]
          blur-[65px]
        "
      />
      <div
        role="button"
        tabIndex={0}
        onClick={openFullscreen}
        onKeyDown={handleKeyDown}
        aria-label="Open automation demo in fullscreen"
        className="
          group
          relative
          cursor-pointer
          overflow-hidden
          rounded-[26px]
          border
          border-white/[0.10]
          bg-[#101610]
          p-[5px]
          shadow-[0_35px_100px_rgba(0,0,0,0.45)]
          transition-all
          duration-500
          hover:border-lime-300/20
          hover:shadow-[0_35px_120px_rgba(0,0,0,0.55)]
          focus:outline-none
          focus:ring-1
          focus:ring-lime-400/30
        "
      >
        {/* Inner frame */}

        <div className="relative overflow-hidden rounded-[21px] bg-black">
          <video
            ref={videoRef}
            className="
              block
              aspect-video
              h-auto
              w-full
              object-cover
            "
            src="/videos/automation-demo.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          />

          <div
            className="
              pointer-events-none
              absolute
              inset-0
              bg-gradient-to-tr
              from-black/20
              via-transparent
              to-white/[0.025]
            "
          />

          

          <div
            className="
              pointer-events-none
              absolute
              inset-x-0
              bottom-0
              h-28
              bg-gradient-to-t
              from-black/35
              to-transparent
              opacity-70
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              inset-0
              flex
              items-center
              justify-center
              bg-black/0
              transition-all
              duration-500
              group-hover:bg-black/20
            "
          >
            <div
              className="
                flex
                h-14
                w-14
                scale-90
                items-center
                justify-center
                rounded-full
                border
                border-white/20
                bg-black/40
                text-white
                opacity-0
                shadow-[0_10px_40px_rgba(0,0,0,0.45)]
                backdrop-blur-xl
                transition-all
                duration-500
                group-hover:scale-100
                group-hover:opacity-100
              "
            >
              <Maximize2
                size={19}
                strokeWidth={1.7}
              />
            </div>
          </div>

          <div
            className="
              pointer-events-none
              absolute
              left-0
              top-0
              h-24
              w-24
              rounded-br-full
              bg-lime-300/[0.025]
              blur-[20px]
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              bottom-4
              right-4
              flex
              items-center
              gap-2
              rounded-full
              border
              border-white/[0.10]
              bg-black/35
              px-3
              py-1.5
              text-[8px]
              font-medium
              uppercase
              tracking-[0.13em]
              text-white/45
              opacity-0
              backdrop-blur-xl
              transition-opacity
              duration-500
              group-hover:opacity-100
            "
          >
            <Maximize2 size={11} />
            Fullscreen
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function SolutionFeatures() {
  return (
    <div className="mt-16 sm:mt-20">
      {/* Heading */}

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
          amount: 0.5,
        }}
        transition={{
          duration: 0.8,
          ease,
        }}
        className="mb-6 flex items-end justify-between"
      >
        <div>
          <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-lime-300/60">
            What we automate
          </p>

          <h3 className="mt-2 text-xl font-bold tracking-[-0.03em] text-white/85 sm:text-2xl">
            Systems designed to keep moving.
          </h3>
        </div>
      </motion.div>

      {/* Feature rows */}

      <div className="grid gap-x-10 lg:grid-cols-2">
        {solutions.map((solution, index) => (
          <SolutionFeature
            key={solution.number}
            solution={solution}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}



function SolutionFeature({ solution, index }) {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    amount: 0.5,
  });

  const Icon = solution.icon;

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        y: 25,
      }}
      animate={
        isInView
          ? {
              opacity: 1,
              y: 0,
            }
          : {}
      }
      transition={{
        duration: 0.7,
        delay: index * 0.05,
        ease,
      }}
      className="group relative border-t border-white/[0.07] py-5"
    >
      <div className="flex items-center gap-4">
        {/* Icon */}

        <motion.div
          whileHover={{
            scale: 1.1,
            rotate: -4,
          }}
          transition={{
            duration: 0.25,
          }}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-lime-400/15 bg-lime-400/[0.055] text-lime-300/80 transition-all duration-500 group-hover:border-lime-400/30 group-hover:bg-lime-400/[0.1] group-hover:text-lime-300"
        >
          <Icon size={17} strokeWidth={1.8} />
        </motion.div>

        {/* Text */}

        <div className="min-w-0 flex-1">
          <h4 className="text-sm font-semibold text-white/70 transition-colors duration-300 group-hover:text-white sm:text-[15px]">
            {solution.title}
          </h4>

          <p className="mt-1 text-xs leading-5 text-white/27 transition-colors duration-300 group-hover:text-white/40 sm:text-[13px]">
            {solution.description}
          </p>
        </div>

        {/* Number */}

        <span className="hidden font-mono text-[9px] tracking-[0.15em] text-white/15 sm:block">
          {solution.number}
        </span>
      </div>

      {/* Animated line */}

      <motion.div
        initial={{
          scaleX: 0,
        }}
        animate={
          isInView
            ? {
                scaleX: 1,
              }
            : {}
        }
        transition={{
          duration: 0.8,
          delay: index * 0.05 + 0.2,
          ease,
        }}
        className="absolute bottom-0 left-0 h-px w-full origin-left bg-gradient-to-r from-lime-400/50 via-lime-400/10 to-transparent"
      />
    </motion.div>
  );
}

function SolutionCTA() {
  return (
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
        amount: 0.5,
      }}
      transition={{
        duration: 0.8,
        ease,
      }}
      className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4"
    >
      {/* Explore Services */}

      <Link
        to="/services"
        className="group inline-flex items-center gap-2 text-sm font-semibold text-lime-300 transition-colors duration-300 hover:text-lime-200"
      >
        Explore Services

        <ArrowRight
          size={16}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </Link>

      {/* Case Studies */}

      <Link
        to="/case-studies"
        className="group inline-flex items-center gap-2 text-sm font-semibold text-white/40 transition-colors duration-300 hover:text-white"
      >
        View Our Work

        <ArrowRight
          size={16}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </Link>
    </motion.div>
  );
}

function AmbientBackground() {
  return (
    <>
      {/* Subtle grid */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.018]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "70px 70px",
          maskImage:
            "radial-gradient(ellipse at center, black 15%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 15%, transparent 80%)",
        }}
      />

      {/* Left atmosphere */}

      <motion.div
        animate={{
          opacity: [0.04, 0.08, 0.04],
          x: [0, 25, 0],
          y: [0, -15, 0],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -left-72 top-[12%] h-[550px] w-[550px] rounded-full bg-lime-400/[0.06] blur-[150px]"
      />

      {/* Right atmosphere */}

      <motion.div
        animate={{
          opacity: [0.03, 0.07, 0.03],
          x: [0, -20, 0],
          y: [0, 25, 0],
        }}
        transition={{
          duration: 13,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -right-72 top-[50%] h-[600px] w-[600px] rounded-full bg-green-400/[0.05] blur-[160px]"
      />
    </>
  );
}

