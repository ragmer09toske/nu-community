"use client";
import React from "react";
import { ButtonsCard } from "../components/ui/tailwindcss-buttons";

export function ShimmerButton() {
  return (
    <div className="px-4 w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full  max-w-7xl mx-auto gap-10">
        {buttons.map((button, idx) => (
          <ButtonsCard key={idx} >
            {button.component}
          </ButtonsCard>
        ))}
      </div>
    </div>
  );
}

export const buttons = [
  {
    name: "Shimmer",
    description: "Shimmer button for your website",
    showDot: false,
    component: (
      <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        Register
      </button>
    ),
  },
];
