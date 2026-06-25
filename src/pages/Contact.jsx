import { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import emailjs from "@emailjs/browser";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaWhatsapp,
  FaInstagram,
} from "react-icons/fa";
import { Helmet } from "react-helmet-async";

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
    const timer = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) return;

    setSending(true);

    emailjs.send(
        "service_7tvjkl8",
        "template_9ywue23",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "6kjG_bAhyYIesSn81"
      )
      .then(() => {
        setSuccess(true);
        setSending(false);
        setFormData({ name: "", email: "", message: "" });

        setTimeout(() => setSuccess(false), 3000);
      })
      .catch(() => setSending(false));
  };

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
  <title>Contact Us | FluxFame</title>
  <meta
    name="description"
    content="Contact FluxFame for AI automation, CRM automation, GoHighLevel systems and business workflow solutions."
  />
  <link rel="canonical" href="https://fluxfame.site/contact" />
</Helmet>

    <MainLayout>
      <div className="pt-28 pb-20 px-4 md:px-10 max-w-6xl mx-auto">

        {/* HERO */}
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-bold">
            Get In Touch
          </h1>

          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Let’s build your automation system, funnel, or website that brings real clients.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">

          {/* LEFT INFO */}
          <div className="space-y-6">

            {/* EMAIL  */}
            <a
              href="mailto:fluxfame@gmail.com"
              className="glass p-6 rounded-2xl border border-white/10 block hover:border-lime-400/40 transition"
            >
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-lime-400" />
                <h3 className="font-semibold">Email</h3>
              </div>
              <p className="text-gray-400 mt-2">
                fluxfame01@gmail.com
              </p>
            </a>

            {/* WHATSAPP */}
            <a
              href="https://wa.me/8801XXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="glass p-6 rounded-2xl border border-white/10 block hover:border-lime-400/40 transition"
            >
              <div className="flex items-center gap-3">
                <FaWhatsapp className="text-lime-400" />
                <h3 className="font-semibold">WhatsApp</h3>
              </div>
              <p className="text-gray-400 mt-2">
                Chat on WhatsApp
              </p>
            </a>

            {/* instagram */}
            <a
              href="https://www.instagram.com/fluxfame01"
              target="_blank"
              rel="noopener noreferrer"
              className="glass p-6 rounded-2xl border border-white/10 block
               hover:border-lime-400/40 transition"
            >
              <div className="flex items-center gap-3">
                <FaInstagram className="text-lime-400" />
                <h3 className="font-semibold">Instagram</h3>
              </div>
              <p className="text-gray-400 mt-2">
                Visit Instagram Page
              </p>
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/people/FluxFame/61590684362355/"
              target="_blank"
              rel="noopener noreferrer"
              className="glass p-6 rounded-2xl border border-white/10 block
               hover:border-lime-400/40 transition"
            >
              <div className="flex items-center gap-3">
                <FaFacebook className="text-lime-400" />
                <h3 className="font-semibold">Facebook</h3>
              </div>
              <p className="text-gray-400 mt-2">
                Visit Facebook Page
              </p>
            </a>


            {/* LOCATION */}
            <div className="glass p-6 rounded-2xl border border-white/10">
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-lime-400" />
                <h3 className="font-semibold">Location</h3>
              </div>
              <p className="text-gray-400 mt-2">
                USA • Worldwide Clients
              </p>
            </div>

          </div>

          {/* RIGHT FORM */}
          <div className="glass p-8 rounded-3xl border border-white/10">

            <h2 className="text-2xl font-semibold mb-6">
              Send Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-4 rounded-xl bg-white/5 border border-white/10 outline-none focus:border-lime-400"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-4 rounded-xl bg-white/5 border border-white/10 outline-none focus:border-lime-400"
              />

              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="w-full p-4 rounded-xl bg-white/5 border border-white/10 outline-none focus:border-lime-400"
              />

              <button
                type="submit"
                disabled={sending}
                className="w-full bg-lime-400 text-black font-semibold py-4 rounded-xl hover:scale-105 transition"
              >
                {sending ? "Sending..." : "Send Message"}
              </button>

              {success && (
                <p className="text-green-400 text-sm text-center mt-2">
                  Message sent successfully!
                </p>
              )}

            </form>
          </div>

        </div>
      </div>
    </MainLayout>
    </>
  );
}