import Section from "./Section";
import { data_card_why2 } from "@/config/home";
import { cn } from "@/lib/utils";

const SectionWhy2 = () => {
  return (
    <Section className="px-0! sm:grid sm:grid-cols-2">
      <div className="flex justify-between sm:col-span-2 items-center">
        <h3 className="h3 sm:text-left text-center  flex-1">
          We solved the biggest problems in tech & product
        </h3>
        <div className="sm:w-48 aspect-video w-0 bg-gray-200 rounded-lg"></div>
      </div>
      {data_card_why2.map((item, i) => (
        <div
          key={i}
          className={cn(
            "card rounded-xl fc gap-2 ",
            i % 2 === 0 ? "rounded-tl-[3rem]" : "rounded-br-[3rem]"
          )}
          style={{ backgroundColor: item.color }}
        >
          {i % 2 === 0 && (
            <div className="w-full aspect-video bg-gray-400 rounded-lg"></div>
          )}
          <h5 className="text-lg text-black font-bold">{item.title}</h5>
          <p className="text-xs text-gray-800">{item.description}</p>
          {i % 2 !== 0 && (
            <div className="w-full aspect-video bg-gray-400 rounded-lg"></div>
          )}
        </div>
      ))}
    </Section>
  );
};

export default SectionWhy2;
