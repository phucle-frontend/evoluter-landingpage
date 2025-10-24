import React, { ReactNode } from "react";
import { cn } from "@/lib/utils"; // optional helper if you're using shadcn/tailwind-merge
import { colors } from "@/asset/color";



interface BadgeProps {
  title?: string;
  color?: string; // background color
  textColor?: string; // text color
  className?: string;
  icon?: ReactNode,
  iconPosition?:'left' | 'right'
}

const Badge: React.FC<BadgeProps> = ({
  title = "Badge",
  color = colors.BLACK,
  textColor = colors.WHITE,
  icon,
  iconPosition='right',
  className,
}) => {
  return (
    <div
    style={{
      color: textColor, backgroundColor: color
    }}
      className={cn(
        "rounded-full inline-flex text-xs sm:text-md px-3 gap-1 items-center py-1 text-center font-medium",
        className,
        iconPosition === 'left' && 'flex-row-reverse'
      )}
    >
      {title}
      {icon}
    </div>
  );
};

export default Badge;
