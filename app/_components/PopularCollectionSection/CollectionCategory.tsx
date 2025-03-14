import React from 'react';
import {CATEGORY_DATA} from "@/app/_data/category";
import {twMerge} from "tailwind-merge";
import {motion} from "framer-motion";

const CollectionCategory = (
    {
        selectedCategory, SetSelectedCategory
    }: {
        selectedCategory: string;
        SetSelectedCategory: (category: string) => void;
    }) => {

    const containerVariants = {
        hidden: {opacity: 0},
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            }
        },
    }

    const itemVariants = {
        hidden: {opacity: 0, y: 20},
        show: {opacity: 1, y: 0},
    }

    return (
        <motion.div
            className="flex flex-wrap items-center justify-center gap-[14px]"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{once: true}}>
            {
                CATEGORY_DATA.map((category) => (
                    <motion.span variants={itemVariants} key={category.value}
                          onClick={() => SetSelectedCategory(category.value)}
                          className={twMerge("cursor-pointer text-10 lg:text-4 rounded-full border border-white/50 px-5 py-2 text-center lg:min-w-[100px] lg:px-10 lg:py-[11px]",
                              selectedCategory === category.value && "bg-primary border-none"
                          )}>
                        {category.name}
                    </motion.span>
                ))
            }
        </motion.div>
    );
};

export default CollectionCategory;