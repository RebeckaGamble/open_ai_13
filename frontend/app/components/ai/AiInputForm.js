"use client";
import React, { useState } from "react";
import Dropdown from "./Dropdown";
import { IoIosArrowDown } from "react-icons/io";

export default function AiInputForm() {
  let [text, setText] = useState("Select an item");

  return (
    <div className="w-full">
      <h3 className="text-center py-10">AiInputForm comp:</h3>
      <div className="w-full flex flex-col items-center justify-center">
        <div className="flex flex-row gap-6 ">
          <Dropdown>
            <Dropdown.Button>
              <p className="flex flex-row items-center">
                <span className="pr-1">Todays mood </span> <IoIosArrowDown />
              </p>
            </Dropdown.Button>
            <Dropdown.Menu>
              <Dropdown.MenuItem onSelect={() => setText("Clicked Item 2")}>
                Bitter
              </Dropdown.MenuItem>
              <Dropdown.MenuItem onSelect={() => setText("Clicked Item 1")}>
                Bubbly
              </Dropdown.MenuItem>
              <Dropdown.MenuItem onSelect={() => setText("Clicked Item 1")}>
                Cold
              </Dropdown.MenuItem>
              <Dropdown.MenuItem onSelect={() => setText("Clicked Item 1")}>
                Creamy
              </Dropdown.MenuItem>
              <Dropdown.MenuItem onSelect={() => setText("Clicked Item 1")}>
                Frosty
              </Dropdown.MenuItem>
              <Dropdown.MenuItem onSelect={() => setText("Clicked Item 1")}>
                Hot
              </Dropdown.MenuItem>
              <Dropdown.MenuItem onSelect={() => setText("Clicked Item 1")}>
                Juicy
              </Dropdown.MenuItem>
              <Dropdown.MenuItem onSelect={() => setText("Clicked Item 1")}>
                Salty
              </Dropdown.MenuItem>
              <Dropdown.MenuItem onSelect={() => setText("Clicked Item 1")}>
                Smooth
              </Dropdown.MenuItem>
              <Dropdown.MenuItem onSelect={() => setText("Clicked Item 1")}>
                Sour
              </Dropdown.MenuItem>
              <Dropdown.MenuItem onSelect={() => setText("Clicked Item 1")}>
                Sweet
              </Dropdown.MenuItem>
            </Dropdown.Menu>
          </Dropdown>
          {/*time */}
          <Dropdown>
            <Dropdown.Button>
              <p className="flex flex-row items-center">
                <span className="pr-1">Time to spend </span> <IoIosArrowDown />
              </p>
            </Dropdown.Button>
            <Dropdown.Menu>
              <Dropdown.MenuItem onSelect={() => setText("Clicked Item 1")}>
                20 - I'm in a hurry
              </Dropdown.MenuItem>
              <Dropdown.MenuItem onSelect={() => setText("Clicked Item 2")}>
                30 - Keep it simple
              </Dropdown.MenuItem>
              <Dropdown.MenuItem onSelect={() => setText("Clicked Item 1")}>
                45 - 60 minutes
              </Dropdown.MenuItem>
              <Dropdown.MenuItem onSelect={() => setText("Clicked Item 1")}>
                60 - Bring it on
              </Dropdown.MenuItem>
              <Dropdown.MenuItem onSelect={() => alert("good for you ;)")}>
                90 {">"} I have all day
              </Dropdown.MenuItem>
            </Dropdown.Menu>
          </Dropdown>
          {/*from */}
          <Dropdown>
            <Dropdown.Button>
              <p className="flex flex-row items-center">
                <span className="pr-1">Preferences/preferably from </span>{" "}
                <IoIosArrowDown />
              </p>
            </Dropdown.Button>
            <Dropdown.Menu>
              <Dropdown.MenuItem onSelect={() => setText("Clicked Item 2")}>
                African
              </Dropdown.MenuItem>
              <Dropdown.MenuItem onSelect={() => setText("Clicked Item 1")}>
                Asian{" "}
              </Dropdown.MenuItem>
              <Dropdown.MenuItem onSelect={() => setText("Clicked Item 1")}>
                European
              </Dropdown.MenuItem>
              <Dropdown.MenuItem onSelect={() => setText("Clicked Item 1")}>
                Middle eastern
              </Dropdown.MenuItem>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="py-10">
          <div className="px-6 py-8 text-right">
            <p>{text}</p>
          </div>
          <button className="px-6 py-0.5 border uppercase border-slate-50 bg-white rounded-sm hover:scale-105">
            Button
          </button>
        </div>
      </div>
    </div>
  );
}
