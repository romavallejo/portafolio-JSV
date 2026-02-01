"use client"
import { motion } from "framer-motion";

interface AnimatedBackgroundProps {
  positionRight?: boolean
}

const AnimatedBackground = ({ positionRight = true }: AnimatedBackgroundProps) => {

  const position = positionRight ? "right center" : "left center";

  return (
    <motion.div
      className="absolute inset-0 z-0 pointer-events-none"
      style={{
        background: `radial-gradient(
          circle at ${position},
          var(--red) 0%,
          transparent 60%
        )`,
        backgroundRepeat: "no-repeat",
        opacity: 0.25,
      }}
      animate={{
        backgroundSize: [
          "100% 100%",
          "120% 120%",
          "100% 100%",
        ],
        opacity: [0.14, 0.22, 0.14],
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
};

export default AnimatedBackground;
