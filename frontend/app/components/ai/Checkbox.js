import React from "react";
import * as RadixCheckbox from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";
//[#F8E8C0]

const Checkbox = ({
  id,
  label,
  checked,
  onCheckedChange,
  borderColor,
  checkBg,
}) => {
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
        className={`mr-2 flex h-[24px] w-[24px] border border-${borderColor} appearance-none items-center justify-center text-[#F8E8C0] rounded-[4px] bg-${checkBg} outline-none `}
        id={id}
        onCheckedChange={handleCheckedChange}
        checked={isChecked}
      >
        <RadixCheckbox.Indicator>
          <CheckIcon />
        </RadixCheckbox.Indicator>
      </RadixCheckbox.Root>
    </>
  );
};

export default Checkbox;
