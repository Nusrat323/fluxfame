import { motion } from "framer-motion";

const technologies = [
  {
    name: "GoHighLevel",
    icon: <GoHighLevelIcon />,
  },
  {
    name: "OpenAI",
    icon: <OpenAIIcon />,
  },
  {
    name: "Google",
    icon: <GoogleIcon />,
  },
  {
    name: "Meta",
    icon: <MetaIcon />,
  },
  {
    name: "Instagram",
    icon: <InstagramIcon />,
  },
  {
    name: "WhatsApp",
    icon: <WhatsAppIcon />,
  },
  {
    name: "React",
    icon: <ReactIcon />,
  },
  {
    name: "Tailwind CSS",
    icon: <TailwindIcon />,
  },
];

function TechItem({ technology }) {
  return (
    <motion.div
      className="
        group
        relative
        flex
        shrink-0
        items-center
        gap-2.5
        py-1
        cursor-default
      "
      whileHover={{
        y: -2,
        scale: 1.025,
      }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 25,
      }}
    >
      {/* Icon */}
      <div
        className="
          relative
          flex
          h-6
          w-6
          shrink-0
          items-center
          justify-center
          transition-all
          duration-300
          group-hover:scale-110
        "
      >
        {technology.icon}

        
        <span
          className="
            pointer-events-none
            absolute
            inset-0
            rounded-full
            bg-lime-400/10
            opacity-0
            blur-md
            transition-opacity
            duration-300
            group-hover:opacity-100
          "
        />
      </div>

      {/* Name */}
      <span
        className="
          relative
          whitespace-nowrap
          text-[10px]
          font-medium
          tracking-[-0.01em]
          text-white/48
          transition-all
          duration-300
          group-hover:text-white/90
          sm:text-[11px]
        "
      >
        {technology.name}
      </span>
      <span
        className="
          relative
          ml-2
          h-[3px]
          w-[3px]
          shrink-0
          rounded-full
          bg-lime-300
          opacity-70
          shadow-[0_0_5px_rgba(163,230,53,0.8),0_0_12px_rgba(163,230,53,0.35)]
          transition-all
          duration-300
          group-hover:scale-[1.8]
          group-hover:opacity-100
          group-hover:shadow-[0_0_6px_rgba(163,230,53,1),0_0_16px_rgba(163,230,53,0.65)]
        "
      />
      <motion.span
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          h-px
          w-8
          bg-gradient-to-r
          from-transparent
          via-lime-300/50
          to-transparent
          opacity-0
          group-hover:opacity-100
        "
        animate={{
          x: ["-20px", "70px"],
          opacity: [0, 0.7, 0],
        }}
        transition={{
          duration: 1.6,
          repeat: Infinity,
          repeatDelay: 1.5,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  );
}

export default function TechStackMarquee() {
  const items = [
    ...technologies,
    ...technologies,
    ...technologies,
  ];

  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        py-2
      "
    >

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-16
          w-[45%]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-lime-400/[0.025]
          blur-[55px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-px
          w-[55%]
          -translate-x-1/2
          -translate-y-1/2
          bg-gradient-to-r
          from-transparent
          via-lime-300/[0.045]
          to-transparent
        "
      />
      <div
        className="
          pointer-events-none
          absolute
          inset-y-0
          left-0
          z-20
          w-16
          bg-gradient-to-r
          from-[#080808]
          via-[#080808]/85
          to-transparent
          sm:w-28
        "
      />


      <div
        className="
          pointer-events-none
          absolute
          inset-y-0
          right-0
          z-20
          w-16
          bg-gradient-to-l
          from-[#080808]
          via-[#080808]/85
          to-transparent
          sm:w-28
        "
      />
      <motion.div
        className="
          relative
          z-10
          flex
          w-max
          items-center
          gap-7
          sm:gap-9
        "
        animate={{
          x: ["0%", "-33.3333%"],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
        }}
      >
        {items.map((technology, index) => (
          <TechItem
            key={`${technology.name}-${index}`}
            technology={technology}
          />
        ))}
      </motion.div>
    </section>
  );
}

function GoHighLevelIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="relative z-10 h-[19px] w-[19px]"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient
          id="ghlGradient"
          x1="3"
          y1="20"
          x2="21"
          y2="5"
        >
          <stop offset="0%" stopColor="#00C48C" />
          <stop offset="100%" stopColor="#42F5BD" />
        </linearGradient>
      </defs>

      <path
        d="M4 17.5 9 12.5l3.2 3.2L20 7.9"
        stroke="url(#ghlGradient)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M15.8 7.9H20v4.2"
        stroke="url(#ghlGradient)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <circle
        cx="4"
        cy="17.5"
        r="1.3"
        fill="#00C48C"
      />

      <circle
        cx="9"
        cy="12.5"
        r="1.3"
        fill="#12D9A0"
      />

      <circle
        cx="12.2"
        cy="15.7"
        r="1.3"
        fill="#42F5BD"
      />
    </svg>
  );
}

function OpenAIIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="relative z-10 h-[20px] w-[20px]"
      fill="none"
      aria-hidden="true"
    >
      
      <path
        d="
          M19.45 9.4
          a4.25 4.25 0 0 0-4.02-3.92
          a4.25 4.25 0 0 0-7.35 2.03
          a4.25 4.25 0 0 0-3.06 6.75
          a4.25 4.25 0 0 0 4.34 5.05
          a4.25 4.25 0 0 0 6.87-2.02
          a4.25 4.25 0 0 0 6.1-4.1
          a4.25 4.25 0 0 0-2.88-3.79
        "
        stroke="#FFFFFF"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="
          M8.08 7.5
          12 9.76
          15.92 7.5

          M8.08 16.5
          12 14.24
          15.92 16.5

          M6.05 10.12
          v3.76

          M17.95 10.12
          v3.76

          M6.05 13.88
          12 17.3

          M17.95 10.12
          12 6.7
        "
        stroke="#FFFFFF"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function GoogleIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="relative z-10 h-[19px] w-[19px]"
      aria-hidden="true"
    >
      <path
        d="
          M21.7 12.25
          c0-.7-.06-1.37-.18-2.02H12
          v3.83h5.43
          a4.64 4.64 0 0 1-2.02 3.05
          v2.5h3.27
          c1.91-1.76 3.02-4.35 3.02-7.36Z
        "
        fill="#4285F4"
      />

      <path
        d="
          M12 22
          c2.73 0 5.02-.9 6.68-2.39
          l-3.27-2.5
          c-.91.61-2.07.97-3.41.97
          -2.63 0-4.86-1.78-5.66-4.17H2.96
          v2.58A10.08 10.08 0 0 0 12 22Z
        "
        fill="#34A853"
      />

      <path
        d="
          M6.34 13.91
          a6.07 6.07 0 0 1 0-3.82
          V7.51H2.96
          a10.01 10.01 0 0 0 0 8.98
          l3.38-2.58Z
        "
        fill="#FBBC05"
      />

      <path
        d="
          M12 5.92
          c1.49 0 2.83.51 3.88 1.51
          l2.91-2.91
          C17.01 2.92 14.72 2 12 2
          a10.08 10.08 0 0 0-9.04 5.51
          l3.38 2.58
          C7.14 7.7 9.37 5.92 12 5.92Z
        "
        fill="#EA4335"
      />
    </svg>
  );
}

function MetaIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="relative z-10 h-[20px] w-[20px]"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient
          id="metaGradient"
          x1="3"
          y1="18"
          x2="21"
          y2="6"
        >
          <stop offset="0%" stopColor="#0866FF" />
          <stop offset="100%" stopColor="#5B8FFF" />
        </linearGradient>
      </defs>

      <path
        d="
          M3.4 15.55
          c0-3.95 1.65-7.65 4.35-7.65
          2.3 0 3.55 2.7 4.75 5.15
          1.08 2.2 2.13 4.55 4.02 4.55
          2.52 0 4.08-3.25 4.08-6.85
          0-3.2-1.32-5.45-3.55-5.45
          -2.18 0-3.78 2.35-5.1 4.75
          -1.3 2.35-2.5 4.85-4.42 4.85
          -2.25 0-4.13-2.1-4.13-5.1
        "
        stroke="url(#metaGradient)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="relative z-10 h-[19px] w-[19px]"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient
          id="instagramGradient"
          x1="3"
          y1="21"
          x2="21"
          y2="3"
        >
          <stop offset="0%" stopColor="#FFDC80" />
          <stop offset="24%" stopColor="#F77737" />
          <stop offset="52%" stopColor="#E1306C" />
          <stop offset="76%" stopColor="#C13584" />
          <stop offset="100%" stopColor="#833AB4" />
        </linearGradient>
      </defs>

      <rect
        x="3.5"
        y="3.5"
        width="17"
        height="17"
        rx="5"
        stroke="url(#instagramGradient)"
        strokeWidth="1.9"
      />

      <circle
        cx="12"
        cy="12"
        r="4"
        stroke="url(#instagramGradient)"
        strokeWidth="1.9"
      />

      <circle
        cx="17.45"
        cy="6.65"
        r="1.15"
        fill="#E1306C"
      />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="relative z-10 h-[19px] w-[19px]"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="
          M20.25 11.55
          a8.15 8.15 0 0 1-12.03 7.17
          L3.8 20l1.25-4.17
          a8.15 8.15 0 1 1 15.2-4.28Z
        "
        stroke="#25D366"
        strokeWidth="1.65"
        strokeLinejoin="round"
      />

      <path
        d="
          M8.35 8.2
          c.3-.42.62-.43.92-.1
          l1 1.2
          c.22.27.22.5.02.77
          l-.5.62
          c.57 1.04 1.4 1.85 2.5 2.42
          l.62-.52
          c.24-.2.5-.2.77-.01
          l1.2.88
          c.32.24.35.5.12.84
          -.42.64-1.02 1-1.7.92
          -1.7-.2-3.1-1.47-4.42-2.8
          -1.38-1.37-2.48-2.87-2.6-4.18
          -.04-.51.3-1.7 1.07-2.04Z
        "
        fill="#25D366"
      />
    </svg>
  );
}


function ReactIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="relative z-10 h-[20px] w-[20px]"
      fill="none"
      aria-hidden="true"
    >
      <ellipse
        cx="12"
        cy="12"
        rx="9.5"
        ry="3.7"
        stroke="#61DAFB"
        strokeWidth="1.35"
      />

      <ellipse
        cx="12"
        cy="12"
        rx="9.5"
        ry="3.7"
        transform="rotate(60 12 12)"
        stroke="#61DAFB"
        strokeWidth="1.35"
      />

      <ellipse
        cx="12"
        cy="12"
        rx="9.5"
        ry="3.7"
        transform="rotate(120 12 12)"
        stroke="#61DAFB"
        strokeWidth="1.35"
      />

      <circle
        cx="12"
        cy="12"
        r="1.8"
        fill="#61DAFB"
      />
    </svg>
  );
}

function TailwindIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="relative z-10 h-[19px] w-[19px]"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="
          M4.4 12.3
          c1.2-3.2 3.2-4.8 6-4.8
          4.15 0 4.25 3.7 6.8 3.7
          1.2 0 2.1-.6 2.7-1.8
          -1.2 3.2-3.2 4.8-6 4.8
          -4.15 0-4.25-3.7-6.8-3.7
          -1.2 0-2.1.6-2.7 1.8Z
        "
        fill="#38BDF8"
      />

      <path
        d="
          M4.4 17.8
          c1.2-3.2 3.2-4.8 6-4.8
          4.15 0 4.25 3.7 6.8 3.7
          1.2 0 2.1-.6 2.7-1.8
          -1.2 3.2-3.2 4.8-6 4.8
          -4.15 0-4.25-3.7-6.8-3.7
          -1.2 0-2.1.6-2.7 1.8Z
        "
        fill="#38BDF8"
        opacity=".55"
      />
    </svg>
  );
}