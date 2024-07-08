import { useContext, useState } from "react";
import { cn } from "@/lib/utils";
import { Slider } from "@/components/ui/slider";
import { WebinarContext } from "@/app/webinar/AppContex";

type SliderProps = React.ComponentProps<typeof Slider>;

export function SliderHTML({ className, ...props }: SliderProps) {
  let {htmlValue} = useContext(WebinarContext);
  let {setHtmlValue} = useContext(WebinarContext);

  const handleChange = (newValue:any) => {
    setHtmlValue(newValue);
  };

  return (
    <div className="w-full flex gap-2 items-center">
      <Slider
        value={htmlValue}
        onValueChange={handleChange}
        max={100}
        step={1}
        className={cn("w-[60%]", className)}
        {...props}
      />
      <div>{htmlValue}</div> 
    </div>
  );
}
