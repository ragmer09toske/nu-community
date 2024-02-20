import React from 'react'
import { Command} from './ui/command'
import { ScrollArea } from "@/components/ui/scroll-area"
import UploadUI from '@/app/button-uploader/page'

export const Qaotation = () => {
  return (
    <div className='lg:w-[40%] h-full p-2 ' style={{
        borderRightWidth: "1px",
        borderTopWidth: "0px",
        borderBottomWidth: "0px",
    }}>
          <Command className="rounded-lg border shadow-md p-2" style={{ background: "rgba(255, 255, 255, 0)", borderWidth: "0px"}}>
            <h4 className="scroll-m-20 p-2 pl-5 text-xl font-extrabold tracking-tight lg:text-xl">
                
            </h4>
            <ScrollArea style={{borderWidth: "0px"}} className="h-[100%] flex flex-col gap-5 w-full rounded-md border p-4">
              <UploadUI />
            </ScrollArea>
          </Command>
      </div>
  )
}
