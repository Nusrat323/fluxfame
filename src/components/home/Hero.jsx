import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  ChevronRight,
  MessageSquare,
  Sparkles,
  Zap,
  BarChart3,
  Workflow,
} from "lucide-react";
import { Link } from "react-router-dom";

import Button from "../common/Button";

const ease = [0.16, 1, 0.3, 1];

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#050505] pt-[72px] sm:pt-[78px]">
      <Background />

      <div className="relative z-10 mx-auto flex min-h-[720px] max-w-7xl items-center px-4 py-14 sm:px-6 sm:py-16 lg:min-h-[760px] lg:px-8 lg:py-16">
        <div className="grid w-full items-center gap-12 lg:grid-cols-[1.04fr_0.96fr] lg:gap-10 xl:gap-16">
          <HeroContent />

          <AutomationVisual />
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-32 bg-gradient-to-t from-[#050505] to-transparent" />

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-30 h-px bg-lime-400/10">
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "200%" }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatDelay: 1.5,
            ease: "easeInOut",
          }}
          className="h-[2px] w-[25%] bg-gradient-to-r from-transparent via-lime-400 to-transparent blur-[0.5px]"
        />
      </div>
    </section>
  );
}

function HeroContent() {
  return (
    <div className="relative z-10 text-center lg:text-left">
     
      <motion.div
        initial={{
          opacity: 0,
          y: 18,
          scale: 0.96,
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        transition={{
          duration: 0.8,
          delay: 0.15,
          ease,
        }}
        className="mb-6 inline-flex max-w-full items-center gap-2 rounded-full border border-lime-400/20 bg-lime-400/[0.07] px-3.5 py-2 text-[9px] font-semibold tracking-[0.1em] text-lime-300 backdrop-blur-xl sm:text-xs"
      >
        <span className="relative flex h-2 w-2 shrink-0">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime-400 opacity-50" />

          <span className="relative h-2 w-2 rounded-full bg-lime-400 shadow-[0_0_12px_rgba(163,230,53,0.8)]" />
        </span>

        <span>INTELLIGENT SYSTEMS FOR MODERN BUSINESS</span>
      </motion.div>
      <TypingHeadline />
      <motion.p
        initial={{
          opacity: 0,
          y: 24,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.85,
          delay: 0.85,
          ease,
        }}
        className="mx-auto mt-6 max-w-xl text-sm leading-7 text-white/60 sm:text-base sm:leading-7 lg:mx-0"
      >
        We build complete business websites, AI assistants, and automation
        systems that help you capture leads, answer customers, book
        appointments, and keep your business moving.
      </motion.p>

     
      <motion.div
        initial={{
          opacity: 0,
          y: 28,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.85,
          delay: 1.05,
          ease,
        }}
        className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start"
      >
        
        <Link to="/contact" className="w-full sm:w-auto">
          <motion.div
            whileHover={{
              y: -3,
              transition: {
                duration: 0.25,
                ease,
              },
            }}
            whileTap={{
              scale: 0.97,
            }}
            className="group"
          >
            <Button>
              <span className="flex items-center justify-center gap-2">
                Book Free Strategy Call

                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </span>
            </Button>
          </motion.div>
        </Link>

       
        <Link to="/case-studies" className="w-full sm:w-auto">
          <motion.div
            whileHover={{
              y: -3,
              transition: {
                duration: 0.25,
                ease,
              },
            }}
            whileTap={{
              scale: 0.97,
            }}
            className="group"
          >
            <Button variant="secondary">
              <span className="flex items-center justify-center gap-2">
                View Our Work

                <ChevronRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </span>
            </Button>
          </motion.div>
        </Link>
      </motion.div>
    </div>
  );
}
function TypingHeadline() {
  return (
    <motion.h1
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.16,
            delayChildren: 0.45,
          },
        },
      }}
      className="mx-auto max-w-3xl text-[2.35rem] font-black leading-[1.04] tracking-[-0.045em] text-white sm:text-5xl md:text-[3.8rem] lg:mx-0 lg:text-[4rem] xl:text-[4.25rem]"
    >
      <HeadlineLine>AI Systems &amp;</HeadlineLine>

      <HeadlineLine>Websites That</HeadlineLine>

      <HeadlineLine gradient>Automate Growth</HeadlineLine>

      <HeadlineLine gradient>&amp; Operations</HeadlineLine>
    </motion.h1>
  );
}

