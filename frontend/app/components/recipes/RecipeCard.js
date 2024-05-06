import React from "react";
import Image from "next/image";
import testImg from "/public/img/test_img.jpg";
import { FaRegHeart } from "react-icons/fa";

export default function RecipeCard({ recipe }) {
 
  return (
    <div className="w-full px-4 max-w-[90rem] flex flex-col mx-auto bg-[#E1DAD0] text-[#250D01] rounded-[10px] p-4 md:p-8 ">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-[30%] pb-6">
          <Image
            src={testImg}
            height={200}
            width={300}
            alt="testImg"
            className="rounded-[10px] h-auto w-full object-cover"
          />
          <div className="flex flex-row items-center pt-1">
            {" "}
            <span className="pr-2">
              <FaRegHeart size={18} />
            </span>{" "}
            Save recipe
          </div>
        </div>
        <div className="w-full md:w-[70%] sm:pl-6 flex flex-col">
          <h2 className="w-full pb-6 text-[24px] sm:text-[30px] font-semibold text-left">
            {recipe.title}
          </h2>

          <div className="flex flex-col sm:flex-row pb-6">
            <div className="w-full pb-6 sm:pb-0 sm:w-[30%]">
              <h3 className="text-[20px] sm:text-[24px] pb-4">Ingredients:</h3>
              <ul className="list-disc list-inside">
                {recipe.ingredients &&
                  recipe.ingredients.map((ingredient, index) => (
                    <li key={index} className="pb-1">
                      {ingredient}
                    </li>
                  ))}
              </ul>
            </div>
            <hr className="sm:ml-6 sm:mr-6 w-[1px] h-full bg-[#250D01]" />
            <div className="w-full sm:w-[70%]">
              <h3 className="text-[20px] sm:text-[24px] pb-4">Steps:</h3>
              <ol className="list-decimal list-inside">
                {recipe.steps &&
                  recipe.steps.map((step, index) => (
                    <li key={index} className="pb-1">
                      {step}
                    </li>
                  ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row pt-4">
        <div>
          <h3 className="font-semibold text-[20px]">Historical Description:</h3>
          <p> {recipe.historic_overview}</p>
        </div>
        {/** 
        <div>
          <h4>rubrik</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
            porro reprehenderit saepe dignissimos recusandae aliquid sit,
            asperiores natus harum provident.
          </p>
        </div>
        */}
      </div>
    </div>
  );
}
