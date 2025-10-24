import React from "react";
import Badge from "./Badge";
import { colors } from "@/asset/color";

interface SectionProps {
  isImageRight?: boolean;
  title: string;
  description: string;
  badgeTitle?: string;
}

const FeatureSection = ({
  isImageRight = false,
  title,
  description,
  badgeTitle,
}: SectionProps) => {
  return (
    <section
      className={`flex flex-col-reverse md:flex-row ${
        isImageRight ? "md:flex-row-reverse" : ""
      } gap-4 w-full`}
    >
      <div className="w-full md:w-5/12 aspect-video rounded-md bg-gray-300"></div>

      <div className="flex flex-col gap-2 w-full md:w-7/12">
        <div className="">
          <Badge
            title={badgeTitle}
            color={colors.MACARONI_AND_CHEESE}
            className="font-semibold"
            textColor={colors.BLACK}
          />
        </div>
        <strong className="text-white text-lg">{title}</strong>
        <p className="text-sm text-gray-200">{description}</p>
      </div>
    </section>
  );
};

export default FeatureSection;
