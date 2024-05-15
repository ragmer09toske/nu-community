"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./infinite-moving-cards";

export function InfiniteMovingCourses() {
  return (
    <div className="-ml-5">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    image: "/Thumbnail.png"
  },
  {
    image: "/me.png"
  },
  {
    image: "/Thumbnail.png"
  },
  {
    image: "/me.png"
  },
  {
    image: "/Thumbnail.png"
  },
];
