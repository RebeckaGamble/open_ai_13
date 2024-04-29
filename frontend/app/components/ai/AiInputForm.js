"use client";
import React, { useState } from "react";
import Dropdown from "./Dropdown";
import {
  moodOptions,
  mustContain,
  timeOptions,
  countryOptions,
  dontContain
} from "./dropdownOptions";
import Checkbox from "./Checkbox";

export default function AiInputForm() {
  const [todaysMood, setTodaysMood] = useState("");
  const [timeToSpend, setTimeToSpend] = useState("");
  const [country, setCountry] = useState("");
  const [preferences, setPreferences] = useState("");

  const [selectedMood, setSelectedMood] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("")
  const [selectedPref, setSelectedPref] = useState("");

  const [selectedChecks, setSelectedChecks] = useState([]);

  const [response, setResponse] = useState("");

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
    const checkedItems = dontContain
    .filter(item => selectedChecks.includes(item))
    .join(", ");

    // Send selected values to the backend
    const prompt = `I'm feeling ${todaysMood} and have maximum ${timeToSpend} to make food. It can not contain ${checkedItems} I would prefer food thats ${preferences} from ${country}. Can you give me some different recipes based on this?`;
    console.log(prompt);
    setResponse(prompt);
    /*
    setResponse(prompt);
    */
    //skicka objekt med states
    /*
    try {
      const response = await fetch("http://localhost:3008/recipes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      });

      const data = await response.json();
      setResponse(data);
    } catch (error) {
      console.error("Error:", error);
    }*/
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
      <div className="w-full flex flex-col items-center justify-center mx-auto">
        <div className="flex flex-col justify-betweeen ">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 w-full max-w-[90rem]">
            <div className="flex flex-col ">
            <Dropdown>
              <Dropdown.Button>
                {selectedMood ? "Todays mood: " + selectedMood : "Todays mood"}
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
              {selectedPref ? "Prefereneces: " + selectedPref : "Prefereneces(include)"}
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
            {selectedTime ? "Time to spend:  " + selectedTime : "  Time to spend"}
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
            {selectedCountry ? "Preferably from: " + selectedCountry : "Preferably from"}

            </Dropdown.Button>
            <Dropdown.Menu>
              {countryOptions.map((from, index) => (
                <Dropdown.MenuItem
                  key={index}
                  onSelect={() => {
                    setCountry(from)
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
          <h3 className="text-center text-xl pb-4">Don't include: </h3>
          <form action="" className="flex justify-between mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 w-full gap-6 items-center mx-auto justify-center ">
              {dontContain.map((dont, index) => (
                <div key={index} 
                className="flex w-[241px]  sm:w-[264px] mb-[-15px] rounded-[10px] h-[32px] items-center justify-between bg-[#A83301]"
                >
                  <Checkbox
                    //key={index}
                    checked={selectedChecks.includes(dont)} 
                    onCheckedChange={(isChecked) => handleSelect(dont, isChecked)} 
                    id={index}
                    label={dont}
                  />
                </div>
              ))}
            </div>
          </form>
        </div>
        <div className="py-10">
          <button
            onClick={handleSubmit}
            className="px-6 py-0.5 border uppercase border-slate-50 bg-white rounded-sm hover:scale-105"
          >
            Button
          </button>
        </div>

        {response && (
          <div className="px-6 py-8 text-right">
            <h2>Response from API:</h2>
            <p>{response}</p>
          </div>
        )}
      </div>
    </div>
  );
}
