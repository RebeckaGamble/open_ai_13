"use client";
import React from "react";
import {
  bowlOptions,
  budgetOptions,
  energyBoostOptions,
  herbGardenOptions,
  oatsOptions,
  salladOptions,
  smoothieOptions,
  snackOptions,
} from "../TipsContent";
import Image from "next/image";
import { LuPrinter } from "react-icons/lu";
import TooltipCheck from "@/app/components/ai/ToolTip";

//1
export function Budget() {
  return <RecipeCards recipes={budgetOptions} />;
}
//2
export function Bowl() {
  return <RecipeCards recipes={bowlOptions} />;
}
//3
export function Oats() {
  return <RecipeCards recipes={oatsOptions} />;
}
//4
export function Smoothie() {
  return <RecipeCards recipes={smoothieOptions} />;
}
//5
export function Snack() {
  return <RecipeCards recipes={snackOptions} />;
}
//6
export function Herb() {
  return <RecipeCards recipes={herbGardenOptions} />;
}
//7
export function Energy() {
  return <RecipeCards recipes={energyBoostOptions} />;
}
//8
export function Sallad() {
  return <RecipeCards recipes={salladOptions} />;
}

export function RecipeCards({ recipes }) {
  return (
    <div className="flex flex-col items-center w-full py-10 ">
      <div className="flex flex-col">
        {recipes.map((recipe, index) => (
          <div key={index} className="flex flex-col w-full items-center">
            <h1 className="text-[28px] md:text-[34px] font-semibold text-center pb-6">
              {recipe.pageTitle}
            </h1>
            <p className="max-w-[840px] xl:max-w-[1000px] lg:text-[18px] text-left pb-10">
              {recipe.text}
            </p>
            <div className="">
              <RecipeCard recipes={recipe} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function RecipeCard({ recipes }) {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 justify-between w-full ">
      {recipes.recipes &&
        recipes.recipes.map((recipes, index) => (
          <div
            key={index}
            className="relative h-auto shadow-xl border-2 border-gray-200 bg-white w-full px-4 xl:px-8 py-8 "
          >
            <div className="">
              <h3 className="font-semibold text-[20px] md:text-[24px] xl:text-[28px] text-center pt-2 pb-8">
                {recipes.recipe_title}
              </h3>
              <div className="flex flex-col sm:flex-row w-full">
                <div className="absolute right-4 top-4 flex flex-row ">
                  <TooltipCheck text={"Print out your favourite recipes"}>
                  <button onClick={() => handlePrint()}>
                    <LuPrinter />
                  </button>
                  </TooltipCheck>
                </div>
                <div className="w-full sm:w-[50%] h-auto pb-6">
                  <Image
                    src={recipes.src}
                    alt={recipes.recipe_title}
                    width={300}
                    height={300}
                    className="object-cover border-2 border-gray-600 hover:border-none rounded-xl h-[300px] w-full hover:object-contain hover:h-full "
                  />
                </div>
                <div className="sm:pl-6 h-auto w-full sm:w-[50%]">
                  <h4 className="font-semibold text-[20px] pb-4">
                    Ingredients:
                  </h4>
                  <ul className="pb-6 flex flex-col gap-2">
                    {recipes.ingredients.map((ingredient, index) => (
                      <li
                        key={index}
                        className="list-disc list-inside text-[16px]"
                      >
                        {ingredient}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="w-full ">
                <h4 className="font-semibold text-[20px] pb-4">
                  Instructions:
                </h4>
                <ol className="flex flex-col gap-2">
                  {recipes.instructions.map((instruction, index) => (
                    <li
                      key={index}
                      className="list-decimal list-inside text-[16px]"
                    >
                      {instruction}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default function Page({ params }) {
  return (
    <div className="w-full bg-white h-auto flex py-10 lg:py-20 px-4 items-center justify-center">
      <div className="w-full max-w-[90rem] mx-auto">
        {params.id === "1" && <Budget />}
        {params.id === "2" && <Bowl />}
        {params.id === "3" && <Oats />}
        {params.id === "4" && <Smoothie />}
        {params.id === "5" && <Snack />}
        {params.id === "6" && <Herb />}
        {params.id === "7" && <Energy />}
        {params.id === "8" && <Sallad />}
      </div>
    </div>
  );
}
