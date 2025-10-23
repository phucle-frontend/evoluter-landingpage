'use client'
import React, { useState } from "react";

interface SwitchProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}

const Switch: React.FC<SwitchProps> = ({ checked = false, onChange }) => {
  const [isOn, setIsOn] = useState(checked);

  const handleToggle = () => {
    const newState = !isOn;
    setIsOn(newState);
    onChange?.(newState);
  };

  return (
    <button
      onClick={handleToggle}
      className={`relative w-10 h-5 cursor-pointer border flex items-center rounded-full transition-colors duration-300 ${
        isOn ? "bg-green-500 border-transparent" : "bg-transparent"
      }`}
    >
      <span
        className={`absolute left-1 w-4 h-4 bg-black rounded-full transform transition-transform duration-300 ${
          isOn ? "translate-x-4 bg-white" : "translate-x-0"
        }`}
      />
    </button>
  );
};

export default Switch;
