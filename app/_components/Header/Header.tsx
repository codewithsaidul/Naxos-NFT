"use client";
import MenuIcon from "./MenuIcon";
import Logo from "./Logo";
import { useState } from "react";
import Link from "next/link";
import Sidebar from "./Sidebar";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header>
      <div className="flex justify-between items-center">
        <Logo />

        {/* Menu Icon for Mobile Navigation Menu Toggle */}
        <div className="lg:hidden">
          <MenuIcon isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>

        {/* =============== Center Menu ======================== */}
        <div className="hidden lg:flex gap-6 text-lg">
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
        </div>


        {/* =========== Connect Wallet Button =============== */}
        <button className="hidden lg:block bg-primary text-white px-5 py-[7px] rounded-full">
          Connect Wallet
        </button>
      </div>

      {/* ============= Sidebar ================== */}
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
    </header>
  );
}

export default Header;
