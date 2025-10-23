import Image from "next/image";
import React from "react";
import Button from "./Button";
import { ArrowRight } from "lucide-react";

export const COLOR_HIRING_CARD = {
  BLACK: '#000',
  ORANGE: '#FFB77A',
  GREEN: '#ABFFC3'
} as const;
export type COLOR_HIRING_CARD =
  (typeof COLOR_HIRING_CARD)[keyof typeof COLOR_HIRING_CARD];

const CardHiringTalent = ({
  title,
  subTitle,
  color,
  image,
}: {
  title: string;
  subTitle: string;
  color: COLOR_HIRING_CARD;
  image: string;
}) => {
  return (
    <div style={{backgroundColor: color}} className={`flex flex-col col-span-4 rounded-2xl gap-2 cursor-pointer w-full md:hover:scale-105 duration-200 p-4 items-center`}>
      <Image
        alt="hero 1"
        width={0}
        height={0}
        className="rounded-2xl lg:h-48 md:h-64 w-full"
        src={ image }
      />
      <strong className={`text-xl font-bold ${color === COLOR_HIRING_CARD.BLACK ? 'text-white': 'text-black'} text-center`}>
        {title}
      </strong>
      <p className={`text-sm ${color === COLOR_HIRING_CARD.BLACK ? 'text-gray-50' : 'text-gray-800'} text-center`}>{subTitle}</p>
      <Button className="gap-2 flex items-center"><span className={` ${color === COLOR_HIRING_CARD.BLACK ? 'text-white': 'text-black'}`}>Get started</span><ArrowRight className={`w-4 h-4 ${color === COLOR_HIRING_CARD.BLACK ? 'text-white': 'text-black'}`}/></Button>
    </div>
  );
};

export default CardHiringTalent;
