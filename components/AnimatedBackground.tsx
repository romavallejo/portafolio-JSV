"use client"
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface AnimatedBackgroundProps {
  positionRight?: boolean
}

const AnimatedBackground = ({ positionRight = true }: AnimatedBackgroundProps) => {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 1024px)"); // Tailwind lg
    const listener = () => setIsLargeScreen(media.matches);

    listener(); // set on mount
    media.addEventListener("change", listener);

    return () => media.removeEventListener("change", listener);
  }, []);

  // 💡 Position logic
  const position = isLargeScreen
    ? positionRight
      ? "right center"
      : "left center"
    : "center top"; // mobile layout glow

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
      }}
      animate={{
        backgroundSize: ["100% 100%", "120% 120%", "100% 100%"],
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
