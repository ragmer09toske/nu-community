"use client"
import React, { useCallback, useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "./ui/scroll-area";
import { Socials } from "./ControlBar/Socials";
import io from "socket.io-client"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import {
  ArrowUpCircle,
  CheckCircle2,
  Circle,
  GripHorizontal,
  HelpCircle,
  LucideIcon,
  SlidersHorizontal,
  XCircle,
} from "lucide-react"
import { cn } from "@/lib/utils"
import useStore from "@/app/Store"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import LinearBuffer from "./MUI_LoadBuffer";
import { Textarea } from "./ui/textarea";
 
const statuses: Status[] = [
  {
    value: "backlog",
    label: "Backlog",
    icon: HelpCircle,
  },
  {
    value: "todo",
    label: "Todo",
    icon: Circle,
  },
  {
    value: "in progress",
    label: "In Progress",
    icon: ArrowUpCircle,
  },
  {
    value: "done",
    label: "Done",
    icon: CheckCircle2,
  },
  {
    value: "canceled",
    label: "Canceled",
    icon: XCircle,
  },
]

type Status = {
  value: string
  label: string
  icon: LucideIcon
}



export const CLientCloud = () => {
  const [open, setOpen] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState<Status | null>(null);
  const [message, setMessage] = useState<string>('');
  const [receivedMessage, setReceivedMessage] = useState('');
  const [room, setRoom] = useState<string>("1");
  const userDetails = useStore((state) => state.user);

  useEffect(() => {
    const newSocket = io("https://socket-io-server-d1d904e77e8c.herokuapp.com");
    // setSocket(newSocket);

    const joinRoom = () => {
      if (room !== "") {
        newSocket.emit("join", room);
      }
    };

    const handleReceivedMessage = (data: { message: string }) => {
      setReceivedMessage(data.message);
    };

    newSocket.on("receive_message", handleReceivedMessage);

    joinRoom();

    return () => {
      newSocket.off("receive_message", handleReceivedMessage);
      newSocket.disconnect();
    };
  }, [room]);


  return (
   
    <div  className="relative h-[100%]" style={{
        borderRightWidth: "1px"
    }}>
      <Command
        className="rounded-lg border shadow-md p-2"
        style={{ background: "rgba(255, 255, 255, 0)", borderWidth: "0px" }}
      >
        <Tabs defaultValue="account" className="flex  h-[100%] flex-col">
          <LinearBuffer />
          <TabsList>
            <TabsTrigger value="ticket">Media</TabsTrigger>
            <TabsTrigger value="rooms">Pages</TabsTrigger>
            <TabsTrigger value="temp_on">Content</TabsTrigger>
          </TabsList>
          <ScrollArea
            style={{ borderWidth: "0px" }}
            className="flex flex-col gap-5 w-full rounded-md border p-4"
          >
            <TabsContent value="ticket">
            <div className="flex items-center space-x-4">
              <SlidersHorizontal  className="text-sm text-muted-foreground" />
              <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-[150px] justify-start"
                  >
                    {selectedStatus ? (
                      <>
                        <selectedStatus.icon className="mr-2 h-4 w-4 shrink-0" />
                        {selectedStatus.label}
                      </>
                    ) : (
                      <>+ Set status</>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="p-0" side="right" align="start">   
                  <Command>
                    <CommandList>
                      <CommandEmpty>No results found.</CommandEmpty>
                      <CommandGroup>
                        {statuses.map((status) => (
                          <CommandItem
                            key={status.value}
                            value={status.value}
                            onSelect={(value) => {
                              setSelectedStatus(
                                statuses.find((priority) => priority.value === value) ||
                                  null
                              )
                              setOpen(false)
                            }}
                          >
                            <status.icon
                              className={cn(
                                "mr-2 h-4 w-4",
                                status.value === selectedStatus?.value
                                  ? "opacity-100"
                                  : "opacity-40"
                              )}
                            />
                            <span>{status.label}</span>
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
            </div>
            </TabsContent>
            <TabsContent value="rooms">
              <Socials />
            </TabsContent>
          </ScrollArea>
          <TabsContent value="temp_on" className="h-full">
            <div className="flex gap-5 h-full">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="h-full">
                {userDetails?.name}
                <div>
                  <p style={{fontSize:12, color:"rgba(255, 255, 255, 0.716)"}}>
                    {receivedMessage}
                  </p>
                </div>

                <div className="absolute left-0 bottom-0 pb-2 flex w-[100%] items-center justify-center">
                  <div className=" w-[306px] ">
                    <div className="flex">
                    <HoverCard >
                      <HoverCardTrigger><GripHorizontal  className="pl-2"/></HoverCardTrigger>
                      <HoverCardContent>
                      <p style={{fontSize:12, color:"rgba(255, 255, 255, 0.716)"}}>This message will only be seen by a person or a group of people you send a temp-on token to </p>
                      </HoverCardContent>
                    </HoverCard>
                    {message && <div>
                      {/* <Send onClick={sendMessage} className="pl-2"/> */}
                    </div>}
                    </div>
                    <div className="pl-2">
                    <p style={{fontSize:12, color:"rgba(255, 255, 255, 0.716)"}}>Temp-On: 3423erwwx3243</p>
                    <Textarea onChange={(e)=>setMessage(e.target.value)} cols={1} rows={2} className="resize-none w-[96%] p-2" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </Command>
    </div>
  );
};
