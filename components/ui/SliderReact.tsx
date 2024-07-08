import { useState } from "react";
import { cn } from "@/lib/utils";
import { Slider } from "@/components/ui/slider";

type SliderProps = React.ComponentProps<typeof Slider>;

export function SliderReact({ className, ...props }: SliderProps) {
  const [value, setValue] = useState([50]); // Initial value of the slider

  const handleChange = (newValue:any) => {
    setValue(newValue);
  };

  return (
    <div className="w-full flex gap-2">
      <Slider
        value={value}
        onValueChange={handleChange}
        max={100}
        step={1}
        className={cn("w-[60%]", className)}
        {...props}
      />
      <div>{value}</div> 
    </div>
  );
}
