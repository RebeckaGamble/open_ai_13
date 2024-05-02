import React from "react";
import RecipeCard from "./RecipeCard";

export default function RecipeOutput() {
  return (
    <>
      <div className="bg-[#F8E8C0] h-auto py-10">
        <h3 className="font-semibold text-center text-[20px]">RecipeOutput:</h3>
        <div>
          <RecipeCard />
        </div>
      </div>
    </>
  );
}
