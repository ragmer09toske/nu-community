import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "./ui/scroll-area";
import { Socials } from "./ControlBar/Socials";
import MenuList from "./MenuQoute";
import {
  ArrowUpCircle,
  CheckCircle2,
  Circle,
  Filter,
  FilterIcon,
  HelpCircle,
  LucideIcon,
  SlidersHorizontal,
  XCircle,
} from "lucide-react"
 
import { cn } from "@/lib/utils"

import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
 
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
  const [open, setOpen] = React.useState(false)
  const [selectedStatus, setSelectedStatus] = React.useState<Status | null>(null)
  return (
   
    <div  className="relative h-[100%]" style={{
        borderRightWidth: "1px"
    }}>
      <Command
        className="rounded-lg border shadow-md p-2"
        style={{ background: "rgba(255, 255, 255, 0)", borderWidth: "0px" }}
      >
        <Tabs defaultValue="account" className="flex  h-[100%] flex-col">
          <TabsList>
            <TabsTrigger value="account">Qoute</TabsTrigger>
            <TabsTrigger value="password">Nucleus Bot</TabsTrigger>
          </TabsList>
          <ScrollArea
            style={{ borderWidth: "0px" }}
            className="flex flex-col gap-5 w-full rounded-md border p-4"
          >
            <TabsContent value="account">
              {/* <MenuList /> */}
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
            <TabsContent value="password">
              <Socials />
            </TabsContent>
          </ScrollArea>
        </Tabs>
      </Command>
    </div>
  );
};
