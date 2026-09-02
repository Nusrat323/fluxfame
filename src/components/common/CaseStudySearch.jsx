import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  X,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

export default function CaseStudySearch({
  value,
  onChange,
  placeholder = "Search projects...",
  resultCount,
}) {
  const [focused, setFocused] = useState(false);

  const hasValue = value?.trim().length > 0;
  const normalizeSearch = (text = "") => {
    return text
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]/g, "");
  };

  const normalizedValue = useMemo(
    () => normalizeSearch(value),
    [value]
  );

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape" && hasValue) {
        onChange("");
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [hasValue, onChange]);

  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
        scale: 0.96,
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      transition={{
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="flex justify-center mb-10 px-4"
    >
      <div className="relative w-full max-w-[500px]">

        {/* OUTER AMBIENT GLOW */}

        <motion.div
          animate={{
            opacity: focused ? 0.8 : 0.35,
            scale: focused ? 1.05 : 1,
          }}
          transition={{
            duration: 0.4,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            pointer-events-none
            absolute
            -inset-3
            rounded-full
            bg-lime-400/[0.06]
            blur-2xl
          "
        />

        {/* SEARCH CONTAINER */}

        <motion.div
          animate={{
            borderColor: focused
              ? "rgba(163, 230, 53, 0.38)"
              : "rgba(255, 255, 255, 0.10)",
            boxShadow: focused
              ? "0 0 45px -12px rgba(163,230,53,0.45), inset 0 0 25px rgba(163,230,53,0.035)"
              : "0 0 30px -18px rgba(163,230,53,0.35)",
          }}
          transition={{
            duration: 0.35,
            ease: "easeOut",
          }}
          className="
            group
            relative
            flex
            h-[58px]
            w-full
            items-center
            overflow-hidden
            rounded-full
            border
            bg-white/[0.045]
            backdrop-blur-2xl
          "
        >

          {/* INNER LIGHT */}

          <div
            className="
              pointer-events-none
              absolute
              inset-0
              rounded-full
              bg-gradient-to-r
              from-white/[0.035]
              via-transparent
              to-lime-400/[0.025]
            "
          />

          {/* MOVING GLOW */}

          <motion.div
            animate={{
              x: focused
                ? ["-120%", "120%"]
                : "-120%",
              opacity: focused ? [0, 0.5, 0] : 0,
            }}
            transition={{
              duration: 2.2,
              repeat: focused ? Infinity : 0,
              ease: "easeInOut",
            }}
            className="
              pointer-events-none
              absolute
              top-0
              bottom-0
              w-1/3
              bg-gradient-to-r
              from-transparent
              via-lime-400/[0.08]
              to-transparent
              blur-xl
              -skew-x-12
            "
          />

          {/* SEARCH ICON */}

          <motion.div
            animate={{
              scale: focused ? 1.08 : 1,
              rotate: focused ? -8 : 0,
            }}
            transition={{
              duration: 0.3,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              absolute
              left-5
              top-1/2
              z-20
              -translate-y-1/2
            "
          >
            <Search
              size={18}
              strokeWidth={2}
              className={`
                transition-colors
                duration-300
                ${
                  focused
                    ? "text-lime-300"
                    : "text-white/40"
                }
              `}
            />
          </motion.div>

          {/* INPUT */}

          <input
            type="text"
            value={value}
            onChange={handleChange}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            placeholder={placeholder}
            aria-label="Search case studies"
            autoComplete="off"
            spellCheck="false"
            className="
              relative
              z-10
              h-full
              w-full
              bg-transparent
              pl-12
              pr-28
              text-[14px]
              font-medium
              tracking-wide
              text-white
              outline-none
              placeholder:text-white/30
              placeholder:font-normal
            "
          />

          {/* SEARCH STATUS */}

          <AnimatePresence mode="wait">
            {!hasValue && !focused && (
              <motion.div
                key="hint"
                initial={{
                  opacity: 0,
                  x: 8,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                exit={{
                  opacity: 0,
                  x: -8,
                }}
                transition={{
                  duration: 0.2,
                }}
                className="
                  pointer-events-none
                  absolute
                  right-5
                  top-1/2
                  z-20
                  hidden
                  -translate-y-1/2
                  items-center
                  gap-1.5
                  text-[10px]
                  font-medium
                  uppercase
                  tracking-[0.16em]
                  text-white/20
                  sm:flex
                "
              >
                <Sparkles size={11} />
                Explore
              </motion.div>
            )}

            {focused && !hasValue && (
              <motion.div
                key="focus"
                initial={{
                  opacity: 0,
                  x: 8,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                exit={{
                  opacity: 0,
                  x: -8,
                }}
                transition={{
                  duration: 0.2,
                }}
                className="
                  pointer-events-none
                  absolute
                  right-5
                  top-1/2
                  z-20
                  hidden
                  -translate-y-1/2
                  items-center
                  gap-1
                  text-[10px]
                  font-medium
                  uppercase
                  tracking-[0.14em]
                  text-lime-300/40
                  sm:flex
                "
              >
                Search
                <ArrowUpRight size={11} />
              </motion.div>
            )}
          </AnimatePresence>

          {/* RESULT COUNT */}

          <AnimatePresence>
            {hasValue &&
              typeof resultCount === "number" && (
                <motion.div
                  initial={{
                    opacity: 0,
                    scale: 0.8,
                    x: 8,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    x: 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.8,
                    x: 8,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                  className="
                    absolute
                    right-14
                    top-1/2
                    z-20
                    -translate-y-1/2
                    rounded-full
                    border
                    border-lime-400/15
                    bg-lime-400/[0.07]
                    px-2.5
                    py-1
                    text-[10px]
                    font-semibold
                    tracking-wide
                    text-lime-300/70
                  "
                >
                  {resultCount}
                </motion.div>
              )}
          </AnimatePresence>

          {/* CLEAR BUTTON */}

          <AnimatePresence>
            {hasValue && (
              <motion.button
                type="button"
                initial={{
                  opacity: 0,
                  scale: 0.5,
                  rotate: -45,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  rotate: 0,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.5,
                  rotate: 45,
                }}
                transition={{
                  duration: 0.22,
                  ease: [0.16, 1, 0.3, 1],
                }}
                onMouseDown={(event) => {
                  event.preventDefault();
                }}
                onClick={() => onChange("")}
                aria-label="Clear search"
                className="
                  absolute
                  right-3
                  top-1/2
                  z-30
                  flex
                  h-8
                  w-8
                  -translate-y-1/2
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.06]
                  text-white/35
                  transition-all
                  duration-200
                  hover:border-lime-400/30
                  hover:bg-lime-400/10
                  hover:text-lime-300
                "
              >
                <X
                  size={14}
                  strokeWidth={2}
                />
              </motion.button>
            )}
          </AnimatePresence>

          {/* BOTTOM ACCENT */}

          <motion.div
            initial={{
              scaleX: 0,
              opacity: 0,
            }}
            animate={{
              scaleX: focused ? 1 : 0,
              opacity: focused ? 1 : 0,
            }}
            transition={{
              duration: 0.45,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              pointer-events-none
              absolute
              bottom-0
              left-[22%]
              right-[22%]
              z-20
              h-[1px]
              origin-center
              bg-gradient-to-r
              from-transparent
              via-lime-400/70
              to-transparent
            "
          />
        </motion.div>
      </div>
    </motion.div>
  );
}