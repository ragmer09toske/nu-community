"use client";
import React, { useEffect, useState } from "react";
import { Label } from "./label";
import { Input } from "./input";
import { cn } from "@/lib/utils";
import { Check, ChevronsUpDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
 
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
import Image from "next/image";
import { Value } from "@radix-ui/react-select";

export function CreateUserForm() {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")
  const [names, setNames] = useState<string>('');
  const [phones, setPhones] = useState<number>();
  const [email, setEmail] = useState<string>('');
  const [client, setClient] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [repeatPassword, setRepeatPassword] = useState<string>('');

  useEffect(()=>{
    setClient(value)
    console.log("the value of Value is: ", Value)
  },[value])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  return (
    <div className="flex  gap-5  items-center">
        <div className="max-w-md mx-auto w-full rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
        <form className="my-8" onSubmit={handleSubmit}>
            <LabelInputContainer>
                <Label htmlFor="firstname">Names</Label>
                <Input id="firstname" onChange={(e)=>{setNames(e.target.value)}} placeholder="Rethabile" type="text" />
            </LabelInputContainer>
            <LabelInputContainer>
                <Label htmlFor="lastname">Phone</Label>
                <Input id="lastname" onChange={(e)=>{setPassword(e.target.value)}} placeholder="56234554" type="number" />
            </LabelInputContainer>
            <LabelInputContainer className="mb-4">
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" onChange={(e)=>{setEmail(e.target.value)}} placeholder="projectmayhem@fc.com" type="email" />
            </LabelInputContainer>
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-full justify-between p-2"
                    >
                    {value
                        ? frameworks.find((framework) => framework.value === value)?.label
                        : "Select Client..."}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-full p-0">
                        <Command>
                        <CommandInput placeholder="Search framework..." />
                        <CommandEmpty>No framework found.</CommandEmpty>
                        <CommandGroup>
                            {frameworks.map((framework) => (
                            <CommandItem
                                key={framework.value}
                                value={framework.value}
                                onSelect={(currentValue) => {
                                setValue(currentValue === value ? "" : currentValue)
                                setOpen(false)
                                }}
                            >
                                <Check
                                className={cn(
                                    "mr-2 h-4 w-4",
                                    value === framework.value ? "opacity-100" : "opacity-0"
                                )}
                                />
                                {framework.label}
                            </CommandItem>
                            ))}
                        </CommandGroup>
                        </Command>
                    </PopoverContent>
                </Popover>
            <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

            <LabelInputContainer className="mb-4">
            <Label htmlFor="password" >Password</Label>
            <Input id="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder="••••••••" type="password" />
            </LabelInputContainer>
            <LabelInputContainer className="mb-8">
            <Label htmlFor="repeatpassword">Repeat Password</Label>
            <Input
                id="repeatpassword"
                placeholder="••••••••"
                type="repeatpassword"
                onChange={(e)=>{setRepeatPassword(e.target.value)}}
            />
            </LabelInputContainer>
            <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
        </form>
        </div>
        <div className="max-w-md mx-auto h-full flex items-center">
            <Image 
                src= {'/login.svg'}
                width={200}
                height={34}
                alt="Nucleus Create user"
            />
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
