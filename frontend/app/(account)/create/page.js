import React from "react";
import CreateForm from "./CreateForm";

export const metadata = {
  title: "Create Account",
};

export default function page() {
  return (
    <div className="flex justify-center items-center w-full h-screen bg-[#F8E8C0] relative">
      <div className="">
        <CreateForm />
      </div>
    </div>
  );
}
