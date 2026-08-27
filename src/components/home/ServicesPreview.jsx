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
      desc: "24/7 AI assistants that answer questions and capture leads automatically.",
    },
    {
      icon: <FaComments />,
      title: "Lead Nurturing",
      desc: "Automated follow-ups that convert leads into booked appointments.",
    },
    {
      icon: <FaCalendarCheck />,
      title: "Appointment Automation",
      desc: "Smart booking, reminders, reschedules & calendar sync.",
    },
    {
      icon: <FaRedo />,
      title: "No Show Recovery",
      desc: "Automatically re-engage clients who miss appointments through SMS, email, and AI-powered follow-ups.",
    },
    {
      icon: <FaStar />,
      title: "Review Requests",
      desc: "Automated review requests to grow your online reputation.",
    },
    {
      icon: <FaUserClock />,
      title: "Reactivation Campaigns",
      desc: "Reconnect with old leads and customers.",
    },
    {
      icon: <FaTimesCircle />,
      title: "Cancellation Handling",
      desc: "Handle cancellations and rescheduling automatically.",
    },
    {
      icon: <FaProjectDiagram />,
      title: "Pipeline Automation",
      desc: "Move opportunities through stages automatically.",
    },
    {
      icon: <FaGlobe />,
      title: "Funnels & Pages",
      desc: "High-converting custom landing pages and funnels.",
    },
    {
      icon: <FaArrowUp />,
      title: "Upsell Workflow",
      desc: "Increase customer value with automated upsells.",
    },
    {
      icon: <FaBullhorn />,
      title: "Social Ads",
      desc: "Automated advertising campaign management.",
    },
    {
      icon: <FaComments />,
      title: "AI Replies",
      desc: "Automated responses to social media messages.",
    },
  ];

 
  const websiteServices = [
    {
      icon: <FaCode />,
      title: "Custom Frontend Build",
      desc: "Modern, fast frontend websites built with React and clean, scalable code.",
    },
    {
      icon: <FaPaintBrush />,
      title: "UI/UX Design",
      desc: "Pixel-perfect interfaces designed to match your brand and convert visitors.",
    },
    {
      icon: <FaMobileAlt />,
      title: "Responsive Design",
      desc: "Websites that look and work perfectly across mobile, tablet, and desktop.",
    },
    {
      icon: <FaBolt />,
      title: "Performance Optimization",
      desc: "Lightning-fast load times with optimized assets and clean architecture.",
    },
    {
      icon: <FaLayerGroup />,
      title: "Landing Pages",
      desc: "High-converting landing pages tailored to your campaigns and offers.",
    },
    {
      icon: <FaSearch />,
      title: "SEO Friendly Structure",
      desc: "Semantic, well-structured markup built to rank and get discovered.",
    },
    {
      icon: <FaSyncAlt />,
      title: "Website Revamps",
      desc: "Modernize outdated websites with a fresh, updated frontend experience.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Cross Browser Testing",
      desc: "Consistent, reliable experience across all major browsers and devices.",
    },
  ];

  return (
    <section className="services-section relative overflow-hidden py-28">

    
      <div className="pointer-events-none absolute inset-0 opacity-50">
        <div
          className="
            absolute
            left-0
            top-0
            h-72
            w-72
            rounded-full
            bg-lime-400/10
            blur-[160px]
          "
        />

        <div
          className="
            absolute
            bottom-0
            right-0
            h-72
            w-72
            rounded-full
            bg-green-400/10
            blur-[160px]
          "
        />
      </div>

      
      <div className="container-custom relative z-10">

        <AnimatedSection
          direction="up"
          y={24}
          duration={0.7}
          amount={0.25}
        >
          <div className="flex justify-center">
            <div
              className="
                glass
                mb-6
                rounded-full
                px-4
                py-2
                text-sm
                text-lime-400
              "
            >
              ✦ SMART AUTOMATION FOR INSTANT RESULTS
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
              <span className="gradient-text">
                Automate
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-gray-400">
              AI systems that bring more leads, automate your
              business, and scale your revenue 24/7
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

            {/* Previous */}

            <button
              className="
                services-prev
                custom-nav
              "
              aria-label="Previous AI services"
            >
              ❮
            </button>

            {/* Next */}

            <button
              className="
                services-next
                custom-nav
              "
              aria-label="Next AI services"
            >
              ❯
            </button>

            <Swiper
              modules={[
                Navigation,
                Autoplay,
                Pagination,
              ]}
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
              {aiServices.map((service, i) => (
                <SwiperSlide key={i}>
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
            <div
              className="
                glass
                mb-6
                whitespace-nowrap
                rounded-full
                px-4
                py-2
                text-sm
                text-lime-400
              "
            >
              ✦ MODERN FRONTEND WEBSITE DEVELOPMENT
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
              <span className="gradient-text">
                Build
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-gray-400">
              Clean, fast, and responsive frontend websites
              designed to grow your brand and convert visitors
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

            {/* Previous */}

            <button
              className="
                website-prev
                custom-nav
              "
              aria-label="Previous website services"
            >
              ❮
            </button>

            {/* Next */}

            <button
              className="
                website-next
                custom-nav
              "
              aria-label="Next website services"
            >
              ❯
            </button>

            <Swiper
              modules={[
                Navigation,
                Autoplay,
                Pagination,
              ]}
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
              {websiteServices.map((service, i) => (
                <SwiperSlide key={i}>
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