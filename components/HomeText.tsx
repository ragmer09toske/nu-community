import React from "react";
import { FlipWords } from "./flip-words";

export function HomeText() {
  const words = ["us", "by-us"];

  return (
    <div className="h-[40rem] flex justify-center items-center px-4">
      <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        This is
        <FlipWords words={words} /> <br />
        Welcome to Nucleusdevs.
      </div>
    </div>
  );
}
