"use client";

import React from "react";
import Link from "next/link";
import { FaUser } from "react-icons/fa";
import { useLoginContext } from "./LoginContext";
import { useRouter } from "next/navigation";
import Image from "next/image";
import chef from "../../public/chefbot1.png";

export default function Navbar() {
  const { loggedIn, logout } = useLoginContext();
  const router = useRouter();

  function handleLoggedout() {
    logout();
    router.push("/login");
  }
  //#E1DAD0  #D9D8D5 #726654
  return (
    <nav className="w-full h-[60px] fixed z-[9999] bg-[#E1DAD0] text-[18px] shadow-lg flex flex-row px-4">
      <ul className="w-full max-w-[90rem] mx-auto flex items-center justify-between">
        <li className="hover:scale-105 hover:font-semibold hover:text-[#525151]">
          <Link href={"/"}>
            <div className="flex flex-row gap-1 pr-2 items-center">
              <Image src={chef} alt="chef logo" width={50} height={50} />
              <span className="text-[22px] bg-gradient-to-t from-[#30cde6] to-[#392fc4] bg-clip-text text-transparent font-bold">ChefMate</span>
            </div>
          </Link>
        </li>
        <div className="flex flex-row gap-6 items-center">
          <li>
            <Link href={"/account"}>
              <FaUser className="hover:scale-105 fill-[#0C0603]" />
            </Link>
          </li>
          {loggedIn ? (
            <li className="hover:scale-105 hover:font-semibold text-[#0C0603]">
              <button onClick={handleLoggedout}>Logout</button>
            </li>
          ) : (
            <li className="hover:scale-105 pl-2 hover:font-semibold text-[#0C0603]">
              <Link href={"/login"}>Login</Link>
            </li>
          )}
        </div>
      </ul>
    </nav>
  );
}
