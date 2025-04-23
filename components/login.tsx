import { Dialog, DialogPanel } from "@tremor/react";
import React, { useState } from "react";
import { IconBrandGithub, IconBrandGoogle } from "@tabler/icons-react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { cn } from "@/app/utils/cn";
import axios from "axios";
import useStore from "@/app/Store";
import LinearBuffer from "./MUI_LoadBuffer";
import { nu_api_base_url } from "@/app/Contants";
import { AnimatedGradientButtom } from "./AnimatedGradient";

export function SignupForm({ setLoading }: { setLoading: any }) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const setLoginToken = useStore((state) => state.setLoginToken);
  const setUserID = useStore((state) => state.setUserID);
  const setUser = useStore((state) => state.setUser);
  const [error, setError] = useState<string>();
  error;

  async function login(email: any, password: any) {
    try {
      const res = await fetch(`${nu_api_base_url}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
        credentials: "include",
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Login failed");
      }

      // 🎉 Success: You can store the token, redirect, etc.
      console.log("Logged in:", data);
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  const handleLogin = () => {
    if (email && password) login(email, password);
  };

  return (
    <div className="max-w-md w-full mx-auto md:rounded-2xl p-4 md:p-8 shadow-input">
      <form className="my-8" onSubmit={handleSubmit}>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="retsepile@nucleusdevs.com"
            type="email"
            required
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="••••••••"
            type="password"
            required
          />
          <div className="w-full justify-center text-center text-xs text-red-600">
            {error && <>{error}</>}
          </div>
        </LabelInputContainer>
        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
          onClick={handleLogin}
        >
          Sign in test&rarr;
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
  const [isLoading, setLoading] = React.useState(false);

  const logout = () => {
    localStorage.removeItem("user");
    window.location.reload();
  };
  return (
    <div className="w-full">
      <div
        className="mx-auto block cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <AnimatedGradientButtom />
      </div>
      <Dialog open={isOpen} onClose={(val) => setIsOpen(val)} static={true}>
        <DialogPanel className="flex flex-col gap-5 w-[80]">
          {isLoading && <LinearBuffer />}
          <div>
            <div className="p-5">
              <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
                Sign in to your Nucleus dashboard
              </h2>
              <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300"></p>
            </div>
          </div>
          <div className="gap-5">
            {/* <SignupForm setLoading={setLoading} /> */}
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
