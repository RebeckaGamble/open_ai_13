"use client";
import Image from "next/image";
import React, { useState } from "react";
import { food } from "./recipeImagesOptions";

export default function RecipeCards({
  recipes,
  onClick,
  recipeImages,
  handleSubmit,
  isLoading,
}) {
  const openRecipe = (recipe) => {
    onClick(recipe);
  };

  //const [isLoading, setIsLoading] = useState(false);
  const [tries, setTries] = useState(0);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  // Function to get a random item from an array
  const getRandomItem = (array) => {
    return array[Math.floor(Math.random() * array.length)];
  };

  /**
     const handleTryNew = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setTries(tries + 1);
    try {
      await handleSubmit(event);
    } catch (error) {
      console.error("Error fetching new recipe:", error);
    }
    setIsLoading(false);
  };
   */
  const handleTryNew = (event) => {
    event.preventDefault();
    //setIsLoading(true);
    setTries(tries + 1);
    handleSubmit(event);
   // setIsLoading(false);
  };

  return (
    <div className="w-full max-w-[90rem] h-auto flex flex-col gap-6 lg:gap-2 py-6  px-4 items-center mx-auto">
      {recipes &&
        recipes.map((recipe, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-around h-auto mb-10"
          >
            <div className="w-full max-w-[700px] pb-6 text-center mx-auto h-auto overflow-hidden border-t md:border-none border-slate-600 pt-6">
              <h3 className="font-semibold text-[24px]">
                {recipe.motivation_heading}
              </h3>
              <p className="overflow-hidden line-clamp-5 py-2">
                {recipe.motivation}
              </p>
            </div>
            <div className="h-[260px] relative w-full max-w-[800px] px-6 bg-[#FFFFFF] text-[#250D01] flex flex-row p-6 rounded-[10px] lg:hover:scale-105">
              <div className="w-[30%] h-full mx-auto flex justify-center text-black">
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
              <div className="flex flex-col w-[70%] justify-between ">
                <h2 className="font-semibold text-center text-[24px] leading-8 py-4">
                  {recipe.recipe_title}
                </h2>
                <div className="flex justify-center w-full">
                  <button
                    onClick={() => openRecipe(recipe)}
                    className="bg-[#CBB89D] text-[#250D01] rounded-full bottom-6 right-6 text-[24px] absolute px-8 py-2 hover:scale-105 hover:font-semibold"
                  >
                    Open recipe
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-center w-full h-10 bg-green-200 items-center text-2xl p-4">
            Generating new recipe...
          </div>
        )}
      {!isLoading && tries < 2 && (
        <button
          onClick={(event) => handleTryNew(event)}
          className="px-8 py-2 border uppercase bg-[#250D01] text-[#FFFFFF] rounded-full mt-4 text-lg font-semibold hover:scale-105"
        >
          Try new
        </button>
      )}

    </div>
  );
}
