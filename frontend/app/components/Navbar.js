import React from "react";
import Link from "next/link";
import { FaUser } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="w-full h-[60px] fixed z-[9999] bg-[#D9D8D5] text-[#726654] text-[24px] shadow-sm flex flex-row">
      <ul className="w-full max-w-[90rem] mx-auto flex items-center justify-between">
        <li>
          <Link href={"/"}>Logo</Link>
        </li>
        <h1>Group 13</h1>

        <div className="flex flex-row gap-6 items-center">
          <li>
            <Link href={"/account"}>
              <FaUser />
            </Link>
          </li>
          <li>
            <Link href={"/login"}>Login</Link>
          </li>
        </div>
      </ul>
    </nav>
  );
}
