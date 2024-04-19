'use client'
import React, { useState } from "react";
import Link from "next/link";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  return (
    <>
      <div className="px-4">
        <div className="pt-10 xl:pt-40 flex flex-col mx-auto">
          <h3 className="font-semibold pb-6 text-center text-xl">
            Login to your user account
          </h3>
          <form
            action=""
            className="flex flex-col mx-auto"
          >
            <label htmlFor="" className="">
              Username:{" "}
            </label>
            <input
              type="text"
              value={username}
              required
              onChange={(e) => setUsername(e.target.value)}
              className="max-w-[300px] border bordre-slate-300 px-2 py-0.5 mb-2"
            />
            <label htmlFor="" className="">
              Password:{" "}
            </label>
            <input
              type="password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
              className="max-w-[300px] border bordre-slate-300 px-2 py-0.5"
            />

            {error && <p className="text-red-500 text-center">{error}</p>}
            <div className="max-w-[300px] mt-4 flex justify-end">
              <button className="max-w-fit bg-blue-700 px-4 py-1 text-white">Log in</button>
            </div>
          </form>
          <div className="pt-4 text-center">
            <p>
              Don't have an account? Go to{" "}
              <Link href="/create" className="underline text-blue-700">
                Create account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
