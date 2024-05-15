"use client";
import React, { useState, useContext } from "react";
import { useRouter } from "next/navigation";
import { IoEye, IoEyeOff } from "react-icons/io5";
import Link from "next/link";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { LoginContext } from "@/app/components/LoginContext";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { setLoggedIn, login } = useContext(LoginContext);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:4000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      });
      if (response.ok) {
        const data = await response.json();
        router.push("/account");
        console.log("Login succeded");
        login();
        console.log(setLoggedIn, "Du är inloggad!");
      } else {
        console.error("Invalid username or password!");
        setError("Invalid password or username");
      }
    } catch (error) {
      console.error("Error logging in:", error.message);
      setError("Failed to login");
    }
  };

  function togglePasswordVisibility() {
    setShowPassword(!showPassword);
  }

  function handleChangePassword(e) {
    const newPassword = e.target.value;
    setPassword(newPassword);
  }

  return (
    <>
      <div className="px-4 bg-gradient-to-t bg-white">
        <div className="pt-5 flex flex-col mx-auto h-screen">
          <form
            action=""
            className="flex flex-col gap-2 mx-auto mt-28
          rounded-lg bg-[#F3F2F2] p-4 mb-5 shadow-md"
          >
            <h3 className="font-semibold pt-5 text-center text-3xl ">Login</h3>

            <div className="pt-4 text-center">
              <p className="pb-3">
                <span style={{ color: "black" }}>Don't have an account? </span>
                <Link href="/create" className="text-blue-700">
                  Register
                </Link>
              </p>
            </div>

            <div className="mb-6 flex flex-col gap-1">
              <a
                href="https://www.facebook.com/?locale=sv_SE"
                target="_blank"
                rel="noreferrer"
                className="text-blue-700 m-2 flex items-center justify-center  bg-[white] rounded-full shadow-md shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
                style={{ width: "300px", height: "40px" }}
              >
                <FaFacebook size={24} />
                <span className="ml-3 text-black">Login With Facebook</span>
              </a>

              <a
                href="https://myaccount.google.com/"
                target="_blank"
                rel="noreferrer"
                className="m-2 flex items-center justify-center bg-white rounded-full shadow-md shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
                style={{ width: "300px", height: "40px" }}
              >
                <FaGoogle size={24} />
                <span className="ml-3 text-black">Login With Google</span>
              </a>
            </div>

            <div className="flex justify-center items-center mb-4">
              <div className="border-b border-white bg-white w-2/6"></div>
              <h3 className="text-center mx-4 ">OR</h3>
              <div className="border-b border-white w-2/6"></div>
            </div>

            <input
              type="text"
              value={username}
              required
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              className="bg-white flex justify-center items-center  border-[1px] border-[#E4DED6] 
                rounded-md pl-[16px] py-2 placeholder-black outline-none"
            />
            <div className="flex items-center mt-0 bg-white border border-white justify-between rounded-md px-4">
              <input
                className="bg-white rounded-md py-2 placeholder-black outline-none"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={handleChangePassword}
              />
              {showPassword ? (
                <IoEyeOff
                  className="Eye bg-white color-gray-900 cursor-pointer"
                  onClick={togglePasswordVisibility}
                />
              ) : (
                <IoEye
                  className=" Eye-on color-gray-900 fill-gray-400 cursor-pointer"
                  onClick={togglePasswordVisibility}
                />
              )}
            </div>

            {error && (
              <p className="text-red-500 text-center">
                Invalid password or username
              </p>
            )}
            <div className="max-w-full mt-4 flex justify-center items-center">
              <Link href="/">
                <button
                  onClick={handleSubmit}
                  className="bg-white text-black 
            w-[190px] h-[48px] rounded-xl font-bold font-inter text-[16px]"
                >
                  Log in
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
