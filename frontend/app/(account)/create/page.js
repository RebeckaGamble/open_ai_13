import React from "react";
import CreateForm from "./CreateForm";

export const metadata = {
  title: "Create Account",
};

export default function page() {
  return (
    <div className="flex justify-center pt-20 pb-10 items-center w-full min-h-[calc(100vh-328px)] bg-[#FFFFFF]">
      <div className="">
        <CreateForm />
      </div>
    </div>
  );
}
