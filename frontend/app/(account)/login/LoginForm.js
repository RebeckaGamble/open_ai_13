"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Checkbox from "@/app/components/ai/Checkbox";
import { useLoginContext } from "@/app/components/LoginContext";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { CheckIcon } from "@radix-ui/react-icons";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { setSessionToken, setLoggedIn, login } = useLoginContext();

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!username || !password) {
      setError("Wrong username or password.");
      return;
    }

    try {
      const { sessionToken } = await login(username, password);
      setLoggedIn(true);
      setSessionToken(sessionToken);

      router.push("/account");
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
      <div className="bg-white">
        <div className="mt-24 flex flex-col mx-auto">
          <form
            action=""
            className="flex flex-col gap-2 mx-auto rounded-lg bg-[#E1DAD0] px-10 py-10 shadow-md"
          >
            <h3 className="font-semibold text-center text-3xl">Login</h3>

            <div className="flex flex-row py-4 text-center">
              <p className="text-black pr-1">Don't have an account? </p>
              <Link href="/create" className="text-blue-700">
                Register
              </Link>
            </div>

            <div className="flex flex-col gap-4">
              <a
                href="https://www.facebook.com/?locale=sv_SE"
                target="_blank"
                rel="noreferrer"
                className="text-blue-700 flex items-center justify-center bg-[white] rounded-full p-2 cursor-pointer hover:scale-110 ease-in duration-300"
              >
                <FaFacebook size={24} />
                <span className="ml-3 text-black">Log in with Facebook</span>
              </a>

              <a
                href="https://myaccount.google.com/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center bg-white rounded-full p-2 cursor-pointer hover:scale-110 ease-in duration-300"
              >
                <FcGoogle size={24} />
                <span className="ml-3 text-black">Log in with Google</span>
              </a>
            </div>

            <div className="flex justify-center items-center my-4">
              <div className="border-b border-black w-2/6"></div>
              <h3 className="text-center mx-4 ">OR</h3>
              <div className="border-b border-black w-2/6"></div>
            </div>
            <div className="flex flex-col gap-4">
              <input
                type="text"
                value={username}
                required
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
                className="bg-white flex justify-center items-center border-[1px] border-[#E4DED6] 
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
            </div>
            {error && (
              <p className="text-red-500 text-center">
                Invalid password or username
              </p>
            )}
            <div className="w-full mt-3 text-[12px] h-auto flex flex-col justify-center">
              <div className="flex flex-row pb-6 w-full items-center justify-between">
                <div className="flex flex-row items-center gap-1.5">
                  <Checkbox checkIcon={<CheckIcon />} label={"Remember me"} />
                </div>
                <Link href={"/"} className="text-blue-700">Forgot Password?</Link>
              </div>
              <Link href="/">
                <button
                  onClick={handleSubmit}
                  className="bg-black text-white w-full h-[48px] tracking-wider rounded-xl font-semibold font-inter text-[16px]"
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
