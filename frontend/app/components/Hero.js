import Link from "next/link";
import React from "react";

export default function Hero() {
  return (
    <div className="w-full h-[964px] bg-gradient-to-t from-[#642201] to-[#CA4502]">
      <div className="flex flex-col h-full justify-center items-center text-[#F8E8C0]">
        <h3 className="font-semibold uppercase text-[87.4px]">ChefMate</h3>
        <p className="max-w-[800px]">
          "Flavors combined with mood" is like a culinary symphony where taste
          buds dance to the rhythm of emotions. When you're happy, perhaps a
          fresh and invigorating flavor like citrus or mint enhances your
          uplifted mood even more. If you're feeling down, a comforting and warm
          flavor like chocolate or cinnamon might help brighten your day. Food
          and drink have the ability to both reflect and influence our emotions,
          making it a fascinating experience to explore the interplay between
          taste and mood.
        </p>
        <h3 className="font-semibold pt-6 text-2xl">
          Today, what combination of flavor and mood do you feel drawn to?
        </h3>
        <div className="flex flex-row py-8">
          <button className="px-10 py-3 uppercase bg-[#F8E8C0] rounded-[28px] text-[#250D01] font-semibold text-[32px] hover:scale-105">
            Start
          </button>
        </div>
      </div>
    </div>
  );
}
