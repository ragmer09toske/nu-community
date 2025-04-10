import { SignupForm } from "@/components/login";
import LinearBuffer from "@/components/MUI_LoadBuffer";
import { Dialog, DialogPanel } from "@tremor/react";
import React, { useContext, useState } from "react";
import { PriceContext } from "../academy/AppContex";
import { cn } from "@/lib/utils";
import useMobile from "../Mobile";
import { RiCloseCircleFill } from "@remixicon/react";
import { SignupFormDemo } from "@/components/SignupForm";

const RegisterDialog = () => {
  let { setIsOpenUnderTheHoodStudies } = useContext(PriceContext);
  let { isOpenUnderTheHoodStudies } = useContext(PriceContext);

  let { isOpenFullstackMentorship } = useContext(PriceContext);
  let { setIsOpenFullstackMentorship } = useContext(PriceContext);

  let { isOpenOnlinePresence } = useContext(PriceContext);
  let { setIsOpenOnlinePresence } = useContext(PriceContext);

  let { isLoading } = useContext(PriceContext);
  let { setLoading } = useContext(PriceContext);

  const isMobile = useMobile();

  return (
    <div className="w-full">
      <Dialog
        open={isOpenUnderTheHoodStudies}
        onClose={(val) => setIsOpenUnderTheHoodStudies(val)}
        static={true}
      >
        <DialogPanel className="flex flex-col gap-5 w-[80]">
          {isLoading && <LinearBuffer />}
          <div className="flex justify-between items-center">
            <div className="p-5">
              <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
                Welcome to Nucleus talend cloud
              </h2>
              <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
                Login to Nucleus if you can because we don&apos;t have a login
                flow yet
              </p>
            </div>
            {isMobile && (
              <div>
                <RiCloseCircleFill
                  onClick={() => setIsOpenUnderTheHoodStudies(false)}
                />
              </div>
            )}
          </div>
          <div className="gap-5">
            <div>
              <SignupFormDemo />
            </div>
          </div>
        </DialogPanel>
      </Dialog>

      <Dialog
        open={isOpenFullstackMentorship}
        onClose={(val) => setIsOpenFullstackMentorship(val)}
        static={true}
      >
        <DialogPanel className="flex flex-col gap-5 w-[80]">
          {isLoading && <LinearBuffer />}
          <div className="flex justify-between items-center">
            <div className="p-5">
              <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
                Welcome to Nucleus talend cloud
              </h2>
              <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
                Login to Nucleus if you can because we don&apos;t have a login
                flow yet
              </p>
            </div>
            {isMobile && (
              <div>
                <RiCloseCircleFill
                  onClick={() => setIsOpenFullstackMentorship(false)}
                />
              </div>
            )}
          </div>
          <div className="gap-5">
            <SignupForm setLoading={setLoading} />
          </div>
        </DialogPanel>
      </Dialog>

      <Dialog
        open={isOpenOnlinePresence}
        onClose={(val) => setIsOpenOnlinePresence(val)}
        static={true}
      >
        <DialogPanel className="flex flex-col gap-5 w-[80]">
          {isLoading && <LinearBuffer />}
          <div className="flex justify-between items-center">
            <div className="p-5">
              <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
                Welcome to Nucleus talend cloud
              </h2>
              <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
                Login to Nucleus if you can because we don&apos;t have a login
                flow yet
              </p>
            </div>
            {isMobile && (
              <div>
                <RiCloseCircleFill
                  onClick={() => setIsOpenOnlinePresence(false)}
                />
              </div>
            )}
          </div>
          <div className="gap-5">
            <SignupForm setLoading={setLoading} />
          </div>
        </DialogPanel>
      </Dialog>
    </div>
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
const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};
export default RegisterDialog;
