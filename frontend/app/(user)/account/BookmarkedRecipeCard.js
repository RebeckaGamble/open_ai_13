import TooltipCheck from "@/app/components/ai/ToolTip";
import Image from "next/image";
import React, { useState } from "react";

export default function BookmarkedRecipeCard({ title, src, id, alt, content }) {
  const [showContent, setShowContent] = useState(false);

  const toggleContent = () => {
    setShowContent((prevShowContent) => !prevShowContent);
  };

  const removeRecipe = async () => {
    try {
      const response = await fetch("http://localhost:4000/removeRecipe", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: id }), 
      });
      if (response.ok) {
        console.log("Recipe removed successfully");
      } else {
        console.error("Failed to remove recipe", response.statusText);
      }
    } catch (error) {
      console.error("Error removing recipe:", error.message);
    }
  };

  return (
    <div
      className={`border relative flex flex-col items-center justify-center gap-6 ${
        showContent ? "h-auto w-full" : "h-[440px] w-[480px]"
      } p-10 rounded-[30px] bg-[#E1DAD0]`}
    >
      <div className=" absolute top-4 right-4">
        <TooltipCheck text={"Remove saved recipe from your account"} >
        <button className="flex items-start justify-end w-10 h-10 font-semibold text-[20px] hover:text-red-600" onClick={removeRecipe}>
          X
        
        </button>
        </TooltipCheck>
      </div>
      {content.recipe && (
        <>
      <Image src={content.recipe.imageUrl} alt={alt} height={200} width={200} className="rounded-[10px] w-auto" />{" "}
        <h3 className="font-semibold text-2xl text-center w-full">
          {content.recipe.recipe_title}
        </h3>
        </>
      )}
      {showContent && (
        <>
          <div className="flex flex-col lg:flex-row pb-6">
            <div className="w-full pb-6 lg:pb-0 lg:w-[33%]">
              <h3 className="text-[20px] lg:text-[24px] pb-4">Ingredients:</h3>
              <ul className="list-disc list-inside text-[16px]">
                {content.recipe.ingredients &&
                  content.recipe.ingredients.map((ingredient, index) => (
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
                {content.recipe.steps &&
                  content.recipe.steps.map((step, index) => (
                    <li key={index} className="pb-1">
                      {step}
                    </li>
                  ))}
              </ol>
            </div>
          </div>
        </>
      )}
      <button
        onClick={toggleContent}
        className="rounded-full bg-[#0C0603] tracking-wider text-white px-8 py-2"
      >
        {showContent ? "Hide" : "Show"}
      </button>
    </div>
  );
}
