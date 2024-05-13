import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";

export default function Footer() {
  //Copyright
  const getYear = () => {
    return new Date().getFullYear();
  };

  return (
    <div className="w-full h-[328px] bg-gradient-to-t from-[#F3F2F2] to-[#E4DED6] relative">
      <div className="w-full h-full max-w-[90rem] mx-auto flex flex-col p-4 ">
        <div>
          <Link
            href={"/"}
            className="text-5xl font-[800] text-[#726654] tracking-tighter"
          >
            ChefMate
          </Link>
        </div>

        {/**contact info - social media */}
        <div className="pt-6 flex flex-col gap-4">
          <div>

            <h4 className="text-[20px] font-semibold">Contact</h4>
            <p> <span className="font-semibold">Address:</span> address here </p>
            <p><span className="font-semibold">Phone:</span> phone here</p>
          </div>

          <div className="w-fit">
          <h4 className="text-[20px] font-semibold">Social media</h4>
            <ul className="flex flex-row gap-2 justify-center">
              <li>
              <Link href="https://www.facebook.com" target="blank">
                  <FaFacebook size={30} className="fill-[#4267B2]" />
                </Link>
              </li>
              <li>
              <Link href="https://www.instagram.com" target="blank">
                  <FaInstagram size={30} className="rounded-lg fill-white bg-gradient-to-t from-[#edb438] via-[#fd5949] via-[#d6249f] to-[#285aeb]" />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex h-[36px] justify-center items-center w-full mt-auto border-t border-slate-700">
          <p className="pt-4 flex flex-row items-center">
            <span className="text-[20px]"> © </span>{" "}
            <span className="pr-2">{getYear()}</span> ChefMate.
          </p>
        </div>
      </div>
    </div>
  );
}
