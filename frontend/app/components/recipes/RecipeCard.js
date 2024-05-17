"use client";

import React from "react";
import Image from "next/image";
import testImg from "/public/img/test_img.jpg";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useState } from "react";

export default function RecipeCard({ recipes }) {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const handleBookmark = async () => {
    try {
      const response = await fetch("http://localhost:4000/bookmarks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ recipe: recipes }),
      });
      console.log(response);
      console.log(recipes);

      if (response.ok) {
        setIsBookmarked(true);
      } else {
        console.error("Failed to bookmark recipe:", response.statusText);
      }
    } catch (error) {
      console.error("Error bookmarking recipe:", error);
    }
  };

  if (!recipes) {
    return <div>No recipe available</div>;
  }

  return (
    <div
      id="#1"
      className="w-full px-4 max-w-[90rem] flex flex-col mx-auto bg-[#E1DAD0] text-[#250D01] rounded-[10px] p-4 md:p-8 "
    >
      <div className="flex flex-col lg:flex-row">
        <div className="w-full max-w-[500px] flex flex-col mx-auto lg:w-[30%] pb-10 lg:pb-6">
          <Image
            src={recipes.imageUrl}
            alt={"generat img"}
            height={140}
            width={200}
            className="rounded-[10px] object-fit bg-[#CBB89D] "
          />
          <div
            className="flex flex-row items-center pt-1"
            onClick={handleBookmark}
          >
            <span className="pr-2">
              {isBookmarked ? <FaHeart size={18} /> : <FaRegHeart size={18} />}
            </span>
            Save recipe
          </div>
        </div>
        <div className="w-full lg:w-[70%] lg:ml-6 flex flex-col">
          <h2 className="w-full pb-6 text-[24px] md:text-[30px] font-semibold text-left">
            {recipes.recipe_title}
          </h2>

          <div className="flex flex-col lg:flex-row pb-6">
            <div className="w-full pb-6 lg:pb-0 lg:w-[33%]">
              <h3 className="text-[20px] lg:text-[24px] pb-4">Ingredients:</h3>
              <ul className="list-disc list-inside text-[16px]">
                {recipes.ingredients &&
                  recipes.ingredients.map((ingredient, index) => (
                    <li key={index} className="pb-1">
                      {ingredient}
                    </li>
                  ))}
              </ul>
            </div>
            <hr className="sm:ml-4 sm:mr-4 w-[1px] h-full bg-[#250D01]" />
            <div className="w-full lg:w-[67%]">
              <h3 className="text-[20px] lg:text-[24px] pb-4">Steps:</h3>
              <ol className="list-decimal list-inside text-[16px]">
                {recipes.steps &&
                  recipes.steps.map((step, index) => (
                    <li key={index} className="pb-1">
                      {step}
                    </li>
                  ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row pt-4">
        <div>
          <h3 className="text-[20px] lg:text-[24px] pb-4">
            Historical Description:
          </h3>
          <p className="text-[16px]">{recipes.historic_overview}</p>
        </div>
      </div>
    </div>
  );
}
