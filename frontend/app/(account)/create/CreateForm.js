"use client";
import { useState } from "react";
import { IoEye, IoEyeOff } from "react-icons/io5";
import Checkbox from "@/app/components/ai/Checkbox";

export default function CreateUser() {
  const [users, setUsers] = useState([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // Tillståndsvariabel för att visa/dölja lösenordet
  const [passwordStrength, setPasswordStrength] = useState(0); // Lösenordsstyrka


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

  function handleCheckboxChange() {
    setIsChecked(!isChecked);
  }

  // Funktion för att visa/dölja lösenordet
  function togglePasswordVisibility() {
    setShowPassword(!showPassword);
  }

   // Funktion för att bedöma lösenordsstyrka
   function checkPasswordStrength(password) {
    let strength = 0;
    // lösenord förstärkelse, Bokstav, Siffra och täcken/mönster
    if (password.length >= 8) strength += 1;
    if (/[A-Z]/.test(password)) strength += 1;
    if (/[a-z]/.test(password)) strength += 1;
    if (/[0-9]/.test(password)) strength += 1;
    if (/[^A-Za-z0-9]/.test(password)) strength += 1;
    return strength;
  }

  function handleChangePassword(e) {
    const newPassword = e.target.value;
    setPassword(newPassword);
    const strength = checkPasswordStrength(newPassword);
    setPasswordStrength(strength);
  }


  return (
    <div className="flex flex-col justify-evenly p-5 items-left w-[772.82px] h-[755.82px] top-[10%] left-[33%] font-sans rounded-[24px] bg-[#8A2F02] absolute">
      <div className="flex flex-col ">
        <h2 className="text-[#F8E8C0] text-[32px] font-semibold font-sans">
          Welcome to ChefMate
        </h2>
        <p className="text-[#F8E8C0] font-[20px] mb-5">
          Already have an account? <a href="">Log in</a>
        </p>
      </div>
      <div className="flex flex-col h-2/4 space-y-3 justify-evenly bg-[#8A2F02] text-[#F5B25E] w-[100%]">
        <div className="flex-col flex mb-1 space-y-1">
          <label className="text-[#F8E8C0] ">Email</label>
          <input
            className="bg-[#8A2F02] border-[1px] border-white pl-3 rounded-md px-4 py-2 placeholder-[#F5B25E]"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="flex-col flex mb-1 space-y-1 ">
          <label className="text-[#F8E8C0]">Username</label>
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
            className="bg-[#8A2F02] outline-none placeholder-[#F5B25E]"
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={handleChangePassword} // Uppdaterad eventhanterare
          />
          {showPassword ? (
            <IoEyeOff
              className="color-[#F8E8C0] mr-2 cursor-pointer"
              onClick={togglePasswordVisibility}
            />
          ) : (
            <IoEye
              className="color-[#F8E8C0] mr-2 cursor-pointer"
              onClick={togglePasswordVisibility}
            />
          )}
        </div>
        {/* Lösenordsstyrkeindikator */}
        <div className="text-[12px] mt-1">
          <span className="text-[#F8E8C0]">Password Strength: </span>
          {[...Array(5)].map((_, index) => (
            <span
              key={index}
              className={`inline-block h-2 w-2 rounded-full mx-1 ${
                index < passwordStrength ? "bg-green-500" : "bg-gray-300"
              }`}
            ></span>
          ))}
        </div>
          <div className="text-[12px]">
            <ol className="grid grid-cols-3 gap-2  list-disc text-[#F8E8C0] overflow-auto p-4">
              <li>Use 8 or more characters</li>
              <li>One Uppercase character</li>
              <li>One lowercase character</li>
              <li>One special character</li>
              <li>One number</li>
            </ol>
          </div>
        </div>
      </div>
      <div>
        <label className="inline-flex items-center text">
          <Checkbox
            onCheckedChange={handleCheckboxChange}
            checked={isChecked}
            iconSize={"text-[40px]"}
            checkbg={"[#8A2F02]"}
            borderColor={"[F5B25E]"}
          />
          <span className="ml-2 text-[#F8E8C0] text-[12px]">
            I want to receive emails about the product, feature updates, events,
            and marketing promotions. <br />
            By creating an account you agree to the{" "}
            <a href="#" className="text-[#F5B25E]">
              Terms of use
            </a>{" "}
            and <a className="text-[#F5B25E]">Privacy Policy</a>
          </span>
        </label>
      </div>

      <button
        className="bg-[#F8E8C0] text-black w-[190px] h-[48px] rounded-xl font-bold font-inter text-[16px]"
        onClick={handleCreateUser}
      >
        Create an account
      </button>
    </div>
  );
}
