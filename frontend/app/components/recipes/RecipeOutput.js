import React from "react";
import RecipeCard from "./RecipeCard";
import RecipeCards from "./RecipeCards";

export default function RecipeOutput() {
  return (
    <>
      <div className="bg-[#8A2F02] h-[400px]">
        <h3 className="font-semibold text-center text-[20px]">RecipeOutput:</h3>
        <div>
          <RecipeCards />
        </div>
      </div>
      <div className="bg-[#F8E8C0] h-[400px]">
        <h3 className="font-semibold text-center text-[20px]">RecipeOutput:</h3>
        <div>
          <RecipeCard />
        </div>
      </div>
    </>
  );
}
