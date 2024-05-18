"use client";
import Image from "next/image";
import React, { useState } from "react";
import { handleClick } from "../Hero";

export default function RecipeCards({
  recipes,
  onClick,
  handleSubmit,
  handleSurprise,
  initialButtonClicked,
}) {
  const openRecipe = (recipe) => {
    onClick(recipe);
  };

  const [isLoading, setIsLoading] = useState(false);
  const [tries, setTries] = useState(0);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const handleTryNew = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setTries(tries + 1);
    try {
      await handleSubmit(event);
    } catch (error) {
      console.error("Error fetching new recipe:", error);
    }
    setTimeout(() => {
      setIsLoading(false);
    }, 6500);
  };

  const handleSupriseNew = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTries(tries + 1);
    try {
      await handleSurprise(e);
    } catch (error) {
      console.log("Error fetching new surprise recipe", error);
    }
    setIsLoading(false);
  };

  const handleToRecipe = () => {
    const send = document.getElementById("#1");
    if (send) {
      const offset = send.offsetTop - 60;
      window.scrollTo({
        top: offset,
        behavior: "smooth",
      });
    }
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
              <div className="w-[30%] h-full mx-auto flex justify-center text-black ">
                <Image
                  src={recipe.imageUrl}
                  alt={"img not found"}
                  height={140}
                  width={200}
                  className="rounded-[10px] object-fit"
                />
              </div>
              <div className="flex flex-col w-[70%] justify-between ">
                <h2 className="font-semibold text-center text-[24px] leading-8 py-4">
                  {recipe.recipe_title}
                </h2>
                <div className="flex justify-center w-full">
                  <button
                    onClick={() => {
                      openRecipe(recipe);
                      handleToRecipe();
                    }}
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
        <div className="flex justify-center items-center text-2xl p-4">
          Generating new recipe...
        </div>
      )}
      {!isLoading && tries < 2 && (
        <>
          {initialButtonClicked === "generate" && (
            <button
              onClick={(event) => handleTryNew(event)}
              className="px-8 py-2 border uppercase bg-[#250D01] text-[#FFFFFF] rounded-full mt-4 text-lg font-semibold hover:scale-105"
            >
              Generate new
            </button>
          )}

          {initialButtonClicked === "surprise" && (
            <button
              onClick={(e) => handleSupriseNew(e)}
              className="px-8 max-h-[46px] py-2 border-[1px] border-[#250D01] uppercase bg-[#FCFBFA] text-[#250D01] ml-4 rounded-full text-lg font-semibold hover:scale-105"
            >
              New suprise!
            </button>
          )}
        </>
      )}

      {!isLoading && tries >= 2 && (
        <>
          {initialButtonClicked === "generate" && (
            <p className="font-semibold text-xl border-t-2 border-dotted border-black/30 w-full flex justify-center pt-3">
              Adjust the form settings to reveal your ideal recipe match!
            </p>
          )}

          {initialButtonClicked === "surprise" && (
            <p className="font-semibold text-xl border-t-2 border-dotted border-black/30 w-full flex justify-center pt-3">
              Try filling in the form to get a recipe that suits you better
            </p>
          )}
          <button
            onClick={handleClick}
            className="px-8 py-2 border uppercase bg-[#250D01] text-[#FFFFFF] rounded-full mt-4 text-lg font-semibold hover:scale-105"
          >
            Back to form
          </button>
        </>
      )}
    </div>
  );
}
