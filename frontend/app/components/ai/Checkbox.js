import React, { useState } from "react";
import * as RadixCheckbox from "@radix-ui/react-checkbox";

const Checkbox = ({
  id,
  label,
  checked,
  onCheckedChange,
  borderColor,
  checkBg,
  checkIcon,
  className,
}) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleCheckedChange = (isChecked) => {
    setIsChecked(isChecked);
    //console.log(isChecked);
    onCheckedChange && onCheckedChange(isChecked);
  };

  return (
    <>
      <RadixCheckbox.Root
        className={`mr-2 flex h-[24px] w-[24px] bg-${checkBg} border-2 border-${borderColor} appearance-none items-center justify-center text-[#250D01] rounded-[4px] outline-none `}
        id={id}
        onCheckedChange={handleCheckedChange}
        checked={isChecked}
      >
        <RadixCheckbox.Indicator>
          {checkIcon}
        </RadixCheckbox.Indicator>
      </RadixCheckbox.Root>
      <label
        className={className}
        htmlFor={id}
      >
        {label}
      </label>
    </>
  );
};

export default Checkbox;
