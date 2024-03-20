"use client";
import React, { useState, useRef, useEffect } from "react";
import { LayoutGrid } from "./ui/layout-grid";
import { Facebook, Instagram } from "lucide-react";

export function TheBox() {
  return (
    <div className="h-screen py-20 w-full">
      <LayoutGrid cards={cards} />
    </div>
  );
}

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Thulo Monare@TheBox</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      There would be nothing to out of if there wasn&apos;t a Box
      </p>
      <div className="flex gap-2">
        <Facebook />
        <Instagram />
      </div>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Thulo Monare@TheBox</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      There would be nothing to out of if there wasn&apos;t a Box
      </p>
      <div className="flex gap-2">
        <Facebook />
        <Instagram />
      </div>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Thulo Monare@TheBox</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      There would be nothing to out of if there wasn&apos;t a Box
      </p>
      <div className="flex gap-2">
        <Facebook />
        <Instagram />
      </div>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Thulo Monare@TheBox</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      There would be nothing to out of if there wasn&apos;t a Box
      </p>
      <div className="flex gap-2">
        <Facebook />
        <Instagram />
      </div>
    </div>
  );
};
const SkeletonFive = () => {
    return (
      <div>
        <p className="font-bold text-4xl text-white">Thulo Monare@TheBox</p>
        <p className="font-normal text-base text-white"></p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        @_boitumelosehlotho_setlaba a new day, a new beginning.
        </p>
        <div className="flex gap-2">
        <Facebook />
        <Instagram />
        </div>
      </div>
    );
  };

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail:
      "/theBox.jpg",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "md:col-span-2",
    thumbnail:
      "/theBox1.jpg",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail:
      "/theBox2.jpg",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail:
      "/theBox3.jpg",
  },
  {
    id: 5,
    content: <SkeletonFive />,
    className: "md:col-span-2",
    thumbnail:
      "/theBox4.jpg",
  },
];
