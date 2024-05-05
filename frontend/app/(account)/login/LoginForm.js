"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { IoEye, IoEyeOff } from "react-icons/io5";
import Link from "next/link";
import { FaGoogle, FaFacebook} from "react-icons/fa";
import Checkbox from "@/app/components/ai/Checkbox";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false); // Tillståndsvariabel för att visa/dölja lösenordet

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:4000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
      if (response.ok) {
        const data = await response.json();
        router.push("/");
        console.log("Login succeded");
      } else {
        console.error("Login failed");
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
      <div className="px-4 bg-[#F5B25E]">
        <div className="pt-5 flex flex-col mx-auto h-screen">
        <form
          action=""
          className="flex flex-col gap-2 mx-auto mt-28
          rounded-lg bg-[#8A2F02] p-4 mb-5">

          <h3 className="font-semibold pt-5 text-center text-3xl text-[#F8E8C0]">
            Login
          </h3>

          <div className="pt-4 text-center">
            <p className="pb-3">
            <span style={{ color: '#F8E8C0' }}>Don't have an account? </span>
              <Link href="/create" className="text-blue-700">
                Register
              </Link>
            </p>
          </div>

      <div className="mb-6 flex flex-col gap-1">
      <a
        href='https://www.facebook.com/?locale=sv_SE'
        target='_blank'
        rel='noreferrer'
        className='text-blue-700 m-2 flex items-center justify-center  bg-[#F8E8C0] rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'
        style={{ width: '300px', height: '40px' }}
      >
        <FaFacebook size={24} />
        <span className="ml-3 text-black">Login With Facebook</span>
      </a>

      <a
        href='https://myaccount.google.com/'
        target='_blank'
        rel='noreferrer'
        className='m-2 flex items-center justify-center bg-[#F8E8C0] rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'
        style={{ width: '300px', height: '40px' }}
      >
        <FaGoogle size={24}  />
        <span className="ml-3">Login With Google</span>
      </a>

    </div>

    <div className="flex justify-center items-center mb-4">
      <div className="border-b  w-2/6"></div>
      <h3 className="text-center mx-4 text-[#F8E8C0]">OR</h3>
      <div className="border-b  w-2/6"></div>
    </div>
      {/*Tidigare kod
      <label htmlFor="" className="text-[#F8E8C0]">
        Username:{" "}
      </label>
       */}
      <input
        type="text"
        value={username}
        required
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter your username"
        className="bg-[#8A2F02] border-[1px] border-white pl-3 
        rounded-md px-4 py-2 mb-2 placeholder-[#F5B25E]"
      />
       {/* Tidigare kod.
      <label htmlFor="" className="text-[#F8E8C0]">
        Password:{" "}
      </label>
        <input
          type="password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          className="bg-[#8A2F02] border-[1px] border-white 
          pl-3 rounded-md px-4 py-2 placeholder-[#F5B25E]"
        />
        */}
      {/* passwordfield */}
      <div className="flex items-center mt-0 border border-white justify-between rounded-md px-4 py-2">
                <input
                  className="bg-[#8A2F02] outline-none  placeholder-[#F5B25E] w-full"
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={handleChangePassword}
                />
                {showPassword ? (
                  <IoEyeOff
                    className="Eye color-[#F8E8C0] mr-2 cursor-pointer"
                    onClick={togglePasswordVisibility}
                  />
                ) : (
                  <IoEye
                    className=" Eye-on color-[#F8E8C0] mr-2 cursor-pointer"
                    onClick={togglePasswordVisibility}
                  />
                )}
      </div>

      {error && <p className="text-red-500 text-center">{error}</p>}
      <div className="max-w-[300px] mt-4 flex justify-center items-center">
        <Link href="/">
          <button
            onClick={handleSubmit}
            className="bg-[#F8E8C0] text-black 
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

