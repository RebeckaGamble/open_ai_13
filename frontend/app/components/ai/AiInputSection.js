import React from "react";
import AiInputForm from "./AiInputForm";

export default function AiInputSection() {
  return (
    <>
      <div id="ai" className="bg-[#FFFFFF] px-4 h-auto pt-10 lg:pt-20 flex flex-col items-center">
        <div>
          <AiInputForm />
        </div>
      </div>
    </>
  );
}
