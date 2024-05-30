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
    onCheckedChange && onCheckedChange(isChecked);
  };

  return (
    <>
      <RadixCheckbox.Root
        className={`flex h-[22px] w-[25px] sm:w-[24px] bg-${checkBg} border-2 border-black ${borderColor} appearance-none items-center justify-center text-[#250D01] rounded-[4px] outline-none `}
        id={id}
        onCheckedChange={handleCheckedChange}
        checked={isChecked}
      >
        <RadixCheckbox.Indicator>{checkIcon}</RadixCheckbox.Indicator>
      </RadixCheckbox.Root>
      <label className={className} htmlFor={id}>
        {label}
      </label>
    </>
  );
};

export default Checkbox;
