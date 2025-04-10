import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import { AnimatedGradientText } from "./magicui/animated-gradient-text";

export function AnimatedGradientButtom() {
  return (
    <div className="group relative mx-auto flex items-center justify-center px-4 py-1.5 ">
      <AnimatedGradientText className="text-sm font-medium">
        Sign in
      </AnimatedGradientText>
      <ChevronRight
        className="ml-1 size-4 stroke-neutral-500 transition-transform
 duration-300 ease-in-out group-hover:translate-x-0.5"
      />
    </div>
  );
}
