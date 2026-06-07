
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Williams",
      company: "Beauty Studio",
      review:
        "The AI chatbot now handles most customer inquiries automatically. Appointment bookings increased and our team spends far less time replying to messages."
    },
  
    {
      name: "Ahmed Hassan",
      company: "Real Estate Agency",
      review:
        "Lead follow-ups are now fully automated. Every inquiry receives an instant response and our agents only focus on qualified prospects."
    },
  
    {
      name: "James Carter",
      company: "Dental Clinic",
      review:
        "Appointment reminders dramatically reduced no-shows. The entire booking process feels more professional and organized."
    },
  
    {
      name: "Zara Hussain",
      company: "Coaching Center",
      review:
        "Student inquiries, registrations and follow-ups now happen automatically. We save hours every week on administrative work."
    },
  
    {
      name: "Michael Thompson",
      company: "E-commerce Store",
      review:
        "Automated customer support and abandoned cart follow-ups helped us recover lost sales and improve customer satisfaction."
    },
  
    {
      name: "David Wilson",
      company: "Gym & Fitness Center",
      review:
        "The automated membership follow-up system consistently brings back inactive members and keeps engagement high."
    },
  
    {
      name: "Shahidul Islam",
      company: "Cleaning Agency",
      review:
        "Our quote requests are automatically captured and followed up. We now convert more leads without increasing staff."
    },
  
    {
      name: "Emily Roberts",
      company: "Credit Repair Company",
      review:
        "Lead nurturing, reminders and client communication are completely automated. The system keeps everything moving smoothly."
    },
  
    {
      name: "Olivia Brown",
      company: "Med Spa",
      review:
        "The AI receptionist answers questions instantly and books appointments around the clock. It feels like having an extra team member."
    },
  
    {
      name: "Tanvir Rahman",
      company: "Facebook Ads Agency",
      review:
        "The CRM automation keeps every lead organized and ensures no opportunity slips through the cracks."
    },
  
    {
      name: "Daniel Cooper",
      company: "Property Management",
      review:
        "Tenant inquiries and maintenance requests are automatically routed and tracked. Operations became significantly more efficient."
    },
  
    {
      name: "Jessica Miller",
      company: "Online Course Business",
      review:
        "From lead capture to follow-up sequences, everything runs automatically. The system helped us scale without hiring more staff."
    }
  ];
  return (
    <section className="relative  overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-lime-400/10 blur-[150px] rounded-full" />
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-lime-400/10 blur-[150px] rounded-full" />
      </div>

      <div className="container-custom relative z-10">

        {/* BADGE */}
        <div className="flex justify-center">
          <div className="glass px-4 py-2 rounded-full text-lime-400 text-sm mb-6">
            ✦ CLIENT SUCCESS STORIES
          </div>
        </div>

        {/* HEADING */}
        <div className="text-center mb-14">

          <h2 className="text-4xl md:text-6xl font-black">
            Trusted By
            <span className="gradient-text"> Growing Businesses</span>
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            Helping businesses automate lead generation,
            follow-ups and appointment booking with
            AI-powered systems.
          </p>

        </div>

        {/* TESTIMONIAL SLIDER */}
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
                  relative
                  overflow-hidden

                  rounded-[28px]

                  bg-white/[0.04]
                  backdrop-blur-[25px]

                  border border-white/10

                  p-5

                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:border-lime-400/20
                "
              >

                {/* TOP CENTER GLOW BORDER */}
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

                {/* SOFT GLOW */}
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
                  "
                />

                {/* QUOTE ICON */}
                <div
                  className="
                    w-10
                    h-10

                    rounded-xl

                    bg-lime-400/10
                    border border-lime-400/20

                    flex
                    items-center
                    justify-center

                    text-lime-400

                    mb-4
                  "
                >
                  <FaQuoteLeft size={14} />
                </div>

                {/* STARS */}
                <div className="flex gap-1 text-yellow-300 text-sm mb-4">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>

                {/* REVIEW */}
                <p className="text-gray-300 leading-relaxed text-sm">
                  "{item.review}"
                </p>

                {/* DIVIDER */}
                <div
                  className="
                    mt-6
                    h-px

                    bg-gradient-to-r
                    from-lime-400/30
                    to-transparent
                  "
                />

                {/* CLIENT */}
                <div className="mt-4">

                  <h4 className="font-semibold text-white">
                    {item.name}
                  </h4>

                  <p className="text-gray-400 text-sm mt-1">
                    {item.company}
                  </p>

                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}

