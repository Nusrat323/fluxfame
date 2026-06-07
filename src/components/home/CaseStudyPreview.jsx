import {
    FaCheckCircle,
    
    FaCalendarCheck,
    FaStar,
    FaRedo,
  } from "react-icons/fa";
  import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
  
  export default function CaseStudyPreview() {
    return (
      <section className="relative py-24 overflow-hidden">
  
        {/* Background Glow */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-lime-400/10 blur-[150px] rounded-full" />
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-lime-400/10 blur-[150px] rounded-full" />
  
        <div className="container-custom px-3 sm:px-6 lg:px-0 relative z-10">
  
          {/* CASE STUDY CARD */}
  
          <div
               className="
               relative
               overflow-hidden
             
               rounded-[30px]
             
              bg-white/[0.06]
              backdrop-blur-[40px]
             
               border border-white/10
             
               shadow-[0_0_60px_rgba(217,255,47,.05)]
             
               grid
               lg:grid-cols-2
             
               min-h-[550px]
             "
          >
  
            {/* CENTER DIVIDER */}
  
            <div className="hidden lg:block absolute left-1/2 top-0 w-px h-full bg-white/10" />
  
            {/* TOP CENTER */}
<div
  className="
    absolute
    top-0
    left-1/2
    -translate-x-1/2

    w-40
    h-[1.5px]

    bg-gradient-to-r
    from-transparent
    via-lime-400/70
    to-transparent

    blur-[1px]
  "
/>

{/* BOTTOM CENTER */}
<div
  className="
    absolute
    bottom-0
    left-1/2
    -translate-x-1/2

    w-40
    h-[1.5px]

    bg-gradient-to-r
    from-transparent
    via-lime-400/70
    to-transparent

    blur-[1px]
  "
/>

{/* LEFT CENTER */}
<div
  className="
    absolute
    left-0
    top-1/2
    -translate-y-1/2

    w-[1.5px]
    h-40

    bg-gradient-to-b
    from-transparent
    via-lime-400/70
    to-transparent

    blur-[1px]
  "
/>

{/* RIGHT CENTER */}
<div
  className="
    absolute
    right-0
    top-1/2
    -translate-y-1/2

    w-[1.5px]
    h-40

    bg-gradient-to-b
    from-transparent
    via-lime-400/70
    to-transparent

    blur-[1px]
  "
/>

{/* SOFT TOP GLOW */}
<div
  className="
    absolute
    top-0
    left-1/2
    -translate-x-1/2

    w-56
    h-20

    bg-lime-400/8
    blur-[60px]

    pointer-events-none
  "
/>

{/* SOFT BOTTOM GLOW */}
<div
  className="
    absolute
    bottom-0
    left-1/2
    -translate-x-1/2

    w-56
    h-20

    bg-lime-400/8
    blur-[60px]

    pointer-events-none
  "
/>

{/* SOFT LEFT GLOW */}
<div
  className="
    absolute
    left-0
    top-1/2
    -translate-y-1/2

    w-20
    h-56

    bg-lime-400/6
    blur-[60px]

    pointer-events-none
  "
/>

{/* SOFT RIGHT GLOW */}
<div
  className="
    absolute
    right-0
    top-1/2
    -translate-y-1/2

    w-20
    h-56

    bg-lime-400/6
    blur-[60px]

    pointer-events-none
  "
/>


<div
  className="
    hidden
    lg:block

    absolute
    left-1/2
    top-0

    w-px
    h-full

    bg-white/5
  "
/>

{/* DIVIDER MIDDLE GLOW */}
<div
  className="
    hidden
    lg:block

    absolute
    left-1/2
    top-1/2

    -translate-x-1/2
    -translate-y-1/2

    w-[1.5px]
    h-40

    bg-gradient-to-b
    from-transparent
    via-lime-400/20
    to-transparent

    blur-[1px]
  "
/>

{/* DIVIDER SOFT GLOW */}
<div
  className="
    hidden
    lg:block

    absolute
    left-1/2
    top-1/2

    -translate-x-1/2
    -translate-y-1/2

    w-10
    h-48

    bg-lime-400/10

    blur-[50px]

    pointer-events-none
  "
/>
  
            {/* LEFT SIDE */}
  
            <div className="p-8 lg:p-12">
  
              {/* Badge */}
  
              <div
                className="
                  glass
                  inline-flex
                  items-center
  
                  px-4
                  py-2
  
                  rounded-full
  
                  text-lime-400
                  text-xs
  
                  mb-8
                "
              >
                ✦ CASE STUDY
              </div>
  
              {/* Heading */}
  
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight">
                Dental Clinic
                <br />
                <span className="gradient-text">
                  Automation
                </span>
              </h2>
  
              {/* Description */}
  
              <p className="text-gray-400 mt-6 text-base lg:text-lg leading-relaxed max-w-xl">
                We built a complete automation system for a
                dental clinic to increase bookings, reduce
                no-shows and improve patient communication.
              </p>
  
              {/* Features */}
  
              <div className="grid sm:grid-cols-2 gap-4 mt-10">
  
                <div className="flex items-center gap-3">
                  <FaCheckCircle className="text-lime-400" />
                  <span>AI Receptionist & Chatbot</span>
                </div>
  
                <div className="flex items-center gap-3">
                  <FaCheckCircle className="text-lime-400" />
                  <span>Review Automation</span>
                </div>
  
                <div className="flex items-center gap-3">
                  <FaCheckCircle className="text-lime-400" />
                  <span>Appointment Workflow</span>
                </div>
  
                <div className="flex items-center gap-3">
                  <FaCheckCircle className="text-lime-400" />
                  <span>Reactivation Campaign</span>
                </div>
  
                <div className="flex items-center gap-3">
                  <FaCheckCircle className="text-lime-400" />
                  <span>No Show Recovery</span>
                </div>
  
                <div className="flex items-center gap-3">
                  <FaCheckCircle className="text-lime-400" />
                  <span>CRM Automation</span>
                </div>
  
              </div>
  
              {/* Button */}
             
              <Link
  to="/case-studies"
  className="
    mt-10
    w-full
    sm:w-fit
    bg-lime-400
    text-black
    font-semibold
    px-8
    py-4
    rounded-2xl
    flex
    items-center
    justify-center
    gap-3
    hover:scale-105
    transition-all
  "
>
  View Full Case Study
  <FaArrowRight />
</Link>
            </div>
  
            {/* RIGHT SIDE */}
  
            <div className="p-8 lg:p-10">
  
              {/* TOP STATS */}
  
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
  
              <div className="
relative
overflow-hidden
glass
rounded-3xl
p-5
">

  <div className="
    absolute
    bottom-0
    left-[5%]
    w-[90%]
    h-[1.5px]
    bg-gradient-to-r
    from-transparent
    via-lime-400/80
    to-transparent
  "/>

  <p className="text-gray-400 text-sm">
    Total Appointments
  </p>

  <h3 className="text-4xl font-bold mt-2">
    312
  </h3>

  <span className="text-lime-400">
    +42.5%
  </span>

</div>
  
<div className="
relative
overflow-hidden
glass
rounded-3xl
p-5
">

  <div className="
    absolute
    bottom-0
    left-[10%]
    w-[80%]
    h-[1.5px]
    bg-gradient-to-r
    from-transparent
    via-lime-400/70
    to-transparent
  "/>

  <p className="text-gray-400 text-sm">
    New Patients
  </p>

  <h3 className="text-4xl font-bold mt-2">
    128
  </h3>

  <span className="text-lime-400">
    +28.1%
  </span>

</div> 


                <div className="glass rounded-3xl p-5">
                  <p className="text-gray-400 text-sm">
                    No Show Rate
                  </p>
  
                  <h3 className="text-4xl font-bold mt-2">
                    8%
                  </h3>
  
                  <span className="text-lime-400">
                    +35.4%
                  </span>
                </div>
  
              </div>
  
              
  
              {/* CHART + WORKFLOWS */}

<div className="grid lg:grid-cols-[1.5fr_.9fr] gap-5 mt-5">

{/* CHART */}
<div
  className="
    relative
    overflow-hidden
    rounded-3xl
    p-5
    bg-white/[0.05]
    backdrop-blur-[20px]
    border border-white/[0.05]
    shadow-[inset_0_1px_0_rgba(255,255,255,.05)]
  "
>
  {/* LEFT BG GLOW */}
  <div
    className="
      absolute
      top-0
      left-0
      w-52
      h-full
      bg-lime-400/5
      blur-[90px]
      pointer-events-none
    "
  />

  {/* TOP RIGHT BORDER GLOW */}
  <div
    className="
      absolute
      top-0
      right-8
      w-30
      h-[1.5px]
      bg-gradient-to-l
      from-lime-400/70
      to-transparent
      
    "
  />

  <h4 className="mb-5 font-medium">
    Appointments Overview
  </h4>

  <svg
    viewBox="0 0 300 140"
    className="w-full h-[220px]"
  >
    <defs>
      <linearGradient
        id="chartFill"
        x1="0"
        y1="0"
        x2="0"
        y2="1"
      >
        <stop
          offset="0%"
          stopColor="#d9ff2f"
          stopOpacity="0.30"
        />

        <stop
          offset="100%"
          stopColor="#d9ff2f"
          stopOpacity="0"
        />
      </linearGradient>

      <filter
        id="chartGlow"
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

    {/* GRID */}
    <line
      x1="25"
      y1="20"
      x2="300"
      y2="20"
      stroke="rgba(255,255,255,.08)"
      strokeDasharray="4 4"
    />

    <line
      x1="25"
      y1="50"
      x2="300"
      y2="50"
      stroke="rgba(255,255,255,.08)"
      strokeDasharray="4 4"
    />

    <line
      x1="25"
      y1="80"
      x2="300"
      y2="80"
      stroke="rgba(255,255,255,.08)"
      strokeDasharray="4 4"
    />

    <line
      x1="25"
      y1="110"
      x2="300"
      y2="110"
      stroke="rgba(255,255,255,.08)"
      strokeDasharray="4 4"
    />

    {/* Y AXIS NUMBERS */}
    <text
      x="0"
      y="22"
      fill="#6b7280"
      fontSize="10"
    >
      100
    </text>

    <text
      x="5"
      y="52"
      fill="#6b7280"
      fontSize="10"
    >
      75
    </text>

    <text
      x="5"
      y="82"
      fill="#6b7280"
      fontSize="10"
    >
      50
    </text>

    <text
      x="5"
      y="112"
      fill="#6b7280"
      fontSize="10"
    >
      25
    </text>

    {/* AREA FILL */}
    <path
      d="
      M25 100
      C50 85,70 40,95 60
      C125 90,150 25,180 45
      C210 65,235 15,265 25
      C280 30,292 15,300 10
      L300 140
      L25 140
      Z
      "
      fill="url(#chartFill)"
    />

    {/* GLOW LINE */}
    <path
      d="
      M25 100
      C50 85,70 40,95 60
      C125 90,150 25,180 45
      C210 65,235 15,265 25
      C280 30,292 15,300 10
      "
      fill="none"
      stroke="#d9ff2f"
      strokeWidth="10"
      opacity=".12"
      strokeLinecap="round"
    />

    {/* MAIN LINE */}
    <path
      d="
      M25 100
      C50 85,70 40,95 60
      C125 90,150 25,180 45
      C210 65,235 15,265 25
      C280 30,292 15,300 10
      "
      fill="none"
      stroke="#d9ff2f"
      strokeWidth="4"
      filter="url(#chartGlow)"
      strokeLinecap="round"
    />

    {/* DATA POINTS */}
    <circle cx="25" cy="100" r="4" fill="#d9ff2f" />
    <circle cx="95" cy="60" r="4" fill="#d9ff2f" />
    <circle cx="180" cy="45" r="4" fill="#d9ff2f" />
    <circle cx="265" cy="25" r="4" fill="#d9ff2f" />

    {/* LAST POINT */}
    <circle
      cx="300"
      cy="10"
      r="12"
      fill="#d9ff2f"
      opacity=".15"
    />

    <circle
      cx="300"
      cy="10"
      r="5"
      fill="#d9ff2f"
    />
  </svg>

  {/* X AXIS */}
  <div
    className="
      flex
      justify-between
      text-xs
      text-gray-500
      mt-1
      pl-6
    "
  >
    <span>1 May</span>
    <span>8 May</span>
    <span>15 May</span>
    <span>22 May</span>
    <span>29 May</span>
  </div>
</div>






{/* WORKFLOWS CARD */}
<div
  className="
    relative
    overflow-hidden
    glass
    rounded-3xl
    p-3
  "
>

  {/* LEFT BORDER GLOW */}
  <div
    className="
      absolute
      top-0
      left-0
      w-[1.5px]
      h-40
      bg-gradient-to-b
      from-lime-400/50
      to-transparent
    "
  />

  {/* TOP BORDER GLOW */}
  <div
    className="
      absolute
      top-0
      left-0
      w-40
      h-[1.5px]
      bg-gradient-to-r
      from-lime-300/50
      to-transparent
    "
  />

  <h4 className="mb-3 mt-2 font-medium text-center">
    Top Performing Workflows
  </h4>

  <div className="space-y-3">

    {/* Reminder */}
    <div
      className="
        bg-white/[0.04]
        border border-white/[0.05]
        rounded-2xl
        p-3
      "
    >
      <div className="flex justify-between">

        <div className="flex items-center gap-1">
          <FaCalendarCheck className="text-lime-400" />
          Reminder
        </div>

        <span className="text-lime-400">
          +160
        </span>

      </div>

      <div
        className="
          mt-3
          h-px
          bg-gradient-to-r
          from-lime-400/40
          to-transparent
        "
      />
    </div>

    {/* Reviews */}
    <div
      className="
        bg-white/[0.04]
        border border-white/[0.05]
        rounded-2xl
        p-3
      "
    >
      <div className="flex justify-between">

        <div className="flex items-center gap-1">
          <FaStar className="text-lime-400" />
          Reviews
        </div>

        <span className="text-lime-400">
          +86
        </span>

      </div>

      <div
        className="
          mt-3
          h-px
          bg-gradient-to-r
          from-lime-400/40
          to-transparent
        "
      />
    </div>

    {/* Reactivation */}
    <div
      className="
        bg-white/[0.04]
        border border-white/[0.05]
        rounded-2xl
        p-3
      "
    >
      <div className="flex justify-between">

        <div className="flex items-center gap-1">
          <FaRedo className="text-lime-400" />
          Reactivation
        </div>

        <span className="text-lime-400">
          +71
        </span>

      </div>

      <div
        className="
          mt-3
          h-px
          bg-gradient-to-r
          from-lime-400/40
          to-transparent
        "
      />
    </div>

  </div>
</div>

</div>
              </div>
  
            </div>
  
          </div>
  
        
  
      </section>
    );
  }