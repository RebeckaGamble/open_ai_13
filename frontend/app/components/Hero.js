"use client";
import React from "react";

export default function Hero() {
  const handleClick = () => {
    const aiSection = document.getElementById("ai");
    if (aiSection) {
      const offset = aiSection.offsetTop - 60; //the nav
      window.scrollTo({
        top: offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-full h-[964px] bg-gradient-to-t from-[#F3F2F2] to-[#E4DED6] px-4">
      <div className="flex flex-col h-full justify-center items-center text-[#250D01]">
        <h3 className="font-semibold uppercase text-6xl pb-6 md:text-[87.4px]">
          ChefMate
        </h3>
        <p className="max-w-[800px] sm:leading-7">
          "Flavors combined with mood" is like a culinary symphony where taste
          buds dance to the rhythm of emotions. When you're happy, perhaps a
          fresh and invigorating flavor like citrus or mint enhances your
          uplifted mood even more. If you're feeling down, a comforting and warm
          flavor like chocolate or cinnamon might help brighten your day. Food
          and drink have the ability to both reflect and influence our emotions,
          making it a fascinating experience to explore the interplay between
          taste and mood.
        </p>
        <h3 className="font-semibold text-center py-6 text-2xl max-w-[540px]">
          Today, what combination of flavor and mood do you feel drawn to?
        </h3>
        <div className="flex flex-row">
          <button
            onClick={handleClick}
            className="px-8 py-2 uppercase bg-[#250D01] rounded-full text-[#FFFFFF] font-semibold text-[24px] hover:scale-105"
          >
            Start
          </button>
        </div>
      </div>
    </div>
  );
}
