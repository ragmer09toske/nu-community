import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { IconCloudDemo } from "./Interactive";
import Gobe from "../Gobe";

export function Resizable() {
  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="max-w-md rounded-lg border border-dashed md:min-w-[1200px]"
    >
      <ResizablePanel defaultSize={50}>
        <div className="flex h-[350px] items-center justify-center p-6">
          <span className="font-semibold border-none">
            <IconCloudDemo />
          </span>
        </div>
      </ResizablePanel>
      <ResizableHandle className="border-none" />
      <ResizablePanel defaultSize={50} className="border-none">
        <ResizablePanelGroup direction="vertical" className="border-none">
          <ResizableHandle className="border-none" />
          <ResizablePanel defaultSize={75} className="border-none">
            <div className="flex items-center justify-center mt-20 border-none">
              <span className="font-semibold border-none">
                <Gobe />
              </span>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
