"use client";
import React from "react";
import { AnimatedTooltip } from "./animated-tooltip";
const people = [
  {
    id: 1,
    name: "Retsepile Raymond Shao",
    designation: "Software Engineer",
    image:
      "/people/1.png",
  },
  {
    id: 2,
    name: "Tankiso Fuma",
    designation: "Software Engineer",
    image:
      "/people/2.png",
  },
  {
    id: 4,
    name: "Kamohelo Khosana",
    designation: "Product Manager",
    image:
      "/people/4.png",
  },
  {
    id: 5,
    name: "Batloung Masoabi",
    designation: "Software Engineer",
    image:
      "/people/5.png",
  },
  {
    id: 6,
    name: "Lemohang Makintane",
    designation: "Software Engineer",
    image:
      "/people/6.png",
  },
];

export function People() {
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}
