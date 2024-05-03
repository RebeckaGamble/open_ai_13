"use client";
import React, { useState } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { TiArrowSortedDown } from "react-icons/ti";

import cx from "classnames";

const AccordionItem = ({ title, value, isOpen, onToggle, children }) => {
  return (
    <Accordion.Item value={value} className="border-b border-[#8A2F02] h-auto py-4">
      <Accordion.Trigger
        className="flex flex-row items-center justify-between w-full font-semibold"
        onClick={onToggle}
      >
        <span className="text-[18px]">{title}</span>
        <TiArrowSortedDown 
          className={cx(
            "ml-2 h-5 w-5 shrink-0 text-[#8A2F02] ease-in-out dark:text-gray-400",
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
    <div className="w-[600px] bg-[#F8E8C0] mx-auto h-auto shadow-md p-8">
      <Accordion.Root type="single" collapsible className="flex flex-col  ">
        <AccordionItem
          title={"What is ChefMate?"}
          value="item-1"
          isOpen={openItem === "item-1"}
          onToggle={() => handleToggle("item-1")}
        >
          <ul className="list-disc pl-5">
            <li>something </li>
            <li>something</li>
            <li>something</li>
          </ul>
        </AccordionItem>
        <AccordionItem
          title={"Do i need an account to use ChefMate"}
          value="item-2"
          isOpen={openItem === "item-2"}
          onToggle={() => handleToggle("item-2")}
        >
          <p>
            No, you just need to create an account if you want to save your
            recepies for later.
          </p>
          <ul className="list-disc pl-5 pt-2">
            <li className="">something</li>
            <li>something</li>
            <li>something</li>
          </ul>
        </AccordionItem>
        <AccordionItem
          title={"How does it work?"}
          value="item-3"
          isOpen={openItem === "item-3"}
          onToggle={() => handleToggle("item-3")}
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum
            facilis natus alias maxime culpa? Eum, sapiente inventore. Ratione,
            repudiandae odio!
          </p>
        </AccordionItem>
        <AccordionItem
          title={"Is ChefMate for everyone?"}
          value="item-4"
          isOpen={openItem === "item-4"}
          onToggle={() => handleToggle("item-4")}
        >
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa quo ex
            delectus doloremque placeat sed expedita laborum, facere amet fuga
            aspernatur, tenetur dolorum iste quisquam culpa cumque voluptatem
            suscipit. Ipsum?
          </p>
        </AccordionItem>
        <AccordionItem
          title={"Does ChefMate cost anything to use?"}
          value="item-5"
          isOpen={openItem === "item-5"}
          onToggle={() => handleToggle("item-5")}
        >
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem, excepturi!
          </p>
        </AccordionItem>
        <AccordionItem
          title={"Do I need to download an app to use ChefMate?"}
          value="item-6"
          isOpen={openItem === "item-6"}
          onToggle={() => handleToggle("item-6")}
        >
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla,
            atque veniam debitis autem repudiandae a quis officia est nostrum
            velit ab iure, nesciunt ipsa soluta, fugiat sed ea? Ipsum ipsam,
            voluptatem laudantium quis ducimus sapiente et omnis reiciendis iste
            non!
          </p>
        </AccordionItem>
      </Accordion.Root>
    </div>
  );
}
