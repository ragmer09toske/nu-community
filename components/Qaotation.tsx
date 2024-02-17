import React from 'react'
import { Command} from './ui/command'
import { ScrollArea } from "@/components/ui/scroll-area"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import VideoPost from './Feed/VideoPost'
import useDeviceType from '@/app/Device'
import Image from 'next/image'

export const Qaotation = () => {
  return (
    <div className='lg:w-[60%] h-full p-2 ' style={{
        borderWidth: "1px",
        borderTopWidth: "0px",
        borderBottomWidth: "0px",
        
    }}>
          
          <Command className="rounded-lg border shadow-md p-2" style={{ background: "rgba(255, 255, 255, 0)", borderWidth: "0px"}}>
            <h4 className="scroll-m-20 p-2 pl-5 text-xl font-extrabold tracking-tight lg:text-xl">
                {/* Community Of Creatives */}
            </h4>
            <div className='p-4
             '>
              <Input placeholder="Type a command or search..." />
            </div>
            
            <ScrollArea style={{borderWidth: "0px"}} className="h-[100%] flex flex-col gap-5 w-full rounded-md border p-4">
              Qaotations
            </ScrollArea>
          </Command>
      </div>
  )
}
