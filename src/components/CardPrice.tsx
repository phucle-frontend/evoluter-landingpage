import React, { ReactNode } from "react";
import Switch from "./Switch";
import Radio from "@/components/Radio";

const CardPrice = ({
  color,
  title,
  price,
  description,
  options,
}: {
  color: "#ABFFC3" | "#0D0D0D" | "#FFB77A";
  title: string;
  price: ReactNode;
  description: string;
  options: {
    label: string;
    name: string;
    value: string;
    checked: boolean;
    onChange: () => void;
  }[];
}) => {
  return (
    <div
      className="card fc gap-2"
      style={{
        backgroundColor: color,
        color: color === "#0D0D0D" ? "#fff" : "#111",
      }}
    >
      <strong className="font-bold text-lg">{title}</strong>
      <div className={`w-full h-px ${color !== '#0D0D0D' ? 'bg-gray-800' : 'bg-gray-50'} `} />
      {price}
      <p className="font-semibold text-sm">{description}</p>
      {options.map((item) => (
        <Radio
          color={color === '#0D0D0D'  ? '#fff' : '#111'}
          className={color === '#0D0D0D'  ? '#fff' : '#111'}
          label={item.label}
          name={item.name}
          value={item.value}
          checked={item.checked}
          onChange={item.onChange}
        />
      ))}
    </div>
  );
};

export default CardPrice;
