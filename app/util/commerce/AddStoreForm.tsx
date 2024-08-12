"use client";
import React, { useContext, useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { UploadDropzone } from '@/app/utils/uploadthing';
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
 
const frameworks = [
  {
    value: "Keiso",
    label: "Keiso",
  },
  {
    value: "MediaLab",
    label: "MediaLab",
  },
  {
    value: "nu-devs",
    label: "nu-devs",
  } 
]

import { Label } from "../components/label";
import { Input } from "../components/input";
import { Textarea } from "@/components/ui/textarea";
import { Upload } from "lucide-react";
import { StoreContext } from "@/app/academy/AppContex";
import Image from "next/image";

interface FileResponse {
    key: string;
    name: string;
    serverData: any; // Adjust the type if serverData has a specific structure
    size: number;
    url: string;
    // Add other attributes if present in the response
}

export function AddStoreForm() {
  const [fileResponses, setFileResponses] = useState<FileResponse[]>([]);
  const [fileResponsesAvatar, setFileResponsesAvatar] = useState<FileResponse[]>([]);
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")
  const {
    name, setName,
    description, setDescription,
    officeNumber, setOfficeNumber,
    whatsappLink, setWhatsappLink,
    facebookLink, setFacebookLink,
    logo, setLogo,
    avatar, setAvatar
  } = useContext(StoreContext);
  const fileResponsesArray = fileResponses[0];
  const fileResponsesAvatarArray = fileResponsesAvatar[0];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  useEffect(()=>{
    setAvatar(fileResponsesArray?.url);
    setLogo(fileResponsesAvatarArray?.url);
  },[avatar,logo])
  return (
    <div className="flex  gap-5  items-center">
        <div className="max-w-md mx-auto w-full rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
        <form className="my-8" onSubmit={handleSubmit}>
            <LabelInputContainer>
                <Label htmlFor="firstname">Store Names</Label>
                <Input id="firstname" onChange={(e)=>{setName(e.target.value)}} placeholder="Rethabile" type="text" />
            </LabelInputContainer>
            <LabelInputContainer>
                <Label htmlFor="lastname">Office Phone</Label>
                <Input id="lastname" onChange={(e)=>{officeNumber(e.target.value)}} placeholder="56234554" type="number" />
            </LabelInputContainer>
            <div className="grid gap-3">
                <Label htmlFor="description">Description</Label>
                <Textarea
                id="description"
                defaultValue="Provide clear, concise details highlighting key features and benefits. Include materials, dimensions, and unique selling points to inform and engage customers."
                className="min-h-32"
                onChange={(e)=>setDescription(e.target.value)}
                />
            </div>
            <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
            <div className="flex gap-3">
                <LabelInputContainer>
                    <Label htmlFor="lastname">Whatsapp</Label>
                    <Input id="lastname" onChange={(e)=>{setWhatsappLink(e.target.value)}} placeholder="56234554" type="number" />
                </LabelInputContainer>

                <LabelInputContainer>
                    <Label htmlFor="lastname">Facebook</Label>
                    <Input id="lastname" onChange={(e)=>{setFacebookLink(e.target.value)}} placeholder="56234554" type="number" />
                </LabelInputContainer>
            </div>
        </form>
        </div>
        
        <div className="max-w-md mx-auto h-full flex flex-col gap-7">
            Store Assets
            {!fileResponsesAvatarArray && <Dialog>
                <DialogTrigger asChild>
                <div className="max-w-md mx-auto h-full">
                    <button className="flex items-center justify-center  border border-dashed aspect-square w-20 h-20 rounded-full object-cover">
                        <div className="flex flex-col justify-center items-center">
                            <Upload className="h-4 w-4 text-muted-foreground" />
                            <p className="" style={{fontSize: 10, color:"gray"}}>Avatar</p>
                        </div>
                    </button>
                </div>
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
                        setFileResponsesAvatar(res);

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
            </Dialog>}
            {fileResponsesAvatarArray && <Avatar>
                <AvatarImage src={fileResponsesAvatarArray.url} alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>}
            <Label htmlFor="lastname">Logo</Label>
            {!fileResponsesArray && <UploadDropzone
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
            />}
            {fileResponsesArray && 
            <div className="w-full p-10 rounded-md border border-dashed">
                <Image
                    alt="Product image"
                    className="aspect-square w-full rounded-md object-cover"
                    height="84"
                    src={fileResponsesArray.url}
                    width="84"
                />
            </div>}
        </div>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
