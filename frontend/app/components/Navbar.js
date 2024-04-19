import React from "react";
import Link from "next/link";
import { FaUser } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="w-full h-10 bg-slate-100 flex flex-row">
      <ul className="w-full flex items-center justify-between">
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
