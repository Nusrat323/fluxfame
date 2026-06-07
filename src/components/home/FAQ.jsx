import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

export default function FAQ() {
  const faqs = [
    {
      question: "What services do you provide?",
      answer:
        "We specialize in AI automation, GoHighLevel setup, CRM systems, AI chatbots, lead nurturing, appointment booking automation, custom funnels and workflow automation designed to help businesses grow faster."
    },

    {
      question: "What types of businesses do you work with?",
      answer:
        "We work with clinics, dental practices, gyms, coaching centers, real estate agencies, cleaning companies, beauty salons, e-commerce brands, credit repair companies and other service-based businesses."
    },

    {
      question: "Do I need GoHighLevel before working with you?",
      answer:
        "No. If you don't have GoHighLevel yet, we can help you choose the right plan, set up your account and build the entire system for you."
    },

    {
      question: "Can you build custom automations for my business?",
      answer:
        "Yes. Every business operates differently, so we build custom workflows, automations and CRM systems based on your specific requirements."
    },

    {
      question: "How long does a project usually take?",
      answer:
        "Most automation projects take between 3 and 14 days depending on complexity, integrations and the number of workflows required."
    },

    {
      question: "Do you offer AI chatbots?",
      answer:
        "Yes. We create AI chatbots that can answer questions, qualify leads, book appointments and provide customer support automatically."
    },

    {
      question: "Will automation replace my staff?",
      answer:
        "Automation is designed to remove repetitive tasks so your team can focus on higher-value activities such as sales, customer relationships and business growth."
    },

    {
      question: "Do you provide ongoing support?",
      answer:
        "Yes. We provide ongoing support, maintenance and optimization to ensure your systems continue running smoothly."
    },

    {
      question: "Can you integrate with my existing tools?",
      answer:
        "In most cases, yes. We can integrate CRM platforms, calendars, payment processors, forms, websites and many third-party applications."
    },

    {
      question: "How do we get started?",
      answer:
        "Simply contact us and we'll discuss your business goals, current processes and automation opportunities before recommending the best solution."
    }
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
            Everything you need to know before starting your
            automation project.
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