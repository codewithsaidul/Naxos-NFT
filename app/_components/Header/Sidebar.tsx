"use client"

import Link from "next/link";
import { useEffect, useRef } from "react";
import { twMerge } from "tailwind-merge";


interface SidebarProps {
        isOpen: boolean;
        setIsOpen: (value: boolean) => void;
}

const Sidebar = ({isOpen, setIsOpen}: SidebarProps) => {
    const sidebarRef = useRef<HTMLDivElement>(null);

    useEffect(() => {

        const handleClickOutSide = (event: MouseEvent) => {
            const clikElement = event.target as Node;

            const menuIcon = document.querySelector("[data-menu-icon]")
             
            if(menuIcon?.contains(clikElement)) return;

            if (sidebarRef.current && !sidebarRef.current.contains(clikElement)) {
                setIsOpen(false)
            }
        }

        document.addEventListener("mousedown", handleClickOutSide)
    }, [setIsOpen])

  return (
    <div
    ref={sidebarRef}
    className={twMerge("fixed z-[50] top-0 right-0 h-full w-[250px] bg-black transform transition-transform duration-300 ease-in-out", 
        isOpen ? "translate-x-0" : "translate-x-full"
    )}
    >
      <div className="flex flex-col gap-[25px] p-5 mt-16 text-lg">
        <Link href={"/"} className="hover:text-primary transition-colors">
          Explore
        </Link>
        <Link href={"/"} className="hover:text-primary transition-colors">
          Marketplace
        </Link>
        <Link href={"/"} className="hover:text-primary transition-colors">
          Community
        </Link>
        <Link href={"/"} className="hover:text-primary transition-colors">
          Creator
        </Link>
        <Link href={"/"} className="hover:text-primary transition-colors">
          Support
        </Link>


        {/* =========== Connect Wallet Button =============== */}
        <button className=" bg-primary text-white px-5 py-[7px] rounded-full">
          Connect Wallet
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
