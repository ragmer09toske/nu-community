import React from 'react'
import { Checkbox } from './ui/checkbox';
import { UploadDropzone } from '@/app/utils/uploadthing';
import { Card } from './ui/card';

export const Files = () => {
  return (
    <div className='w-full flex justify-center gap-5 pl-5'>
        <Card className="flex w-[200px] h-[50vh] flex-col gap-5">
            <div className='pt-5 flex justify-center pl-5 pr-5'>
                Your Files
            </div>
            <div className="w-full" style={{ borderTopWidth: "1px"}}></div>
        <div className="w-full flex flex-col justify-center gap-5 pl-5 pr-5">
          <div className="items-top flex space-x-2">
            <Checkbox id="terms1" />
            <div className="grid gap-1.5 leading-none">
              <label
                htmlFor="terms1"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                ric.png
              </label>
            </div>
          </div>
          <div className="items-top flex space-x-2">
            <Checkbox id="terms1" />
            <div className="grid gap-1.5 leading-none">
              <label
                htmlFor="terms1"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                one.gif
              </label>
            </div>
          </div>
          <div className="items-top flex space-x-2">
            <Checkbox id="terms1" />
            <div className="grid gap-1.5 leading-none">
              <label
                htmlFor="terms1"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Logo.png
              </label>
            </div>
          </div>
          </div>
        </Card>
        
        <div className="w-full flex justify-center">
          <UploadDropzone
            endpoint="mediaPost"
            onClientUploadComplete={(res) => {
              // Do something with the response
              console.log("Files: ", res);
              alert("Upload Completed");
            }}
            onUploadError={(error: Error) => {
              // Do something with the error.
              alert(`ERROR! ${error.message}`);
            }}
          />
        </div>
    </div>
  )
}
