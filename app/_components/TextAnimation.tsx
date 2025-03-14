"use client";

import { motion } from "framer-motion";
import React from "react";

const TextAnimation = ({
  children,
  delay = 0,
  divideBy = "word",
}: {
  children: string;
  delay?: number;
  divideBy?: "word" | "letter";
}) => {
  if (divideBy === "letter") {
    return (
      <span>
        {children.split("").map((letter, index) => (
          <motion.span
            key={index}
            className="relative inline-block overflow-hidden"
            initial={{
              clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
              y: -5,
            }}
            whileInView={{
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: delay + index * 0.02,
              ease: "easeInOut",
            }}
          >
            <span className="inline-block">
              {letter === " " ? "\u00A0" : letter}
            </span>
          </motion.span>
        ))}
      </span>
    );
  } else {
    return (
      <span>
        {children.split(" ").map((word, index) => (
          <motion.span
            key={index}
            className="relative inline-block overflow-hidden"
            initial={{
              clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
              y: -5,
            }}
            whileInView={{
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: delay + index * 0.05,
              ease: "easeInOut",
            }}
          >
            {word}&nbsp;
          </motion.span>
        ))}
      </span>
    );
  }
};

export default TextAnimation;
