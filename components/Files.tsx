"use client"
import React, { useState } from 'react'
import { Checkbox } from './ui/checkbox';
import { UploadDropzone } from '@/app/utils/uploadthing';
import { Card } from './ui/card';
import { toast } from "sonner"

interface FileResponse {
  key: string;
  name: string;
  serverData: any; // Adjust the type if serverData has a specific structure
  size: number;
  url: string;
  // Add other attributes if present in the response
}

export const Files: React.FC = () => {
  const [fileResponses, setFileResponses] = useState<FileResponse[]>([]);
  return (
    <div className='w-full flex justify-center gap-5 pl-5'>
        <Card className="flex w-[200px] h-[50vh] flex-col gap-5">
            <div className='pt-5 flex justify-center pl-5 pr-5' style={{fontSize: 13}}>
                <p><b>Your Files</b></p>
            </div>
            <div className="w-full" style={{ borderTopWidth: "1px"}}></div>
        <div className="w-full flex flex-col justify-center gap-5 pl-5 pr-5">
        {
          fileResponses.map((file, index) => (
            <div key={index} className="items-top flex space-x-2">
                <Checkbox id="terms1" />
                <div className="grid gap-1.5 leading-none">
                  <label
                    htmlFor="terms1"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {file.name}
                  </label>
                </div>
              </div>
           ))
          }
        </div>
        </Card>
        <div className="w-full flex justify-center">
          <UploadDropzone
            endpoint="mediaPost"
            onClientUploadComplete={(res: FileResponse[]) => {
              // Do something with the response array
              console.log("Files: ", res);

              // Update the fileResponses state variable
              setFileResponses(res);

              // Accessing the name of each file
              res.forEach(file => {
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
              })  

            }}
            onUploadError={(error: Error) => {
              // Do something with the error.
              toast("Event has been created", {
                description: "Sunday, December 03, 2023 at 9:00 AM",
                action: {
                  label: "Undo",
                  onClick: () => console.log("Undo"),
                },
              })
            }}
          />
        </div>
    </div>
  )
}
