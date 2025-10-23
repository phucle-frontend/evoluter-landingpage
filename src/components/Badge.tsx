import React from "react";
import { cn } from "@/lib/utils"; // optional helper if you're using shadcn/tailwind-merge

interface BadgeProps {
  title?: string;
  color?: string; // background color
  textColor?: string; // text color
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({
  title = "Badge",
  color = "#000",
  textColor = "#fff",
  className,
}) => {
  return (
    <div
    style={{
      color: textColor, backgroundColor: color
    }}
      className={cn(
        "inline-block rounded-full text-xs sm:text-md px-3 py-1 text-center font-medium",
        className
      )}
    >
      {title}
    </div>
  );
};

export default Badge;
