"use client";

import React from "react";
import { Card } from "./ui/card";
import UploadUI from "@/app/button-uploader/page";
import { CLientCloud } from "./CLientCloud";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"

export const Services = () => {
  return (
    <div className='flex w-full gap-3 justify-center top-5 items-center h-full fixed bottom-7'>
      <Card style={{
        backdropFilter: "blur(5px)",
        borderWidth: "1px",
        height: "85%"
      }}
        className="flex  dark:bg-[#09090bd9] lg:w-[80%] sm:w-[90%] bg-[#FFFFFFFF]"
      >
        <ResizablePanelGroup
          direction="horizontal"
          className="min-h-[200px] max-w-[100%] rounded-lg border"
        >
          <ResizablePanel defaultSize={20}>
            <CLientCloud />
          </ResizablePanel>
          <ResizableHandle withHandle />
          
          <ResizablePanel defaultSize={80}>
            {<UploadUI />}
          </ResizablePanel>
        </ResizablePanelGroup>
      </Card>
    </div>
  );
};
