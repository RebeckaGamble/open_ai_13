"use client";
import { useState, useContext } from "react";
import { IoEye, IoEyeOff } from "react-icons/io5";
import Checkbox from "@/app/components/ai/Checkbox";
import { LoginContext } from "@/app/components/LoginContext";
import { useRouter } from "next/navigation";
import { TermsDialog, PrivacyDialog } from "./DialogComp";
import Link from "next/link";

export default function CreateUser() {
  const [users, setUsers] = useState([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // Tillståndsvariabel för att visa/dölja lösenordet
  const [passwordStrength, setPasswordStrength] = useState(0); // Lösenordsstyrka
  //updaterat kod
  const [emailError, setEmailError] = useState(false);
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  //latest update, 2024-05-05
  const [emailDomainError, setEmailDomainError] = useState(false);

  const login = useContext(LoginContext);
  const router = useRouter();

  async function handleCreateUser(e) {
    e.preventDefault();
    const emailDomain = email.split("@")[1];
    if (!email || !username || !password) {
      if (!email) setEmailError(true);
      if (!username) setUsernameError(true);
      if (!password) setPasswordError(true);
    } else if (emailDomain !== "gmail.com" && emailDomain !== "outlook.com") {
      setEmailDomainError(true);
    } else {
      const id = Math.floor(Math.random() * 1000) + 1;
      const newUser = { id, email, username, password };
      // const account = { user_id, bookmarks };

      setUsers([...users, newUser]);
      try {
        const response = await fetch("http://localhost:4000/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newUser),
        });
        if (response.ok) {
          router.push("/login");
        }
        const data = await response.json();
        console.log(data);
        // alert("User created successfully!");
      } catch (error) {
        console.error("Error:", error);
      }
      setUsername("");
      setPassword("");
      setEmail("");
      setEmailError(false);
      setUsernameError(false);
      setPasswordError(false);
      setEmailDomainError(false);
    }
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
    <div className="flex justify-center items-center">
      <div className="flex flex-col justify-evenly p-5 font-sans rounded-[24px] bg-[#E1DAD0] absolute">
        <form
          onSubmit={handleCreateUser}
          className="flex flex-col gap-1 justify-top p-5 items-left w-[100%] h-auto justify-between font-sans rounded-xl bg-[#E1DAD0]"
        >
          <div className="flex flex-col top-10">
            <h2 className="text-[#250D01] text-[32px] font-semibold font-sans">
              Welcome to ChefMate
            </h2>
            <p className="text-[#250D01] font-[20px] py-2">
              Already have an account?{" "}
              <Link href="/login" className="underline text-blue-700">
                Log in
              </Link>
            </p>
          </div>
          <div className="flex flex-col h-2/4 space-y-3 justify-evenly bg-[#E1DAD0] text-[#250D01] w-[100%]">
            <div className="flex-col flex mb-1 space-y-1">
              <label className="text-[#250D01] ">Email</label>
              <input
                className={`bg-[#FFFFFF] border-[1px] ${
                  emailError || emailDomainError ? "border-red-500" : "white"
                } pl-3 rounded-md px-4 py-2 placeholder-[#250D01]`}
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              {emailError && (
                <p className="text-red-500 text-sm">Please enter an email</p>
              )}
              {emailDomainError && (
                <p className="text-red-500 text-sm">
                  Please enter a valid email domain (gmail.com or outlook.com)
                </p>
              )}
            </div>
            <div className="flex-col flex mb-1 space-y-1 ">
              <label className="text-[#250D01]">Username</label>
              <input
                className={`bg-[#FFFFFF] border-[1px] ${
                  usernameError ? "border-red-500" : "border-slate-200"
                } pl-3 rounded-md px-4 py-2 placeholder-[#250D01]`}
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              {usernameError && (
                <p className="text-red-500 text-sm">Please enter a username</p>
              )}
            </div>
            <div className="flex-col flex mb-1 space-y-1">
              <label className="text-[#250D01] mb-0">Password</label>
              <div
                className={`flex items-center mt-0 bg-[#FFFFFF] border focus:outline border-white ${
                  passwordError ? "border-red-500" : "white"
                } justify-between rounded-md px-4 py-2`}
              >
                <input
                  className="bg-[#FFFFFF] outline-none placeholder-[#250D01] w-full "
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={handleChangePassword}
                />
                {showPassword ? (
                  <IoEyeOff
                    className="fill-[#250D01] mr-2 cursor-pointer"
                    onClick={togglePasswordVisibility}
                  />
                ) : (
                  <IoEye
                    className="color-[#F8E8C0] mr-2 cursor-pointer"
                    onClick={togglePasswordVisibility}
                  />
                )}
              </div>
              {passwordError && (
                <p className="text-red-500 text-sm">Please enter a password</p>
              )}
              {/* Lösenordsstyrkeindikator */}
              {password.length > 0 && (
                <div className="text-[12px] mt-1">
                  <span className="text-[#250D01]">Password Strength: </span>
                  {[...Array(5)].map((_, index) => (
                    <span
                      key={index}
                      className={`inline-block h-2 w-2 rounded-full mx-1 ${
                        index < passwordStrength
                          ? "bg-green-500"
                          : "bg-gray-300"
                      }`}
                    ></span>
                  ))}
                </div>
              )}
              {password.length > 0 && (
                <div className="text-[12px]">
                  <ol className="grid grid-cols-3 gap-2 list-disc text-[#250D01] overflow-auto p-4">
                    <li>Use 8 or more characters</li>
                    <li>One Uppercase character</li>
                    <li>One lowercase character</li>
                    <li>One special character</li>
                    <li>One number</li>
                  </ol>
                </div>
              )}
            </div>
          </div>
          <div className="py-2">
            <label className="inline-flex items-center">
              <Checkbox
                onCheckedChange={handleCheckboxChange}
                checked={isChecked}
                iconSize={"text-[40px]"}
                checkbg={"[#FFFFFF]"}
                borderColor={"[#FFFFFF]"}
                required
              />
              <span className="ml-2 text-[#250D01] text-[12px]">
                I want to receive emails about the product, feature updates,
                events, and marketing promotions. <br />
              </span>
            </label>
            <div className="ml-[46px] flex flex-row items-center gap-1 text-[12px]">
              By creating an account you agree to the <TermsDialog />
              and
              <PrivacyDialog />
            </div>
          </div>

          <button
            className="bg-[#250D01] tracking-wider text-white w-[190px] h-[48px] rounded-xl font-bold font-inter text-[16px]"
            onClick={handleCreateUser}
          >
            Create an account
          </button>
        </form>
      </div>
    </div>
  );
}
