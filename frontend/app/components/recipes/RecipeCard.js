import React from "react";
import Image from "next/image";
import testImg from "/public/img/test_img.jpg"
import { FaRegHeart } from "react-icons/fa";


export default function RecipeCard() {
  return (
    <div className="w-[90%] flex flex-col mx-auto bg-[#8A2F02] text-[#F8F6C0] rounded-[10px] p-8 ">
      <div className="flex flex-row">
        <div className="w-1/2">
            <Image src={testImg} height={200} width={300} alt="testImg" className="rounded-[10px]" />
            <div className="flex flex-row items-center">
              {" "}
              <span className="pr-2">
                <FaRegHeart />
              </span>{" "}
              Save recipe
            </div>
        </div>
        <div className="flex flex-row w-1/2">
          <div>
            <h4>rubrik</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
              porro reprehenderit saepe dignissimos recusandae aliquid sit,
              asperiores natus harum provident.
            </p>
          </div>
          <hr className="ml-4 mr-4 w-[2px] h-full bg-[#F8F6C0]" />
          <div>
            <h4>rubrik</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
              porro reprehenderit saepe dignissimos recusandae aliquid sit,
              asperiores natus harum provident.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-row">
        <div>
          <h4>rubrik</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
            porro reprehenderit saepe dignissimos recusandae aliquid sit,
            asperiores natus harum provident.
          </p>
        </div>

        <div>
          <h4>rubrik</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
            porro reprehenderit saepe dignissimos recusandae aliquid sit,
            asperiores natus harum provident.
          </p>
        </div>
      </div>
    </div>
  );
}
