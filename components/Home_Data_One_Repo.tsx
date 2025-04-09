"use client";

import { Spotlight } from "./Spotlight";
import { useEffect } from "react";
import { useTheme } from "next-themes";
import { Resizable } from "./home/Grid";
import { HyperTextDemo } from "./home/HyperText";

interface User {
  _id: string;
  name: string;
  number: number;
  email: string;
  password: string;
  __v: number;
}
export default function Home_Data_One_Repo() {
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    setTheme("dark");
  }, []);
  return (
    <div className="relative isolate px-6 pt-14 lg:px-8 h-full">
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-r from-slate-500 to-slate-300 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        ></div>
      </div>
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="relative">
        <section>
          <div className="flex justify-center p-5">
            <HyperTextDemo />
          </div>
          <div className="max-w-screen-xl mx-auto px-4 gap-5 text-gray-600 overflow-hidden md:px-8 md:flex">
            <div className="flex-none max-w-xl">
              <Resizable />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
