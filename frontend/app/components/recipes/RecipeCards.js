"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import testImg from "../../../public/img/test_img.jpg";
 
import { food } from "./recipeImagesOptions";

export default function RecipeCards({ recipes, onClick, recipeImages }) {
  const openRecipe = (recipe) => {
    onClick(recipe);
  };

  const [isExpanded, setIsExpanded] = useState(false);
  const [randomImages, setRandomImages] = useState([])

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

    // Function to get a random item from an array
    const getRandomItem = (array) => {
      return array[Math.floor(Math.random() * array.length)];
    };

  return (
    <div className="w-full max-w-[90rem] h-auto flex flex-wrap gap-6 lg:gap-2  xl:justify-around px-4 items-center justify-around mx-auto">
      {recipes.recipes.map((recipe, index) => (
        <div
          key={index}
          recipe={recipe}
          className="flex flex-col items-center justify-around h-[600px]"
        >
          <div className=" w-[324px] h-auto overflow-hidden border-t md:border-none border-slate-600 pt-6">
            <h3 className="font-semibold text-[18px]">
              {recipe.motivation_heading}
            </h3>
            <p className="overflow-hidden line-clamp-5 py-2">
              {recipe.motivation}
            </p>
          </div>
          <div className="h-[360px] relative w-[320px] bg-[#FFFFFF] text-[#250D01] flex flex-col p-6 rounded-[10px] lg:hover:scale-105">
            <div className="w-full h-1/2 mx-auto flex justify-center text-black">
              {/**mappa recipeImages beroende på  */}
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
              {/** 
              <Image
                src={testImg}
                alt="testImg"
                height={140}
                width={180}
                className="rounded-[10px] object-fit"
              />
              */}
            </div>
            <h2 className="font-semibold text-center text-[24px] leading-8 py-4">
              {recipe.recipe_title}
            </h2>
            <div className="flex justify-center w-full ">
              <button
                onClick={() => openRecipe(recipe)}
                className="bg-[#CBB89D] text-[#250D01] rounded-full bottom-6 absolute px-8 py-1.5 hover:font-semibold"
              >
                OPEN
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
