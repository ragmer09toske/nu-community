import { SignupForm } from '@/components/login'
import LinearBuffer from '@/components/MUI_LoadBuffer'
import { Dialog, DialogPanel } from '@tremor/react'
import React, { useContext, useState } from 'react'
import { PriceContext } from '../webinar/AppContex'
import RegisterForm from '../webinar/RegisterForm'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Loader2, SidebarCloseIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import useMobile from '../Mobile'
import { RiCloseCircleFill } from '@remixicon/react'

const RegisterDialog = () => {
  let {setIsOpenUnderTheHoodStudies} = useContext(PriceContext);
  let {isOpenUnderTheHoodStudies} = useContext(PriceContext);

  let {isOpenFullstackMentorship} = useContext(PriceContext);
  let {setIsOpenFullstackMentorship} = useContext(PriceContext);

  let {isOpenOnlinePresence} = useContext(PriceContext);
  let {setIsOpenOnlinePresence} = useContext(PriceContext);
  
  let {isLoading} = useContext(PriceContext);
  let {setLoading} = useContext(PriceContext);

  const isMobile =  useMobile();

  return (
    <div className='w-full'>
        <Dialog open={isOpenUnderTheHoodStudies} onClose={(val) => setIsOpenUnderTheHoodStudies(val)} static={true} >
            <DialogPanel className='flex flex-col gap-5 w-[80]'>
                {isLoading && <LinearBuffer />}
                <div>
                <div className='p-5'>
                    <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
                        Welcome to Nucleus talend cloud
                    </h2>
                    <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
                        Login to Nucleus if you can because we don&apos;t have a login flow
                        yet
                    </p>
                </div>
                </div>
                <div className='gap-5'>
                <div>
                    <form className="my-8">
                        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                            {isMobile && <div>
                                <RiCloseCircleFill onClick={()=>setIsOpenUnderTheHoodStudies(false)} />
                            </div>}
                            <LabelInputContainer>
                            <Label>First name</Label>
                            <Input required placeholder="Khotso" type="text" />
                            </LabelInputContainer>
                            <LabelInputContainer>
                            <Label>Last name</Label>
                            <Input  required placeholder="Moeketsi" type="text" />
                            </LabelInputContainer>
                        </div>
                        <LabelInputContainer className="mb-4">
                            <Label>Phone Number</Label>
                            <Input  required placeholder="26659749725" type="number" />
                        </LabelInputContainer>
                        <LabelInputContainer className="mb-4">
                            <Label >Email Address</Label>
                            <Input id="email" required  placeholder="khotso@gmail.com" type="email" />
                        </LabelInputContainer>
                        <div className="pt-2 pb-4">
                        <Textarea 
                        placeholder="Tell us a little bit about yourself"
                        required
                        className="resize-none" />
                        </div>       
                            <button
                            className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                            >
                            {!isLoading ? <div> Next &rarr;</div> : <Loader2 className="flex w-full justify-center items-center animate-spin" />}
                            <BottomGradient />
                            </button>
                        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
                        <div className="flex flex-col space-y-4"></div>
                    </form>
                </div>
                </div>
            </DialogPanel>
        </Dialog>

        <Dialog open={isOpenFullstackMentorship} onClose={(val) => setIsOpenFullstackMentorship(val)} static={true} >
            <DialogPanel className='flex flex-col gap-5 w-[80]'>
                {isLoading && <LinearBuffer />}
                <div className='flex justify-between items-baseline'>
                    <div className='p-5'>
                        <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
                            Welcome to Nucleus talend cloud
                        </h2>
                        <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
                            Login to Nucleus if you can because we don&apos;t have a login flow
                            yet
                        </p>
                    </div>
                    {isMobile && <div>
                        <RiCloseCircleFill onClick={()=>setIsOpenUnderTheHoodStudies(false)} />
                    </div>}
                </div>
                <div className='gap-5'>
                <SignupForm setLoading={setLoading} />
                </div>
            </DialogPanel>
        </Dialog>

        <Dialog open={isOpenOnlinePresence} onClose={(val) => setIsOpenOnlinePresence(val)} static={true} >
            <DialogPanel className='flex flex-col gap-5 w-[80]'>
                {isLoading && <LinearBuffer />}
                <div>
                <div className='p-5'>
                    <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
                        Welcome to Nucleus talend cloud
                    </h2>
                    <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
                        Login to Nucleus if you can because we don&apos;t have a login flow
                        yet
                    </p>
                </div>
                </div>
                <div className='gap-5'>
                <SignupForm setLoading={setLoading} />
                </div>
            </DialogPanel>
        </Dialog>
    </div>
  )
}
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
export default RegisterDialog