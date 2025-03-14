import React from "react";
import HeroFrame from "./HeroFrame";
import HeroMovingFrames from "./HeroMovingFrames";
import Stats from "./Stats";
import TextAnimation from "../TextAnimation";

const HeroSection = () => {
  return (
    <div className="flex flex-col gap-[38px] lg:gap-[16px]">
      {/* slogan here */}
      <div className="text-center px-[10px] lg:pt-16">
        <span>
          Naxos is a platform for creating and trading digital assets.
        </span>
      </div>
      {/* hero title  */}
      <div className="text-25 md:text-45 lg:text-60 flex flex-col items-center justify-center gap-[14px] font-bold lg:py-[25px]">
        {/* first line  */}
        <h1 className="flex items-center gap-[15px]">
          <TextAnimation delay={0.8} divideBy="letter">Discover</TextAnimation>

          <HeroFrame
            width={{
              base: 100,
              lg: 326,
            }}
            height={{
              base: 34,
              lg: 68,
            }}
            bgImage="/images/hero-frame-1.jpg"
            animationType="scaleDown"
          />

          <TextAnimation delay={0.8} divideBy="letter">Collect</TextAnimation>
        </h1>

        {/* second line */}
        <h2 className="flex items-center gap-[15px]">
          <HeroFrame
            width={{
              base: 100,
              lg: 326,
            }}
            height={{
              base: 34,
              lg: 68,
            }}
            bgImage="/images/hero-frame-2.png"
            animationType="move"
          />

          <TextAnimation delay={1.1} divideBy="letter">& Sell Extraordinary</TextAnimation>
        </h2>

        {/* third line  */}
        <TextAnimation delay={1} divideBy="letter">Rare NFTs</TextAnimation>
      </div>

      {/* ============ Moving Images  */}
      <div className="flex flex-col items-center justify-center gap-[25px] lg:flex-row lg:items-start lg:justify-between lg:mt-10">
        {/* moving frames */}
        <div className="lg:order-2">
          <HeroMovingFrames />
        </div>
        {/* states */}
        <div className="lg:order-3">
          <Stats />
        </div>

        {/* small info */}
        <span className="flex w-[202] items-center justify-center text-center text-[7px] leading-3 lg:order-1 lg:text-start lg:leading-6 lg:text-14">
          <TextAnimation delay={1} divideBy="word">
            Lorem Ispum is simply the dummy text for printing and typesetting
            industry. Lorem ispum has been the industries standard text over.
            Lorem Ispum is simply the dummy text for printing and typesetting
            industry.
          </TextAnimation>
        </span>
      </div>
    </div>
  );
};

export default HeroSection;
