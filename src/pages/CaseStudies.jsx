import { useEffect, useMemo, useState } from "react";

import MainLayout from "../layouts/MainLayout";
import CaseStudyCard from "../components/case-studies/CaseStudyCard";
import AnimatedSection from "../components/common/AnimatedSection";

import { caseStudies } from "../data/caseStudies";

import { TypeAnimation } from "react-type-animation";
import CTASection from "../components/home/CTASection";

import { Helmet } from "react-helmet-async";

const FILTERS = [
  {
    key: "website",
    label: "Website Design",
  },
  {
    key: "automation",
    label: "AI Automation",
  },
];

export default function CaseStudies() {
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState("website");

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 700);

    return () => clearTimeout(timer);
  }, []);

  const activeIndex = FILTERS.findIndex(
    (filter) => filter.key === activeFilter
  );

  const filteredStudies = useMemo(() => {
    return caseStudies.filter(
      (project) => project.category === activeFilter
    );
  }, [activeFilter]);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center bg-black">
        <div className="relative w-16 h-16">
          <div
            className="
              absolute
              inset-0
              rounded-full
              border-4
              border-lime-400/20
            "
          />

          <div
            className="
              absolute
              inset-0
              rounded-full
              border-4
              border-t-lime-400
              border-r-transparent
              border-b-transparent
              border-l-transparent
              animate-spin
            "
          />
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Case Studies | FluxFame</title>

        <meta
          name="description"
          content="Explore real AI automation, CRM automation, lead generation systems, funnels, custom websites, and business growth case studies built by FluxFame."
        />

        <link
          rel="canonical"
          href="https://fluxfame.site/case-studies"
        />
      </Helmet>

      <MainLayout>
        <section
          className="
            relative
            overflow-hidden
            pt-32
            pb-24
          "
        >
          {/* BACKGROUND GLOW */}

          <div
            className="
              absolute
              top-20
              left-20
              w-72
              h-72
              bg-lime-400/10
              blur-[150px]
              rounded-full
              pointer-events-none
            "
          />

          <div
            className="
              absolute
              bottom-20
              right-20
              w-72
              h-72
              bg-lime-400/10
              blur-[150px]
              rounded-full
              pointer-events-none
            "
          />

          <div className="container-custom relative z-10">

            {/* HERO */}

            <AnimatedSection
              direction="up"
              y={30}
              duration={0.8}
              amount={0.2}
            >
              <div className="max-w-4xl mx-auto text-center mb-16">

                <div
                  className="
                    min-h-[120px]
                    flex
                    items-center
                    justify-center
                  "
                >
                  <h1
                    className="
                      text-3xl
                      md:text-5xl
                      font-bold
                      leading-tight
                    "
                  >
                    <TypeAnimation
                      sequence={[
                        "Websites Built To Convert",
                        2500,

                        "Automation Systems That Scale Businesses",
                        2500,

                        "AI-Powered Lead Generation Systems",
                        2500,

                        "CRM Automations That Never Miss A Lead",
                        2500,

                        "24/7 Follow-Up & Booking Systems",
                        2500,
                      ]}
                      wrapper="span"
                      speed={50}
                      repeat={Infinity}
                      cursor={false}
                      className="text-white"
                    />

                    <span
                      className="
                        inline-block
                        w-[3px]
                        h-7
                        md:h-10
                        bg-lime-400
                        ml-1
                        animate-pulse
                        align-middle
                      "
                    />
                  </h1>
                </div>

                <p
                  className="
                    mt-6
                    text-gray-400
                    max-w-2xl
                    mx-auto
                    leading-relaxed
                  "
                >
                  Explore custom frontend websites, automation systems,
                  AI Assistants, booking workflows, CRM pipelines,
                  lead nurturing campaigns, and customer follow-up
                  systems built to help businesses increase
                  conversions and operate more efficiently.
                </p>
              </div>
            </AnimatedSection>

            {/* FEATURE HIGHLIGHTS */}

            <AnimatedSection
              direction="up"
              y={35}
              delay={0.1}
              duration={0.8}
            >
              <div
                className="
                  grid
                  grid-cols-2
                  md:grid-cols-4
                  gap-5
                  mb-14
                "
              >
                <div
                  className="
                    glass
                    rounded-2xl
                    p-6
                    border
                    border-white/10
                    text-center
                    transition-all
                    duration-300
                    hover:border-lime-400/30
                    hover:-translate-y-1
                  "
                >
                  <div
                    className="
                      text-3xl
                      font-bold
                      text-lime-400
                    "
                  >
                    Web
                  </div>

                  <p
                    className="
                      text-gray-400
                      text-sm
                      mt-2
                    "
                  >
                    Custom Frontend Websites
                  </p>
                </div>

                <div
                  className="
                    glass
                    rounded-2xl
                    p-6
                    border
                    border-white/10
                    text-center
                    transition-all
                    duration-300
                    hover:border-lime-400/30
                    hover:-translate-y-1
                  "
                >
                  <div
                    className="
                      text-3xl
                      font-bold
                      text-lime-400
                    "
                  >
                    AI
                  </div>

                  <p
                    className="
                      text-gray-400
                      text-sm
                      mt-2
                    "
                  >
                    Receptionists & Chatbots
                  </p>
                </div>

                <div
                  className="
                    glass
                    rounded-2xl
                    p-6
                    border
                    border-white/10
                    text-center
                    transition-all
                    duration-300
                    hover:border-lime-400/30
                    hover:-translate-y-1
                  "
                >
                  <div
                    className="
                      text-3xl
                      font-bold
                      text-lime-400
                    "
                  >
                    CRM
                  </div>

                  <p
                    className="
                      text-gray-400
                      text-sm
                      mt-2
                    "
                  >
                    Pipelines & Automations
                  </p>
                </div>

                <div
                  className="
                    glass
                    rounded-2xl
                    p-6
                    border
                    border-white/10
                    text-center
                    transition-all
                    duration-300
                    hover:border-lime-400/30
                    hover:-translate-y-1
                  "
                >
                  <div
                    className="
                      text-3xl
                      font-bold
                      text-lime-400
                    "
                  >
                    24/7
                  </div>

                  <p
                    className="
                      text-gray-400
                      text-sm
                      mt-2
                    "
                  >
                    Lead Follow-Up Systems
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* FILTER TOGGLE */}

            <AnimatedSection
              direction="up"
              y={25}
              delay={0.15}
              duration={0.7}
            >
              <div className="flex justify-center mb-14">
                <div
                  className="
                    relative
                    inline-flex
                    p-1.5
                    rounded-full
                    glass
                    border
                    border-white/10
                    shadow-[0_0_40px_-12px_rgba(163,230,53,0.35)]
                  "
                >
                  {/* SLIDING INDICATOR */}

                  <div
                    className="
                      absolute
                      top-1.5
                      bottom-1.5
                      rounded-full
                      bg-lime-400
                      transition-all
                      duration-300
                      ease-out
                      shadow-[0_0_20px_2px_rgba(163,230,53,0.5)]
                    "
                    style={{
                      width: `calc((100% - 12px) / ${FILTERS.length})`,
                      left: `calc(6px + ${activeIndex} * (100% - 12px) / ${FILTERS.length})`,
                    }}
                  />

                  {FILTERS.map((filter) => (
                    <button
                      key={filter.key}
                      onClick={() =>
                        setActiveFilter(filter.key)
                      }
                      className={`
                        relative
                        z-10
                        px-5
                        md:px-7
                        py-2.5
                        rounded-full
                        text-sm
                        font-medium
                        whitespace-nowrap
                        transition-colors
                        duration-300

                        ${
                          activeFilter === filter.key
                            ? "text-black"
                            : "text-gray-400 hover:text-white"
                        }
                      `}
                    >
                      {filter.label}
                    </button>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* PROJECTS */}

            {filteredStudies.length > 0 ? (
              <div
                key={activeFilter}
                className="
                  grid
                  lg:grid-cols-2
                  gap-8
                "
              >
                {filteredStudies.map((project, index) => (
                  <CaseStudyCard
                    key={project.id}
                    project={project}
                    index={index}
                  />
                ))}
              </div>
            ) : (
              <AnimatedSection
                direction="up"
                y={25}
              >
                <div className="text-center py-20">
                  <p className="text-gray-400">
                    No case studies in this category yet —
                    check back soon.
                  </p>
                </div>
              </AnimatedSection>
            )}
          </div>
        </section>

        <CTASection />
      </MainLayout>
    </>
  );
}