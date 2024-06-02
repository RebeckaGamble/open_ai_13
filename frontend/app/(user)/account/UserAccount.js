"use client";

import React, { useState, useRef, useEffect } from "react";
import { CiHeart } from "react-icons/ci";
import { useLoginContext } from "@/app/components/LoginContext";
import Link from "next/link";
import BookmarkedRecipeCard from "./BookmarkedRecipeCard";

export default function UserAccount() {
  const {
    loggedIn,
    sessionToken,
    setUsername,
    username,
    email,
    setEmail,
    password,
    setPassword,
  } = useLoginContext();

  const [loading, setLoading] = useState(false);
  const [bookmarkedRecipes, setBookmarkedRecipes] = useState([]);
  const [message, setMessage] = useState("");
  const [selectedAvatar, setSelectedAvatar] = useState("robot.jpg");
  const [showPopup, setShowPopup] = useState(false);
  const [showAvatarPopup, setShowAvatarPopup] = useState(false);
  const [showEditPopup, setShowEditPopup] = useState(false);
  const [customAvatar, setCustomAvatar] = useState(null);
  const [avatarBorders, setAvatarBorders] = useState({
    robot: "border-4 border-green-300",
    boy: "",
    girl: "",
  });

  const popupRef = useRef(null);
  const avatarPopupRef = useRef(null);
  const editPopupRef = useRef(null);

  useEffect(() => {
    if (loggedIn) {
      setLoading(true);
      fetchBookmarkedRecipes()
      fetchAvatar(username)
        .then(() => setLoading(false))
        .catch((error) => {
          console.error("Error fetching bookmarks:", error);
          setLoading(false);
        });
    }
  }, [loggedIn, sessionToken]);

  const fetchBookmarkedRecipes = async () => {
    try {
      const response = await fetch("http://localhost:4000/getbookmarks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username }),
      });
      if (response.ok) {
        const data = await response.json();
        if (data && data.length > 0) {
          const parsedBookmarks = data.map((bookmark) => ({
            id: bookmark.id,
            recipe: JSON.parse(bookmark.recipe),
          }));
          setBookmarkedRecipes(parsedBookmarks);
        } else {
          // console.error("No bookmarks data found in response");
        }
      } else {
        console.error("Failed to fetch bookmarked recipes");
      }
    } catch (error) {
      console.error("Error fetching bookmarked recipes:", error.message);
    }
  };

  const handleRemoveRecipe = (id) => {
    setBookmarkedRecipes((prevRecipes) =>
      prevRecipes.filter((recipe) => recipe.id !== id)
    );
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        avatarPopupRef.current &&
        !avatarPopupRef.current.contains(event.target)
      ) {
        setShowAvatarPopup(false);
      }
      if (
        editPopupRef.current &&
        !editPopupRef.current.contains(event.target)
      ) {
        setShowEditPopup(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const updateAvatarInDB = async (avatarUrl) => {
    try {
      const response = await fetch("http://localhost:4000/updateavatar", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, avatarUrl }),
      });

      if (response.ok) {
        setMessage("Avatar updated successfully");
      } else {
        setMessage("Failed to update avatar");
        console.error("Failed to update avatar in bookmarked recipes");

      }
    } catch (error) {
      console.error("Error updating avatar:", error);
      setMessage("Error updating avatar");
    }
  };

  const selectAvatar = (avatarIndex) => {
    let avatarUrl;
    if (avatarIndex === "robot.jpg") {
      setAvatarBorders({
        robot: "border-4 border-green-300",
        boy: "",
        girl: "",
      });
      avatarUrl = "robot.jpg"; 
    } else if (avatarIndex === "profile_boy.png") {
      setAvatarBorders({
        robot: "",
        boy: "border-4 border-blue-500",
        girl: "",
      });
      avatarUrl = "profile_boy.png"; 
    } else if (avatarIndex === "profile_girl.png") {
      setAvatarBorders({
        robot: "",
        boy: "",
        girl: "border-4 border-pink-500",
      });
      avatarUrl = "profile_girl.png"; 
    }
    setSelectedAvatar(avatarIndex);
    setShowPopup(false);
    updateAvatarInDB(avatarUrl); 
  };
  
  const fetchAvatar = async (username) => {
    try {
      const response = await fetch(`http://localhost:4000/fetch-avatar?username=${username}`);
      if (response.ok) {
        const avatarData = await response.json();
        //console.log("Avatar data:", avatarData); // Log avatarData to console
        if (avatarData && avatarData.getAvatar && avatarData.getAvatar.length > 0) {
          const avatarUrl = avatarData.getAvatar[0].avatar;
          setSelectedAvatar(avatarUrl);
        } else {
          console.error("Avatar data or avatar URL is missing");
        }
      } else {
        console.error("Failed to fetch avatar:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching avatar:", error);
    }
  };

  /*
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedAvatar(null);
      setCustomAvatar(URL.createObjectURL(file));
    }
  };*/

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const customAvatarUrl = URL.createObjectURL(file);
      setSelectedAvatar(null);
      setCustomAvatar(customAvatarUrl);
      updateAvatarInDB(customAvatarUrl);
    }
  };

  const [emailValid, setEmailValid] = useState(false);
  const [usernameValid, setUsernameValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);

  // Update validity state
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailValid(e.target.checkValidity());
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    setUsernameValid(e.target.checkValidity());
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordValid(e.target.checkValidity());
  };

  // Disable the update details btn
  const isFormValid = emailValid || usernameValid || passwordValid;

  //handle update user info
  const handleUpdate = async () => {
    setMessage("");

    try {
      const userData = {};
      if (email) userData.email = email;
      if (username) userData.username = username;
      if (password) userData.password = password;

      const response = await fetch("http://localhost:4000/updateuser", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        setShowEditPopup(false);
        setMessage("User details updated successfully");
      } else {
        setMessage("Failed to update user details");
      }
    } catch (error) {
      console.error("Error updating user details:", error);
      setMessage("Error updating user details");
    }
  };

  if (!loggedIn) {
    return (
      <div className=" h-[calc(100vh-440px)] pt-20 w-full">
        <hr className=" border-t-4 text-[#250D01] mx-14" />
        <p className="text-center text-[16px] pt-4">
          You need to{" "}
          <Link href={"/login"} className="text-blue-600 underline">
            log in
          </Link>
          , in order to be able to bookmark recipes.{" "}
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="h-auto min-h-[calc(100vh-320px)] py-10 lg:py-20 w-full">
        <div className="w-full max-w-[90rem] mx-auto px-4 pt-6">
          <div className="flex flex-col sm:flex-row-reverse items-center gap-2 sm:gap-6 text-xl font-semibold py-4">
            <div className="relative">
              {/*Avatar popup */}
              <div
                className="w-[110px] h-[110px] rounded-full overflow-hidden border-4 cursor-pointer"
                onClick={() => setShowAvatarPopup(true)}
              >
                {(selectedAvatar || customAvatar) && (
                  <img
                    src={customAvatar || `../avatars/${selectedAvatar}`}
                    alt="Selected Avatar"
                    className={`w-full h-full object-cover p-2 rounded-full ${
                      avatarBorders.boy || avatarBorders.robot
                        ? avatarBorders.boy || avatarBorders.robot
                        : avatarBorders.girl
                    }`}
                  />
                )}
              </div>
              {/*Avatar Popup-container */}
              {showAvatarPopup && (
                <div
                  ref={avatarPopupRef}
                  className="absolute top-0 right-0 mt-24 w-[200px] pt-4 bg-white rounded shadow-lg z-10"
                >
                  {/**default avatar */}
                  <div
                    className="cursor-pointer p-2 hover:bg-gray-100 flex flex-row items-center justify-between px-[20px]"
                    onClick={() => selectAvatar("robot.jpg")}
                  >
                    <img
                      src="../avatars/robot.jpg"
                      alt="Robot"
                      className={`w-12 h-12 rounded-full ${avatarBorders.robot}`}
                    />
                    <h1 className="text-sm">ChefMate</h1>
                  </div>
                  <div
                    className="cursor-pointer p-2 hover:bg-gray-100 flex flex-row items-center justify-between px-[20px]"
                    onClick={() => selectAvatar("profile_boy.png")}
                  >
                    <img
                      src="../avatars/profile_boy.png"
                      alt="Avatar Boy"
                      className={`w-12 h-12 rounded-full ${avatarBorders.boy}`}
                    />
                    <h1 className="text-sm">Male Avatar</h1>
                  </div>
                  <div
                    className="cursor-pointer p-2 hover:bg-gray-100 flex flex-row items-center justify-between px-[20px]"
                    onClick={() => selectAvatar("profile_girl.png")}
                  >
                    <img
                      src="../avatars/profile_girl.png"
                      alt="Avatar Girl"
                      className={`w-12 h-12 rounded-full ${avatarBorders.girl}`}
                    />
                    <h1 className="text-sm">Female Avatar</h1>
                  </div>
                  <div className="p-2">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                      className="hidden p-4"
                      id="avatar-input"
                    />
                    <label
                      htmlFor="avatar-input"
                      className="block text-center mt-2 tracking-wider cursor-pointer text-xs p-4 bg-[#250D01] text-white border rounded-md"
                    >
                      Upload Custom Avatar
                    </label>
                  </div>
                </div>
              )}
            </div>
            <div className="flex flex-col gap-4 py-4">
              <div className="flex flex-col gap-4 px-4">
                <p className="text-[22px] font-normal">
                  Username: <span className="font-semibold"> {username}</span>{" "}
                </p>
                <p className="text-[22px] font-normal">
                  Email: <span className="font-semibold"> {email}</span>{" "}
                </p>
              </div>
              <div className="flex justify-center sm:justify-end pt-2 sm:pt-0 px-4">
                <button
                  className="text-[#0C0603] text-[14px] bg-white px-4 py-1 tracking-wider rounded-full border-[#250D01] border hover:text-white hover:bg-[#250D01]"
                  onClick={() => setShowEditPopup(true)}
                >
                  Edit profile
                </button>
              </div>
            </div>
          </div>
          <hr className=" border-t-4 text-[#250D01]" />
          <div className="flex flex-row items-center gap-2 py-10">
            <a className="text-2xl">
              <CiHeart />
            </a>
            <h2 className="font-semibold text-xl">Your saved recipes:</h2>
          </div>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <div className="flex flex-wrap items-center justify-center gap-6">
              {bookmarkedRecipes.length > 0 ? (
                bookmarkedRecipes.map((recipe, index) => (
                  <div key={index} className="flex flex-col">
                    {/**  <p>ID for testing:{recipe.id}</p>*/}
                    <BookmarkedRecipeCard
                      key={index}
                      id={recipe.id}
                      src={recipe.imageUrl}
                      alt={"not found"}
                      title={recipe.recipe_title}
                      content={recipe}
                      onRemove={handleRemoveRecipe}
                    />
                  </div>
                ))
              ) : (
                <div className="text-center text-xl mt-10">
                  You don't have any saved recipes
                </div>
              )}
            </div>
          )}
        </div>

        {/* Edit User Details Popup */}
        {showEditPopup && (
          <div className="fixed inset-0 bg-black/70 bg-opacity-50 flex items-center justify-center z-20">
            <div
              ref={editPopupRef}
              className="bg-white relative p-6 rounded-lg w-full max-w-md"
            >
              <button
                onClick={() => setShowEditPopup(false)}
                className="absolute top-2 right-2 text-[24px]"
              >
                X
              </button>
              <h2 className="font-semibold text-xl mb-4">
                Update User Details:
              </h2>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col">
                  <label className="text-[#250D01] font-semibold">Email</label>
                  <input
                    type="email"
                    placeholder="New Email"
                    value={email}
                    onChange={handleEmailChange}
                    //  onChange={(e) => setEmail(e.target.value)}
                    className="border p-2 rounded"
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-[#250D01] font-semibold">
                    Username
                  </label>
                  <input
                    type="text"
                    placeholder="New Username"
                    value={username}
                    onChange={handleUsernameChange}
                    // onChange={(e) => setUsername(e.target.value)}
                    className="border p-2 rounded"
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-[#250D01] font-semibold">
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder="New Password"
                    value={password}
                    onChange={handlePasswordChange}
                    //onChange={(e) => setPassword(e.target.value)}
                    className="border p-2 rounded"
                    required
                  />
                </div>
                <button
                  onClick={handleUpdate}
                  className={`bg-[#250D01] text-white p-2 rounded ${
                    isFormValid ? "" : "bg-gray-400 cursor-not-allowed"
                  }`}
                  disabled={!isFormValid} // Disable button if form is invalid
                >
                  Update Details
                </button>
                {message && (
                  <p
                    className={`
                      ${
                        message.includes("successfully")
                          ? "text-green-500"
                          : "text-red-500"
                      }`}
                  >
                    {message}
                  </p>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
