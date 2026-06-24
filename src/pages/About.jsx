import { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

export default function About() {
  const [loading, setLoading] = useState(true);

  // Loader
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(timer);
  }, []);

  // Counter Component
  const Counter = ({ end, label }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      let start = 0;
      const duration = 1200;
      const increment = end / (duration / 20);

      const interval = setInterval(() => {
        start += increment;
        if (start >= end) {
          start = end;
          clearInterval(interval);
        }
        setCount(Math.floor(start));
      }, 20);

      return () => clearInterval(interval);
    }, [end]);

    return (
      <div className="text-center p-6 bg-white/5 border border-white/10 rounded-xl backdrop-blur-md hover:scale-105 transition">
        <h3 className="text-3xl md:text-4xl font-bold text-lime-400">
          {count}+
        </h3>
        <p className="text-gray-400 text-sm mt-1">{label}</p>
      </div>
    );
  };

  // Loader
  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center bg-black">
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 rounded-full border-4 border-lime-400/20"></div>
          <div className="absolute inset-0 rounded-full border-4 border-t-lime-400 border-r-transparent border-b-transparent border-l-transparent animate-spin"></div>
        </div>
      </div>
    );
  }

  return (
    <>
    <Helmet>
      <title>About Us | FluxFame</title>
      <meta
        name="description"
        content="Learn about FluxFame, our mission, expertise, AI automation systems, CRM automation, and business growth solutions."
      />
      <link rel="canonical" href="https://fluxfame.site/about" />
    </Helmet>

    <MainLayout>
      <div className="pt-32 pb-20 px-4 md:px-10 max-w-6xl mx-auto">

        {/* HERO */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold">
            About Our Agency
          </h1>

          <p className="mt-5 text-gray-400 max-w-3xl mx-auto leading-relaxed">
            We build <span className="text-lime-400">high-converting funnels</span>,
            <span className="text-lime-400"> GoHighLevel automation systems</span>,
            and complete client acquisition machines that turn traffic into paying customers.
          </p>
        </motion.div>

        {/* STATS */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-20"
        >
          <Counter end={15} label="Projects Delivered" />
          <Counter end={10} label="Happy Clients" />
          <Counter end={5} label="Funnels Built" />
          <Counter end={3} label="Automation Systems" />
        </motion.section>

        {/* TRUST SECTION  */}
        <section className="mb-20">
          <div className="relative bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 backdrop-blur-md overflow-hidden">

            <div className="absolute top-0 right-0 w-40 h-40 bg-lime-400/10 blur-3xl rounded-full"></div>

            <span className="inline-flex items-center px-4 py-2 rounded-full bg-lime-400/10 text-lime-400 text-sm mb-5">
              Registered U.S. LLC
            </span>

            <h2 className="text-2xl md:text-3xl font-semibold mb-5">
              Built as a Legal & Professional Agency
            </h2>

            <p className="text-gray-300 leading-relaxed">
              FluxFame is a registered U.S. LLC providing professional funnel building,
              CRM automation, and lead generation systems for global clients.
            </p>

            <p className="text-gray-400 mt-4 leading-relaxed">
              Working with a registered business ensures structured communication,
              accountability, and long-term support for every client project.
            </p>

            <div className="grid md:grid-cols-3 gap-5 mt-8">

              <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                <h3 className="text-lime-400 font-semibold">
                  U.S. LLC Registered
                </h3>
                <p className="text-gray-400 text-sm mt-2">
                  Officially structured business entity in the United States.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                <h3 className="text-lime-400 font-semibold">
                  Global Agency
                </h3>
                <p className="text-gray-400 text-sm mt-2">
                  Serving clients across multiple countries and industries.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                <h3 className="text-lime-400 font-semibold">
                  Process Driven
                </h3>
                <p className="text-gray-400 text-sm mt-2">
                  Structured systems for delivery, communication, and results.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* MISSION */}
        <section className="mb-20">
          <div className="relative bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 backdrop-blur-md overflow-hidden">

            <div className="absolute -top-10 -right-10 w-40 h-40 bg-lime-400/10 blur-3xl rounded-full"></div>

            <h2 className="text-2xl md:text-3xl font-semibold mb-5">
              Our Mission
            </h2>

            <p className="text-gray-300 leading-relaxed">
              Our mission is to help service-based businesses scale using automated lead systems,
              high-converting funnels, and smart CRM workflows.
            </p>

            <p className="text-gray-400 mt-4 leading-relaxed">
              We don’t just build landing pages — we build complete systems that generate leads,
              automate follow-ups, and increase bookings.
            </p>
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section className="mb-20">
          <h2 className="text-2xl md:text-3xl font-semibold mb-10 text-center">
            Why Choose Us
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "High-Converting Funnels",
                desc: "We design systems that turn visitors into real booked clients."
              },
              {
                title: "GoHighLevel Automation",
                desc: "Full CRM workflows, follow-ups, missed call text-back, and automation setup."
              },
              {
                title: "Business Growth Focus",
                desc: "Everything is built for one goal — more leads, more bookings, more revenue."
              },
              {
                title: "Done-for-You Systems",
                desc: "We build complete working systems, not just designs or ideas."
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-lime-400/40 transition"
              >
                <h3 className="text-lg font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* FOUNDER STORY */}
        <section>
          <div className="bg-gradient-to-r from-white/5 to-transparent border border-white/10 rounded-2xl p-8 md:p-12 backdrop-blur-md">

            <h2 className="text-2xl md:text-3xl font-semibold mb-5">
              Founder Story
            </h2>

            <p className="text-gray-300 leading-relaxed">
              This agency started after realizing most businesses don’t fail because of lack of leads —
              they fail because those leads are never properly followed up.
            </p>

            <p className="text-gray-400 mt-4 leading-relaxed">
              We saw missed opportunities everywhere — slow response, no automation, and no tracking systems.
            </p>

            <p className="text-gray-400 mt-4 leading-relaxed">
              Today, we build smart funnels + CRM automation systems that turn missed leads
              into paying clients automatically.
            </p>

            <div className="mt-8 h-1 w-24 bg-lime-400 rounded-full"></div>
          </div>
        </section>

      </div>
    </MainLayout>
    </>
  );
}