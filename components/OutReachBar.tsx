"use client"

import React from 'react'
import { ToggleGroup, ToggleGroupItem } from './ui/toggle-group'
import { AppWindow, Copy, Inbox, MessageCircle, Send, Share } from 'lucide-react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip'
import { Separator } from './ui/separator'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet'
import { Messages } from './Messages'
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog'
import { Button } from './ui/button'
import { Label } from './ui/label'
import { Input } from './ui/input'

export const OutReachBar = () => {
    // className="relative lg:dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
    return (
    <div className='flex w-full gap-3 justify-center fixed bottom-7' style={{zIndex:9999}}>
        <div className='p-1'style={{
            backdropFilter: "blur(5px)",
            background: "rgba(255, 255, 255, 0.064)",
            borderRadius: "30px",
            width: "220px"
        }}>
           <ToggleGroup type="single">
                <ToggleGroupItem value="a">
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger><MessageCircle className='drop-shadow-[0_0_0.6rem_#ffffff91]'/></TooltipTrigger>
                        <TooltipContent>
                            <p>Your reviews</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
                </ToggleGroupItem>
                <ToggleGroupItem value="b">
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger>
                            <Sheet>
                                <SheetTrigger><AppWindow className='drop-shadow-[0_0_0.3rem_#ffffff91]'/></SheetTrigger>
                                <SheetContent>
                                    <Messages />
                                </SheetContent>
                            </Sheet>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Request a live service</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
                </ToggleGroupItem>
                <ToggleGroupItem value="c">
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger><Inbox className='drop-shadow-[0_0_0.3rem_#ffffff91]'/></TooltipTrigger>
                            <TooltipContent>
                                <p>Send us message</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </ToggleGroupItem>
                
                <ToggleGroupItem value="d">
                    <Separator  orientation="vertical" />
                    <TooltipProvider >
                        <Tooltip>
                            <TooltipTrigger>
                            <Dialog>
                                <DialogTrigger asChild>
                                    <Share className='drop-shadow-[0_0_0.3rem_#ffffff91] pl-3'/>
                                </DialogTrigger>
                                <DialogContent className="sm:max-w-md">
                                    <DialogHeader>
                                    <DialogTitle>Share link</DialogTitle>
                                    <DialogDescription>
                                        Anyone who has this link will be able to view this.
                                    </DialogDescription>
                                    </DialogHeader>
                                    <div className="flex items-center space-x-2">
                                    <div className="grid flex-1 gap-2">
                                        <Label htmlFor="link" className="sr-only">
                                        Link
                                        </Label>
                                        <Input
                                        id="link"
                                        defaultValue="https://nucleusdevs.com"
                                        readOnly
                                        />
                                    </div>
                                    <Button type="submit" size="sm" className="px-3">
                                        <span className="sr-only">Copy</span>
                                        <Copy className="h-4 w-4" />
                                    </Button>
                                    </div>
                                    <DialogFooter className="sm:justify-start">
                                    
                                    </DialogFooter>
                                </DialogContent>
                                </Dialog>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Spread the word</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </ToggleGroupItem>
           </ToggleGroup>
        </div>
    </div>
  )
}
