"use client";

import React from "react";
import Link from "next/link";
import { FaUser } from "react-icons/fa";
import { useLoginContext } from "./LoginContext";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const { loggedIn, logout } = useLoginContext()
  const router = useRouter();

  function handleLoggedout() {
    logout();
    router.push("/login");
  }

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
          {loggedIn ? (
            <li className="hover:scale-105 hover:font-semibold hover:text-[#525151]">
              <button onClick={handleLoggedout}>Logout</button>
            </li>
          ) : (
            <li className="hover:scale-105 hover:font-semibold hover:text-[#525151]">
              <Link href={"/login"}>Login</Link>
            </li>
          )}
        </div>
      </ul>
    </nav>
  );
}