function HeadlineLine({ children, gradient = false }) {
  return (
    <span className="block overflow-hidden">
      <motion.span
        variants={{
          hidden: {
            opacity: 0,
            y: "100%",
          },

          visible: {
            opacity: 1,
            y: "0%",
            transition: {
              duration: 0.8,
              ease,
            },
          },
        }}
        className={`block origin-bottom ${
          gradient
            ? "bg-gradient-to-r from-lime-200 via-lime-400 to-green-400 bg-clip-text text-transparent"
            : "text-white"
        }`}
      >
        {children}
      </motion.span>
    </span>
  );
}

function Background() {
  return (
    <>
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <img
          src="/hero-bg.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[#030303]/35" />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#030303]/70 via-[#030303]/38 to-[#030303]/8" />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#050505] via-[#050505]/45 to-transparent" />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "70px 70px",
          maskImage:
            "radial-gradient(ellipse at center, black 15%, transparent 78%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 15%, transparent 78%)",
        }}
      />

      <motion.div
        animate={{
          opacity: [0.1, 0.17, 0.1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -left-32 top-20 h-[420px] w-[420px] rounded-full bg-lime-400/10 blur-[120px]"
      />

      <motion.div
        animate={{
          opacity: [0.05, 0.1, 0.05],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute right-[-150px] top-[20%] h-[480px] w-[480px] rounded-full bg-green-400/10 blur-[140px]"
      />

      <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/25 to-transparent" />
    </>
  );
}

function AutomationVisual() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 45,
        scale: 0.96,
      }}
      animate={{
        opacity: 1,
        x: 0,
        scale: 1,
      }}
      transition={{
        duration: 1,
        delay: 0.35,
        ease,
      }}
      className="relative mx-auto w-full max-w-[530px]"
    >
      <div className="pointer-events-none absolute -inset-10 rounded-[50px] bg-lime-400/[0.07] blur-[90px]" />

      <div className="relative rounded-[26px] border border-white/[0.16] bg-black/55 p-3 shadow-[0_35px_100px_rgba(0,0,0,0.55)] backdrop-blur-2xl sm:p-4">
        <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-lime-300/70 to-transparent" />

        <div className="mb-3 flex items-center justify-between rounded-xl border border-white/[0.10] bg-white/[0.07] px-3 py-2.5">
          <div className="flex items-center gap-2.5">
            <div className="flex gap-1.5">
              <span className="h-2 w-2 rounded-full bg-white/30" />
              <span className="h-2 w-2 rounded-full bg-white/30" />
              <span className="h-2 w-2 rounded-full bg-white/30" />
            </div>

            <span className="text-[9px] font-medium tracking-[0.1em] text-white/50">
              BUSINESS AUTOMATION
            </span>
          </div>

          <div className="flex items-center gap-1.5 text-[9px] font-medium text-lime-300">
            <span className="h-1.5 w-1.5 rounded-full bg-lime-400 shadow-[0_0_8px_rgba(163,230,53,0.8)]" />
            LIVE
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-[0.92fr_1.08fr]">
          <div className="space-y-3">
            <LeadCard />

            <AutomationCard />
          </div>

          <AiAssistant />
        </div>
      </div>

      <FloatingLead />

      <FloatingAutomation />
    </motion.div>
  );
}

