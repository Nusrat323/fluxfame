import {
  FaSearch,
  FaCogs,
  FaRocket,
  FaChartLine,
} from "react-icons/fa";

import AnimatedSection from "../common/AnimatedSection";

export default function Process() {
  const steps = [
    {
      number: "01",
      icon: <FaSearch />,
      title: "Discovery & Strategy",
      description:
        "We understand your business goals, audience and requirements to create the right digital solution for long-term growth.",
    },
    {
      number: "02",
      icon: <FaCogs />,
      title: "Design & Development",
      description:
        "We build modern websites, digital systems and custom solutions with clean design, seamless functionality and scalable architecture.",
    },
    {
      number: "03",
      icon: <FaRocket />,
      title: "Launch & Testing",
      description:
        "Every feature, workflow and user experience is carefully tested to ensure everything performs smoothly before launch.",
    },
    {
      number: "04",
      icon: <FaChartLine />,
      title: "Optimize & Growth",
      description:
        "After launch, we continuously improve performance, user experience and business results to help you scale with confidence.",
    },
  ];

  return (
    <section className="section relative overflow-hidden">
      
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="
            absolute
            top-20
            left-0
            w-[500px]
            h-[500px]
            bg-lime-400/10
            blur-[200px]
            rounded-full
          "
        />

        <div
          className="
            absolute
            bottom-0
            right-0
            w-[500px]
            h-[500px]
            bg-green-400/10
            blur-[200px]
            rounded-full
          "
        />
      </div>

      <div className="container-custom relative z-10">

        <AnimatedSection
          direction="up"
          y={35}
          duration={0.8}
          amount={0.25}
        >
          <div className="text-center max-w-3xl mx-auto mb-20">

            <span
              className="
                inline-block
                text-lime-400
                uppercase
                tracking-[4px]
                text-sm
                mb-4
              "
            >
              HOW WE WORK
            </span>

            <h2
              className="
                text-3xl
                md:text-5xl
                font-bold
                leading-tight
              "
            >
              From Strategy
              <span className="gradient-text">
                {" "}To Solution
              </span>
            </h2>

            <p className="text-gray-400 mt-6 text-lg">
              From modern websites to intelligent business solutions,
              we follow a proven process to deliver high-quality,
              scalable digital experiences that help businesses grow.
            </p>

          </div>
        </AnimatedSection>

       

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

          {steps.map((step, index) => (
            <AnimatedSection
              key={step.number}
              direction="up"
              y={45}
              delay={index * 0.12}
              duration={0.75}
              amount={0.15}
            >
              <div
                className="
                  group
                  relative
                  h-full
                  rounded-3xl
                  p-8
                  overflow-hidden
                  border
                  border-lime-400/15
                  bg-white/[0.03]
                  backdrop-blur-xl
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:border-lime-400/40
                  hover:bg-white/[0.045]
                  hover:shadow-[0_0_50px_rgba(217,255,47,.15)]
                "
              >

                <div
                  className="
                    absolute
                    -top-16
                    -right-16
                    w-56
                    h-56
                    bg-lime-400/20
                    blur-[90px]
                    rounded-full
                    opacity-60
                    transition-all
                    duration-500
                    group-hover:opacity-100
                    group-hover:scale-125
                  "
                />

                <div
                  className="
                    absolute
                    -bottom-20
                    -left-20
                    w-40
                    h-40
                    bg-green-400/10
                    blur-[70px]
                    rounded-full
                    opacity-0
                    transition-opacity
                    duration-500
                    group-hover:opacity-100
                  "
                />

                <div
                  className="
                    absolute
                    top-0
                    left-8
                    right-8
                    h-px
                    bg-gradient-to-r
                    from-transparent
                    via-lime-400/40
                    to-transparent
                    opacity-50
                    transition-opacity
                    duration-500
                    group-hover:opacity-100
                  "
                />

                

                <span
                  className="
                    absolute
                    top-2
                    right-4
                    text-[90px]
                    font-black
                    text-lime-400/15
                    leading-none
                    select-none
                    pointer-events-none
                    transition-all
                    duration-500
                    group-hover:text-lime-400/20
                    group-hover:scale-105
                  "
                >
                  {step.number}
                </span>

               
                <div
                  className="
                    relative
                    z-10
                    w-16
                    h-16
                    rounded-2xl
                    bg-lime-400/15
                    border
                    border-lime-400/30
                    flex
                    items-center
                    justify-center
                    text-lime-400
                    text-2xl
                    shadow-[0_0_40px_rgba(217,255,47,.25)]
                    transition-all
                    duration-500
                    group-hover:bg-lime-400/20
                    group-hover:border-lime-400/50
                    group-hover:shadow-[0_0_55px_rgba(217,255,47,.35)]
                    group-hover:scale-105
                    group-hover:rotate-2
                  "
                >
                  {step.icon}
                </div>
                <div className="relative z-10">

                  <h3
                    className="
                      text-xl
                      font-semibold
                      mt-8
                      mb-4
                      transition-colors
                      duration-300
                      group-hover:text-lime-300
                    "
                  >
                    {step.title}
                  </h3>

                  <p
                    className="
                      text-gray-300
                      leading-relaxed
                      transition-colors
                      duration-300
                      group-hover:text-gray-200
                    "
                  >
                    {step.description}
                  </p>

                </div>

                <div
                  className="
                    absolute
                    bottom-0
                    left-8
                    right-8
                    h-[2px]
                    rounded-full
                    bg-gradient-to-r
                    from-transparent
                    via-lime-400/50
                    to-transparent
                    opacity-0
                    scale-x-50
                    transition-all
                    duration-500
                    group-hover:opacity-100
                    group-hover:scale-x-100
                  "
                />

              </div>
            </AnimatedSection>
          ))}

        </div>
      </div>
    </section>
  );
}