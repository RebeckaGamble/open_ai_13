import React from "react";
import CreateForm from "./CreateForm";

export const metadata = {
  title: "Create Account",
};

export default function page() {
  return (
    <div className="flex justify-center py-10 items-center w-full h-[100vh] min-h-[calc(100vh-260px)] bg-[#F8E8C0] relative">
      <div className="">
        <CreateForm />
      </div>
    </div>
  );
}
