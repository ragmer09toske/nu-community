"use client";
import React from "react";
// import { calsans } from "@/fonts/calsans";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { RegisterCodingInitiative } from "@/components/RegisterCodingInitiative";
import { Navigation } from "@/components/Navigation";
import { TheBox } from "@/components/theBox";
import { WavyBackgroundComp } from "@/components/ui/WavyBackground";
import { EvervaultCard, Icon } from "@/components/ui/evervault-card";

function TracingBeamDemo() {
  return (
    <div className="w-full">
    <Navigation />
    <TracingBeam className="w-full">
      <div className="m-full pl-5 lg:pl-0 mx-auto antialiased pt-4 relative">
          <div className="mb-10">
            <div className="text-sm px-6 prose prose-sm dark:prose-invert">
              <RegisterCodingInitiative />
            </div>
          </div>

          <div className="mb-10">
          <div className="w-[100%]">
            <div className="border flex flex-col items-start w-[100%] mx-auto p-4  relative h-[10rem]">
              <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
              <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
              <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
              <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />
  
              <EvervaultCard text="POrtFOliOs" />
        
            </div>
          </div>
          <TheBox />
          </div>
      </div>
    </TracingBeam>
    </div>
  );
}

export default TracingBeamDemo