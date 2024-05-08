"use client";
import React from "react";
import heroBg from "../../public/heroimage.png";

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
    <div className="relative w-full h-[964px] px-4">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg.src})` }}
      ></div>
      <div className="relative flex flex-col top-[11%] h-full justify-center items-center text-[#250D01]">
        <h3 className="font-semibold uppercase text-6xl pb-6 md:text-[87.4px]">
          ChefMate
        </h3>
        <p className="max-w-[800px] sm:leading-7">
          Hey there! Welcome to ChefMate, your go-to buddy in the kitchen! I'm
          here to sprinkle some culinary magic into your life, serving up
          scrumptious recipes and endless inspiration. Let's create something
          delicious together!
        </p>
        {/** 
        <h3 className="font-semibold text-center py-6 text-2xl max-w-[540px]">
          Today, what combination of flavor and mood do you feel drawn to?
        </h3>
        */}
        <div className="flex flex-row pt-10">
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
