import React from "react";
import Link from "next/link";
import { FaUser } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="w-full h-[60px] fixed z-[9999] bg-[#D9D8D5] text-[#726654] text-[18px] shadow-sm flex flex-row px-4">
      <ul className="w-full max-w-[90rem] mx-auto flex items-center justify-between">
        <li className="hover:scale-105 hover:font-semibold hover:text-[#525151]">
          <Link href={"/"}>ChefMate</Link>
        </li>
        <div className="flex flex-row gap-6 items-center">
          <li>
            <Link href={"/account"}>
              <FaUser className="hover:scale-105 hover:fill-[#525151]" />
            </Link>
          </li>
          <li className="hover:scale-105 hover:font-semibold hover:text-[#525151]">
            <Link href={"/login"}>Login</Link>
          </li>
        </div>
      </ul>
    </nav>
  );
}
