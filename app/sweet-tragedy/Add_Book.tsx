"use client";

import * as React from "react";
import { Minus, Plus } from "lucide-react";
import { Bar, BarChart, ResponsiveContainer } from "recharts";

import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { UploadDropzone } from "../utils/uploadthing";
import { toast } from "sonner";

interface FileResponse {
  key: string;
  name: string;
  serverData: any;
  size: number;
  url: string;
}
export function AddBookDrawer() {
  const [goal, setGoal] = React.useState(350);
  const [fileResponses, setFileResponses] = React.useState<FileResponse[]>([]);

  function onClick(adjustment: number) {
    setGoal(Math.max(200, Math.min(400, goal + adjustment)));
  }

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">Open Drawer</Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="w-full flex justify-center">
          <UploadDropzone
            endpoint="mediaPost"
            onClientUploadComplete={(res: FileResponse[]) => {
              // Do something with the response array
              console.log("Files: ", res);

              // Update the fileResponses state variable
              setFileResponses(res);

              // Accessing the name of each file
              res.forEach((file) => {
                const fileName = file.name;
                console.log("File Name: ", fileName);
                // Do something with the file name
              });

              toast("Event has been created", {
                description: "Sunday, December 03, 2023 at 9:00 AM",
                action: {
                  label: "Undo",
                  onClick: () => console.log("Undo"),
                },
              });
            }}
            onUploadError={(error: Error) => {
              // Do something with the error.
              toast("Event has been created", {
                description: "Sunday, December 03, 2023 at 9:00 AM",
                action: {
                  label: "Undo",
                  onClick: () => console.log("Undo"),
                },
              });
            }}
          />
        </div>
      </DrawerContent>
    </Drawer>
  );
}
