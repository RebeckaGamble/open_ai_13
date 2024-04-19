'use client'
import React, { useState } from "react";
import Link from "next/link";

export default function CreateForm() {
  const [created, setCreated] = useState(false);
  const [error, setError] = useState(null); 


  return (
    <div>
        <div className="px-4">
          <div className="pt-10 xl:pt-40 flex flex-col mx-auto">
            <h3 className="font-semibold pb-6 text-center text-xl">
              Create new user account
            </h3>
            <form className="flex flex-col mx-auto">
              <label htmlFor="username" className="">
                Username:
              </label>
              <input
                id="username"
                type="text"
                className="max-w-[300px] border bordre-slate-300 px-2 py-0.5 mb-2"
              />

              <label htmlFor="password" className="">
                Password:
              </label>
              <input
                id="password"
                type="password"
                className="max-w-[300px] border bordre-slate-300 px-2 py-0.5"
              />
              <div className="max-w-[300px] mt-4 flex justify-end">
                <button
                  type="submit"
                  className="max-w-fit px-4 py-1 bg-[blue] text-white"
                >
                  Create account
                </button>
              </div>
            </form>
            {created && <div className="">User account created!</div>}
            {error && <div className="text-red-500">{error}</div>}
            <div className="pt-4 text-center"></div>
          </div>
        </div>
        <div className="pt-4 text-center">
          <p>
            Already have an account? Go to{" "}
            <Link href="/login" className="underline text-blue-700">
              Login
            </Link>
          </p>
        </div>
    </div>
  );
}
