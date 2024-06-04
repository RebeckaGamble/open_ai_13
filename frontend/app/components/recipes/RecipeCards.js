"use client";
import Image from "next/image";
import React, { useState } from "react";
import { handleClick } from "../Hero";
import TooltipCheck from "../ai/ToolTip";

export default function RecipeCards({
  recipes,
  onClick,
  handleSubmit,
  handleSurprise,
  initialButtonClicked,
  onBackToForm,
}) {
  const openRecipe = (recipe) => {
    onClick(recipe);
  };

  const [isLoading, setIsLoading] = useState(false);
  const [tries, setTries] = useState(0);

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
    setTimeout(() => {
      setIsLoading(false);
    }, 6500);
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

  const [bookmarkedStates, setBookmarkedStates] = useState(
    recipes.reduce((acc, recipe) => {
      acc[recipe.id] = false;
      return acc;
    }, {})
  );

  const handleBookmarkToggle = (recipeId) => {
    setBookmarkedStates((prevStates) => ({
      ...prevStates,
      [recipeId]: !prevStates[recipeId],
    }));
  };

  return (
    <div className="w-full max-w-[90rem] relative h-auto flex flex-col gap-6 lg:gap-2 px-4 items-center mx-auto">
      <div>
        <TooltipCheck text={"Close recipe section"}>
          <button
            onClick={onBackToForm}
            className="px-4 py-2 absolute top-[-20px] right-0 text-[#250D01] text-2xl font-semibold hover:text-red-500"
          >
            X
          </button>
        </TooltipCheck>
      </div>
      {recipes &&
        recipes.map((recipe, index) => (
          <div
            key={recipe.id || index}
            className="flex flex-col lg:justify-between lg:w-[700px] items-center justify-around h-auto mb-10"
          >
            <div className="max-w-[700px] mx-auto pb-6 text-center h-auto overflow-hidden">
              <h3 className="font-semibold text-[24px]">
                {recipe.motivation_heading}
              </h3>
              <p className="overflow-hidden line-clamp-5 py-2">
                {recipe.motivation}
              </p>
      
            </div>
            <div className="h-auto min-h-[340px] shadow-lg relative w-full max-w-[800px] sm:px-6 bg-[#FFFFFF] text-[#250D01] flex flex-col sm:flex-row p-3.5 sm:p-6 rounded-[10px] ">
              <div className="w-[40%] h-full mx-auto my-auto flex items-center justify-center text-black ">
                <Image
                  src={recipe.imageUrl}
                  alt={"img not found"}
                  height={140}
                  width={200}
                  className="rounded-[10px] object-cover w-full h-auto"
                />
              </div>
              <div className="flex flex-col w-full sm:w-[60%] justify-between sm:pl-6">
                <div>
                  <h2 className="font-semibold text-[24px] leading-8 text-center sm:text-left pt-4 sm:py-4">
                    {recipe.recipe_title}
                  </h2>
                  <div className="flex flex-row gap-1 justify-center sm:justify-start">
                    <p>
                      {recipe.time} - portions {recipe.portions} -{" "}
                    </p>
                    <p> {recipe.totalPrice} SEK</p>
                    {/*<p>{recipe.portions}</p>*/}
                  </div>
                </div>
                <div className="flex justify-center py-6 sm:justify-start">
                  <p>{recipe.budgetMotivation}</p>
                </div>
                <div className="h-20 w-full items-center flex justify-center">
                  <button
                    onClick={() => {
                      openRecipe(recipe);
                      handleToRecipe();
                    }}
                    className="bg-[#FFF] text-[#250D01] border border-[#250D01] rounded-full sm:bottom-6 sm:right-6 uppercase tracking-wider font-semibold absolute px-8 py-2 hover:scale-105"
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
              className="px-8 py-2 w-fit border uppercase bg-[#250D01] text-[#FFFFFF] rounded-full mt-4 text-lg font-semibold hover:scale-105"
            >
              Generate new
            </button>
          )}

          {initialButtonClicked === "surprise" && (
            <div className="flex items-center justify-center w-full ">
              <button
                onClick={(e) => handleSupriseNew(e)}
                className="px-8 w-fit max-h-[46px] py-2 border-[1px] border-[#250D01] uppercase text-[#250D01] ml-4 rounded-full text-lg font-semibold hover:scale-105"
              >
                New Suprise!
              </button>
            </div>
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
            onClick={onBackToForm}
            className="px-8 py-2 w-fit border uppercase bg-[#250D01] text-[#FFFFFF] rounded-full mt-4 text-lg font-semibold hover:scale-105"
          >
            Back to form
          </button>
        </>
      )}
    </div>
  );
}
