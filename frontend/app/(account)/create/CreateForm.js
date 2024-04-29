"use client";
import { useState } from "react";
import { IoEye } from "react-icons/io5";

export default function CreateUser() {
  const [users, setUsers] = useState([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  async function handleCreateUser() {
    const id = Math.floor(Math.random() * 1000) + 1;
    const newUser = { id, username, password };
    setUsers([...users, newUser]);
    try {
      const response = await fetch("http://localhost:4000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });
      const data = await response.json();
      console.log(data);
      alert("User created successfully!");
    } catch (error) {
      console.error("Error:", error);
    }
    setUsername("");
    setPassword("");
  }

  return (
    <div>
      <div className="flex flex-col justify-top p-5 items-left w-[500px] h-[600px] top-[10%] left-[33%] font-sans rounded-xl bg-[#8A2F02] absolute">
        <div classname="flex flex-col ">
          <h2 className="text-[#F8E8C0] text-[32px] font-semibold font-sans">
            Welcome to ChefMate
          </h2>

          <p className="text-[#F8E8C0] font-[20px] mb-5">
            Already have an account? <a href="">Log in</a>
          </p>
        </div>
        <div className="flex flex-col space-y-3 bg-[#8A2F02] text-[#F5B25E] w-[100%]">
          <div className="flex-col flex mb-1 space-y-1">
            <label className="text-[#F8E8C0] ">Email</label>
            <input
              className="bg-[#8A2F02] border-[1px] border-white pl-3 rounded-md px-4 py-2 placeholder-[#F5B25E]"
              type="email"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="flex-col flex mb-1 space-y-1">
            <label className="text-[#F8E8C0] ">Username</label>
            <input
              className="bg-[#8A2F02] border-[1px] border-white pl-3 rounded-md px-4 py-2 placeholder-[#F5B25E]"
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="flex-col flex mb-1 space-y-1">
            <label className="text-[#F8E8C0] mb-0">Password</label>
            <div className="flex items-center mt-0 border border-white justify-between rounded-md px-4 py-2">
              <input
                className="bg-[#8A2F02] outline-none placeholder-[#F5B25E] "
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <IoEye className="color-[#F8E8C0] mr-2" />
            </div>
          </div>
        </div>
        <div>
          <ol className="flex flex-row space-x-4 list-disc text-white ">
            <li>Use 8 or more characters</li>
            <li>One Uppercase character</li>
            <li>One lowercase character</li>
            <li>One special character</li>
            <li>One number</li>
          </ol>
        </div>

        <button className="bg-[#8A2F02] text-black" onClick={handleCreateUser}>
          Create an account
        </button>
      </div>
    </div>
  );
}