function LeadCard() {
  const [count, setCount] = useState(0);
  const [growth, setGrowth] = useState(0);

  useEffect(() => {
    let frame;

    const start = performance.now();
    const duration = 3000;

    const animate = (now) => {
      const progress = Math.min((now - start) / duration, 1);

      const eased = 1 - Math.pow(1 - progress, 3);

      setCount(Math.round(248 * eased));
      setGrowth((37.5 * eased).toFixed(1));

      if (progress < 1) {
        frame = requestAnimationFrame(animate);
      }
    };

    frame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.8,
        delay: 0.75,
        ease,
      }}
      className="relative overflow-hidden rounded-2xl border border-white/[0.11] bg-white/[0.07] p-4"
    >
      <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-lime-400/10 blur-3xl" />

      <div className="relative">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[9px] uppercase tracking-[0.12em] text-white/40">
              Qualified Leads
            </p>

            <div className="mt-1.5 flex items-end gap-2">
              <span className="text-3xl font-bold tracking-tight text-white">
                {count}
              </span>

              <span className="mb-1 text-[10px] font-semibold text-lime-300">
                +{growth}%
              </span>
            </div>
          </div>

          <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-lime-400/20 bg-lime-400/10 text-lime-300">
            <BarChart3 size={16} />
          </div>
        </div>

        <div className="mt-4 h-12">
          <svg
            viewBox="0 0 300 60"
            className="h-full w-full overflow-visible"
            aria-hidden="true"
          >
            <defs>
              <linearGradient
                id="leadArea"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="0%"
                  stopColor="#a3e635"
                  stopOpacity="0.22"
                />

                <stop
                  offset="100%"
                  stopColor="#a3e635"
                  stopOpacity="0"
                />
              </linearGradient>
            </defs>

            <motion.path
              d="M0 48 C35 46 45 34 70 39 C100 45 112 23 140 29 C170 35 185 15 210 21 C240 27 260 7 300 11 L300 60 L0 60 Z"
              fill="url(#leadArea)"
              initial={{
                opacity: 0,
                scaleY: 0.2,
                originY: "100%",
              }}
              animate={{
                opacity: 1,
                scaleY: 1,
              }}
              transition={{
                duration: 2.8,
                delay: 0.95,
                ease,
              }}
            />

            <motion.path
              d="M0 48 C35 46 45 34 70 39 C100 45 112 23 140 29 C170 35 185 15 210 21 C240 27 260 7 300 11"
              fill="none"
              stroke="#a3e635"
              strokeWidth="2.5"
              strokeLinecap="round"
              initial={{
                pathLength: 0,
                opacity: 0.4,
              }}
              animate={{
                pathLength: 1,
                opacity: 1,
              }}
              transition={{
                duration: 3.2,
                delay: 0.85,
                ease,
              }}
            />

            <motion.circle
              cx="300"
              cy="11"
              r="3"
              fill="#a3e635"
              initial={{
                opacity: 0,
                scale: 0,
              }}
              animate={{
                opacity: [0.5, 1, 0.5],
                scale: [0.8, 1.25, 0.8],
              }}
              transition={{
                duration: 2.4,
                delay: 3.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </svg>
        </div>
      </div>
    </motion.div>
  );
}



function AutomationCard() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.8,
        delay: 0.9,
        ease,
      }}
      className="rounded-2xl border border-white/[0.11] bg-white/[0.07] p-4"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-lime-400/10 text-lime-300">
            <Workflow size={15} />
          </div>

          <div>
            <p className="text-[10px] font-semibold text-white">
              Lead Workflow
            </p>

            <p className="text-[8px] text-white/40">
              Running automatically
            </p>
          </div>
        </div>

        <span className="rounded-full bg-lime-400/10 px-2 py-1 text-[8px] font-semibold text-lime-300">
          ACTIVE
        </span>
      </div>

      <div className="mt-3 flex items-center gap-1.5">
        <WorkflowNode text="Lead" active />

        <div className="h-px flex-1 bg-gradient-to-r from-lime-400/50 to-white/15" />

        <WorkflowNode text="AI" active />

        <div className="h-px flex-1 bg-gradient-to-r from-lime-400/50 to-white/15" />

        <WorkflowNode text="CRM" />

        <div className="h-px flex-1 bg-gradient-to-r from-lime-400/50 to-white/15" />

        <WorkflowNode text="Book" />
      </div>
    </motion.div>
  );
}

