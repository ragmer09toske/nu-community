"use client";
import React, { useState } from "react";
import axios from "axios";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Avatar,
  AvatarImage,
} from "@/components/ui/avatar";
import { UploadDropzone } from '@/app/utils/uploadthing';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { FileResponse } from "../Types";
import { Upload } from "lucide-react";
import NuLoad from "../NuLoad";
import { nu_api_base_url } from "@/app/Contants";

// Volunteer Interface
interface Volunteer {
  names: string;
  email: string;
  department: string;
  phone: string;
  designition: string;
  avatar: string;
}

const VolunteerRegistrationForm = () => {
  const [fileResponses, setFileResponses] = useState<FileResponse[]>([]);
  const [formData, setFormData] = useState<Volunteer>({
    names: "",
    email: "",
    department: "",
    phone: "",
    designition: "",
    avatar: "",
  });
  const [loading, setLoading] = useState<boolean>(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      if (fileResponses.length > 0) {
        formData.avatar = fileResponses[0].url; // Add avatar URL
      }
      await axios.post(`${nu_api_base_url}/sebabatso/volunteers`, formData);
      alert("Volunteer registered successfully!");
      // Optionally reset form or clear state
    } catch (error) {
      console.error("Error registering volunteer:", error);
      alert("Failed to register volunteer. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <NuLoad />;
  }

  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        Volunteer Registration
      </h2>
      <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
        Please fill out the form to register as a volunteer.
      </p>

      <div className="my-8">
        <LabelInputContainer className="mb-4">
          <Label htmlFor="names">Full Name</Label>
          <Input
            id="names"
            name="names"
            placeholder="John Doe"
            type="text"
            onChange={handleInputChange}
          />
        </LabelInputContainer>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            name="email"
            placeholder="john.doe@example.com"
            type="email"
            onChange={handleInputChange}
          />
        </LabelInputContainer>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="department">Department</Label>
          <Select onValueChange={(v) => {
            setFormData(prev => ({ ...prev, department: v }));
          }} value={formData.department}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select department" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Department</SelectLabel>
                <SelectItem value="Admin & Registration">Admin & Registration</SelectItem>
                <SelectItem value="Media">Media</SelectItem>
                <SelectItem value="Protocol">Protocol</SelectItem>
                <SelectItem value="Exhibition">Exhibition</SelectItem>
                <SelectItem value="Entertainment">Entertainment</SelectItem>
                <SelectItem value="Ushering">Ushering</SelectItem>
                <SelectItem value="Catering">Catering</SelectItem>
                <SelectItem value="Logistics">Logistics</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </LabelInputContainer>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            id="phone"
            name="phone"
            placeholder="+1234567890"
            type="tel"
            onChange={handleInputChange}
          />
        </LabelInputContainer>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="designition">Designation</Label>
          <Select onValueChange={(v) => {
            setFormData(prev => ({ ...prev, designition: v }));
          }} value={formData.designition}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select designation" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Designation</SelectLabel>
                <SelectItem value="Volunteer">Volunteer</SelectItem>
                <SelectItem value="Supervisor">Supervisor</SelectItem>
                <SelectItem value="Manager">Manager</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </LabelInputContainer>

        <LabelInputContainer className="mb-8">
          <Avatar>
            {fileResponses.length === 0 && (
              <button className="flex items-center justify-center border border-dashed aspect-square w-full rounded-md object-cover">
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
                        console.log("Files: ", res);
                        setFileResponses(res);
                      }}
                      onUploadError={(error: Error) => {
                        console.error("Upload error:", error);
                      }}
                    />
                  </DialogContent>
                </Dialog>
              </button>
            )}
            {fileResponses.length > 0 &&
              fileResponses.map((file, index) => (
                <AvatarImage
                  key={index}
                  alt="Volunteer image"
                  height="84"
                  src={file.url}
                  width="84"
                />
              ))}
          </Avatar>
          {fileResponses.length === 0 && <p style={{ fontSize: 12 }}>Upload an Image of Yourself</p>}
        </LabelInputContainer>

        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          onClick={handleSubmit}
        >
          Register Volunteer &rarr;
          <BottomGradient />
        </button>
      </div>
    </div>
  );
};

// Components for bottom gradient and input containers
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

export default VolunteerRegistrationForm;
