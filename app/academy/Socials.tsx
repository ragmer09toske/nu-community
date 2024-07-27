import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Circle, Loader2 } from "lucide-react";
import { useContext, useState } from "react";
import { cn } from "../utils/cn";
import { WebinarContext } from "./AppContex";

const SocialmediaProfiles = () => {
  let {loading} = useContext(WebinarContext);
  let {setLinkInProfile} = useContext(WebinarContext);
  let {setFacebookProfile} = useContext(WebinarContext);
  let {handleRegister} = useContext(WebinarContext);
    return(
      <div className="my-8">
          <div className="flex flex-col justify-center">
            <LabelInputContainer className="mb-4 flex-col justify-center">
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
                      <Input onChange={(e)=>{setLinkInProfile(e.target.value)}} placeholder="Your Profile name" />
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
                      <Input onChange={(e)=>{setFacebookProfile(e.target.value)}} placeholder="Your Profile name" />
                    </div>
                </div>
              </div>
          </LabelInputContainer>
          </div>

          <button
            className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            onClick={handleRegister}
          >
            {!loading ? <div>Register &rarr;</div> : <Loader2 className="flex w-full justify-center items-center animate-spin" />}
            <BottomGradient />
          </button>
          <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
          <div className="flex flex-col space-y-4"></div>
      </div>
    )
}
export default SocialmediaProfiles;
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