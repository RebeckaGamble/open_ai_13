import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import chef from "../../public/chefbot1.png";


export default function Footer() {
  //Copyright
  const getYear = () => {
    return new Date().getFullYear();
  };

  return (
    <div className="w-full min-h-[328px] h-fit bg-gradient-to-t from-[#F3F2F2] to-[#E4DED6] relative">
      <div className="w-full h-full max-w-[90rem] mx-auto flex flex-col pt-6 pb-2 px-4 ">
        <div>
          <Link
            href={"/"}
          >
           <div className="flex flex-row gap-1 items-center">
              <Image src={chef} alt="chef logo" width={60} height={60} />
              <span className="text-5xl tracking-tighter bg-gradient-to-t from-[#30cde6] to-[#392fc4] bg-clip-text text-transparent font-bold">ChefMate</span>
            </div>
          </Link>
        </div>

        {/**contact info - social media */}
        <div className="pb-6 pt-4 sm:pt-0 flex flex-col sm:flex-row gap-10 justify-end">
          <div className="gap-2">

            <h4 className="text-[20px] font-semibold pb-2">Contact</h4>
            <div> <span className="font-semibold">Address</span> <p>Edagränd 12</p> <p>112 74</p> <p>Stockholm</p> </div>
            <div><span className="font-semibold">Phone</span><p> 073 435 22 63</p></div>
          </div>

          <div className="w-fit">
          <h4 className="text-[20px] font-semibold pb-2">Follow us</h4>
            <ul className="flex flex-row gap-3 justify-center h-fit items-center">
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
