'use client'
import { motion, Variants } from "framer-motion";
import { HTMLMotionProps } from "framer-motion";

interface TypewriterProps extends HTMLMotionProps<"p"> {
  text: string;
  speed?: number;
}

export const Typewriter: React.FC<TypewriterProps> = ({ text, speed = 0.05,...rest }) => {

  const sentenceVariants: Variants = {
    hidden: {},
    visible: {
      opacity: 1,
      transition: { staggerChildren: speed }
    }
  };

  const letterVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { opacity: { duration: 0 } }
    }
  };

  const lines = text.split("\n");
  return (
    <motion.p
      key={text}
      variants={sentenceVariants}
      initial="hidden"
      animate="visible"
      {...rest}
    >

      {lines.map((line, lineIndex) => (
        <span key={`line-${lineIndex}`}>
          {line.split("").map((char: string, charIndex: number) => (
            <motion.span key={`char-${lineIndex}-${charIndex}`} variants={letterVariants}>
              {char}
            </motion.span>
          ))}
          {lineIndex < lines.length && <br/>}
        </span>
      ))}

    </motion.p>
  );
};
