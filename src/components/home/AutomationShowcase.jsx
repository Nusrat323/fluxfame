import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1];

export default function AnimatedSection({
  children,
  className = "",
  delay = 0,
  y = 30,
  direction = "up",
  duration = 0.75,
  amount = 0.2,
}) {
  const initial = {
    opacity: 0,
  };

  if (direction === "up") {
    initial.y = y;
  }

  if (direction === "down") {
    initial.y = -y;
  }

  if (direction === "left") {
    initial.x = y;
  }

  if (direction === "right") {
    initial.x = -y;
  }

  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{
        once: true,
        amount,
        margin: "0px 0px -80px 0px",
      }}
      transition={{
        duration,
        delay,
        ease,
      }}
    >
      {children}
    </motion.div>
  );
}