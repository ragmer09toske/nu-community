import React from 'react'
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, CommandShortcut } from './ui/command'
import { Calculator, Calendar, CreditCard, Settings, Smile, User } from 'lucide-react'
import { ScrollArea } from "@/components/ui/scroll-area"
import { Card } from './ui/card'

export const Network = () => {
  return (
    <div className='flex w-full gap-3 justify-center items-center h-full fixed bottom-7'>
        <Card style={{
            backdropFilter: "blur(5px)",
            borderWidth: "1px",
            width: "60%",
            height: "80%"
        }}
          className="flex justify-center "
        >
          <div className='w-1/2 h-full p-2 ' style={{
            backdropFilter: "blur(5px)",
            borderWidth: "1px",
            borderLeftColor: "rgba(255, 255, 255, 0.164)",
            borderRightColor: "rgba(255, 255, 255, 0.164)",
            borderTopWidth: "0px",
            borderBottomWidth: "0px",
            width: "60%",
          }}>
              <Command className="rounded-lg border shadow-md p-2" style={{borderColor: "none", borderWidth: "0px"}}>
                <CommandInput placeholder="Type a command or search..." />
                <ScrollArea className="h-[100%] w-full rounded-md border p-4">
                <CommandList className=''>
                  <CommandEmpty>No results found.</CommandEmpty>
                  <CommandGroup heading="Suggestions">
                    <CommandItem>
                      <Calendar className="mr-2 h-4 w-4" />
                      <span>Calendar</span>
                    </CommandItem>
                    <CommandItem>
                      <Smile className="mr-2 h-4 w-4" />
                      <span>Search Emoji</span>
                    </CommandItem>
                    <CommandItem>
                      <Calculator className="mr-2 h-4 w-4" />
                      <span>Calculator</span>
                    </CommandItem>
                  </CommandGroup>
                  <CommandSeparator />
                  <CommandGroup heading="Settings">
                    <CommandItem>
                      <User className="mr-2 h-4 w-4" />
                      <span>Profile</span>
                      <CommandShortcut>⌘P</CommandShortcut>
                    </CommandItem>
                    <CommandItem>
                      <CreditCard className="mr-2 h-4 w-4" />
                      <span>Billing</span>
                      <CommandShortcut>⌘B</CommandShortcut>
                    </CommandItem>
                    <CommandItem>
                      <Settings className="mr-2 h-4 w-4" />
                      <span>Settings</span>
                      <CommandShortcut>⌘S</CommandShortcut>
                    </CommandItem>
                  </CommandGroup>
                </CommandList>
                </ScrollArea>
              </Command>
   
          </div>
        </Card>
    </div>
  )
}
