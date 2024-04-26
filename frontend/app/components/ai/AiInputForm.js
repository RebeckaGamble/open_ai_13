"use client";
import React, { useState } from "react";
import Dropdown from "./Dropdown";
import { IoIosArrowDown } from "react-icons/io";
//import DropdownWithCheck from "./DropdownWithCheck";
import {
  moodOptions,
  mustContain,
  timeOptions,
  countryOptions,
} from "./dropdownOptions";

export default function AiInputForm() {
  const [todaysMood, setTodaysMood] = useState("");
  const [timeToSpend, setTimeToSpend] = useState("");
  const [country, setCountry] = useState("");
  const [preferences, setPreferences] = useState("");

  const [selectedMood, setSelectedMood] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("")
  const [selectedPref, setSelectedPref] = useState("");

  const [response, setResponse] = useState("");

  const handleSubmit = async () => {
    // Send selected values to the backend
    const prompt = `I'm feeling ${todaysMood} and have maximum ${timeToSpend} to make food. It can not contain.. I would prefer food thats ${preferences} from ${country}. Can you give me some different recipes based on this?`;
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
        <p className="max-w-[838px] mx-auto">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum
          architecto eveniet expedita vel, ea quisquam quis? Voluptate fuga
          consequatur dolore? Repellat nobis itaque veniam aliquid consequuntur
          possimus, reprehenderit assumenda cupiditate.
        </p>
      </div>
      <div className="w-full max-w-[1199px] mx-auto  flex flex-col items-center justify-center">
        <div className="flex flex-row flex-wrap gap-6 w-full justify-center ">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <Dropdown>
              <Dropdown.Button>
                {selectedMood ? selectedMood : "Todays mood"}
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
              {selectedPref ? selectedPref : "Prefereneces"}
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
            {selectedTime ? selectedTime : "Time to spend"}
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
            {selectedCountry ? selectedCountry : "Preferably from"}

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
