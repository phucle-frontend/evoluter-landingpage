import React, { useState } from "react";
import Button from "./Button";
import { cn } from "@/lib/utils";
import { ChevronRight, Rocket, Wrench } from "lucide-react";
import Badge from "./Badge";
import { colors } from "@/asset/color";
import { truncateText } from "@/lib/common";

enum TalentDisplaySectionTabSelection {
  DEVELOPERS = "Developers",
  DESIGNERS = "Designers",
  CTO = "CTO",
  CEO = "CEO",
}

interface TalentDisplayProps {
  name: string;
  position: string;
  skills: string[];
  tools: string[];
  previouslyAt: string;
}

const data_display_talents: TalentDisplayProps[] = [
  {
    name: "Kevin Locke",
    position: "QA/QC Engineer",
    skills: ["Ruby", "Coffeescript", "SQL", "Javascript"],
    tools: ["SQS", "Beanstalk", "AWS SDK", "Hubspot"],
    previouslyAt: "Apple",
  },
  {
    name: "Frank Williams",
    position: "Backend Developer",
    skills: ["SQL", "PHP", "Python", "Java", "Scala"],
    tools: ["Git", "Sublime Text", "Pycharm"],
    previouslyAt: "Tesla",
  },
  {
    name: "Tai Nguyen",
    position: "Frontend Developer",
    skills: ["C#", "Javascript", "HTML5", "Python 3"],
    tools: ["Maya", "Houdini", "Knex.js", "Visual Studio"],
    previouslyAt: "Microsoft",
  },
];

const CardTalentDisplay = ({
  name,
  position,
  previouslyAt,
  skills,
  tools,
}: TalentDisplayProps) => {
  return (
    <div className="md:card gap-3 col-span-4 p-4 rounded-lg fc text-white border border-gray-600">
      <div className="w-full aspect-video bg-gray-200 rounded-lg"></div>
      <div className="fc">
        <strong className="">{name}</strong>
        <p className="">{position}</p>
      </div>
      <div className="fc">
        <p className="items-center gap-1 flex  text-md">
          <Rocket className="w-3 h-3" />
          <span className="">Skills</span>
        </p>
        <div className="overflow-x-auto w-full gap-1 flex items-center">
          {skills.map((item, i) => (
            <span
              key={i}
              className="inline-flex items-center whitespace-nowrap px-2"
            >
              {item} •
            </span>
          ))}
        </div>
      </div>
      <div className="fc">
        <p className="items-center gap-1 flex  text-md">
          <Wrench className="w-3 h-3" />
          <span className="">Tools</span>
        </p>
        <div className="overflow-x-auto w-full gap-1 flex flex-nowrap items-center">
          {tools.map((item, i) => (
            <Badge
              key={i}
              title={item}
              color="#2C2C2C"
              textColor="#ABFFC3"
              className="whitespace-nowrap"
            />
          ))}
        </div>
      </div>
      <div className="w-full h-px border border-gray-600"></div>
      <div className="flex items-center justify-between">
        <div className="fc gap-1">
          <p className="text-sm">Previously at</p>
          <div className="rounded-md w-24 lg:w-24  h-8 bg-gray-200"></div>
        </div>
        <Button
          icon={<ChevronRight className="w-4 h-4" />}
          title="View Profile"
          className={`bg-[${colors.MINE_SHAFT}] py-2  text-white text-xs lg:text-md`}
        />
      </div>
    </div>
  );
};

const TalentDisplaySection = () => {
  const [selectedTab, setSelectedTab] =
    useState<TalentDisplaySectionTabSelection>(
      TalentDisplaySectionTabSelection.DEVELOPERS
    );
  return (
    <div className="fc gap-4 md:grid md:grid-cols-12">
      <div className="overflow-x-auto md:col-span-12 w-full flex items-center">
        {Object.entries(TalentDisplaySectionTabSelection)
          .map((item) => item[1])
          .map((item) => (
            <Button
              onClick={() => setSelectedTab(item)}
              key={item}
              className={cn(selectedTab === item && "bg-white text-black")}
              title={item}
            />
          ))}
      </div>
      {data_display_talents.map((item) => (
        <CardTalentDisplay
          key={item.name}
          name={item.name}
          position={item.position}
          previouslyAt={item.previouslyAt}
          skills={item.skills}
          tools={item.tools}
        />
      ))}
    </div>
  );
};

export default TalentDisplaySection;
