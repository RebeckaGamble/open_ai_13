import React from "react";
import RecipeCard from "./RecipeCard";

export default function RecipeOutput() {
  return (
    <>
      <div className="bg-blue-50 h-[400px]">
        <h3 className="font-semibold text-center text-[20px]">RecipeOutput:</h3>
        <div>
          <RecipeCard />
        </div>
      </div>
    </>
  );
}
