import Link from "next/link";
import React from "react";

export default function Footer() {
  //Copyright
  const getYear = () => {
    return new Date().getFullYear();
  };

  return (
    <div className="w-full h-[328px] bg-gradient-to-t from-[#F3F2F2] to-[#E4DED6] relative">
      <div className="w-full h-full max-w-[90rem] mx-auto flex flex-col p-4 ">
        <div>
          <Link href={"/"} className="text-5xl font-[800] text-[#726654] tracking-tighter">ChefMate</Link>
        </div>

        <div className=" ">
          <div className="absolute bottom-[54px] right-4 text-[24px]">
            <Link href="/">
              ChefMate
            </Link>
          </div>
        </div>

        <div className="flex h-[36px] justify-center items-center w-full mt-auto border-t border-slate-700">
          <p className="pt-4 flex flex-row items-center">
            <span className="text-[20px]"> © </span> <span className="pr-2">{getYear()}</span> ChefMate.
          </p>
        </div>
      </div>
    </div>
  );
}

