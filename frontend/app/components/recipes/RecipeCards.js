"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import testImg from "../../../public/img/test_img.jpg";

export default function RecipeCards({ recipe, onClick }) {
  //   const [recipe, setRecipe] = useState(null);

  function openRecipe() {
    // Your existing code...
    if (recipe) {
      onClick(recipe);
    }
  }

  return (
    <div className="w-full max-w-[90rem] h-auto flex flex-col items-center justify-center mx-auto">
      {recipe && (
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
            {recipe.title}
          </h2>
          {/** 
          <div className="pb-4">
            <h3 className="font-semibold text-[20px]">Ingredients:</h3>
            <ul>
              {recipe.ingredients &&
                recipe.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
            </ul>
          </div>
          <div className="pb-4">
            <h3 className="font-semibold text-[20px]">Steps:</h3>
            <ol>
              {recipe.steps &&
                recipe.steps.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
            </ol>
          </div>
          <div>
            <h3 className="font-semibold text-[20px]">
              Historical Description:
            </h3>
            <p> {recipe.historic_overview}</p>
          </div>
          */}
          <div className="flex justify-center w-full">
            <button
              onClick={openRecipe}
              className="bg-[#CBB89D] text-[#250D01] rounded-full px-6 py-1 hover:font-semibold"
            >
              OPEN
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
