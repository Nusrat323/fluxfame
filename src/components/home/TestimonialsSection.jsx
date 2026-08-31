
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import AnimatedSection from "../common/AnimatedSection";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Marcus Johnson",
      company: "Credit Repair Company",
      review:
        "The automation made a huge difference for us. New leads are followed up with right away, appointments get booked automatically, and our team doesn't have to keep checking everything manually.",
    },
    {
      name: "Sarah Williams",
      company: "Beauty Studio",
      review:
        "We needed a website that actually made it easier for people to book. The new site looks great on mobile and our clients have been finding the booking process much easier.",
    },
    {
      name: "Daniel Carter",
      company: "Real Estate Agency",
      review:
        "The website turned out better than we expected. The lead form, CRM and appointment process all work together, so we're not losing track of inquiries anymore.",
    },
    {
      name: "Emily Roberts",
      company: "Credit Repair Business",
      review:
        "Before this, we were following up with leads manually and a lot of them would go cold. Now the follow-ups happen automatically and our team can focus more on the people who are actually ready to move forward.",
    },
    {
      name: "James Wilson",
      company: "Dental Clinic",
      review:
        "The website is clean and easy to use, but the appointment system was probably the biggest improvement for us. Patients can book without having to call the office.",
    },
    {
      name: "Aisha Rahman",
      company: "Online Coaching Business",
      review:
        "I mainly wanted a professional landing page for my offer and that's exactly what I got. It looks good, loads fast and works really well on phones.",
    },
    {
      name: "Michael Thompson",
      company: "E-commerce Store",
      review:
        "The whole website feels much more professional now. The product pages are easier to navigate and the mobile experience is a lot better than our old site.",
    },
    {
      name: "Kevin Anderson",
      company: "Credit Repair Company",
      review:
        "We connected the lead capture, qualification and follow-up process so everything is in one place. It saved us a lot of time and made it much easier to see where each lead is.",
    },
    {
      name: "Olivia Brown",
      company: "Med Spa",
      review:
        "The website looks premium without being complicated. We also added an AI assistant for common questions, which has been really useful when people visit the site outside business hours.",
    },
    {
      name: "David Miller",
      company: "Cleaning Company",
      review:
        "We wanted something simple where customers could request a quote without calling us first. The new website does exactly that and the whole process feels much more organized.",
    },
    {
      name: "Jessica Miller",
      company: "Marketing Agency",
      review:
        "I liked that they didn't just give us a template and call it done. The site was built around our services and the small details made it feel much more professional.",
    },
    {
      name: "Ahmed Hassan",
      company: "Property Management",
      review:
        "The new website is much easier for our clients to use. People can find the information they need quickly and submit inquiries without going through a complicated process.",
    },
    {
      name: "Sophia Williams",
      company: "Google Review — Local Business",
      review:
        "Really happy with the work. Communication was easy, everything was explained clearly, and the website came out exactly how we wanted it.",
    },
    {
      name: "Ryan Cooper",
      company: "Google Review — Business Owner",
      review:
        "Very professional from start to finish. The site is fast, looks great on mobile and they were quick to make the changes we asked for.",
    },
    {
      name: "Tanvir Rahman",
      company: "Service Business",
      review:
        "We mainly needed a better online presence and a website that could bring in more inquiries. The new site is much cleaner and we've already started getting more people through the contact form.",
    },
    {
      name: "Jessica Adams",
      company: "Lead Generation Agency",
      review:
        "The landing page was built specifically for our campaign instead of using a generic design. It looks much more trustworthy and the lead form is simple enough that people actually use it.",
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
              From websites and landing pages to AI automation and
              lead management systems, we help businesses build
              better digital experiences and simpler workflows.
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
                  {/* Top Glow Line */}
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

                  {/* Background Glow */}
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

                  {/* Quote Icon */}
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

                  {/* Stars */}
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

                  {/* Review */}
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

                  {/* Divider */}
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

                  {/* Client Info */}
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

                  {/* Bottom Glow */}
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

