"use client";
import React, { useEffect, useRef, useState } from "react";
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
import { FaHeart, FaRegHeart } from "react-icons/fa";

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
    <div className="flex flex-col items-center py-10 justify-center">
      <div className="flex flex-col">
        {recipes.map((recipe, index) => (
          <div key={index} className="flex flex-col items-center">
            <h1 className="text-[28px] md:text-[34px] font-semibold text-center pb-6">
              {recipe.pageTitle}
            </h1>
            <p className="max-w-[840px] xl:max-w-[1000px] lg:text-[18px] text-left pb-10">
              {recipe.text}
            </p>
            <div className="flex flex-wrap gap-10 items-center justify-center">
              <RecipeCard recipe={recipe} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function RecipeCard({ recipe }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);
  const [saveRecipe, setSaveRecipe] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    // Calculate the total height of the content
    const height = contentRef.current.clientHeight;
    setContentHeight(height);
  }, [isExpanded]);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleToggleFavorite = async () => {
    setSaveRecipe(!saveRecipe); //toggle save
    console.log("saved?:", saveRecipe);
    /*
    try {
      const response = await fetch("http://localhost:4000/bookmarkRecipe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          recipe: recipe, // Pass the entire recipe
        }),
      });
      if (response.ok) {
        setSaveRecipe(!saveRecipe); //toggle save
      } else {
        console.error("Failed to toggle save recipe");
      }
    } catch (error) {
      console.error("Error toggling favorite recipe:", error);
    }*/
  };

  return (
    <>
      {recipe.recipes &&
        recipe.recipes.map((item, index) => (
          <div
            key={index}
            className={`recipe-card relative ${
              isExpanded ? "h-auto pb-12" : "h-[800px]"
            } bg-white w-[360px] sm:w-[520px] xl:w-[600px] px-4 py-6 rounded-[10px]`}
          >
            <div className="recipe-card ">
              {/* Your recipe card content here */}
              <div ref={contentRef} className="sm:px-4 md:px-8">
                <h3 className="font-semibold text-[24px] sm:text-[28px] text-center pt-2 pb-6">
                  {item.title}
                </h3>
                <div className=" absolute right-4 top-4 flex flex-row gap-2">
                  <button onClick={() => handleToggleFavorite(recipe)}>
                    {saveRecipe ? <FaRegHeart /> : <FaHeart />}
                  </button>
                  <button onClick={() => handlePrint()}>
                    <LuPrinter />
                  </button>
                </div>
                <div className="w-[70%] mx-auto items-center justify-center pb-6">
                  <Image
                    src={item.src}
                    alt={item.title}
                    width={300}
                    height={300}
                    className="object-cover w-full h-auto"
                  />
                </div>
                <h4 className="font-semibold text-[20px] pb-2">Ingredients:</h4>
                <ul className="pb-6">
                  {item.ingredients.map((ingredient, index) => (
                    <li
                      key={index}
                      className="list-disc list-inside text-[16px]"
                    >
                      {ingredient}
                    </li>
                  ))}
                </ul>
                <h4 className="font-semibold text-[20px] pb-2">
                  Instructions:
                </h4>
                <ol>
                  {isExpanded
                    ? item.instructions.map((instruction, index) => (
                        <li
                          key={index}
                          className="list-decimal list-inside text-[16px]"
                        >
                          {instruction}
                        </li>
                      ))
                    : item.instructions
                        .slice(0, 2)
                        .map((instruction, index) => (
                          <li
                            key={index}
                            className="list-decimal list-inside text-[16px]"
                          >
                            {instruction}
                          </li>
                        ))}
                </ol>
                {contentHeight > 700 && (
                  <button
                    onClick={toggleExpand}
                    className="text-blue-500 hover:underline absolute bottom-4"
                  >
                    {isExpanded ? "Read Less" : "Read More"}
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
    </>
  );
}

export default function Page({ params }) {
  return (
    <div className="w-full bg-[#E1DAD0] h-auto flex py-10 lg:py-20 px-4 items-center justify-center">
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
