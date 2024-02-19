"use client";
 
import { Archive, ArchiveX, NotebookPen, Trash2 } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Files } from "@/components/Files";
import { useState } from "react";
import { Notes } from "@/components/Notes";

export default function UploadUI() {
  const [File, setFiles] = useState("Files")

  return (
    <main className="relative flex flex-col w-full items-center justify-between ">
      <div className="flex gap-5 w-full p-5 pl-5" style={{
        borderBottomWidth: "1px"
      }}>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger><Archive /></TooltipTrigger>
            <TooltipContent>
              <p>Archive</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger><ArchiveX /></TooltipTrigger>
            <TooltipContent>
              <p>Move to trash</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger><Trash2 /></TooltipTrigger>
            <TooltipContent>
              <p>Delete</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <div style={{borderWidth:"1px"}}></div>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger><NotebookPen onClick={()=>setFiles("Notes")} /></TooltipTrigger>
            <TooltipContent>
              <p>Add some notes</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        
      </div>

      <div className="absolute top-20 left-0 w-full h-full">
        {File == "Files" ? (<Files />) : (<Notes setFiles={setFiles}/>)}
      </div>
  </main>
  );
}