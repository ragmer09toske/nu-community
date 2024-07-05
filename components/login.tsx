import { Button, Dialog, DialogPanel } from '@tremor/react';
import React, { useEffect, useState } from 'react';

import {
  IconBrandGithub,
  IconBrandGoogle,
  IconBrandOnlyfans,
} from "@tabler/icons-react";
import { Label } from './ui/label';
import { Input } from './ui/input';
import { cn } from '@/app/utils/cn';
import axios from 'axios';
import useStore from "@/app/Store"

export function SignupForm() {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      console.log("Form submitted");
    };
    const [email,setEmail] = useState<string>("");
    const [password,setPassword] = useState<string>("");
    const setLoginToken = useStore((state) => state.setLoginToken)
    const setUserID = useStore((state) => state.setUserID)
    const setUser = useStore((state) => state.setUser)
    const UserDetails = useStore((state) => state.user)

    const userIDloggedIn = useStore((state) => state.userID)
    const loginToken = useStore((state) => state.loginToken)

    const userDetails = useStore((state) => state.user)

    async function makeUserObject() {
      try {
        const response = await axios.get(`http://localhost:8000/codiac/users/${userIDloggedIn}`, {
          headers: {
            Authorization: `Bearer ${loginToken}`,
          },
        });
        // const { name, number, email } = response.data;
        // console.log(name)
        setUser(response.data)
        console.log("user details from storage: ", UserDetails)
      } catch (error) {
        console.error('We ran into a prorblem');
      }
    }

    async function login(email:any, password:any) {
      try {
        const response = await axios.post('http://localhost:8000/codiac/auth/login', {
          email: email,
          password: password,
        });
        const { token, userID } = response.data;
        setUserID(userID)
        setLoginToken(token);
        makeUserObject();
      } catch (error) {
        console.error('We ran into a prorblem');
      }
    }

    const handleLogin = () => {
      login(email,password);
    }

    return (
      <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
        <form className="my-8" onSubmit={handleSubmit}>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" onChange={(e)=>{setEmail(e.target.value)}} placeholder="retsepile@nucleusdevs.com" type="email" />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="password">Password</Label>
            <Input id="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder="••••••••" type="password" />
          </LabelInputContainer>
          <button
            className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="submit"
            onClick={handleLogin}
          >
            Sign in &rarr;
            <BottomGradient />
          </button>
   
          <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
   
          <div className="flex flex-col space-y-4">
            <button
              className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
              type="submit"
            >
              <IconBrandGithub className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
              <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                GitHub
              </span>
              <BottomGradient />
            </button>
            <button
              className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
              type="submit"
            >
              <IconBrandGoogle className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
              <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                Google
              </span>
              <BottomGradient />
            </button>
            <button
              className="relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
              type="submit"
            >
              <span className="text-neutral-700  dark:text-neutral-300 text-sm">
                Register
              </span>
              <BottomGradient />
            </button>
          </div>
        </form>
      </div>
    );
  }
export function LoginDialog() {
  const [isOpen, setIsOpen] = React.useState(false);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  return (
    <div className='w-full'>
    <div className="mx-auto block cursor-pointer" onClick={() => setIsOpen(true)}>Sign in </div>
    <Dialog open={isOpen} onClose={(val) => setIsOpen(val)} static={true} >
      <DialogPanel className='flex flex-col gap-5 w-[80]'>
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
          <SignupForm />
          {/* <img
            src="/login.svg"
            width={430}
            height={10}
            alt="Float UI logo"
          /> */}
        </div>
      </DialogPanel>
    </Dialog>
    </div>
  );
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