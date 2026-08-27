import { FaQuoteLeft, FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import AnimatedSection from "../common/AnimatedSection";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Williams",
      company: "Beauty Studio",
      review:
        "Our new website looks premium, loads quickly and has made booking appointments much easier for our clients.",
    },
    {
      name: "Ahmed Hassan",
      company: "Real Estate Agency",
      review:
        "The website and lead management system work perfectly together. We receive more qualified inquiries and everything stays organized.",
    },
    {
      name: "James Carter",
      company: "Dental Clinic",
      review:
        "The online appointment system is simple to use, and automated reminders have significantly reduced missed appointments.",
    },
    {
      name: "Zara Hussain",
      company: "Coaching Center",
      review:
        "Our new website is modern, responsive and makes student registrations much easier than before.",
    },
    {
      name: "Michael Thompson",
      company: "E-commerce Store",
      review:
        "The frontend design feels premium, checkout is smooth and customer engagement has noticeably improved.",
    },
    {
      name: "David Wilson",
      company: "Gym & Fitness Center",
      review:
        "The website and automated inquiry system save our team hours every week while bringing in more membership requests.",
    },
    {
      name: "Shahidul Islam",
      company: "Cleaning Agency",
      review:
        "Everything from quote requests to customer follow-ups is now much more organized, helping us convert more clients.",
    },
    {
      name: "Emily Roberts",
      company: "Credit Repair Company",
      review:
        "The digital system simplified our workflow and improved communication with clients throughout the entire process.",
    },
    {
      name: "Olivia Brown",
      company: "Med Spa",
      review:
        "The website looks fantastic and the AI assistant answers customer questions instantly, making the whole experience seamless.",
    },
    {
      name: "Tanvir Rahman",
      company: "Marketing Agency",
      review:
        "Professional design, fast performance and smart automation have made managing new leads much easier.",
    },
    {
      name: "Daniel Cooper",
      company: "Property Management",
      review:
        "From website inquiries to internal workflows, everything is streamlined and much more efficient than before.",
    },
    {
      name: "Jessica Miller",
      company: "Online Education",
      review:
        "The complete digital solution helped us attract more customers, automate repetitive tasks and deliver a better user experience.",
    },
  ];

  return (
    <section className="section relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
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
          "
        />
      </div>

      <div className="container-custom relative z-10">

        <AnimatedSection
          direction="up"
          y={25}
          duration={0.7}
          amount={0.3}
        >
          <div className="flex justify-center">
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
              ✦ CLIENT SUCCESS STORIES
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection
          direction="up"
          y={35}
          delay={0.08}
          duration={0.8}
          amount={0.3}
        >
          <div className="text-center mb-14">

            <h2
              className="
                text-4xl
                md:text-6xl
                font-black
              "
            >
              Trusted By
              <span className="gradient-text">
                {" "}Growing Businesses
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
              Helping businesses build modern websites, streamline
              operations and create digital solutions that drive
              real business growth.
            </p>

          </div>
        </AnimatedSection>

        <AnimatedSection
          direction="up"
          y={45}
          delay={0.16}
          duration={0.9}
          amount={0.15}
        >
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
            }}
            loop={true}
            spaceBetween={20}
            breakpoints={{
              0: {
                slidesPerView: 1.05,
              },
              768: {
                slidesPerView: 2,
              },
              1280: {
                slidesPerView: 2.5,
              },
            }}
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index}>

                <div
                  className="
                    group
                    relative
                    overflow-hidden
                    h-full

                    rounded-[28px]

                    bg-white/[0.04]
                    backdrop-blur-[25px]

                    border
                    border-white/10

                    p-5

                    transition-all
                    duration-500

                    hover:-translate-y-1
                    hover:border-lime-400/25
                    hover:bg-white/[0.055]
                    hover:shadow-[0_20px_50px_rgba(0,0,0,0.2)]
                  "
                >

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

                      transition-all
                      duration-500

                      group-hover:w-48
                      group-hover:via-lime-400
                    "
                  />


                  <div
                    className="
                      absolute
                      -top-10
                      right-0

                      w-24
                      h-24

                      bg-lime-400/10
                      blur-3xl

                      pointer-events-none

                      transition-all
                      duration-500

                      group-hover:bg-lime-400/20
                    "
                  />

                 

                  <div
                    className="
                      relative
                      z-10

                      w-10
                      h-10

                      rounded-xl

                      bg-lime-400/10
                      border
                      border-lime-400/20

                      flex
                      items-center
                      justify-center

                      text-lime-400

                      mb-4

                      transition-all
                      duration-500

                      group-hover:bg-lime-400/15
                      group-hover:border-lime-400/40
                      group-hover:scale-105
                    "
                  >
                    <FaQuoteLeft size={14} />
                  </div>

                 
                  <div
                    className="
                      relative
                      z-10
                      flex
                      gap-1
                      text-yellow-300
                      text-sm
                      mb-4
                    "
                  >
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>

                  

                  <p
                    className="
                      relative
                      z-10
                      text-gray-300
                      leading-relaxed
                      text-sm
                    "
                  >
                    "{item.review}"
                  </p>

                 

                  <div
                    className="
                      relative
                      z-10
                      mt-6
                      h-px

                      bg-gradient-to-r
                      from-lime-400/30
                      via-lime-400/10
                      to-transparent
                    "
                  />

                  

                  <div className="relative z-10 mt-4">

                    <h4
                      className="
                        font-semibold
                        text-white
                        transition-colors
                        duration-300
                        group-hover:text-lime-300
                      "
                    >
                      {item.name}
                    </h4>

                    <p
                      className="
                        text-gray-400
                        text-sm
                        mt-1
                      "
                    >
                      {item.company}
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

              </SwiperSlide>
            ))}
          </Swiper>
        </AnimatedSection>

      </div>
    </section>
  );
}
