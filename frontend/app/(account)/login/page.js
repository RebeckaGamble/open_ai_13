import React from "react";
import LoginForm from "./LoginForm";

export const metadata = {
  title: "Login",
};

export default function page() {
  return (
    <div className="w-full h-auto min-h-[calc(100vh-406px)] bg-white py-10 flex items-center justify-center mx-auto">
      <LoginForm />
    </div>
  );
}
