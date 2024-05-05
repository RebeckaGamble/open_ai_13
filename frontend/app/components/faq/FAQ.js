"use client";
import React, { useState } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { TiArrowSortedDown } from "react-icons/ti";

import cx from "classnames";

const AccordionItem = ({ title, value, isOpen, onToggle, children }) => {
  return (
    <Accordion.Item
      value={value}
      className="border-b border-[#250D01] h-auto py-4"
    >
      <Accordion.Trigger
        className="flex flex-row items-center justify-between w-full font-semibold"
        onClick={onToggle}
      >
        <span className="text-[16px] text-left sm:text-[18px]">{title}</span>
        <TiArrowSortedDown
          className={cx(
            "ml-2 h-5 w-5 shrink-0 text-[#250D01] ease-in-out",
            isOpen && "rotate-180", //instead of chevronup icon
            "group-radix-state-open:duration-300"
          )}
        />
      </Accordion.Trigger>
      <Accordion.Content className="leading-6 py-2">
        {children}
      </Accordion.Content>
    </Accordion.Item>
  );
};

export default function AccordionFAQ() {
  const [openItem, setOpenItem] = useState(null);

  const handleToggle = (value) => {
    setOpenItem((prevOpenItem) => (prevOpenItem === value ? null : value));
  };

  return (
    <div className="w-full max-w-[90rem] bg-[#FFFFFF] mx-auto h-auto rounded-[10px] shadow-md p-4 sm:p-10">
      <Accordion.Root type="single" collapsible className="flex flex-col">
        <AccordionItem
          title={"What is ChefMate?"}
          value="item-1"
          isOpen={openItem === "item-1"}
          onToggle={() => handleToggle("item-1")}
        >
          <p className="pb-2">
            ChefMate is your innovative culinary companion, designed to bring
            the joy of cooking right to your fingertips! It's not just your
            ordinary recipe generator; it's like having a food-loving friend who
            understands your mood and preferences.
          </p>
          <p>
            ChefMate crafts personalized recipes tailored to your tastes, using
            cutting-edge technology to create flavor experiences that match your
            unique cravings.
          </p>
        </AccordionItem>
        <AccordionItem
          title={"Do i need an account to use ChefMate"}
          value="item-2"
          isOpen={openItem === "item-2"}
          onToggle={() => handleToggle("item-2")}
        >
          <p className="pb-2">
            Nope! You can use ChefMate without creating an account. It's
            completely optional. You're welcome to explore and generate recipes
            without any commitments.
          </p>
          <p>
            However, if you want to save your favorite recipes for easy access
            later on, you can create an account. It's quick, easy, and gives you
            the ability to store and revisit those special recipes whenever you
            want. But rest assured, you can enjoy ChefMate's features
            hassle-free, with or without an account.
          </p>
        </AccordionItem>
        <AccordionItem
          title={"How does it work?"}
          value="item-3"
          isOpen={openItem === "item-3"}
          onToggle={() => handleToggle("item-3")}
        >
          <p className="pb-2">
            ChefMate works its magic by combining advanced algorithms with your
            input to generate personalized recipes tailored to your taste
            preferences, mood, dietary restrictions, and even time constraints.
          </p>
          <p>
            Simply tell ChefMate your dietary preferences, mood, and maybe even
            how much time you have, and it will craft a recipe just for you!
            Whether you're in the mood for comfort food or craving something
            adventurous from a specific cuisine, ChefMate has you covered.
          </p>
        </AccordionItem>
        <AccordionItem
          title={"Is ChefMate for everyone?"}
          value="item-4"
          isOpen={openItem === "item-4"}
          onToggle={() => handleToggle("item-4")}
        >
          <p>
            Absolutely! ChefMate is designed to cater to a wide range of tastes,
            dietary preferences, cooking skill levels, and even time
            constraints. Whether you're a seasoned chef looking for inspiration
            or a novice cook just starting out, ChefMate is here to help you
            create delicious meals that suit your individual palate and
            lifestyle.
          </p>
        </AccordionItem>
        <AccordionItem
          title={"Does ChefMate cost anything to use?"}
          value="item-5"
          isOpen={openItem === "item-5"}
          onToggle={() => handleToggle("item-5")}
        >
          <p>
            Nope, ChefMate is completely free to use for all users! We believe
            that everyone deserves access to delicious and personalized recipes
            without any cost barriers. So go ahead, explore, cook, and enjoy
            your culinary adventures with ChefMate, all at no cost to you!
          </p>
        </AccordionItem>
        <AccordionItem
          title={"Do I need to download an app to use ChefMate?"}
          value="item-6"
          isOpen={openItem === "item-6"}
          onToggle={() => handleToggle("item-6")}
        >
          <p className="pb-2">
            Currently, ChefMate is not available as a downloadable app, but you
            can access it through your web browser on any device. Simply visit
            our website, and start cooking up a storm!
          </p>
          <p>
            However, who knows what the future holds? We're always exploring new
            ways to make ChefMate even more accessible and convenient for our
            users, so stay tuned for updates on potential app releases.
          </p>
        </AccordionItem>
      </Accordion.Root>
    </div>
  );
}
