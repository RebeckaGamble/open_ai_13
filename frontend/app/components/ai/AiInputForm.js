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
  const [recipe, setRecipe] = useState(null);
  const [showRecipe, setShowRecipe] = useState(false); // Tillstånd för att visa RecipeCards
  const [loading, setLoading] = useState(false);

  //it should be a json format outlined with a title, ingredients, step by step and a short historical review of the dish.
  const jsonFormAi = {
    result: {
      title: "Lasagna",
      servings: 2,
    },
    ingredients: [
      {
        ingredient: "Lasagna plates",
        amount: "250g",
      },
      {
        ingredient: "Onion",
        amount: "1",
      },
      {
        ingredient: "Egg",
        amount: "1",
      },
      {
        ingredient: "Lean ground beef",
        amount: "500g",
      },
      {
        ingredient: "crushed tomatoes",
        amount: "",
      },
    ],
    steps: [
      "chop the onion",
      "fry the minced meat and the onion",
      "place the lasagna plates in a form and alternate with the minced meat mixture"
    ],
    history: "Lasagna has its roots in ancient Rome, although the dish we know today has evolved over the centuries. The name 'lasagna' originally referred to the wide, flat pasta sheets used in the dish rather than the assembled dish itself."
  };

  const handleSelect = (label, isChecked) => {
    console.log("Checkbox selected:", label);
    console.log("Is checked:", isChecked);
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
    const prompt = `I'm feeling ${todaysMood} and have maximum ${timeToSpend} to make food. It can not contain ${checkedItems} I would prefer food thats ${preferences} from ${country}. Can you give me one recipe based on this?  
    Arrange the answer in a json format and make sure to always include a title, ingredients, steps and historic_overview.
    `;
    console.log(prompt);
    // setResponse(prompt);
    setShowRecipe(true); // Visa RecipeCards-komponenten när användaren klickar på sökknappen
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
      setRecipe(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="w-full">
      <div className="flex flex-col text-center ">
        <h3 className="text-center text-[75px]">Make your choices</h3>
        <p className="max-w-[838px] mx-auto pb-4 px-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum
          architecto eveniet expedita vel, ea quisquam quis? Voluptate fuga
          consequatur dolore? Repellat nobis itaque veniam aliquid consequuntur
          possimus, reprehenderit assumenda cupiditate.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center w-full mx-auto">
        <div className="flex flex-col justify-betweeen ">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 w-full max-w-[90rem]">
            <div className="flex flex-col ">
              <Dropdown>
                <Dropdown.Button>
                  {selectedMood
                    ? "Todays mood: " + selectedMood
                    : "Todays mood"}
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
                {selectedPref
                  ? "Prefereneces: " + selectedPref
                  : "Prefereneces(include)"}
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
                {selectedTime
                  ? "Time to spend:  " + selectedTime
                  : "  Time to spend"}
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
                {selectedCountry
                  ? "Preferably from: " + selectedCountry
                  : "Preferably from"}
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
        <div className="w-full max-w-[90rem] flex flex-col py-10">
          <h3 className="pb-4 text-xl text-center">Don't include: </h3>
          <form action="" className="flex justify-between mx-auto">
            <div className="grid items-center justify-center w-full grid-cols-1 gap-6 mx-auto sm:grid-cols-2 xl:grid-cols-4 ">
              {dontContain.map((dont, index) => (
                <div
                  key={index}
                  className="flex w-[241px] sm:w-[264px] mb-[-15px] rounded-[10px] h-[32px] items-center justify-between bg-[#A83301]"
                >
                  <Checkbox
                    //key={index}
                    checked={selectedChecks.includes(dont)}
                    onCheckedChange={(isChecked) =>
                      handleSelect(dont, isChecked)
                    }
                    id={index}
                    label={dont}
                    checkBg={"[#8A2F02]"}
                    borderColor={"[#F8E8C0]"}
                  />
                </div>
              ))}
            </div>
          </form>
        </div>
        <div className="py-10">
          <button
            onClick={handleSubmit}
            className="px-8 py-2 border uppercase border-slate-50 bg-[#EC7D46] rounded-full text-lg font-semibold hover:scale-105"
          >
            Search
          </button>
        </div>
        <div>
          {loading && <div>Loading...</div>}
          {recipe && (
            // <>
            //   <div>{recipe.title}</div>
            //   <div>{recipe.ingredients}</div>
            // </>
            <div className="bg-[#8A2F02] h-auto ">
              <RecipeCards recipe={recipe} />
            </div>
          )}
        </div>
        {/* Visa RecipeCards om showRecipe är true */}
        {/* {showRecipe && <RecipeCards recipe />} */}
      </div>
    </div>
  );
}
