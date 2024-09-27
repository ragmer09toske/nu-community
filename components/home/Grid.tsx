import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
  } from "@/components/ui/resizable"
import { GlobeWhite } from "./Globe"
import { IconCloudDemo } from "./Interactive"
  
  export function Resizable() {
    return (
      <ResizablePanelGroup
        direction="horizontal"
        className="max-w-md rounded-lg border md:min-w-[1200px]"
      >
        <ResizablePanel defaultSize={50}>
          <div className="flex h-[500px] items-center justify-center p-6">
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
              <div className="flex h-full items-center justify-center p-6">
                <span className="font-semibold">
                    <GlobeWhite />
                </span>
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
      </ResizablePanelGroup>
    )
  }
  