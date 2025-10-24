"use client";

import React from "react";
import clsx from "clsx";
import { colors } from "@/asset/color";
import { cn } from "@/lib/utils";

interface RadioProps {
  label: string;
  name: string;
  value: string;
  checked?: boolean;
  onChange?: (value: string) => void;
  color?: colors.COD_GRAY | colors.MINT_GREEN | colors.MACARONI_AND_CHEESE; 
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
        className={cn(
          "w-5 h-5 flex items-center justify-center rounded-full  border",
        )}
        style={{
          backgroundColor: checked ?  colors.MINT_GREEN : colors.WHITE,
          borderColor: colors.BLACK
        }}
      >
        {checked && (
          <span
            className="w-2.5 h-2.5 rounded-full"
            style={{ backgroundColor:  colors.BLACK }}
          ></span>
        )}
      </span>

      <span className="text-sm md:text-md font-medium">{label}</span>
    </label>
  );
};

export default Radio;
