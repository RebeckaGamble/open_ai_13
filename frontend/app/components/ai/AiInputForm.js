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
import { Cross1Icon } from "@radix-ui/react-icons";

export default function AiInputForm() {
  /*state for inputs and checkboxes */
  const [todaysMood, setTodaysMood] = useState("");
  const [timeToSpend, setTimeToSpend] = useState("");
  const [country, setCountry] = useState("");
  const [preferences, setPreferences] = useState("");
  const [selectedMood, setSelectedMood] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedPref, setSelectedPref] = useState("");
  const [selectedChecks, setSelectedChecks] = useState([]);
  /*state to generate recipes */
  const [recipes, setRecipes] = useState(null);
  const [showRecipe, setShowRecipe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [openSingleCard, setOpenSingleCard] = useState(false);
  const [recipeImages, setRecipeImages] = useState([]);
  const [newRecipe, setNewRecipe] = useState(null);

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

  const fetchNewRecipe = async () => {
    setLoading(true);
    //join the checkboxes for the prompt
    const checkedItems = dontContain
      .filter((item) => selectedChecks.includes(item))
      .join(", ");
    // Send selected values to the backend
    const prompt = `I'm looking for recipes, I am feeling ${todaysMood} and would like a recipe to counter that. I have a maximum of ${timeToSpend} to make the dish. It cannot contain ${checkedItems}. I would prefer food that's ${preferences} from ${country}. Can you give me one recipe based on this?
      Please provide the recipe in the following JSON format:

      {
        "recipeId": "",
        "recipe_title": "",
        "ingredients": [],
        "steps": [],
        "historic_overview": "",
        "motivation_heading": "",
        "motivation": ""
      }

      Make sure to include a recipe_title, ingredients, steps, motivation_heading, a small motivation, and a historic_overview. Use deciliters instead of cups in the measurements and Celsius instead of Fahrenheit. Make sure not to use the same recipe as before.
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
      console.log("image: ", recipeImages);
      const data = await response.json();
      if (!recipes) {
        // If no recipes are currently set, set the new recipe as the initial recipe
        setRecipes([data]);
      } else {
        // If recipes already exist, add the new recipe to the existing list
        setRecipes([...recipes, data]);
      }

      //  const newRecipe = await generateNewRecipe();
      //  setRecipes([...recipes, newRecipe]);

      setLoading(false);
      // setRecipes(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    fetchNewRecipe();
    setLoading(false);
  };

  //open single recipe
  const handleRecipeCardClick = (recipe) => {
    setOpenSingleCard({ ...recipe, image: recipeImages[recipe.imageKey] });

    // setOpenSingleCard({...recipe, image});
    //console.log("Recipe clicked:", recipe);
    // setOpenSingleCard(recipe)
  };

  return (
    <div className="w-full">
      <div className="flex flex-col text-center text-[#250D01] px-4">
        <h3 className="text-center md:leading-[75px] font-semibold text-3xl md:text-[75px]">
          Let me help you!{" "}
        </h3>
        <p className="max-w-[838px] mx-auto py-10">
          Ready to dive into the culinary adventure? Simply tell me your mood,
          how much time you've got, your preferences and a season, and I'll
          create some personalized recipe suggestions just for you. Let's team
          up and cook something delicious!
        </p>
      </div>
      <div className="flex flex-col items-center justify-center w-full pb-12 mx-auto px-4">
        <div className="flex flex-col justify-betweeen ">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 w-full max-w-[90rem]">
            <div className="flex flex-col ">
              <Dropdown>
                <Dropdown.Button>
                  {selectedMood ? (
                    <>
                      <span>How do you feel today? </span>
                      <span className="pl-2 font-bold">{selectedMood}</span>
                    </>
                  ) : (
                    "How do you feel today?"
                  )}
                </Dropdown.Button>
                <Dropdown.Menu>
                  {moodOptions.map((mood, index) => (
                    <Dropdown.MenuItem
                      key={index}
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
            {/*time */}
            <Dropdown>
              <Dropdown.Button>
                {selectedTime ? (
                  <>
                    <span>How much time do you have? </span>
                    <span className="pl-2 font-bold">{selectedTime}</span>
                  </>
                ) : (
                  "How much time do you have?"
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
            {/*pref */}
            <Dropdown>
              <Dropdown.Button>
                {selectedPref ? (
                  <>
                    <span>Do you have any preference? </span>
                    <span className="pl-2 font-bold">{selectedPref}</span>
                  </>
                ) : (
                  "Do you have any preference?"
                )}
              </Dropdown.Button>
              <Dropdown.Menu>
                {mustContain.map((pref, index) => (
                  <Dropdown.MenuItem
                    key={index}
                    onSelect={() => {
                      setPreferences(pref);
                      setSelectedPref(pref);
                      setRecipeImages(pref);
                      // const images = food.find((item) => item[pref]);
                      //if (images) {
                      // setRecipeImages(images[pref]);
                      //}
                    }}
                  >
                    {pref}
                  </Dropdown.MenuItem>
                ))}
              </Dropdown.Menu>
            </Dropdown>

            {/*from */}
            <Dropdown>
              <Dropdown.Button>
                {selectedCountry ? (
                  <>
                    <span>What budget do you have? </span>
                    <span className="pl-2 font-bold">{selectedCountry}</span>
                  </>
                ) : (
                  "What budget do you have?"
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
        <div className="w-full h-auto max-w-[90rem] mx-auto flex flex-col py-10">
          <div className="w-full flex flex-row justify-center items-center">
            <div className="font-semibold md:flex-row md:flex pb-4 mx-auto text-xl">
              <TooltipCheck
                text={
                  "If you have allergies or specific dislikes, feel free to check the corresponding boxes to tailor your recipe recommendations accordingly."
                }
              >
                <div className="w-fit items-center justify-center mx-auto ">
                  <p className=" relative text-[20px] pr-2 text-center sm:text-[24px] ">
                    Do you have any allergies?
                    <span className="rounded-full w-[24px] h-[24px] flex absolute top-[-6px] right-[-7px]">
                      <TbInfoSmall size={20} />
                    </span>
                  </p>
                </div>
              </TooltipCheck>
              <p className=" text-[20px] text-center sm:text-[24px]">
                I will not put this into your recipe!
              </p>
            </div>
            {/** 
                <div className="rounded-full w-[22px] h-[22px] items-center justify-center flex border-slate-200 border">
                  <TbInfoSmall size={30} />
                </div>
                */}
          </div>
          <form action="" className="flex justify-between mx-auto">
            <div className="flex flex-wrap items-center justify-center w-full h-auto gap-6 mx-auto ">
              {dontContain.map((dont, index) => (
                <div
                  key={index}
                  className="hover:font-semibold flex mb-[-15px] items-center "
                >
                  <Checkbox
                    checked={selectedChecks.includes(dont)}
                    onCheckedChange={(isChecked) =>
                      handleSelect(dont, isChecked)
                    }
                    id={index}
                    label={dont}
                    checkBg={"[#FFFFFF]"}
                    //borderColor={"black"}
                    checkIcon={<Cross1Icon />}
                    className={
                      "leading-none text-[#000000] text-[18px] pl-2 font-semibold"
                    }
                  />
                </div>
              ))}
            </div>
          </form>
        </div>
        <div className="pt-10">
          <button
            onClick={fetchNewRecipe}
            className="px-8 py-2 border uppercase bg-[#250D01] text-[#FFFFFF] rounded-full text-lg font-semibold hover:scale-105"
          >
            Search
          </button>
        </div>
      </div>
      <div>
        {loading && (
          <div className="flex justify-center items-center text-2xl p-4">
            Generating recipe...
          </div>
        )}
        <div className="flex flex-col gap-10">
          {recipes && (
            <div className="w-[calc(100vw-18px)] bg-[#E1DAD0]">
              <div className="w-full bg-[#E1DAD0] h-auto mt-10 lg:mt-20 py-10 lg-py-20">
                <RecipeCards
                  recipes={recipes}
                  recipeImages={recipeImages}
                  onClick={handleRecipeCardClick}
                  handleSubmit={handleSubmit}
                />
              </div>
            </div>
          )}
          
          {newRecipe && (
            <div className="w-[calc(100vw-18px)] bg-[#E1DAD0]">
              <div className="w-full bg-[#E1DAD0] h-auto mt-10 lg:mt-20 py-10 lg-py-20">
                <RecipeCards
                  recipes={[newRecipe]}
                  recipeImages={recipeImages}
                  onClick={handleRecipeCardClick}
                  handleSubmit={fetchNewRecipe}
                  isLoading={loading}
                />
              </div>
            </div>
          )}
        </div>
      </div>
      <div>
        {openSingleCard && (
          <div className="w-full bg-[#FFFFFF] h-auto pt-10 lg:pt-20 px-4">
            <RecipeCard recipes={openSingleCard} image={openSingleCard.image} />
          </div>
        )}
      </div>
    </div>
  );
}
