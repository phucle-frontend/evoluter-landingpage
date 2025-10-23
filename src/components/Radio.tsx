"use client";

import React from "react";
import clsx from "clsx";

interface RadioProps {
  label: string;
  name: string;
  value: string;
  checked?: boolean;
  onChange?: (value: string) => void;
  color?: string; 
  className?: string; 
}

const Radio: React.FC<RadioProps> = ({
  label,
  name,
  value,
  checked = false,
  onChange,
  color = "#000", 
  className = "",
}) => {
  return (
    <label
      className={clsx(
        "flex items-center gap-2 md:gap-3 cursor-pointer select-none",
        className
      )}
    >
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={() => onChange?.(value)}
        className="hidden"
      />

      <span
        className="w-5 h-5 flex items-center justify-center rounded-full border-2"
        style={{
          borderColor: color,
        }}
      >
        {checked && (
          <span
            className="w-2.5 h-2.5 rounded-full"
            style={{ backgroundColor: color }}
          ></span>
        )}
      </span>

      {/* Label text (color controlled by className or inherits) */}
      <span className="text-sm md:text-lg font-medium">{label}</span>
    </label>
  );
};

export default Radio;
