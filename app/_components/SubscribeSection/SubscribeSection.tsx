import React from 'react';
import TextAnimation from "@/app/_components/TextAnimation";
import Button from "@/app/_components/Button";

const SubscribeSection = () => {
    return (
        <div className={"flex flex-col w-full items-center justify-center gap-4 lg:gap-[37px]"}>
            <h2 className={"text-30 lg:text-60 px-[45px] text-center font-bold"}>
                <TextAnimation delay={0.4} divideBy={"letter"}>Subscribe to Latest Update</TextAnimation>
            </h2>

            <span className={"text-[9px] lg:text-14"}>
                <TextAnimation delay={0.5} divideBy={"word"}>
                    Lorem Ipsum is simply the dummy text for printing and type
                </TextAnimation>
            </span>

            {/*============ Input Button ================*/}
            <div className="flex gap-[9px]">
                {/*====== Input =====*/}
                <input type="email" placeholder={"Enter your email"} className={"w-full min-w-[216px] max-w-[320px] rounded-md border border-white/20 bg-white/10 px-4 outline-0 lg:min-w-[554px]"} />
                <Button variant={"filled"}>Subscribe</Button>
            </div>
        </div>
    );
};

export default SubscribeSection;