"use client"
import { motion } from "framer-motion";
import { HTMLMotionProps } from "framer-motion";

interface AnimatedBackgroundProps extends HTMLMotionProps<"div"> {
  horizontal?: boolean;
  start?: boolean;
}

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({ horizontal = true, start = true, ...rest }: AnimatedBackgroundProps) => {

  const position = horizontal ? (start ? "left center" : "right center") : (start ? "top center" : "bottom center");

  return (
    <motion.div
      style={{
        backgroundImage: `radial-gradient(
          circle at ${position},
          var(--red) 0%,
          transparent 60%
        )`,
        backgroundRepeat: "no-repeat",
        opacity: 0.25,
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
      {...rest}
    />
  );
};

export default AnimatedBackground;
