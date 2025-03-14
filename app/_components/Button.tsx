import React from 'react';
import {twMerge} from "tailwind-merge";

const Button = (
    {
        children, variant = "filled"
    }: {
        children: React.ReactNode, variant?: "filled" | "outlined" | undefined
    }) => {
    return (
        <button
            className={twMerge("w-full flex items-center justify-center rounded-md px-6 py-2 font-semibold text-white lg:px-[43px] lg:py-[18px] lg:block",
                variant === "filled" ? "bg-primary" : "border-primary border-2 bg-transparent hover:bg-[#454448] duration-300 hover:duration-300",
            )}>
            <span className="text-14 lg:text-20">{children}</span>
        </button>
    );
};

export default Button;