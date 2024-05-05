import React from "react";
import AiInputForm from "./AiInputForm";

export default function AiInputSection() {
  return (
    <>
      <div id="ai" className="bg-[#FFFFFF] h-auto py-10 lg:py-20 flex flex-col items-center px-4">
        <div>
          <AiInputForm />
        </div>
      </div>
    </>
  );
}
