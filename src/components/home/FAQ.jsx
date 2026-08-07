import { useState } from "react";
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

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-lime-400/10 blur-[150px] rounded-full" />
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-lime-400/10 blur-[150px] rounded-full" />
      </div>

      <div className="container-custom relative z-10">

        {/* BADGE */}
        <div className="flex justify-center">
          <div className="glass px-4 py-2 rounded-full text-lime-400 text-sm mb-6">
            ✦ FAQ
          </div>
        </div>

        {/* HEADING */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-6xl font-black">
            Frequently Asked
            <span className="gradient-text"> Questions</span>
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
  Everything you need to know before starting your next digital project.
</p>
        </div>

        {/* FAQ LIST */}
        <div className="max-w-4xl mx-auto space-y-4">

          {faqs.map((item, index) => (
            <div
              key={index}
              className="
                relative
                overflow-hidden

                rounded-[24px]

                bg-white/[0.04]
                backdrop-blur-[20px]

                border
                border-white/10

                transition-all
                duration-300
              "
            >

              {/* TOP GLOW */}
              <div
                className="
                  absolute
                  top-0
                  left-1/2
                  -translate-x-1/2

                  w-32
                  h-[1.5px]

                  bg-gradient-to-r
                  from-transparent
                  via-lime-400/70
                  to-transparent
                "
              />

              <button
                onClick={() =>
                  setActive(active === index ? null : index)
                }
                className="
                  w-full
                  p-5

                  flex
                  items-center
                  justify-between

                  text-left
                "
              >
                <span className="font-semibold pr-4">
                  {item.question}
                </span>

                <div className="text-lime-400 shrink-0">
                  {active === index ? (
                    <FaMinus />
                  ) : (
                    <FaPlus />
                  )}
                </div>
              </button>

              {active === index && (
                <div className="px-5 pb-5">
                  <div className="h-px bg-white/10 mb-4" />

                  <p className="text-gray-400 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              )}

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}