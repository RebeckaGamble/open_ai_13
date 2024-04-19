import React from "react";
import AiInputForm from "./AiInputForm";

export default function AiInputSection() {
  return (
    <>
      <div className="bg-pink-50 h-[400px]">
        <h3 className="font-semibold text-center text-[20px]">AI Form fields:</h3>
        <div>
          <AiInputForm />
        </div>
      </div>
    </>
  );
}
