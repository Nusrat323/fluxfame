import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa";

export default function FAQ() {
  const faqs = [
    {
      question: "What services do you provide?",
      answer:
        "We provide modern frontend website development, AI automation, GoHighLevel CRM setup, workflow automation, landing pages, AI chatbots, booking systems and custom digital solutions for businesses.",
    },

    {
      question: "Can you build custom business websites?",
      answer:
        "Yes. We build fast, responsive and modern frontend websites tailored to your business, whether it's a company website, landing page, portfolio or e-commerce frontend.",
    },

    {
      question: "What types of businesses do you work with?",
      answer:
        "We work with startups, agencies, clinics, dental practices, gyms, coaching centers, real estate companies, beauty salons, e-commerce brands and many other service-based businesses.",
    },

    {
      question: "Can you combine a website with AI automation?",
      answer:
        "Absolutely. We can build your website and integrate it with AI chatbots, CRM systems, appointment booking, lead capture and automated follow-up workflows.",
    },

    {
      question: "Do I need GoHighLevel before working with you?",
      answer:
        "No. If you're planning to use GoHighLevel, we'll help you choose the right plan, configure your account and build the complete system for your business.",
    },

    {
      question: "How long does a project usually take?",
      answer:
        "Project timelines depend on complexity. Most frontend websites take 3–10 days, while larger automation systems and custom solutions may take 1–3 weeks.",
    },

    {
      question: "Will my website work on mobile devices?",
      answer:
        "Yes. Every website we build is fully responsive and optimized to deliver a smooth experience across desktop, tablet and mobile devices.",
    },

    {
      question: "Do you offer ongoing support?",
      answer:
        "Yes. We provide maintenance, updates, performance improvements and ongoing technical support after project delivery.",
    },

    {
      question: "Can you integrate with my existing tools?",
      answer:
        "Yes. We can integrate websites with CRM platforms, booking systems, forms, payment gateways, calendars and many third-party services depending on your requirements.",
    },

    {
      question: "How do we get started?",
      answer:
        "Simply contact us with your project idea. We'll discuss your goals, recommend the best solution and provide a clear plan before development begins.",
    },
  ];

  const [active, setActive] = useState(0);

  return (
    <section className="relative py-24 overflow-hidden">

      {/* =====================================================
          BACKGROUND GLOW
      ===================================================== */}

      <div className="absolute inset-0 pointer-events-none">

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 1.4,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            absolute
            top-20
            left-20
            w-72
            h-72
            bg-lime-400/10
            blur-[150px]
            rounded-full
          "
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 1.4,
            delay: 0.15,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            absolute
            bottom-20
            right-20
            w-72
            h-72
            bg-lime-400/10
            blur-[150px]
            rounded-full
          "
        />

      </div>

      <div className="container-custom relative z-10">

        {/* =====================================================
            BADGE
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.85,
            y: 15,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.4,
          }}
          transition={{
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="flex justify-center"
        >
          <div
            className="
              glass
              px-4
              py-2
              rounded-full
              text-lime-400
              text-sm
              mb-6
            "
          >
            ✦ FAQ
          </div>
        </motion.div>

        {/* =====================================================
            HEADING
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.85,
            delay: 0.05,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="text-center mb-14"
        >
          <h2
            className="
              text-4xl
              md:text-6xl
              font-black
            "
          >
            Frequently Asked
            <span className="gradient-text">
              {" "}Questions
            </span>
          </h2>

          <p
            className="
              text-gray-400
              mt-5
              max-w-2xl
              mx-auto
            "
          >
            Everything you need to know before starting your next
            digital project.
          </p>
        </motion.div>

        {/* =====================================================
            FAQ LIST
        ===================================================== */}

        <div className="max-w-4xl mx-auto space-y-4">

          {faqs.map((item, index) => {

            const isActive = active === index;

            return (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? -35 : 35,
                  y: 15,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="relative"
              >

                <motion.div
                  animate={{
                    borderColor: isActive
                      ? "rgba(163, 230, 53, 0.25)"
                      : "rgba(255, 255, 255, 0.10)",
                  }}
                  transition={{
                    duration: 0.35,
                  }}
                  className="
                    group
                    relative
                    overflow-hidden

                    rounded-[24px]

                    bg-white/[0.04]
                    backdrop-blur-[20px]

                    border

                    transition-all
                    duration-300

                    hover:bg-white/[0.055]
                    hover:border-lime-400/20
                  "
                >

                  {/* =================================================
                      TOP GLOW
                  ================================================= */}

                  <motion.div
                    animate={{
                      width: isActive ? "55%" : "32%",
                      opacity: isActive ? 1 : 0.7,
                    }}
                    transition={{
                      duration: 0.5,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="
                      absolute
                      top-0
                      left-1/2
                      -translate-x-1/2

                      h-[1.5px]

                      bg-gradient-to-r
                      from-transparent
                      via-lime-400/70
                      to-transparent
                    "
                  />

                  {/* =================================================
                      SOFT ACTIVE GLOW
                  ================================================= */}

                  <motion.div
                    animate={{
                      opacity: isActive ? 1 : 0,
                    }}
                    transition={{
                      duration: 0.4,
                    }}
                    className="
                      pointer-events-none
                      absolute
                      -top-16
                      right-10
                      w-40
                      h-40
                      bg-lime-400/10
                      blur-[70px]
                      rounded-full
                    "
                  />

                  {/* =================================================
                      QUESTION BUTTON
                  ================================================= */}

                  <button
                    type="button"
                    onClick={() =>
                      setActive(isActive ? null : index)
                    }
                    className="
                      relative
                      z-10
                      w-full
                      px-5
                      py-5

                      flex
                      items-center
                      justify-between

                      text-left
                    "
                  >

                    <span
                      className={`
                        font-semibold
                        pr-6
                        transition-colors
                        duration-300
                        ${
                          isActive
                            ? "text-lime-300"
                            : "text-white"
                        }
                      `}
                    >
                      {item.question}
                    </span>

                    {/* ICON */}
                    <motion.div
                      animate={{
                        rotate: isActive ? 180 : 0,
                      }}
                      transition={{
                        duration: 0.35,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className="
                        shrink-0
                        w-8
                        h-8
                        rounded-full
                        border
                        border-lime-400/20
                        bg-lime-400/10
                        flex
                        items-center
                        justify-center
                        text-lime-400
                        text-xs
                        transition-all
                        duration-300
                        group-hover:border-lime-400/40
                        group-hover:bg-lime-400/15
                      "
                    >
                      {isActive ? (
                        <FaMinus />
                      ) : (
                        <FaPlus />
                      )}
                    </motion.div>

                  </button>

                  {/* =================================================
                      ANSWER
                  ================================================= */}

                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        initial={{
                          height: 0,
                          opacity: 0,
                        }}
                        animate={{
                          height: "auto",
                          opacity: 1,
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                        }}
                        transition={{
                          height: {
                            duration: 0.45,
                            ease: [0.16, 1, 0.3, 1],
                          },
                          opacity: {
                            duration: 0.25,
                          },
                        }}
                        className="overflow-hidden"
                      >

                        <div className="px-5 pb-5">

                          {/* DIVIDER */}

                          <motion.div
                            initial={{
                              scaleX: 0,
                              opacity: 0,
                            }}
                            animate={{
                              scaleX: 1,
                              opacity: 1,
                            }}
                            transition={{
                              duration: 0.45,
                              delay: 0.05,
                              ease: [0.16, 1, 0.3, 1],
                            }}
                            className="
                              origin-left
                              h-px
                              bg-gradient-to-r
                              from-lime-400/30
                              via-white/10
                              to-transparent
                              mb-4
                            "
                          />

                          <motion.p
                            initial={{
                              opacity: 0,
                              y: 8,
                            }}
                            animate={{
                              opacity: 1,
                              y: 0,
                            }}
                            transition={{
                              duration: 0.4,
                              delay: 0.08,
                              ease: [0.16, 1, 0.3, 1],
                            }}
                            className="
                              text-gray-400
                              leading-relaxed
                            "
                          >
                            {item.answer}
                          </motion.p>

                        </div>

                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* =================================================
                      BOTTOM ACCENT
                  ================================================= */}

                  <motion.div
                    animate={{
                      scaleX: isActive ? 1 : 0,
                      opacity: isActive ? 1 : 0,
                    }}
                    transition={{
                      duration: 0.45,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="
                      absolute
                      bottom-0
                      left-8
                      right-8
                      h-[1.5px]
                      origin-center
                      rounded-full
                      bg-gradient-to-r
                      from-transparent
                      via-lime-400/50
                      to-transparent
                    "
                  />

                </motion.div>

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}