import React from 'react';
import Logo from "@/app/_components/Header/Logo";
import Button from "@/app/_components/Button";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
    return (
        <div className={"flex flex-col gap-5"}>
            {/*==================== Top Section With Title and Subscribe Button =====================*/}
            <div className={"flex items-center justify-between"}>
                {/*===== Logo ======*/}
                <Logo/>

                <div className={"flex items-center gap-1 lg:gap-5"}>
                    <span className={"text-nowrap font-bold lg:text-25"}>Ready to Collect?</span>
                    <Button variant={"filled"}>Subscribe</Button>
                </div>

            </div>
            {/* Divider */}
            <div className={"h-[1px] w-full bg-white/50"}/>

            {/* ======================== Bottom with Links =========================*/}
            <div className={"flex flex-col gap-8 lg:flex-row lg:justify-between"}>
                {/* Page Links */}
                <div className={"grid grid-cols-3 gap-4 lg:order-2 lg:gap-10"}>
                    {/* Column 1 */}
                    <div className={"flex flex-col gap-4 text-16 lg:text-xl"}>
                        <span className={"text-primary font-bold"}>Marketplace</span>
                        <div className={"flex flex-col gap-2"}>
                            <Link href={"/"}>Create</Link>
                            <Link href={"/"}>Mining</Link>
                            <Link href={"/"}>Sell</Link>
                            <Link href={"/"}>Collect</Link>
                        </div>
                    </div>

                    {/* Column 2 */}
                    <div className={"flex flex-col gap-4 text-16 lg:text-xl"}>
                        <span className={"text-primary font-bold"}>Company</span>
                        <div className={"flex flex-col gap-2"}>
                            <Link href={"/"}>Bug Bounty</Link>
                            <Link href={"/"}>Community</Link>
                            <Link href={"/"}>Guideline</Link>
                            <Link href={"/"}>Team</Link>
                            <Link href={"/"}>Careers</Link>
                        </div>
                    </div>

                    {/* Column 3 */}
                    <div className={"flex flex-col gap-4 text-16 lg:text-xl"}>
                        <span className={"text-primary font-bold"}>Help</span>
                        <div className={"flex flex-col gap-2"}>
                            <Link href={"/"}>Faqs</Link>
                            <Link href={"/"}>Contact US</Link>
                        </div>
                    </div>

                </div>

                {/* Two Lines and social icons */}
                <div className={"flex flex-col items-center text-center gap-5 lg:items-start lg:text-left lg:justify-between"}>
                    <div>
                        <span className={"text-16"}>Create, Sell and Collect</span>
                        <br />
                        <span className={"text-16 font-bold"}>NFT Digital Art</span>
                    </div>

                    {/* Social Icons */}
                    <div className={"flex items-center gap-4"}>
                        <Link href={"/"}>
                            <Image src={"/images/social/linkedin.png"} alt={"social icons"} width={40} height={40} />
                        </Link>
                        <Link href={"/"}>
                            <Image src={"/images/social/x.png"} alt={"social icons"} width={40} height={40} />
                        </Link>
                        <Link href={"/"}>
                            <Image src={"/images/social/facebook.png"} alt={"social icons"} width={40} height={40} />
                        </Link>
                        <Link href={"/"}>
                            <Image src={"/images/social/youtube.png"} alt={"social icons"} width={40} height={40} />
                        </Link>
                        <Link href={"/"}>
                            <Image src={"/images/social/insta.png"} alt={"social icons"} width={40} height={40} />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
);
};

export default Footer;