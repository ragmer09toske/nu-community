import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "./ui/scroll-area";
import { Socials } from "./ControlBar/Socials";
import { Command } from "./ui/command";
import MenuList from "./MenuQoute";


export const CLientCloud = () => {
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
              <MenuList />
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
