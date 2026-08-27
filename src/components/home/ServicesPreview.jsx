import {
  FaRobot,
  FaComments,
  FaCalendarCheck,
  FaRedo,
  FaStar,
  FaUserClock,
  FaTimesCircle,
  FaProjectDiagram,
  FaGlobe,
  FaArrowUp,
  FaBullhorn,
  FaCode,
  FaPaintBrush,
  FaMobileAlt,
  FaBolt,
  FaSearch,
  FaLayerGroup,
  FaSyncAlt,
  FaShieldAlt,
} from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Autoplay,
  Pagination,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import CaseStudyPreview from "./CaseStudyPreview";
import CTASection from "./CTASection";
import WebsiteCaseStudyPreview from "./Websitecasestudypreview";
import AnimatedSection from "../common/AnimatedSection";

export default function ServicesPreview() {
  const aiServices = [
    {
      icon: <FaRobot />,
      title: "AI Assistant",
      desc: "24/7 AI assistants that answer customer questions, qualify prospects, and capture leads automatically.",
    },
    {
      icon: <FaComments />,
      title: "Lead Nurturing",
      desc: "Automated follow-up systems that keep leads engaged and move them toward booked appointments.",
    },
    {
      icon: <FaCalendarCheck />,
      title: "Appointment Automation",
      desc: "Smart booking, confirmations, reminders, rescheduling, and calendar workflows that run automatically.",
    },
    {
      icon: <FaRedo />,
      title: "No-Show Recovery",
      desc: "Automatically re-engage customers who miss appointments with timely follow-ups and reminders.",
    },
    {
      icon: <FaStar />,
      title: "Review Requests",
      desc: "Automated review campaigns that encourage satisfied customers to share their experience.",
    },
    {
      icon: <FaUserClock />,
      title: "Reactivation Campaigns",
      desc: "Reconnect with inactive leads and past customers through targeted automated campaigns.",
    },
    {
      icon: <FaTimesCircle />,
      title: "Cancellation Handling",
      desc: "Automated workflows that handle cancellations, rescheduling, and customer follow-up.",
    },
    {
      icon: <FaProjectDiagram />,
      title: "Pipeline Automation",
      desc: "Automatically organize and move leads through your sales pipeline based on customer activity.",
    },
    {
      icon: <FaGlobe />,
      title: "Funnels & Landing Pages",
      desc: "Conversion-focused landing pages and funnels designed to turn visitors into qualified leads.",
    },
    {
      icon: <FaArrowUp />,
      title: "Upsell Workflows",
      desc: "Automated customer journeys designed to increase repeat purchases and customer value.",
    },
    {
      icon: <FaBullhorn />,
      title: "Marketing Automation",
      desc: "Automated campaigns and customer journeys that keep your business connected with its audience.",
    },
    {
      icon: <FaComments />,
      title: "AI-Powered Replies",
      desc: "Intelligent automated responses for customer messages across your business communication channels.",
    },
  ];

  const websiteServices = [
    {
      icon: <FaCode />,
      title: "Custom Website Development",
      desc: "Professional business websites built around your brand, goals, services, and customer journey.",
    },
    {
      icon: <FaPaintBrush />,
      title: "UI/UX Design",
      desc: "Modern, intuitive interfaces designed to build trust, communicate your offer, and convert visitors.",
    },
    {
      icon: <FaMobileAlt />,
      title: "Responsive Experience",
      desc: "Websites designed to provide a smooth and consistent experience across mobile, tablet, and desktop.",
    },
    {
      icon: <FaBolt />,
      title: "Performance Optimization",
      desc: "Fast-loading websites with optimized assets and clean architecture for a smooth browsing experience.",
    },
    {
      icon: <FaLayerGroup />,
      title: "Landing Pages",
      desc: "High-converting landing pages created for services, products, campaigns, and lead generation.",
    },
    {
      icon: <FaSearch />,
      title: "SEO-Friendly Structure",
      desc: "Well-structured websites built with search visibility, accessibility, and discoverability in mind.",
    },
    {
      icon: <FaSyncAlt />,
      title: "Website Revamps",
      desc: "Transform outdated websites into modern, professional digital experiences that better represent your brand.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Reliable User Experience",
      desc: "Carefully tested websites designed for consistent performance across major browsers and devices.",
    },
  ];

  return (
    <section className="services-section relative overflow-hidden py-28">
      <div className="pointer-events-none absolute inset-0 opacity-50">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-lime-400/10 blur-[160px]" />

        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-green-400/10 blur-[160px]" />
      </div>

      <div className="container-custom relative z-10">
        <AnimatedSection
          direction="up"
          y={24}
          duration={0.7}
          amount={0.25}
        >
          <div className="flex justify-center">
            <div className="glass mb-6 rounded-full px-4 py-2 text-sm text-lime-400">
              ✦ SMART AUTOMATION FOR BUSINESS GROWTH
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection
          direction="up"
          y={34}
          delay={0.05}
          duration={0.8}
          amount={0.2}
        >
          <div className="mb-14 text-center">
            <h2 className="text-4xl font-black md:text-6xl">
              What We{" "}
              <span className="gradient-text">Automate</span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-gray-400">
              Smart systems that capture leads, engage customers,
              automate follow-ups, manage appointments, and keep
              your business running efficiently around the clock.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection
          direction="up"
          y={40}
          delay={0.1}
          duration={0.9}
          amount={0.12}
        >
          <div className="relative px-12">
            <button
              className="services-prev custom-nav"
              aria-label="Previous automation services"
            >
              ❮
            </button>

            <button
              className="services-next custom-nav"
              aria-label="Next automation services"
            >
              ❯
            </button>

            <Swiper
              modules={[Navigation, Autoplay, Pagination]}
              navigation={{
                prevEl: ".services-prev",
                nextEl: ".services-next",
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              pagination={{
                clickable: true,
              }}
              loop={false}
              spaceBetween={18}
              breakpoints={{
                0: {
                  slidesPerView: 1.2,
                },
                640: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
                1280: {
                  slidesPerView: 4,
                },
              }}
            >
              {aiServices.map((service, index) => (
                <SwiperSlide key={index}>
                  <div className="service-card">
                    <span className="corner-glow tr" />
                    <span className="corner-glow bl" />

                    <div className="icon-box">
                      {service.icon}
                    </div>

                    <h3 className="title">
                      {service.title}
                    </h3>

                    <p className="desc">
                      {service.desc}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </AnimatedSection>

        <AnimatedSection
          direction="up"
          y={28}
          delay={0.05}
          duration={0.75}
          amount={0.2}
        >
          <div className="mt-20 flex justify-center">
            <div className="glass mb-6 whitespace-nowrap rounded-full px-4 py-2 text-sm text-lime-400">
              ✦ MODERN WEBSITE DESIGN & DEVELOPMENT
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection
          direction="up"
          y={34}
          delay={0.08}
          duration={0.8}
          amount={0.2}
        >
          <div className="mb-14 text-center">
            <h2 className="text-4xl font-black md:text-6xl">
              What We{" "}
              <span className="gradient-text">Build</span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-gray-400">
              Complete digital experiences designed around your
              business, brand, customers, and growth goals —
              from professional business websites to
              high-converting landing pages.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection
          direction="up"
          y={40}
          delay={0.1}
          duration={0.9}
          amount={0.12}
        >
          <div className="relative px-12">
            <button
              className="website-prev custom-nav"
              aria-label="Previous website services"
            >
              ❮
            </button>

            <button
              className="website-next custom-nav"
              aria-label="Next website services"
            >
              ❯
            </button>

            <Swiper
              modules={[Navigation, Autoplay, Pagination]}
              navigation={{
                prevEl: ".website-prev",
                nextEl: ".website-next",
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              pagination={{
                clickable: true,
              }}
              loop={false}
              spaceBetween={18}
              breakpoints={{
                0: {
                  slidesPerView: 1.2,
                },
                640: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
                1280: {
                  slidesPerView: 4,
                },
              }}
            >
              {websiteServices.map((service, index) => (
                <SwiperSlide key={index}>
                  <div className="service-card">
                    <span className="corner-glow tr" />
                    <span className="corner-glow bl" />

                    <div className="icon-box">
                      {service.icon}
                    </div>

                    <h3 className="title">
                      {service.title}
                    </h3>

                    <p className="desc">
                      {service.desc}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </AnimatedSection>

        <AnimatedSection
          direction="up"
          y={45}
          delay={0.08}
          duration={0.9}
          amount={0.1}
        >
          <div className="mt-16">
            <CaseStudyPreview />
          </div>
        </AnimatedSection>

        <AnimatedSection
          direction="up"
          y={45}
          delay={0.08}
          duration={0.9}
          amount={0.1}
        >
          <div className="mt-16">
            <WebsiteCaseStudyPreview />
          </div>
        </AnimatedSection>

        <AnimatedSection
          direction="up"
          y={50}
          delay={0.1}
          duration={1}
          amount={0.1}
        >
          <div className="mt-16">
            <CTASection />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}