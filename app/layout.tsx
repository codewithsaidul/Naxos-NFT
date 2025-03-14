import {Metadata} from "next";
import "./globals.css";
import {Inria_Sans} from "next/font/google"
import Header from "./_components/Header/Header";
import React from "react";
import Footer from "@/app/_components/Footer/Footer";
import SmoothScrolling from "@/app/_components/SmoothScrolling";


const InriaSans = Inria_Sans({
    variable: '--font-inria-sans',
    subsets: ['latin'],
    weight: ['300', '400', '700']
})


export const metadata: Metadata = {
    title: "Naxos NFT || CodeWithSaidul",
    description: "Naxos is your one stop solution for NFT's"
}

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body
            className={`${InriaSans.variable} relative mx-auto box-border max-w-[1728px] px-4 py-[10px] antialiased lg:px-[100px] lg:py-6`}>

        <SmoothScrolling>
            {/*==== bg blur ===========*/}
            <div
                className={"absolute left-0 hidden lg:block w-[400px] h-[400px] bg-white opacity-10 blur-3xl lg:-top-[100px]"}/>
            {/*==== bg blur ===========*/}
            <div
                className={"absolute right-0 hidden lg:block w-[400px] h-[400px] bg-white opacity-5 blur-3xl lg:top-[700px]"}/>
            <Header/>
            {children}
            <Footer/>
        </SmoothScrolling>
        </body>
        </html>
    );
}
