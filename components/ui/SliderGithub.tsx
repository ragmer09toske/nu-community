import { useContext, useState } from "react";
import { cn } from "@/lib/utils";
import { Slider } from "@/components/ui/slider";
import { WebinarContext } from "@/app/webinar/AppContex";

type SliderProps = React.ComponentProps<typeof Slider>;

export function SliderGithub({ className, ...props }: SliderProps) {
  let {githubValue} = useContext(WebinarContext);
  let {setgithubValue} = useContext(WebinarContext);

  const handleChange = (newValue:any) => {
    setgithubValue(newValue);
  };

  return (
    <div className="w-full flex gap-2">
      <Slider
        value={githubValue}
        onValueChange={handleChange}
        max={100}
        step={1}
        className={cn("w-[60%]", className)}
        {...props}
      />
      <div>{githubValue}</div> 
    </div>
  );
}
