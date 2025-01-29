"use client";

import * as React from "react";
import { MessageSquare } from "lucide-react";

import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";;

interface FileResponse {
  key: string;
  name: string;
  serverData: any;
  size: number;
  url: string;
}
export function CommentskDrawer() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <MessageSquare size={15} />
      </DrawerTrigger>
      <DrawerContent>
        <div className="p-5">Comments Content</div>
      </DrawerContent>
    </Drawer>
  );
}
