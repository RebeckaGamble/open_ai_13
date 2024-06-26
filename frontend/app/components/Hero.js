"use client";
import React from "react";
import heroBg from "../../public/hero2.png";
import chefMate from "../../public/chefMate.png";
import Image from "next/image";
import chef from "../../public/chefbot_animated.gif";

export const handleClick = () => {
  const aiSection = document.getElementById("ai");
  if (aiSection) {
    const offset = aiSection.offsetTop - 60; //the nav
    window.scrollTo({
      top: offset,
      behavior: "smooth",
    });
  }
};

export default function Hero() {
  return (
    <div className="relative w-full pb-10 h-[1060px] px-4">
      <div
        className="absolute inset-0 top-[60px] bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg.src})` }}
      ></div>

      <div className="relative z-[9999] top-[5%] w-full flex h-[600px] justify-center items-center">
        <Image
          className="z-[9999] object-contain"
          src={chef}
          alt="ChefMate"
          height={800}
          width={800}
        />
      </div>
      <div className="absolute top-10 left-0 right-0 z-[10000] flex flex-col h-full justify-around sm:top-[42%] sm:h-[488px] w-auto max-w-[855px] mx-auto sm:justify-center items-center text-[#250D01]">
        <div className="flex flex-col items-center">
          <div className="pb-6">
            <Image src={chefMate} alt="ChefMate" />
          </div>
        </div>
        <div className="max-w-[855px] pb-[180px] sm:pb-0 flex flex-col items-center ">
          <h3 className="font-semibold text-[38px] sm:text-[42px] text-center max-w-[760px] pb-10 leading-[52px] ">
            A place that you can find inspiration for your recipe
          </h3>
          <div className="text-[18px] text-center sm:leading-7">
            <p>
              Hey there! Welcome to ChefMate, your go-to buddy in the kitchen!{" "}
            </p>
            <p>
              I'm here to sprinkle some culinary magic into your life, serving
              up scrumptious recipes and endless inspiration.{" "}
            </p>
            <p>Let's create something delicious together!</p>
          </div>
          <div className="pt-10">
            <button
              onClick={handleClick}
              className="px-8 py-2 bg-[#0C0603] rounded-full text-[#FFFFFF] font-semibold text-[24px] hover:scale-105"
            >
              Let's Start!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