function WorkflowNode({ text, active = false }) {
  return (
    <div
      className={`flex h-7 min-w-7 items-center justify-center rounded-lg border px-2 text-[7px] font-semibold ${
        active
          ? "border-lime-400/25 bg-lime-400/10 text-lime-300"
          : "border-white/[0.10] bg-white/[0.045] text-white/45"
      }`}
    >
      {text}
    </div>
  );
}



function AiAssistant() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 25,
        x: 15,
        scale: 0.97,
      }}
      animate={{
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
      }}
      transition={{
        duration: 0.85,
        delay: 0.65,
        ease,
      }}
      className="relative min-h-[305px] overflow-hidden rounded-2xl border border-white/[0.14] bg-white/[0.075] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-xl"
    >
      <div className="absolute -right-16 -top-16 h-36 w-36 rounded-full bg-lime-400/[0.12] blur-3xl" />

      <div className="pointer-events-none absolute bottom-0 left-0 h-40 w-full bg-gradient-to-t from-lime-400/[0.025] to-transparent" />

      <div className="relative flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-xl border border-lime-400/25 bg-lime-400/10 text-lime-300">
            <Bot size={16} />
          </div>

          <div>
            <p className="text-[11px] font-semibold text-white">
              AI Assistant
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1.5 text-[8px] text-lime-300">
          <span className="h-1.5 w-1.5 rounded-full bg-lime-400 shadow-[0_0_7px_rgba(163,230,53,0.8)]" />

          Online
        </div>
      </div>

      <LiveChat />

      <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2 rounded-xl border border-white/[0.12] bg-black/35 px-3 py-2.5 backdrop-blur-md">
        <MessageSquare size={12} className="shrink-0 text-white/40" />

        <span className="text-[8px] text-white/40">
          Ask our AI assistant...
        </span>

        <div className="ml-auto flex h-6 w-6 items-center justify-center rounded-lg bg-lime-400 text-black">
          <ArrowRight size={11} />
        </div>
      </div>
    </motion.div>
  );
}



function LiveChat() {
  const conversations = [
    {
      context: "REAL ESTATE",
      user: "Is the 3-bedroom Oak Street property still available?",
      assistant:
        "Yes, it’s available. I can share the listing details or help you book a viewing.",
    },
    {
      context: "REAL ESTATE",
      user: "Can I schedule a viewing for Saturday?",
      assistant:
        "Absolutely. I can check the available Saturday times and book a viewing for you.",
    },
    {
      context: "ECOMMERCE",
      user: "Do you have this jacket in medium?",
      assistant:
        "Yes, medium is currently available. I can also help you choose the right size.",
    },
    {
      context: "ECOMMERCE",
      user: "How long does delivery usually take?",
      assistant:
        "Standard delivery usually takes 2–3 business days. I can help you place the order.",
    },
  ];

  const [conversationIndex, setConversationIndex] = useState(0);
  const [userText, setUserText] = useState("");
  const [assistantText, setAssistantText] = useState("");
  const [phase, setPhase] = useState("user");

  const conversation = conversations[conversationIndex];

  useEffect(() => {
    let timeout;

    if (phase === "user") {
      if (userText.length < conversation.user.length) {
        timeout = setTimeout(() => {
          setUserText(
            conversation.user.slice(0, userText.length + 1)
          );
        }, 28);
      } else {
        timeout = setTimeout(() => setPhase("thinking"), 450);
      }
    }

    if (phase === "thinking") {
      timeout = setTimeout(() => setPhase("assistant"), 550);
    }

    if (phase === "assistant") {
      if (assistantText.length < conversation.assistant.length) {
        timeout = setTimeout(() => {
          setAssistantText(
            conversation.assistant.slice(
              0,
              assistantText.length + 1
            )
          );
        }, 22);
      } else {
        timeout = setTimeout(() => setPhase("pause"), 2200);
      }
    }

    if (phase === "pause") {
      timeout = setTimeout(() => {
        setConversationIndex(
          (prev) => (prev + 1) % conversations.length
        );

        setUserText("");
        setAssistantText("");
        setPhase("user");
      }, 550);
    }

    return () => clearTimeout(timeout);
  }, [
    phase,
    userText,
    assistantText,
    conversation,
  ]);

  return (
    <div className="relative mt-5 space-y-2.5">
      <motion.div
        key={`context-${conversationIndex}`}
        initial={{
          opacity: 0,
          x: -5,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        className="mb-1 text-[7px] font-semibold tracking-[0.14em] text-lime-300/70"
      >
        {conversation.context} CUSTOMER
      </motion.div>

      {userText && (
        <LiveChatBubble mine key={`user-${conversationIndex}`}>
          {userText}
        </LiveChatBubble>
      )}

      {phase === "thinking" && <TypingIndicator />}

      {assistantText && (
        <LiveChatBubble key={`assistant-${conversationIndex}`}>
          {assistantText}
        </LiveChatBubble>
      )}
    </div>
  );
}

function LiveChatBubble({ children, mine = false }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 5,
        x: mine ? 6 : -6,
      }}
      animate={{
        opacity: 1,
        y: 0,
        x: 0,
      }}
      transition={{
        duration: 0.3,
        ease,
      }}
      className={`max-w-[92%] rounded-xl border px-3 py-2 text-[9px] leading-4 ${
        mine
          ? "ml-auto border-lime-300/25 bg-lime-400 text-black"
          : "border-white/[0.11] bg-white/[0.075] text-white/70"
      }`}
    >
      {children}

      <motion.span
        animate={{
          opacity: [1, 0, 1],
        }}
        transition={{
          duration: 0.7,
          repeat: Infinity,
        }}
        className={`ml-0.5 inline-block h-3 w-px align-middle ${
          mine ? "bg-black/60" : "bg-lime-400"
        }`}
      />
    </motion.div>
  );
}

