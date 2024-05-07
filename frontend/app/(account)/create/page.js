import React from "react";
import CreateForm from "./CreateForm";

export const metadata = {
  title: "Create Account",
};

export default function page() {
  return (
    <div className="flex justify-center py-10 items-center w-full h-screen min-h-[calc(100vh-308px)] bg-[#FFFFFF] relative">
      <div className="">
        <CreateForm />
      </div>
    </div>
  );
}
