import { colors } from "@/asset/color";
import { cn } from "@/lib/utils";

interface InputProps {
  label?: string;
  placeholder?: string;
  value?: string;
  setValue?: () => void;
}

const Input = ({ label, value, setValue, placeholder }: InputProps) => {
  return (
    <div className="fc gap-1">
      <label className={label || "hidden"} htmlFor="">
        {label}
      </label>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={setValue}
        className={cn("rounded-lg  p-2 pl-3", `bg-[${colors.MINE_SHAFT}]`)}
      />
    </div>
  );
};

export default Input;
