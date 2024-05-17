"use client";

import React, { useContext, useState, useRef, useEffect } from "react";
import { CiHeart } from "react-icons/ci";
import { LoginContext } from "@/app/components/LoginContext";
import Link from "next/link";
import BookmarkedRecipeCard from "./BookmarkedRecipeCard";
import test from "../../../public/img/test_img.jpg";

export default function UserAccount() {
  const { loggedIn, logout } = useContext(LoginContext);
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [avatarBorders, setAvatarBorders] = useState({
    boy: "",
    girl: "",
  });

  const [customAvatar, setCustomAvatar] = useState(null);
  const popupRef = useRef(null);

  const [bookmarkedRecipes, setBookmarkedRecipes] = useState([]);

  useEffect(() => {
    const fetchBookmarkedRecipes = async () => {
      try {
        const response = await fetch("http://localhost:4000/getbookmarks");
        if (response.ok) {
          const data = await response.json();
          const parsedBookmarks = data.bookmarks.map((bookmark) => ({
            ...bookmark,
            recipe: JSON.parse(bookmark.recipe),
          }));
          setBookmarkedRecipes(parsedBookmarks);
          console.log("bookmarked: ", parsedBookmarks);
        } else {
          console.error("Failed to fetch bookmarked recipes");
        }
      } catch (error) {
        console.error("Error fetching bookmarked recipes:", error.message);
      }
    };

    fetchBookmarkedRecipes();
  }, []);
  /*
  useEffect(() => {
    const fetchBookmarkedRecipes = async () => {
      try {
        const response = await fetch("/getbookmarks"); 
        if (response.ok) {
          const data = await response.json();
          setBookmarkedRecipes(data.bookmarkedRecipes); 
        } else {
          throw new Error("Failed to fetch bookmarked recipes");
        }
      } catch (error) {
        console.error("Error fetching bookmarked recipes:", error);
      }
    };

    if (loggedIn) {
      fetchBookmarkedRecipes();
    }
  }, [loggedIn]);
*/
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setShowPopup(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const selectAvatar = (avatarIndex) => {
    setSelectedAvatar(avatarIndex);
    setShowPopup(false);
    if (avatarIndex === "profile_boy.png") {
      setAvatarBorders({ boy: "border-4 border-blue-500", girl: "" });
    } else if (avatarIndex === "profile_girl.png") {
      setAvatarBorders({ boy: "", girl: "border-4 border-pink-500" });
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedAvatar(null);
      setCustomAvatar(URL.createObjectURL(file));
    }
  };

  return (
    <>
      {/* 
      {loggedIn ? (
      */}
      <>
        <div className="h-auto py-10 lg:py-20 w-full px-4">
          <div className="flex flex-row justify-end items-center gap-10 text-xl font-semibold p-4 mx-14">
            <h2>Name</h2>
            <h2>Email</h2>
            <div className="relative">
              {/* popup */}
              <div
                className="w-20 h-20 rounded-full overflow-hidden border-4 cursor-pointer"
                onClick={() => setShowPopup(true)}
              >
                {(selectedAvatar || customAvatar) && (
                  <img
                    src={customAvatar || `../avatars/${selectedAvatar}`}
                    alt="Selected Avatar"
                    className={`w-full h-full object-cover rounded-full ${
                      avatarBorders.boy ? avatarBorders.boy : avatarBorders.girl
                    }`}
                  />
                )}
              </div>
              {/* Popup-container */}
              {showPopup && (
                <div
                  ref={popupRef}
                  className="absolute top-0 right-0 mt-24 w-48 pt-4 bg-white border border-gray-200 rounded shadow-lg z-10"
                >
                  <div
                    className="cursor-pointer p-2 hover:bg-gray-100 flex flex-row items-center justify-evenly"
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
                    className="cursor-pointer p-2 hover:bg-gray-100 flex flex-row items-center justify-evenly"
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
                      className="block text-center mt-2 text-blue-600 cursor-pointer text-xs p-4 bg-slate-300 border rounded-md"
                    >
                      Upload Custom Avatar
                    </label>
                  </div>
                </div>
              )}
            </div>
          </div>
          <hr className=" border-t-4 text-black mx-14" />
          <div className="flex flex-row items-center gap-2 pt-10 mx-14">
            <a className="text-2xl">
              <CiHeart />
            </a>
            <h2 className="font-semibold text-xl">Your saved recipes:</h2>
          </div>
          <div className="flex flex-col items-center justify-center gap-5 p-10">
            {/** <BookmarkedRecipeCard title={"Recipie Title"} content={"XXXXXXXX"} src={test} alt={"not found"} />*/}
            {bookmarkedRecipes.length > 0 ? (
              bookmarkedRecipes.map((recipe, index) => (
                <div key={index} className="flex flex-col">
                  <p>ID for testing:{recipe.id}</p>
                  <BookmarkedRecipeCard
                    key={index}
                    id={recipe.id}
                    src={recipe.imageUrl}
                    alt={"not found"}
                    title={recipe.recipe_title}
                    content={recipe}
                  />
                </div>
              ))
            ) : (
              <div className="text-center text-xl mt-10">
                No bookmarks found
              </div>
            )}
          </div>
        </div>
      </>
      {/* 
      ) : (
        <div className=" h-[calc(100vh-320px)] pt-20 w-full">
          <hr className=" border-t-4 text-black mx-14" />
          <p className="text-center text-[16px] pt-4">
            You need to be{" "}
            <Link href={"/login"} className="text-blue-600 underline">
              logged in
            </Link>
            , in order to be able to bookmark recipes.{" "}
          </p>
        </div>
      )}
      */}
    </>
  );
}
