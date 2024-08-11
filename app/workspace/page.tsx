"use client";
import React from "react";
import UploadUI from "@/app/button-uploader/page";
import { Card } from "@/components/ui/card";
import { CLientCloud } from "@/components/CLientCloud";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";

const Workspace = () => {
  return (
    <div className="w-full">
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
            <div className="relative h-full w-full">
              {<UploadUI />}
            </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </Card>
      </div>
    </div>
  );
};
export default Workspace;