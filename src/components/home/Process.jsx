import {
    FaSearch,
    FaCogs,
    FaRocket,
    FaChartLine,
  } from "react-icons/fa";
  
  export default function Process() {
    const steps = [
      {
        number: "01",
        icon: <FaSearch />,
        title: "Discovery & Strategy",
        description:
          "We analyze your business, customer journey, lead flow and growth opportunities to create the right automation strategy.",
      },
      {
        number: "02",
        icon: <FaCogs />,
        title: "Build & Automation",
        description:
          "We build landing pages, CRM systems, AI assistants, workflows, booking systems and automated follow-up sequences.",
      },
      {
        number: "03",
        icon: <FaRocket />,
        title: "Launch & Testing",
        description:
          "Every automation, chatbot, appointment flow and integration is tested thoroughly before launch.",
      },
      {
        number: "04",
        icon: <FaChartLine />,
        title: "Optimize & Scale",
        description:
          "We monitor performance, improve conversions and help scale your business with advanced automation systems.",
      },
    ];
  
    return (
      <section className="section relative overflow-hidden">
  
        {/* Background Glow */}
  
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
  
          {/* Heading */}
  
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
  
            <h2 className="text-4xl md:text-6xl font-bold leading-tight">
              From Strategy
              <span className="gradient-text">
                {" "}To Automation
              </span>
            </h2>
  
            <p className="text-gray-400 mt-6 text-lg">
              We create AI-powered systems that capture leads,
              automate operations and help businesses scale
              without adding extra workload.
            </p>
  
          </div>
  
          {/* Cards */}
  
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
  
            {steps.map((step) => (
              <div
                key={step.number}
                className="
                relative
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
                hover:shadow-[0_0_50px_rgba(217,255,47,.15)]
              "
              >
  
                {/* Card Glow */}
  
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
                "
                />
  
                {/* Watermark Number */}
  
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
                "
                >
                  {step.number}
                </span>
  
                {/* Icon */}
  
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
                "
                >
                  {step.icon}
                </div>
  
                {/* Content */}
  
                <div className="relative z-10">
  
                  <h3 className="text-xl font-semibold mt-8 mb-4">
                    {step.title}
                  </h3>
  
                  <p className="text-gray-300 leading-relaxed">
                    {step.description}
                  </p>
  
                </div>
  
              </div>
            ))}
  
          </div>
  
        </div>
      </section>
    );
  }