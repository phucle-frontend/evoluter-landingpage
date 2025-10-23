import React, { ReactNode } from "react";

const CardWhy = ({
  title,
  metric,
  description,
  color
}: {
  title: string;
  metric: ReactNode;
  description: ReactNode;
  color: string
}) => {
  return (
    <div style={{backgroundColor: color}} className="flex text-black flex-col rounded-br-4xl sm:col-span-4 gap-2 relative  rounded-xl p-4">
      <div className="flex items-center gap-2">
        <div className="rounded-full w-10 h-10 bg-red-100"></div>
        <span className="font-semibold text-sm">{title}</span>
      </div>
      {metric}
      {description}
    </div>
  );
};

export default CardWhy;
