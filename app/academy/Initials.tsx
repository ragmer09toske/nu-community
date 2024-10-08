import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Loader2 } from "lucide-react";
import { useContext, useState } from "react";
import { cn } from "../utils/cn";
import { WebinarContext } from "./AppContex";

const InitialsForm = () => {
    let {setFormType} = useContext(WebinarContext);
    let {setFirstName} = useContext(WebinarContext);
    let {setLastname} = useContext(WebinarContext);
    let {setNumber} = useContext(WebinarContext);
    let {setEmail} = useContext(WebinarContext);
    let {setAbout} = useContext(WebinarContext);
    let {loading} = useContext(WebinarContext);

    let {firstname} = useContext(WebinarContext);
    let {jobStatus} = useContext(WebinarContext);
    let {lastname} = useContext(WebinarContext);
    let {number} = useContext(WebinarContext);
    let {about} = useContext(WebinarContext);
    let {email} = useContext(WebinarContext);

    const handleNext = () => {
        setFormType("background")
    }
    

    return(
      <form className="my-8">
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
            <LabelInputContainer>
              <Label>First name</Label>
              <Input onChange={(e)=>setFirstName(e.target.value)} required placeholder="Khotso" type="text" />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label>Last name</Label>
              <Input  onChange={(e)=>setLastname(e.target.value)} required placeholder="Moeketsi" type="text" />
            </LabelInputContainer>
          </div>
          <LabelInputContainer className="mb-4">
            <Label>Phone Number</Label>
            <Input  onChange={(e)=>setNumber(e.target.valueAsNumber)} required placeholder="26659749725" type="number" />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label >Email Address</Label>
            <Input id="email" onChange={(e)=>setEmail(e.target.value)} required  placeholder="khotso@gmail.com" type="email" />
          </LabelInputContainer>
          <div className="pt-2 pb-4">
          <Textarea 
           onChange={(e)=>setAbout(e.target.value)} 
           placeholder="Tell us a little bit about yourself"
           required
           className="resize-none" />
          </div>
  
          { 
            (firstname && lastname && number && email && about)
            &&
            <button
            className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            onClick={handleNext}
            >
              {!loading ? <div>Next &rarr;</div> : <Loader2 className="flex w-full justify-center items-center animate-spin" />}
              <BottomGradient />
            </button>
          }
          <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
          <div className="flex flex-col space-y-4"></div>
        </form>
    )
  }
export default InitialsForm;
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