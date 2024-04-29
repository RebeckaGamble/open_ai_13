import React from "react";
import * as RadixCheckbox from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";

const Checkbox = ({ id, label, checked, onCheckedChange }) => {
  const [isChecked, setIsChecked] = React.useState(checked);

  const handleCheckedChange = (isChecked) => {
    setIsChecked(isChecked);
    console.log(isChecked);
    onCheckedChange && onCheckedChange(isChecked);
  };
  return (
    <>
      <label
        className="pl-2 text-[16px] leading-none text-[#F8E8C0]"
        htmlFor={id}
      >
        {label}
      </label>
      <RadixCheckbox.Root
        className=" mr-2 flex h-[20px] w-[20px] appearance-none items-center justify-center rounded-[4px] bg-[#F8E8C0] shadow-[0_1px_1px] outline-none focus:shadow-[0_0_0_0.5px_black]"
        id={id}
        onCheckedChange={handleCheckedChange}
        checked={isChecked}
      >
        <RadixCheckbox.Indicator className="text-violet11">
          <CheckIcon />
        </RadixCheckbox.Indicator>
      </RadixCheckbox.Root>
    </>
  );
};

export default Checkbox;
