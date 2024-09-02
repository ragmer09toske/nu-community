// 'use client';

import { Button } from '@/components/ui/button';
import { Divider, Tab, TabGroup, TabList, TextInput } from '@tremor/react';
import useStore from "@/app/Store"
import { UploadDropzone } from '@/app/utils/uploadthing';
import { useState } from 'react';
import { FileResponse } from './Types';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Upload } from 'lucide-react';
import Image from 'next/image';

export default function UserManagement() {
  const UserDetails = useStore((state) => state.user);
  const [fileResponses, setFileResponses] = useState<FileResponse[]>([]);
  const fileResponses_len = fileResponses.length;

  return (
    <>
      <h3 className="text-tremor-title font-bold text-tremor-content-strong dark:text-dark-tremor-content-strong">
        Settings
      </h3>
      <p className="mt-2 text-tremor-default leading-6 text-tremor-content dark:text-dark-tremor-content">
        Your Profile Picture
      </p>
      <div className='w-32'>
        {fileResponses.map((file, index) => (
            <Image
            key={index}
                alt="Product image"
                className="aspect-square w-full rounded-md object-cover"
                height="84"
                src={file.url}
                width="84"
            />
        ))}
      </div>
      {fileResponses_len === 0 && (<button className="flex items-center justify-center  border border-dashed aspect-square w-32 rounded-md object-cover">
        <Dialog>
            <DialogTrigger asChild>
                <Upload className="h-4 w-4 text-muted-foreground" />
            </DialogTrigger>
            <DialogContent className="p-10">
                <DialogHeader>
                    <DialogTitle>Thumbnail</DialogTitle>
                    <DialogDescription>
                        Select a presentable picture, preferably with a white background.
                    </DialogDescription>
                </DialogHeader>
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
                    }}
                    onUploadError={(error: Error) => {
                    // Do something with the error.
                    
                    }}
                />
            </DialogContent>
        </Dialog>
    </button>)}
      <TabGroup className="mt-6">
        <TabList>
          <Tab>Account details</Tab>
          <Tab>Workspaces</Tab>
          <Tab>Billing</Tab>
        </TabList>
        {/* Content below only for demo purpose placed outside of <Tab> component. Add <TabPanels>, <TabPanel> to make it functional and to add content for other tabs */}
        <div className="mt-8 space-y-8">
          <form action="#" method="POST">
            <div>
              <h4 className="font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
                Email
              </h4>
              <p className="mt-1 text-tremor-default text-tremor-content dark:text-dark-tremor-content">
                Update your email address associated with this workspace.
              </p>
              <div className="mt-6">
                <label
                  htmlFor="email"
                  className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong"
                >
                  Update email address
                </label>
                <TextInput
                  type="email"
                  id="email"
                  name="email"
                  placeholder={UserDetails?.email}
                  className="mt-2 w-full rounded-tremor-small sm:max-w-lg"
                />
              </div>
              <div className='pt-5'>
                <Button
                className=''
                >
                  Update email
                </Button>
              </div>
            </div>
          </form>
          <Divider />
          <form action="#" method="POST">
            <h4 className="font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
              Password
            </h4>
            <p className="mt-1 text-tremor-default text-tremor-content dark:text-dark-tremor-content">
              Update your password associated with this workspace.
            </p>
            <div className="mt-6">
              <label
                htmlFor="current-password"
                className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong"
              >
                Current password
              </label>
              <TextInput
                type="password"
                id="current-password"
                name="current-password"
                placeholder=""
                className="mt-2 w-full rounded-tremor-small sm:max-w-lg"
              />
            </div>
            <div className="mt-4">
              <label
                htmlFor="new-password"
                className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong"
              >
                New password
              </label>
              <TextInput
                type="password"
                id="new-password"
                name="new-password"
                placeholder=""
                className="mt-2 w-full rounded-tremor-small sm:max-w-lg"
              />
            </div>
            <div className='pt-5'>
                <Button
                className=''
                >
                Update password
                </Button>
            </div>
          </form>
        </div>
      </TabGroup>
    </>
  );
}