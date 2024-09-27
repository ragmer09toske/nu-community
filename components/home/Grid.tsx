import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
  } from "@/components/ui/resizable"
import { IconCloudDemo } from "./Interactive"
import Gobe from "../Gobe"
  
  export function Resizable() {
    return (
      <ResizablePanelGroup
        direction="horizontal"
        className="max-w-md rounded-lg border md:min-w-[1200px]"
      >
        <ResizablePanel defaultSize={50}>
          <div className="flex h-[350px] items-center justify-center p-6">
            <span className="font-semibold">
                <IconCloudDemo />
            </span>
          </div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={50}>
          <ResizablePanelGroup direction="vertical">
            <ResizableHandle />
            <ResizablePanel defaultSize={75}>
              <div className="flex items-center justify-center mt-20" >
                <span className="font-semibold">
                    <Gobe />
                </span>
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
      </ResizablePanelGroup>
    )
  }
  