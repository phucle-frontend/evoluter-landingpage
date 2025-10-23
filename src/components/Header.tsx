import React from "react";
import Button from "./Button";
import { ChevronDown, LogIn, Menu } from "lucide-react";
import { headerConfigs, I_HEADER_CONFIGS_TYPE } from "@/config/header";

const Header = () => {
  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-black shadow z-50 max-lg:hidden">
        <div className="max-w-screen-2xl mx-auto flex items-center justify-between p-4">
          <button className="text-lg font-semibold cursor-pointer text-white">
            EVOLUTER
          </button>
          <nav className="space-x-4 flex items-center lg:gap-4">
            {headerConfigs.map((item) => {
              if (item.type === I_HEADER_CONFIGS_TYPE.LINK) {
                return (
                  <a
                    key={item.key}
                    href={item.link}
                    className="cursor-pointer duration-200 rounded-md
                  hover:bg-white hover:text-black
                   px-3 py-1 text-white flex flex-row items-center"
                  >
                    {item.title}
                  </a>
                );
              } else if (item.type === I_HEADER_CONFIGS_TYPE.POPOVER) {
                return (
                  <Button
                    className="px-2 hover:bg-gray-200 text-white hover:text-black"
                    key={item.key}
                    icon={item.icon}
                    title={item.title}
                  />
                );
              }
            })}
          </nav>
          <div className="flex items-center gap-4">
            <Button className="gap-1 text-white">
              Login
              <LogIn className="w-4 h-4 text-white" />
            </Button>
            <Button className=" hover:text-black bg-[#363636]">
              <span className="text-white">Sign up - </span>
              <span className="text-gray-300">&nbsp;It's Free</span>
            </Button>
          </div>
        </div>
      </header>
      <header className="lg:hidden h-16 w-full p-4 flex items-center justify-between ">
        <div className="bg-white rounded-lg w-10 h-10"></div>
        <div className="flex items-center gap-2">
          <Button className="hover:bg-white hover:text-black bg-[#363636]">
            <span className="text-white">Sign up - </span>
            <span className="text-gray-300">&nbsp;It's Free</span>
          </Button>
          <Menu />
        </div>
      </header>
    </>
  );
};

export default Header;
