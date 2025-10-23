import React from "react";
import Badge from "./Badge";

const CardHiringStep = ({
  badgeTitle,
  badgeColor,
  title,
  description,
}: {
  badgeTitle: string;
  badgeColor: string;
  title: string;
  description: string;
}) => {
  return (
    <div className="border rounded-lg w-full border-gray-200 p-4 flex sm:gap-4 max-sm:gap-2 max-sm:flex-wrap justify-between items-center">
      <div className="flex flex-col gap-4 sm:w-7/12 max-sm:w-full">
        <div className="">
          <Badge
            textColor="#111"
            className="font-semibold text-sm"
            title={badgeTitle}
            color={badgeColor}
          />
        </div>
        <strong className="sm:text-lg max-sm:text-md">{title}</strong>
        <p className="text-sm text-gray-300">{description}</p>
      </div>
      <div className="sm:w-5/12 grow aspect-video bg-gray-200 rounded-md max-sm:w-full"></div>
    </div>
  );
};

export default CardHiringStep;
