import {
  FaArrowRight,
  FaEnvelope,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaInstagram,
} from "react-icons/fa";

import {
  FaCcVisa,
  FaCcMastercard,
  FaCcAmex,
  FaPaypal,
  FaGooglePay,
  FaCreditCard,
} from "react-icons/fa";

import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();

  const goToSection = (id) => {
    navigate("/");

    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
      });
    }, 100);
  };

  return (
    <footer className="relative overflow-hidden pt-24 pb-8">

     
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-20 bottom-0 w-72 h-72 bg-lime-400/10 blur-[150px] rounded-full" />
        <div className="absolute right-20 top-0 w-72 h-72 bg-lime-400/10 blur-[150px] rounded-full" />
      </div>

      <div className="container-custom relative z-10">

        {/* TOP LINE */}
        <div className="flex justify-center mb-14">
          <div className="w-[90%] h-[1.5px] bg-gradient-to-r from-transparent via-lime-400/80 to-transparent" />
        </div>

        {/* FOOTER GRID */}
        <div className="grid lg:grid-cols-3 gap-12">

            {/* BRAND */}
<div className="flex flex-col items-center text-center">
  <img
    src="/favicon.ico"
    alt="FluxFame Logo"
    className="w-9 h-9 mb-1 object-contain"
  />

  <h3 className="text-3xl font-black">
    Flux<span className="text-lime-400">Fame</span>
  </h3>

  <p className="text-gray-300 text-sm leading-relaxed mt-5 max-w-md">
    We help businesses automate lead generation,
    appointment booking and customer communication
    using AI-powered systems and GoHighLevel.
  </p>
</div>

          {/* NAVIGATION */}
          <div>
            <h4 className="font-semibold mb-5 text-white">
              Navigation
            </h4>

            <div className="space-y-3 text-gray-300 text-sm">

              <button onClick={() => goToSection("services")} className="block hover:text-lime-400 transition text-left">
                Services
              </button>

              <a href="/case-studies" className="block hover:text-lime-400 transition">
                Case Study
              </a>

              <button onClick={() => goToSection("process")} className="block hover:text-lime-400 transition text-left">
                Process
              </button>

              

              <button onClick={() => goToSection("faq")} className="block hover:text-lime-400 transition text-left">
                FAQ
              </button>

              <a href="/contact" className="block hover:text-lime-400 transition">
                Contact
              </a>

            </div>
          </div>

          {/* CONTACT */}

<div>

<h4 className="font-semibold mb-5 text-white">
  Let's Talk
</h4>

<div className="space-y-3 text-sm">

  {/* EMAIL */}

  <a
    href="mailto:fluxfame01@gmail.com"
    className="
      flex
      items-center
      gap-3

      text-gray-300
      hover:text-lime-400

      transition
    "
  >
    <FaEnvelope className="text-lime-400 shrink-0" />
    <span>fluxfame01@gmail.com</span>
  </a>

  {/* WHATSAPP */}

  <a
    href="https://wa.me/8801605950629?text=Hi%20FluxFame,%20I'd%20like%20a%20free%20consultation%20for%20my%20business."
    target="_blank"
    rel="noopener noreferrer"
    className="
      flex
      items-center
      gap-3

      text-gray-300
      hover:text-lime-400

      transition
    "
  >
    <FaWhatsapp className="text-lime-400 shrink-0" />
    <span>Chat on WhatsApp</span>
  </a>

  {/* INSTAGRAM */}

  <a
    href="https://www.instagram.com/fluxfame01"
    target="_blank"
    rel="noopener noreferrer"
    className="
      flex
      items-center
      gap-3

      text-gray-300
      hover:text-lime-400

      transition
    "
  >
    <FaInstagram className="text-lime-400 shrink-0" />
    <span>Follow on Instagram</span>
  </a>

  {/* LOCATION */}

  <div className="flex items-center gap-3 text-gray-300">
    <FaMapMarkerAlt className="text-lime-400 shrink-0" />
    <span>USA • Serving Clients Worldwide</span>
  </div>

</div>

{/* CONTACT BUTTON */}

<a
  href="/contact"
  className="
    mt-6

    inline-flex
    items-center
    gap-2

    bg-lime-400
    text-black

    font-semibold

    px-5
    py-3

    rounded-xl

    hover:scale-105
    transition-all
  "
>
  Contact Us
  <FaArrowRight />
</a>

</div>
        </div>

        {/* Payments  */}
        
        <div className="mt-14 flex justify-center">
          <div className="text-center">

            <p className="text-xs text-gray-400 mb-4">
              We Accept Secure Payments
            </p>

            <div className="flex flex-wrap justify-center items-center gap-4 text-gray-300">

              <FaCcVisa className="text-2xl hover:text-lime-400 transition" />
              <FaCcMastercard className="text-2xl hover:text-lime-400 transition" />
              <FaCcAmex className="text-2xl hover:text-lime-400 transition" />
              <FaPaypal className="text-2xl hover:text-lime-400 transition" />
              <FaGooglePay className="text-2xl hover:text-lime-400 transition" />
              <FaCreditCard className="text-2xl hover:text-lime-400 transition" />

            </div>

            <p className="text-[11px] text-gray-500 mt-3">
              Credit/Debit Cards • PayPal • Digital Wallets Supported
            </p>

          </div>
        </div>

        {/* DIVIDER */}
        <div className="mt-10 mb-6 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        {/* COPYRIGHT */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
          <p>© {new Date().getFullYear()} FluxFame. All Rights Reserved.</p>

          <div className="flex gap-6">
            <a href="/privacy" className="hover:text-lime-400 transition">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-lime-400 transition">
              Terms & Conditions
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}