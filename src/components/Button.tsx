import { cn } from "@/lib/utils"; // standard shadcn helper for merging class names
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode;
  title?: string;
}

const Button: React.FC<ButtonProps> = ({
  icon,
  title,
  children,
  className,
  ...props
}) => {
  return (
    <button
      className={cn(
        "cursor-pointer px-3 py-1 duration-200 rounded-md hover:bg-gray-800 flex flex-row items-center hover:text-white",
        className
      )}
      {...props}
    >
      {title ?? children}
      {icon}
    </button>
  );
};

export default Button;
