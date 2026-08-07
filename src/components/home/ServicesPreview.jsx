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
import { Navigation, Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import CaseStudyPreview from "./CaseStudyPreview";
import CTASection from "./CTASection";
import WebsiteCaseStudyPreview from "./Websitecasestudypreview";

export default function ServicesPreview() {
  const aiServices = [
    { icon: <FaRobot />, title: "AI Assistant", desc: "24/7 AI assistants that answer questions and capture leads automatically." },
    { icon: <FaComments />, title: "Lead Nurturing", desc: "Automated follow-ups that convert leads into booked appointments." },
    { icon: <FaCalendarCheck />, title: "Appointment Automation", desc: "Smart booking, reminders, reschedules & calendar sync." },
    { icon: <FaRedo />, title: "No Show Recovery", desc: "Automatically re-engage clients who miss appointments through SMS, email, and AI-powered follow-ups." },
    { icon: <FaStar />, title: "Review Requests", desc: "Automated review requests to grow your online reputation." },
    { icon: <FaUserClock />, title: "Reactivation Campaigns", desc: "Reconnect with old leads and customers." },
    { icon: <FaTimesCircle />, title: "Cancellation Handling", desc: "Handle cancellations and rescheduling." },
    { icon: <FaProjectDiagram />, title: "Pipeline Automation", desc: "Move opportunities through stages automatically." },
    { icon: <FaGlobe />, title: "Funnels & Pages", desc: "High-converting custom landing pages and funnels." },
    { icon: <FaArrowUp />, title: "Upsell Workflow", desc: "Increase customer value with upsells." },
    { icon: <FaBullhorn />, title: "Social Ads", desc: "Automated advertising campaign management." },
    { icon: <FaComments />, title: "AI Replies", desc: "Automated responses to social media messages." },
  ];

  const websiteServices = [
    { icon: <FaCode />, title: "Custom Frontend Build", desc: "Modern, fast frontend websites built with React and clean, scalable code." },
    { icon: <FaPaintBrush />, title: "UI/UX Design", desc: "Pixel-perfect interfaces designed to match your brand and convert visitors." },
    { icon: <FaMobileAlt />, title: "Responsive Design", desc: "Websites that look and work perfectly across mobile, tablet, and desktop." },
    { icon: <FaBolt />, title: "Performance Optimization", desc: "Lightning-fast load times with optimized assets and clean architecture." },
    { icon: <FaLayerGroup />, title: "Landing Pages", desc: "High-converting landing pages tailored to your campaigns and offers." },
    { icon: <FaSearch />, title: "SEO Friendly Structure", desc: "Semantic, well-structured markup built to rank and get discovered." },
    { icon: <FaSyncAlt />, title: "Website Revamps", desc: "Modernize outdated websites with a fresh, updated frontend experience." },
    { icon: <FaShieldAlt />, title: "Cross Browser Testing", desc: "Consistent, reliable experience across all major browsers and devices." },
  ];

  return (
    <section className="services-section relative py-28 overflow-hidden">

      {/* background glow */}
      <div className="absolute inset-0 pointer-events-none opacity-50">
        <div className="absolute top-0 left-0 w-72 h-72 bg-lime-400/10 blur-[160px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-green-400/10 blur-[160px] rounded-full" />
      </div>

      <div className="container-custom relative z-10">

        {/* badge */}
        <div className="flex justify-center">
          <div className="glass px-4 py-2 rounded-full text-lime-400 text-sm mb-6">
            ✦ SMART AUTOMATION FOR INSTANT RESULTS
          </div>
        </div>

        {/* heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-6xl font-black">
            What We <span className="gradient-text">Automate</span>
          </h2>
          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
          AI systems that bring more leads, automate your business, and scale your revenue 24/7
          </p>
        </div>

        {/* slider */}
<div className="relative px-12">

<button className="services-prev custom-nav">❮</button>
<button className="services-next custom-nav">❯</button>

<Swiper
modules={[Navigation, Autoplay, Pagination]}
navigation={{
  prevEl: ".services-prev",
  nextEl: ".services-next",
}}
autoplay={{
  delay: 2500,
  disableOnInteraction: false,
}}
pagination={{
  clickable: true,
}}
loop={false}
spaceBetween={18}
breakpoints={{
  0: { slidesPerView: 1.2 },
  640: { slidesPerView: 2 },
  1024: { slidesPerView: 3 },
  1280: { slidesPerView: 4 },
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

      <h3 className="title">{service.title}</h3>

      <p className="desc">{service.desc}</p>

    </div>
  </SwiperSlide>
))}
</Swiper>

</div>

{/* WEBSITE DEVELOPMENT SECTION */}

{/* badge */}
<div className="flex justify-center mt-20">
<div className="glass px-4 py-2 rounded-full text-lime-400 text-sm mb-6 whitespace-nowrap">
  ✦ MODERN FRONTEND WEBSITE DEVELOPMENT
</div>
</div>

{/* heading */}
<div className="text-center mb-14">
<h2 className="text-4xl md:text-6xl font-black">
  What We <span className="gradient-text">Build</span>
</h2>
<p className="text-gray-400 mt-5 max-w-2xl mx-auto">
  Clean, fast, and responsive frontend websites designed to grow your brand and convert visitors
</p>
</div>

{/* slider */}
<div className="relative px-12">

<button className="website-prev custom-nav">❮</button>
<button className="website-next custom-nav">❯</button>

<Swiper
modules={[Navigation, Autoplay, Pagination]}
navigation={{
  prevEl: ".website-prev",
  nextEl: ".website-next",
}}
autoplay={{
  delay: 2500,
  disableOnInteraction: false,
}}
pagination={{
  clickable: true,
}}
loop={false}
spaceBetween={18}
breakpoints={{
  0: { slidesPerView: 1.2 },
  640: { slidesPerView: 2 },
  1024: { slidesPerView: 3 },
  1280: { slidesPerView: 4 },
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

      <h3 className="title">{service.title}</h3>

      <p className="desc">{service.desc}</p>

    </div>
  </SwiperSlide>
))}
</Swiper>

</div>

{/* CASE STUDY SECTION */}
<div className="mt-4">
<CaseStudyPreview />
</div>

{/* WEBSITE CASE STUDY SECTION */}
<div className="mt-4">
<WebsiteCaseStudyPreview />
</div>

<CTASection/>
      </div>
    </section>
  );
}