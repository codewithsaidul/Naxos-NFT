"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import useWindowSize from "@/app/_hooks/useWindowSize";

const HeroMovingFrames = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const frames = [
    { src: "/images/hero-monkey-1.png", position: "left" },
    { src: "/images/hero-monkey-2.png", position: "center" },
    { src: "/images/hero-monkey-3.png", position: "right" },
  ];

  useEffect(() => {
    const timer = setInterval(()=> {
      setCurrentIndex((prev) => (prev + 1) % 3)
    }, 4000);

    return () => clearInterval(timer)
  }, []);


  const getPosition = (index: number) => {
    const position = {
      left: {x: isMobile ? -50 : -120, opacity: 0.65, scale: 0.8},
      center: {x: 0, zIndex: 50, opacity: 1, scale: 1},
      right: {x: isMobile ? 50 : 120, opacity: 0.65, scale: 0.8},
    }

    const diff = (index - currentIndex + 3) % 3;

    if (diff === 0 ) return position.center;
    if (diff === 1 ) return position.right;
    return position.left
  }


  const isMobile = useWindowSize()

  return (
    <div className="relative flex h-[200px] items-center justify-center lg:h-[506px]">
      {frames.map((frame, index) => (
        <motion.div key={index}
          className="absolute w-[102px] h-[200px] overflow-hidden rounded-[80px] bg-[#CDCDCD] lg:w-[292px] lg:rounded-[165px] lg:h-[506px]"
          initial={false}
          animate={getPosition(index)}
          transition={{
            x: {
              duration: 0.8,
              ease: "easeInOut"
            },
            opacity: {
              duration: 0.3,
              ease: "easeInOut"
            }
          }}
          >
          <Image 
          src={frame.src}
          alt="Monkey Image"
          width={isMobile ? 187 : 292}
          height={isMobile ? 183 : 506}
          className="h-full w-full object-cover"
          />
        </motion.div>
      ))}
    </div>
  );
};

export default HeroMovingFrames;
