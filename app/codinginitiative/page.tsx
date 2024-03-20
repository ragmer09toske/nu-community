"use client";
import React from "react";
// import { calsans } from "@/fonts/calsans";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { RegisterCodingInitiative } from "@/components/RegisterCodingInitiative";
import { Navigation } from "@/components/Navigation";
import { TheBox } from "@/components/theBox";

function TracingBeamDemo() {
  return (
    <>
    <Navigation />
    <TracingBeam className="">
      <div className="max-w-2xl pl-5 lg:pl-0 mx-auto antialiased pt-4 relative">
          <div className="mb-10">
            <div className="text-sm  prose prose-sm dark:prose-invert">
              <RegisterCodingInitiative />
            </div>
          </div>

          <div className="mb-10">
          <TheBox />
          </div>
      </div>
    </TracingBeam>
    </>
  );
}

export default TracingBeamDemo