import React, { ReactNode } from "react";
import Switch from "./Switch";
import Radio from "@/components/Radio";
import { colors } from "@/asset/color";
import { cn } from "@/lib/utils";

interface CardPriceProps {
  color: colors.MINT_GREEN | colors.COD_GRAY | colors.MACARONI_AND_CHEESE;
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
}

const CardPrice = ({
  color,
  title,
  price,
  description,
  options,
}: CardPriceProps) => {
  const bgColor =  color !== colors.COD_GRAY ? "bg-gray-800" : "bg-gray-50"
  const textColor =  color === colors.COD_GRAY ? colors.WHITE : colors.BLACK
  return (
    <div
      className="card fc gap-2"
      style={{
        backgroundColor: color,
        color: textColor
      }}
    >
      <strong className="font-bold text-lg">{title}</strong>
      <div
        className={cn(`w-full h-px`, bgColor)}
      />
      {price}
      <p className="font-semibold text-sm">{description}</p>
      {options.map((item) => (
        <Radio
          key={item.name}
          color={color}
          className={color}
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
