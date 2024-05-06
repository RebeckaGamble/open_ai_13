"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import testImg from "../../../public/img/test_img.jpg";

export default function RecipeCards({ recipes, onClick }) {
  //   const [recipe, setRecipe] = useState(null);

  function openRecipe() {
    if (recipes) {
      onClick(recipes);
    }
  }

  return (
    <div className="w-full max-w-[90rem] h-auto flex flex-col items-center justify-center mx-auto">
      {recipes.recipes.map((recipe, index) => (
        <div key={index} recipe={recipe}>
          <div>
            <h3>{recipe.motivation_heading}</h3>
            <p>{recipe.motivation}</p>
          </div>
          <div className="h-auto w-[320px] bg-[#FFFFFF] text-[#250D01] flex flex-col p-6 rounded-[10px] ">
            <div className="w-full mx-auto flex justify-center">
              <Image
                src={testImg}
                alt="testImg"
                height={140}
                width={180}
                className="rounded-[10px] object-fit"
              />
            </div>
            <h2 className="font-semibold text-center text-[24px] py-4">
              {recipe.recipe_title}
            </h2>
            <div className="flex justify-center w-full">
              <button
                onClick={openRecipe}
                className="bg-[#CBB89D] text-[#250D01] rounded-full px-6 py-1 hover:font-semibold"
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
