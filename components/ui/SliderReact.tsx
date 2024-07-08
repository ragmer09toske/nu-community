import { useContext, useState } from "react";
import { cn } from "@/lib/utils";
import { Slider } from "@/components/ui/slider";
import { WebinarContext } from "@/app/webinar/AppContex";

type SliderProps = React.ComponentProps<typeof Slider>;

export function SliderReact({ className, ...props }: SliderProps) {
  let {reactValue} = useContext(WebinarContext);
  let {setReactValue} = useContext(WebinarContext);

  const handleChange = (newValue:any) => {
    setReactValue(newValue);
  };

  return (
    <div className="w-full flex gap-2 items-center">
      <Slider
        value={reactValue}
        onValueChange={handleChange}
        max={100}
        step={1}
        className={cn("w-[60%]", className)}
        {...props}
      />
      <div>{reactValue}</div> 
    </div>
  );
}
