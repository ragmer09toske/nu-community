import React from "react";
import { HeroVideoBanner } from "./HeroModel";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
// import { ShimmerButton } from "@/components/ui/shimmer-button";

const Page = () => {
  return (
    <div className="w-full">
      <div className="p-10 w-full flex flex-col gap-5">
        <div className="w-full">
          <Image
            src={"/blog/sweet-tragedy-banner.PNG"}
            alt="the boys"
            layout="responsive"
            width={1920}
            height={300}
            className="object-cover rounded-md"
          />
        </div>
        <Card>
          <div className="p-2 flex gap-2">
            <div className="w-[100px] h-[100px]">
              <Image
                src={"/blog/x-circus.JPG"}
                alt="the boys"
                layout="responsive"
                width={1920}
                height={300}
                className="object-cover rounded-md"
              />
            </div>
            <div className="flex flex-col gap-5">
              <div>
                <p className="text-lg font-bold">X Social Circus</p>
              </div>
              <div>Chapter 1: Sweet Tragedy</div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};
export default Page;
