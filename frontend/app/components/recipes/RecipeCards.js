"use client";
import Image from "next/image";
import React, { useState } from "react";
import { food } from "./recipeImagesOptions";

export default function RecipeCards({
  recipes,
  onClick,
  recipeImages,
  handleSubmit,
}) {
  const openRecipe = (recipe) => {
    onClick(recipe);
  };

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  // Function to get a random item from an array
  const getRandomItem = (array) => {
    return array[Math.floor(Math.random() * array.length)];
  };
  const recipeObject = [...recipes];

  return (
    <div className="w-full max-w-[90rem] h-auto flex flex-wrap gap-6 lg:gap-2  xl:justify-around px-4 items-center justify-around mx-auto">
      {recipes && (
        <div className="flex flex-col items-center justify-around h-[600px]">
          <div className="w-[324px] h-auto overflow-hidden border-t md:border-none border-slate-600 pt-6">
            <h3 className="font-semibold text-[18px]">
              {recipes.motivation_heading}
            </h3>
            <p className="overflow-hidden line-clamp-5 py-2">
              {recipes.motivation}
            </p>
          </div>
          <div className="h-[360px] relative w-[320px] bg-[#FFFFFF] text-[#250D01] flex flex-col p-6 rounded-[10px] lg:hover:scale-105">
            <div className="w-full h-1/2 mx-auto flex justify-center text-black">
              {/** Map recipeImages based on food preferences */}
              {recipeImages &&
                food.map((pref) => {
                  if (pref[recipeImages]) {
                    const randomImage = getRandomItem(pref[recipeImages]);
                    return (
                      <Image
                        key={randomImage.id}
                        src={randomImage.src}
                        alt={"not found"}
                        height={140}
                        width={180}
                        className="rounded-[10px] object-fit"
                      />
                    );
                  }
                })}
            </div>
            <h2 className="font-semibold text-center text-[24px] leading-8 py-4">
              {recipes.recipe_title}
            </h2>
            <div className="flex justify-center w-full">
              <button
                onClick={() => openRecipe(recipes)}
                className="bg-[#CBB89D] text-[#250D01] rounded-full bottom-6 absolute px-8 py-1.5 hover:font-semibold"
              >
                OPEN
              </button>
            </div>
          </div>
          <button
            onClick={handleSubmit}
            className="px-8 py-2 border uppercase bg-[#250D01] text-[#FFFFFF] rounded-full mt-4 text-lg font-semibold hover:scale-105"
          >
            Try new
          </button>
        </div>
      )}
    </div>
  );
}
