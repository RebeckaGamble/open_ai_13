import React, { useState } from "react";
import * as RadixCheckbox from "@radix-ui/react-checkbox";
import { Cross1Icon } from "@radix-ui/react-icons";

const Checkbox = ({
  id,
  label,
  checked,
  onCheckedChange,
  borderColor,
  checkBg,
}) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleCheckedChange = (isChecked) => {
    setIsChecked(isChecked);
    //console.log(isChecked);
    onCheckedChange && onCheckedChange(isChecked);
  };

  return (
    <>
      <label
        className={`pl-2 text-[16px] leading-none text-[#250D01] ${isChecked ? 'font-bold' : ''}`}
        htmlFor={id}
      >
        {label}
      </label>
      <RadixCheckbox.Root
        className={`mr-2 flex h-[24px] w-[24px] border border-${borderColor} appearance-none items-center justify-center text-[#250D01] rounded-[4px] bg-${checkBg} outline-none `}
        id={id}
        onCheckedChange={handleCheckedChange}
        checked={isChecked}
      >
        <RadixCheckbox.Indicator>
          <Cross1Icon />
        </RadixCheckbox.Indicator>
      </RadixCheckbox.Root>
    </>
  );
};

export default Checkbox;
