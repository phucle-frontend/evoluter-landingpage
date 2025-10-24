import { ChevronDown } from "lucide-react";
import React, { Dispatch, SetStateAction } from "react";

const PhoneInput = ({
  label,
  value,
  setValue,
  placeholder,
}: {
  label?: string;
  placeholder?: string;
  value?: string;
  setValue?: () => void;
}) => {
  return (
    <div className="fc gap-1">
      <label className={label || "hidden"} htmlFor="">
        {label}
      </label>
      <div className="rounded-lg overflow-hidden flex w-full items-center bg-[#363636]">
        <button className="h-12 border-r p-2 flex items-center gap-2 border-gray-400">
          <div className="w-10 h-8 bg-gray-100 rounded-md"></div>
          <ChevronDown className="w-3 h-3" />
        </button>

        <input
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={setValue}
          className="flex-1 p-3 pl-4 text-sm sm:text-md"
        />
      </div>
    </div>
  );
};

export default PhoneInput;
