import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Engagements } from "./Engagements";
import { Socials } from "./Socials";
import { Command } from "../ui/command";
import { ScrollArea } from '../ui/scroll-area'

export const ControlBar = () => {
  return (
    <div className="relative w-[35%] h-[100%] ">
      <Command
        className="rounded-lg border shadow-md p-2"
        style={{ background: "rgba(255, 255, 255, 0)", borderWidth: "0px" }}
      >
        <Tabs defaultValue="account" className="flex  h-[100%] flex-col">
          <TabsList>
            <TabsTrigger value="account">Engagements</TabsTrigger>
            <TabsTrigger value="password">Socials</TabsTrigger>
          </TabsList>
          <ScrollArea
            style={{ borderWidth: "0px" }}
            className="flex flex-col gap-5 w-full rounded-md border p-4"
          >
            <TabsContent value="account">
              <Engagements />
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
