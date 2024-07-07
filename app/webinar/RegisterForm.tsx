"use client";
import React, { useState } from "react";

import { Label } from "@radix-ui/react-label";
import axios from "axios";
import { Circle, Github, Loader, Loader2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/app/utils/cn";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ClaudeLogo, GeminiLogo, MetaIconOutline, OpenAILogo } from "@/components/Marketing-Card";
import Image from "next/image";
import { ScrollArea } from "@/components/ui/scroll-area";


const  RegisterForm = () => {
  const [firstname, setFirstName] = useState<string>("")
  const [lastname, setLastname] = useState<string>("")
  const [number,setNumber] = useState<number>()
  const [email,setEmail] = useState<string>("")
  const [reason, setReason] = useState<string>("")
  const [loading, setLoading] = React.useState<boolean>(false)
  const { toast } = useToast()
  const [formType, setFormType] = useState<string>("initials")
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      try {
        setLoading(true)
        const response = await axios.post(
          'https://nu-com-0e51cf02b2c8.herokuapp.com/codiac/register',
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
      } catch (error: any) {
        console.log('Error:', error.message);
        toast({
          title: "Registration failed",
          description: "try to register again",
        })
        setLoading(false)
      }
    };

    const InitialsForm = () => {
      return(
        <form className="my-8" onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
              <LabelInputContainer>
                <Label htmlFor="firstname">First name</Label>
                <Input id="firstname" onChange={(e)=>setFirstName(e.target.value)} required placeholder="Khotso" type="text" />
              </LabelInputContainer>
              <LabelInputContainer>
                <Label htmlFor="lastname">Last name</Label>
                <Input id="lastname" onChange={(e)=>setLastname(e.target.value)} required placeholder="Moeketsi" type="text" />
              </LabelInputContainer>
            </div>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="email">Phone Number</Label>
              <Input id="number" onChange={(e)=>setNumber(e.target.valueAsNumber)} required placeholder="26659749725" type="number" />
            </LabelInputContainer>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" onChange={(e)=>setEmail(e.target.value)} required  placeholder="khotso@gmail.com" type="email" />
            </LabelInputContainer>
            <div className="pt-2 pb-4">
            <Textarea 
             onChange={(e)=>setReason(e.target.value)} 
             placeholder="Tell us a little bit about yourself"
             required
             className="resize-none" />
            </div>
    
            <button
              className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            >
              {!loading ? <div onClick={handleNext}>Next &rarr;</div> : <Loader2 className="flex w-full justify-center items-center animate-spin" />}
              <BottomGradient />
            </button>
            <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
            <div className="flex flex-col space-y-4"></div>
          </form>
      )
    }
    const Container = ({
      className,
      children,
    }: {
      className?: string;
      children: React.ReactNode;
    }) => {
      return (
        <div
          className={cn(
            `h-16 w-16 rounded-full flex items-center justify-center bg-[rgba(248,248,248,0.01)]
        shadow-[0px_0px_8px_0px_rgba(248,248,248,0.25)_inset,0px_32px_24px_-16px_rgba(0,0,0,0.40)]
        `,
            className
          )}
        >
          {children}
        </div>
      );
    };
    const [jobStatus, setJobStatus] = useState<string>('');
    const handleSelectChange = (value:any) => {
      setJobStatus(value);
    };
    const BackgroundForm = () => {
      return(
        <form className="my-8">
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
            <LabelInputContainer>
              <Label htmlFor="job-status">Your Job Status</Label>
              <Select value={jobStatus} onValueChange={handleSelectChange}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="choose" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="working">Working</SelectItem>
                  <SelectItem value="not-working">Not Working</SelectItem>
                </SelectContent>
              </Select>
            </LabelInputContainer>
            </div>
            <br/>
            {jobStatus &&
              <LabelInputContainer className="mb-4">
                <div className="flex flex-row flex-shrink-0 justify-center items-center gap-2">
                  <Container className="h-8 w-8 circle-1">
                    <ClaudeLogo className="h-4 w-4 " />
                  </Container>
                  <Container className="h-12 w-12 circle-2">
                    <Github className="h-6 w-6 dark:text-white" />
                  </Container>
                  <Container className="circle-3">
                    <OpenAILogo className="h-8 w-8 dark:text-white" />
                  </Container>
                  <Container className="h-12 w-12 circle-4">
                    <MetaIconOutline className="h-6 w-6 " />
                  </Container>
                  <Container className="h-8 w-8 circle-5">
                    <GeminiLogo className="h-4 w-4 " />
                  </Container>
                </div>
                <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
                <div className="flex justify-center">
                  <Label>Rate yourself on this technologies</Label>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex">
                    <div className="pl-3">
                      <Circle />
                    </div>
                    <b>-Github</b>
                  </div>
                  <div className="flex gap-2">
                      <div>
                        <Container className="h-12 w-12 circle-2">
                            <Github className="h-6 w-6 dark:text-white" />
                        </Container>
                      </div>
                      <Slider defaultValue={[1]} max={100} step={1} />
                  </div>
                </div>
                <br/>
                <div className="flex flex-col gap-1">
                  <div className="flex">
                    <div className="pl-3">
                      <Circle />
                    </div>
                    <b>-React</b>
                  </div>
                  <div className="flex gap-2">
                      <div>
                        <Container className="h-12 w-12 circle-2">
                          <Image 
                            className="invert"
                            src={"/react_1.png"}
                            width={20}
                            height={20}
                            alt="react"
                          />
                        </Container>
                      </div>
                      <Slider defaultValue={[1]} max={100} step={1} />
                  </div>
                </div>
                <br/>
                <div className="flex flex-col gap-1">
                  <div className="flex">
                    <div className="pl-3">
                      <Circle />
                    </div>
                    <b>-HTML5 & CSS</b>
                  </div>
                  <div className="flex gap-2">
                      <div>
                        <Container className="h-12 w-12 circle-2">
                          <Image 
                            className="invert"
                            src={"/html.png"}
                            width={20}
                            height={20}
                            alt="react"
                          />
                        </Container>
                      </div>
                      <Slider defaultValue={[1]} max={100} step={1} />
                  </div>
                </div>
            </LabelInputContainer>}
            
            <button
              className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
              onClick={handleToSocials}
            >
              {!loading ? <div onClick={handleNext}>Next &rarr;</div> : <Loader2 className="flex w-full justify-center items-center animate-spin" />}
              <BottomGradient />
            </button>
            <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
            <div className="flex flex-col space-y-4"></div>
          </form>
      )
    }
    const handleToSocials = () => {
      setFormType("socialmedia")
    }
    const SocialmediaProfiles = () => {
      return(
        <form className="my-8">
            {jobStatus &&
              <LabelInputContainer className="mb-4">
                <div className="flex justify-center">
                  <Label>You can skip this part</Label>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex">
                    <div className="pl-3">
                      <Circle />
                    </div>
                    <b>-Linkedin</b>
                  </div>
                  <div className="flex gap-2">
                      <div>
                        <Input  placeholder="Username" />
                      </div>
                  </div>
                </div>
                <br/>
                <div className="flex flex-col gap-2">
                  <div className="flex">
                    <div className="pl-3">
                      <Circle />
                    </div>
                    <b>-Facebook</b>
                  </div>
                  <div className="flex gap-2">
                      <div>
                        <Input  placeholder="Username" />
                      </div>
                  </div>
                </div>
            </LabelInputContainer>}
            <button
              className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            >
              {!loading ? <div onClick={handleNext}>Next &rarr;</div> : <Loader2 className="flex w-full justify-center items-center animate-spin" />}
              <BottomGradient />
            </button>
            <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
            <div className="flex flex-col space-y-4"></div>
          </form>
      )
    }
    const handleNext = () => {
      setFormType("background")
    }
  return (
    <ScrollArea className="h-[470px]">
      <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
        <h2 className="text-3xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Welcome to Nucleus codiac Webinar
        </h2>
        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
        {formType==="initials" && <InitialsForm />}
        {formType==="background" && <BackgroundForm />}
        {formType==="socialmedia" && <SocialmediaProfiles />}
      </div>
    </ScrollArea>
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


export default RegisterForm