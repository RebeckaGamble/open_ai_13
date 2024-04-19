import Link from "next/link";
import React from "react";

export default function Hero() {
  return (
    <div className="w-full h-[600px] bg-indigo-100">
      <div className="flex flex-col h-full justify-center items-center">
        <h3 className="font-semibold text-[20px]">Hero comp</h3>
        <div className="w-[300px] h-[200px] bg-green-300">Image</div>
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
        <h3 className="font-semibold pt-6">Today, what combination of flavor and mood do you feel drawn to?</h3>
        <div className="flex flex-row gap-10 py-10">
          <Link href={"/login"} className="px-6 py-0.5 border uppercase border-slate-50 bg-white rounded-sm hover:scale-105">
            Login
          </Link>
          <button className="px-6 py-0.5 border uppercase border-slate-50 bg-white rounded-sm hover:scale-105">
            Start
          </button>
        </div>
      </div>
    </div>
  );
}
