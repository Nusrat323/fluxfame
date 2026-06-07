import { FaChartBar, FaRobot } from "react-icons/fa";
import Button from "../common/Button";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

import {
  FaGoogle,
  FaWhatsapp,
  FaStripe,
  
} from "react-icons/fa";

import {
  SiOpenai,
  SiMeta,
} from "react-icons/si";

export default function Hero() {
  return (
    <section className="relative z-10 min-h-screen flex items-center  pt-20 md:pt-32 overflow-hidden">

      {/* HERO BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt="hero background"
          className="w-full h-full object-cover opacity-60"
        />

        {/* overlay */}
        <div className="absolute inset-0 bg-black/25" />
      </div>

      {/* Background glows */}
      <div className="absolute top-0 right-0 w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-lime-400/20 blur-[120px] md:blur-[180px] rounded-full" />

      <div className="absolute bottom-0 left-0 w-[180px] md:w-[350px] h-[180px] md:h-[350px] bg-green-500/10 blur-[100px] md:blur-[160px] rounded-full" />

      <div className="container-custom px-4 relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">

          {/* LEFT */}
          <div className="text-center lg:text-left">

            <div className="glass inline-flex items-center px-4 py-2 rounded-full
             text-lime-400 text-xs sm:text-sm mb-6 lg:mt-2 mt-8">
              ✦ AI AUTOMATION AGENCY
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-black leading-tight">
              AI Systems That
              <br />
              Automate
              <span className="gradient-text block">
                Growth & Operations
              </span>
            </h1>

            <p className="text-gray-400 mt-6 text-sm sm:text-lg max-w-xl mx-auto lg:mx-0">
              We build AI assistants, automation systems,
              landing pages and CRM workflows that help businesses grow.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-8 justify-center lg:justify-start">

  {/* Book Strategy Call → Contact Page */}
  <Link to="/contact">
    <Button>
      Book Free Strategy Call
    </Button>
  </Link>

  {/* View Case Studies → Case Studies Page */}
  <Link to="/case-studies">
    <Button variant="secondary">
      View Case Studies
    </Button>
  </Link>

</div>

            <div className="mt-10 flex items-center justify-center lg:justify-start">

  <div className="glass px-5 py-3 rounded-2xl">

    <div className="flex items-center gap-1">

      <FaStar className="text-yellow-300" />
      <FaStar className="text-yellow-300" />
      <FaStar className="text-yellow-300" />
      <FaStar className="text-yellow-300" />
      <FaStar className="text-yellow-300" />

      <span className="ml-2 font-semibold text-white">
        5.0
      </span>

    </div>

    <p className="text-gray-400 text-sm mt-1">
      Trusted by Growing Businesses
    </p>

  </div>

</div>

          </div>

          
            {/* RIGHT */}
<div className="relative w-full max-w-[760px] mx-auto">

<div className="glass-card rounded-[36px] p-6 lg:p-8 border border-lime-200
 shadow-[0_0_60px_rgba(217,255,47,.08)]">

  <div className="grid md:grid-cols-2 gap-5">

    {/* LEFT SIDE */}
    <div>

      {/* APPOINTMENTS */}
<div className="glass relative overflow-hidden rounded-3xl p-6 min-h-[150px]">

{/* TOP LEFT GLOW */}
<div className="absolute -top-10 -left-10 w-32 h-32 bg-lime-400/15 blur-[70px] rounded-full" />

{/* EXTRA SMALL GLOW */}
<div className="absolute top-0 left-0 w-20 h-20 bg-lime-400/10 blur-2xl rounded-full" />

<div className="relative z-10 flex items-center gap-5">

  {/* PROGRESS CIRCLE */}
  <div className="relative w-20 h-20 flex items-center justify-center shrink-0">

    {/* Circle Glow */}
    <div className="absolute inset-0 rounded-full bg-lime-400/10 blur-xl" />

    <svg
      className="absolute inset-0 -rotate-90"
      viewBox="0 0 100 100"
    >
      {/* Background Ring */}
      <circle
        cx="50"
        cy="50"
        r="42"
        stroke="rgba(255,255,255,.08)"
        strokeWidth="8"
        fill="none"
      />

      {/* Progress Ring */}
      <circle
        cx="50"
        cy="50"
        r="42"
        stroke="#d9ff2f"
        strokeWidth="8"
        fill="none"
        strokeLinecap="round"
        strokeDasharray="264"
        strokeDashoffset="66"
        style={{
          filter: "drop-shadow(0 0 10px rgba(217,255,47,.5))",
        }}
      />
    </svg>

    {/* Center */}
    <div className="w-12 h-12 rounded-full bg-[#111827] border border-white/5" />
  </div>

  {/* TEXT */}
  <div>

    <p className="text-gray-400 text-sm">
      Appointments
    </p>

    <h3 className="text-5xl font-bold mt-1">
      248
    </h3>

    <span className="text-lime-400 text-sm font-medium">
      +37.5%
    </span>

  </div>

</div>

</div>

    
      {/* CHART */}
<div
  className="
    rounded-3xl
    p-5
    mt-5
    h-[210px]
    relative
    overflow-hidden
    backdrop-blur-3xl
    bg-white/[0.03]
    border border-white/[0.04]
    shadow-[inset_0_1px_0_rgba(255,255,255,.04)]
  "
>

  {/* Growth Badge */}
  <div className="absolute top-4 right-4 text-lime-400 text-xs font-semibold">
    +24%
  </div>

  {/* Labels */}
  <div className="absolute left-4 top-4 text-[10px] text-gray-500">
    100
  </div>

  <div className="absolute left-4 top-[85px] text-[10px] text-gray-500">
    50
  </div>

  <div className="absolute left-4 bottom-4 text-[10px] text-gray-500">
    0
  </div>

  <svg
    viewBox="0 0 300 120"
    className="w-full h-full"
  >

    <defs>

      <linearGradient
        id="chartGradient"
        x1="0"
        y1="0"
        x2="0"
        y2="1"
      >
        <stop
          offset="0%"
          stopColor="#d9ff2f"
          stopOpacity="0.35"
        />

        <stop
          offset="100%"
          stopColor="#d9ff2f"
          stopOpacity="0"
        />
      </linearGradient>

      <filter
        id="glow"
        x="-50%"
        y="-50%"
        width="200%"
        height="200%"
      >
        <feGaussianBlur
          stdDeviation="4"
          result="blur"
        />

        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>

    </defs>

    {/* GRID LINES */}

    <line
      x1="0"
      y1="20"
      x2="300"
      y2="20"
      stroke="rgba(255,255,255,.08)"
      strokeDasharray="4 4"
    />

    <line
      x1="0"
      y1="60"
      x2="300"
      y2="60"
      stroke="rgba(255,255,255,.08)"
      strokeDasharray="4 4"
    />

    <line
      x1="0"
      y1="100"
      x2="300"
      y2="100"
      stroke="rgba(255,255,255,.08)"
      strokeDasharray="4 4"
    />

    {/* AREA FILL */}

    <path
      d="
      M0 105
      C25 105,35 70,60 75
      C90 82,105 35,135 42
      C165 50,180 15,215 22
      C245 28,270 8,300 10
      L300 120
      L0 120
      Z
      "
      fill="url(#chartGradient)"
    />

    {/* SOFT GLOW */}

    <path
      d="
      M0 105
      C25 105,35 70,60 75
      C90 82,105 35,135 42
      C165 50,180 15,215 22
      C245 28,270 8,300 10
      "
      fill="none"
      stroke="#d9ff2f"
      strokeWidth="10"
      opacity="0.15"
      strokeLinecap="round"
    />

    {/* MAIN LINE */}

    <path
      d="
      M0 105
      C25 105,35 70,60 75
      C90 82,105 35,135 42
      C165 50,180 15,215 22
      C245 28,270 8,300 10
      "
      fill="none"
      stroke="#d9ff2f"
      strokeWidth="4"
      filter="url(#glow)"
      strokeLinecap="round"
    />

    {/* DATA POINTS */}

    <circle cx="60" cy="75" r="3" fill="#d9ff2f" />
    <circle cx="135" cy="42" r="3" fill="#d9ff2f" />
    <circle cx="215" cy="22" r="3" fill="#d9ff2f" />

    {/* LAST POINT */}

    <circle
      cx="300"
      cy="10"
      r="12"
      fill="#d9ff2f"
      opacity="0.15"
    />

    <circle
      cx="300"
      cy="10"
      r="5"
      fill="#d9ff2f"
    />

  </svg>

</div>

    </div>

    {/* RIGHT SIDE */}
    <div className="glass rounded-3xl p-6 min-h-[430px] flex flex-col">

      <div className="flex justify-between items-center mb-6">

      <div>
  <h3 className="font-semibold text-lg">
    AI Assistant
  </h3>

  <div
    className="
      mt-2
      w-12
      h-[2px]
      rounded-full
      bg-gradient-to-r
      from-lime-400
      to-transparent
    "
  />
</div>

        <span className="text-lime-400 text-sm">
          Online
        </span>

      </div>

      <div className="space-y-4 text-sm">

        <div className="glass rounded-2xl p-4 max-w-[85%]">
          👋 Hi! How can I help you today?
        </div>

        <div className="bg-lime-400 text-black rounded-2xl p-4 ml-auto max-w-[85%]">
          I want to book an appointment
        </div>

        <div className="glass rounded-2xl p-4 max-w-[85%]">
          Sure! What date works best for you?
        </div>

        <div className="glass rounded-full px-4 py-2 w-fit">
          • • •
        </div>

      </div>

      

    </div>

  </div>

</div>

{/* FLOATING SUPPORT CARD */}
<div
  className="
    absolute
    lg:left-[-30px]
    left-[10px]
    lg:bottom-[25px]
    bottom-[15px]
    glass-card
    rounded-2xl
    px-4
    py-2
    mt-2
    flex
    items-center
    gap-4
    border
    border-lime-400/20
    z-20
  "
>

  <div className="w-12 h-7 flex items-center justify-center text-2xl">
    <FaRobot className="text-lime-400 "/>
  </div>

  <div>
    <h4 className="font-semibold">
      24/7 AI Support
    </h4>

    <p className="text-sm text-gray-400">
      Never miss a lead again
    </p>
  </div>

</div>

</div>
</div>



     {/* TECHNOLOGY BAR */}

     
     <div className="mt-16 lg:mt-20 pb-14">

  <div
    className="
      relative
      overflow-hidden

      rounded-[18px]

      px-5
      py-6

      bg-white/[0.08]
      backdrop-blur-[30px]

      border border-white/15

      shadow-[0_0_30px_rgba(217,255,47,.06)]

      grid
      grid-cols-2
      md:grid-cols-3
      lg:flex

      justify-items-center
      lg:justify-center

      gap-y-6
      gap-x-4
      lg:gap-x-14
    "
  >

    
    {/* TOP RIGHT CORNER glow */}
    

    {/* Top Line */}
    <div
      className="
        absolute
        top-0
        right-0
        w-32
        h-[2px]
        bg-lime-400/90
        blur-[1px]
      "
    />

    {/* Right Line */}
    <div
      className="
        absolute
        top-0
        right-0
        w-[2px]
        h-32
        bg-lime-400/90
        blur-[1px]
      "
    />

    {/* Corner Glow */}
    <div
      className="
        absolute
        -top-12
        -right-12
        w-40
        h-40
        rounded-full
        bg-lime-400/25
        blur-[90px]
        pointer-events-none
      "
    />

    
    {/* BOTTOM LEFT CORNER TRIANGLE */}
   

    {/* Left Line */}
    <div
      className="
        absolute
        bottom-0
        left-0
        w-[2px]
        h-32
        bg-lime-400/90
        blur-[1px]
      "
    />

    {/* Bottom Line */}
    <div
      className="
        absolute
        bottom-0
        left-0
        w-32
        h-[2px]
        bg-lime-400/90
        blur-[1px]
      "
    />

    {/* Corner Glow */}
    <div
      className="
        absolute
        -bottom-12
        -left-12
        w-40
        h-40
        rounded-full
        bg-lime-400/25
        blur-[90px]
        pointer-events-none
      "
    />

    {/* GoHighLevel */}
    <div className="flex items-center gap-3 relative z-10">
      <FaChartBar className="text-xl text-lime-400" />
      <span className="font-medium text-white">
        GoHighLevel
      </span>
    </div>

    {/* OpenAI */}
    <div className="flex items-center gap-3 relative z-10">
      <SiOpenai className="text-xl text-lime-400" />
      <span className="font-medium text-white">
        OpenAI
      </span>
    </div>

    {/* Google */}
    <div className="flex items-center gap-3 relative z-10">
      <FaGoogle className="text-xl text-lime-400" />
      <span className="font-medium text-white">
        Google
      </span>
    </div>

    {/* Meta */}
    <div className="flex items-center gap-3 relative z-10">
      <SiMeta className="text-xl text-lime-400" />
      <span className="font-medium text-white">
        Meta
      </span>
    </div>

    {/* WhatsApp */}
    <div className="flex items-center gap-3 relative z-10">
      <FaWhatsapp className="text-xl text-lime-400" />
      <span className="font-medium text-white">
        WhatsApp
      </span>
    </div>

    {/* Stripe */}
    <div className="flex items-center gap-3 relative z-10">
      <FaStripe className="text-xl text-lime-400" />
      <span className="font-medium text-white">
        Stripe
      </span>
    </div>

  </div>

</div>


      </div>
    </section>
  );
}