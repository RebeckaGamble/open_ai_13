import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="w-full h-[436px] bg-gradient-to-t from-[#F3F2F2] to-[#E4DED6]">
      <div className="w-full max-w-[90rem] mx-auto flex flex-row justify-between p-4">
        <h3 className="text-5xl font-[800] text-[#726654] leading-[242px] tracking-tighter">
          Footer
        </h3>
        <Link href="/">LOGO</Link>
      </div>
    </div>
  );
}