function TypingIndicator() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 5,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      className="flex w-fit items-center gap-1 rounded-full border border-white/[0.10] bg-white/[0.07] px-2.5 py-2"
    >
      {[0, 1, 2].map((item) => (
        <motion.span
          key={item}
          animate={{
            opacity: [0.2, 1, 0.2],
            y: [0, -2, 0],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            delay: item * 0.15,
            ease: "easeInOut",
          }}
          className="h-1 w-1 rounded-full bg-lime-400"
        />
      ))}
    </motion.div>
  );
}



function FloatingLead() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.9,
        x: 20,
        y: 8,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        x: 0,
        y: 0,
      }}
      transition={{
        duration: 0.8,
        delay: 1.15,
        ease,
      }}
      className="absolute -right-3 top-12 hidden rounded-2xl border border-white/[0.13] bg-[#101010]/90 p-3 shadow-2xl backdrop-blur-xl sm:block lg:-right-8"
    >
      <div className="flex items-center gap-2.5">
        <div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-lime-400/10 text-lime-300">
          <motion.span
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.4, 0, 0.4],
            }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              ease: "easeOut",
            }}
            className="absolute inset-0 rounded-full border border-lime-400/30"
          />

          <Sparkles size={14} />
        </div>

        <div>
          <p className="text-[8px] tracking-wide text-white/40">
            NEW LEAD
          </p>

          <p className="mt-0.5 text-[10px] font-semibold text-white">
            Qualified prospect
          </p>
        </div>
      </div>
    </motion.div>
  );
}

function FloatingAutomation() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.9,
        x: -20,
        y: 8,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        x: 0,
        y: 0,
      }}
      transition={{
        duration: 0.8,
        delay: 1.3,
        ease,
      }}
      className="absolute -bottom-6 -left-4 hidden rounded-2xl border border-white/[0.13] bg-[#101010]/90 p-3 shadow-2xl backdrop-blur-xl sm:block lg:-left-9"
    >
      <div className="flex items-center gap-2.5">
        <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-lime-400/10 text-lime-300">
          <Zap size={14} />
        </div>

        <div>
          <p className="text-[8px] tracking-wide text-white/40">
            AUTOMATION
          </p>

          <p className="mt-0.5 text-[10px] font-semibold text-white">
            Follow-up triggered
          </p>
        </div>

        <div className="ml-1 rounded-full bg-lime-400/10 px-2 py-1 text-[7px] font-semibold text-lime-300">
          ACTIVE
        </div>
      </div>
    </motion.div>
  );
}