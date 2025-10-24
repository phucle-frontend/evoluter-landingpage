import Image from "next/image";
import React from "react";
import Button from "./Button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export const COLOR_HIRING_CARD = {
  BLACK: "#000",
  ORANGE: "#FFB77A",
  GREEN: "#ABFFC3",
} as const;
export enum E_COLOR_HIRING_CARD {
  BLACK = "#000",
  ORANGE = "#FFB77A",
  GREEN = "#ABFFC3",
}

const CardHiringTalent = ({
  title,
  subTitle,
  color,
  image,
}: {
  title: string;
  subTitle: string;
  color: E_COLOR_HIRING_CARD;
  image: string;
}) => {
  return (
    <div
      style={{ backgroundColor: color }}
      className={`flex flex-col col-span-4 rounded-2xl gap-2 cursor-pointer w-full md:hover:scale-105 duration-200 p-4 items-center`}
    >
      <Image
        alt="hero 1"
        width={0}
        height={0}
        className="rounded-2xl lg:h-48 md:h-64 w-full"
        src={image}
      />
      <strong
        className={cn(
          "text-xl font-bold text-center",
          color === COLOR_HIRING_CARD.BLACK ? "text-white" : "text-black"
        )}
      >
        {title}
      </strong>
      <p
        className={`text-sm ${
          color === COLOR_HIRING_CARD.BLACK ? "text-gray-50" : "text-gray-800"
        } text-center`}
      >
        {subTitle}
      </p>
      <Button
        className={cn(
          "gap-2 flex  border border-transparent group  items-center",
          color === COLOR_HIRING_CARD.BLACK
            ? "hover:bg-white"
            : "hover:bg-black"
        )}
      >
        <span
          className={cn(
            color === COLOR_HIRING_CARD.BLACK
              ? "text-white group-hover:text-black"
              : "text-black group-hover:text-white",
            ""
          )}
        >
          Get started
        </span>
        <ArrowRight
          className={cn(
            "w-4 h-4",
            color === COLOR_HIRING_CARD.BLACK
              ? "text-white group-hover:text-black"
              : "text-black group-hover:text-white"
          )}
        />
      </Button>
    </div>
  );
};

export default CardHiringTalent;
