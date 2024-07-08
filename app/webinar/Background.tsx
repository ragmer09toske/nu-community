"use client"
import Image from "next/image"
import { ClaudeLogo, GeminiLogo, MetaIconOutline, OpenAILogo } from "@/components/Marketing-Card";
import { useContext, useState } from "react";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cn } from "../utils/cn";
import { SliderReact } from "@/components/ui/SliderReact";
import { Circle, Github, Loader2 } from "lucide-react";
import { SliderGithub } from "@/components/ui/SliderGithub";
import { WebinarContext } from "./AppContex";

const BackgroundForm = () => {
  const [loading, setLoading] = useState<boolean>(false)
  let {setJobStatus} = useContext(WebinarContext);
  let {jobStatus} = useContext(WebinarContext);

  const handleToSocials = () => {
    
  }
  const handleJobStatusChange = (value:any) => {
    setJobStatus(value);
  };
    return(
      <form className="my-8">
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="job-status">Your Job Status</Label>
            <Select value={jobStatus} onValueChange={handleJobStatusChange}
             >
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
                <div className="flex gap-2 items-center">
                    <div>
                      <Container className="h-12 w-12 circle-2">
                          <Github className="h-6 w-6 dark:text-white" />
                      </Container>
                    </div>
                    <SliderGithub />
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
                    <SliderReact />
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
                    <SliderReact />
                </div>
              </div>
          </LabelInputContainer>}
          
          {jobStatus &&
            <button
            className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            onClick={handleToSocials}
          >
            {!loading ? <div>Next &rarr;</div> : <Loader2 className="flex w-full justify-center items-center animate-spin" />}
            <BottomGradient />
          </button>}
          <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
          <div className="flex flex-col space-y-4"></div>
        </form>
    )
}
export default BackgroundForm;
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

const BottomGradient = () => {
    return (
        <>
        <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
        <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
        </>
    );
};

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