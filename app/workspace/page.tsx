"use client";

import React from "react";
import UploadUI from "@/app/button-uploader/page";
import { Card } from "@/components/ui/card";
import { CLientCloud } from "@/components/CLientCloud";
import {
    Menubar,
    MenubarCheckboxItem,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarRadioGroup,
    MenubarRadioItem,
    MenubarSeparator,
    MenubarShortcut,
    MenubarSub,
    MenubarSubContent,
    MenubarSubTrigger,
    MenubarTrigger,
  } from "@/components/ui/menubar"
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import Link from "next/link";
// import useStore from "@/app/Store"

const Workspace = () => {
  // const userDetails = useStore((state)=> state.user )
  return (
    <div>
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
          <div className="relative h-full w-full bg-slate-950">
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
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