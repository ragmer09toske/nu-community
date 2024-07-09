"use client";
import React from "react";
import { BackgroundBeams } from "./background-beams";

export function WebinarFooter() {
  return (
    <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col  antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Thank you for being part of our community
        </h1>
        <p></p>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
        Join our free live webinar, held once a week! The software engineering community is made up of selfless individuals who continuously contribute to the growth of others. In this spirit, we aim to provide powerful, free knowledge. Thank you for being part of this culture.
        </p>
        <input
          type="text"
          placeholder="hi@manuarora.in"
          className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700"
        />
      </div>
      <BackgroundBeams />
    </div>
  );
}
