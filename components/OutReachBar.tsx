import React from 'react'
import { ToggleGroup, ToggleGroupItem } from './ui/toggle-group'
import { Inbox, MessageCircle, Send } from 'lucide-react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip'

export const OutReachBar = () => {
  return (
    <div className='flex w-full gap-3 justify-center fixed bottom-7' >
        <div className='p-1'style={{
            backdropFilter: "blur(5px)",
            background: "rgba(255, 255, 255, 0.064)",
            borderRadius: "30px",
            width: "200px"
        }}>
           <ToggleGroup type="single">
                <ToggleGroupItem value="a">
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger><MessageCircle /></TooltipTrigger>
                        <TooltipContent>
                            <p>send us a message</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
                </ToggleGroupItem>
                <ToggleGroupItem value="b"><Send /></ToggleGroupItem>
                <ToggleGroupItem value="c"><Inbox /></ToggleGroupItem>
           </ToggleGroup>
        </div>
    </div>
  )
}
