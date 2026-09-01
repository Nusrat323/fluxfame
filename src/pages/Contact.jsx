import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";

import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaWhatsapp,
  FaInstagram,
} from "react-icons/fa";

import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

const ease = [0.16, 1, 0.3, 1];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease,
    },
  },
};

export default function Contact() {
  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 700);

    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      return;
    }

    setSending(true);

    emailjs
      .send(
        "service_7tvjkl8",
        "template_9ywue23",
        {
          // These names must match the variables
          // used inside your EmailJS template.
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "6kjG_bAhyYIesSn81"
      )
      .then(() => {
        setSuccess(true);
        setSending(false);

        setFormData({
          name: "",
          email: "",
          message: "",
        });

        setTimeout(() => {
          setSuccess(false);
        }, 3000);
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        setSending(false);
      });
  };

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center bg-black">
        <div className="relative w-16 h-16">
          <div
            className="
              absolute
              inset-0
              rounded-full
              border-4
              border-lime-400/20
            "
          />

          <div
            className="
              absolute
              inset-0
              rounded-full
              border-4
              border-t-lime-400
              border-r-transparent
              border-b-transparent
              border-l-transparent
              animate-spin
            "
          />
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Contact Us | FluxFame</title>

        <meta
          name="description"
          content="Contact FluxFame for AI automation, CRM automation, GoHighLevel systems and business workflow solutions."
        />

        <link
          rel="canonical"
          href="https://fluxfame.site/contact"
        />
      </Helmet>

      <div
        className="
          pt-28
          pb-20
          px-4
          md:px-10
          max-w-6xl
          mx-auto
        "
      >
        <motion.div
          initial={{
            opacity: 0,
            y: 35,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            ease,
          }}
          className="text-center mb-14"
        >
          <h1
            className="
              text-4xl
              md:text-5xl
              font-bold
              text-white
            "
          >
            Get In Touch
          </h1>

          <motion.p
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.2,
              ease,
            }}
            className="
              mt-4
              text-gray-400
              max-w-2xl
              mx-auto
              leading-relaxed
            "
          >
            Let's build modern websites and smart automation
            solutions that help your business grow.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            {/* EMAIL */}

            <motion.a
              variants={itemVariants}
              whileHover={{
                y: -5,
                transition: {
                  duration: 0.25,
                },
              }}
              href="mailto:fluxfame01@gmail.com"
              className="
                glass
                p-6
                rounded-2xl
                border
                border-white/10
                block
                hover:border-lime-400/40
                hover:shadow-[0_0_25px_rgba(163,230,53,0.08)]
                transition-all
                duration-300
              "
            >
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-lime-400" />

                <h3 className="font-semibold text-white">
                  Email
                </h3>
              </div>

              <p className="text-gray-400 mt-2">
                fluxfame01@gmail.com
              </p>
            </motion.a>

            {/* WHATSAPP */}

            <motion.a
              variants={itemVariants}
              whileHover={{
                y: -5,
                transition: {
                  duration: 0.25,
                },
              }}
              href="https://wa.me/8801XXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="
                glass
                p-6
                rounded-2xl
                border
                border-white/10
                block
                hover:border-lime-400/40
                hover:shadow-[0_0_25px_rgba(163,230,53,0.08)]
                transition-all
                duration-300
              "
            >
              <div className="flex items-center gap-3">
                <FaWhatsapp className="text-lime-400" />

                <h3 className="font-semibold text-white">
                  WhatsApp
                </h3>
              </div>

              <p className="text-gray-400 mt-2">
                Chat on WhatsApp
              </p>
            </motion.a>

            {/* INSTAGRAM */}

            <motion.a
              variants={itemVariants}
              whileHover={{
                y: -5,
                transition: {
                  duration: 0.25,
                },
              }}
              href="https://www.instagram.com/fluxfame01"
              target="_blank"
              rel="noopener noreferrer"
              className="
                glass
                p-6
                rounded-2xl
                border
                border-white/10
                block
                hover:border-lime-400/40
                hover:shadow-[0_0_25px_rgba(163,230,53,0.08)]
                transition-all
                duration-300
              "
            >
              <div className="flex items-center gap-3">
                <FaInstagram className="text-lime-400" />

                <h3 className="font-semibold text-white">
                  Instagram
                </h3>
              </div>

              <p className="text-gray-400 mt-2">
                Visit Instagram Page
              </p>
            </motion.a>

            {/* FACEBOOK */}

            <motion.a
              variants={itemVariants}
              whileHover={{
                y: -5,
                transition: {
                  duration: 0.25,
                },
              }}
              href="https://www.facebook.com/people/FluxFame/61590684362355/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                glass
                p-6
                rounded-2xl
                border
                border-white/10
                block
                hover:border-lime-400/40
                hover:shadow-[0_0_25px_rgba(163,230,53,0.08)]
                transition-all
                duration-300
              "
            >
              <div className="flex items-center gap-3">
                <FaFacebook className="text-lime-400" />

                <h3 className="font-semibold text-white">
                  Facebook
                </h3>
              </div>

              <p className="text-gray-400 mt-2">
                Visit Facebook Page
              </p>
            </motion.a>

            {/* LOCATION */}

            <motion.div
              variants={itemVariants}
              whileHover={{
                y: -5,
                transition: {
                  duration: 0.25,
                },
              }}
              className="
                glass
                p-6
                rounded-2xl
                border
                border-white/10
                hover:border-lime-400/40
                hover:shadow-[0_0_25px_rgba(163,230,53,0.08)]
                transition-all
                duration-300
              "
            >
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-lime-400" />

                <h3 className="font-semibold text-white">
                  Location
                </h3>
              </div>

              <p className="text-gray-400 mt-2">
                USA • Worldwide Clients
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              x: 45,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.25,
              ease,
            }}
            className="
              glass
              p-8
              rounded-3xl
              border
              border-white/10
              h-fit
            "
          >
            <h2
              className="
                text-2xl
                font-semibold
                text-white
                mb-6
              "
            >
              Send Message
            </h2>

            <form
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              {/* NAME */}

              <motion.input
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.4,
                  ease,
                }}
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="
                  w-full
                  p-4
                  rounded-xl
                  bg-white/5
                  border
                  border-white/10
                  text-white
                  placeholder:text-gray-500
                  outline-none
                  focus:border-lime-400
                  transition-colors
                  duration-300
                "
              />

              {/* EMAIL */}

              <motion.input
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.48,
                  ease,
                }}
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="
                  w-full
                  p-4
                  rounded-xl
                  bg-white/5
                  border
                  border-white/10
                  text-white
                  placeholder:text-gray-500
                  outline-none
                  focus:border-lime-400
                  transition-colors
                  duration-300
                "
              />

              {/* MESSAGE */}

              <motion.textarea
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.56,
                  ease,
                }}
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="
                  w-full
                  p-4
                  rounded-xl
                  bg-white/5
                  border
                  border-white/10
                  text-white
                  placeholder:text-gray-500
                  outline-none
                  focus:border-lime-400
                  transition-colors
                  duration-300
                  resize-none
                "
              />

              {/* BUTTON */}

              <motion.button
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.64,
                  ease,
                }}
                whileHover={
                  !sending
                    ? {
                        scale: 1.02,
                      }
                    : {}
                }
                whileTap={
                  !sending
                    ? {
                        scale: 0.98,
                      }
                    : {}
                }
                type="submit"
                disabled={sending}
                className="
                  w-full
                  bg-lime-400
                  text-black
                  font-semibold
                  py-4
                  rounded-xl
                  transition-all
                  duration-300
                  hover:shadow-[0_0_25px_rgba(163,230,53,0.25)]
                  disabled:opacity-60
                  disabled:cursor-not-allowed
                "
              >
                {sending ? "Sending..." : "Send Message"}
              </motion.button>

              {/* SUCCESS */}

              {success && (
                <motion.p
                  initial={{
                    opacity: 0,
                    y: 10,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  className="
                    text-green-400
                    text-sm
                    text-center
                    mt-2
                  "
                >
                  Message sent successfully!
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </>
  );
}

