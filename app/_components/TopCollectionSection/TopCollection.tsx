"use client"
import React from 'react';
import TextAnimation from "@/app/_components/TextAnimation";
import {TOP_COLLECTION_DATA} from "@/app/_data/top-collection";
import Image from "next/image";
import {motion} from "framer-motion";


const TopCollection = () => {
    return (
        <div className={"flex flex-col gap-4"}>
            <h2 className={"text-30 lg:text-60 font-bold px-7 text-center"}>
                <TextAnimation delay={0.2} divideBy={"letter"}>Our Top Collection</TextAnimation>
            </h2>

            {/*========================= Collection List ===========================*/}
            <div className={"flex flex-col items-center justify-center gap-[10px] lg:mt-4 lg:flex-row lg:flex-wrap lg:gap-x-16"}>
                {
                    TOP_COLLECTION_DATA.map((item, index) =>
                        <motion.div
                            key={index}
                            className={"flex w-full max-w-[320px] items-center gap-2 border-b border-b-white/40 py-[9px] lg:gap-[19px] lg:py-7"}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{once: true}}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.1,
                                ease: "easeInOut",
                            }}
                        >
                            <span className={"text-16 lg:text-22 font-bold"}>{index + 1}. </span>
                            <Image src={item.image} alt={item.name} width={35} height={35} className={"rounded-full"}/>
                            <div className={"flex flex-col gap-[5px]"}>
                                <span className={"text-[12px] lg:text-lg font-bold"}>{item.name}</span>
                                <span
                                    className={"font-bold text-10 lg:text-lg text-white/40"}>${item.price.toLocaleString()}</span>
                            </div>
                        </motion.div>)
                }
            </div>
        </div>
    );
};

export default TopCollection;