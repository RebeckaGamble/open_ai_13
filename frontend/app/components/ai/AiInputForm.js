"use client";
import React, { useState } from "react";
import Dropdown from "./Dropdown";
import {
  moodOptions,
  mustContain,
  timeOptions,
  countryOptions,
  dontContain,
} from "./dropdownOptions";
import Checkbox from "./Checkbox";
import RecipeCards from "../recipes/RecipeCards";
import RecipeCard from "../recipes/RecipeCard";
import TooltipCheck from "./ToolTip";
import { TbInfoSmall } from "react-icons/tb";

export default function AiInputForm() {
  const [todaysMood, setTodaysMood] = useState("");
  const [timeToSpend, setTimeToSpend] = useState("");
  const [country, setCountry] = useState("");
  const [preferences, setPreferences] = useState("");
  const [selectedMood, setSelectedMood] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedPref, setSelectedPref] = useState("");
  const [selectedChecks, setSelectedChecks] = useState([]);
  //const [recipe, setRecipe] = useState(null);
  const [recipes, setRecipes] = useState(null);
  const [showRecipe, setShowRecipe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [openSingleCard, setOpenSingleCard] = useState(false);

  //it should be a json format outlined with a title, ingredients, step by step and a short historical review of the dish.

  const handleSelect = (label, isChecked) => {
    //console.log("Checkbox selected:", label);
    // console.log("Is checked:", isChecked);
    if (isChecked) {
      setSelectedChecks((prevSelected) => [...prevSelected, label]);
    } else {
      setSelectedChecks((prevSelected) =>
        prevSelected.filter((item) => item !== label)
      );
    }
  };

  const handleSubmit = async () => {
    setLoading(true);
    const checkedItems = dontContain
      .filter((item) => selectedChecks.includes(item))
      .join(", ");
    // Send selected values to the backend
    const prompt = `I'm looking for recipes, i'am feeling ${todaysMood} and would like a recipe to counter that. I have a maximum ${timeToSpend} to make the dish. It can not contain ${checkedItems} I would prefer food that's ${preferences} from ${country}. Can you give me three significant recipes based on this?  
    Arrange the recipes in a json format and make sure to always include a recipe_title, ingredients, steps, motivation_heading and a smal motivattion and a historic_overview. Make that with European measurements.
    `;
    console.log(prompt);
    setShowRecipe(true);
    // skicka objekt med states
    try {
      const response = await fetch("http://localhost:4000/recipes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      });
      const data = await response.json();
      setLoading(false);
      setRecipes(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleRecipeCardClick = (recipe) => {
    setOpenSingleCard(recipe);
    //console.log("Recipe clicked:", recipe);
  };

  return (
    <div className="w-full">
        <div className="flex flex-col text-center text-[#250D01] px-4">
          <h3 className="text-center md:leading-[75px] font-semibold text-3xl md:text-[75px]">
            Make your choices
          </h3>
          <p className="max-w-[838px] mx-auto py-10">
            Your culinary adventure begins here! Choose your mood, ingredients,
            dietary preferences, and more, and let ChefMate work its magic to
            craft a personalized recipe just for you. Like a trusty sous chef,
            ChefMate is here to inspire, innovate, and elevate your cooking
            experience. So go ahead, make your selections, and get ready to
            embark on a flavor-filled journey!
          </p>
        </div>
        <div className="flex flex-col items-center justify-center w-full mx-auto px-4">
          <div className="flex flex-col justify-betweeen ">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 w-full max-w-[90rem]">
              <div className="flex flex-col ">
                <Dropdown>
                  <Dropdown.Button>
                    {selectedMood ? (
                      <>
                        <span>Todays mood: </span>
                        <span className="pl-2 font-bold">{selectedMood}</span>
                      </>
                    ) : (
                      "Todays mood"
                    )}
                  </Dropdown.Button>
                  <Dropdown.Menu>
                    {moodOptions.map((mood, index) => (
                      <Dropdown.MenuItem
                        key={index}
                        //  onSelect={() => setTodaysMood(mood)}
                        onSelect={() => {
                          setTodaysMood(mood);
                          setSelectedMood(mood);
                        }}
                      >
                        {mood}
                      </Dropdown.MenuItem>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              {/*pref */}
              <Dropdown>
                <Dropdown.Button>
                  {selectedPref ? (
                    <>
                      <span>Prefereneces: </span>
                      <span className="pl-2 font-bold">{selectedPref}</span>
                    </>
                  ) : (
                    "Prefereneces(include)"
                  )}
                </Dropdown.Button>
                <Dropdown.Menu>
                  {mustContain.map((pref, index) => (
                    <Dropdown.MenuItem
                      key={index}
                      onSelect={() => {
                        setPreferences(pref);
                        setSelectedPref(pref);
                      }}
                    >
                      {pref}
                    </Dropdown.MenuItem>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
              {/*time */}
              <Dropdown>
                <Dropdown.Button>
                  {selectedTime ? (
                    <>
                      <span>Time to spend: </span>
                      <span className="pl-2 font-bold">{selectedTime}</span>
                    </>
                  ) : (
                    "Time to spend"
                  )}
                </Dropdown.Button>
                <Dropdown.Menu>
                  {timeOptions.map((time, index) => (
                    <Dropdown.MenuItem
                      key={index}
                      onSelect={() => {
                        setTimeToSpend(time);
                        setSelectedTime(time);
                      }}
                    >
                      {time}
                    </Dropdown.MenuItem>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
              {/*from */}
              <Dropdown>
                <Dropdown.Button>
                  {selectedCountry ? (
                    <>
                      <span>Preferably from: </span>
                      <span className="pl-2 font-bold">{selectedCountry}</span>
                    </>
                  ) : (
                    "Preferably from"
                  )}
                </Dropdown.Button>
                <Dropdown.Menu>
                  {countryOptions.map((from, index) => (
                    <Dropdown.MenuItem
                      key={index}
                      onSelect={() => {
                        setCountry(from);
                        setSelectedCountry(from);
                      }}
                    >
                      {from}
                    </Dropdown.MenuItem>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
          {/*checkboxes */}
          <div className="w-full h-auto max-w-[90rem] flex flex-col py-10">
            <TooltipCheck
              text={
                "If you have allergies or specific dislikes, feel free to check the corresponding boxes to tailor your recipe recommendations accordingly."
              }
            >
              <div className="font-semibold pb-4 gap-1 text-xl w-fit mx-auto flex flex-row ">
                <h3 className="pt-2">Don't include</h3>
                <div className="rounded-full w-[22px] h-[22px] items-center justify-center flex border-slate-200 border">
                  <TbInfoSmall size={30} />
                </div>
              </div>
            </TooltipCheck>
            <form action="" className="flex justify-between mx-auto">
              <div className="grid items-center justify-center w-full h-auto grid-cols-1 gap-6 mx-auto sm:grid-cols-2 xl:grid-cols-4 ">
                {dontContain.map((dont, index) => (
                  <div
                    key={index}
                    className="hover:font-semibold flex w-[335px] sm:w-[264px] mb-[-15px] rounded-[10px] py-2 sm:py-3 px-2 items-center justify-between"
                  >
                    <Checkbox
                      checked={selectedChecks.includes(dont)}
                      onCheckedChange={(isChecked) =>
                        handleSelect(dont, isChecked)
                      }
                      id={index}
                      label={dont}
                      checkBg={"[#FFFFFF]"}
                      borderColor={"slate-100"}
                    />
                  </div>
                ))}
              </div>
            </form>
          </div>
          <div className="pt-10">
            <button
              onClick={handleSubmit}
              className="px-8 py-2 border uppercase bg-[#250D01] text-[#FFFFFF] rounded-full text-lg font-semibold hover:scale-105"
            >
              Search
            </button>
          </div>
        </div>
        <div>
          {loading && (
            <div className="flex justify-center items-center text-2xl p-4">
              Generating recipes...
            </div>
          )}
          {recipes && (
            <div className="w-[calc(100vw-18px)] bg-[#E1DAD0]">
            <div className="w-full bg-[#E1DAD0] h-auto mt-10 lg:mt-20 py-10 lg-py-20">
              <RecipeCards recipes={recipes} onClick={handleRecipeCardClick} />
            </div>

            </div>
          )}
        </div>
        <div>
          {openSingleCard && (
            <div className="w-full bg-[#FFFFFF] h-auto pt-10 lg:pt-20 px-4">
              <RecipeCard recipes={openSingleCard} />
            </div>
          )}
        </div>
    </div>
  );
}
