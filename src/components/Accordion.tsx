import React, { useState } from "react";
import Button from "./Button";
import { MinusCircle, PlusCircle } from "lucide-react";
import { colors } from "@/asset/color";

const Accordion = ({
  data,
}: {
  data: {
    title: string;
    expandText: string;
  }[];
}) => {
  const [selectedAccordion, setSelectedAccordion] = useState(0);
  return (
    <div className="fc lg:col-span-2">
      {data.map((item, i) => (
        <div
          key={i}
          onClick={() => setSelectedAccordion(i)}
          className="fc border-y cursor-pointer py-4 ease-in-out duration-200 border-gray-600"
        >
          <div className="jb items-center">
            <strong className="font-bold">{item.title}</strong>
            <Button
              style={{ color: colors.MACARONI_AND_CHEESE }}
              icon={
                selectedAccordion === i ? (
                  <MinusCircle className="w-8 h-8" />
                ) : (
                  <PlusCircle className="w-8 h-8" />
                )
              }
            />
          </div>
          {selectedAccordion === i && (
            <p className="font-light ease-in-out duration-200">
              {item.expandText}
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
