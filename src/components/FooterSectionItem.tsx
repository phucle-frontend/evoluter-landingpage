import { E_FOOTER_TYPE, FOOTER_SECTION } from "@/config/home";
import { cn } from "@/lib/utils";
import React from "react";
import Input from "./Input";
import Button from "./Button";

const FooterSectionItem = ({ data }: { data: FOOTER_SECTION[] }) => {
  return (
    <div className="grid grid-cols-12 gap-4">
      {data.map((item, i) => (
        <div key={item.type} className={
          cn(
            "fc gap-2",
            item.type === E_FOOTER_TYPE.SERVICES ? 'col-span-12 lg:col-span-2' : 'col-span-6 lg:col-span-2'
          )
        }>
          <h3 className="text-xl font-bold">{item.type}</h3>
          <div className="fc gap-1">
            {item.links.map((item) => (
              <a key={item.title} href={item.href} className="text-xs">
                {item.title}
              </a>
            ))}
          </div>
        </div>
      ))}
      <div className="fc gap-2 md:col-span-4 col-span-12">
        <h3 className="text-lg font-bold">Newsletter</h3>
        <div className="fc sm:flex-row jb items-center gap-2">
          <Input placeholder="Enter your email" className="md:max-w-48 w-full"/>
          <Button className="bg-white text-black pr-2 w-full flex py-2 justify-center font-semibold text-sm"  title="Subscribe"/>
        </div>
      </div>
    </div>
  );
};

export default FooterSectionItem;
