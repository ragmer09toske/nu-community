"use client";
import React, { useState } from "react";
import { cn } from "../app/utils/cn";
import {
  IconBrandGithub,
  IconBrandGoogle,
  IconBrandOnlyfans,
} from "@tabler/icons-react";

import { Label } from "@radix-ui/react-label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import axios from "axios";
import { useToast } from "./ui/use-toast"
import { Loader } from "lucide-react";

export function RegisterCodingInitiative() {
  const [firstname, setFirstName] = useState<string>("")
  const [lastname, setLastname] = useState<string>("")
  const [number,setNumber] = useState<number>()
  const [email,setEmail] = useState<string>("")
  const [reason, setReason] = useState<string>("")
  const [loading, setLoading] = React.useState<boolean>(false)
  const { toast } = useToast()

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      try {
        setLoading(true)
        const response = await axios.post(
          'https://nucleus-community-55ff7e3e4dd0.herokuapp.com/codiac/register',
          {
            firstname: firstname,
            lastname: lastname,
            number: number,
            email: email,
            reason: reason,
          }
        );

        toast({
          title: "Registration succeeded",
          description: "You will get an email for your RSV",
        })

        console.log(response.data)
  
        setLoading(false)
      } catch (error) {
        console.log('Error:', error);
        toast({
          title: "Registration failed",
          description: "try to register again",
        })
        setLoading(false)
      }
    };

  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        Welcome to Nucleus codiac
      </h2>
      <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
        You is about to be a nerd
      </p>

      <form className="my-8" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="firstname">First name</Label>
            <Input id="firstname" onChange={(e)=>setFirstName(e.target.value)} placeholder="Khotso" type="text" />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Last name</Label>
            <Input id="lastname" onChange={(e)=>setLastname(e.target.value)}  placeholder="Moeketsi" type="text" />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Phone Number</Label>
          <Input id="number" onChange={(e)=>setNumber(e.target.valueAsNumber)} placeholder="26659749725" type="number" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" onChange={(e)=>setEmail(e.target.value)}  placeholder="khotso@gmail.com" type="email" />
        </LabelInputContainer>
        <div className="pt-2 pb-4">
         <Textarea 
         onChange={(e)=>setReason(e.target.value)} 
         placeholder="What are you hoping to gain from this"
         className="resize-none" />
        </div>

        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          {!loading ? <>Sign up &rarr;</> : <Loader />}
          <BottomGradient />
        </button>
        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
        <div className="flex flex-col space-y-4">
        </div>
      </form>
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
