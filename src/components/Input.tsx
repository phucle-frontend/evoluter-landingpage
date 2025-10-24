import React, { Dispatch, SetStateAction } from "react";

const Input = ({
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
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={setValue}
        className="rounded-lg bg-[#363636] p-2 pl-3"
      />
    </div>
  );
};

export default Input;
