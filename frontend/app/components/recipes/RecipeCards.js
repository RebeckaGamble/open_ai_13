"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import testImg from "../../../public/img/test_img.jpg";

export default function RecipeCards({ recipe }) {
  //   const [recipe, setRecipe] = useState(null);

  return (
    <div className="w-full h-auto flex flex-col items-center justify-center mx-auto">
      {recipe && (
        <div className="h-auto w-full flex flex-col p-6 ">
          <div className="w-full">
            <Image src={testImg} alt="testImg" height={200} width={300} className="rounded-[10px]" />
           
          </div>
          <h2 className="font-semibold text-[24px] pb-4">{recipe.title}</h2>
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
        </div>
      )}
    </div>
  );
}
