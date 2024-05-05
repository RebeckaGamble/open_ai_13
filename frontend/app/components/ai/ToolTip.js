import React from "react";
import * as Tooltip from "@radix-ui/react-tooltip";

const TooltipCheck = ({ children, text }) => {
  return (
    <Tooltip.Provider>
    <Tooltip.Root>
      <Tooltip.Trigger
        asChild
        className="text-center text-xl pb-4"
      >
       {children}
      </Tooltip.Trigger>
      <Tooltip.Portal>
        <Tooltip.Content
          className="max-w-[400px] data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade text-black select-none rounded-[10px] bg-white px-[12px] py-[10px] text-[16px] leading-6 shadow-md will-change-[transform,opacity]"
          sideOffset={4}
        >
        {text} <Tooltip.Arrow className="fill-white" />
        </Tooltip.Content>
      </Tooltip.Portal>
    </Tooltip.Root>
  </Tooltip.Provider>
  );
};

export default TooltipCheck;

