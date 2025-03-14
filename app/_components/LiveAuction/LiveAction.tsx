"use client"
import {useRef} from 'react';
import Image from "next/image";
import TextAnimation from "@/app/_components/TextAnimation";
import Button from "@/app/_components/Button";
import {motion, useScroll, useTransform} from "framer-motion";

const LiveAction = () => {

    const containerRef = useRef<HTMLDivElement>(null);
    const {scrollYProgress} = useScroll({
        target: containerRef,
        offset: ["0 1", "1 0"]
    })

    const monkeyY = useTransform(scrollYProgress, [0, .7], [300, 0])

    return (
        <div className="flex flex-col gap-[40px] lg:flex-row lg:gap-[89px]">
            {/*=========================== Monkey Frame ========================== */}
            <div ref={containerRef}
                 className="relative h-[243px] rounded-lg overflow-hidden bg-gradient-to-b from-[#EF962E] to-[#FFAF36] lg:h-[601] lg:flex-1 lg:rounded-3xl">
                <motion.div
                    style={{y: monkeyY}}
                    className="w-full h-full relative bottom-0 left-0 right-0 mx-auto"
                >
                    <Image src="/images/black-monkey.png" alt="Black Monkey" fill className="object-cover"/>
                </motion.div>
            </div>

            {/*=========================== Live Auction Details ========================== */}
            <div className="flex flex-col gap-[14px] lg:flex-1 lg:justify-between">

                {/*================= Live Auction SubTitle ==================*/}
                <div className="flex gap-[12px]">
                    <div className="h-auto w-1 lg:w-3 rounded-md bg-[#6351DB]"/>
                    <span className="text-[12px] lg:text-25">
                        <TextAnimation delay={0.3} divideBy="word">Live Auction</TextAnimation>
                    </span>
                </div>

                {/*========================= Live Auction Title =====================*/}
                <h2 className="text-30 font-bold lg:text-60 lg:-mt-10">
                    <TextAnimation delay={0.4} divideBy="word">Bored_App #333</TextAnimation>
                </h2>


                {/*============= blocks ==================*/}
                <div className="flex justify-between gap-5">
                    <Blocks title="Creater" image="/images/avatars/avatar-1.avif" name="@odsjduo"/>
                    <Blocks title="Collection" image="/images/avatars/avatar-1.avif" name="Your Dream"/>
                </div>

                {/*============ Bid Block =====================*/}
                <div className="flex justify-between gap-5">
                    <BidBlocks title={"Current Bid"} content={"1.23 ETH"}/>
                    <BidBlocks title={"Ends In"} content={"12: 50: 23"}/>
                </div>

                {/*================== Auction button ==================*/}
                <div className="flex justify-between gap-5 pt-[10px]">
                    <Button>Start Mining</Button>
                    <Button variant={"outlined"}>Learn More</Button>
                </div>
            </div>
        </div>
    );
};


const Blocks = ({title, image, name}: { title: string, image: string, name: string }) => {
    return (
        <div className="flex flex-1 flex-col">
            <span className="text-14 lg:text-25">
                <TextAnimation delay={0.5} divideBy="word">{title}</TextAnimation>
            </span>

            <div className="flex gap-[14px] rounded-lg bg-[#454448] px-5 py-3 lg:px-[25px] lg:py-4">
                <div className="relative w-[25px] h-[25px] lg:w-[40px] lg:h-[40px]">
                    <Image src={image} alt={name} fill className="rounded-full"/>
                </div>

                <span className="text-14 lg:text-20">
                <TextAnimation delay={0.5} divideBy="word">{name}</TextAnimation>
            </span>
            </div>
        </div>
    )
}


const BidBlocks = ({title, content}: { title: string, content: string }) => {
    return (
        <div className="flex flex-1 flex-col">
            <span className="text-14 lg:text-25">
                <TextAnimation delay={0.5} divideBy="word">{title}</TextAnimation>
            </span>
            <span className="text-27 lg:text-55">
                <TextAnimation delay={0.5} divideBy="word">{content}</TextAnimation>
            </span>
        </div>
    )
}

export default LiveAction;