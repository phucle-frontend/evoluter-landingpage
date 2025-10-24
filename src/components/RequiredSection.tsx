import React from "react";
import Badge from "./Badge";
import { I_DATA_REQUIRED_SECTION } from "@/config/home";
import { Plus } from "lucide-react";
import { truncateText } from "@/lib/common";

const RequiredSection = ({ data }: { data: I_DATA_REQUIRED_SECTION }) => {
  return (
    <div className="fc gap-2">
      <strong className="h-5">{data.title}</strong>
      <div className="gap-2 items-center flex flex-wrap">
        {data.badges.map((item) => (
          <Badge
            title={truncateText(item, 10)}
            key={item}
            color="#262626"
            textColor="#fff"
            iconPosition="left"
            icon={<Plus className="w-4 h-4" />}
          />
        ))}
      </div>
    </div>
  );
};

export default RequiredSection;
