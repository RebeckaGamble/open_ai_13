"use client";

import React from "react";
import Image from "next/image";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useState } from "react";
import { useLoginContext } from "@/app/components/LoginContext";
import chef2 from "../../../public/chefbot2.png";

export default function RecipeCard({ recipes, isBookmarked, onBookmark }) {
  //const [isBookmarked, setIsBookmarked] = useState(false);
  const { loggedIn, username } = useLoginContext();

  const handleBookmark = async () => {
    // Check if the user is logged in
    if (!loggedIn) {
      alert("Please log in to bookmark recipes.");
      return;
    }
   // setIsBookmarked(false);
   onBookmark()
    try {
      const response = await fetch("http://localhost:4000/bookmarks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ recipe: recipes, username }),
      });

      if (!response.ok) {
        console.error("Failed to bookmark recipe:", response.statusText);
      }
      /*
      if (response.ok) {
        setIsBookmarked(true);
      } else {
        console.error("Failed to bookmark recipe:", response.statusText);
      }
      */
    } catch (error) {
      console.error("Error bookmarking recipe:", error);
    }
  };

  if (!recipes) {
    return <div>No recipe available</div>;
  }

  return (
    <div
      id={`recipe-${recipes.id}`}
      className="w-full max-w-[700px] lg:max-w-[1000px] shadow-lg flex flex-col mx-auto bg-[#fff] text-[#250D01] rounded-[10px] p-4 md:p-8 "
    >
      <div id={"#1"} className="flex flex-col ">
        <div className="w-full flex flex-col lg:flex-row">
          <div className="w-full flex flex-col lg:flex-row mx-auto h-auto lg:pb-6">
            <div className="w-full flex max-w-[380px] flex-col mx-auto lg:w-[50%]">
              <Image
                src={recipes.imageUrl}
                alt={"generat img"}
                height={140}
                width={200}
                className="rounded-[10px] w-full h-auto object-contain "
              />
            </div>
            <div className="w-full hidden relative lg:flex pl-10 flex-col">
              <h2 className="w-full flex text-[24px] md:text-[30px] pt-[14%] font-semibold text-center lg:text-left">
                {recipes.recipe_title}
              </h2>
              <div className="absolute top-[-20px] right-[-10px]">
                <Image src={chef2} alt="chefmate2" width={120} height={120} />
              </div>
              <p className="pb-10">
                Time to cook: {recipes.time} - Portions: {recipes.portions}
              </p>
              <p>{recipes.budgetMotivation}</p>
              <div className="flex flex-row items-center absolute bottom-0 right-0 justify-center sm:justify-end">
                <button
                  className={`border px-8 py-2 w-fit border-[#250D01] rounded-full items-center flex hover:font-semibold ${isBookmarked ? "border-none" : "border"}`}
                  onClick={handleBookmark}
                >
                  <span className="pr-2">
                    {isBookmarked ? (
                      <FaHeart size={18} />
                    ) : (
                      <FaRegHeart size={18} />
                    )}
                  </span>
                  {isBookmarked ? "" : "Save recipe"}
                </button>
              </div>
            </div>
            <div className="flex flex-col w-[380px] mx-auto pt-1 lg:hidden">
              <button
                onClick={handleBookmark}
                className="flex flex-row items-center hover:font-semibold"
              >
                <span className="pr-2">
                  {isBookmarked ? (
                    <FaHeart size={18} />
                  ) : (
                    <FaRegHeart size={18} />
                  )}
                </span>
                {isBookmarked ? "" : "Save recipe"}
              </button>

              <p className="flex pt-2 gap-2 pb-6 flex-wrap">
              <span>Time to cook: {recipes.time}</span> - <span>Portions: {recipes.portions}</span>
              </p>
             {/**  <p className="py-6">{recipes.budgetMotivation}</p>*/}
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col">
          <h2 className="w-full lg:hidden pb-10 text-[24px] md:text-[30px] font-semibold text-center">
            {recipes.recipe_title}
          </h2>

          <div className="flex flex-col lg:flex-row pb-6">
            <div className="w-full pb-6 lg:pb-0 lg:w-[35%]">
              <h3 className="text-[20px] lg:text-[24px] font-semibold pb-4">
                Ingredients:
              </h3>
              <ul className="list-disc list-inside text-[16px] flex flex-col gap-3">
                {recipes.ingredients &&
                  recipes.ingredients.map((ingredient, index) => (
                    <li key={index} className="leading-5">
                      <span className="">{ingredient.ingredient}</span>{" "}
                      {ingredient.amount} {ingredient.unit}{" "}
                      {/*<span className="inline-block"> {ingredient.price} SEK</span>*/}
                    </li>
                  ))}
              </ul>
              <p className="font-semibold pt-4 lg:hidden">
                Total price:{" "}
                <span className="font-bold"> {recipes.totalPrice} SEK</span>
              </p>
            </div>
            <hr className="sm:ml-4 sm:mr-4 w-[1px] lg:h-[120%] h-full bg-[#250D01]" />
            <div className="w-full lg:w-[65%]">
              <h3 className="text-[20px] lg:text-[24px] font-semibold pb-4">
                Steps:
              </h3>
              <ol className="list-decimal list-inside text-[16px] flex flex-col gap-3">
                {" "}
                {/*list-decimal*/}
                {recipes.steps &&
                  recipes.steps.map((step, index) => (
                    <li key={index} className="leading-6">
                      {step}
                    </li>
                  ))}
              </ol>

              <p className=" lg:hidden font-semibold pt-4">
                Total time{" "}
                <span className="font-bold"> {recipes.time} min</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:flex flex-row pb-10 text-[18px] relative leading-6">
        <p className="font-semibold absolute">
          Total price:{" "}
          <span className="font-bold"> {recipes.totalPrice} SEK</span>
        </p>

        <p className="font-semibold absolute left-[37%]">
          Total time <span className="font-bold"> {recipes.time} </span>
        </p>
      </div>
      <div className="flex flex-col pt-10 gap-6">
        <div className="flex flex-col">
          <h3 className="text-[20px] font-semibold lg:text-[24px] pb-2">
            Price explanation
          </h3>
          <p className="text-[16px]">{recipes.budgetExplanation}</p>
        </div>
        <div className="flex flex-col">
          <h3 className="text-[20px] font-semibold lg:text-[24px] pb-2">
            Historical Description:
          </h3>
          <p className="text-[16px]">{recipes.historic_overview}</p>
        </div>
      </div>
    </div>
  );
}
