"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./infinite-moving-cards";

export function InfiniteMovingCourses() {
  return (
    <div className="-ml-5 lg:-ml-64">
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
    image: "/Thumbnail.png",
    title: "Beginner Tutorial Based on Next.js"
  },
  {
    image: "/ray.png",
    title: "Indroduction to programming with Raymond"
  },
];
