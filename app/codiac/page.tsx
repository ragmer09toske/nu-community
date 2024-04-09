"use client";
import React from "react";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { RegisterCodingInitiative } from "@/components/RegisterCodingInitiative";
import { Navigation } from "@/components/Navigation";
import { TheBox } from "@/components/theBox";
import { EvervaultCard, Icon } from "@/components/ui/evervault-card";
import { BentoGridThirdDemo } from "@/components/Bento";
import { Card } from "@/components/ui/card";
import { TextRevealCard, TextRevealCardDescription, TextRevealCardTitle } from "@/components/ui/text-reveal-card";
import { GlowingStarsBackgroundCard, GlowingStarsDescription, GlowingStarsTitle } from "@/components/ui/glowing-stars";
import useDeviceType from "../Device";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
 
const words = `Oxygen gets you high. In a catastrophic emergency, we're taking giant, panicked breaths. Suddenly you become euphoric, docile. You accept your fate. It's all right here. Emergency water landing, six hundred miles an hour. Blank faces, calm as Hindu cows`;
 
function TracingBeamDemo() {
  const isDesktop = useDeviceType();
  return (
    <div className="w-full">
    <Navigation />
    <TracingBeam className="w-full">
      <div className=" pl-1 lg:pl-0 mx-auto antialiased pt-4 relative">
        <Card className="mt-6 p-5">
          <div>
            <div className="flex flex-col lg:flex-row text-sm px-6 prose prose-sm dark:prose-invert">
              <RegisterCodingInitiative />
              {isDesktop ? 
              <div className="lg:flex flex-c  ol l py-20 items-center justify-center antialiased">
                <GlowingStarsBackgroundCard>
                  <GlowingStarsTitle>Register</GlowingStarsTitle>
                  <div className="flex justify-between items-end">
                    <GlowingStarsDescription>
                      You will get you RSVP in no time
                    </GlowingStarsDescription>
                  </div>
                </GlowingStarsBackgroundCard>
              </div> 
              :
              <TextGenerateEffect words={words} />}
            </div>
          </div>
        </Card>
          <br />
          <div className="flex w-full">
              <TextRevealCard
              className="w-full"
                text="Build the coolest UI in no minutes"
                revealText="We gon teach you the science"
              >
              </TextRevealCard>
          </div>
          <br/>
          <BentoGridThirdDemo />
          <br/>
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