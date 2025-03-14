"use client";

import React from "react";
import { motion } from "framer-motion";
import styles from "./Hero.Frame.module.css";


const animations = {
  scaleDown: {
    initial: {backgroundSize: "150%"},
    animate: {backgroundSize: "100%"},
    transition: { duration: 3.5, ease: "easeInOut"}
  },
  move: {
    initial: {backgroundPosition: "100% center"},
    animate: {backgroundPosition: "50% center"},
    transition: { duration: 3, ease: "easeInOut"}
  }
}

interface HeroFrameProps {
  width: {
    base: number;
    lg: number;
  };
  height: {
    base: number;
    lg: number;
  };
  bgImage: string;
  animationType?: "scaleDown" | "move";
}



const HeroFrame = ({
  width,
  height,
  bgImage,
  animationType = "scaleDown",
}: HeroFrameProps) => {

  const animation = animations[animationType]

  return (
    <motion.div
      className={styles.frame}
      style={
        {
          backgroundImage: `url(${bgImage})`,
          width: `${width.base}px`,
          height: `${height.base}px`,
          "--lg-width": `${width.lg}px`,
          "--lg-height": `${height.lg}px`,
        } as React.CSSProperties
      }

      initial={animation.initial}
      animate={animation.animate}
      transition={animation.transition}
    />
  );
};

export default HeroFrame;
