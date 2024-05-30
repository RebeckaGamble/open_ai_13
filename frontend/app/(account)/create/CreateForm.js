"use client";
import { useState } from "react";
import { IoEye, IoEyeOff } from "react-icons/io5";
import Checkbox from "@/app/components/ai/Checkbox";
import { CheckIcon } from "@radix-ui/react-icons";
import { useLoginContext } from "@/app/components/LoginContext";
import { useRouter } from "next/navigation";
import { TermsDialog, PrivacyDialog } from "./DialogComp";
import Link from "next/link";

export default function CreateUser() {
  // State variables for user data
  const [users, setUsers] = useState([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");
  const [email, setEmail] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [showPassword, setShowPassword] = useState(false); 
  const [showConfirmedPassword, setShowConfirmedPassword] = useState(false); 
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [emailError, setEmailError] = useState(false);
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmedPasswordError, setConfirmedPasswordError] = useState(false);
  const [emailDomainError, setEmailDomainError] = useState(false);
  const [passwordMatchError, setPasswordMatchError] = useState(false);

  const login = useLoginContext()
  const router = useRouter();

  async function handleCreateUser(e) {
    e.preventDefault();
    const emailDomain = email.split("@")[1];
    if (!email || !username || !password || !confirmedPassword) {
      if (!email) setEmailError(true);
      if (!username) setUsernameError(true);
      if (!password) setPasswordError(true);
      if (!confirmedPassword) setConfirmedPasswordError(true);
    } else if (password !== confirmedPassword) {
      setPasswordMatchError(true);
      setPasswordError(true);
      setConfirmedPasswordError(true);
    } else if (emailDomain !== "gmail.com" && emailDomain !== "outlook.com") {
      setEmailDomainError(true);
    } else {
      const id = Math.floor(Math.random() * 1000) + 1;
      const newUser = { id, email, username, password };

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
      } catch (error) {
        console.error("Error:", error);
      }
      // Reset all fields after creating user
      setUsername("");
      setPassword("");
      setConfirmedPassword("");
      setEmail("");
      setEmailError(false);
      setUsernameError(false);
      setPasswordError(false);
      setConfirmedPasswordError(false);
      setEmailDomainError(false);
      setPasswordMatchError(false);
    }
  }

  // Function to show/hide password
  function togglePasswordVisibility() {
    setShowPassword(!showPassword);
  }

  // Function to show/hide confirmed password
  function toggleConfirmedPasswordVisibility() {
    setShowConfirmedPassword(!showConfirmedPassword);
  }

  // Function to check password strength
  function checkPasswordStrength(password) {
    let strength = 0;
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

  function handleCheckboxChange() {
    setIsChecked(!isChecked);
  }

  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col justify-evenly px-8 py-8 font-sans md:rounded-[24px] bg-[#E1DAD0]">
        <div className="flex flex-col pb-6">
          <h2 className="text-[#250D01] text-[32px] font-semibold font-sans">
            Welcome to ChefMate
          </h2>
          <p className="text-[#250D01] text-[20px] py-1">
            Already have an account?{" "}
            <Link href="/login" className="text-blue-700">
              Log in
            </Link>
          </p>
        </div>
        <form
          // onSubmit={handleCreateUser}
          className="flex flex-col gap-1 justify-top  items-left w-[100%] h-auto justify-between font-sans rounded-xl bg-[#E1DAD0]"
        >
          <div className="flex flex-col h-2/4 space-y-4 justify-evenly bg-[#E1DAD0] text-[#250D01] w-[100%]">
            <div className="flex-col flex space-y-1">
              <label className="text-[#250D01] font-semibold">Email</label>
              <input
                className={`bg-[#FFFFFF] border-[1px] ${
                  emailError || emailDomainError ? "border-red-500" : "white"
                } pl-3 rounded-[8px] px-4 py-2 placeholder-[#CCB99E] tracking-wider text-[20px]`}
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setEmailError(false);
                }}
                required
              />
              {emailError && (
                <p className="text-red-500 text-sm">Please enter an email</p>
              )}
              {emailDomainError && (
                <p className="text-red-500 text-sm">
                  Please enter a valid email domain (gmail.com or outlook.com or
                  hotmail.com)
                </p>
              )}
            </div>
            {/* Render other fields */}
            <div className="flex-col flex space-y-1">
              <label className="text-[#250D01] font-semibold">Username</label>
              <input
                className={`bg-[#FFFFFF] border-[1px] ${
                  usernameError ? "border-red-500" : "border-slate-200"
                } pl-3 rounded-[8px] px-4 py-2 placeholder-[#CCB99E] tracking-wider text-[20px]`}
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                  setUsernameError(false);
                }}
                required
              />
              {usernameError && (
                <p className="text-red-500 text-sm">Please enter a username</p>
              )}
            </div>
            <div className="flex-col flex space-y-1">
              <label className="text-[#250D01] font-semibold">Password</label>
              <div
                className={`flex items-center mt-0 bg-[#FFFFFF] border focus:outline border-white ${
                  passwordError ? "border-red-500" : "border-white"
                } justify-between rounded-[8px] px-4 py-2`}
              >
                <input
                  className="bg-[#FFFFFF] outline-none placeholder-[#CCB99E] tracking-wider text-[20px] w-full "
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => {
                    handleChangePassword(e);
                    setPasswordError(false);
                  }}
                  required
                />
                {showPassword ? (
                  <IoEyeOff
                    size={24}
                    className="fill-[#250D01] mr-2 cursor-pointer"
                    onClick={togglePasswordVisibility}
                  />
                ) : (
                  <IoEye
                    size={24}
                    className="color-[#F8E8C0] mr-2 cursor-pointer"
                    onClick={togglePasswordVisibility}
                  />
                )}
              </div>
              {passwordError && !password && (
                <p className="text-red-500 text-sm">Please enter a password</p>
              )}
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
            {/* Confirm password input */}
            <div className="flex-col flex space-y-1">
              <label className="text-[#250D01] font-semibold">
                Confirm Password
              </label>
              <div
                className={`flex items-center mt-0 bg-[#FFFFFF] border focus:outline border-white ${
                  confirmedPasswordError ? "border-red-500" : "border-white"
                } justify-between rounded-[8px] px-4 py-2`}
              >
                <input
                  className="bg-[#FFFFFF] outline-none placeholder-[#CCB99E] tracking-wider text-[20px] w-full "
                  type={showConfirmedPassword ? "text" : "password"}
                  placeholder="Confirm Password"
                  value={confirmedPassword}
                  onChange={(e) => {
                    setConfirmedPassword(e.target.value);
                    setConfirmedPasswordError(false);
                    setPasswordMatchError(false);
                  }}
                  required
                />
                {showConfirmedPassword ? (
                  <IoEyeOff
                    size={24}
                    className="fill-[#250D01] mr-2 cursor-pointer"
                    onClick={toggleConfirmedPasswordVisibility}
                  />
                ) : (
                  <IoEye
                    size={24}
                    className="color-[#F8E8C0] mr-2 cursor-pointer"
                    onClick={toggleConfirmedPasswordVisibility}
                  />
                )}
              </div>
              {passwordMatchError && (
                <p className="text-red-500 text-sm">
                  Passwords do not match. Please enter the same password in both
                  fields.
                </p>
              )}
            </div>
          </div>
          <div className="py-4 flex flex-col gap-2">
            <label className="inline-flex h-auto items-center">
              <Checkbox
                checked={isChecked}
                checkBg={"[#E1DAD0]"}
                borderColor={"[#250D01]"}
                checkIcon={<CheckIcon />}
                className={"pl-2"}
                label={
                  "I want to receive emails about the product, feature updates, events, and marketing promotions. "
                }
                required
              />
            </label>
            <div className="inline-flex w-full items-center">
              <Checkbox
                onCheckedChange={handleCheckboxChange}
                checked={isChecked}
                checkBg={"[#E1DAD0]"}
                borderColor={"[#250D01]"}
                checkIcon={<CheckIcon />}
                className={"pl-2"}
                label={
                  <>
                    By creating an account you agree to the <TermsDialog /> and{" "}
                    <PrivacyDialog />
                  </>
                }
                required
              />
            </div>
          </div>
          <button
            className={`bg-[#0C0603] tracking-wider text-white w-[190px] h-[48px] rounded-xl font-semibold font-inter text-[16px] ${
              !isChecked ? "cursor-not-allowed opacity-50" : ""
            }`}
            type="submit"
            disabled={!isChecked}
            onClick={handleCreateUser}
          >
            <Link href={"/login"}>Create an account</Link>
          </button>
        </form>
      </div>
    </div>
  );
}
