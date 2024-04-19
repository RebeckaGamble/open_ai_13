"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import * as RadixDropdownMenu from "@radix-ui/react-dropdown-menu";
import { AnimatePresence, motion, useAnimationControls } from "framer-motion";

let DropdownContext = createContext();
export default function Dropdown({ children }) {
  let [open, setOpen] = useState(false);

  return (
    <DropdownContext.Provider value={{ open, setOpen }}>
      <RadixDropdownMenu.Root open={open} onOpenChange={setOpen}>
        {children}
      </RadixDropdownMenu.Root>
    </DropdownContext.Provider>
  );
}

function DropdownButton({ children }) {
  return (
    <RadixDropdownMenu.Trigger className="cursor-default select-none border bg-white border-slate-600 rounded px-6 py-1 text-md hover:bg-orange-200/50 focus-visible:outline-none data-[state=open]:bg-orange-400/75">
      {children}
    </RadixDropdownMenu.Trigger>
  );
}

Dropdown.Button = DropdownButton;

let DropdownMenuContext = createContext();
function DropdownMenu({ children }) {
  let { open, setOpen } = useContext(DropdownContext);
  let controls = useAnimationControls();

  async function closeMenu() {
    await controls.start("closed");
    setOpen(false);
  }

  useEffect(() => {
    if (open) {
      controls.start("open");
    }
  }, [controls, open]);

  return (
    <DropdownMenuContext.Provider value={{ closeMenu }}>
      <AnimatePresence>
        {open && (
          <RadixDropdownMenu.Portal forceMount>
            <RadixDropdownMenu.Content
              align="start"
              asChild
              className="mt-1 overflow-hidden rounded bg-white/75 p-2 text-left shadow backdrop-blur"
            >
              <motion.div
                initial="closed"
                animate={controls}
                exit="closed"
                variants={{
                  open: {
                    opacity: 1,
                    transition: { ease: "easeOut", duration: 0.1 },
                  },
                  closed: {
                    opacity: 0,
                    transition: { ease: "easeIn", duration: 0.2 },
                  },
                }}
              >
                {children}
              </motion.div>
            </RadixDropdownMenu.Content>
          </RadixDropdownMenu.Portal>
        )}
      </AnimatePresence>
    </DropdownMenuContext.Provider>
  );
}

Dropdown.Menu = DropdownMenu;

function DropdownMenuItem({ children, onSelect = () => {} }) {
  let controls = useAnimationControls();
  let { closeMenu } = useContext(DropdownMenuContext);

  return (
    <RadixDropdownMenu.Item
      onSelect={async (e) => {
        e.preventDefault();

        await controls.start({
          backgroundColor: "#fff",
          color: "#000",
          transition: { duration: 0.04 },
        });
        await controls.start({
          backgroundColor: "orange",
          color: "#fff",
          transition: { duration: 0.04 },
        });
        await sleep(0.075);

        await closeMenu();
        onSelect();
      }}
      className="w-40 select-none rounded px-2 py-1.5 text-gray-700 data-[highlighted]:bg-green-400 data-[highlighted]:text-white data-[highlighted]:focus:outline-none"
      asChild
    >
      <motion.div animate={controls}>{children}</motion.div>
    </RadixDropdownMenu.Item>
  );
}

const sleep = (s) => new Promise((resolve) => setTimeout(resolve, s * 1000));

Dropdown.MenuItem = DropdownMenuItem;
