'use client'
import { motion, Variants, useAnimation, HTMLMotionProps } from "framer-motion";
import { useEffect } from "react";

interface TypewriterProps extends HTMLMotionProps<"p"> {
  top: string;
  bottom: string;
  colorTop: boolean;
  color: string;
}

export const sentenceVariants: Variants = {
  hidden: { opacity: 1 }, // keep visible so layout doesn't jump
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 }
  }
};

export const letterVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { opacity: { duration: 0 } }
  }
};

export const DualTypewriter: React.FC<TypewriterProps> = ({ top, bottom, colorTop, color, ...rest }) => {
  const topControls = useAnimation();
  const bottomControls = useAnimation();

  useEffect(() => {
    const runSequence = async () => {
      await topControls.start("visible");     // wait for first sentence
      await bottomControls.start("visible");  // then second sentence
    };

    runSequence();
  }, [top, bottom, topControls, bottomControls]);

  console.log(color);

  return (
    <div>
      <motion.p
        key={top}
        variants={sentenceVariants}
        initial="hidden"
        animate={topControls}
        {...rest}
      >
        {top.split("").map((char, i) => (
          <motion.span
            className={colorTop ? color : ""}
            key={`top-${i}`} 
            variants={letterVariants}
          >
            {char}
          </motion.span>
        ))}
      </motion.p>

      <motion.p
        key={bottom}
        variants={sentenceVariants}
        initial="hidden"
        animate={bottomControls}
        {...rest}
      >
        {bottom.split("").map((char, i) => (
          <motion.span 
            className={!colorTop ? color : ""}
            key={`bottom-${i}`} 
            variants={letterVariants}
          >
            {char}
          </motion.span>
        ))}
      </motion.p>
    </div>
  );
};
