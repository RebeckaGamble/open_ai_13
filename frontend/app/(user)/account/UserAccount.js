"use client";

import React, { useContext } from "react";
import { CiHeart } from "react-icons/ci";
import { LoginContext } from "@/app/components/LoginContext";
import Link from "next/link";

export default function UserAccount() {
  const { loggedIn, logout } = useContext(LoginContext);

  return (
    <>
      {loggedIn ? (
        <>
          <div className=" h-screen pt-20 w-full">
            <div className="flex flex-row justify-end items-center gap-10 text-xl font-semibold p-4 mx-14">
              <h2>Name</h2>
              <h2>Email</h2>

              <div className="border w-20 h-20 rounded-full"></div>
            </div>
            <hr className=" border-t-4 text-black mx-14" />
            <div className="flex flex-row items-center gap-2 pt-10 mx-14">
              <a className="text-2xl">
                <CiHeart />
              </a>
              <h2 className="font-semibold text-xl">Sparade recept</h2>
            </div>
            <div className="flex flex-row items-center justify-center gap-5 p-10">
              <div className="border flex flex-col items-center justify-center gap-10 h-[400px] w-[350px] p-10 rounded-[30px] bg-orange-300">
                <h1 className="font-semibold text-2xl">Rubrik</h1>
                <p className="text-2xl">XXXXXXXX</p>
                <button className="rounded-full bg-orange-800 text-white px-8 py-2">
                  Välja
                </button>
              </div>
              <div className="border flex flex-col items-center justify-center gap-10 h-[400px] w-[350px] p-10 rounded-[30px] bg-orange-300">
                <h1 className="font-semibold text-2xl">Rubrik</h1>
                <p className="text-2xl">XXXXXXXX</p>
                <button className="rounded-full bg-orange-800 text-white px-8 py-2">
                  Välja
                </button>
              </div>
              <div className="border flex flex-col items-center justify-center gap-10 h-[400px] w-[350px] p-10 rounded-[30px] bg-orange-300">
                <h1 className="font-semibold text-2xl">Rubrik</h1>
                <p className="text-2xl">XXXXXXXX</p>
                <button className="rounded-full bg-orange-800 text-white px-8 py-2">
                  Välja
                </button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className=" h-screen pt-20 w-full">
          <div className="flex flex-row justify-end items-center gap-10 text-xl font-semibold p-4 mx-14">
            <div className="border w-20 h-20 rounded-full"></div>
          </div>
          <hr className=" border-t-4 text-black mx-14" />
          <div className="flex flex-row items-center gap-2 pt-10 mx-14">
            <a className="text-2xl">
              <CiHeart />
            </a>
            <h2 className="font-semibold text-xl">Sparade recept</h2>
          </div>
          <p>
            You need to be logged in, in order to be able to bookmark recipes.{" "}
            <Link href={"/login"}>Login</Link>
          </p>
        </div>
      )}
    </>
  );
}
