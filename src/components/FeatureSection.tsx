import React from "react";
import Badge from "./Badge";

const FeatureSection = ({
  isImageLeft = false,
  title,
  description,
}: {
  isImageLeft?: boolean;
  title: string;
  description: string;
}) => {
  return (
    <section
      className={`flex flex-col-reverse md:flex-row ${
        isImageLeft ? "md:flex-row-reverse" : ""
      } gap-4 w-full`}
    >
      <div className="w-full md:w-5/12 aspect-video rounded-md bg-gray-300"></div>

      <div className="flex flex-col gap-2 w-full md:w-7/12">
        <div className="">
          <Badge
            title="Platform"
            color="#FFB77A"
            className="font-semibold"
            textColor="#000"
          />
        </div>
        <strong className="text-white text-lg">{title}</strong>
        <p className="text-sm text-gray-200">{description}</p>
      </div>
    </section>
  );
};

export default FeatureSection;
